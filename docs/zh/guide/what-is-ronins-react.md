# 什么是 Ronins React？

Ronins React 是一个工具。它为你创建 React 应用。所有工具都已准备就绪。你只需编写代码。

## 问题

JavaScript 有太多工具。每周都有新工具出现。很难选择。

**一些数据：**

- npm 有**300 万个包**
- 大多数包已过时或不安全
- React 仍然是**第一** — 40% 的开发者使用它
- 1100 万个网站使用 React

问题不在于 React。问题是：**与 React 一起使用哪些工具？**

## 为什么不用其他选择？

### 为什么不用 `npm create vite`？

Vite 很棒。但它只给你 **Vite + React**。

你仍然需要添加：
- Tailwind CSS（样式）
- React Router（页面）
- TanStack Query（API 调用）
- ESLint（查找 bug）
- Prettier（格式化代码）
- Husky（git 检查）
- shadcn/ui（按钮、对话框）

这需要**数小时**。使用 Ronins React，只需要 **30 秒**。

### 为什么不用 Next.js？

Next.js 是一个大型框架。它有：
- Server Components
- App Router
- Server Actions
- 许多复杂的功能

**Next.js 适合：** 需要 SEO（Google 排名）的网站。

**但许多应用不需要这些：**
- 管理仪表板
- 内部工具
- 单页应用（SPA）

对于这些，Next.js **太复杂了**。Ronins React 更简单。

### 为什么不用 TanStack Start？

TanStack Start 非常新。它仍在测试阶段。可能会有很多变化。还不稳定。

Ronins React 只使用**稳定的工具**。没有测试版。没有破坏性更改。

### 为什么不用 Create React App？

Create React App (CRA) 已经死了。自 2023 年以来没有更新。它使用 Webpack，很慢。

Ronins React 使用 Vite。Vite **快 10 倍**。

## 我们提供什么

| 你需要 | 我们提供 | 为什么选择这个 |
|--------|---------|---------------|
| 构建工具 | Vite 7 | 非常快 |
| 语言 | TypeScript | 尽早发现 bug |
| 样式 | Tailwind CSS 4 | 易于使用 |
| 组件 | shadcn/ui | 你拥有代码 |
| 页面 | React Router 7 | 最流行 |
| API 调用 | TanStack Query 5 | 最佳缓存 |
| 验证 | Zod 4 | 类型安全 |
| Bug 查找器 | ESLint 9 | 现代规则 |
| 格式化器 | Prettier | 干净的代码 |
| Git 钩子 | Husky | 提交前检查 |
| 测试 | Vitest | 快速测试 |

**全部已配置。全部协同工作。**

## 我们的原则

### 1. 开箱即用

无需设置。无需配置。只需运行并编码。

### 2. 新但稳定

我们使用新版本。但只使用稳定版本。没有测试版。

### 3. 简单

没有多余的工具。只有你需要的。以后可以添加更多。

### 4. 你拥有它

shadcn/ui 组件在你的代码中。不在 node_modules 中。你可以修改它们。

## 谁应该使用这个？

- **新手开发者** — 不要浪费时间在配置上
- **有经验的开发者** — 跳过无聊的设置
- **团队** — 每个人使用相同的工具
- **初创公司** — 快速发布，保持整洁

## 快速开始

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

**30 秒。完成。**

---

**React 驱动网络。我们驱动你的 React 配置。**

[立即开始 →](/zh/guide/getting-started)
