---
layout: home

hero:
  name: Ronins React
  text: Las Herramientas Correctas, Ya Elegidas
  tagline: Deja de investigar. Empieza a construir. Un starter de React listo para producción con configuraciones probadas en batalla.
  actions:
    - theme: brand
      text: Comenzar
      link: /es/guide/getting-started
    - theme: alt
      text: Ver en GitHub
      link: https://github.com/yldrmahmet/create-ronins-react

features:
  - icon:
      src: /vite.svg
    title: Vite 7 + SWC
    details: Desarrollo ultrarrápido con HMR instantáneo y builds optimizados
  - icon:
      src: /tailwind.svg
    title: Tailwind CSS 4
    details: CSS utility-first con las últimas características y mejoras de rendimiento
  - icon:
      src: /box.svg
    title: Cero Configuración
    details: Todo preconfigurado. Solo ejecuta y empieza a programar
  - icon:
      src: /more.svg
    title: Y Más...
    details: React 19, TypeScript, shadcn/ui, React Router, TanStack Query, ESLint, Vitest, Husky
    link: /es/guide/tech-stack
---

<div class="why-section">

## ¿Por qué Ronins React?

El ecosistema de JavaScript se mueve rápido. **Demasiado rápido.**

Cada semana trae nuevos frameworks, nuevos bundlers, nuevas herramientas. La IA está haciendo esto aún más rápido. Pero tú solo quieres construir tu aplicación.

**La realidad:**

- npm tiene **más de 3 millones de paquetes** — la mayoría están desactualizados o no son seguros
- **React sigue siendo #1** — 40% de los desarrolladores lo usan, 11 millones de sitios web
- Elegir las herramientas correctas toma **días de investigación**

### Hicimos la Investigación

Ronins React no es solo una plantilla. Es **curación con opinión**.

Probamos muchas herramientas y elegimos las mejores:

| Lo Que Necesitas | Lo Que Elegimos | Por Qué |
|------------------|-----------------|---------|
| Build Tool | Vite 7 + SWC | Servidor dev más rápido, HMR instantáneo |
| Estilos | Tailwind CSS 4 | Estándar de la industria, cero runtime |
| Componentes | shadcn/ui | Tu código, no una dependencia |
| Routing | React Router 7 | Más popular, respaldado por el equipo de React |
| Estado del Servidor | TanStack Query 5 | Mejor caché y sincronización |
| Validación | Zod 4 | TypeScript-first, seguro en runtime |
| Calidad de Código | ESLint 9 + Prettier | Código limpio, sin errores |

### ¿Por Qué No Otras Opciones?

| Opción | Problema |
|--------|----------|
| `npm create vite` | Solo te da Vite + React. Agregas todo lo demás. Toma horas. |
| Next.js | Demasiado complejo para apps simples. Server Components, App Router... |
| TanStack Start | Muy nuevo. Aún en beta. No estable. |
| Create React App | Proyecto muerto. Sin actualizaciones. Muy lento. |

### Cero Fatiga de Decisiones

::: code-group

```bash [npm]
npm create ronins-react@latest my-app
cd my-app && npm install && npm run dev
```

```bash [bun]
bun create ronins-react@latest my-app
cd my-app && bun install && bun dev
```

```bash [pnpm]
pnpm create ronins-react@latest my-app
cd my-app && pnpm install && pnpm dev
```

```bash [yarn]
yarn create ronins-react@latest my-app
cd my-app && yarn && yarn dev
```

:::

Eso es todo. Sin configuración. Sin investigación. Solo código.

**React impulsa la web. Nosotros impulsamos tu configuración de React.**

</div>

<style>
.why-section {
  max-width: 800px;
  margin: 4rem auto;
  padding: 0 1.5rem;
}

.why-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.why-section h3 {
  margin-top: 2rem;
  color: var(--vp-c-brand-1);
}

.why-section table {
  width: 100%;
  margin: 1rem 0;
}

.why-section blockquote {
  border-left: 4px solid var(--vp-c-brand-1);
  padding-left: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
}
</style>
