# Proje Yapısı

Uygulamanız şöyle görünür:

```
my-app/
├── public/
│   └── ronins.svg          # Logo (--clean ile kaldırılır)
├── src/
│   ├── app/
│   │   ├── routes/         # Sayfaların
│   │   │   ├── app.tsx     # Ana sayfa
│   │   │   └── stack.tsx   # Demo sayfası (--clean ile kaldırılır)
│   │   ├── providers.tsx   # Uygulama kurulumu
│   │   └── router.tsx      # Sayfa rotaları
│   ├── components/
│   │   └── ui/             # UI bileşenleri (butonlar vb.)
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts        # Yardımcı fonksiyonlar
│   ├── main.tsx            # Uygulama burada başlar
│   └── index.css           # Stiller
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Önemli Klasörler

### `src/app/routes/`

Sayfaların buraya gelir. Bir dosya = bir sayfa.

```
routes/
├── app.tsx      → localhost:5173/
├── about.tsx    → localhost:5173/about
└── contact.tsx  → localhost:5173/contact
```

### `src/components/ui/`

shadcn/ui'den UI bileşenleri. Daha fazla ekle:

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

Yardımcı fonksiyonlar. `cn()` fonksiyonu CSS sınıflarını birleştirir:

```tsx
import { cn } from "@/lib/utils"

// Şöyle kullan:
<div className={cn("text-red-500", isActive && "font-bold")} />
```

## Dosyalar Nasıl Birlikte Çalışır

| Dosya | Ne Yapar |
|-------|----------|
| `main.tsx` | Uygulamayı başlatır |
| `providers.tsx` | TanStack Query vb. kurar |
| `router.tsx` | Tüm sayfa rotalarını tanımlar |
| `routes/*.tsx` | Sayfa bileşenlerin |
