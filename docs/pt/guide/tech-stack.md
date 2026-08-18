# Stack Tecnológico

Todas as ferramentas incluídas no seu app:

<div class="tech-grid">

<a href="https://vite.dev" class="tech-card" target="_blank">
  <img src="/images/vite.svg" alt="Vite" />
  <h3>Vite 8</h3>
  <p>Build tool com HMR instantâneo</p>
</a>

<a href="https://react.dev" class="tech-card" target="_blank">
  <img src="/images/react.svg" alt="React" />
  <h3>React 19</h3>
  <p>Biblioteca UI</p>
</a>

<a href="https://www.typescriptlang.org" class="tech-card" target="_blank">
  <img src="/images/typescript.svg" alt="TypeScript" />
  <h3>TypeScript 5.9</h3>
  <p>JavaScript com tipos</p>
</a>

<a href="https://tailwindcss.com" class="tech-card" target="_blank">
  <img src="/images/tailwind.svg" alt="Tailwind CSS" />
  <h3>Tailwind CSS 4</h3>
  <p>CSS utility-first</p>
</a>

<a href="https://ui.shadcn.com" class="tech-card" target="_blank">
  <img src="/images/shadcn.svg" alt="shadcn/ui" />
  <h3>shadcn/ui</h3>
  <p>Componentes UI</p>
</a>

<a href="https://reactrouter.com" class="tech-card" target="_blank">
  <img src="/images/reactrouter.svg" alt="React Router" />
  <h3>React Router 8</h3>
  <p>Roteamento client-side</p>
</a>

<a href="https://tanstack.com/query" class="tech-card" target="_blank">
  <img src="/images/tanstack.svg" alt="TanStack Query" />
  <h3>TanStack Query 5</h3>
  <p>Gerenciamento de estado do servidor</p>
</a>

<a href="https://zod.dev" class="tech-card" target="_blank">
  <img src="/images/zod.svg" alt="Zod" />
  <h3>Zod 4</h3>
  <p>Validação de schema</p>
</a>

<a href="https://eslint.org" class="tech-card" target="_blank">
  <img src="/images/eslint.svg" alt="ESLint" />
  <h3>ESLint 10</h3>
  <p>Encontrar bugs no código</p>
</a>

<a href="https://prettier.io" class="tech-card" target="_blank">
  <img src="/images/prettier.svg" alt="Prettier" />
  <h3>Prettier</h3>
  <p>Formatador de código</p>
</a>

<a href="https://vitest.dev" class="tech-card" target="_blank">
  <img src="/images/vitest.svg" alt="Vitest" />
  <h3>Vitest</h3>
  <p>Testes unitários</p>
</a>

<a href="https://typicode.github.io/husky" class="tech-card" target="_blank">
  <img src="/images/husky.svg" alt="Husky" />
  <h3>Husky</h3>
  <p>Hooks do Git</p>
</a>

</div>

---

## Por Que Essas Ferramentas?

### Vite
Vite é o build tool mais rápido para apps React. Inicia em menos de 1 segundo. Mudanças aparecem instantaneamente. Webpack é 10x mais lento. Turbopack também é rápido, mas só funciona bem com Next.js.

---

### React
React ainda é #1. 40% dos desenvolvedores usam. 11 milhões de sites rodam React. Tem o maior ecossistema, mais vagas, e mais recursos de aprendizado.

---

### TypeScript
TypeScript encontra bugs antes de executar seu código. Agora é o padrão da indústria. Não existe alternativa real.

---

### Tailwind CSS
Tailwind é o framework CSS mais popular. Você escreve estilos diretamente no HTML. Não precisa de arquivos CSS separados. UnoCSS é mais rápido, mas Tailwind tem comunidade maior e melhor suporte de IDE.

---

### shadcn/ui
shadcn/ui é diferente. Componentes são copiados para SEU código. Você é dono deles. Você pode alterá-los. Sem conflitos de versão. Sem updates que quebram. Construído sobre Radix UI para acessibilidade.

---

### React Router
React Router é o roteador mais usado para React. Existe desde 2014. Muito estável. Muitos recursos disponíveis. TanStack Router tem melhor suporte TypeScript, mas React Router é mais comprovado.

---

### TanStack Query
TanStack Query é o melhor para chamadas API. Cacheia dados. Atualiza em background. Tem DevTools. Melhor que SWR na maioria dos casos.

---

### Zod
Zod verifica se dados estão corretos em runtime. Funciona muito bem com TypeScript. Tem 78+ integrações de bibliotecas. Muito popular.

::: tip Estamos observando Valibot
[Valibot](https://valibot.dev) é uma nova biblioteca de validação. É **90% menor** que Zod (1.37 KB vs 17.7 KB). Mesmo estilo de API. Podemos mudar para Valibot no futuro quando seu ecossistema crescer. Por enquanto, usamos Zod porque tem mais integrações e documentação.
:::

---

### ESLint + Prettier
ESLint encontra bugs. Prettier formata código. Juntos mantêm seu código limpo.

::: tip Estamos observando Biome
[Biome](https://biomejs.dev) é uma nova ferramenta. Faz o que ESLint + Prettier fazem, mas **20x mais rápido**. Uma ferramenta em vez de duas. Um arquivo de config em vez de quatro. Podemos mudar para Biome no futuro. Por enquanto, usamos ESLint + Prettier porque:
- ESLint tem 1000+ plugins
- Biome tem ~80% de cobertura de plugins
- Mais recursos e ajuda disponíveis para ESLint

Quando o ecossistema do Biome crescer, consideraremos mudar.
:::

---

### Vitest
Vitest é feito para projetos Vite. É 10-20x mais rápido que Jest. Mesma API do Jest, então é fácil de aprender. O claro vencedor para apps Vite.

---

### Husky
Husky executa verificações antes de você commitar. Garante que código ruim não entre no seu repo. Muito popular com 15M+ downloads semanais.

---

## Roadmap Futuro

Avaliamos novas ferramentas continuamente. Aqui está o que estamos observando:

| Atual | Observando | Por Quê |
|-------|------------|---------|
| ESLint + Prettier | **Biome** | 20x mais rápido, ferramenta única |
| Zod | **Valibot** | 90% menor tamanho de bundle |
| Husky | **Lefthook** | Execução paralela, 50% mais rápido |
| React Router | **TanStack Router** | Melhor suporte TypeScript |

Priorizamos **estabilidade sobre velocidade**. Quando essas alternativas amadurecerem, consideraremos mudar.

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
