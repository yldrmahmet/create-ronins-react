# Ronins React とは？

Ronins React はツールです。React アプリを作成します。すべてのツールが準備済み。コードを書くだけ。

## 問題

JavaScript にはツールが多すぎます。毎週新しいツールが出ます。選ぶのが難しい。

**いくつかの数字：**

- npm には**300万のパッケージ**がある
- ほとんどのパッケージは古いか安全ではない
- React は今でも**1位** — 40%の開発者が使用
- 1100万のウェブサイトが React を使用

問題は React ではない。問題は：**React と一緒にどのツールを使うか？**

## なぜ他の選択肢ではないのか？

### なぜ `npm create vite` ではないのか？

Vite は素晴らしい。でも **Vite + React** だけ。

まだ追加が必要：
- Tailwind CSS（スタイリング）
- React Router（ページ）
- TanStack Query（API 呼び出し）
- ESLint（バグ発見）
- Prettier（コードフォーマット）
- Husky（git チェック）
- shadcn/ui（ボタン、ダイアログ）

これには**何時間も**かかる。Ronins React なら **30秒**。

### なぜ Next.js ではないのか？

Next.js は大きなフレームワーク。以下を持つ：
- Server Components
- App Router
- Server Actions
- 多くの複雑な機能

**Next.js が適している：** SEO（Google ランキング）が必要なウェブサイト。

**でも多くのアプリはこれを必要としない：**
- 管理ダッシュボード
- 内部ツール
- シングルページアプリ（SPA）

これらには Next.js は**複雑すぎる**。Ronins React はよりシンプル。

### なぜ TanStack Start ではないのか？

TanStack Start は非常に新しい。まだベータ版。大きく変わる可能性がある。まだ安定していない。

Ronins React は**安定したツールのみ**使用。ベータなし。破壊的変更なし。

### なぜ Create React App ではないのか？

Create React App (CRA) は死んでいる。2023年以降更新なし。Webpack を使用、遅い。

Ronins React は Vite を使用。Vite は **10倍速い**。

## 私たちが提供するもの

| 必要なもの | 提供するもの | なぜこれか |
|-----------|------------|----------|
| ビルドツール | Vite 7 | 非常に速い |
| 言語 | TypeScript | 早期にバグ発見 |
| スタイリング | Tailwind CSS 4 | 使いやすい |
| コンポーネント | shadcn/ui | コードを所有 |
| ページ | React Router 7 | 最も人気 |
| API 呼び出し | TanStack Query 5 | 最高のキャッシュ |
| バリデーション | Zod 4 | 型安全 |
| バグ発見器 | ESLint 9 | 現代的なルール |
| フォーマッター | Prettier | クリーンなコード |
| Git フック | Husky | コミット前チェック |
| テスト | Vitest | 高速テスト |

**すべて設定済み。すべて連携して動作。**

## 私たちのルール

### 1. すぐに使える

セットアップ不要。設定不要。実行してコードを書くだけ。

### 2. 新しいが安定

新しいバージョンを使用。でも安定版のみ。ベータなし。

### 3. シンプル

余分なツールなし。必要なものだけ。後で追加可能。

### 4. あなたが所有

shadcn/ui コンポーネントはあなたのコード内。node_modules ではない。変更可能。

## 誰が使うべき？

- **新人開発者** — 設定に時間を無駄にしない
- **経験豊富な開発者** — 退屈なセットアップをスキップ
- **チーム** — 全員が同じツール
- **スタートアップ** — 速く出荷、クリーンを保つ

## クイックスタート

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

**30秒。完了。**

---

**React がウェブを動かす。私たちがあなたの React セットアップを動かす。**

[今すぐ始める →](/ja/guide/getting-started)
