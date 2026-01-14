# CLI 选项

## 基本用法

::: code-group

```bash [npm]
npm create ronins-react@latest [名称] [选项]
```

```bash [bun]
bun create ronins-react@latest [名称] [选项]
```

```bash [pnpm]
pnpm create ronins-react@latest [名称] [选项]
```

```bash [yarn]
yarn create ronins-react@latest [名称] [选项]
```

:::

## 名称

应用的文件夹名称：

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

创建 `my-app/` 文件夹。

**没有名称？** 它会询问你。

## 使用当前文件夹

使用 `.` 在当前文件夹创建：

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
文件夹必须为空！
:::

## 选项

### `--clean` 或 `-c`

创建最小化应用。没有演示文件。

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

**移除：**
- `src/app/routes/stack.tsx`（演示页面）
- `public/ronins.png`（logo）

**创建：**
- 简单的 "Hello World" 应用

## 包管理器

CLI 知道你使用哪个包管理器：

| 你运行 | 它知道 |
|--------|-------|
| `npm create ronins-react@latest` | npm |
| `bun create ronins-react@latest` | bun |
| `pnpm create ronins-react@latest` | pnpm |
| `yarn create ronins-react@latest` | yarn |

README 和 CLAUDE.md 文件使用你的包管理器的命令。

## 错误

| 错误 | 为什么 |
|------|-------|
| "Directory exists" | 文件夹已存在。选择新名称。 |
| "Not empty" | 当前文件夹有文件。使用空文件夹。 |
