---
layout: home

hero:
  name: Ronins React
  text: Doğru Araçlar, Hazır Bekliyor
  tagline: Araştırmayı bırak. Kodlamaya başla. Kanıtlanmış araçlarla üretime hazır React şablonu.
  actions:
    - theme: brand
      text: Başla
      link: /tr/guide/getting-started
    - theme: alt
      text: GitHub'da İncele
      link: https://github.com/yldrmahmet/create-ronins-react

features:
  - icon:
      src: /images/vite.svg
    title: Vite 8 + Rolldown
    details: Anında değişiklik yansıması ve optimize edilmiş derleme ile süper hızlı geliştirme
  - icon:
      src: /images/tailwind.svg
    title: Tailwind CSS 4
    details: En güncel özellikler ve performans iyileştirmeleriyle modern CSS
  - icon:
      src: /images/box.svg
    title: Kurulum Gerektirmez
    details: Her şey ayarlanmış. Sadece çalıştır ve kodlamaya başla
  - icon:
      src: /images/more.svg
    title: Ve Dahası...
    details: React 19, TypeScript, shadcn/ui, React Router, TanStack Query, ESLint, Vitest, Husky
    link: /tr/guide/tech-stack
---

<div class="why-section">

## Neden Ronins React?

JavaScript dünyası çok hızlı değişiyor. **Fazla hızlı.**

Her hafta yeni framework'ler, yeni araçlar çıkıyor. Yapay zeka bunu daha da hızlandırıyor. Ama sen sadece uygulamanı yapmak istiyorsun.

**Gerçekler:**

- npm'de **3 milyondan fazla paket** var — çoğu güncel değil veya güvenilir değil
- **React hala lider** — geliştiricilerin %40'ı kullanıyor, 11 milyon web sitesi
- Doğru araçları seçmek **günler harcatıyor**

### Biz Araştırdık, Sen Kullan

Ronins React sıradan bir şablon değil. **Özenle seçilmiş araçlar topluluğu.**

Birçok aracı denedik ve en iyilerini seçtik:

| Ne Gerekiyor | Ne Seçtik | Neden |
|--------------|-----------|-------|
| Derleme Aracı | Vite 8 + Rolldown | En hızlı geliştirme ortamı, anında yansıma |
| Stil | Tailwind CSS 4 | Sektör standardı, ekstra yük yok |
| Bileşenler | shadcn/ui | Kod sende, bağımlılık değil |
| Sayfa Yönetimi | React Router 8 | En yaygın, React ekibi destekliyor |
| Veri Yönetimi | TanStack Query 5 | En iyi önbellekleme ve senkronizasyon |
| Doğrulama | Zod 4 | TypeScript uyumlu, güvenli |
| Kod Kalitesi | ESLint 10 + Prettier | Temiz, hatasız kod |

### Neden Başka Seçenekler Değil?

| Seçenek | Sorun |
|---------|-------|
| `npm create vite` | Sadece Vite + React verir. Gerisini sen kurarsın. Saatler sürer. |
| Next.js | Basit projeler için fazla karmaşık. Server Components, App Router... |
| TanStack Start | Henüz çok yeni. Beta aşamasında. Stabil değil. |
| Create React App | Artık geliştirilmiyor. Güncelleme yok. Çok yavaş. |

### Kararları Biz Verdik

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

Bu kadar. Ayar yok. Araştırma yok. Sadece kodla.

**React web'in temelini oluşturuyor. Biz de senin React temelini oluşturuyoruz.**

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
