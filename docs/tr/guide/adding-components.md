# Bileşen Ekleme

## shadcn/ui Nedir?

[shadcn/ui](https://ui.shadcn.com) sana hazır bileşenler verir:
- Butonlar
- Diyaloglar (Popup'lar)
- Formlar
- Kartlar
- Tablolar
- Ve daha fazlası...

**Önemli:** Bileşenler SENİN koduna gelir. node_modules'a değil. Değiştirebilirsin.

## Bileşen Ekle

::: code-group

```bash [npm]
npx shadcn add button
```

```bash [bun]
bunx shadcn add button
```

```bash [pnpm]
pnpm dlx shadcn add button
```

```bash [yarn]
yarn dlx shadcn add button
```

:::

Bu `src/components/ui/button.tsx` oluşturur.

## Birden Fazla Bileşen Ekle

::: code-group

```bash [npm]
npx shadcn add dialog card form input
```

```bash [bun]
bunx shadcn add dialog card form input
```

```bash [pnpm]
pnpm dlx shadcn add dialog card form input
```

```bash [yarn]
yarn dlx shadcn add dialog card form input
```

:::

## Popüler Bileşenler

| Bileşen | Ne Yapar |
|---------|----------|
| button | Tıklanabilir buton |
| dialog | Popup pencere |
| card | İçerikli kutu |
| input | Metin alanı |
| form | Doğrulamalı form |
| table | Veri tablosu |
| select | Açılır menü |
| tabs | Sekme navigasyonu |
| sonner | Bildirimler |

Hepsini gör: [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## Nasıl Kullanılır

```tsx
import { Button } from "@/components/ui/button"

export default function MyPage() {
  return (
    <Button onClick={() => alert("Merhaba!")}>
      Tıkla
    </Button>
  )
}
```

## Diyalog Örneği

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function MyPage() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Popup Aç</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Merhaba!</DialogTitle>
        </DialogHeader>
        <p>Bu bir popup.</p>
      </DialogContent>
    </Dialog>
  )
}
```

## Bileşenleri Değiştir

Bileşenler `src/components/ui/` içinde. Aç ve düzenle.

Örnek - yeşil buton ekle:

```tsx
// src/components/ui/button.tsx

const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        // Kendininki ekle:
        success: "bg-green-500 text-white hover:bg-green-600",
      }
    }
  }
)
```

Şimdi kullan:

```tsx
<Button variant="success">Kaydet</Button>
```

## Renkleri Değiştir

`src/index.css`'i düzenle:

```css
:root {
  --primary: oklch(0.5 0.2 260);  /* Bu rengi değiştir */
}
```

Tema oluşturucu ister misin? Git [ui.shadcn.com/themes](https://ui.shadcn.com/themes)
