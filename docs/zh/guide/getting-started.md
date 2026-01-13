# 快速开始

## 创建你的应用

选择你的包管理器并运行：

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

在浏览器中打开 `http://localhost:5173`。完成！

## 精简模式

想要一个最小化的应用？没有演示页面？使用 `--clean`：

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

这将移除：
- 演示页面
- Logo 文件

你将获得一个简单的 "Hello World" 应用。

## 在当前文件夹创建

想要在当前文件夹创建？使用 `.`：

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
文件夹必须为空。
:::

## 下一步

- [项目结构](/zh/guide/project-structure) — 查看所有文件
- [命令](/zh/guide/commands) — 查看所有命令
- [添加组件](/zh/guide/adding-components) — 添加按钮、对话框等
