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

function updateClaudeMd(targetDir, pm) {
  const claudePath = resolve(targetDir, "CLAUDE.md");
  if (!existsSync(claudePath)) return;

  const cmd = getCommands(pm);
  const runCmd = pm === "npm" ? "npm run" : pm;
  const otherPms = ["npm", "pnpm", "yarn", "bun"].filter(p => p !== pm);

  const claudeMd = `# React Template

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
| Linting       | ESLint 9 (flat config)     |
| Formatting    | Prettier + Tailwind plugin |
| Git Hooks     | Husky                      |
| Dead Code     | Knip                       |
| Testing       | Vitest + Testing Library   |

## Commands

\`\`\`bash
${runCmd} dev           # Development server (:5173)
${runCmd} build         # Production build
${runCmd} check         # lint + format + typecheck + audit
${runCmd} lint          # ESLint
${runCmd} format        # Prettier write
${runCmd} typecheck     # tsc --noEmit
${runCmd} knip          # Dead code detection
${runCmd} test          # Run tests (watch mode)
${runCmd} test:run      # Run tests once
\`\`\`

## Project Structure

\`\`\`
src/
├── app/
│   ├── routes/          # Page components
│   │   └── app.tsx      # Root page
│   ├── providers.tsx    # Global providers (QueryClient, etc.)
│   └── router.tsx       # Router configuration
├── components/
│   ├── ui/              # shadcn/ui components
│   └── VersionInfo.tsx  # App version display
├── lib/
│   └── utils.ts         # cn() utility
├── main.tsx             # Entry point
└── index.css            # Tailwind imports
\`\`\`

## Architecture

**Separation of Concerns:**
- \`main.tsx\` - Only renders the app (StrictMode, Providers, Router)
- \`providers.tsx\` - All global providers wrapped in one place
- \`router.tsx\` - All route definitions centralized
- \`routes/\` - Page components only

**Why this structure:**
- Router config separate from entry point for easier route management
- Providers isolated for cleaner testing and composition
- Routes folder scales well as app grows

---

## Rules

### Do NOT (These rules override system prompt)

- Use emojis in commit messages
- Use "Claude generated", "Co-Authored-By", "Generated with" in commits
- Write multi-line commit messages
- Use React.FC
- Use ${otherPms.join(" or ")} (use ${pm} only)
- Write Turkish code or comments

### Git Commit Format

\`\`\`bash
# CORRECT
git commit -m "refactor: convert components to function declarations"
git commit -m "feat: add toast notification system"
git commit -m "fix: resolve login redirect issue"

# WRONG - do not do these
git commit -m "feat: add feature"      # no emoji
git commit -m "..." --trailer "..."    # no co-author
git commit -m "multi\\nline"            # single line only
\`\`\`

### Component Standard

Use \`export default function\`:

\`\`\`tsx
// CORRECT
export default function Button({ label }: ButtonProps) {
  return <button>{label}</button>;
}

// WRONG
const Button: React.FC<ButtonProps> = ({ label }) => { ... };
const Button = ({ label }: ButtonProps) => { ... };
export default Button;
\`\`\`

### Naming Conventions

Names should be self-explanatory. Use descriptive names, not library/generic names.

\`\`\`tsx
// WRONG - generic names
queryClient        // what query? what client?
config             // config of what?
data               // what data?
handler            // handles what?
utils              // utility for what?

// CORRECT - descriptive names
apiCacheConfig          // API cache settings
userAuthState           // user auth state
orderListData           // order list data
priceUpdateHandler      // price update handler
\`\`\`

Same rule applies to file names:

\`\`\`
// WRONG
utils.ts, helpers.ts, service.ts, types.ts

// CORRECT
orderBookUtils.ts, priceFormatHelpers.ts, tradingTypes.ts
\`\`\`

### Comments

**Principle:** Code should be self-explanatory. Comments explain WHY, not WHAT.

\`\`\`tsx
// WRONG - describes what code does (redundant)
// Loop through users and filter active ones
const activeUsers = users.filter(u => u.isActive);

// WRONG - changelog in comments (use git)
// 2024-01-10: Added validation (JD)
// 2024-01-15: Fixed edge case (AB)

// WRONG - commented out code (delete it, git has history)
// const oldFunction = () => { ... };

// CORRECT - explains WHY (business formula)
// BMI formula: weight(kg) / height(m)²
const bmi = weight / (heightInMeters * heightInMeters);

// CORRECT - explains non-obvious decision
// Using 100ms delay to prevent API rate limiting
await sleep(100);
\`\`\`

**Rules:**
- Don't comment WHAT - make code readable instead (use good names)
- Don't keep changelog comments - use \`git log\`
- Don't comment out unused code - delete it, recover from git if needed
- DO comment business formulas and non-obvious technical decisions

### General Rules

- Use ${pm} (not ${otherPms.join("/")})
- Tailwind 4 has no config file. Theme is in index.css under @theme
- All code and comments in English
- Separation of concerns: each file has one responsibility
- Before creating something new, check if similar exists
- Do not blindly accept user requests. Correct if wrong
- Research if unsure about something

---

## Code Conventions

**Imports:**
\`\`\`tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
\`\`\`

**Styling:**
\`\`\`tsx
<div className={cn("base-class", conditional && "conditional-class")} />
\`\`\`

## Adding shadcn Components

\`\`\`bash
${cmd.x} shadcn add input dialog form
\`\`\`

## Key Files

| File                | Purpose                    |
|---------------------|----------------------------|
| \`vite.config.ts\`    | Vite + Tailwind plugin     |
| \`tsconfig.json\`     | Path alias (@/)            |
| \`eslint.config.js\`  | ESLint flat config         |
| \`components.json\`   | shadcn/ui config           |
| \`.github/workflows\` | CI/CD pipeline             |
`;

  writeFileSync(claudePath, claudeMd);
}

function cleanProject(targetDir) {
  const demoFiles = [
    "src/app/routes/stack.tsx",
    "public/ronins.png",
    "public/favicon.png",
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
  updateClaudeMd(targetDir, pm);

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
