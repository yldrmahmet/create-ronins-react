# 技術スタック

アプリに含まれるすべてのツール：

<div class="tech-grid">

<a href="https://vite.dev" class="tech-card" target="_blank">
  <img src="/vite.svg" alt="Vite" />
  <h3>Vite 7</h3>
  <p>即座の HMR を持つビルドツール</p>
</a>

<a href="https://react.dev" class="tech-card" target="_blank">
  <img src="/react.svg" alt="React" />
  <h3>React 19</h3>
  <p>UI ライブラリ</p>
</a>

<a href="https://www.typescriptlang.org" class="tech-card" target="_blank">
  <img src="/typescript.svg" alt="TypeScript" />
  <h3>TypeScript 5.9</h3>
  <p>型安全な JavaScript</p>
</a>

<a href="https://tailwindcss.com" class="tech-card" target="_blank">
  <img src="/tailwind.svg" alt="Tailwind CSS" />
  <h3>Tailwind CSS 4</h3>
  <p>ユーティリティファースト CSS</p>
</a>

<a href="https://ui.shadcn.com" class="tech-card" target="_blank">
  <img src="/shadcn.svg" alt="shadcn/ui" />
  <h3>shadcn/ui</h3>
  <p>UI コンポーネント</p>
</a>

<a href="https://reactrouter.com" class="tech-card" target="_blank">
  <img src="/reactrouter.svg" alt="React Router" />
  <h3>React Router 7</h3>
  <p>クライアントサイドルーティング</p>
</a>

<a href="https://tanstack.com/query" class="tech-card" target="_blank">
  <img src="/tanstack.svg" alt="TanStack Query" />
  <h3>TanStack Query 5</h3>
  <p>サーバー状態管理</p>
</a>

<a href="https://zod.dev" class="tech-card" target="_blank">
  <img src="/zod.svg" alt="Zod" />
  <h3>Zod 4</h3>
  <p>スキーマバリデーション</p>
</a>

<a href="https://eslint.org" class="tech-card" target="_blank">
  <img src="/eslint.svg" alt="ESLint" />
  <h3>ESLint 9</h3>
  <p>コードのバグ発見</p>
</a>

<a href="https://prettier.io" class="tech-card" target="_blank">
  <img src="/prettier.svg" alt="Prettier" />
  <h3>Prettier</h3>
  <p>コードフォーマッター</p>
</a>

<a href="https://vitest.dev" class="tech-card" target="_blank">
  <img src="/vitest.svg" alt="Vitest" />
  <h3>Vitest</h3>
  <p>ユニットテスト</p>
</a>

<a href="https://typicode.github.io/husky" class="tech-card" target="_blank">
  <img src="/husky.svg" alt="Husky" />
  <h3>Husky</h3>
  <p>Git フック</p>
</a>

</div>

---

## なぜこれらのツール？

### Vite
Vite は React アプリ用の最速ビルドツール。1秒未満で起動。変更は即座に反映。Webpack は10倍遅い。Turbopack も速いが、Next.js とのみうまく動く。

---

### React
React は今でも1位。40%の開発者が使用。1100万のウェブサイトが React を使用。最大のエコシステム、最も多くの仕事、最も多くの学習リソース。

---

### TypeScript
TypeScript はコード実行前にバグを発見。現在の業界標準。本当の代替品は存在しない。

---

### Tailwind CSS
Tailwind は最も人気のある CSS フレームワーク。HTML 内で直接スタイルを書く。別の CSS ファイル不要。UnoCSS は速いが、Tailwind はより大きなコミュニティと優れた IDE サポートを持つ。

---

### shadcn/ui
shadcn/ui は違う。コンポーネントはあなたのコードにコピーされる。所有する。変更できる。バージョン競合なし。破壊的更新なし。アクセシビリティのために Radix UI 上に構築。

---

### React Router
React Router は React 用の最も使われているルーター。2014年から存在。非常に安定。多くのリソースが利用可能。TanStack Router は優れた TypeScript サポートを持つが、React Router はより実績がある。

---

### TanStack Query
TanStack Query は API 呼び出しに最適。データをキャッシュ。バックグラウンドで更新。DevTools あり。ほとんどの場合で SWR より優れている。

---

### Zod
Zod はランタイムでデータが正しいかチェック。TypeScript とうまく連携。78以上のライブラリ統合。非常に人気。

::: tip Valibot を注目中
[Valibot](https://valibot.dev) は新しいバリデーションライブラリ。Zod より **90%小さい**（1.37 KB vs 17.7 KB）。同じ API スタイル。エコシステムが成長したら将来 Valibot に切り替える可能性がある。現在は Zod を使用、より多くの統合とドキュメントがあるため。
:::

---

### ESLint + Prettier
ESLint はバグを発見。Prettier はコードをフォーマット。一緒にコードをクリーンに保つ。

::: tip Biome を注目中
[Biome](https://biomejs.dev) は新しいツール。ESLint + Prettier と同じことをするが、**20倍速い**。2つではなく1つのツール。4つではなく1つの設定ファイル。将来 Biome に切り替える可能性がある。現在は ESLint + Prettier を使用：
- ESLint は 1000以上のプラグインを持つ
- Biome は約80%のプラグインカバレッジ
- ESLint にはより多くのリソースとヘルプがある

Biome のエコシステムが成長したら、切り替えを検討する。
:::

---

### Vitest
Vitest は Vite プロジェクト用に作られた。Jest より10-20倍速い。Jest と同じ API で学習しやすい。Vite アプリの明確な勝者。

---

### Husky
Husky はコミット前にチェックを実行。悪いコードがリポジトリに入らないようにする。週1500万以上のダウンロードで非常に人気。

---

## 将来のロードマップ

新しいツールを継続的に評価。注目しているもの：

| 現在 | 注目 | 理由 |
|------|-----|------|
| ESLint + Prettier | **Biome** | 20倍速い、単一ツール |
| Zod | **Valibot** | 90%小さいバンドル |
| Husky | **Lefthook** | 並列実行、50%速い |
| React Router | **TanStack Router** | 優れた TypeScript サポート |

**速度より安定性**を優先。これらの代替品が成熟したら、切り替えを検討する。

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
