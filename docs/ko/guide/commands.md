# 명령어

패키지 매니저를 선택하세요. 명령어는 각각 다릅니다.

## 개발 서버 시작

::: code-group

```bash [npm]
npm run dev
```

```bash [bun]
bun dev
```

```bash [pnpm]
pnpm dev
```

```bash [yarn]
yarn dev
```

:::

`http://localhost:5173` 열기. 변경사항이 즉시 반영됩니다.

## 프로덕션 빌드

::: code-group

```bash [npm]
npm run build
```

```bash [bun]
bun run build
```

```bash [pnpm]
pnpm build
```

```bash [yarn]
yarn build
```

:::

`dist/` 폴더 생성. 이것을 서버에 업로드.

::: details 왜 `bun build`가 아니라 `bun run build`인가?

이것들은 다른 명령어입니다:

| 명령어 | 동작 |
|-------|------|
| `bun build` | Bun의 번들러 사용 |
| `bun run build` | package.json의 "build" 스크립트 실행 |

우리는 `bun run build`를 사용합니다. **Vite의 번들러**를 실행하기 위해.

**왜 Bun의 번들러가 아니라 Vite?**
- Vite가 더 많은 기능 보유
- Vite가 더 많은 플러그인 보유
- Vite는 React와 수년간 테스트됨

**Bun은 코드 실행이 빠름. Vite는 빌드에 더 좋음.**

:::

## 코드 체크

::: code-group

```bash [npm]
npm run check
```

```bash [bun]
bun check
```

```bash [pnpm]
pnpm check
```

```bash [yarn]
yarn check
```

:::

모든 체크 실행:
- ESLint (버그 찾기)
- Prettier (포맷 체크)
- TypeScript (타입 체크)

## 버그 찾기 (Lint)

::: code-group

```bash [npm]
npm run lint
```

```bash [bun]
bun lint
```

```bash [pnpm]
pnpm lint
```

```bash [yarn]
yarn lint
```

:::

자동으로 버그 수정:

::: code-group

```bash [npm]
npm run lint -- --fix
```

```bash [bun]
bun lint --fix
```

```bash [pnpm]
pnpm lint --fix
```

```bash [yarn]
yarn lint --fix
```

:::

## 코드 포맷팅

::: code-group

```bash [npm]
npm run format
```

```bash [bun]
bun format
```

```bash [pnpm]
pnpm format
```

```bash [yarn]
yarn format
```

:::

코드를 깔끔하게. 공백, 따옴표 등 수정.

## 테스트 실행

::: code-group

```bash [npm]
npm test
```

```bash [bun]
bun test
```

```bash [pnpm]
pnpm test
```

```bash [yarn]
yarn test
```

:::

테스트 실행. 변경 감시.

한 번만 실행 (CI용):

::: code-group

```bash [npm]
npm run test:run
```

```bash [bun]
bun test:run
```

```bash [pnpm]
pnpm test:run
```

```bash [yarn]
yarn test:run
```

:::

## 데모 콘텐츠 제거

::: code-group

```bash [npm]
npm run clean
```

```bash [bun]
bun clean
```

```bash [pnpm]
pnpm clean
```

```bash [yarn]
yarn clean
```

:::

데모 파일 제거. 깨끗한 "Hello World" 앱을 얻음.

## 모든 명령어

| 명령어 | 동작 |
|-------|------|
| `dev` | 개발 서버 시작 |
| `build` | 프로덕션 빌드 |
| `check` | 모든 체크 실행 |
| `lint` | 버그 찾기 |
| `format` | 코드 정리 |
| `test` | 테스트 실행 (감시) |
| `test:run` | 테스트 실행 (한 번) |
| `clean` | 데모 파일 제거 |
