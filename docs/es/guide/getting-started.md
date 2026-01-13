# Comenzar

## Crea Tu Aplicación

Elige tu gestor de paquetes y ejecuta:

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

Abre `http://localhost:5173` en tu navegador. ¡Listo!

## Modo Limpio

¿Quieres una app mínima? ¿Sin páginas de demostración? Usa `--clean`:

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

Esto elimina:
- Páginas de demostración
- Archivo de logo

Obtienes una simple app "Hello World".

## Usar Carpeta Actual

¿Quieres crear en la carpeta actual? Usa `.`:

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
La carpeta debe estar vacía.
:::

## ¿Qué Sigue?

- [Estructura del Proyecto](/es/guide/project-structure) — Ver todos los archivos
- [Comandos](/es/guide/commands) — Ver todos los comandos
- [Agregar Componentes](/es/guide/adding-components) — Agregar botones, diálogos, etc.
