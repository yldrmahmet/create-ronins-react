# 프로젝트 구조

앱은 이렇게 생겼습니다:

```
my-app/
├── public/
│   └── ronins.png          # 로고 (--clean으로 제거됨)
├── src/
│   ├── app/
│   │   ├── routes/         # 페이지들
│   │   │   ├── app.tsx     # 홈페이지
│   │   │   └── stack.tsx   # 데모 페이지 (--clean으로 제거됨)
│   │   ├── providers.tsx   # 앱 설정
│   │   └── router.tsx      # 페이지 라우트
│   ├── components/
│   │   └── ui/             # UI 컴포넌트 (버튼 등)
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts        # 헬퍼 함수
│   ├── main.tsx            # 앱 시작점
│   └── index.css           # 스타일
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## 중요한 폴더

### `src/app/routes/`

페이지는 여기에. 파일 하나 = 페이지 하나.

```
routes/
├── app.tsx      → localhost:5173/
├── about.tsx    → localhost:5173/about
└── contact.tsx  → localhost:5173/contact
```

### `src/components/ui/`

shadcn/ui의 UI 컴포넌트. 더 추가하려면:

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

헬퍼 함수. `cn()` 함수는 CSS 클래스를 결합:

```tsx
import { cn } from "@/lib/utils"

// 이렇게 사용:
<div className={cn("text-red-500", isActive && "font-bold")} />
```

## 파일 연동 방식

| 파일 | 동작 |
|-----|------|
| `main.tsx` | 앱 시작 |
| `providers.tsx` | TanStack Query 등 설정 |
| `router.tsx` | 모든 페이지 라우트 정의 |
| `routes/*.tsx` | 페이지 컴포넌트 |
