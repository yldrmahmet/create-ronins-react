# Proje Yapısı

Projen şöyle görünüyor:

```
my-app/
├── public/
│   └── ronins.png          # Logo (--clean ile silinir)
├── src/
│   ├── app/
│   │   ├── routes/         # Sayfaların
│   │   │   ├── app.tsx     # Ana sayfa
│   │   │   └── stack.tsx   # Demo sayfası (--clean ile silinir)
│   │   ├── providers.tsx   # Uygulama ayarları
│   │   └── router.tsx      # Sayfa tanımları
│   ├── components/
│   │   └── ui/             # Arayüz bileşenleri (buton vb.)
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts        # Yardımcı fonksiyonlar
│   ├── main.tsx            # Giriş noktası
│   └── index.css           # Stiller
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Önemli Klasörler

### `src/app/routes/`

Sayfaların burada. Bir dosya = bir sayfa.

```
routes/
├── app.tsx      → localhost:5173/
├── about.tsx    → localhost:5173/about
└── contact.tsx  → localhost:5173/contact
```

### `src/components/ui/`

shadcn/ui bileşenleri. Yenilerini eklemek için:

::: code-group

```bash [npm]
npx shadcn add dialog card
```

```bash [bun]
bunx shadcn add dialog card
```

```bash [pnpm]
pnpm dlx shadcn add dialog card
```

```bash [yarn]
yarn dlx shadcn add dialog card
```

:::

### `src/lib/`

Yardımcı fonksiyonlar. `cn()` fonksiyonu CSS sınıflarını birleştiriyor:

```tsx
import { cn } from "@/lib/utils"

// Kullanımı:
<div className={cn("text-red-500", isActive && "font-bold")} />
```

## Dosyalar Ne İş Yapıyor

| Dosya | Görevi |
|-------|--------|
| `main.tsx` | Uygulamayı başlatır |
| `providers.tsx` | TanStack Query gibi servisleri ayarlar |
| `router.tsx` | Sayfa yönlendirmelerini tanımlar |
| `routes/*.tsx` | Sayfa bileşenlerin |
