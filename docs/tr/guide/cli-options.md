# CLI Seçenekleri

## Temel Kullanım

::: code-group

```bash [npm]
npm create ronins-react@latest [isim] [seçenekler]
```

```bash [bun]
bun create ronins-react@latest [isim] [seçenekler]
```

```bash [pnpm]
pnpm create ronins-react@latest [isim] [seçenekler]
```

```bash [yarn]
yarn create ronins-react@latest [isim] [seçenekler]
```

:::

## Proje İsmi

Projenin klasör adı:

::: code-group

```bash [npm]
npm create ronins-react@latest my-app
```

```bash [bun]
bun create ronins-react@latest my-app
```

```bash [pnpm]
pnpm create ronins-react@latest my-app
```

```bash [yarn]
yarn create ronins-react@latest my-app
```

:::

`my-app/` klasörünü oluşturur.

**İsim vermezsen?** Sana sorar.

## Mevcut Klasörde Oluştur

`.` kullanarak bulunduğun klasörde oluştur:

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
Klasör boş olmalı!
:::

## Seçenekler

### `--clean` veya `-c`

Sade proje oluşturur. Demo dosyaları olmaz.

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

**Silinen dosyalar:**
- `src/app/routes/stack.tsx` (demo sayfası)
- `public/ronins.png` (logo)

**Sonuç:**
- Sade "Merhaba Dünya" projesi

## Paket Yöneticisi Algılama

CLI hangi paket yöneticisi kullandığını anlıyor:

| Komut | Algılanan |
|-------|-----------|
| `npm create ronins-react@latest` | npm |
| `bun create ronins-react@latest` | bun |
| `pnpm create ronins-react@latest` | pnpm |
| `yarn create ronins-react@latest` | yarn |

README ve CLAUDE.md dosyaları senin paket yöneticine göre oluşturulur.

## Olası Hatalar

| Hata | Sebebi |
|------|--------|
| "Directory exists" | Aynı isimde klasör var. Farklı isim seç. |
| "Not empty" | Klasörde dosya var. Boş klasör kullan. |
