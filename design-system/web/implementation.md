# Web Implementation Guide (Next.js / React / Tailwind)

> For current logo selection and slogan rules, use the [Smashi logo contract](../../docs/BRAND_LOGO.md). It supersedes older logo examples below.

این راهنما نحوه پیاده‌سازی Design Tokens در پروژه **badminton-web** را توضیح می‌دهد.

## 1. نگاشت Colors به CSS Variables

فایل موجود: `app/globals.css`

### مقایسه و migration:

| Token (UI Repo) | Current Web | باید تغییر کند به |
|-----------------|-------------|-------------------|
| `colors.semantic.dark.accent` | `#0D9488` | `#14B8A6` |
| `colors.semantic.dark.background` | `#0A1118` | ✅ همان |
| `colors.semantic.dark.surface` | `#151C24` | ✅ همان |

### کد جدید برای `globals.css`:

```css
:root,
html.light,
html[data-theme="light"] {
  /* از design-system/tokens/colors.json */
  --background: #f4f7fb;        /* semantic.light.background */
  --foreground: #0f172a;        /* semantic.light.text */
  --brand: #14B8A6;             /* ⚠️ تغییر از #0d9488 */
  --brand-dark: #0D9488;        /* semantic.light.accentDark */
  --muted: #64748b;             /* semantic.light.textSecondary */
  --surface: #ffffff;           /* semantic.light.surface */
  --border: #d7e0ea;            /* semantic.light.border */
  --chip: #e8eef5;              /* semantic.light.chip */
  --danger: #dc2626;            /* semantic.light.danger */
  --accent-soft: #ccfbf1;       /* semantic.light.accentSoft */
  
  /* Brand colors - مرجع اصلی */
  --brand-navy: #0C2747;
  --brand-deep-teal: #066B6E;
  --brand-teal: #14B8A6;
  --brand-mint: #8FE9D1;
  --brand-off-white: #F7FAF9;
  --brand-warm-sand: #F3EAD7;
}

html.dark,
html[data-theme="dark"],
:root:not(.light):not([data-theme="light"]) {
  --background: #0a1118;        /* semantic.dark.background */
  --foreground: #ffffff;        /* semantic.dark.text */
  --brand: #14B8A6;             /* ⚠️ تغییر از #0d9488 */
  --brand-dark: #0D9488;        /* semantic.dark.accentDark */
  --muted: #9aa4b2;             /* semantic.dark.textSecondary */
  --surface: #151c24;           /* semantic.dark.surface */
  --border: #243041;            /* semantic.dark.border */
  --chip: #1e293b;              /* semantic.dark.chip */
  --danger: #f87171;            /* semantic.dark.danger */
  --accent-soft: #134e4a;       /* semantic.dark.accentSoft */
  
  /* Brand colors - یکسان در هر دو theme */
  --brand-navy: #0C2747;
  --brand-deep-teal: #066B6E;
  --brand-teal: #14B8A6;
  --brand-mint: #8FE9D1;
  --brand-off-white: #F7FAF9;
  --brand-warm-sand: #F3EAD7;
}
```

### افزودن به Tailwind Config:

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          DEFAULT: "var(--brand)",
          dark: "var(--brand-dark)",
          navy: "var(--brand-navy)",
          'deep-teal': "var(--brand-deep-teal)",
          teal: "var(--brand-teal)",
          mint: "var(--brand-mint)",
          'off-white': "var(--brand-off-white)",
          'warm-sand': "var(--brand-warm-sand)",
        },
        muted: "var(--muted)",
        surface: "var(--surface)",
        border: "var(--border)",
        chip: "var(--chip)",
        danger: "var(--danger)",
      },
      // از tokens/spacing.json
      spacing: {
        'screen-x': '16px',
        'card-gap': '14px',
      },
      // از tokens/spacing.json
      borderRadius: {
        'dock': '28px',
        'icon-tile': '30px',
      },
      // از tokens/typography.json
      fontFamily: {
        sans: ['Montserrat', 'var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
};

export default config;
```

## 2. Typography

### نصب فونت Montserrat

```bash
npm install @next/font
```

```typescript
// app/layout.tsx
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }) {
  return (
    <html className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### استفاده:

```tsx
<h1 className="text-3xl font-semibold">
  // از tokens/typography.json: 3xl = 30px, semibold = 600
</h1>
```

## 3. Glass Effect

```css
/* از tokens/effects.json */
.glass-effect {
  background: rgba(21, 28, 36, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* با Tailwind: */
@layer components {
  .glass {
    @apply bg-surface/70 backdrop-blur-[8px];
  }
}

/* در dark mode: */
html.dark .glass {
  background: rgba(21, 28, 36, 0.7);
}

html.light .glass {
  background: rgba(255, 255, 255, 0.7);
}
```

## 4. Shadows

```css
/* از tokens/effects.json */
.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
```

## 5. لوگو

فایل: `../../assets/reference/logo.png`

کپی به: `badminton-web/public/logo.png`

```tsx
<Image
  src="/logo.png"
  alt="Smashi"
  width={120}
  height={40}
/>
```

## 6. استفاده از Tokens در Components

```tsx
// Button.tsx
export function Button({ children, variant = 'primary' }) {
  return (
    <button
      className={cn(
        'px-6 py-3 rounded-xl font-semibold transition-all',
        variant === 'primary' && 'bg-brand text-white hover:bg-brand-dark',
        variant === 'secondary' && 'bg-chip text-foreground hover:bg-border'
      )}
    >
      {children}
    </button>
  );
}
```

```tsx
// Card.tsx
export function Card({ children }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-4 shadow-md">
      {children}
    </div>
  );
}
```

## 7. Animations

```css
/* از tokens/effects.json */
.transition-default {
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## چک‌لیست Migration

- [ ] تغییر `--brand` از `#0d9488` به `#14B8A6` در `globals.css`
- [ ] افزودن brand colors به CSS variables
- [ ] آپدیت `tailwind.config.ts` با colors و spacing جدید
- [ ] نصب و تنظیم فونت Montserrat
- [ ] کپی کردن logo.png به public
- [ ] ایجاد `.glass` utility class
- [ ] تست dark/light mode
- [ ] بررسی تمام صفحات برای consistency با reference images

## مرجع تصویری

- Home screen: `../../assets/reference/Smashi_Dashboard_Approved_Official_Logo.png`
- Calendar screen: `../../assets/reference/smashi_badminton_calendar_dashboard.png`

## نکات مهم

1. همیشه از Tailwind classes استفاده کنید نه inline styles
2. برای رنگ‌های brand از `bg-brand` و `text-brand` استفاده کنید
3. Glass effect را فقط در جاهای مناسب استفاده کنید (نه همه جا)
4. همیشه contrast را چک کنید (خصوصاً روی glass backgrounds)
