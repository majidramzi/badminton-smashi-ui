# Home Screen Specification

**مرجع تصویری:** `../../assets/reference/Smashi_Dashboard_Approved_Official_Logo.png`

## Layout Overview

صفحه Home اصلی‌ترین صفحه اپلیکیشن است که شامل:
- Greeting با نام کاربر و زمان روز
- دکمه اصلی "Design a Training"
- کارت Upcoming Training / Group Session
- نوار پیشرفت هفتگی
- کارت AI Insights
- Recent Sessions
- Friends Activity
- Navigation dock (Home / Calendar / Profile)

## Components

### 1. Header (Greeting)

```
Layout:
┌─────────────────────────────────┐
│ Good [time], [Name]!            │
│ I'm here to help you build      │
│ today's training.               │
└─────────────────────────────────┘
```

**Typography:**
- Title: `fontSize.3xl` (30px), `fontWeight.bold` (700)
- Subtitle: `fontSize.base` (16px), `fontWeight.regular` (400)

**Colors:**
- Text: `semantic.[theme].text`
- Subtitle: `semantic.[theme].textSecondary`

**Spacing:**
- Top padding: `spacing[6]` (24px)
- Bottom padding: `spacing[4]` (16px)
- Horizontal padding: `layout.screenHorizontal` (16px)

**Greeting Logic:**
```typescript
function getGreeting(hour: number): string {
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}
```

---

### 2. Design a Training Button (Primary CTA)

```
┌─────────────────────────────────┐
│    ⚡ Design a Training         │
└─────────────────────────────────┘
```

**Dimensions:**
- Height: 56px
- Full width با horizontal padding

**Colors:**
- Background: `brand.teal` (#14B8A6)
- Text: white
- Hover/Press: `brand.deepTeal` (#066B6E)

**Typography:**
- `fontSize.lg` (18px)
- `fontWeight.semibold` (600)

**Border Radius:**
- `borderRadius.2xl` (24px)

**Icon:**
- Lightning bolt icon قبل از متن
- اندازه: 20px

**Animation:**
- Subtle scale on press (0.98)
- Duration: `animation.duration.fast` (150ms)

---

### 3. Upcoming Training Card

```
┌─────────────────────────────────┐
│ Tomorrow • 16:00-18:00          │
│ Advanced Footwork               │
│                                 │
│ 👤 Solo training                │
└─────────────────────────────────┘
```

**Layout:**
- Background: `semantic.[theme].surface`
- Border: `1px solid semantic.[theme].border`
- Border radius: `borderRadius.xl` (20px)
- Padding: `spacing[4]` (16px)
- Shadow: `shadow.md`

**States:**
- Solo training: آیکون شخص
- Group session: تعداد افراد + آواتارها

**Typography:**
- Time/Date: `fontSize.sm` (14px), color: `textSecondary`
- Title: `fontSize.xl` (20px), `fontWeight.semibold`
- Meta: `fontSize.sm` (14px)

**Spacing:**
- Gap between elements: `spacing[2]` (8px)

---

### 4. Weekly Progress Bar

```
┌─────────────────────────────────┐
│ Week Progress                   │
│ ████████░░░░ 3/7 sessions       │
└─────────────────────────────────┘
```

**Layout:**
- Height: 8px
- Border radius: `borderRadius.full` (9999px)
- Background: `semantic.[theme].chip`
- Fill: `brand.teal`

**Typography:**
- Label: `fontSize.sm` (14px), `fontWeight.medium`
- Count: `fontSize.xs` (12px), `textSecondary`

**Animation:**
- Progress fill با animated width
- Duration: `animation.duration.slow` (300ms)

---

### 5. AI Insights Card

```
┌─────────────────────────────────┐
│ 💡 AI Insights                  │
│                                 │
│ Your backhand clear accuracy    │
│ improved by 15% this week       │
│                                 │
│ [View Details →]                │
└─────────────────────────────────┘
```

**Layout:**
- Background: gradient یا glass effect
- Border radius: `borderRadius.xl` (20px)
- Padding: `spacing[5]` (20px)

**Colors:**
- Background: subtle gradient از `brand.mint` to `brand.teal` با opacity
- یا glass effect با `effects.glass.background`

**Typography:**
- Title: `fontSize.lg` (18px), `fontWeight.semibold`
- Insight text: `fontSize.base` (16px), `lineHeight` بلند برای readability
- Button: `fontSize.sm` (14px), `brand.teal`

**Important:**
- این کارت فقط زمانی نمایش داده می‌شود که insight واقعی موجود باشد
- هیچ‌وقت fake/hardcoded insights نمایش ندهید

---

### 6. Recent Sessions List

```
┌─────────────────────────────────┐
│ Recent Sessions                 │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Today • 90 min              │ │
│ │ Smash Technique             │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Yesterday • 60 min          │ │
│ │ Net Play Practice           │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

**Item Layout:**
- Background: `surface`
- Border: `border`
- Border radius: `borderRadius.lg` (16px)
- Padding: `spacing[3]` (12px)
- Gap between items: `layout.cardGap` (14px)

**Typography:**
- Meta: `fontSize.xs` (12px), `textSecondary`
- Title: `fontSize.base` (16px), `fontWeight.medium`

---

### 7. Friends Activity

```
┌─────────────────────────────────┐
│ Friends Activity                │
│                                 │
│ 👤 Ali completed Advanced       │
│    Footwork • 2h ago            │
│                                 │
│ 👤 Sara is training now         │
└─────────────────────────────────┘
```

**Layout:**
- مشابه Recent Sessions
- Avatar + Name + Activity

**Colors:**
- "training now" badge: `semantic.success` با soft background

---

### 8. Navigation Dock (Bottom)

```
┌─────────────────────────────────┐
│  🏠    📅    👤                 │
│ Home Calendar Profile           │
└─────────────────────────────────┘
```

**Layout:**
- Fixed position bottom
- Background: `surface` با glass effect
- Border radius: `borderRadius.dock` (28px)
- Padding: `spacing[3]` (12px)
- Shadow: `shadow.lg`

**Items:**
- 3 تب: Home, Calendar, Profile
- Active state: `brand.teal` background با `borderRadius.md`
- Inactive state: `textSecondary`

**Icons:**
- اندازه: 24px
- از `../../assets/icons/glyphs/` استفاده کنید

**Typography:**
- Label: `fontSize.xs` (12px)

---

## Responsive Behavior

### Mobile (< 768px)
- Full width cards
- Single column layout
- Navigation dock در bottom

### Tablet / Desktop (≥ 768px)
- Max width: 600px در center
- یا grid layout 2 column برای cards
- Navigation در sidebar (optional)

---

## Dark/Light Mode

همه رنگ‌ها از `semantic.[theme]` می‌آیند:
- `theme = 'dark'` → استفاده از `colors.semantic.dark`
- `theme = 'light'` → استفاده از `colors.semantic.light`

---

## Accessibility

- [ ] تمام interactive elements دارای accessible label
- [ ] Contrast ratio حداقل 4.5:1 برای text
- [ ] Focus visible برای keyboard navigation
- [ ] Screen reader support برای AI Insights

---

## Animation & Motion

- [ ] Respect `prefers-reduced-motion`
- [ ] Subtle animations برای:
  - Card press (scale 0.98)
  - Progress bar fill
  - Page transitions
- [ ] Duration: `animation.duration.fast` to `base` (150-200ms)

---

## Platform-Specific Notes

### Web
- استفاده از Tailwind classes
- Glass effect با `backdrop-blur`
- Hover states برای buttons

### Mobile
- استفاده از React Native StyleSheet
- Glass effect با `BlurView` (iOS) یا semi-transparent background (Android)
- Pressable با haptic feedback

---

## چک‌لیست Implementation

- [ ] Greeting با نام کاربر
- [ ] Primary CTA button با icon
- [ ] Upcoming training card (solo/group states)
- [ ] Weekly progress bar با animation
- [ ] AI Insights (فقط با data واقعی)
- [ ] Recent sessions list
- [ ] Friends activity
- [ ] Navigation dock با 3 tabs
- [ ] Dark/light mode support
- [ ] Accessibility labels
- [ ] تطابق کامل با reference image
