---
layout: home

hero:
  name: Ronins React
  text: As Ferramentas Certas, Já Escolhidas
  tagline: Pare de pesquisar. Comece a construir. Um starter React pronto para produção com padrões testados em batalha.
  actions:
    - theme: brand
      text: Começar
      link: /pt/guide/getting-started
    - theme: alt
      text: Ver no GitHub
      link: https://github.com/yldrmahmet/create-ronins-react

features:
  - icon:
      src: /vite.svg
    title: Vite 8 + Rolldown
    details: Desenvolvimento ultrarrápido com HMR instantâneo e builds otimizados
  - icon:
      src: /tailwind.svg
    title: Tailwind CSS 4
    details: CSS utility-first com os recursos mais recentes e melhorias de desempenho
  - icon:
      src: /box.svg
    title: Zero Configuração
    details: Tudo pré-configurado. Apenas execute e comece a programar
  - icon:
      src: /more.svg
    title: E Mais...
    details: React 19, TypeScript, shadcn/ui, React Router, TanStack Query, ESLint, Vitest, Husky
    link: /pt/guide/tech-stack
---

<div class="why-section">

## Por que Ronins React?

O ecossistema JavaScript se move rápido. **Rápido demais.**

Toda semana traz novos frameworks, novos bundlers, novas ferramentas. A IA está tornando isso ainda mais rápido. Mas você só quer construir seu app.

**A realidade:**

- npm tem **mais de 3 milhões de pacotes** — a maioria está desatualizado ou não é seguro
- **React ainda é #1** — 40% dos desenvolvedores usam, 11 milhões de sites
- Escolher as ferramentas certas leva **dias de pesquisa**

### Nós Fizemos a Pesquisa

Ronins React não é apenas um template. É **curadoria opinativa**.

Testamos muitas ferramentas e escolhemos as melhores:

| O Que Você Precisa | O Que Escolhemos | Por Quê |
|--------------------|------------------|---------|
| Build Tool | Vite 8 + Rolldown | Servidor dev mais rápido, HMR instantâneo |
| Estilos | Tailwind CSS 4 | Padrão da indústria, zero runtime |
| Componentes | shadcn/ui | Seu código, não uma dependência |
| Roteamento | React Router 8 | Mais popular, endossado pelo time React |
| Estado do Servidor | TanStack Query 5 | Melhor cache e sincronização |
| Validação | Zod 4 | TypeScript-first, seguro em runtime |
| Qualidade de Código | ESLint 10 + Prettier | Código limpo, sem erros |

### Por Que Não Outras Opções?

| Opção | Problema |
|-------|----------|
| `npm create vite` | Só dá Vite + React. Você adiciona todo o resto. Leva horas. |
| Next.js | Muito complexo para apps simples. Server Components, App Router... |
| TanStack Start | Muito novo. Ainda em beta. Não estável. |
| Create React App | Projeto morto. Sem atualizações. Muito lento. |

### Zero Fadiga de Decisão

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

É isso. Sem configuração. Sem pesquisa. Apenas código.

**React move a web. Nós movemos sua configuração React.**

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
