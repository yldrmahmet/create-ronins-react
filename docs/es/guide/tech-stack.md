# Stack Tecnológico

Todas las herramientas incluidas en tu app:

<div class="tech-grid">

<a href="https://vite.dev" class="tech-card" target="_blank">
  <img src="/vite.svg" alt="Vite" />
  <h3>Vite 7</h3>
  <p>Build tool con HMR instantáneo</p>
</a>

<a href="https://react.dev" class="tech-card" target="_blank">
  <img src="/react.svg" alt="React" />
  <h3>React 19</h3>
  <p>Librería UI</p>
</a>

<a href="https://www.typescriptlang.org" class="tech-card" target="_blank">
  <img src="/typescript.svg" alt="TypeScript" />
  <h3>TypeScript 5.9</h3>
  <p>JavaScript con tipos</p>
</a>

<a href="https://tailwindcss.com" class="tech-card" target="_blank">
  <img src="/tailwind.svg" alt="Tailwind CSS" />
  <h3>Tailwind CSS 4</h3>
  <p>CSS utility-first</p>
</a>

<a href="https://ui.shadcn.com" class="tech-card" target="_blank">
  <img src="/shadcn.svg" alt="shadcn/ui" />
  <h3>shadcn/ui</h3>
  <p>Componentes UI</p>
</a>

<a href="https://reactrouter.com" class="tech-card" target="_blank">
  <img src="/reactrouter.svg" alt="React Router" />
  <h3>React Router 7</h3>
  <p>Routing del lado cliente</p>
</a>

<a href="https://tanstack.com/query" class="tech-card" target="_blank">
  <img src="/tanstack.svg" alt="TanStack Query" />
  <h3>TanStack Query 5</h3>
  <p>Gestión de estado del servidor</p>
</a>

<a href="https://zod.dev" class="tech-card" target="_blank">
  <img src="/zod.svg" alt="Zod" />
  <h3>Zod 4</h3>
  <p>Validación de esquemas</p>
</a>

<a href="https://eslint.org" class="tech-card" target="_blank">
  <img src="/eslint.svg" alt="ESLint" />
  <h3>ESLint 9</h3>
  <p>Encontrar bugs en código</p>
</a>

<a href="https://prettier.io" class="tech-card" target="_blank">
  <img src="/prettier.svg" alt="Prettier" />
  <h3>Prettier</h3>
  <p>Formateador de código</p>
</a>

<a href="https://vitest.dev" class="tech-card" target="_blank">
  <img src="/vitest.svg" alt="Vitest" />
  <h3>Vitest</h3>
  <p>Tests unitarios</p>
</a>

<a href="https://typicode.github.io/husky" class="tech-card" target="_blank">
  <img src="/husky.svg" alt="Husky" />
  <h3>Husky</h3>
  <p>Hooks de Git</p>
</a>

</div>

---

## ¿Por Qué Estas Herramientas?

### Vite
Vite es el build tool más rápido para apps React. Inicia en menos de 1 segundo. Los cambios se muestran instantáneamente. Webpack es 10 veces más lento. Turbopack también es rápido, pero solo funciona bien con Next.js.

---

### React
React sigue siendo #1. 40% de los desarrolladores lo usan. 11 millones de sitios web corren en React. Tiene el ecosistema más grande, más trabajos, y más recursos de aprendizaje.

---

### TypeScript
TypeScript encuentra bugs antes de ejecutar tu código. Ahora es el estándar de la industria. No existe una alternativa real.

---

### Tailwind CSS
Tailwind es el framework CSS más popular. Escribes estilos directamente en HTML. No necesitas archivos CSS separados. UnoCSS es más rápido, pero Tailwind tiene una comunidad más grande y mejor soporte de IDE.

---

### shadcn/ui
shadcn/ui es diferente. Los componentes se copian a TU código. Los tienes. Puedes cambiarlos. Sin conflictos de versión. Sin actualizaciones que rompen. Construido sobre Radix UI para accesibilidad.

---

### React Router
React Router es el router más usado para React. Existe desde 2014. Muy estable. Muchos recursos disponibles. TanStack Router tiene mejor soporte de TypeScript, pero React Router está más probado.

---

### TanStack Query
TanStack Query es lo mejor para llamadas API. Cachea datos. Actualiza en segundo plano. Tiene DevTools. Mejor que SWR en la mayoría de casos.

---

### Zod
Zod verifica si los datos son correctos en runtime. Funciona genial con TypeScript. Tiene 78+ integraciones de librerías. Muy popular.

::: tip Estamos observando Valibot
[Valibot](https://valibot.dev) es una nueva librería de validación. Es **90% más pequeña** que Zod (1.37 KB vs 17.7 KB). Mismo estilo de API. Podríamos cambiar a Valibot en el futuro cuando su ecosistema crezca. Por ahora, usamos Zod porque tiene más integraciones y documentación.
:::

---

### ESLint + Prettier
ESLint encuentra bugs. Prettier formatea código. Juntos mantienen tu código limpio.

::: tip Estamos observando Biome
[Biome](https://biomejs.dev) es una nueva herramienta. Hace lo que hacen ESLint + Prettier, pero **20 veces más rápido**. Una herramienta en vez de dos. Un archivo de config en vez de cuatro. Podríamos cambiar a Biome en el futuro. Por ahora, usamos ESLint + Prettier porque:
- ESLint tiene 1000+ plugins
- Biome tiene ~80% de cobertura de plugins
- Más recursos y ayuda disponible para ESLint

Cuando el ecosistema de Biome crezca, consideraremos cambiar.
:::

---

### Vitest
Vitest está hecho para proyectos Vite. Es 10-20 veces más rápido que Jest. Misma API que Jest, así que es fácil de aprender. El claro ganador para apps Vite.

---

### Husky
Husky ejecuta verificaciones antes de hacer commit. Asegura que código malo no entre a tu repo. Muy popular con 15M+ descargas semanales.

---

## Roadmap Futuro

Evaluamos nuevas herramientas continuamente. Esto es lo que estamos observando:

| Actual | Observando | Por Qué |
|--------|------------|---------|
| ESLint + Prettier | **Biome** | 20x más rápido, herramienta única |
| Zod | **Valibot** | 90% menor tamaño de bundle |
| Husky | **Lefthook** | Ejecución paralela, 50% más rápido |
| React Router | **TanStack Router** | Mejor soporte TypeScript |

Priorizamos **estabilidad sobre velocidad**. Cuando estas alternativas maduren, consideraremos cambiar.

<style>
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.tech-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}

.tech-card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  transform: translateY(-2px);
}

.tech-card img {
  width: 48px;
  height: 48px;
  margin-bottom: 0.75rem;
}

.tech-card h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.tech-card p {
  margin: 0.25rem 0 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  text-align: center;
}
</style>
