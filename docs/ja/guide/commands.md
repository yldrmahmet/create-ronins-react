# コマンド

パッケージマネージャーを選んでください。コマンドはそれぞれ異なります。

## 開発サーバーを起動

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

`http://localhost:5173` を開く。変更は即座に反映。

## 本番用ビルド

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

`dist/` フォルダを作成。これをサーバーにアップロード。

::: details なぜ `bun build` ではなく `bun run build`？

これらは異なるコマンド：

| コマンド | 動作 |
|---------|------|
| `bun build` | Bun のバンドラーを使用 |
| `bun run build` | package.json の "build" スクリプトを実行 |

`bun run build` を使用する理由は **Vite のバンドラー**を実行するため。

**なぜ Bun のバンドラーではなく Vite？**
- Vite はより多くの機能を持つ
- Vite はより多くのプラグインを持つ
- Vite は React と何年もテストされている

**Bun はコード実行が速い。Vite はビルドに適している。**

:::

## コードチェック

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

すべてのチェックを実行：
- ESLint（バグ発見）
- Prettier（フォーマットチェック）
- TypeScript（型チェック）

## バグ発見（Lint）

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

自動でバグを修正：

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

## コードフォーマット

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

コードをきれいに。スペース、クォートなどを修正。

## テスト実行

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

テストを実行。変更を監視。

一度だけ実行（CI 用）：

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

## デモコンテンツを削除

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

デモファイルを削除。クリーンな "Hello World" アプリを取得。

## すべてのコマンド

| コマンド | 動作 |
|---------|------|
| `dev` | 開発サーバー起動 |
| `build` | 本番用ビルド |
| `check` | すべてのチェック実行 |
| `lint` | バグ発見 |
| `format` | コード整形 |
| `test` | テスト実行（監視） |
| `test:run` | テスト実行（一度） |
| `clean` | デモファイル削除 |
