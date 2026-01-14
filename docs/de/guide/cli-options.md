# CLI-Optionen

## Grundlegende Verwendung

::: code-group

```bash [npm]
npm create ronins-react@latest [name] [optionen]
```

```bash [bun]
bun create ronins-react@latest [name] [optionen]
```

```bash [pnpm]
pnpm create ronins-react@latest [name] [optionen]
```

```bash [yarn]
yarn create ronins-react@latest [name] [optionen]
```

:::

## Name

Der Ordnername für deine App:

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

Erstellt den `my-app/` Ordner.

**Kein Name?** Es wird dich fragen.

## Aktuellen Ordner verwenden

Verwende `.` um im aktuellen Ordner zu erstellen:

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
Ordner muss leer sein!
:::

## Optionen

### `--clean` oder `-c`

Erstellt minimale App. Keine Demo-Dateien.

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

**Entfernt:**
- `src/app/routes/stack.tsx` (Demo-Seite)
- `public/ronins.png` (Logo)

**Erstellt:**
- Einfache "Hello World" App

## Paketmanager

Das CLI weiß, welchen Paketmanager du verwendest:

| Du führst aus | Es erkennt |
|---------------|------------|
| `npm create ronins-react@latest` | npm |
| `bun create ronins-react@latest` | bun |
| `pnpm create ronins-react@latest` | pnpm |
| `yarn create ronins-react@latest` | yarn |

README und CLAUDE.md Dateien verwenden die Befehle deines Paketmanagers.

## Fehler

| Fehler | Warum |
|--------|-------|
| "Directory exists" | Ordner existiert bereits. Wähle neuen Namen. |
| "Not empty" | Aktueller Ordner hat Dateien. Verwende leeren Ordner. |
