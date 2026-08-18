---
layout: home

hero:
  name: Ronins React
  text: Die richtigen Tools, bereits ausgewählt
  tagline: Hör auf zu recherchieren. Fang an zu bauen. Ein produktionsbereiter React-Starter mit kampferprobten Standardeinstellungen.
  actions:
    - theme: brand
      text: Erste Schritte
      link: /de/guide/getting-started
    - theme: alt
      text: Auf GitHub ansehen
      link: https://github.com/yldrmahmet/create-ronins-react

features:
  - icon:
      src: /vite.svg
    title: Vite 8 + Rolldown
    details: Blitzschnelle Entwicklung mit sofortigem HMR und optimierten Builds
  - icon:
      src: /tailwind.svg
    title: Tailwind CSS 4
    details: Utility-First CSS mit den neuesten Features und Performance-Verbesserungen
  - icon:
      src: /box.svg
    title: Keine Konfiguration
    details: Alles vorkonfiguriert. Einfach ausführen und loslegen
  - icon:
      src: /more.svg
    title: Und mehr...
    details: React 19, TypeScript, shadcn/ui, React Router, TanStack Query, ESLint, Vitest, Husky
    link: /de/guide/tech-stack
---

<div class="why-section">

## Warum Ronins React?

Das JavaScript-Ökosystem bewegt sich schnell. **Zu schnell.**

Jede Woche bringt neue Frameworks, neue Bundler, neue Tools. KI macht das noch schneller. Aber du willst einfach nur deine App bauen.

**Die Realität:**

- npm hat **über 3 Millionen Pakete** — die meisten sind veraltet oder unsicher
- **React ist immer noch #1** — 40% der Entwickler nutzen es, 11 Millionen Websites
- Die richtigen Tools zu wählen dauert **Tage der Recherche**

### Wir haben recherchiert

Ronins React ist nicht nur ein Template. Es ist **kuratierte Meinung**.

Wir haben viele Tools getestet und die besten ausgewählt:

| Was du brauchst | Was wir gewählt haben | Warum |
|-----------------|----------------------|-------|
| Build Tool | Vite 8 + Rolldown | Schnellster Dev-Server, sofortiges HMR |
| Styling | Tailwind CSS 4 | Industriestandard, keine Runtime |
| Komponenten | shadcn/ui | Dein Code, keine Abhängigkeit |
| Routing | React Router 8 | Am beliebtesten, vom React-Team empfohlen |
| Server-State | TanStack Query 5 | Bestes Caching und Synchronisierung |
| Validierung | Zod 4 | TypeScript-first, Runtime-sicher |
| Code-Qualität | ESLint 10 + Prettier | Sauberer, fehlerfreier Code |

### Warum nicht andere Optionen?

| Option | Problem |
|--------|---------|
| `npm create vite` | Gibt nur Vite + React. Alles andere musst du selbst hinzufügen. Dauert Stunden. |
| Next.js | Zu komplex für einfache Apps. Server Components, App Router... |
| TanStack Start | Zu neu. Noch in Beta. Nicht stabil. |
| Create React App | Totes Projekt. Keine Updates. Sehr langsam. |

### Keine Entscheidungsmüdigkeit

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

Das ist alles. Keine Konfiguration. Keine Recherche. Einfach coden.

**React treibt das Web an. Wir treiben dein React-Setup an.**

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
