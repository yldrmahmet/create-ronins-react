# Estructura del Proyecto

Tu app se ve así:

```
my-app/
├── public/
│   └── ronins.png          # Logo (eliminado con --clean)
├── src/
│   ├── app/
│   │   ├── routes/         # Tus páginas
│   │   │   ├── app.tsx     # Página principal
│   │   │   └── stack.tsx   # Página demo (eliminada con --clean)
│   │   ├── providers.tsx   # Configuración de la app
│   │   └── router.tsx      # Rutas de páginas
│   ├── components/
│   │   └── ui/             # Componentes UI (botones, etc.)
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts        # Funciones auxiliares
│   ├── main.tsx            # La app inicia aquí
│   └── index.css           # Estilos
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Carpetas Importantes

### `src/app/routes/`

Tus páginas van aquí. Un archivo = una página.

```
routes/
├── app.tsx      → localhost:5173/
├── about.tsx    → localhost:5173/about
└── contact.tsx  → localhost:5173/contact
```

### `src/components/ui/`

Componentes UI de shadcn/ui. Agrega más con:

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

Funciones auxiliares. La función `cn()` mezcla clases CSS:

```tsx
import { cn } from "@/lib/utils"

// Úsalo así:
<div className={cn("text-red-500", isActive && "font-bold")} />
```

## Cómo Funcionan los Archivos Juntos

| Archivo | Qué Hace |
|---------|----------|
| `main.tsx` | Inicia la app |
| `providers.tsx` | Configura TanStack Query, etc. |
| `router.tsx` | Define todas las rutas de páginas |
| `routes/*.tsx` | Tus componentes de página |
