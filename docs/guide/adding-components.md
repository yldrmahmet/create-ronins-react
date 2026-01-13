# Adding Components

## What is shadcn/ui?

[shadcn/ui](https://ui.shadcn.com) gives you ready components:
- Buttons
- Dialogs (popups)
- Forms
- Cards
- Tables
- And more...

**Important:** Components go into YOUR code. Not node_modules. You can change them.

## Add a Component

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

This creates `src/components/ui/button.tsx`.

## Add Many Components

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

## Popular Components

| Component | What It Does |
|-----------|--------------|
| button | Clickable button |
| dialog | Popup window |
| card | Box with content |
| input | Text field |
| form | Form with validation |
| table | Data table |
| select | Dropdown menu |
| tabs | Tab navigation |
| sonner | Notifications |

See all: [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## How to Use

```tsx
import { Button } from "@/components/ui/button"

export default function MyPage() {
  return (
    <Button onClick={() => alert("Hello!")}>
      Click Me
    </Button>
  )
}
```

## Dialog Example

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
        <Button>Open Popup</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hello!</DialogTitle>
        </DialogHeader>
        <p>This is a popup.</p>
      </DialogContent>
    </Dialog>
  )
}
```

## Change Components

Components are in `src/components/ui/`. Open and edit them.

Example - add green button:

```tsx
// src/components/ui/button.tsx

const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        // Add your own:
        success: "bg-green-500 text-white hover:bg-green-600",
      }
    }
  }
)
```

Now use it:

```tsx
<Button variant="success">Save</Button>
```

## Change Colors

Edit `src/index.css`:

```css
:root {
  --primary: oklch(0.5 0.2 260);  /* Change this color */
}
```

Want a theme generator? Go to [ui.shadcn.com/themes](https://ui.shadcn.com/themes)
