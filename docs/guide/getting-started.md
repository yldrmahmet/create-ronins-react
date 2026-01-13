# Getting Started

## Create Your App

Pick your package manager and run:

::: code-group

```bash [npm]
npm create ronins-react@latest my-app
cd my-app
npm install
npm run dev
```

```bash [bun]
bun create ronins-react@latest my-app
cd my-app
bun install
bun dev
```

```bash [pnpm]
pnpm create ronins-react@latest my-app
cd my-app
pnpm install
pnpm dev
```

```bash [yarn]
yarn create ronins-react@latest my-app
cd my-app
yarn
yarn dev
```

:::

Open `http://localhost:5173` in your browser. Done!

## Clean Mode

Want a minimal app? No demo pages? Use `--clean`:

```bash
npm create ronins-react@latest my-app --clean
```

This removes:
- Demo pages
- Logo file

You get a simple "Hello World" app.

## Use Current Folder

Want to create in the folder you are in? Use `.`:

```bash
mkdir my-app
cd my-app
npm create ronins-react@latest .
```

::: warning
The folder must be empty.
:::

## What's Next?

- [Project Structure](/guide/project-structure) — See all files
- [Commands](/guide/commands) — See all commands
- [Add Components](/guide/adding-components) — Add buttons, dialogs, etc.
