---
layout: home

hero:
  name: Ronins React
  text: Doğru Araçlar, Zaten Seçilmiş
  tagline: Araştırmayı bırak. Geliştirmeye başla. Savaşta test edilmiş varsayılanlarla üretime hazır React başlangıcı.
  actions:
    - theme: brand
      text: Başla
      link: /tr/guide/getting-started
    - theme: alt
      text: GitHub'da Görüntüle
      link: https://github.com/yldrmahmet/create-ronins-react

features:
  - icon:
      src: /vite.svg
    title: Vite 7 + SWC
    details: Anında HMR ve optimize edilmiş build'ler ile yıldırım hızında geliştirme
  - icon:
      src: /tailwind.svg
    title: Tailwind CSS 4
    details: En son özellikler ve performans iyileştirmeleri ile utility-first CSS
  - icon:
      src: /box.svg
    title: Sıfır Yapılandırma
    details: Her şey önceden yapılandırılmış. Sadece çalıştır ve kodlamaya başla
  - icon:
      src: /more.svg
    title: Ve Daha Fazlası...
    details: React 19, TypeScript, shadcn/ui, React Router, TanStack Query, ESLint, Vitest, Husky
    link: /tr/guide/tech-stack
---

<div class="why-section">

## Neden Ronins React?

JavaScript ekosistemi hızlı ilerliyor. **Çok hızlı.**

Her hafta yeni framework'ler, yeni bundler'lar, yeni araçlar geliyor. AI bunu daha da hızlandırıyor. Ama sen sadece uygulamanı geliştirmek istiyorsun.

**Gerçek:**

- npm'de **3+ milyon paket** var — çoğu eski veya güvenli değil
- **React hala 1 numara** — geliştiricilerin %40'ı kullanıyor, 11 milyon web sitesi
- Doğru araçları seçmek **günlerce araştırma** gerektirir

### Araştırmayı Biz Yaptık

Ronins React sadece bir şablon değil. **Özenle seçilmiş araçlar.**

Birçok aracı test ettik ve en iyilerini seçtik:

| İhtiyacın | Seçtiğimiz | Neden |
|-----------|------------|-------|
| Build Aracı | Vite 7 + SWC | En hızlı geliştirme sunucusu, anında HMR |
| Stillendirme | Tailwind CSS 4 | Endüstri standardı, sıfır runtime |
| Bileşenler | shadcn/ui | Kod senin, bağımlılık değil |
| Yönlendirme | React Router 7 | En popüler, React ekibi onaylı |
| Sunucu Durumu | TanStack Query 5 | En iyi önbellekleme ve senkronizasyon |
| Doğrulama | Zod 4 | TypeScript öncelikli, runtime güvenli |
| Kod Kalitesi | ESLint 9 + Prettier | Temiz, hatasız kod |

### Neden Diğer Seçenekler Değil?

| Seçenek | Problem |
|---------|---------|
| `npm create vite` | Sadece Vite + React verir. Geri kalanını sen eklersin. Saatler alır. |
| Next.js | Basit uygulamalar için çok karmaşık. Server Components, App Router... |
| TanStack Start | Çok yeni. Hala beta. Stabil değil. |
| Create React App | Ölü proje. Güncelleme yok. Çok yavaş. |

### Sıfır Karar Yorgunluğu

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

Bu kadar. Yapılandırma yok. Araştırma yok. Sadece kod.

**React web'e güç veriyor. Biz React kurulumuna güç veriyoruz.**

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
