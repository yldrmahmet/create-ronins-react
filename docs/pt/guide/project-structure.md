# Estrutura do Projeto

Seu app fica assim:

```
my-app/
├── public/
│   └── ronins.png          # Logo (removido com --clean)
├── src/
│   ├── app/
│   │   ├── routes/         # Suas páginas
│   │   │   ├── app.tsx     # Página inicial
│   │   │   └── stack.tsx   # Página demo (removida com --clean)
│   │   ├── providers.tsx   # Configuração do app
│   │   └── router.tsx      # Rotas de páginas
│   ├── components/
│   │   └── ui/             # Componentes UI (botões, etc.)
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts        # Funções auxiliares
│   ├── main.tsx            # App começa aqui
│   └── index.css           # Estilos
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Pastas Importantes

### `src/app/routes/`

Suas páginas ficam aqui. Um arquivo = uma página.

```
routes/
├── app.tsx      → localhost:5173/
├── about.tsx    → localhost:5173/about
└── contact.tsx  → localhost:5173/contact
```

### `src/components/ui/`

Componentes UI do shadcn/ui. Adicione mais com:

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

Funções auxiliares. A função `cn()` combina classes CSS:

```tsx
import { cn } from "@/lib/utils"

// Use assim:
<div className={cn("text-red-500", isActive && "font-bold")} />
```

## Como os Arquivos Funcionam Juntos

| Arquivo | O Que Faz |
|---------|-----------|
| `main.tsx` | Inicia o app |
| `providers.tsx` | Configura TanStack Query, etc. |
| `router.tsx` | Define todas as rotas de páginas |
| `routes/*.tsx` | Seus componentes de página |
