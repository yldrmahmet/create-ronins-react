# Başlangıç

## Hızlı Başlat

::: code-group

```bash [npm]
npm create ronins-react@latest
```

```bash [bun]
bun create ronins-react@latest
```

```bash [pnpm]
pnpm create ronins-react@latest
```

```bash [yarn]
yarn create ronins-react@latest
```

:::

Proje adı gir. Klasöre git. Bağımlılıkları yükle:

::: code-group

```bash [npm]
cd proje-adım
npm install
npm run dev
```

```bash [bun]
cd proje-adım
bun install
bun dev
```

```bash [pnpm]
cd proje-adım
pnpm install
pnpm dev
```

```bash [yarn]
cd proje-adım
yarn install
yarn dev
```

:::

`http://localhost:5173` adresini aç. Hazırsın.

## Ne Alıyorsun

```
proje-adım/
├── src/
│   ├── app/
│   │   ├── routes/        # Sayfaların
│   │   ├── providers.tsx  # Uygulama sağlayıcıları
│   │   └── router.tsx     # Yönlendirici yapılandırması
│   ├── components/
│   │   └── ui/            # shadcn/ui bileşenleri
│   ├── lib/               # Yardımcılar
│   └── main.tsx           # Giriş noktası
├── index.html
├── vite.config.ts
└── package.json
```

## Sonraki Adımlar

1. [Proje yapısını](/tr/guide/project-structure) öğren
2. [shadcn/ui bileşenleri](/tr/guide/adding-components) ekle
3. [Mevcut komutları](/tr/guide/commands) gör
