# Ronins React란?

Ronins React는 도구입니다. React 앱을 생성합니다. 모든 도구가 준비되어 있습니다. 코드만 작성하면 됩니다.

## 문제

JavaScript에는 도구가 너무 많습니다. 매주 새로운 도구가 나옵니다. 선택하기 어렵습니다.

**몇 가지 숫자:**

- npm에는 **300만 개의 패키지**가 있음
- 대부분의 패키지는 오래되었거나 안전하지 않음
- React는 여전히 **1위** — 개발자의 40%가 사용
- 1,100만 웹사이트가 React 사용

문제는 React가 아닙니다. 문제는: **React와 함께 어떤 도구를 사용할 것인가?**

## 왜 다른 옵션이 아닌가?

### 왜 `npm create vite`가 아닌가?

Vite는 훌륭합니다. 하지만 **Vite + React**만 제공합니다.

여전히 추가해야 할 것:
- Tailwind CSS (스타일링)
- React Router (페이지)
- TanStack Query (API 호출)
- ESLint (버그 찾기)
- Prettier (코드 포맷팅)
- Husky (git 체크)
- shadcn/ui (버튼, 다이얼로그)

이것은 **몇 시간**이 걸립니다. Ronins React로는 **30초**.

### 왜 Next.js가 아닌가?

Next.js는 큰 프레임워크입니다. 다음을 포함합니다:
- Server Components
- App Router
- Server Actions
- 많은 복잡한 기능

**Next.js가 적합한 경우:** SEO(Google 순위)가 필요한 웹사이트.

**하지만 많은 앱은 이게 필요 없음:**
- 관리자 대시보드
- 내부 도구
- 싱글 페이지 앱 (SPA)

이런 경우 Next.js는 **너무 복잡**합니다. Ronins React가 더 간단합니다.

### 왜 TanStack Start가 아닌가?

TanStack Start는 매우 새롭습니다. 아직 베타입니다. 많이 변할 수 있습니다. 아직 안정적이지 않습니다.

Ronins React는 **안정적인 도구만** 사용합니다. 베타 없음. 브레이킹 체인지 없음.

### 왜 Create React App이 아닌가?

Create React App (CRA)은 죽었습니다. 2023년 이후 업데이트 없음. Webpack 사용, 느립니다.

Ronins React는 Vite를 사용합니다. Vite는 **10배 빠릅니다**.

## 우리가 제공하는 것

| 필요한 것 | 제공하는 것 | 왜 이것인가 |
|----------|-----------|-----------|
| 빌드 도구 | Vite 7 | 매우 빠름 |
| 언어 | TypeScript | 버그 조기 발견 |
| 스타일링 | Tailwind CSS 4 | 사용하기 쉬움 |
| 컴포넌트 | shadcn/ui | 코드를 소유함 |
| 페이지 | React Router 7 | 가장 인기 |
| API 호출 | TanStack Query 5 | 최고의 캐싱 |
| 유효성 검사 | Zod 4 | 타입 안전 |
| 버그 찾기 | ESLint 9 | 현대적인 규칙 |
| 포맷터 | Prettier | 깨끗한 코드 |
| Git 훅 | Husky | 커밋 전 체크 |
| 테스팅 | Vitest | 빠른 테스트 |

**모든 것이 구성됨. 모든 것이 함께 작동.**

## 우리의 규칙

### 1. 바로 사용 가능

설정 없음. 구성 없음. 실행하고 코딩하면 됨.

### 2. 새롭지만 안정적

새로운 버전 사용. 하지만 안정 버전만. 베타 없음.

### 3. 간단함

추가 도구 없음. 필요한 것만. 나중에 더 추가 가능.

### 4. 당신이 소유

shadcn/ui 컴포넌트는 당신의 코드에 있음. node_modules가 아님. 변경 가능.

## 누가 사용해야 하나?

- **신입 개발자** — 설정에 시간 낭비하지 마세요
- **경험 많은 개발자** — 지루한 설정 건너뛰기
- **팀** — 모두 같은 도구
- **스타트업** — 빠르게 출시, 깔끔하게 유지

## 빠른 시작

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

**30초. 완료.**

---

**React가 웹을 움직입니다. 우리가 당신의 React 설정을 움직입니다.**

[지금 시작하기 →](/ko/guide/getting-started)
