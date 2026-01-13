# ¿Qué es Ronins React?

Ronins React es una herramienta. Crea aplicaciones React para ti. Todas las herramientas están listas. Solo escribes código.

## El Problema

JavaScript tiene demasiadas herramientas. Cada semana salen nuevas herramientas. Es difícil elegir.

**Algunos números:**

- npm tiene **3 millones de paquetes**
- La mayoría de los paquetes están desactualizados o no son seguros
- React sigue siendo **#1** — 40% de los desarrolladores lo usan
- 11 millones de sitios web usan React

El problema no es React. El problema es: **¿qué herramientas usar con React?**

## ¿Por Qué No Otras Opciones?

### ¿Por qué no `npm create vite`?

Vite es genial. Pero solo te da **Vite + React**.

Aún necesitas agregar:
- Tailwind CSS (estilos)
- React Router (páginas)
- TanStack Query (llamadas API)
- ESLint (encontrar bugs)
- Prettier (formatear código)
- Husky (verificaciones git)
- shadcn/ui (botones, diálogos)

Esto toma **horas**. Con Ronins React, toma **30 segundos**.

### ¿Por qué no Next.js?

Next.js es un framework grande. Tiene:
- Server Components
- App Router
- Server Actions
- Muchas características complejas

**Next.js es bueno para:** Sitios web que necesitan SEO (ranking en Google).

**Pero muchas apps no necesitan esto:**
- Dashboards de administración
- Herramientas internas
- Single page apps (SPA)

Para estas, Next.js es **demasiado complejo**. Ronins React es más simple.

### ¿Por qué no TanStack Start?

TanStack Start es muy nuevo. Aún está en beta. Puede cambiar mucho. No es estable todavía.

Ronins React usa **solo herramientas estables**. Sin beta. Sin cambios que rompen.

### ¿Por qué no Create React App?

Create React App (CRA) está muerto. Sin actualizaciones desde 2023. Usa Webpack, que es lento.

Ronins React usa Vite. Vite es **10 veces más rápido**.

## Lo Que Te Damos

| Necesitas | Te Damos | Por Qué Este |
|-----------|----------|--------------|
| Build tool | Vite 7 | Muy rápido |
| Lenguaje | TypeScript | Encuentra bugs temprano |
| Estilos | Tailwind CSS 4 | Fácil de usar |
| Componentes | shadcn/ui | Tú tienes el código |
| Páginas | React Router 7 | Más popular |
| Llamadas API | TanStack Query 5 | Mejor caché |
| Validación | Zod 4 | Type safe |
| Buscador de bugs | ESLint 9 | Reglas modernas |
| Formateador | Prettier | Código limpio |
| Hooks git | Husky | Verifica antes de commit |
| Testing | Vitest | Tests rápidos |

**Todo configurado. Todo funcionando junto.**

## Nuestras Reglas

### 1. Listo para Usar

Sin setup. Sin config. Solo ejecuta y programa.

### 2. Nuevo pero Estable

Usamos versiones nuevas. Pero solo estables. Sin beta.

### 3. Simple

Sin herramientas extra. Solo lo que necesitas. Agrega más después si quieres.

### 4. Tú Lo Tienes

Los componentes de shadcn/ui están en tu código. No en node_modules. Puedes cambiarlos.

## ¿Quién Debería Usar Esto?

- **Desarrolladores nuevos** — No pierdas tiempo en configuración
- **Desarrolladores experimentados** — Salta el setup aburrido
- **Equipos** — Las mismas herramientas para todos
- **Startups** — Envía rápido, mantente limpio

## Inicio Rápido

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

**30 segundos. Listo.**

---

**React impulsa la web. Nosotros impulsamos tu configuración de React.**

[Comenzar Ahora →](/es/guide/getting-started)
