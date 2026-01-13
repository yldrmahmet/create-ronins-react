# CLI Options

## Basic Use

```bash
npm create ronins-react@latest [name] [options]
```

## Name

The folder name for your app:

```bash
npm create ronins-react@latest my-app
```

Creates `my-app/` folder.

**No name?** It will ask you.

## Use Current Folder

Use `.` to create in current folder:

```bash
mkdir my-app
cd my-app
npm create ronins-react@latest .
```

::: warning
Folder must be empty!
:::

## Options

### `--clean` or `-c`

Creates minimal app. No demo files.

```bash
npm create ronins-react@latest my-app --clean
```

**Removes:**
- `src/app/routes/stack.tsx` (demo page)
- `public/ronins.svg` (logo)

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

README file uses your package manager's commands.

## Examples

**npm:**
```bash
npm create ronins-react@latest my-app
```

**bun with clean mode:**
```bash
bun create ronins-react@latest my-app --clean
```

**In current folder:**
```bash
pnpm create ronins-react@latest .
```

## Errors

| Error | Why |
|-------|-----|
| "Directory exists" | Folder already exists. Pick new name. |
| "Not empty" | Current folder has files. Use empty folder. |
