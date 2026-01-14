# Opções de CLI

## Uso Básico

::: code-group

```bash [npm]
npm create ronins-react@latest [nome] [opções]
```

```bash [bun]
bun create ronins-react@latest [nome] [opções]
```

```bash [pnpm]
pnpm create ronins-react@latest [nome] [opções]
```

```bash [yarn]
yarn create ronins-react@latest [nome] [opções]
```

:::

## Nome

O nome da pasta para seu app:

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

Cria a pasta `my-app/`.

**Sem nome?** Vai perguntar.

## Usar Pasta Atual

Use `.` para criar na pasta atual:

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
A pasta deve estar vazia!
:::

## Opções

### `--clean` ou `-c`

Cria app mínimo. Sem arquivos demo.

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

**Remove:**
- `src/app/routes/stack.tsx` (página demo)
- `public/ronins.png` (logo)

**Cria:**
- App simples "Hello World"

## Gerenciador de Pacotes

O CLI sabe qual gerenciador de pacotes você usa:

| Você Executa | Detecta |
|--------------|---------|
| `npm create ronins-react@latest` | npm |
| `bun create ronins-react@latest` | bun |
| `pnpm create ronins-react@latest` | pnpm |
| `yarn create ronins-react@latest` | yarn |

Os arquivos README e CLAUDE.md usam os comandos do seu gerenciador de pacotes.

## Erros

| Erro | Por Quê |
|------|---------|
| "Directory exists" | Pasta já existe. Escolha novo nome. |
| "Not empty" | Pasta atual tem arquivos. Use pasta vazia. |
