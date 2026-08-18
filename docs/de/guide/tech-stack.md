# Tech Stack

Alle Tools in deiner App:

<div class="tech-grid">

<a href="https://vite.dev" class="tech-card" target="_blank">
  <img src="/images/vite.svg" alt="Vite" />
  <h3>Vite 8</h3>
  <p>Build-Tool mit sofortigem HMR</p>
</a>

<a href="https://react.dev" class="tech-card" target="_blank">
  <img src="/images/react.svg" alt="React" />
  <h3>React 19</h3>
  <p>UI-Bibliothek</p>
</a>

<a href="https://www.typescriptlang.org" class="tech-card" target="_blank">
  <img src="/images/typescript.svg" alt="TypeScript" />
  <h3>TypeScript 5.9</h3>
  <p>Typsicheres JavaScript</p>
</a>

<a href="https://tailwindcss.com" class="tech-card" target="_blank">
  <img src="/images/tailwind.svg" alt="Tailwind CSS" />
  <h3>Tailwind CSS 4</h3>
  <p>Utility-First CSS</p>
</a>

<a href="https://ui.shadcn.com" class="tech-card" target="_blank">
  <img src="/images/shadcn.svg" alt="shadcn/ui" />
  <h3>shadcn/ui</h3>
  <p>UI-Komponenten</p>
</a>

<a href="https://reactrouter.com" class="tech-card" target="_blank">
  <img src="/images/reactrouter.svg" alt="React Router" />
  <h3>React Router 8</h3>
  <p>Client-Side Routing</p>
</a>

<a href="https://tanstack.com/query" class="tech-card" target="_blank">
  <img src="/images/tanstack.svg" alt="TanStack Query" />
  <h3>TanStack Query 5</h3>
  <p>Server-State-Verwaltung</p>
</a>

<a href="https://zod.dev" class="tech-card" target="_blank">
  <img src="/images/zod.svg" alt="Zod" />
  <h3>Zod 4</h3>
  <p>Schema-Validierung</p>
</a>

<a href="https://eslint.org" class="tech-card" target="_blank">
  <img src="/images/eslint.svg" alt="ESLint" />
  <h3>ESLint 10</h3>
  <p>Bugs im Code finden</p>
</a>

<a href="https://prettier.io" class="tech-card" target="_blank">
  <img src="/images/prettier.svg" alt="Prettier" />
  <h3>Prettier</h3>
  <p>Code-Formatter</p>
</a>

<a href="https://vitest.dev" class="tech-card" target="_blank">
  <img src="/images/vitest.svg" alt="Vitest" />
  <h3>Vitest</h3>
  <p>Unit-Tests</p>
</a>

<a href="https://typicode.github.io/husky" class="tech-card" target="_blank">
  <img src="/images/husky.svg" alt="Husky" />
  <h3>Husky</h3>
  <p>Git-Hooks</p>
</a>

</div>

---

## Warum diese Tools?

### Vite
Vite ist das schnellste Build-Tool für React-Apps. Startet in weniger als 1 Sekunde. Änderungen erscheinen sofort. Webpack ist 10x langsamer. Turbopack ist auch schnell, funktioniert aber nur gut mit Next.js.

---

### React
React ist immer noch #1. 40% der Entwickler nutzen es. 11 Millionen Websites laufen auf React. Es hat das größte Ökosystem, die meisten Jobs und die meisten Lernressourcen.

---

### TypeScript
TypeScript findet Bugs bevor du deinen Code ausführst. Es ist jetzt der Industriestandard. Es gibt keine echte Alternative.

---

### Tailwind CSS
Tailwind ist das beliebteste CSS-Framework. Du schreibst Styles direkt im HTML. Keine separaten CSS-Dateien nötig. UnoCSS ist schneller, aber Tailwind hat eine größere Community und bessere IDE-Unterstützung.

---

### shadcn/ui
shadcn/ui ist anders. Komponenten werden in DEINEN Code kopiert. Du besitzt sie. Du kannst sie ändern. Keine Versionskonflikte. Keine Breaking Updates. Auf Radix UI aufgebaut für Barrierefreiheit.

---

### React Router
React Router ist der meistgenutzte Router für React. Existiert seit 2014. Sehr stabil. Viele Ressourcen verfügbar. TanStack Router hat bessere TypeScript-Unterstützung, aber React Router ist bewährter.

---

### TanStack Query
TanStack Query ist das Beste für API-Aufrufe. Es cached Daten. Aktualisiert im Hintergrund. Hat DevTools. Besser als SWR in den meisten Fällen.

---

### Zod
Zod prüft ob Daten zur Laufzeit korrekt sind. Funktioniert super mit TypeScript. Hat 78+ Bibliotheks-Integrationen. Sehr beliebt.

::: tip Wir beobachten Valibot
[Valibot](https://valibot.dev) ist eine neue Validierungsbibliothek. Sie ist **90% kleiner** als Zod (1.37 KB vs 17.7 KB). Gleicher API-Stil. Wir könnten in Zukunft zu Valibot wechseln, wenn das Ökosystem wächst. Vorerst nutzen wir Zod, weil es mehr Integrationen und Dokumentation hat.
:::

---

### ESLint + Prettier
ESLint findet Bugs. Prettier formatiert Code. Zusammen halten sie deinen Code sauber.

::: tip Wir beobachten Biome
[Biome](https://biomejs.dev) ist ein neues Tool. Es macht was ESLint + Prettier machen, aber **20x schneller**. Ein Tool statt zwei. Eine Config-Datei statt vier. Wir könnten in Zukunft zu Biome wechseln. Vorerst nutzen wir ESLint + Prettier weil:
- ESLint hat 1000+ Plugins
- Biome hat ~80% Plugin-Abdeckung
- Mehr Ressourcen und Hilfe für ESLint verfügbar

Wenn Biomes Ökosystem wächst, werden wir einen Wechsel in Betracht ziehen.
:::

---

### Vitest
Vitest ist für Vite-Projekte gemacht. Es ist 10-20x schneller als Jest. Gleiche API wie Jest, also leicht zu lernen. Der klare Gewinner für Vite-Apps.

---

### Husky
Husky führt Prüfungen vor dem Commit aus. Es stellt sicher, dass schlechter Code nicht in dein Repo kommt. Sehr beliebt mit 15M+ wöchentlichen Downloads.

---

## Zukunfts-Roadmap

Wir evaluieren ständig neue Tools. Das beobachten wir:

| Aktuell | Beobachten | Warum |
|---------|------------|-------|
| ESLint + Prettier | **Biome** | 20x schneller, einzelnes Tool |
| Zod | **Valibot** | 90% kleinere Bundle-Größe |
| Husky | **Lefthook** | Parallele Ausführung, 50% schneller |
| React Router | **TanStack Router** | Bessere TypeScript-Unterstützung |

Wir priorisieren **Stabilität vor Geschwindigkeit**. Wenn diese Alternativen reifen, werden wir einen Wechsel in Betracht ziehen.

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
