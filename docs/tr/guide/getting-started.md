# Başlangıç

## Uygulamanı Oluştur

Paket yöneticini seç ve çalıştır:

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

Tarayıcında `http://localhost:5173` adresini aç. Tamam!

## Temiz Mod

Minimal bir uygulama mı istiyorsun? Demo sayfaları yok mu? `--clean` kullan:

::: code-group

```bash [npm]
npm create ronins-react@latest my-app --clean
```

```bash [bun]
bun create ronins-react@latest my-app --clean
```

```bash [pnpm]
pnpm create ronins-react@latest my-app --clean
```

```bash [yarn]
yarn create ronins-react@latest my-app --clean
```

:::

Bunları kaldırır:
- Demo sayfaları
- Logo dosyası

Basit bir "Hello World" uygulaması alırsın.

## Mevcut Klasörü Kullan

Bulunduğun klasörde oluşturmak mı istiyorsun? `.` kullan:

::: code-group

```bash [npm]
mkdir my-app && cd my-app
npm create ronins-react@latest .
```

```bash [bun]
mkdir my-app && cd my-app
bun create ronins-react@latest .
```

```bash [pnpm]
mkdir my-app && cd my-app
pnpm create ronins-react@latest .
```

```bash [yarn]
mkdir my-app && cd my-app
yarn create ronins-react@latest .
```

:::

::: warning
Klasör boş olmalı.
:::

## Sırada Ne Var?

- [Proje Yapısı](/tr/guide/project-structure) — Tüm dosyaları gör
- [Komutlar](/tr/guide/commands) — Tüm komutları gör
- [Bileşen Ekle](/tr/guide/adding-components) — Butonlar, diyaloglar vb. ekle
