# 技术栈

应用中包含的所有工具：

<div class="tech-grid">

<a href="https://vite.dev" class="tech-card" target="_blank">
  <img src="/vite.svg" alt="Vite" />
  <h3>Vite 7</h3>
  <p>即时热更新的构建工具</p>
</a>

<a href="https://react.dev" class="tech-card" target="_blank">
  <img src="/react.svg" alt="React" />
  <h3>React 19</h3>
  <p>UI 库</p>
</a>

<a href="https://www.typescriptlang.org" class="tech-card" target="_blank">
  <img src="/typescript.svg" alt="TypeScript" />
  <h3>TypeScript 5.9</h3>
  <p>类型安全的 JavaScript</p>
</a>

<a href="https://tailwindcss.com" class="tech-card" target="_blank">
  <img src="/tailwind.svg" alt="Tailwind CSS" />
  <h3>Tailwind CSS 4</h3>
  <p>实用优先的 CSS</p>
</a>

<a href="https://ui.shadcn.com" class="tech-card" target="_blank">
  <img src="/shadcn.svg" alt="shadcn/ui" />
  <h3>shadcn/ui</h3>
  <p>UI 组件</p>
</a>

<a href="https://reactrouter.com" class="tech-card" target="_blank">
  <img src="/reactrouter.svg" alt="React Router" />
  <h3>React Router 7</h3>
  <p>客户端路由</p>
</a>

<a href="https://tanstack.com/query" class="tech-card" target="_blank">
  <img src="/tanstack.svg" alt="TanStack Query" />
  <h3>TanStack Query 5</h3>
  <p>服务器状态管理</p>
</a>

<a href="https://zod.dev" class="tech-card" target="_blank">
  <img src="/zod.svg" alt="Zod" />
  <h3>Zod 4</h3>
  <p>模式验证</p>
</a>

<a href="https://eslint.org" class="tech-card" target="_blank">
  <img src="/eslint.svg" alt="ESLint" />
  <h3>ESLint 9</h3>
  <p>查找代码中的 bug</p>
</a>

<a href="https://prettier.io" class="tech-card" target="_blank">
  <img src="/prettier.svg" alt="Prettier" />
  <h3>Prettier</h3>
  <p>代码格式化器</p>
</a>

<a href="https://vitest.dev" class="tech-card" target="_blank">
  <img src="/vitest.svg" alt="Vitest" />
  <h3>Vitest</h3>
  <p>单元测试</p>
</a>

<a href="https://typicode.github.io/husky" class="tech-card" target="_blank">
  <img src="/husky.svg" alt="Husky" />
  <h3>Husky</h3>
  <p>Git 钩子</p>
</a>

</div>

---

## 为什么选择这些工具？

### Vite
Vite 是 React 应用最快的构建工具。启动时间不到 1 秒。更改立即显示。Webpack 慢 10 倍。Turbopack 也很快，但它只能很好地与 Next.js 配合使用。

---

### React
React 仍然是第一。40% 的开发者使用它。1100 万个网站运行 React。它拥有最大的生态系统、最多的工作机会和最多的学习资源。

---

### TypeScript
TypeScript 在运行代码之前找到 bug。它现在是行业标准。没有真正的替代品。

---

### Tailwind CSS
Tailwind 是最流行的 CSS 框架。你直接在 HTML 中编写样式。不需要单独的 CSS 文件。UnoCSS 更快，但 Tailwind 有更大的社区和更好的 IDE 支持。

---

### shadcn/ui
shadcn/ui 不一样。组件被复制到你的代码中。你拥有它们。你可以修改它们。没有版本冲突。没有破坏性更新。基于 Radix UI 构建，确保可访问性。

---

### React Router
React Router 是 React 最常用的路由器。它从 2014 年就存在了。非常稳定。有很多资源可用。TanStack Router 有更好的 TypeScript 支持，但 React Router 更成熟。

---

### TanStack Query
TanStack Query 是 API 调用的最佳选择。它缓存数据。在后台更新。有 DevTools。在大多数情况下比 SWR 更好。

---

### Zod
Zod 在运行时检查数据是否正确。与 TypeScript 配合很好。有 78+ 个库集成。非常流行。

::: tip 我们在关注 Valibot
[Valibot](https://valibot.dev) 是一个新的验证库。它比 Zod **小 90%**（1.37 KB vs 17.7 KB）。相同的 API 风格。当它的生态系统增长时，我们可能会在将来切换到 Valibot。目前，我们使用 Zod，因为它有更多的集成和文档。
:::

---

### ESLint + Prettier
ESLint 查找 bug。Prettier 格式化代码。它们一起保持你的代码干净。

::: tip 我们在关注 Biome
[Biome](https://biomejs.dev) 是一个新工具。它做 ESLint + Prettier 做的事，但**快 20 倍**。一个工具代替两个。一个配置文件代替四个。我们可能会在将来切换到 Biome。目前，我们使用 ESLint + Prettier 因为：
- ESLint 有 1000+ 插件
- Biome 有约 80% 的插件覆盖
- ESLint 有更多资源和帮助

当 Biome 的生态系统增长时，我们会考虑切换。
:::

---

### Vitest
Vitest 是为 Vite 项目制作的。它比 Jest 快 10-20 倍。与 Jest 相同的 API，所以容易学习。Vite 应用的明确赢家。

---

### Husky
Husky 在你提交之前运行检查。它确保坏代码不会进入你的仓库。非常流行，每周下载量超过 1500 万。

---

## 未来路线图

我们持续评估新工具。以下是我们正在关注的：

| 当前 | 关注 | 为什么 |
|------|------|--------|
| ESLint + Prettier | **Biome** | 快 20 倍，单一工具 |
| Zod | **Valibot** | 90% 更小的包体积 |
| Husky | **Lefthook** | 并行执行，快 50% |
| React Router | **TanStack Router** | 更好的 TypeScript 支持 |

我们优先考虑**稳定性而非速度**。当这些替代品成熟时，我们会考虑切换。

<style>
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.tech-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}

.tech-card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  transform: translateY(-2px);
}

.tech-card img {
  width: 48px;
  height: 48px;
  margin-bottom: 0.75rem;
}

.tech-card h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.tech-card p {
  margin: 0.25rem 0 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  text-align: center;
}
</style>
