import assert from "node:assert/strict";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { afterEach, beforeEach, describe, test } from "node:test";
import {
  createSandbox,
  readCalls,
  runCli,
  writeInstallerStub,
  writePackageManagerStub,
  writeStub,
} from "./helpers.mjs";

let sandbox;

beforeEach(() => {
  sandbox = createSandbox();
});

afterEach(() => {
  sandbox.cleanup();
});

function projectExists(name) {
  return existsSync(join(sandbox.workDir, name, "package.json"));
}

describe("package manager already installed", () => {
  for (const pm of ["bun", "pnpm", "npm", "yarn"]) {
    test(`${pm}: scaffolds the project and reports success`, () => {
      writePackageManagerStub(sandbox, pm, { version: "9.9.9" });

      const result = runCli(sandbox, ["my-app", "--pm", pm]);

      assert.equal(result.status, 0, result.output);
      assert.ok(projectExists("my-app"), "project directory was not created");
      assert.match(result.output, /Done!/);
    });
  }

  test("passes the react-ts template and non-interactive flag to create-vite", () => {
    writePackageManagerStub(sandbox, "bun");

    runCli(sandbox, ["my-app", "--pm", "bun"]);

    const createCall = readCalls(sandbox).find((call) => call.includes("create"));
    assert.equal(createCall, "bun create vite my-app --template react-ts --no-interactive");
  });

  test("npm needs the extra -- separator and --yes for npx", () => {
    writePackageManagerStub(sandbox, "npm");

    runCli(sandbox, ["my-app", "--pm", "npm"]);

    const createCall = readCalls(sandbox).find((call) => call.includes("create"));
    assert.equal(
      createCall,
      "npm create vite@latest my-app --yes -- --template react-ts --no-interactive",
    );
  });

  test("probes every package manager once so the menu can show their status", () => {
    for (const pm of ["bun", "pnpm", "npm", "yarn"]) writePackageManagerStub(sandbox, pm);

    const result = runCli(sandbox, ["my-app", "--pm", "bun"]);

    assert.equal(result.status, 0, result.output);
    assert.deepEqual(
      readCalls(sandbox)
        .filter((call) => call.endsWith("--version"))
        .sort(),
      ["bun --version", "npm --version", "pnpm --version", "yarn --version"],
    );
  });
});

describe("package manager missing", () => {
  test("declining the install offer cancels without touching anything", () => {
    // No stub for pnpm: it is missing. npm exists so the install command could run.
    writePackageManagerStub(sandbox, "npm");

    const result = runCli(sandbox, ["my-app", "--pm", "pnpm"], { input: "n" });

    assert.equal(result.status, 1);
    assert.match(result.output, /Cancelled/);
    assert.ok(!projectExists("my-app"));
    assert.ok(!readCalls(sandbox).some((call) => call.includes("create")));
  });

  test("accepting the offer installs it and continues with the scaffold", () => {
    // Installing bun runs `npm install -g bun`, so the npm stub is what puts
    // the bun executable on PATH.
    writeInstallerStub(sandbox, "npm", { installs: "bun", destination: join(sandbox.binDir, "bun") });

    const result = runCli(sandbox, ["my-app", "--pm", "bun"], { input: "y" });

    assert.equal(result.status, 0, result.output);
    assert.ok(readCalls(sandbox).includes("npm install -g bun"), "install command did not run");
    assert.ok(projectExists("my-app"), "project was not scaffolded after installing");
  });

  test("a failing install stops before scaffolding", () => {
    writeInstallerStub(sandbox, "npm", {
      installs: "bun",
      destination: join(sandbox.binDir, "bun"),
      exitCode: 1,
    });

    const result = runCli(sandbox, ["my-app", "--pm", "bun"], { input: "y" });

    assert.equal(result.status, 1);
    assert.match(result.output, /installation failed/);
    assert.ok(!projectExists("my-app"));
  });

  test("an install that lands outside PATH is still used through its known location", () => {
    // pnpm's installer writes to ~/Library/pnpm, which does not reach PATH until
    // the user opens a new shell. The CLI must fall back to that absolute path.
    // `curl | sh` is the install command, so the curl stub plays the installer
    // and prints a no-op script for the shell to run.
    writeInstallerStub(sandbox, "curl", {
      installs: "pnpm",
      destination: join(sandbox.homeDir, "Library", "pnpm", "pnpm"),
      version: "11.1.1",
    });

    const result = runCli(sandbox, ["my-app", "--pm", "pnpm"], { input: "y" });

    assert.equal(result.status, 0, result.output);
    assert.match(result.output, /Using .*Library\/pnpm\/pnpm/);
    assert.ok(projectExists("my-app"));
  });

  test("finds an install that landed in a bin/ subdirectory", () => {
    // The Linux pnpm installer puts the binary in ~/.local/share/pnpm/bin,
    // while macOS installs have it one level up. Both must be found.
    writeInstallerStub(sandbox, "curl", {
      installs: "pnpm",
      destination: join(sandbox.homeDir, ".local", "share", "pnpm", "bin", "pnpm"),
      version: "11.22.0",
    });

    const result = runCli(sandbox, ["my-app", "--pm", "pnpm"], { input: "y" });

    assert.equal(result.status, 0, result.output);
    assert.ok(projectExists("my-app"));
  });

  test("an install that leaves nothing behind asks the user to restart the shell", () => {
    writeStub(
      sandbox,
      "npm",
      `if (args[0] === "--version") { console.log("11.0.0"); process.exit(0); }\n` + `process.exit(0);\n`,
    );

    const result = runCli(sandbox, ["my-app", "--pm", "bun"], { input: "y" });

    assert.equal(result.status, 1);
    assert.match(result.output, /Restart your terminal/);
  });
});

describe("target directory", () => {
  test("refuses to touch a non-empty directory when the user says no", () => {
    writePackageManagerStub(sandbox, "bun");
    const existing = join(sandbox.workDir, "my-app");
    mkdirSync(existing, { recursive: true });
    writeFileSync(join(existing, "important.txt"), "keep me");

    const result = runCli(sandbox, ["my-app", "--pm", "bun"], { input: "n" });

    assert.equal(result.status, 1);
    assert.ok(existsSync(join(existing, "important.txt")), "existing file was deleted");
    assert.ok(!readCalls(sandbox).some((call) => call.includes("create")));
  });

  test("passes --overwrite when the user confirms", () => {
    writePackageManagerStub(sandbox, "bun");
    const existing = join(sandbox.workDir, "my-app");
    mkdirSync(existing, { recursive: true });
    writeFileSync(join(existing, "important.txt"), "delete me");

    const result = runCli(sandbox, ["my-app", "--pm", "bun", "--yes"]);

    assert.equal(result.status, 0, result.output);
    const createCall = readCalls(sandbox).find((call) => call.includes("create"));
    assert.match(createCall, /--overwrite$/);
    assert.ok(!existsSync(join(existing, "important.txt")), "old file should be gone");
  });

  test("a directory holding only .git counts as empty", () => {
    writePackageManagerStub(sandbox, "bun");
    mkdirSync(join(sandbox.workDir, "my-app", ".git"), { recursive: true });

    const result = runCli(sandbox, ["my-app", "--pm", "bun"]);

    assert.equal(result.status, 0, result.output);
    const createCall = readCalls(sandbox).find((call) => call.includes("create"));
    assert.ok(!createCall.includes("--overwrite"));
  });
});

describe("blank slate", () => {
  function readProjectFile(...segments) {
    return readFileSync(join(sandbox.workDir, "my-app", ...segments), "utf8");
  }

  test("deletes every demo file the template ships with", () => {
    writePackageManagerStub(sandbox, "bun");

    runCli(sandbox, ["my-app", "--pm", "bun"]);

    for (const removed of ["src/App.css", "src/assets", "public/icons.svg", "public/favicon.svg"]) {
      assert.ok(!existsSync(join(sandbox.workDir, "my-app", removed)), `${removed} should be gone`);
    }
  });

  test("replaces the demo component with a blank page named after the project", () => {
    writePackageManagerStub(sandbox, "bun");

    runCli(sandbox, ["my-app", "--pm", "bun"]);

    const app = readProjectFile("src", "App.tsx");
    assert.match(app, /export default function App\(\)/);
    assert.match(app, /<h1>my-app<\/h1>/);
    assert.doesNotMatch(app, /App\.css/);
  });

  test("empties the stylesheet without deleting it", () => {
    writePackageManagerStub(sandbox, "bun");

    runCli(sandbox, ["my-app", "--pm", "bun"]);

    // main.tsx still imports it, so the file has to exist
    assert.equal(readProjectFile("src", "index.css"), "");
    assert.ok(existsSync(join(sandbox.workDir, "my-app", "src", "main.tsx")));
  });

  test("drops the favicon link so nothing points at a deleted file", () => {
    writePackageManagerStub(sandbox, "bun");

    runCli(sandbox, ["my-app", "--pm", "bun"]);

    const html = readProjectFile("index.html");
    assert.doesNotMatch(html, /rel="icon"/);
    assert.match(html, /<title>my-app<\/title>/);
  });
});

describe("failure reporting", () => {
  test("treats a silent create-vite cancel as a failure", () => {
    // create-vite exits 0 when it cancels, so success must be proven by output.
    writeStub(
      sandbox,
      "bun",
      `if (args[0] === "--version") { console.log("1.3.0"); process.exit(0); }\n` +
        `console.log("Operation cancelled");\n` +
        `process.exit(0);\n`,
    );

    const result = runCli(sandbox, ["my-app", "--pm", "bun"]);

    assert.equal(result.status, 1);
    assert.match(result.output, /was not created/);
    assert.doesNotMatch(result.output, /Done!/);
  });

  test("rejects an unknown package manager", () => {
    const result = runCli(sandbox, ["my-app", "--pm", "cargo"]);

    assert.equal(result.status, 1);
    assert.match(result.output, /Unknown package manager/);
  });
});

describe("argument parsing", () => {
  test("keeps the project name when --pm comes after it", () => {
    writePackageManagerStub(sandbox, "bun");

    runCli(sandbox, ["my-app", "--pm", "bun"]);

    const createCall = readCalls(sandbox).find((call) => call.includes("create"));
    assert.match(createCall, /vite my-app /);
  });

  test("keeps the project name when --pm comes before it", () => {
    writePackageManagerStub(sandbox, "bun");

    runCli(sandbox, ["--pm", "bun", "my-app"]);

    const createCall = readCalls(sandbox).find((call) => call.includes("create"));
    assert.match(createCall, /vite my-app /);
  });

  test("rejects unknown options instead of ignoring them", () => {
    const result = runCli(sandbox, ["my-app", "--pm", "bun", "--turbo"]);

    assert.equal(result.status, 1);
    assert.match(result.output, /Unknown option: --turbo/);
  });
});
