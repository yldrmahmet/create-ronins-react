# Komutlar

Paket yöneticini seç. Komutlar her biri için değişir.

## Geliştirme Sunucusunu Başlat

::: code-group

```bash [npm]
npm run dev
```

```bash [bun]
bun dev
```

```bash [pnpm]
pnpm dev
```

```bash [yarn]
yarn dev
```

:::

`http://localhost:5173` açar. Değişiklikler anında görünür.

## Prodüksiyon için Derle

::: code-group

```bash [npm]
npm run build
```

```bash [bun]
bun run build
```

```bash [pnpm]
pnpm build
```

```bash [yarn]
yarn build
```

:::

`dist/` klasörü oluşturur. Bunu sunucuna yükle.

::: details Neden `bun build` değil de `bun run build`?

Bunlar farklı komutlar:

| Komut | Ne Yapar |
|-------|----------|
| `bun build` | Bun'un bundler'ını kullanır |
| `bun run build` | package.json'daki "build" scriptini çalıştırır |

`bun run build` kullanıyoruz çünkü **Vite'ın bundler'ını** çalıştırır.

**Neden Vite, Bun'un bundler'ı değil?**
- Vite'ın daha fazla özelliği var
- Vite'ın daha fazla eklentisi var
- Vite yıllardır React ile test edildi

**Bun kod çalıştırma için hızlı. Vite build için daha iyi.**

:::

## Kodu Kontrol Et

::: code-group

```bash [npm]
npm run check
```

```bash [bun]
bun check
```

```bash [pnpm]
pnpm check
```

```bash [yarn]
yarn check
```

:::

Tüm kontrolleri çalıştırır:
- ESLint (hata bul)
- Prettier (format kontrol)
- TypeScript (tip kontrol)

## Hata Bul (Lint)

::: code-group

```bash [npm]
npm run lint
```

```bash [bun]
bun lint
```

```bash [pnpm]
pnpm lint
```

```bash [yarn]
yarn lint
```

:::

Hataları otomatik düzelt:

::: code-group

```bash [npm]
npm run lint -- --fix
```

```bash [bun]
bun lint --fix
```

```bash [pnpm]
pnpm lint --fix
```

```bash [yarn]
yarn lint --fix
```

:::

## Kodu Formatla

::: code-group

```bash [npm]
npm run format
```

```bash [bun]
bun format
```

```bash [pnpm]
pnpm format
```

```bash [yarn]
yarn format
```

:::

Kodu güzel yapar. Boşlukları, tırnakları vb. düzeltir.

## Testleri Çalıştır

::: code-group

```bash [npm]
npm test
```

```bash [bun]
bun test
```

```bash [pnpm]
pnpm test
```

```bash [yarn]
yarn test
```

:::

Testleri çalıştırır. Değişiklikleri izler.

Bir kez çalıştır (CI için):

::: code-group

```bash [npm]
npm run test:run
```

```bash [bun]
bun test:run
```

```bash [pnpm]
pnpm test:run
```

```bash [yarn]
yarn test:run
```

:::

## Demo İçeriği Kaldır

::: code-group

```bash [npm]
npm run clean
```

```bash [bun]
bun clean
```

```bash [pnpm]
pnpm clean
```

```bash [yarn]
yarn clean
```

:::

Demo dosyalarını kaldırır. Temiz "Hello World" uygulaması verir.

## Tüm Komutlar

| Komut | Ne Yapar |
|-------|----------|
| `dev` | Geliştirme sunucusunu başlat |
| `build` | Prodüksiyon için derle |
| `check` | Tüm kontrolleri çalıştır |
| `lint` | Hata bul |
| `format` | Kodu güzelleştir |
| `test` | Testleri çalıştır (izle) |
| `test:run` | Testleri çalıştır (bir kez) |
| `clean` | Demo dosyalarını kaldır |
