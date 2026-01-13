# Teknoloji Yığını

Uygulamanızdaki tüm araçlar:

<div class="tech-grid">

<a href="https://vite.dev" class="tech-card" target="_blank">
  <img src="/vite.svg" alt="Vite" />
  <h3>Vite 7</h3>
  <p>Anında HMR'li build aracı</p>
</a>

<a href="https://react.dev" class="tech-card" target="_blank">
  <img src="/react.svg" alt="React" />
  <h3>React 19</h3>
  <p>UI kütüphanesi</p>
</a>

<a href="https://www.typescriptlang.org" class="tech-card" target="_blank">
  <img src="/typescript.svg" alt="TypeScript" />
  <h3>TypeScript 5.9</h3>
  <p>Tip güvenli JavaScript</p>
</a>

<a href="https://tailwindcss.com" class="tech-card" target="_blank">
  <img src="/tailwind.svg" alt="Tailwind CSS" />
  <h3>Tailwind CSS 4</h3>
  <p>Utility-first CSS</p>
</a>

<a href="https://ui.shadcn.com" class="tech-card" target="_blank">
  <img src="/shadcn.svg" alt="shadcn/ui" />
  <h3>shadcn/ui</h3>
  <p>UI bileşenleri</p>
</a>

<a href="https://reactrouter.com" class="tech-card" target="_blank">
  <img src="/reactrouter.svg" alt="React Router" />
  <h3>React Router 7</h3>
  <p>İstemci tarafı yönlendirme</p>
</a>

<a href="https://tanstack.com/query" class="tech-card" target="_blank">
  <img src="/tanstack.svg" alt="TanStack Query" />
  <h3>TanStack Query 5</h3>
  <p>Sunucu durumu yönetimi</p>
</a>

<a href="https://zod.dev" class="tech-card" target="_blank">
  <img src="/zod.svg" alt="Zod" />
  <h3>Zod 4</h3>
  <p>Şema doğrulama</p>
</a>

<a href="https://eslint.org" class="tech-card" target="_blank">
  <img src="/eslint.svg" alt="ESLint" />
  <h3>ESLint 9</h3>
  <p>Koddaki hataları bul</p>
</a>

<a href="https://prettier.io" class="tech-card" target="_blank">
  <img src="/prettier.svg" alt="Prettier" />
  <h3>Prettier</h3>
  <p>Kod formatlayıcı</p>
</a>

<a href="https://vitest.dev" class="tech-card" target="_blank">
  <img src="/vitest.svg" alt="Vitest" />
  <h3>Vitest</h3>
  <p>Birim testleri</p>
</a>

<a href="https://typicode.github.io/husky" class="tech-card" target="_blank">
  <img src="/husky.svg" alt="Husky" />
  <h3>Husky</h3>
  <p>Git hooks</p>
</a>

</div>

---

## Neden Bu Araçlar?

### Vite
Vite, React uygulamaları için en hızlı build aracıdır. 1 saniyeden kısa sürede başlar. Değişiklikler anında görünür. Webpack 10 kat daha yavaş. Turbopack da hızlı ama sadece Next.js ile iyi çalışıyor.

---

### React
React hala 1 numara. Geliştiricilerin %40'ı kullanıyor. 11 milyon web sitesi React üzerinde çalışıyor. En büyük ekosisteme, en çok iş ilanına ve en çok öğrenme kaynağına sahip.

---

### TypeScript
TypeScript, kodu çalıştırmadan önce hataları bulur. Artık endüstri standardı. Gerçek bir alternatifi yok.

---

### Tailwind CSS
Tailwind en popüler CSS framework'ü. Stilleri doğrudan HTML'de yazarsın. Ayrı CSS dosyalarına gerek yok. UnoCSS daha hızlı ama Tailwind'in daha büyük topluluğu ve daha iyi IDE desteği var.

---

### shadcn/ui
shadcn/ui farklı. Bileşenler SENİN koduna kopyalanır. Sana ait. Değiştirebilirsin. Sürüm çakışması yok. Breaking güncellemeler yok. Erişilebilirlik için Radix UI üzerine kurulu.

---

### React Router
React Router, React için en çok kullanılan router. 2014'ten beri var. Çok kararlı. Çok kaynak mevcut. TanStack Router daha iyi TypeScript desteğine sahip ama React Router daha kanıtlanmış.

---

### TanStack Query
TanStack Query, API çağrıları için en iyisi. Veriyi önbelleğe alır. Arka planda günceller. DevTools'u var. Çoğu durumda SWR'dan daha iyi.

---

### Zod
Zod, verilerin çalışma zamanında doğru olup olmadığını kontrol eder. TypeScript ile harika çalışır. 78+ kütüphane entegrasyonu var. Çok popüler.

::: tip Valibot'u İzliyoruz
[Valibot](https://valibot.dev) yeni bir doğrulama kütüphanesi. Zod'dan **%90 daha küçük** (1.37 KB vs 17.7 KB). Aynı API stili. Ekosistem büyüdükçe gelecekte Valibot'a geçebiliriz. Şimdilik daha fazla entegrasyona ve dokümantasyona sahip olduğu için Zod kullanıyoruz.
:::

---

### ESLint + Prettier
ESLint hataları bulur. Prettier kodu formatlar. Birlikte kodunu temiz tutar.

::: tip Biome'u İzliyoruz
[Biome](https://biomejs.dev) yeni bir araç. ESLint + Prettier'ın yaptığını yapıyor ama **20 kat daha hızlı**. İki yerine tek araç. Dört yerine tek yapılandırma dosyası. Gelecekte Biome'a geçebiliriz. Şimdilik ESLint + Prettier kullanıyoruz çünkü:
- ESLint'in 1000+ eklentisi var
- Biome %80 eklenti kapsamına sahip
- ESLint için daha fazla kaynak ve yardım mevcut

Biome'un ekosistemi büyüdükçe geçişi düşüneceğiz.
:::

---

### Vitest
Vitest, Vite projeleri için yapılmış. Jest'ten 10-20 kat daha hızlı. Jest ile aynı API, öğrenmesi kolay. Vite uygulamaları için açık ara kazanan.

---

### Husky
Husky, commit öncesi kontroller çalıştırır. Kötü kodun depona girmemesini sağlar. Haftalık 15M+ indirme ile çok popüler.

---

## Gelecek Yol Haritası

Sürekli yeni araçları değerlendiriyoruz. İzlediklerimiz:

| Mevcut | İzlenen | Neden |
|--------|---------|-------|
| ESLint + Prettier | **Biome** | 20 kat daha hızlı, tek araç |
| Zod | **Valibot** | %90 daha küçük bundle boyutu |
| Husky | **Lefthook** | Paralel yürütme, %50 daha hızlı |
| React Router | **TanStack Router** | Daha iyi TypeScript desteği |

**Hızdan önce kararlılığı** önceliklendiriyoruz. Bu alternatifler olgunlaştıkça geçişi değerlendireceğiz.

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
