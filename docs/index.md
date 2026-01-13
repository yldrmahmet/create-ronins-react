---
layout: home

hero:
  name: Ronins React
  text: The Right Tools, Already Chosen
  tagline: Stop researching. Start building. A production-ready React starter with battle-tested defaults.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/yldrmahmet/create-ronins-react

features:
  - icon:
      src: /vite.svg
    title: Vite 7 + SWC
    details: Lightning fast development with instant HMR and optimized builds
  - icon:
      src: /tailwind.svg
    title: Tailwind CSS 4
    details: Utility-first CSS with the latest features and performance improvements
  - icon:
      src: /box.svg
    title: Zero Config
    details: Everything pre-configured. Just run and start coding
  - icon:
      src: /more.svg
    title: And More...
    details: React 19, TypeScript, shadcn/ui, React Router, TanStack Query, ESLint, Vitest, Husky
    link: /guide/tech-stack
---

<div class="why-section">

## Why Ronins React?

The JavaScript ecosystem moves fast. **Too fast.**

Every week brings new frameworks, new bundlers, new tools. AI is making this even faster. But you just want to build your app.

**The reality:**

- npm has **3+ million packages** — most are old or not safe
- **React is still #1** — 40% of developers use it, 11 million websites
- Choosing the right tools takes **days of research**

### We Did the Research

Ronins React is not just a template. It is **opinionated curation**.

We tested many tools and picked the best ones:

| What You Need | What We Chose | Why |
|--------------|---------------|-----|
| Build Tool | Vite 7 + SWC | Fastest dev server, instant HMR |
| Styling | Tailwind CSS 4 | Industry standard, zero runtime |
| Components | shadcn/ui | Own your code, not a dependency |
| Routing | React Router 7 | Most popular, React team endorsed |
| Server State | TanStack Query 5 | Best caching and sync |
| Validation | Zod 4 | TypeScript-first, runtime safe |
| Code Quality | ESLint 9 + Prettier | Clean, error-free code |

### Why Not Other Options?

| Option | Problem |
|--------|---------|
| `npm create vite` | Only gives Vite + React. You add everything else. Takes hours. |
| Next.js | Too complex for simple apps. Server Components, App Router... |
| TanStack Start | Too new. Still in beta. Not stable. |
| Create React App | Dead project. No updates. Very slow. |

### Zero Decision Fatigue

```bash
npm create ronins-react@latest my-app
cd my-app && npm install && npm run dev
```

That's it. No configuration. No research. Just code.

**React powers the web. We power your React setup.**

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
