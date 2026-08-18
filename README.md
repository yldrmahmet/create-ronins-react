# create-ronins-react

<p align="center">
  <strong>The fastest way to scaffold production-ready React applications</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/create-ronins-react"><img src="https://img.shields.io/npm/v/create-ronins-react.svg?style=flat-square&color=blue" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/create-ronins-react"><img src="https://img.shields.io/npm/dm/create-ronins-react.svg?style=flat-square&color=green" alt="npm downloads"></a>
  <a href="https://github.com/yldrmahmet/create-ronins-react/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/create-ronins-react.svg?style=flat-square" alt="license"></a>
  <a href="https://github.com/yldrmahmet/create-ronins-react"><img src="https://img.shields.io/github/stars/yldrmahmet/create-ronins-react?style=flat-square" alt="GitHub stars"></a>
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> •
  <a href="#why-create-ronins-react">Why This?</a> •
  <a href="#whats-included">What's Included</a> •
  <a href="#documentation">Docs</a>
</p>

---

## Quick Start

```bash
# npm
npm create ronins-react@latest my-app

# yarn
yarn create ronins-react@latest my-app

# pnpm
pnpm create ronins-react@latest my-app

# bun (recommended)
bun create ronins-react@latest my-app
```

Then:

```bash
cd my-app
bun install   # or npm install
bun dev       # start dev server at localhost:5173
```

### Options

```bash
# Scaffold in current directory
npm create ronins-react@latest .

# Minimal setup (no demo pages)
npm create ronins-react@latest my-app --clean
```

---

## Why create-ronins-react?

| Feature | create-ronins-react | create-vite | CRA | create-t3-app |
|---------|:------------------:|:-----------:|:---:|:-------------:|
| React 19 | ✅ | ✅ | ❌ | ✅ |
| Vite 8 | ✅ | ✅ | ❌ | ✅ |
| Tailwind CSS 4 | ✅ | ❌ | ❌ | ✅ |
| shadcn/ui ready | ✅ | ❌ | ❌ | ❌ |
| TypeScript 5.9 | ✅ | ✅ | ✅ | ✅ |
| React Router 8 | ✅ | ❌ | ❌ | ❌ |
| TanStack Query | ✅ | ❌ | ❌ | ✅ |
| Zod 4 | ✅ | ❌ | ❌ | ✅ |
| ESLint 10 (flat config) | ✅ | ✅ | ❌ | ✅ |
| Vitest | ✅ | ❌ | ❌ | ✅ |
| Husky + Git Hooks | ✅ | ❌ | ❌ | ❌ |
| Bun support | ✅ | ✅ | ❌ | ✅ |
| Zero config | ✅ | ✅ | ❌ | ❌ |
| Clean mode | ✅ | ❌ | ❌ | ❌ |

### The Problem

- **create-react-app**: Deprecated, uses Webpack, outdated dependencies
- **create-vite**: Minimal - you still need to set up routing, state, UI, testing
- **create-t3-app**: Great but opinionated toward Next.js and tRPC

### The Solution

**create-ronins-react** gives you:

- Latest stable versions of everything (React 19, Vite 8, Tailwind 4)
- Production-ready defaults (linting, formatting, testing, git hooks)
- shadcn/ui pre-configured - just run `bunx shadcn add button`
- Works with npm, yarn, pnpm, and bun
- `--clean` flag for minimal projects

---

## What's Included

| Category | Tool | Version |
|----------|------|---------|
| Build | Vite + Rolldown | 8.x |
| Framework | React | 19.x |
| Language | TypeScript | 5.9 |
| Styling | Tailwind CSS | 4.x |
| UI Components | shadcn/ui | latest |
| Routing | React Router | 7.x |
| Server State | TanStack Query | 5.x |
| Validation | Zod | 4.x |
| Linting | ESLint (flat config) | 9.x |
| Formatting | Prettier | 3.x |
| Testing | Vitest + Testing Library | latest |
| Git Hooks | Husky | 9.x |
| Dead Code | Knip | latest |

---

## Project Structure

```
my-app/
├── src/
│   ├── app/
│   │   ├── routes/          # Page components
│   │   ├── providers.tsx    # Global providers
│   │   └── router.tsx       # Route definitions
│   ├── components/
│   │   └── ui/              # shadcn/ui components
│   ├── lib/
│   │   └── utils.ts         # Utilities (cn, etc.)
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind + theme
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
└── components.json          # shadcn/ui config
```

---

## Commands

```bash
bun dev           # Start dev server
bun run build     # Type check + build
bun check         # Lint + format + typecheck
bun test          # Run tests (watch)
bun test:run      # Run tests once
bun knip          # Find dead code
```

---

## Adding UI Components

shadcn/ui is pre-configured. Just add components:

```bash
bunx shadcn add button
bunx shadcn add dialog
bunx shadcn add form input
```

---

## Documentation

Full documentation: [package.roninslab.com](https://package.roninslab.com)

---

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a PR.

---

## License

MIT © [RoninsLab](https://github.com/yldrmahmet)
