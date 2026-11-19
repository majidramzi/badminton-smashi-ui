# Calendar Screen Specification

**مرجع تصویری:** `../../assets/reference/smashi_badminton_calendar_dashboard.png`

## Layout Overview

صفحه Calendar نمای هفتگی یا ماهانه تمرینات را نمایش می‌دهد:
- Header با انتخاب ماه/هفته
- Calendar grid
- لیست تمرینات روز انتخاب شده
- دکمه Quick Add Training
- Navigation dock (Home / Calendar / Profile)

## Components

### 1. Header

```
┌─────────────────────────────────┐
│  ← November 2026 →              │
└─────────────────────────────────┘
```

**Typography:**
- Month/Year: `fontSize.xl` (20px), `fontWeight.semibold`
- Navigation arrows: 20px icons

**Colors:**
- Text: `semantic.[theme].text`
- Arrows: `semantic.[theme].textSecondary`

**Spacing:**
- Padding: `spacing[4]` (16px)

**Interaction:**
- Arrows برای تغییر ماه/هفته
- Tap on title برای date picker

---

### 2. Calendar Grid (Monthly View)

```
┌─────────────────────────────────┐
│ Mon Tue Wed Thu Fri Sat Sun     │
│  1   2   3   4   5   6   7      │
│  8   9  10  11  12  13  14      │
│ 15  16  17 [18] 19  20  21      │
│ 22  23  24  25  26  27  28      │
│ 29  30                          │
└─────────────────────────────────┘
```

**Cell Design:**
- Width/Height: یکسان (مربع)
- Border radius: `borderRadius.sm` (8px)

**States:**

**Today:**
- Border: `2px solid brand.teal`
- Font weight: `fontWeight.semibold`

**Selected:**
- Background: `brand.teal`
- Text color: white

**Has Training:**
- Dot indicator زیر عدد
- Dot color: `brand.teal`

**Disabled (other month):**
- Text color: `semantic.[theme].textMuted`

**Typography:**
- Day numbers: `fontSize.sm` (14px)
- Day labels: `fontSize.xs` (12px), `textSecondary`

**Spacing:**
- Gap between cells: `spacing[1]` (4px)

---

### 3. Weekly View (Alternative)

```
┌─────────────────────────────────┐
│ Mon 15  Tue 16  Wed 17  Thu 18  │
│  ○       ●       ●       ○      │
└─────────────────────────────────┘
```

**Layout:**
- Horizontal scroll
- نمایش 7 روز
- Dot indicators برای training days

---

### 4. Selected Day Details

```
┌─────────────────────────────────┐
│ Wednesday, Nov 18               │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 16:00-18:00                 │ │
│ │ Advanced Footwork           │ │
│ │ 👤 Solo training            │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 19:00-20:30                 │ │
│ │ Group Session               │ │
│ │ 👥 3 players                │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

**Card Layout:**
- Background: `semantic.[theme].surface`
- Border: `1px solid semantic.[theme].border`
- Border radius: `borderRadius.lg` (16px)
- Padding: `spacing[4]` (16px)
- Gap: `layout.cardGap` (14px)

**Typography:**
- Day header: `fontSize.lg` (18px), `fontWeight.semibold`
- Time: `fontSize.sm` (14px), `fontWeight.medium`, `textSecondary`
- Title: `fontSize.base` (16px), `fontWeight.semibold`
- Meta: `fontSize.sm` (14px), `textSecondary`

**Colors:**
- Left border accent: `brand.teal` (4px)
- یا colored dot قبل از time

---

### 5. Training Status Indicators

```
⚪ Not started
🔵 In progress (brand.teal)
✅ Completed (semantic.success)
❌ Cancelled (semantic.danger)
📝 Draft (semantic.warning)
```

**Implementation:**
- برای web: colored dot یا icon
- برای mobile: badge component

---

### 6. Empty State

```
┌─────────────────────────────────┐
│         📅                      │
│                                 │
│   No trainings scheduled        │
│   for this day                  │
│                                 │
│   [+ Add Training]              │
└─────────────────────────────────┘
```

**Typography:**
- Icon: 48px
- Message: `fontSize.base` (16px), `textSecondary`

**Colors:**
- Icon: `textMuted`

---

### 7. Quick Add Button (FAB)

```
  ┌───┐
  │ + │  ← Floating Action Button
  └───┘
```

**Position:**
- Fixed در bottom-right
- Offset: `spacing[4]` (16px) از edges

**Design:**
- Size: 56x56px
- Background: `brand.teal`
- Icon: white plus (24px)
- Border radius: `borderRadius.full` (9999px)
- Shadow: `shadow.lg`

**Animation:**
- Scale on press (0.9)
- Subtle bounce on appear

---

### 8. Month/Week Toggle

```
┌─────────────────────────────────┐
│  [Month]  Week                  │
└─────────────────────────────────┘
```

**Design:**
- Segmented control
- Background: `chip`
- Selected: `brand.teal`
- Border radius: `borderRadius.md` (12px)

---

## Filters (Optional)

```
┌─────────────────────────────────┐
│  All  Solo  Group  Completed    │
└─────────────────────────────────┘
```

**Chips:**
- Background: `chip`
- Selected: `brand.teal` با white text
- Border radius: `borderRadius.full`
- Padding: `8px 16px`

---

## Dark/Light Mode

تمام colors از `semantic.[theme]`:
- Calendar cells: `surface` / `chip` for selected
- Borders: `border`
- Text: `text` / `textSecondary`

---

## Accessibility

- [ ] Calendar cells navigable با keyboard
- [ ] Screen reader announces selected date
- [ ] Focus visible states
- [ ] ARIA labels برای training cards

---

## Animations

- [ ] Calendar slide animation برای month change
- [ ] Smooth scroll به selected day
- [ ] Fade in برای training cards
- [ ] Respect `prefers-reduced-motion`

---

## Platform-Specific

### Web
- Hover states برای calendar cells
- Click outside برای close date picker
- Keyboard shortcuts (arrows برای navigation)

### Mobile
- Swipe برای month change
- Pull-to-refresh
- Long press برای quick actions
- Haptic feedback on date selection

---

## Data Structure

```typescript
interface CalendarTraining {
  id: string;
  date: string;        // ISO date
  startTime: string;   // HH:mm
  endTime: string;
  title: string;
  type: 'solo' | 'group';
  status: 'draft' | 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  participants?: number;
}
```

---

## چک‌لیست Implementation

- [ ] Month/Week view toggle
- [ ] Calendar grid با today/selected states
- [ ] Training indicator dots
- [ ] Selected day details list
- [ ] Training status badges
- [ ] Empty state
- [ ] Quick add FAB
- [ ] Month navigation arrows
- [ ] Filter chips (optional)
- [ ] Dark/light mode
- [ ] Accessibility
- [ ] تطابق با reference image
