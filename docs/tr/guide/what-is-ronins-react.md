# Ronins React Nedir?

Ronins React bir araçtır. Senin için React uygulamaları oluşturur. Tüm araçlar hazır. Sen sadece kod yaz.

## Problem

JavaScript'te çok fazla araç var. Her hafta yeni araçlar çıkıyor. Seçim yapmak zor.

**Bazı rakamlar:**

- npm'de **3 milyon paket** var
- Çoğu paket eski veya güvenli değil
- React hala **1 numara** — geliştiricilerin %40'ı kullanıyor
- 11 milyon web sitesi React kullanıyor

Problem React değil. Problem: **React ile hangi araçları kullanmalı?**

## Neden Diğer Seçenekler Değil?

### Neden `npm create vite` değil?

Vite harika. Ama sana **sadece Vite + React** veriyor.

Hala şunları eklemen gerekiyor:
- Tailwind CSS (stillendirme)
- React Router (sayfalar)
- TanStack Query (API çağrıları)
- ESLint (hata bulma)
- Prettier (kod formatlama)
- Husky (git kontrolleri)
- shadcn/ui (butonlar, diyaloglar)

Bu **saatler** alır. Ronins React ile **30 saniye** alır.

### Neden Next.js değil?

Next.js büyük bir framework. Şunları içerir:
- Server Components
- App Router
- Server Actions
- Birçok karmaşık özellik

**Next.js şunlar için iyi:** SEO gerektiren web siteleri (Google sıralaması).

**Ama birçok uygulama buna ihtiyaç duymaz:**
- Admin panelleri
- Dahili araçlar
- Tek sayfa uygulamaları (SPA)

Bunlar için Next.js **çok karmaşık**. Ronins React daha basit.

### Neden TanStack Start değil?

TanStack Start çok yeni. Hala beta. Çok değişebilir. Henüz stabil değil.

Ronins React **sadece stabil araçlar** kullanır. Beta yok. Breaking changes yok.

### Neden Create React App değil?

Create React App (CRA) öldü. 2023'ten beri güncelleme yok. Yavaş olan Webpack kullanıyor.

Ronins React Vite kullanıyor. Vite **10 kat daha hızlı**.

## Sana Ne Veriyoruz

| İhtiyacın | Sana Verdiğimiz | Neden Bu |
|-----------|-----------------|----------|
| Build aracı | Vite 7 | Çok hızlı |
| Dil | TypeScript | Hataları erken bulur |
| Stillendirme | Tailwind CSS 4 | Kullanımı kolay |
| Bileşenler | shadcn/ui | Kod sana ait |
| Sayfalar | React Router 7 | En popüler |
| API çağrıları | TanStack Query 5 | En iyi önbellekleme |
| Doğrulama | Zod 4 | Tip güvenli |
| Hata bulucu | ESLint 9 | Modern kurallar |
| Formatlayıcı | Prettier | Temiz kod |
| Git hooks | Husky | Commit öncesi kontrol |
| Test | Vitest | Hızlı testler |

**Hepsi yapılandırılmış. Hepsi birlikte çalışıyor.**

## Kurallarımız

### 1. Kullanıma Hazır

Kurulum yok. Yapılandırma yok. Sadece çalıştır ve kodla.

### 2. Yeni ama Stabil

Yeni sürümleri kullanıyoruz. Ama sadece stabil olanları. Beta yok.

### 3. Basit

Ekstra araç yok. Sadece ihtiyacın olan. İstersen sonra daha fazla ekle.

### 4. Kod Sana Ait

shadcn/ui bileşenleri senin kodunda. node_modules'da değil. Değiştirebilirsin.

## Kimler Kullanmalı?

- **Yeni geliştiriciler** — Yapılandırma ile vakit kaybetme
- **Deneyimli geliştiriciler** — Sıkıcı kurulumu atla
- **Takımlar** — Herkes için aynı araçlar
- **Startup'lar** — Hızlı gönder, temiz kal

## Hızlı Başlangıç

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

**30 saniye. Tamam.**

---

**React web'e güç veriyor. Biz React kurulumuna güç veriyoruz.**

[Şimdi Başla →](/tr/guide/getting-started)
