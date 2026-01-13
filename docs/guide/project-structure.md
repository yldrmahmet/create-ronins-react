# Project Structure

Your app looks like this:

```
my-app/
├── public/
│   └── ronins.svg          # Logo (removed with --clean)
├── src/
│   ├── app/
│   │   ├── routes/         # Your pages
│   │   │   ├── app.tsx     # Home page
│   │   │   └── stack.tsx   # Demo page (removed with --clean)
│   │   ├── providers.tsx   # App setup
│   │   └── router.tsx      # Page routes
│   ├── components/
│   │   └── ui/             # UI components (buttons, etc.)
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts        # Helper functions
│   ├── main.tsx            # App starts here
│   └── index.css           # Styles
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Important Folders

### `src/app/routes/`

Your pages go here. One file = one page.

```
routes/
├── app.tsx      → localhost:5173/
├── about.tsx    → localhost:5173/about
└── contact.tsx  → localhost:5173/contact
```

### `src/components/ui/`

UI components from shadcn/ui. Add more with:

```bash
bunx shadcn add dialog
bunx shadcn add card
```

### `src/lib/`

Helper functions. The `cn()` function mixes CSS classes:

```tsx
import { cn } from "@/lib/utils"

// Use like this:
<div className={cn("text-red-500", isActive && "font-bold")} />
```

## How Files Work Together

| File | What It Does |
|------|--------------|
| `main.tsx` | Starts the app |
| `providers.tsx` | Sets up TanStack Query, etc. |
| `router.tsx` | Defines all page routes |
| `routes/*.tsx` | Your page components |
