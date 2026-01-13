# Comandos

Elige tu gestor de paquetes. Los comandos cambian para cada uno.

## Iniciar Servidor de Desarrollo

::: code-group

```bash [npm]
npm run dev
```

```bash [bun]
bun dev
```

```bash [pnpm]
pnpm dev
```

```bash [yarn]
yarn dev
```

:::

Abre `http://localhost:5173`. Los cambios se muestran instantáneamente.

## Build para Producción

::: code-group

```bash [npm]
npm run build
```

```bash [bun]
bun run build
```

```bash [pnpm]
pnpm build
```

```bash [yarn]
yarn build
```

:::

Crea la carpeta `dist/`. Súbela a tu servidor.

::: details ¿Por qué `bun run build` y no `bun build`?

Son comandos diferentes:

| Comando | Qué Hace |
|---------|----------|
| `bun build` | Usa el bundler de Bun |
| `bun run build` | Ejecuta el script "build" en package.json |

Usamos `bun run build` porque ejecuta el **bundler de Vite**.

**¿Por qué Vite, no el bundler de Bun?**
- Vite tiene más características
- Vite tiene más plugins
- Vite está probado con React por años

**Bun es rápido para ejecutar código. Vite es mejor para build.**

:::

## Verificar Código

::: code-group

```bash [npm]
npm run check
```

```bash [bun]
bun check
```

```bash [pnpm]
pnpm check
```

```bash [yarn]
yarn check
```

:::

Ejecuta todas las verificaciones:
- ESLint (encontrar bugs)
- Prettier (verificar formato)
- TypeScript (verificar tipos)

## Encontrar Bugs (Lint)

::: code-group

```bash [npm]
npm run lint
```

```bash [bun]
bun lint
```

```bash [pnpm]
pnpm lint
```

```bash [yarn]
yarn lint
```

:::

Arreglar bugs automáticamente:

::: code-group

```bash [npm]
npm run lint -- --fix
```

```bash [bun]
bun lint --fix
```

```bash [pnpm]
pnpm lint --fix
```

```bash [yarn]
yarn lint --fix
```

:::

## Formatear Código

::: code-group

```bash [npm]
npm run format
```

```bash [bun]
bun format
```

```bash [pnpm]
pnpm format
```

```bash [yarn]
yarn format
```

:::

Hace que el código se vea bien. Arregla espacios, comillas, etc.

## Ejecutar Tests

::: code-group

```bash [npm]
npm test
```

```bash [bun]
bun test
```

```bash [pnpm]
pnpm test
```

```bash [yarn]
yarn test
```

:::

Ejecuta tests. Observa cambios.

Ejecutar una vez (para CI):

::: code-group

```bash [npm]
npm run test:run
```

```bash [bun]
bun test:run
```

```bash [pnpm]
pnpm test:run
```

```bash [yarn]
yarn test:run
```

:::

## Eliminar Contenido Demo

::: code-group

```bash [npm]
npm run clean
```

```bash [bun]
bun clean
```

```bash [pnpm]
pnpm clean
```

```bash [yarn]
yarn clean
```

:::

Elimina archivos demo. Te da una app limpia "Hello World".

## Todos los Comandos

| Comando | Qué Hace |
|---------|----------|
| `dev` | Iniciar servidor dev |
| `build` | Build para producción |
| `check` | Ejecutar todas las verificaciones |
| `lint` | Encontrar bugs |
| `format` | Embellecer código |
| `test` | Ejecutar tests (observar) |
| `test:run` | Ejecutar tests (una vez) |
| `clean` | Eliminar archivos demo |
