# 컴포넌트 추가

## shadcn/ui란?

[shadcn/ui](https://ui.shadcn.com)는 완성된 컴포넌트를 제공:
- 버튼
- 다이얼로그 (팝업)
- 폼
- 카드
- 테이블
- 그리고 더...

**중요:** 컴포넌트는 당신의 코드에 들어감. node_modules가 아님. 변경 가능.

## 컴포넌트 추가

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

이렇게 하면 `src/components/ui/button.tsx` 생성.

## 여러 컴포넌트 추가

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

## 인기 컴포넌트

| 컴포넌트 | 동작 |
|---------|------|
| button | 클릭 가능한 버튼 |
| dialog | 팝업 창 |
| card | 콘텐츠가 있는 박스 |
| input | 텍스트 필드 |
| form | 유효성 검사가 있는 폼 |
| table | 데이터 테이블 |
| select | 드롭다운 메뉴 |
| tabs | 탭 네비게이션 |
| sonner | 알림 |

모두 보기: [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## 사용 방법

```tsx
import { Button } from "@/components/ui/button"

export default function MyPage() {
  return (
    <Button onClick={() => alert("안녕하세요!")}>
      클릭하세요
    </Button>
  )
}
```

## 다이얼로그 예제

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
        <Button>팝업 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>안녕하세요!</DialogTitle>
        </DialogHeader>
        <p>이것은 팝업입니다.</p>
      </DialogContent>
    </Dialog>
  )
}
```

## 컴포넌트 변경

컴포넌트는 `src/components/ui/`에 있음. 열어서 편집.

예제 - 녹색 버튼 추가:

```tsx
// src/components/ui/button.tsx

const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        // 직접 추가:
        success: "bg-green-500 text-white hover:bg-green-600",
      }
    }
  }
)
```

이제 사용:

```tsx
<Button variant="success">저장</Button>
```

## 색상 변경

`src/index.css` 편집:

```css
:root {
  --primary: oklch(0.5 0.2 260);  /* 이 색상 변경 */
}
```

테마 생성기가 필요하면? [ui.shadcn.com/themes](https://ui.shadcn.com/themes)로 이동
