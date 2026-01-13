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

## İsim

Uygulamanın klasör adı:

::: code-group

```bash [npm]
npm create ronins-react@latest uygulama-adim
```

```bash [bun]
bun create ronins-react@latest uygulama-adim
```

```bash [pnpm]
pnpm create ronins-react@latest uygulama-adim
```

```bash [yarn]
yarn create ronins-react@latest uygulama-adim
```

:::

`uygulama-adim/` klasörünü oluşturur.

**İsim yok mu?** Soracak.

## Mevcut Klasörü Kullan

`.` kullanarak mevcut klasörde oluştur:

::: code-group

```bash [npm]
mkdir uygulama-adim && cd uygulama-adim
npm create ronins-react@latest .
```

```bash [bun]
mkdir uygulama-adim && cd uygulama-adim
bun create ronins-react@latest .
```

```bash [pnpm]
mkdir uygulama-adim && cd uygulama-adim
pnpm create ronins-react@latest .
```

```bash [yarn]
mkdir uygulama-adim && cd uygulama-adim
yarn create ronins-react@latest .
```

:::

::: warning
Klasör boş olmalı!
:::

## Seçenekler

### `--clean` veya `-c`

Minimal uygulama oluşturur. Demo dosyaları yok.

::: code-group

```bash [npm]
npm create ronins-react@latest uygulama-adim --clean
```

```bash [bun]
bun create ronins-react@latest uygulama-adim --clean
```

```bash [pnpm]
pnpm create ronins-react@latest uygulama-adim --clean
```

```bash [yarn]
yarn create ronins-react@latest uygulama-adim --clean
```

:::

**Kaldırır:**
- `src/app/routes/stack.tsx` (Demo sayfası)
- `public/ronins.svg` (Logo)

**Oluşturur:**
- Basit "Hello World" uygulaması

## Paket Yöneticisi

CLI hangi paket yöneticisi kullandığını bilir:

| Çalıştırdığın | Algılanan |
|---------------|-----------|
| `npm create ronins-react@latest` | npm |
| `bun create ronins-react@latest` | bun |
| `pnpm create ronins-react@latest` | pnpm |
| `yarn create ronins-react@latest` | yarn |

README ve CLAUDE.md dosyaları paket yöneticinin komutlarını kullanır.

## Hatalar

| Hata | Neden |
|------|-------|
| "Directory exists" | Klasör zaten var. Yeni isim seç. |
| "Not empty" | Mevcut klasörde dosyalar var. Boş klasör kullan. |
