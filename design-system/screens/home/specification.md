# Home Screen Specification

> Draft reference. Earlier dual-theme examples and visual values are historical, not instructions for the current fixed Smashi theme.

**Visual reference:** [Home artwork](../../../assets/reference/Smashi_Dashboard_Approved_Official_Logo.png)

## Layout Overview

Home is the main application screen and includes:
- A greeting with the user's name and the time of day
- The primary “Design a Training” button
- An Upcoming Training / Group Session card
- A weekly progress bar
- An AI Insights card
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
- Full width with horizontal padding

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
- Lightning bolt icon before the label
- Size: 20px

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
- Solo training: person icon
- Group session: participant count and avatars

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
- Progress fill animates its width
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
- Background: gradient or glass effect
- Border radius: `borderRadius.xl` (20px)
- Padding: `spacing[5]` (20px)

**Colors:**
- Background: subtle gradient from `brand.mint` to `brand.teal` with opacity
- Alternatively, use glass with `effects.glass.background`

**Typography:**
- Title: `fontSize.lg` (18px), `fontWeight.semibold`
- Insight text: `fontSize.base` (16px), with a generous `lineHeight` for readability
- Button: `fontSize.sm` (14px), `brand.teal`

**Important:**
- Show this card only when a real insight is available
- Never display fabricated or hardcoded insights

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
- Similar to Recent Sessions
- Avatar + Name + Activity

**Colors:**
- “Training now” badge: `semantic.success` with a soft background

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
- Background: `surface` with a glass effect
- Border radius: `borderRadius.dock` (28px)
- Padding: `spacing[3]` (12px)
- Shadow: `shadow.lg`

**Items:**
- Three tabs: Home, Calendar, Profile
- Active state: `brand.teal` background with `borderRadius.md`
- Inactive state: `textSecondary`

**Icons:**
- Size: 24px
- Use `../../../assets/icons/glyphs/`

**Typography:**
- Label: `fontSize.xs` (12px)

---

## Responsive Behavior

### Mobile (< 768px)
- Full width cards
- Single column layout
- Bottom navigation dock

### Tablet / Desktop (≥ 768px)
- Centered, with a maximum width of 600px
- Alternatively, use a two-column card grid
- Optional sidebar navigation

---

## Dark/Light Mode

The earlier dual-theme proposal used `semantic.[theme]`:
- `theme = 'dark'` → `colors.semantic.dark`
- `theme = 'light'` → `colors.semantic.light`

---

## Accessibility

- [ ] Accessible labels for all interactive elements
- [ ] At least 4.5:1 contrast for text
- [ ] Visible keyboard focus
- [ ] Screen reader support for AI Insights

---

## Animation & Motion

- [ ] Respect `prefers-reduced-motion`
- [ ] Subtle animations for:
  - Card press (scale 0.98)
  - Progress bar fill
  - Page transitions
- [ ] Duration: `animation.duration.fast` to `base` (150-200ms)

---

## Platform-Specific Notes

### Web
- Use Tailwind classes
- Glass effect with `backdrop-blur`
- Hover states for buttons

### Mobile
- Use React Native StyleSheet
- Glass effect with `BlurView` (iOS) or a translucent background (Android)
- Pressable with haptic feedback

---

## Implementation checklist

- [ ] Greeting with the user's name
- [ ] Primary CTA button with an icon
- [ ] Upcoming training card (solo/group states)
- [ ] Weekly progress bar with animation
- [ ] AI Insights (real data only)
- [ ] Recent sessions list
- [ ] Friends activity
- [ ] Navigation dock with three tabs
- [ ] Dark/light mode support
- [ ] Accessibility labels
- [ ] Compare the implementation against the reference artwork
