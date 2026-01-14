# Opciones de CLI

## Uso Básico

::: code-group

```bash [npm]
npm create ronins-react@latest [nombre] [opciones]
```

```bash [bun]
bun create ronins-react@latest [nombre] [opciones]
```

```bash [pnpm]
pnpm create ronins-react@latest [nombre] [opciones]
```

```bash [yarn]
yarn create ronins-react@latest [nombre] [opciones]
```

:::

## Nombre

El nombre de la carpeta para tu app:

::: code-group

```bash [npm]
npm create ronins-react@latest my-app
```

```bash [bun]
bun create ronins-react@latest my-app
```

```bash [pnpm]
pnpm create ronins-react@latest my-app
```

```bash [yarn]
yarn create ronins-react@latest my-app
```

:::

Crea la carpeta `my-app/`.

**¿Sin nombre?** Te preguntará.

## Usar Carpeta Actual

Usa `.` para crear en la carpeta actual:

::: code-group

```bash [npm]
mkdir my-app && cd my-app
npm create ronins-react@latest .
```

```bash [bun]
mkdir my-app && cd my-app
bun create ronins-react@latest .
```

```bash [pnpm]
mkdir my-app && cd my-app
pnpm create ronins-react@latest .
```

```bash [yarn]
mkdir my-app && cd my-app
yarn create ronins-react@latest .
```

:::

::: warning
¡La carpeta debe estar vacía!
:::

## Opciones

### `--clean` o `-c`

Crea app mínima. Sin archivos demo.

::: code-group

```bash [npm]
npm create ronins-react@latest my-app --clean
```

```bash [bun]
bun create ronins-react@latest my-app --clean
```

```bash [pnpm]
pnpm create ronins-react@latest my-app --clean
```

```bash [yarn]
yarn create ronins-react@latest my-app --clean
```

:::

**Elimina:**
- `src/app/routes/stack.tsx` (página demo)
- `public/ronins.png` (logo)

**Crea:**
- Simple app "Hello World"

## Gestor de Paquetes

El CLI sabe qué gestor de paquetes usas:

| Ejecutas | Detecta |
|----------|---------|
| `npm create ronins-react@latest` | npm |
| `bun create ronins-react@latest` | bun |
| `pnpm create ronins-react@latest` | pnpm |
| `yarn create ronins-react@latest` | yarn |

Los archivos README y CLAUDE.md usan los comandos de tu gestor de paquetes.

## Errores

| Error | Por Qué |
|-------|---------|
| "Directory exists" | La carpeta ya existe. Elige nuevo nombre. |
| "Not empty" | La carpeta actual tiene archivos. Usa carpeta vacía. |
