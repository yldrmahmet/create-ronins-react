# Ronins React Nedir?

Ronins React bir proje oluşturma aracı. Senin için React projeleri hazırlıyor. Tüm araçlar kurulu geliyor. Sen sadece koduna odaklan.

## Sorun

JavaScript ekosisteminde çok fazla araç var. Her hafta yenileri çıkıyor. Hangisini seçeceğini bilmek zor.

**Bazı rakamlar:**

- npm'de **3 milyon paket** var
- Çoğu güncel değil veya güvenilir değil
- React hala **en popüler** — geliştiricilerin %40'ı kullanıyor
- 11 milyon web sitesi React ile yapılmış

Sorun React değil. Sorun: **React ile hangi araçları kullanmalı?**

## Neden Diğerleri Değil?

### Neden Vite değil?

Vite mükemmel bir araç. Ama sana **sadece Vite + React** veriyor.

Bunları kendin eklemelisin:
- Tailwind CSS (stil için)
- React Router (sayfalar için)
- TanStack Query (API istekleri için)
- ESLint (hata yakalamak için)
- Prettier (kod düzenlemek için)
- Husky (commit kontrolü için)
- shadcn/ui (hazır bileşenler için)

Bunlar **saatler** alır. Ronins React ile **30 saniye**.

### Neden Next.js değil?

Next.js kapsamlı bir framework. İçinde şunlar var:
- Server Components
- App Router
- Server Actions
- Birçok gelişmiş özellik

**Next.js şunlar için ideal:** SEO gereken siteler (Google sıralaması önemli).

**Ama birçok proje bunlara ihtiyaç duymaz:**
- Yönetim panelleri
- Şirket içi araçlar
- Tek sayfa uygulamalar (SPA)

Bunlar için Next.js **gereğinden fazla**. Ronins React daha sade.

### Neden TanStack Start değil?

TanStack Start henüz çok yeni. Beta aşamasında. Sık değişiyor. Henüz olgunlaşmadı.

Ronins React **sadece güvenilir araçlar** kullanır. Beta yok. Beklenmedik değişiklik yok.

### Neden Create React App değil?

Create React App (CRA) artık geliştirilmiyor. 2023'ten beri güncelleme almadı. Yavaş olan Webpack kullanıyor.

Ronins React Vite kullanıyor. Vite **10 kat daha hızlı**.

## Sana Ne Sunuyoruz

| İhtiyaç | Çözüm | Neden Bu |
|---------|-------|----------|
| Derleme aracı | Vite 7 | Süper hızlı |
| Dil | TypeScript | Hataları erkenden yakalar |
| Stil | Tailwind CSS 4 | Kullanımı kolay |
| Bileşenler | shadcn/ui | Kod sana ait |
| Sayfalar | React Router 7 | En yaygın |
| API istekleri | TanStack Query 5 | En iyi önbellekleme |
| Doğrulama | Zod 4 | Tip güvenli |
| Hata yakalama | ESLint 9 | Güncel kurallar |
| Kod düzeni | Prettier | Tutarlı kod |
| Commit kontrolü | Husky | Kalite garantisi |
| Test | Vitest | Hızlı testler |

**Hepsi ayarlanmış. Hepsi uyumlu çalışıyor.**

## İlkelerimiz

### 1. Hemen Kullanıma Hazır

Kurulum derdi yok. Ayar yapma yok. Çalıştır ve kodla.

### 2. Güncel ama Güvenilir

En son sürümleri kullanıyoruz. Ama sadece stabil olanları. Beta yok.

### 3. Sade

Gereksiz araç yok. Sadece ihtiyacın olan. Sonra istersen eklersin.

### 4. Kod Sana Ait

shadcn/ui bileşenleri senin proje dosyalarında. node_modules'da değil. İstediğin gibi değiştirebilirsin.

## Kimler İçin?

- **Yeni başlayanlar** — Kurulumla vakit kaybetme
- **Deneyimli geliştiriciler** — Sıkıcı ayarları atla
- **Takımlar** — Herkes aynı araçları kullansın
- **Startup'lar** — Hızlı başla, temiz kal

## Hemen Başla

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

**30 saniye. Hazır.**

---

**React web'in temelini oluşturuyor. Biz de senin React temelini oluşturuyoruz.**

[Hemen Başla →](/tr/guide/getting-started)
