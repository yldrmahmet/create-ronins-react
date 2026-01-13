# CLI オプション

## 基本的な使い方

::: code-group

```bash [npm]
npm create ronins-react@latest [名前] [オプション]
```

```bash [bun]
bun create ronins-react@latest [名前] [オプション]
```

```bash [pnpm]
pnpm create ronins-react@latest [名前] [オプション]
```

```bash [yarn]
yarn create ronins-react@latest [名前] [オプション]
```

:::

## 名前

アプリのフォルダ名：

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

`my-app/` フォルダを作成。

**名前なし？** 聞かれます。

## 現在のフォルダを使用

`.` を使用して現在のフォルダに作成：

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
フォルダは空である必要があります！
:::

## オプション

### `--clean` または `-c`

最小限のアプリを作成。デモファイルなし。

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

**削除されるもの：**
- `src/app/routes/stack.tsx`（デモページ）
- `public/ronins.svg`（ロゴ）

**作成されるもの：**
- シンプルな "Hello World" アプリ

## パッケージマネージャー

CLI はどのパッケージマネージャーを使用しているか認識：

| 実行するコマンド | 認識 |
|----------------|------|
| `npm create ronins-react@latest` | npm |
| `bun create ronins-react@latest` | bun |
| `pnpm create ronins-react@latest` | pnpm |
| `yarn create ronins-react@latest` | yarn |

README と CLAUDE.md ファイルはあなたのパッケージマネージャーのコマンドを使用。

## エラー

| エラー | 理由 |
|-------|------|
| "Directory exists" | フォルダが既に存在。新しい名前を選択。 |
| "Not empty" | 現在のフォルダにファイルがある。空のフォルダを使用。 |
