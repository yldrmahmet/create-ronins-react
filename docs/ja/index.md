---
layout: home

hero:
  name: Ronins React
  text: 正しいツール、すでに選択済み
  tagline: 調査をやめて、構築を始めよう。実戦で検証されたデフォルト設定を持つ本番環境対応の React スターター。
  actions:
    - theme: brand
      text: はじめる
      link: /ja/guide/getting-started
    - theme: alt
      text: GitHub で見る
      link: https://github.com/yldrmahmet/create-ronins-react

features:
  - icon:
      src: /vite.svg
    title: Vite 7 + SWC
    details: 即座の HMR と最適化されたビルドによる超高速開発
  - icon:
      src: /tailwind.svg
    title: Tailwind CSS 4
    details: 最新機能とパフォーマンス改善を備えたユーティリティファースト CSS
  - icon:
      src: /box.svg
    title: 設定不要
    details: すべて事前設定済み。実行するだけでコーディング開始
  - icon:
      src: /more.svg
    title: その他にも...
    details: React 19、TypeScript、shadcn/ui、React Router、TanStack Query、ESLint、Vitest、Husky
    link: /ja/guide/tech-stack
---

<div class="why-section">

## なぜ Ronins React？

JavaScript エコシステムは速く動いています。**速すぎます。**

毎週新しいフレームワーク、新しいバンドラー、新しいツールが登場します。AI がこれをさらに速くしています。でも、あなたはただアプリを作りたいだけ。

**現実：**

- npm には**300万以上のパッケージ**がある — ほとんどは古いか安全ではない
- **React は今でも1位** — 40%の開発者が使用、1100万のウェブサイト
- 正しいツールを選ぶのに**何日もの調査**が必要

### 私たちが調査しました

Ronins React は単なるテンプレートではありません。**こだわりのキュレーション**です。

多くのツールをテストし、最高のものを選びました：

| 必要なもの | 私たちの選択 | 理由 |
|-----------|-------------|------|
| ビルドツール | Vite 7 + SWC | 最速の開発サーバー、即座の HMR |
| スタイリング | Tailwind CSS 4 | 業界標準、ゼロランタイム |
| コンポーネント | shadcn/ui | 依存関係ではなく、あなたのコード |
| ルーティング | React Router 7 | 最も人気、React チーム推奨 |
| サーバー状態 | TanStack Query 5 | 最高のキャッシュと同期 |
| バリデーション | Zod 4 | TypeScript ファースト、ランタイム安全 |
| コード品質 | ESLint 9 + Prettier | クリーンでエラーのないコード |

### なぜ他の選択肢ではないのか？

| オプション | 問題 |
|----------|------|
| `npm create vite` | Vite + React だけ。他はすべて自分で追加。何時間もかかる。 |
| Next.js | シンプルなアプリには複雑すぎる。Server Components、App Router... |
| TanStack Start | 新しすぎる。まだベータ版。安定していない。 |
| Create React App | 死んだプロジェクト。更新なし。非常に遅い。 |

### 決定疲れゼロ

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

以上です。設定不要。調査不要。コードを書くだけ。

**React がウェブを動かす。私たちがあなたの React セットアップを動かす。**

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
