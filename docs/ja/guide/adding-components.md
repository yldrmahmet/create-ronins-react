# コンポーネントの追加

## shadcn/ui とは？

[shadcn/ui](https://ui.shadcn.com) は既製のコンポーネントを提供：
- ボタン
- ダイアログ（ポップアップ）
- フォーム
- カード
- テーブル
- その他...

**重要：** コンポーネントはあなたのコードに入る。node_modules ではない。変更可能。

## コンポーネントを追加

::: code-group

```bash [npm]
npx shadcn add button
```

```bash [bun]
bunx shadcn add button
```

```bash [pnpm]
pnpm dlx shadcn add button
```

```bash [yarn]
yarn dlx shadcn add button
```

:::

これで `src/components/ui/button.tsx` が作成される。

## 複数のコンポーネントを追加

::: code-group

```bash [npm]
npx shadcn add dialog card form input
```

```bash [bun]
bunx shadcn add dialog card form input
```

```bash [pnpm]
pnpm dlx shadcn add dialog card form input
```

```bash [yarn]
yarn dlx shadcn add dialog card form input
```

:::

## 人気のコンポーネント

| コンポーネント | 動作 |
|--------------|------|
| button | クリック可能なボタン |
| dialog | ポップアップウィンドウ |
| card | コンテンツを含むボックス |
| input | テキストフィールド |
| form | バリデーション付きフォーム |
| table | データテーブル |
| select | ドロップダウンメニュー |
| tabs | タブナビゲーション |
| sonner | 通知 |

すべて見る：[ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## 使い方

```tsx
import { Button } from "@/components/ui/button"

export default function MyPage() {
  return (
    <Button onClick={() => alert("こんにちは！")}>
      クリック
    </Button>
  )
}
```

## ダイアログの例

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function MyPage() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>ポップアップを開く</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>こんにちは！</DialogTitle>
        </DialogHeader>
        <p>これはポップアップです。</p>
      </DialogContent>
    </Dialog>
  )
}
```

## コンポーネントを変更

コンポーネントは `src/components/ui/` にある。開いて編集。

例 - 緑のボタンを追加：

```tsx
// src/components/ui/button.tsx

const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        // 独自のものを追加：
        success: "bg-green-500 text-white hover:bg-green-600",
      }
    }
  }
)
```

使用：

```tsx
<Button variant="success">保存</Button>
```

## 色を変更

`src/index.css` を編集：

```css
:root {
  --primary: oklch(0.5 0.2 260);  /* この色を変更 */
}
```

テーマジェネレーターが欲しい？[ui.shadcn.com/themes](https://ui.shadcn.com/themes) へ
