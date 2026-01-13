# Commands

Pick your package manager. Commands change for each one.

## Start Dev Server

::: code-group

```bash [npm]
npm run dev
```

```bash [bun]
bun dev
```

```bash [pnpm]
pnpm dev
```

```bash [yarn]
yarn dev
```

:::

Opens `http://localhost:5173`. Changes show instantly.

## Build for Production

::: code-group

```bash [npm]
npm run build
```

```bash [bun]
bun run build
```

```bash [pnpm]
pnpm build
```

```bash [yarn]
yarn build
```

:::

Creates `dist/` folder. Upload this to your server.

::: details Why `bun run build` not `bun build`?

These are different commands:

| Command | What It Does |
|---------|--------------|
| `bun build` | Uses Bun's bundler |
| `bun run build` | Runs the "build" script in package.json |

We use `bun run build` because it runs **Vite's bundler**.

**Why Vite, not Bun's bundler?**
- Vite has more features
- Vite has more plugins
- Vite is tested with React for years

**Bun is fast for running code. Vite is better for building.**

:::

## Check Code

::: code-group

```bash [npm]
npm run check
```

```bash [bun]
bun check
```

```bash [pnpm]
pnpm check
```

```bash [yarn]
yarn check
```

:::

Runs all checks:
- ESLint (find bugs)
- Prettier (check format)
- TypeScript (check types)

## Find Bugs (Lint)

::: code-group

```bash [npm]
npm run lint
```

```bash [bun]
bun lint
```

```bash [pnpm]
pnpm lint
```

```bash [yarn]
yarn lint
```

:::

Fix bugs automatically:

::: code-group

```bash [npm]
npm run lint -- --fix
```

```bash [bun]
bun lint --fix
```

```bash [pnpm]
pnpm lint --fix
```

```bash [yarn]
yarn lint --fix
```

:::

## Format Code

::: code-group

```bash [npm]
npm run format
```

```bash [bun]
bun format
```

```bash [pnpm]
pnpm format
```

```bash [yarn]
yarn format
```

:::

Makes code look nice. Fixes spacing, quotes, etc.

## Run Tests

::: code-group

```bash [npm]
npm test
```

```bash [bun]
bun test
```

```bash [pnpm]
pnpm test
```

```bash [yarn]
yarn test
```

:::

Runs tests. Watches for changes.

Run once (for CI):

::: code-group

```bash [npm]
npm run test:run
```

```bash [bun]
bun test:run
```

```bash [pnpm]
pnpm test:run
```

```bash [yarn]
yarn test:run
```

:::

## Remove Demo Content

::: code-group

```bash [npm]
npm run clean
```

```bash [bun]
bun clean
```

```bash [pnpm]
pnpm clean
```

```bash [yarn]
yarn clean
```

:::

Removes demo files. Gives you clean "Hello World" app.

## All Commands

| Command | What It Does |
|---------|--------------|
| `dev` | Start dev server |
| `build` | Build for production |
| `check` | Run all checks |
| `lint` | Find bugs |
| `format` | Make code pretty |
| `test` | Run tests (watch) |
| `test:run` | Run tests (once) |
| `clean` | Remove demo files |
