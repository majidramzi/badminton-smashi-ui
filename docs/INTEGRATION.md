# Integration instructions for Majid

## Web (Next.js + React + TypeScript + Tailwind + custom CSS)

- Copy `src/components/SmashiDashboard.tsx` and `src/styles/smashi.css` to your codebase. Keep existing Tailwind config; no need to replace it.
- Copy all `assets/icons/svg/*.svg` to `public/smashi/icons/`. The component uses these paths by default.
- Use the **approved original** Smashi logo file from your brand assets. Pass its public URL as `logoSrc`. Do not crop the reference screenshot and do not replace the S mark with a text letter.
- Render dashboard as a client component. Pass `localHour` from the user's locale/timezone **after hydration** or via existing app state to avoid server/client greeting mismatch.
- Wire callbacks to your existing router, notifications, training creation, session details, friend activity, and insight detail flows.
- The AI Insights card is intentionally omitted if `insight` is null. Display only grounded insights.
- Avoid double-glass icon tiles: standalone icon files already contain a subtle tile. For CSS/native glass containers use `assets/icons/glyphs` instead.
- Use the provided 6 colors exclusively as brand palette. Transparency, white/black shadows and derived alpha values are okay, but no extra brand colors.
- `:root` CSS variables are namespaced. If your project already has global theme variables, move them to your theme tokens without altering values.

## Mobile

The current mobile framework is unspecified. This package does **not** assume React Native or a shared React runtime.

- Use exported SVGs if supported; otherwise PNGs at 512 px for high-density displays.
- Normal and hover/active files are separate. Mobile maps hover to `pressed`/`selected`, not mouse hover.
- Match the same tokens and 3-tab information architecture, even if native UI components are different.
- Use safe area insets and test at narrow screen widths.

## Accessibility and performance

- All interactive controls need meaningful labels; the web example includes text labels and focus-visible outlines.
- Ensure contrast remains readable on glass backgrounds.
- Honor reduced-motion preferences. Avoid expensive large-area blur and pulsing glows.
- Do not hardcode example training, group, AI, or friend data in production.
- Keep the original Smashi business logic, routing and data contracts; replace only the presentation layer unless explicitly approved.

## Icons / file naming

For each name, there are:
- `assets/icons/svg/{name}_normal.svg`
- `assets/icons/svg/{name}_hover.svg`
- `assets/icons/png/{name}_normal_128.png` and `_512.png`
- `assets/icons/png/{name}_hover_128.png` and `_512.png`

PNG is RGBA with transparent outer corners. SVG is the master scalable asset. `.ico` is intended for Windows favicons and is not appropriate for general in-app icons.
