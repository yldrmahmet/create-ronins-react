# Was ist Ronins React?

Ronins React ist ein Tool. Es erstellt React-Apps für dich. Alle Tools sind bereit. Du schreibst nur Code.

## Das Problem

JavaScript hat zu viele Tools. Jede Woche kommen neue Tools raus. Es ist schwer zu wählen.

**Einige Zahlen:**

- npm hat **3 Millionen Pakete**
- Die meisten Pakete sind veraltet oder unsicher
- React ist immer noch **#1** — 40% der Entwickler nutzen es
- 11 Millionen Websites nutzen React

Das Problem ist nicht React. Das Problem ist: **Welche Tools mit React verwenden?**

## Warum nicht andere Optionen?

### Warum nicht `npm create vite`?

Vite ist großartig. Aber es gibt dir nur **Vite + React**.

Du musst noch hinzufügen:
- Tailwind CSS (Styling)
- React Router (Seiten)
- TanStack Query (API-Aufrufe)
- ESLint (Bugs finden)
- Prettier (Code formatieren)
- Husky (Git-Checks)
- shadcn/ui (Buttons, Dialoge)

Das dauert **Stunden**. Mit Ronins React dauert es **30 Sekunden**.

### Warum nicht Next.js?

Next.js ist ein großes Framework. Es hat:
- Server Components
- App Router
- Server Actions
- Viele komplexe Features

**Next.js ist gut für:** Websites, die SEO brauchen (Google-Ranking).

**Aber viele Apps brauchen das nicht:**
- Admin-Dashboards
- Interne Tools
- Single Page Apps (SPA)

Für diese ist Next.js **zu komplex**. Ronins React ist einfacher.

### Warum nicht TanStack Start?

TanStack Start ist sehr neu. Es ist noch in Beta. Es kann sich viel ändern. Es ist noch nicht stabil.

Ronins React verwendet **nur stabile Tools**. Kein Beta. Keine Breaking Changes.

### Warum nicht Create React App?

Create React App (CRA) ist tot. Keine Updates seit 2023. Es verwendet Webpack, das ist langsam.

Ronins React verwendet Vite. Vite ist **10x schneller**.

## Was wir bieten

| Du brauchst | Wir bieten | Warum dieses |
|-------------|------------|--------------|
| Build Tool | Vite 8 | Sehr schnell |
| Sprache | TypeScript | Findet Bugs früh |
| Styling | Tailwind CSS 4 | Einfach zu verwenden |
| Komponenten | shadcn/ui | Du besitzt den Code |
| Seiten | React Router 8 | Am beliebtesten |
| API-Aufrufe | TanStack Query 5 | Bestes Caching |
| Validierung | Zod 4 | Type-safe |
| Bug-Finder | ESLint 10 | Moderne Regeln |
| Formatter | Prettier | Sauberer Code |
| Git-Hooks | Husky | Prüft vor Commit |
| Tests | Vitest | Schnelle Tests |

**Alles konfiguriert. Alles funktioniert zusammen.**

## Unsere Regeln

### 1. Sofort einsatzbereit

Kein Setup. Keine Konfiguration. Einfach ausführen und coden.

### 2. Neu aber stabil

Wir verwenden neue Versionen. Aber nur stabile. Kein Beta.

### 3. Einfach

Keine zusätzlichen Tools. Nur was du brauchst. Später mehr hinzufügen wenn du willst.

### 4. Du besitzt es

shadcn/ui Komponenten sind in deinem Code. Nicht in node_modules. Du kannst sie ändern.

## Wer sollte das nutzen?

- **Neue Entwickler** — Verschwende keine Zeit mit Konfiguration
- **Erfahrene Entwickler** — Überspringe das langweilige Setup
- **Teams** — Gleiche Tools für alle
- **Startups** — Schnell liefern, sauber bleiben

## Schnellstart

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

**30 Sekunden. Fertig.**

---

**React treibt das Web an. Wir treiben dein React-Setup an.**

[Jetzt starten →](/de/guide/getting-started)
