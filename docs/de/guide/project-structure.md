# Projektstruktur

Deine App sieht so aus:

```
my-app/
├── public/
│   └── ronins.png          # Logo (entfernt mit --clean)
├── src/
│   ├── app/
│   │   ├── routes/         # Deine Seiten
│   │   │   ├── app.tsx     # Startseite
│   │   │   └── stack.tsx   # Demo-Seite (entfernt mit --clean)
│   │   ├── providers.tsx   # App-Setup
│   │   └── router.tsx      # Seiten-Routen
│   ├── components/
│   │   └── ui/             # UI-Komponenten (Buttons usw.)
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts        # Hilfsfunktionen
│   ├── main.tsx            # App startet hier
│   └── index.css           # Styles
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Wichtige Ordner

### `src/app/routes/`

Deine Seiten kommen hierhin. Eine Datei = eine Seite.

```
routes/
├── app.tsx      → localhost:5173/
├── about.tsx    → localhost:5173/about
└── contact.tsx  → localhost:5173/contact
```

### `src/components/ui/`

UI-Komponenten von shadcn/ui. Mehr hinzufügen mit:

::: code-group

```bash [npm]
npx shadcn add dialog card
```

```bash [bun]
bunx shadcn add dialog card
```

```bash [pnpm]
pnpm dlx shadcn add dialog card
```

```bash [yarn]
yarn dlx shadcn add dialog card
```

:::

### `src/lib/`

Hilfsfunktionen. Die `cn()` Funktion kombiniert CSS-Klassen:

```tsx
import { cn } from "@/lib/utils"

// So verwenden:
<div className={cn("text-red-500", isActive && "font-bold")} />
```

## Wie Dateien zusammenarbeiten

| Datei | Was sie macht |
|-------|---------------|
| `main.tsx` | Startet die App |
| `providers.tsx` | Richtet TanStack Query usw. ein |
| `router.tsx` | Definiert alle Seiten-Routen |
| `routes/*.tsx` | Deine Seiten-Komponenten |
