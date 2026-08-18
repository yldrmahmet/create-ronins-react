# O que é Ronins React?

Ronins React é uma ferramenta. Ela cria apps React para você. Todas as ferramentas estão prontas. Você só escreve código.

## O Problema

JavaScript tem ferramentas demais. Toda semana, novas ferramentas surgem. É difícil escolher.

**Alguns números:**

- npm tem **3 milhões de pacotes**
- A maioria dos pacotes está desatualizado ou não é seguro
- React ainda é **#1** — 40% dos desenvolvedores usam
- 11 milhões de sites usam React

O problema não é React. O problema é: **quais ferramentas usar com React?**

## Por Que Não Outras Opções?

### Por que não `npm create vite`?

Vite é ótimo. Mas só te dá **Vite + React**.

Você ainda precisa adicionar:
- Tailwind CSS (estilos)
- React Router (páginas)
- TanStack Query (chamadas API)
- ESLint (encontrar bugs)
- Prettier (formatar código)
- Husky (verificações git)
- shadcn/ui (botões, diálogos)

Isso leva **horas**. Com Ronins React, leva **30 segundos**.

### Por que não Next.js?

Next.js é um framework grande. Tem:
- Server Components
- App Router
- Server Actions
- Muitos recursos complexos

**Next.js é bom para:** Sites que precisam de SEO (ranking no Google).

**Mas muitos apps não precisam disso:**
- Dashboards administrativos
- Ferramentas internas
- Single page apps (SPA)

Para esses, Next.js é **muito complexo**. Ronins React é mais simples.

### Por que não TanStack Start?

TanStack Start é muito novo. Ainda está em beta. Pode mudar muito. Ainda não é estável.

Ronins React usa **apenas ferramentas estáveis**. Sem beta. Sem breaking changes.

### Por que não Create React App?

Create React App (CRA) está morto. Sem atualizações desde 2023. Usa Webpack, que é lento.

Ronins React usa Vite. Vite é **10x mais rápido**.

## O Que Oferecemos

| Você Precisa | Oferecemos | Por Que Este |
|--------------|------------|--------------|
| Build tool | Vite 8 | Muito rápido |
| Linguagem | TypeScript | Encontra bugs cedo |
| Estilos | Tailwind CSS 4 | Fácil de usar |
| Componentes | shadcn/ui | Você tem o código |
| Páginas | React Router 8 | Mais popular |
| Chamadas API | TanStack Query 5 | Melhor cache |
| Validação | Zod 4 | Type safe |
| Encontrar bugs | ESLint 10 | Regras modernas |
| Formatador | Prettier | Código limpo |
| Git hooks | Husky | Verifica antes do commit |
| Testes | Vitest | Testes rápidos |

**Tudo configurado. Tudo funcionando junto.**

## Nossas Regras

### 1. Pronto para Usar

Sem setup. Sem config. Apenas execute e programe.

### 2. Novo mas Estável

Usamos versões novas. Mas apenas estáveis. Sem beta.

### 3. Simples

Sem ferramentas extras. Apenas o que você precisa. Adicione mais depois se quiser.

### 4. Você É Dono

Componentes shadcn/ui estão no seu código. Não em node_modules. Você pode alterá-los.

## Quem Deve Usar Isso?

- **Desenvolvedores novos** — Não perca tempo em configuração
- **Desenvolvedores experientes** — Pule o setup chato
- **Times** — Mesmas ferramentas para todos
- **Startups** — Entregue rápido, mantenha limpo

## Início Rápido

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

**30 segundos. Pronto.**

---

**React move a web. Nós movemos sua configuração React.**

[Começar Agora →](/pt/guide/getting-started)
