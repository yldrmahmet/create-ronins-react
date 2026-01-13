# Tech Stack

All tools included in your app:

<div class="tech-grid">

<a href="https://vite.dev" class="tech-card" target="_blank">
  <img src="/vite.svg" alt="Vite" />
  <h3>Vite 7</h3>
  <p>Build tool with instant HMR</p>
</a>

<a href="https://react.dev" class="tech-card" target="_blank">
  <img src="/react.svg" alt="React" />
  <h3>React 19</h3>
  <p>UI library</p>
</a>

<a href="https://www.typescriptlang.org" class="tech-card" target="_blank">
  <img src="/typescript.svg" alt="TypeScript" />
  <h3>TypeScript 5.9</h3>
  <p>Type-safe JavaScript</p>
</a>

<a href="https://tailwindcss.com" class="tech-card" target="_blank">
  <img src="/tailwind.svg" alt="Tailwind CSS" />
  <h3>Tailwind CSS 4</h3>
  <p>Utility-first CSS</p>
</a>

<a href="https://ui.shadcn.com" class="tech-card" target="_blank">
  <img src="/shadcn.svg" alt="shadcn/ui" />
  <h3>shadcn/ui</h3>
  <p>UI components</p>
</a>

<a href="https://reactrouter.com" class="tech-card" target="_blank">
  <img src="/reactrouter.svg" alt="React Router" />
  <h3>React Router 7</h3>
  <p>Client-side routing</p>
</a>

<a href="https://tanstack.com/query" class="tech-card" target="_blank">
  <img src="/tanstack.png" alt="TanStack Query" />
  <h3>TanStack Query 5</h3>
  <p>Server state management</p>
</a>

<a href="https://zod.dev" class="tech-card" target="_blank">
  <img src="/zod.svg" alt="Zod" />
  <h3>Zod 4</h3>
  <p>Schema validation</p>
</a>

<a href="https://eslint.org" class="tech-card" target="_blank">
  <img src="/eslint.svg" alt="ESLint" />
  <h3>ESLint 9</h3>
  <p>Find bugs in code</p>
</a>

<a href="https://prettier.io" class="tech-card" target="_blank">
  <img src="/prettier.svg" alt="Prettier" />
  <h3>Prettier</h3>
  <p>Code formatter</p>
</a>

<a href="https://vitest.dev" class="tech-card" target="_blank">
  <img src="/vitest.svg" alt="Vitest" />
  <h3>Vitest</h3>
  <p>Unit testing</p>
</a>

<a href="https://typicode.github.io/husky" class="tech-card" target="_blank">
  <img src="/husky.svg" alt="Husky" />
  <h3>Husky</h3>
  <p>Git hooks</p>
</a>

</div>

---

## Why These Tools?

### Vite
Vite is the fastest build tool for React apps. It starts in less than 1 second. Changes show instantly. Webpack is 10x slower. Turbopack is fast too, but it only works well with Next.js.

---

### React
React is still #1. 40% of developers use it. 11 million websites run on React. It has the biggest ecosystem, most jobs, and most learning resources.

---

### TypeScript
TypeScript finds bugs before you run your code. It is now the industry standard. No real alternative exists.

---

### Tailwind CSS
Tailwind is the most popular CSS framework. You write styles directly in HTML. No separate CSS files needed. UnoCSS is faster, but Tailwind has a bigger community and better IDE support.

---

### shadcn/ui
shadcn/ui is different. Components are copied into YOUR code. You own them. You can change them. No version conflicts. No breaking updates. Built on Radix UI for accessibility.

---

### React Router
React Router is the most used router for React. It exists since 2014. Very stable. Many resources available. TanStack Router has better TypeScript support, but React Router is more proven.

---

### TanStack Query
TanStack Query is the best for API calls. It caches data. Updates in background. Has DevTools. Better than SWR in most cases.

---

### Zod
Zod checks if data is correct at runtime. Works great with TypeScript. Has 78+ library integrations. Very popular.

::: tip We are watching Valibot
[Valibot](https://valibot.dev) is a new validation library. It is **90% smaller** than Zod (1.37 KB vs 17.7 KB). Same API style. We may switch to Valibot in the future when its ecosystem grows. For now, we use Zod because it has more integrations and documentation.
:::

---

### ESLint + Prettier
ESLint finds bugs. Prettier formats code. Together they keep your code clean.

::: tip We are watching Biome
[Biome](https://biomejs.dev) is a new tool. It does what ESLint + Prettier do, but **20x faster**. One tool instead of two. One config file instead of four. We may switch to Biome in the future. For now, we use ESLint + Prettier because:
- ESLint has 1000+ plugins
- Biome has ~80% plugin coverage
- More resources and help available for ESLint

When Biome's ecosystem grows, we will consider switching.
:::

---

### Vitest
Vitest is made for Vite projects. It is 10-20x faster than Jest. Same API as Jest, so easy to learn. The clear winner for Vite apps.

---

### Husky
Husky runs checks before you commit. It makes sure bad code doesn't get into your repo. Very popular with 15M+ weekly downloads.

---

## Future Roadmap

We continuously evaluate new tools. Here's what we're watching:

| Current | Watching | Why |
|---------|----------|-----|
| ESLint + Prettier | **Biome** | 20x faster, single tool |
| Zod | **Valibot** | 90% smaller bundle |
| Husky | **Lefthook** | Parallel execution, 50% faster |
| React Router | **TanStack Router** | Better TypeScript support |

We prioritize **stability over speed**. When these alternatives mature, we will consider switching.

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
