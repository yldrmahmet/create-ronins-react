# React App

## Tech Stack

| Category      | Tool                       |
|---------------|----------------------------|
| Build         | Vite 8 + Rolldown          |
| Framework     | React 19                   |
| Language      | TypeScript 5.9             |
| Styling       | Tailwind CSS 4             |
| UI Components | shadcn/ui                  |
| Routing       | React Router 8             |
| Server State  | TanStack Query 5           |
| Validation    | Zod 4                      |
| Linting       | ESLint 10                  |
| Formatting    | Prettier                   |
| Git Hooks     | Husky                      |
| Testing       | Vitest                     |

## Commands

```bash
bun dev           # Development server (:5173)
bun run build     # Production build
bun check         # Lint + format + typecheck
bun test          # Run tests
bun clean         # Remove demo content
```

## Project Structure

```text
src/
├── app/
│   ├── routes/          # Page components
│   ├── providers.tsx    # Global providers
│   └── router.tsx       # Router config
├── components/ui/       # shadcn/ui components
├── lib/utils.ts         # Utilities
├── main.tsx             # Entry point
└── index.css            # Tailwind
```

## Adding Components

```bash
bunx shadcn add button input dialog
```
