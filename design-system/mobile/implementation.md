# Mobile Implementation Guide (React Native / Expo)

این راهنما نحوه پیاده‌سازی Design Tokens در پروژه **badminton-mobile** را توضیح می‌دهد.

## 1. نگاشت Colors

فایل موجود: `src/constants/app-theme.ts`

### مقایسه و migration:

| Token (UI Repo) | Current Mobile | باید تغییر کند به |
|-----------------|----------------|-------------------|
| `colors.semantic.dark.accent` | `#0D9488` | `#14B8A6` |
| `colors.semantic.dark.background` | `#0A1118` | ✅ همان |
| `colors.semantic.dark.surface` | `#151C24` | ✅ همان |
| `colors.semantic.dark.border` | `#243041` | ✅ همان |

### کد جدید برای `app-theme.ts`:

```typescript
// این مقادیر از design-system/tokens/colors.json می‌آیند
export const AppDark: AppPalette = {
  bg: '#0A1118',              // semantic.dark.background
  card: '#151C24',            // semantic.dark.surface
  cardBorder: '#243041',      // semantic.dark.border
  text: '#FFFFFF',            // semantic.dark.text
  textSecondary: '#9AA4B2',   // semantic.dark.textSecondary
  accent: '#14B8A6',          // ⚠️ تغییر از #0D9488 به #14B8A6
  accentSoft: '#134E4A',      // semantic.dark.accentSoft
  danger: '#F87171',          // semantic.dark.danger
  warning: '#FBBF24',         // semantic.dark.warning
  chip: '#1E293B',            // semantic.dark.chip
  // Legacy aliases
  background: '#0A1118',
  backgroundElement: '#151C24',
  backgroundSelected: '#1E293B',
};

export const AppLight: AppPalette = {
  bg: '#F4F7FB',              // semantic.light.background
  card: '#FFFFFF',            // semantic.light.surface
  cardBorder: '#D7E0EA',      // semantic.light.border
  text: '#0F172A',            // semantic.light.text
  textSecondary: '#64748B',   // semantic.light.textSecondary
  accent: '#14B8A6',          // ⚠️ تغییر از #0D9488 به #14B8A6
  accentSoft: '#CCFBF1',      // semantic.light.accentSoft
  danger: '#DC2626',          // semantic.light.danger
  warning: '#D97706',         // semantic.light.warning
  chip: '#E8EEF5',            // semantic.light.chip
  // Legacy aliases
  background: '#F4F7FB',
  backgroundElement: '#FFFFFF',
  backgroundSelected: '#E8EEF5',
};
```

## 2. Typography

### فونت Montserrat

فایل فونت: دریافت از `assets/fonts/GET_MONTSERRAT.md`

نصب در Expo:
```typescript
// app.config.ts یا app.json
{
  "expo": {
    "plugins": [
      [
        "expo-font",
        {
          "fonts": [
            "./assets/fonts/Montserrat/Montserrat-Regular.ttf",
            "./assets/fonts/Montserrat/Montserrat-Medium.ttf",
            "./assets/fonts/Montserrat/Montserrat-SemiBold.ttf",
            "./assets/fonts/Montserrat/Montserrat-Bold.ttf"
          ]
        }
      ]
    ]
  }
}
```

### استفاده در components:

```typescript
// از tokens/typography.json
const typography = {
  xs: { fontSize: 12, lineHeight: 16 },
  sm: { fontSize: 14, lineHeight: 20 },
  base: { fontSize: 16, lineHeight: 24 },
  lg: { fontSize: 18, lineHeight: 28 },
  xl: { fontSize: 20, lineHeight: 28 },
  '2xl': { fontSize: 24, lineHeight: 32 },
  '3xl': { fontSize: 30, lineHeight: 36 },
};

// در StyleSheet:
<Text style={{ 
  fontFamily: 'Montserrat-Medium',
  fontSize: typography.lg.fontSize,
  lineHeight: typography.lg.lineHeight,
}}>
```

## 3. Spacing & Border Radius

```typescript
// از tokens/spacing.json
export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,   // base unit
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,      // card radius
  '2xl': 24,
  dock: 28,    // navigation dock
  iconTile: 30,
  full: 9999,  // pills, avatars
};

// استفاده:
<View style={{
  padding: spacing[4],
  borderRadius: borderRadius.xl,
}} />
```

## 4. Glass Effect

```typescript
// از tokens/effects.json
export const glassEffect = {
  backgroundColor: 'rgba(21, 28, 36, 0.7)',  // dark mode
  // در iOS از BlurView استفاده کنید:
  // <BlurView intensity={8} tint="dark" />
};
```

## 5. Shadows

```typescript
// از tokens/effects.json - React Native shadow mapping:
export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
};
```

## 6. لوگو

فایل: `../../assets/reference/logo.png`

کپی به: `badminton-mobile/assets/images/logo.png`

```typescript
<Image
  source={require('@/assets/images/logo.png')}
  style={{ width: 120, height: 40 }}
  resizeMode="contain"
/>
```

## چک‌لیست Migration

- [ ] تغییر accent color از `#0D9488` به `#14B8A6` در `app-theme.ts`
- [ ] نصب فونت Montserrat
- [ ] ایجاد فایل `src/constants/design-tokens.ts` با spacing و typography
- [ ] کپی کردن logo.png به assets
- [ ] تست dark/light mode با رنگ‌های جدید
- [ ] بررسی تمام صفحات برای consistency با reference images

## مرجع تصویری

- Home screen: `../../assets/reference/Smashi_Dashboard_Approved_Official_Logo.png`
- Calendar screen: `../../assets/reference/smashi_badminton_calendar_dashboard.png`
