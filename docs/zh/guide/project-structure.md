# 项目结构

你的应用看起来像这样：

```
my-app/
├── public/
│   └── ronins.png          # Logo（使用 --clean 时移除）
├── src/
│   ├── app/
│   │   ├── routes/         # 你的页面
│   │   │   ├── app.tsx     # 首页
│   │   │   └── stack.tsx   # 演示页面（使用 --clean 时移除）
│   │   ├── providers.tsx   # 应用设置
│   │   └── router.tsx      # 页面路由
│   ├── components/
│   │   └── ui/             # UI 组件（按钮等）
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts        # 辅助函数
│   ├── main.tsx            # 应用从这里启动
│   └── index.css           # 样式
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## 重要文件夹

### `src/app/routes/`

你的页面放在这里。一个文件 = 一个页面。

```
routes/
├── app.tsx      → localhost:5173/
├── about.tsx    → localhost:5173/about
└── contact.tsx  → localhost:5173/contact
```

### `src/components/ui/`

来自 shadcn/ui 的 UI 组件。添加更多：

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

辅助函数。`cn()` 函数用于混合 CSS 类：

```tsx
import { cn } from "@/lib/utils"

// 这样使用：
<div className={cn("text-red-500", isActive && "font-bold")} />
```

## 文件如何协同工作

| 文件 | 它做什么 |
|------|---------|
| `main.tsx` | 启动应用 |
| `providers.tsx` | 设置 TanStack Query 等 |
| `router.tsx` | 定义所有页面路由 |
| `routes/*.tsx` | 你的页面组件 |
