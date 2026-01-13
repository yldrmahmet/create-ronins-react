# クイックスタート

## アプリを作成する

パッケージマネージャーを選んで実行：

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

ブラウザで `http://localhost:5173` を開く。完了！

## クリーンモード

最小限のアプリが欲しい？デモページなし？`--clean` を使用：

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

これにより削除されるもの：
- デモページ
- ロゴファイル

シンプルな "Hello World" アプリが得られます。

## 現在のフォルダを使用

現在のフォルダに作成したい？`.` を使用：

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
フォルダは空である必要があります。
:::

## 次のステップ

- [プロジェクト構造](/ja/guide/project-structure) — すべてのファイルを見る
- [コマンド](/ja/guide/commands) — すべてのコマンドを見る
- [コンポーネントの追加](/ja/guide/adding-components) — ボタン、ダイアログなどを追加
