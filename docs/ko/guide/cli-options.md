# CLI 옵션

## 기본 사용법

::: code-group

```bash [npm]
npm create ronins-react@latest [이름] [옵션]
```

```bash [bun]
bun create ronins-react@latest [이름] [옵션]
```

```bash [pnpm]
pnpm create ronins-react@latest [이름] [옵션]
```

```bash [yarn]
yarn create ronins-react@latest [이름] [옵션]
```

:::

## 이름

앱의 폴더 이름:

::: code-group

```bash [npm]
npm create ronins-react@latest my-app
```

```bash [bun]
bun create ronins-react@latest my-app
```

```bash [pnpm]
pnpm create ronins-react@latest my-app
```

```bash [yarn]
yarn create ronins-react@latest my-app
```

:::

`my-app/` 폴더 생성.

**이름 없이?** 물어봅니다.

## 현재 폴더 사용

`.`를 사용하여 현재 폴더에 생성:

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
폴더는 비어 있어야 합니다!
:::

## 옵션

### `--clean` 또는 `-c`

최소한의 앱 생성. 데모 파일 없음.

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

**제거됨:**
- `src/app/routes/stack.tsx` (데모 페이지)
- `public/ronins.png` (로고)

**생성됨:**
- 간단한 "Hello World" 앱

## 패키지 매니저

CLI는 어떤 패키지 매니저를 사용하는지 인식:

| 실행 명령 | 인식 |
|----------|------|
| `npm create ronins-react@latest` | npm |
| `bun create ronins-react@latest` | bun |
| `pnpm create ronins-react@latest` | pnpm |
| `yarn create ronins-react@latest` | yarn |

README와 CLAUDE.md 파일은 당신의 패키지 매니저 명령어를 사용.

## 오류

| 오류 | 이유 |
|-----|------|
| "Directory exists" | 폴더가 이미 존재. 새 이름 선택. |
| "Not empty" | 현재 폴더에 파일 있음. 빈 폴더 사용. |
