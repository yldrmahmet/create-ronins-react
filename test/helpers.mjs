import { spawnSync } from "node:child_process";
import { chmodSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const CLI_PATH = join(dirname(fileURLToPath(import.meta.url)), "..", "index.js");

// The sandbox replaces PATH and HOME entirely, so the CLI can only see the fake
// package managers a test installs. Real bun/pnpm/npm/yarn stay untouchable.
export function createSandbox() {
  const root = mkdtempSync(join(tmpdir(), "ronins-cli-test-"));
  const binDir = join(root, "bin");
  const homeDir = join(root, "home");
  const workDir = join(root, "work");
  // Holds executables that exist but are not reachable yet, so a stubbed
  // installer can move them into place mid-run.
  const stagingDir = join(root, "staging");
  for (const dir of [binDir, homeDir, workDir, stagingDir]) mkdirSync(dir, { recursive: true });

  // Shell pipelines in install commands look up `sh` through PATH.
  symlinkSync("/bin/sh", join(binDir, "sh"));

  return {
    root,
    binDir,
    homeDir,
    workDir,
    stagingDir,
    logPath: join(root, "calls.log"),
    cleanup: () => rmSync(root, { recursive: true, force: true }),
  };
}

export function writeStub(sandbox, name, body, { dir = sandbox.binDir } = {}) {
  const stubPath = join(dir, name);
  writeFileSync(
    stubPath,
    `#!${process.execPath}\n` +
      `import { appendFileSync, chmodSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";\n` +
      `import { join } from "node:path";\n` +
      `const args = process.argv.slice(2);\n` +
      `const name = ${JSON.stringify(name)};\n` +
      `const logPath = ${JSON.stringify(sandbox.logPath)};\n` +
      `const binDir = ${JSON.stringify(sandbox.binDir)};\n` +
      `const homeDir = ${JSON.stringify(sandbox.homeDir)};\n` +
      `appendFileSync(logPath, name + " " + args.join(" ") + "\\n");\n` +
      body,
  );
  chmodSync(stubPath, 0o755);
  return stubPath;
}

// A stub that behaves like a working package manager: reports a version and
// scaffolds a project directory the way create-vite would.
export function writePackageManagerStub(sandbox, name, { version = "1.0.0", dir } = {}) {
  return writeStub(
    sandbox,
    name,
    `if (args[0] === "--version") { console.log(${JSON.stringify(version)}); process.exit(0); }\n` +
      `const createIndex = args.indexOf("create");\n` +
      `if (createIndex === -1) process.exit(0);\n` +
      `const target = args.filter((a) => !a.startsWith("-"))[2];\n` +
      `if (!target) process.exit(1);\n` +
      `const overwrite = args.includes("--overwrite");\n` +
      // create-vite ignores .git when deciding whether a directory is empty
      `const existing = existsSync(target) ? readdirSync(target).filter((e) => e !== ".git") : [];\n` +
      `if (existing.length > 0 && !overwrite) {\n` +
      `  console.log("Operation cancelled");\n` +
      `  process.exit(0);\n` +
      `}\n` +
      `if (overwrite) for (const entry of existing) rmSync(join(target, entry), { recursive: true, force: true });\n` +
      // Mirrors the react-ts template closely enough to test the cleanup step
      `mkdirSync(join(target, "src", "assets"), { recursive: true });\n` +
      `mkdirSync(join(target, "public"), { recursive: true });\n` +
      `writeFileSync(join(target, "package.json"), JSON.stringify({ name: target }, null, 2));\n` +
      `writeFileSync(join(target, "index.html"), '<!doctype html>\\n<html>\\n  <head>\\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />\\n    <title>' + target + '</title>\\n  </head>\\n</html>\\n');\n` +
      `writeFileSync(join(target, "src", "App.tsx"), "import './App.css'\\nfunction App() { return <div>demo</div> }\\nexport default App\\n");\n` +
      `writeFileSync(join(target, "src", "App.css"), ".logo { padding: 2em }\\n");\n` +
      `writeFileSync(join(target, "src", "index.css"), ":root { --accent: #aa3bff }\\n");\n` +
      `writeFileSync(join(target, "src", "main.tsx"), "import './index.css'\\n");\n` +
      `writeFileSync(join(target, "src", "assets", "react.svg"), "<svg/>");\n` +
      `writeFileSync(join(target, "public", "favicon.svg"), "<svg/>");\n` +
      `writeFileSync(join(target, "public", "icons.svg"), "<svg/>");\n`,
    { dir },
  );
}

export function runCli(sandbox, args, { input = "", cwd = sandbox.workDir } = {}) {
  const result = spawnSync(process.execPath, [CLI_PATH, ...args], {
    cwd,
    input,
    encoding: "utf8",
    env: { ...process.env, PATH: sandbox.binDir, HOME: sandbox.homeDir, PNPM_HOME: "" },
  });
  return {
    status: result.status,
    stdout: stripAnsi(result.stdout ?? ""),
    stderr: stripAnsi(result.stderr ?? ""),
    get output() {
      return stripAnsi((result.stdout ?? "") + (result.stderr ?? ""));
    },
  };
}

// Simulates an installer: the executable already exists in staging and only
// becomes reachable once the install command copies it into place.
export function writeInstallerStub(sandbox, name, { installs, destination, version = "1.0.0", exitCode = 0 }) {
  const staged = writePackageManagerStub(sandbox, installs, { version, dir: sandbox.stagingDir });
  return writeStub(
    sandbox,
    name,
    `if (args[0] === "--version") { console.log(${JSON.stringify(version)}); process.exit(0); }\n` +
      `const exitCode = ${exitCode};\n` +
      `if (exitCode === 0) {\n` +
      `  const target = ${JSON.stringify(destination)};\n` +
      `  mkdirSync(${JSON.stringify(destination.replace(/\/[^/]+$/, ""))}, { recursive: true });\n` +
      `  writeFileSync(target, readFileSync(${JSON.stringify(staged)}));\n` +
      `  chmodSync(target, 0o755);\n` +
      `}\n` +
      `process.exit(exitCode);\n`,
  );
}

export function readCalls(sandbox) {
  try {
    return readFileSync(sandbox.logPath, "utf8").trim().split("\n").filter(Boolean);
  } catch {
    return [];
  }
}

function stripAnsi(text) {
  return text.replace(/\u001B\[[0-9;?]*[a-zA-Z]/g, "");
}
