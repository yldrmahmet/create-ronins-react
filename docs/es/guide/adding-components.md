# Agregar Componentes

## ¿Qué es shadcn/ui?

[shadcn/ui](https://ui.shadcn.com) te da componentes listos:
- Botones
- Diálogos (popups)
- Formularios
- Cards
- Tablas
- Y más...

**Importante:** Los componentes van a TU código. No a node_modules. Puedes cambiarlos.

## Agregar un Componente

::: code-group

```bash [npm]
npx shadcn add button
```

```bash [bun]
bunx shadcn add button
```

```bash [pnpm]
pnpm dlx shadcn add button
```

```bash [yarn]
yarn dlx shadcn add button
```

:::

Esto crea `src/components/ui/button.tsx`.

## Agregar Varios Componentes

::: code-group

```bash [npm]
npx shadcn add dialog card form input
```

```bash [bun]
bunx shadcn add dialog card form input
```

```bash [pnpm]
pnpm dlx shadcn add dialog card form input
```

```bash [yarn]
yarn dlx shadcn add dialog card form input
```

:::

## Componentes Populares

| Componente | Qué Hace |
|------------|----------|
| button | Botón clickeable |
| dialog | Ventana popup |
| card | Caja con contenido |
| input | Campo de texto |
| form | Formulario con validación |
| table | Tabla de datos |
| select | Menú desplegable |
| tabs | Navegación por pestañas |
| sonner | Notificaciones |

Ver todos: [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## Cómo Usar

```tsx
import { Button } from "@/components/ui/button"

export default function MyPage() {
  return (
    <Button onClick={() => alert("¡Hola!")}>
      Haz Clic
    </Button>
  )
}
```

## Ejemplo de Diálogo

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function MyPage() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir Popup</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>¡Hola!</DialogTitle>
        </DialogHeader>
        <p>Esto es un popup.</p>
      </DialogContent>
    </Dialog>
  )
}
```

## Cambiar Componentes

Los componentes están en `src/components/ui/`. Ábrelos y edítalos.

Ejemplo - agregar botón verde:

```tsx
// src/components/ui/button.tsx

const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        // Agrega el tuyo:
        success: "bg-green-500 text-white hover:bg-green-600",
      }
    }
  }
)
```

Ahora úsalo:

```tsx
<Button variant="success">Guardar</Button>
```

## Cambiar Colores

Edita `src/index.css`:

```css
:root {
  --primary: oklch(0.5 0.2 260);  /* Cambia este color */
}
```

¿Quieres un generador de temas? Ve a [ui.shadcn.com/themes](https://ui.shadcn.com/themes)
