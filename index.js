#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { styleText } from "node:util";
import * as p from "@clack/prompts";

const isWindows = process.platform === "win32";

// Commands verified against vite.dev/guide (create-vite 9.x)
const VITE_TEMPLATE = "react-ts";

const PACKAGE_MANAGERS = [
  {
    name: "bun",
    createVite: (name) => ["bun", "create", "vite", name, "--template", VITE_TEMPLATE, "--no-interactive"],
    // Official install methods: bun.com/docs/installation
    installCommand: "npm install -g bun",
    // Searched when a fresh install has not reached PATH yet
    knownBinDirs: [join(homedir(), ".bun")],
  },
  {
    name: "pnpm",
    createVite: (name) => ["pnpm", "create", "vite", name, "--template", VITE_TEMPLATE, "--no-interactive"],
    // Official install methods: pnpm.io/installation
    installCommand: isWindows
      ? "npx get-pnpm"
      : "curl -fsSL https://get.pnpm.io/install.sh | sh -",
    knownBinDirs: [
      process.env.PNPM_HOME,
      join(homedir(), "Library", "pnpm"),
      join(homedir(), ".local", "share", "pnpm"),
      join(homedir(), "AppData", "Local", "pnpm"),
    ].filter(Boolean),
  },
  {
    name: "npm",
    createVite: (name) => ["npm", "create", "vite@latest", name, "--yes", "--", "--template", VITE_TEMPLATE, "--no-interactive"],
    installCommand: null, // ships with Node.js
    knownBinDirs: [],
  },
  {
    name: "yarn",
    createVite: (name) => ["yarn", "create", "vite", name, "--template", VITE_TEMPLATE, "--no-interactive"],
    // Official install method: yarnpkg.com/getting-started/install (Corepack)
    installCommand: "npm install -g corepack && corepack enable yarn",
    knownBinDirs: [],
  },
];

function detectVersion(binary) {
  const result = spawnSync(binary, ["--version"], {
    shell: isWindows,
    encoding: "utf8",
  });
  if (result.status !== 0) return null;
  return result.stdout.trim().split("\n")[0];
}

function detect(pm) {
  const version = detectVersion(pm.name);
  if (version) return { binary: pm.name, version };

  const executable = isWindows ? `${pm.name}.exe` : pm.name;
  for (const dir of pm.knownBinDirs) {
    // Installers disagree on whether the binary sits in the directory itself
    // or in a bin/ inside it, so try both.
    for (const candidate of [join(dir, executable), join(dir, "bin", executable)]) {
      if (!existsSync(candidate)) continue;
      const candidateVersion = detectVersion(candidate);
      if (candidateVersion) return { binary: candidate, version: candidateVersion };
    }
  }
  return null;
}

function runShell(command) {
  return spawnSync(command, { shell: true, stdio: "inherit" }).status === 0;
}

function exitCancelled() {
  p.cancel("Cancelled.");
  process.exit(1);
}

async function selectPackageManager(preselected, assumeYes) {
  const detections = PACKAGE_MANAGERS.map((pm) => ({ pm, found: detect(pm) }));

  let choice = preselected;
  if (!choice) {
    choice = await p.select({
      message: "Which package manager do you want to use?",
      // Status lives in the label (not `hint`) so every option shows it at once —
      // clack renders hints only for the focused option.
      options: detections.map(({ pm, found }) => ({
        value: pm.name,
        label: `${pm.name.padEnd(5)} ${
          found
            ? styleText("green", `installed v${found.version}`)
            : styleText("yellow", "not installed")
        }`,
      })),
    });
    if (p.isCancel(choice)) exitCancelled();
  }

  const selected = detections.find((d) => d.pm.name === choice);
  if (!selected) {
    p.log.error(`Unknown package manager: ${choice}`);
    process.exit(1);
  }
  if (selected.found) return selected;

  if (!selected.pm.installCommand) {
    p.log.error(`${selected.pm.name} was not found. It ships with Node.js — check your Node installation.`);
    process.exit(1);
  }

  if (!assumeYes) {
    const install = await p.confirm({
      message: `${selected.pm.name} is not installed. Install it now with: ${selected.pm.installCommand}`,
    });
    if (p.isCancel(install) || !install) exitCancelled();
  }

  const spin = p.spinner();
  spin.start(`Installing ${selected.pm.name}...`);
  const ok = runShell(selected.pm.installCommand);
  spin.stop(ok ? `${selected.pm.name} installed` : `${selected.pm.name} installation failed`);
  if (!ok) process.exit(1);

  const found = detect(selected.pm);
  if (!found) {
    p.log.warn(
      `${selected.pm.name} was installed but is not on your PATH yet. Restart your terminal and run this command again.`,
    );
    process.exit(1);
  }
  if (found.binary !== selected.pm.name) {
    p.log.info(`Using ${found.binary} for this run. Restart your terminal to get "${selected.pm.name}" on your PATH.`);
  }
  return { pm: selected.pm, found };
}

function scaffoldVite({ pm, found }, projectDir, projectName, overwrite) {
  const [, ...args] = pm.createVite(projectName);
  if (overwrite) args.push("--overwrite");
  p.log.step(`Creating Vite project with: ${pm.name} ${args.join(" ")}`);
  const result = spawnSync(found.binary, args, { shell: isWindows, stdio: "inherit" });
  // create-vite exits 0 even when it cancels (non-empty target directory),
  // so the generated package.json is the only reliable success signal.
  if (result.status !== 0 || !existsSync(join(projectDir, "package.json"))) {
    p.log.error(`Vite scaffolding failed. "${projectName}" was not created.`);
    process.exit(1);
  }
}

export function parseArgs(argv) {
  const options = { projectName: undefined, packageManager: undefined, assumeYes: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--pm") {
      options.packageManager = argv[++i];
    } else if (arg === "--yes" || arg === "-y") {
      options.assumeYes = true;
    } else if (arg.startsWith("-")) {
      throw new Error(`Unknown option: ${arg}`);
    } else if (options.projectName === undefined) {
      options.projectName = arg;
    }
  }
  if (options.packageManager === undefined && argv.includes("--pm")) {
    throw new Error("--pm requires a package manager name");
  }
  return options;
}

// Everything create-vite ships purely to demo itself.
const DEMO_FILES = ["src/App.css", "src/assets", "public/icons.svg", "public/favicon.svg"];

function blankSlate(projectDir, projectName) {
  p.log.step("Removing the Vite demo page");

  for (const relativePath of DEMO_FILES) {
    rmSync(join(projectDir, relativePath), { recursive: true, force: true });
  }

  writeFileSync(
    join(projectDir, "src", "App.tsx"),
    `export default function App() {\n  return <h1>${projectName}</h1>\n}\n`,
  );
  // Left empty on purpose: this is where the styling step writes its import.
  writeFileSync(join(projectDir, "src", "index.css"), "");

  const indexHtmlPath = join(projectDir, "index.html");
  const withoutFavicon = readFileSync(indexHtmlPath, "utf8").replace(/^[ \t]*<link rel="icon"[^\n]*\n/m, "");
  writeFileSync(indexHtmlPath, withoutFavicon);
}

async function main() {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  p.intro("create-ronins-react");

  let projectName = options.projectName;
  if (!projectName) {
    projectName = await p.text({
      message: "Project name:",
      placeholder: "my-app",
      validate: (value) => {
        if (!value) return "Project name is required";
        if (!/^[a-z0-9-_.]+$/i.test(value)) return "Use letters, numbers, dashes and underscores only";
      },
    });
    if (p.isCancel(projectName)) exitCancelled();
  }

  const projectDir = resolve(process.cwd(), projectName);
  let overwrite = false;
  if (existsSync(projectDir) && readdirSync(projectDir).some((entry) => entry !== ".git")) {
    if (!options.assumeYes) {
      const answer = await p.confirm({
        message: `"${projectName}" already exists and is not empty. Delete its contents and continue?`,
        initialValue: false,
      });
      if (p.isCancel(answer) || !answer) exitCancelled();
    }
    overwrite = true;
  }

  const selection = await selectPackageManager(options.packageManager, options.assumeYes);
  scaffoldVite(selection, projectDir, projectName, overwrite);
  blankSlate(projectDir, projectName);

  p.outro(`Done! "${projectName}" is ready with a blank page.`);
}

if (import.meta.main) main();
