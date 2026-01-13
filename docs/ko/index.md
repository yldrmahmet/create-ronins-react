---
layout: home

hero:
  name: Ronins React
  text: 올바른 도구, 이미 선택됨
  tagline: 조사는 그만. 구축을 시작하세요. 실전에서 검증된 기본 설정을 갖춘 프로덕션 준비 React 스타터.
  actions:
    - theme: brand
      text: 시작하기
      link: /ko/guide/getting-started
    - theme: alt
      text: GitHub에서 보기
      link: https://github.com/yldrmahmet/create-ronins-react

features:
  - icon:
      src: /vite.svg
    title: Vite 7 + SWC
    details: 즉각적인 HMR과 최적화된 빌드로 번개처럼 빠른 개발
  - icon:
      src: /tailwind.svg
    title: Tailwind CSS 4
    details: 최신 기능과 성능 개선을 갖춘 유틸리티 우선 CSS
  - icon:
      src: /box.svg
    title: 설정 불필요
    details: 모든 것이 사전 구성됨. 실행하고 바로 코딩 시작
  - icon:
      src: /more.svg
    title: 그리고 더...
    details: React 19, TypeScript, shadcn/ui, React Router, TanStack Query, ESLint, Vitest, Husky
    link: /ko/guide/tech-stack
---

<div class="why-section">

## 왜 Ronins React인가?

JavaScript 생태계는 빠르게 움직입니다. **너무 빠르게.**

매주 새로운 프레임워크, 새로운 번들러, 새로운 도구가 나옵니다. AI가 이를 더 빠르게 만들고 있습니다. 하지만 당신은 그저 앱을 만들고 싶을 뿐입니다.

**현실:**

- npm에는 **300만 개 이상의 패키지**가 있음 — 대부분 오래되었거나 안전하지 않음
- **React는 여전히 1위** — 개발자의 40%가 사용, 1,100만 웹사이트
- 올바른 도구를 선택하는 데 **며칠의 조사**가 필요

### 우리가 조사했습니다

Ronins React는 단순한 템플릿이 아닙니다. **의견이 담긴 큐레이션**입니다.

우리는 많은 도구를 테스트하고 최고를 선택했습니다:

| 필요한 것 | 우리의 선택 | 이유 |
|----------|-----------|------|
| 빌드 도구 | Vite 7 + SWC | 가장 빠른 개발 서버, 즉각적인 HMR |
| 스타일링 | Tailwind CSS 4 | 업계 표준, 제로 런타임 |
| 컴포넌트 | shadcn/ui | 의존성이 아닌 당신의 코드 |
| 라우팅 | React Router 7 | 가장 인기, React 팀 승인 |
| 서버 상태 | TanStack Query 5 | 최고의 캐싱과 동기화 |
| 유효성 검사 | Zod 4 | TypeScript 우선, 런타임 안전 |
| 코드 품질 | ESLint 9 + Prettier | 깨끗하고 오류 없는 코드 |

### 왜 다른 옵션이 아닌가?

| 옵션 | 문제 |
|-----|------|
| `npm create vite` | Vite + React만 제공. 나머지는 모두 직접 추가. 몇 시간 소요. |
| Next.js | 간단한 앱에는 너무 복잡. Server Components, App Router... |
| TanStack Start | 너무 새로움. 아직 베타. 안정적이지 않음. |
| Create React App | 죽은 프로젝트. 업데이트 없음. 매우 느림. |

### 결정 피로감 제로

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

그게 다입니다. 설정 불필요. 조사 불필요. 코드만 작성하세요.

**React가 웹을 움직입니다. 우리가 당신의 React 설정을 움직입니다.**

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
