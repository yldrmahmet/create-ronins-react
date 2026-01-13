# 命令

选择你的包管理器。命令会根据不同的包管理器而变化。

## 启动开发服务器

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

打开 `http://localhost:5173`。更改会立即显示。

## 生产构建

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

创建 `dist/` 文件夹。将其上传到你的服务器。

::: details 为什么是 `bun run build` 而不是 `bun build`？

这是不同的命令：

| 命令 | 它做什么 |
|------|---------|
| `bun build` | 使用 Bun 的打包器 |
| `bun run build` | 运行 package.json 中的 "build" 脚本 |

我们使用 `bun run build` 因为它运行 **Vite 的打包器**。

**为什么用 Vite，而不是 Bun 的打包器？**
- Vite 有更多功能
- Vite 有更多插件
- Vite 与 React 一起测试了多年

**Bun 运行代码快。Vite 构建更好。**

:::

## 检查代码

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

运行所有检查：
- ESLint（查找 bug）
- Prettier（检查格式）
- TypeScript（检查类型）

## 查找 Bug（Lint）

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

自动修复 bug：

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

## 格式化代码

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

让代码看起来更漂亮。修复空格、引号等。

## 运行测试

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

运行测试。监视更改。

运行一次（用于 CI）：

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

## 移除演示内容

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

移除演示文件。给你一个干净的 "Hello World" 应用。

## 所有命令

| 命令 | 它做什么 |
|------|---------|
| `dev` | 启动开发服务器 |
| `build` | 生产构建 |
| `check` | 运行所有检查 |
| `lint` | 查找 bug |
| `format` | 美化代码 |
| `test` | 运行测试（监视） |
| `test:run` | 运行测试（一次） |
| `clean` | 移除演示文件 |
