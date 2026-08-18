# Kullanılan Teknolojiler

Projene dahil tüm araçlar:

<div class="tech-grid">

<a href="https://vite.dev" class="tech-card" target="_blank">
  <img src="/images/vite.svg" alt="Vite" />
  <h3>Vite 8</h3>
  <p>Anında yansımalı derleme aracı</p>
</a>

<a href="https://react.dev" class="tech-card" target="_blank">
  <img src="/images/react.svg" alt="React" />
  <h3>React 19</h3>
  <p>Arayüz kütüphanesi</p>
</a>

<a href="https://www.typescriptlang.org" class="tech-card" target="_blank">
  <img src="/images/typescript.svg" alt="TypeScript" />
  <h3>TypeScript 5.9</h3>
  <p>Tip güvenli JavaScript</p>
</a>

<a href="https://tailwindcss.com" class="tech-card" target="_blank">
  <img src="/images/tailwind.svg" alt="Tailwind CSS" />
  <h3>Tailwind CSS 4</h3>
  <p>Modern CSS framework'ü</p>
</a>

<a href="https://ui.shadcn.com" class="tech-card" target="_blank">
  <img src="/images/shadcn.svg" alt="shadcn/ui" />
  <h3>shadcn/ui</h3>
  <p>Hazır bileşenler</p>
</a>

<a href="https://reactrouter.com" class="tech-card" target="_blank">
  <img src="/images/reactrouter.svg" alt="React Router" />
  <h3>React Router 8</h3>
  <p>Sayfa yönetimi</p>
</a>

<a href="https://tanstack.com/query" class="tech-card" target="_blank">
  <img src="/images/tanstack.svg" alt="TanStack Query" />
  <h3>TanStack Query 5</h3>
  <p>Veri yönetimi</p>
</a>

<a href="https://zod.dev" class="tech-card" target="_blank">
  <img src="/images/zod.svg" alt="Zod" />
  <h3>Zod 4</h3>
  <p>Veri doğrulama</p>
</a>

<a href="https://eslint.org" class="tech-card" target="_blank">
  <img src="/images/eslint.svg" alt="ESLint" />
  <h3>ESLint 10</h3>
  <p>Kod analizi</p>
</a>

<a href="https://prettier.io" class="tech-card" target="_blank">
  <img src="/images/prettier.svg" alt="Prettier" />
  <h3>Prettier</h3>
  <p>Kod düzenleyici</p>
</a>

<a href="https://vitest.dev" class="tech-card" target="_blank">
  <img src="/images/vitest.svg" alt="Vitest" />
  <h3>Vitest</h3>
  <p>Test framework'ü</p>
</a>

<a href="https://typicode.github.io/husky" class="tech-card" target="_blank">
  <img src="/images/husky.svg" alt="Husky" />
  <h3>Husky</h3>
  <p>Git hooks</p>
</a>

</div>

---

## Neden Bu Araçlar?

### Vite
Vite, React projeleri için en hızlı derleme aracı. 1 saniyeden kısa sürede başlıyor. Değişiklikler anında yansıyor. Webpack'ten 10 kat hızlı. Turbopack da hızlı ama sadece Next.js ile iyi çalışıyor.

---

### React
React hala lider. Geliştiricilerin %40'ı kullanıyor. 11 milyon web sitesi React ile yapılmış. En büyük ekosisteme, en çok iş ilanına ve en fazla öğrenme kaynağına sahip.

---

### TypeScript
TypeScript, kodu çalıştırmadan hataları buluyor. Artık sektör standardı. Gerçek bir alternatifi yok.

---

### Tailwind CSS
Tailwind en popüler CSS framework'ü. Stilleri doğrudan HTML'de yazıyorsun. Ayrı CSS dosyası gerekmiyor. UnoCSS daha hızlı ama Tailwind'in topluluğu daha büyük ve IDE desteği daha iyi.

---

### shadcn/ui
shadcn/ui farklı çalışıyor. Bileşenler senin proje dosyalarına kopyalanıyor. Sana ait. İstediğin gibi değiştirebilirsin. Sürüm uyumsuzluğu yok. Beklenmedik değişiklik yok. Erişilebilirlik için Radix UI üzerine kurulu.

---

### React Router
React Router, React için en yaygın kullanılan sayfa yönetim aracı. 2014'ten beri var. Çok güvenilir. Bol kaynak mevcut. TanStack Router'ın TypeScript desteği daha iyi ama React Router daha olgun.

---

### TanStack Query
TanStack Query, API istekleri için en iyisi. Verileri önbelleğe alıyor. Arka planda güncelliyor. Geliştirici araçları var. Çoğu durumda SWR'dan daha iyi.

---

### Zod
Zod, verilerin doğruluğunu çalışma anında kontrol ediyor. TypeScript ile mükemmel çalışıyor. 78+ kütüphane entegrasyonu var. Çok popüler.

::: tip Valibot'u Takip Ediyoruz
[Valibot](https://valibot.dev) yeni bir doğrulama kütüphanesi. Zod'dan **%90 daha küçük** (1.37 KB - 17.7 KB). Aynı kullanım şekli. Ekosistemi büyüdüğünde geçiş yapabiliriz. Şimdilik daha fazla entegrasyona ve dokümantasyona sahip Zod kullanıyoruz.
:::

---

### ESLint + Prettier
ESLint hataları buluyor. Prettier kodu düzenliyor. Birlikte kodunu temiz tutuyor.

::: tip Biome'u Takip Ediyoruz
[Biome](https://biomejs.dev) yeni bir araç. ESLint + Prettier'ın işini yapıyor ama **20 kat daha hızlı**. İki yerine tek araç. Dört yerine tek ayar dosyası. İleride geçiş yapabiliriz. Şimdilik ESLint + Prettier kullanıyoruz çünkü:
- ESLint'in 1000+ eklentisi var
- Biome %80 eklenti desteği sunuyor
- ESLint için daha fazla kaynak ve yardım mevcut

Biome olgunlaştığında geçişi değerlendireceğiz.
:::

---

### Vitest
Vitest, Vite projeleri için tasarlanmış. Jest'ten 10-20 kat hızlı. Jest ile aynı kullanım, öğrenmesi kolay. Vite projeleri için açık ara en iyi seçenek.

---

### Husky
Husky, commit öncesi kontroller çalıştırıyor. Hatalı kodun projeye girmesini engelliyor. Haftalık 15M+ indirme ile çok popüler.

---

## Gelecek Planları

Sürekli yeni araçları değerlendiriyoruz. Takip ettiklerimiz:

| Şu An | Takipte | Neden |
|-------|---------|-------|
| ESLint + Prettier | **Biome** | 20 kat hızlı, tek araç |
| Zod | **Valibot** | %90 daha küçük boyut |
| Husky | **Lefthook** | Paralel çalışma, %50 daha hızlı |
| React Router | **TanStack Router** | Daha iyi TypeScript desteği |

**Hızdan önce güvenilirliği** tercih ediyoruz. Bu alternatifler olgunlaştığında değerlendireceğiz.

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
