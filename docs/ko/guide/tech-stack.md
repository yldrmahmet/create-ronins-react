# 기술 스택

앱에 포함된 모든 도구:

<div class="tech-grid">

<a href="https://vite.dev" class="tech-card" target="_blank">
  <img src="/vite.svg" alt="Vite" />
  <h3>Vite 7</h3>
  <p>즉각적인 HMR을 가진 빌드 도구</p>
</a>

<a href="https://react.dev" class="tech-card" target="_blank">
  <img src="/react.svg" alt="React" />
  <h3>React 19</h3>
  <p>UI 라이브러리</p>
</a>

<a href="https://www.typescriptlang.org" class="tech-card" target="_blank">
  <img src="/typescript.svg" alt="TypeScript" />
  <h3>TypeScript 5.9</h3>
  <p>타입 안전한 JavaScript</p>
</a>

<a href="https://tailwindcss.com" class="tech-card" target="_blank">
  <img src="/tailwind.svg" alt="Tailwind CSS" />
  <h3>Tailwind CSS 4</h3>
  <p>유틸리티 우선 CSS</p>
</a>

<a href="https://ui.shadcn.com" class="tech-card" target="_blank">
  <img src="/shadcn.svg" alt="shadcn/ui" />
  <h3>shadcn/ui</h3>
  <p>UI 컴포넌트</p>
</a>

<a href="https://reactrouter.com" class="tech-card" target="_blank">
  <img src="/reactrouter.svg" alt="React Router" />
  <h3>React Router 7</h3>
  <p>클라이언트 사이드 라우팅</p>
</a>

<a href="https://tanstack.com/query" class="tech-card" target="_blank">
  <img src="/tanstack.svg" alt="TanStack Query" />
  <h3>TanStack Query 5</h3>
  <p>서버 상태 관리</p>
</a>

<a href="https://zod.dev" class="tech-card" target="_blank">
  <img src="/zod.svg" alt="Zod" />
  <h3>Zod 4</h3>
  <p>스키마 유효성 검사</p>
</a>

<a href="https://eslint.org" class="tech-card" target="_blank">
  <img src="/eslint.svg" alt="ESLint" />
  <h3>ESLint 9</h3>
  <p>코드에서 버그 찾기</p>
</a>

<a href="https://prettier.io" class="tech-card" target="_blank">
  <img src="/prettier.svg" alt="Prettier" />
  <h3>Prettier</h3>
  <p>코드 포맷터</p>
</a>

<a href="https://vitest.dev" class="tech-card" target="_blank">
  <img src="/vitest.svg" alt="Vitest" />
  <h3>Vitest</h3>
  <p>유닛 테스팅</p>
</a>

<a href="https://typicode.github.io/husky" class="tech-card" target="_blank">
  <img src="/husky.svg" alt="Husky" />
  <h3>Husky</h3>
  <p>Git 훅</p>
</a>

</div>

---

## 왜 이 도구들인가?

### Vite
Vite는 React 앱을 위한 가장 빠른 빌드 도구. 1초 미만에 시작. 변경사항이 즉시 표시. Webpack은 10배 느림. Turbopack도 빠르지만 Next.js와만 잘 작동.

---

### React
React는 여전히 1위. 개발자의 40%가 사용. 1,100만 웹사이트가 React로 실행. 가장 큰 생태계, 가장 많은 일자리, 가장 많은 학습 자료.

---

### TypeScript
TypeScript는 코드를 실행하기 전에 버그를 발견. 이제 업계 표준. 진정한 대안 없음.

---

### Tailwind CSS
Tailwind는 가장 인기 있는 CSS 프레임워크. HTML에서 직접 스타일 작성. 별도의 CSS 파일 필요 없음. UnoCSS가 더 빠르지만, Tailwind가 더 큰 커뮤니티와 더 나은 IDE 지원을 보유.

---

### shadcn/ui
shadcn/ui는 다름. 컴포넌트가 당신의 코드로 복사됨. 당신이 소유. 변경 가능. 버전 충돌 없음. 브레이킹 업데이트 없음. 접근성을 위해 Radix UI 위에 구축.

---

### React Router
React Router는 React용으로 가장 많이 사용되는 라우터. 2014년부터 존재. 매우 안정적. 많은 리소스 이용 가능. TanStack Router가 더 나은 TypeScript 지원을 가지지만, React Router가 더 검증됨.

---

### TanStack Query
TanStack Query는 API 호출에 최고. 데이터 캐시. 백그라운드에서 업데이트. DevTools 있음. 대부분의 경우 SWR보다 나음.

---

### Zod
Zod는 런타임에 데이터가 올바른지 검사. TypeScript와 잘 작동. 78개 이상의 라이브러리 통합. 매우 인기.

::: tip Valibot 주시 중
[Valibot](https://valibot.dev)은 새로운 유효성 검사 라이브러리. Zod보다 **90% 작음** (1.37 KB vs 17.7 KB). 같은 API 스타일. 생태계가 성장하면 미래에 Valibot으로 전환할 수 있음. 현재는 더 많은 통합과 문서가 있어 Zod 사용.
:::

---

### ESLint + Prettier
ESLint는 버그를 찾음. Prettier는 코드를 포맷팅. 함께 코드를 깨끗하게 유지.

::: tip Biome 주시 중
[Biome](https://biomejs.dev)은 새로운 도구. ESLint + Prettier가 하는 일을 하지만, **20배 빠름**. 두 개 대신 하나의 도구. 네 개 대신 하나의 설정 파일. 미래에 Biome으로 전환할 수 있음. 현재는 ESLint + Prettier 사용:
- ESLint는 1000개 이상의 플러그인 보유
- Biome은 ~80%의 플러그인 커버리지
- ESLint에 더 많은 리소스와 도움 이용 가능

Biome의 생태계가 성장하면 전환을 고려할 것.
:::

---

### Vitest
Vitest는 Vite 프로젝트용으로 만들어짐. Jest보다 10-20배 빠름. Jest와 같은 API로 배우기 쉬움. Vite 앱의 확실한 승자.

---

### Husky
Husky는 커밋 전에 체크 실행. 나쁜 코드가 저장소에 들어가지 않도록 함. 주간 1,500만 이상 다운로드로 매우 인기.

---

## 미래 로드맵

새로운 도구를 지속적으로 평가. 주시 중인 것:

| 현재 | 주시 중 | 이유 |
|-----|--------|------|
| ESLint + Prettier | **Biome** | 20배 빠름, 단일 도구 |
| Zod | **Valibot** | 90% 작은 번들 |
| Husky | **Lefthook** | 병렬 실행, 50% 빠름 |
| React Router | **TanStack Router** | 더 나은 TypeScript 지원 |

**속도보다 안정성**을 우선시. 이러한 대안들이 성숙해지면 전환을 고려할 것.

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
