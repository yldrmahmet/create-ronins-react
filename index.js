#!/usr/bin/env node

import { cpSync, existsSync, readFileSync, writeFileSync, readdirSync, rmSync } from "fs";
import { resolve, dirname, basename } from "path";
import { fileURLToPath } from "url";
import * as readline from "readline";

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseArgs(args) {
  const result = { projectName: null, clean: false };

  for (const arg of args) {
    if (arg === "--clean" || arg === "-c") {
      result.clean = true;
    } else if (!arg.startsWith("-")) {
      result.projectName = arg;
    }
  }

  return result;
}

function detectPackageManager() {
  const userAgent = process.env.npm_config_user_agent || "";

  if (userAgent.startsWith("yarn")) return "yarn";
  if (userAgent.startsWith("pnpm")) return "pnpm";
  if (userAgent.startsWith("bun")) return "bun";
  return "npm";
}

function getCommands(pm) {
  const commands = {
    npm: { install: "npm install", dev: "npm run dev", run: "npm run", x: "npx" },
    yarn: { install: "yarn", dev: "yarn dev", run: "yarn", x: "yarn dlx" },
    pnpm: { install: "pnpm install", dev: "pnpm dev", run: "pnpm", x: "pnpm dlx" },
    bun: { install: "bun install", dev: "bun dev", run: "bun", x: "bunx" },
  };
  return commands[pm];
}

function updateReadme(targetDir, pm) {
  const readmePath = resolve(targetDir, "README.md");
  if (!existsSync(readmePath)) return;

  const cmd = getCommands(pm);
  const runCmd = pm === "npm" ? "npm run" : pm;

  const readme = `# React App

## Tech Stack

| Category      | Tool                       |
|---------------|----------------------------|
| Build         | Vite 7 + SWC               |
| Framework     | React 19                   |
| Language      | TypeScript 5.9             |
| Styling       | Tailwind CSS 4             |
| UI Components | shadcn/ui                  |
| Routing       | React Router 7             |
| Server State  | TanStack Query 5           |
| Validation    | Zod 4                      |
| Linting       | ESLint 9                   |
| Formatting    | Prettier                   |
| Git Hooks     | Husky                      |
| Testing       | Vitest                     |

## Commands

\`\`\`bash
${runCmd} dev           # Development server (:5173)
${runCmd} build         # Production build
${runCmd} check         # Lint + format + typecheck
${runCmd} test          # Run tests
${runCmd} clean         # Remove demo content
\`\`\`

## Project Structure

\`\`\`text
src/
├── app/
│   ├── routes/          # Page components
│   ├── providers.tsx    # Global providers
│   └── router.tsx       # Router config
├── components/ui/       # shadcn/ui components
├── lib/utils.ts         # Utilities
├── main.tsx             # Entry point
└── index.css            # Tailwind
\`\`\`

## Adding Components

\`\`\`bash
${cmd.x} shadcn add button input dialog
\`\`\`
`;

  writeFileSync(readmePath, readme);
}

function cleanProject(targetDir) {
  const demoFiles = [
    "src/app/routes/stack.tsx",
    "public/ronins.svg",
  ];

  for (const file of demoFiles) {
    const filePath = resolve(targetDir, file);
    if (existsSync(filePath)) {
      rmSync(filePath);
    }
  }

  const minimalApp = `export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Hello World</h1>
    </main>
  );
}
`;
  writeFileSync(resolve(targetDir, "src/app/routes/app.tsx"), minimalApp);

  const minimalRouter = `import { createBrowserRouter } from "react-router";
import App from "./routes/app";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
`;
  writeFileSync(resolve(targetDir, "src/app/router.tsx"), minimalRouter);

  const indexPath = resolve(targetDir, "index.html");
  let indexHtml = readFileSync(indexPath, "utf-8");
  indexHtml = indexHtml.replace(/<title>.*<\/title>/, "<title>React App</title>");
  indexHtml = indexHtml.replace(/<link rel="icon"[^>]*>/, '<link rel="icon" href="/favicon.ico" />');
  writeFileSync(indexPath, indexHtml);
}

function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function getProjectName() {
  while (true) {
    const projectName = await prompt("Project name: ");

    if (!projectName) {
      console.error("Project name is required.\n");
      continue;
    }

    const isCurrentDir = projectName === ".";
    const targetDir = isCurrentDir ? process.cwd() : resolve(process.cwd(), projectName);

    if (!isCurrentDir && existsSync(targetDir)) {
      console.error(`Directory "${projectName}" already exists.\n`);
      continue;
    }

    if (isCurrentDir && readdirSync(targetDir).length > 0) {
      console.error("Current directory is not empty.\n");
      continue;
    }

    return projectName;
  }
}

async function main() {
  const currentDir = basename(process.cwd());
  const args = parseArgs(process.argv.slice(2));
  let projectName = args.projectName;

  if (!projectName) {
    projectName = await getProjectName();
  } else {
    const isCurrentDir = projectName === ".";
    const targetDir = isCurrentDir ? process.cwd() : resolve(process.cwd(), projectName);

    if (!isCurrentDir && existsSync(targetDir)) {
      console.error(`Error: Directory "${projectName}" already exists.`);
      process.exit(1);
    }

    if (isCurrentDir && readdirSync(targetDir).length > 0) {
      console.error("Error: Current directory is not empty.");
      process.exit(1);
    }
  }

  const isCurrentDir = projectName === ".";
  const targetDir = isCurrentDir ? process.cwd() : resolve(process.cwd(), projectName);
  const finalName = isCurrentDir ? currentDir : projectName;

  const templatePath = resolve(__dirname, "template");
  cpSync(templatePath, targetDir, { recursive: true });

  // Rename gitignore to .gitignore (npm excludes .gitignore from packages)
  const gitignorePath = resolve(targetDir, "gitignore");
  if (existsSync(gitignorePath)) {
    const fs = await import("fs/promises");
    await fs.rename(gitignorePath, resolve(targetDir, ".gitignore"));
  }

  const pkgPath = resolve(targetDir, "package.json");
  const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
  pkg.name = finalName;
  pkg.version = "0.0.1";
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

  const pm = detectPackageManager();
  const cmd = getCommands(pm);

  updateReadme(targetDir, pm);

  if (args.clean) {
    cleanProject(targetDir);
  }
  const modeText = args.clean ? " (clean)" : "";

  console.log(`
Done! Created ${finalName}${modeText}

  ${isCurrentDir ? "" : `cd ${projectName}\n  `}${cmd.install}
  ${cmd.dev}
`);
}

main();
