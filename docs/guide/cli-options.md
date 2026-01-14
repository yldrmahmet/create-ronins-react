# CLI Options

## Basic Use

::: code-group

```bash [npm]
npm create ronins-react@latest [name] [options]
```

```bash [bun]
bun create ronins-react@latest [name] [options]
```

```bash [pnpm]
pnpm create ronins-react@latest [name] [options]
```

```bash [yarn]
yarn create ronins-react@latest [name] [options]
```

:::

## Name

The folder name for your app:

::: code-group

```bash [npm]
npm create ronins-react@latest my-app
```

```bash [bun]
bun create ronins-react@latest my-app
```

```bash [pnpm]
pnpm create ronins-react@latest my-app
```

```bash [yarn]
yarn create ronins-react@latest my-app
```

:::

Creates `my-app/` folder.

**No name?** It will ask you.

## Use Current Folder

Use `.` to create in current folder:

::: code-group

```bash [npm]
mkdir my-app && cd my-app
npm create ronins-react@latest .
```

```bash [bun]
mkdir my-app && cd my-app
bun create ronins-react@latest .
```

```bash [pnpm]
mkdir my-app && cd my-app
pnpm create ronins-react@latest .
```

```bash [yarn]
mkdir my-app && cd my-app
yarn create ronins-react@latest .
```

:::

::: warning
Folder must be empty!
:::

## Options

### `--clean` or `-c`

Creates minimal app. No demo files.

::: code-group

```bash [npm]
npm create ronins-react@latest my-app --clean
```

```bash [bun]
bun create ronins-react@latest my-app --clean
```

```bash [pnpm]
pnpm create ronins-react@latest my-app --clean
```

```bash [yarn]
yarn create ronins-react@latest my-app --clean
```

:::

**Removes:**
- `src/app/routes/stack.tsx` (demo page)
- `public/ronins.png` (logo)

**Creates:**
- Simple "Hello World" app

## Package Manager

The CLI knows which package manager you use:

| You Run | It Knows |
|---------|----------|
| `npm create ronins-react@latest` | npm |
| `bun create ronins-react@latest` | bun |
| `pnpm create ronins-react@latest` | pnpm |
| `yarn create ronins-react@latest` | yarn |

README and CLAUDE.md files use your package manager's commands.

## Errors

| Error | Why |
|-------|-----|
| "Directory exists" | Folder already exists. Pick new name. |
| "Not empty" | Current folder has files. Use empty folder. |
