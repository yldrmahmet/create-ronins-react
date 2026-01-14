# プロジェクト構造

アプリはこのような構造：

```
my-app/
├── public/
│   └── ronins.png          # ロゴ（--clean で削除）
├── src/
│   ├── app/
│   │   ├── routes/         # ページ
│   │   │   ├── app.tsx     # ホームページ
│   │   │   └── stack.tsx   # デモページ（--clean で削除）
│   │   ├── providers.tsx   # アプリ設定
│   │   └── router.tsx      # ページルート
│   ├── components/
│   │   └── ui/             # UI コンポーネント（ボタンなど）
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts        # ヘルパー関数
│   ├── main.tsx            # アプリ開始点
│   └── index.css           # スタイル
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## 重要なフォルダ

### `src/app/routes/`

ページはここに配置。1ファイル = 1ページ。

```
routes/
├── app.tsx      → localhost:5173/
├── about.tsx    → localhost:5173/about
└── contact.tsx  → localhost:5173/contact
```

### `src/components/ui/`

shadcn/ui からの UI コンポーネント。追加するには：

::: code-group

```bash [npm]
npx shadcn add dialog card
```

```bash [bun]
bunx shadcn add dialog card
```

```bash [pnpm]
pnpm dlx shadcn add dialog card
```

```bash [yarn]
yarn dlx shadcn add dialog card
```

:::

### `src/lib/`

ヘルパー関数。`cn()` 関数は CSS クラスを結合：

```tsx
import { cn } from "@/lib/utils"

// このように使用：
<div className={cn("text-red-500", isActive && "font-bold")} />
```

## ファイルの連携

| ファイル | 動作 |
|---------|------|
| `main.tsx` | アプリ開始 |
| `providers.tsx` | TanStack Query などを設定 |
| `router.tsx` | すべてのページルートを定義 |
| `routes/*.tsx` | ページコンポーネント |
