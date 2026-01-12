# create-ronins-react

[![npm version](https://img.shields.io/npm/v/create-ronins-react.svg)](https://www.npmjs.com/package/create-ronins-react)

Scaffold a modern React project with Vite, TypeScript, Tailwind CSS, and shadcn/ui.

## Usage

```bash
npm create ronins-react@latest
# or
yarn create ronins-react
# or
pnpm create ronins-react
# or
bun create ronins-react
```

You can also pass the project name directly:

```bash
npm create ronins-react my-app
npm create ronins-react todo-app
npm create ronins-react portfolio
npm create ronins-react dashboard
```

Use `.` to scaffold in the current directory:

```bash
mkdir my-app && cd my-app
npm create ronins-react .
```

Then install dependencies and start:

```bash
cd my-app
npm install
npm run dev
```

## What's Included

| Category      | Tool                     |
| ------------- | ------------------------ |
| Build         | Vite 7 + SWC             |
| Framework     | React 19                 |
| Language      | TypeScript 5.9           |
| Styling       | Tailwind CSS 4           |
| UI            | shadcn/ui                |
| Routing       | React Router 7           |
| State         | TanStack Query 5         |
| Validation    | Zod 4                    |
| Linting       | ESLint 9                 |
| Formatting    | Prettier                 |
| Testing       | Vitest                   |
| Git Hooks     | Husky                    |

## Commands

```bash
npm run dev     # Start dev server
npm run build   # Build for production
npm run check   # Lint + format + typecheck
npm test        # Run tests
```

## Adding shadcn Components

```bash
npx shadcn add button dialog form
```

## License

MIT
