# What is Ronins React?

Ronins React is a tool. It creates React apps for you. All tools are ready. You just write code.

## The Problem

JavaScript has too many tools. Every week, new tools come out. It is hard to choose.

**Some numbers:**

- npm has **3 million packages**
- Most packages are old or not safe
- React is still **#1** — 40% of developers use it
- 11 million websites use React

The problem is not React. The problem is: **which tools to use with React?**

## Why Not Other Options?

### Why not `npm create vite`?

Vite is great. But it gives you **only Vite + React**.

You still need to add:
- Tailwind CSS (styling)
- React Router (pages)
- TanStack Query (API calls)
- ESLint (find bugs)
- Prettier (format code)
- Husky (git checks)
- shadcn/ui (buttons, dialogs)

This takes **hours**. With Ronins React, it takes **30 seconds**.

### Why not Next.js?

Next.js is a big framework. It has:
- Server Components
- App Router
- Server Actions
- Many complex features

**Next.js is good for:** Websites that need SEO (Google ranking).

**But many apps don't need this:**
- Admin dashboards
- Internal tools
- Single page apps (SPA)

For these, Next.js is **too complex**. Ronins React is simpler.

### Why not TanStack Start?

TanStack Start is very new. It is still in beta. It may change a lot. It is not stable yet.

Ronins React uses **stable tools only**. No beta. No breaking changes.

### Why not Create React App?

Create React App (CRA) is dead. No updates since 2023. It uses Webpack, which is slow.

Ronins React uses Vite. Vite is **10x faster**.

## What We Give You

| You Need | We Give You | Why This One |
|----------|-------------|--------------|
| Build tool | Vite 7 | Very fast |
| Language | TypeScript | Finds bugs early |
| Styling | Tailwind CSS 4 | Easy to use |
| Components | shadcn/ui | You own the code |
| Pages | React Router 7 | Most popular |
| API calls | TanStack Query 5 | Best caching |
| Validation | Zod 4 | Type safe |
| Bug finder | ESLint 9 | Modern rules |
| Formatter | Prettier | Clean code |
| Git hooks | Husky | Check before commit |
| Testing | Vitest | Fast tests |

**All configured. All working together.**

## Our Rules

### 1. Ready to Use

No setup. No config. Just run and code.

### 2. New but Stable

We use new versions. But only stable ones. No beta.

### 3. Simple

No extra tools. Only what you need. Add more later if you want.

### 4. You Own It

shadcn/ui components are in your code. Not in node_modules. You can change them.

## Who Should Use This?

- **New developers** — Don't waste time on config
- **Experienced developers** — Skip the boring setup
- **Teams** — Same tools for everyone
- **Startups** — Ship fast, stay clean

## Quick Start

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

**30 seconds. Done.**

---

**React powers the web. We power your React setup.**

[Start Now →](/guide/getting-started)
