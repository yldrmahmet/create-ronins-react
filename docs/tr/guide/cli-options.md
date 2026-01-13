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

**İsim yok mu?** Sana soracak.

## Mevcut Klasörü Kullan

`.` kullanarak mevcut klasörde oluştur:

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

Minimal uygulama oluşturur. Demo dosyaları yok.

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

**Kaldırır:**
- `src/app/routes/stack.tsx` (demo sayfası)
- `public/ronins.svg` (logo)

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
