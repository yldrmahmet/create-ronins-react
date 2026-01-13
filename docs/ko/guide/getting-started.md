# 시작하기

## 앱 만들기

패키지 매니저를 선택하고 실행:

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

브라우저에서 `http://localhost:5173` 열기. 완료!

## 클린 모드

최소한의 앱을 원하나요? 데모 페이지 없이? `--clean` 사용:

::: code-group

```bash [npm]
npm create ronins-react@latest my-app --clean
```

```bash [bun]
bun create ronins-react@latest my-app --clean
```

```bash [pnpm]
pnpm create ronins-react@latest my-app --clean
```

```bash [yarn]
yarn create ronins-react@latest my-app --clean
```

:::

제거되는 것:
- 데모 페이지
- 로고 파일

간단한 "Hello World" 앱을 얻습니다.

## 현재 폴더 사용

현재 폴더에 생성하고 싶다면? `.` 사용:

::: code-group

```bash [npm]
mkdir my-app && cd my-app
npm create ronins-react@latest .
```

```bash [bun]
mkdir my-app && cd my-app
bun create ronins-react@latest .
```

```bash [pnpm]
mkdir my-app && cd my-app
pnpm create ronins-react@latest .
```

```bash [yarn]
mkdir my-app && cd my-app
yarn create ronins-react@latest .
```

:::

::: warning
폴더는 비어 있어야 합니다.
:::

## 다음 단계

- [프로젝트 구조](/ko/guide/project-structure) — 모든 파일 보기
- [명령어](/ko/guide/commands) — 모든 명령어 보기
- [컴포넌트 추가](/ko/guide/adding-components) — 버튼, 다이얼로그 등 추가
