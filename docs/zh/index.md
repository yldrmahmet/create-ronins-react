---
layout: home

hero:
  name: Ronins React
  text: 正确的工具，已为你选好
  tagline: 停止研究，开始构建。一个经过实战验证的生产级 React 启动模板。
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/guide/getting-started
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/yldrmahmet/create-ronins-react

features:
  - icon:
      src: /vite.svg
    title: Vite 7 + SWC
    details: 闪电般快速的开发体验，即时热更新和优化构建
  - icon:
      src: /tailwind.svg
    title: Tailwind CSS 4
    details: 实用优先的 CSS 框架，最新特性和性能改进
  - icon:
      src: /box.svg
    title: 零配置
    details: 一切已预配置。只需运行即可开始编码
  - icon:
      src: /more.svg
    title: 更多功能...
    details: React 19、TypeScript、shadcn/ui、React Router、TanStack Query、ESLint、Vitest、Husky
    link: /zh/guide/tech-stack
---

<div class="why-section">

## 为什么选择 Ronins React？

JavaScript 生态系统发展太快了。**太快了。**

每周都有新的框架、新的打包工具、新的工具。AI 让这一切变得更快。但你只想构建你的应用。

**现实是：**

- npm 有**超过 300 万个包** — 大多数已过时或不安全
- **React 仍然是第一** — 40% 的开发者使用它，1100 万个网站
- 选择正确的工具需要**数天的研究**

### 我们已经做了研究

Ronins React 不仅仅是一个模板。它是**经过深思熟虑的精选**。

我们测试了许多工具，选出了最好的：

| 你需要什么 | 我们选择了 | 为什么 |
|------------|-----------|--------|
| 构建工具 | Vite 7 + SWC | 最快的开发服务器，即时热更新 |
| 样式 | Tailwind CSS 4 | 行业标准，零运行时 |
| 组件 | shadcn/ui | 拥有你的代码，而不是依赖 |
| 路由 | React Router 7 | 最流行，React 团队认可 |
| 服务器状态 | TanStack Query 5 | 最佳缓存和同步 |
| 验证 | Zod 4 | TypeScript 优先，运行时安全 |
| 代码质量 | ESLint 9 + Prettier | 干净、无错误的代码 |

### 为什么不用其他选择？

| 选项 | 问题 |
|------|------|
| `npm create vite` | 只提供 Vite + React。其他一切都要自己添加。需要数小时。 |
| Next.js | 对于简单应用来说太复杂。Server Components、App Router... |
| TanStack Start | 太新了。还在测试阶段。不稳定。 |
| Create React App | 已停止维护。没有更新。非常慢。 |

### 零决策疲劳

::: code-group

```bash [npm]
npm create ronins-react@latest my-app
cd my-app && npm install && npm run dev
```

```bash [bun]
bun create ronins-react@latest my-app
cd my-app && bun install && bun dev
```

```bash [pnpm]
pnpm create ronins-react@latest my-app
cd my-app && pnpm install && pnpm dev
```

```bash [yarn]
yarn create ronins-react@latest my-app
cd my-app && yarn && yarn dev
```

:::

就这样。无需配置。无需研究。只需编码。

**React 驱动网络。我们驱动你的 React 配置。**

</div>

<style>
.why-section {
  max-width: 800px;
  margin: 4rem auto;
  padding: 0 1.5rem;
}

.why-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.why-section h3 {
  margin-top: 2rem;
  color: var(--vp-c-brand-1);
}

.why-section table {
  width: 100%;
  margin: 1rem 0;
}

.why-section blockquote {
  border-left: 4px solid var(--vp-c-brand-1);
  padding-left: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
}
</style>
