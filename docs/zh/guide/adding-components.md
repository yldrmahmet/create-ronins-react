# 添加组件

## 什么是 shadcn/ui？

[shadcn/ui](https://ui.shadcn.com) 给你现成的组件：
- 按钮
- 对话框（弹窗）
- 表单
- 卡片
- 表格
- 更多...

**重要：** 组件放入你的代码中。不是 node_modules。你可以修改它们。

## 添加组件

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

这将创建 `src/components/ui/button.tsx`。

## 添加多个组件

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

## 常用组件

| 组件 | 它做什么 |
|------|---------|
| button | 可点击的按钮 |
| dialog | 弹窗 |
| card | 带内容的盒子 |
| input | 文本输入框 |
| form | 带验证的表单 |
| table | 数据表格 |
| select | 下拉菜单 |
| tabs | 标签页导航 |
| sonner | 通知 |

查看全部：[ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## 如何使用

```tsx
import { Button } from "@/components/ui/button"

export default function MyPage() {
  return (
    <Button onClick={() => alert("你好！")}>
      点击我
    </Button>
  )
}
```

## 对话框示例

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
        <Button>打开弹窗</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>你好！</DialogTitle>
        </DialogHeader>
        <p>这是一个弹窗。</p>
      </DialogContent>
    </Dialog>
  )
}
```

## 修改组件

组件在 `src/components/ui/`。打开并编辑它们。

示例 - 添加绿色按钮：

```tsx
// src/components/ui/button.tsx

const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        // 添加你自己的：
        success: "bg-green-500 text-white hover:bg-green-600",
      }
    }
  }
)
```

现在使用它：

```tsx
<Button variant="success">保存</Button>
```

## 更改颜色

编辑 `src/index.css`：

```css
:root {
  --primary: oklch(0.5 0.2 260);  /* 更改这个颜色 */
}
```

想要主题生成器？访问 [ui.shadcn.com/themes](https://ui.shadcn.com/themes)
