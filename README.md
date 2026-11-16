# Smashi Dashboard UI — Handoff v2

Prepared from Majid's feedback. This package is a **web implementation starter**, plus independently exported assets for both web and mobile. It is not a production-ready integration with Smashi's backend.

## Approved palette (do not substitute)

| Token | Hex |
| --- | --- |
| Navy | `#0C2747` |
| Deep Teal | `#066B6E` |
| Teal | `#14B8A6` |
| Mint | `#8FE9D1` |
| Off White | `#F7FAF9` |
| Warm Sand | `#F3EAD7` |

## Contents

- `src/components/SmashiDashboard.tsx`: React + TypeScript reusable dashboard, 3 tabs only.
- `src/styles/smashi.css`: restrained glass surfaces and approved brand colors.
- `src/styles/tokens.json`: machine-readable design tokens.
- `assets/icons/svg/`: **13 icons x 2 states** (`normal`, `hover`) as editable vector files.
- `assets/icons/png/`: the same **26 icons** as transparent-background PNG exports at **128 and 512 px**.
- `assets/icons/glyphs/`: 24×24 line glyphs without glass tile, for developers preferring native glass effects.
- `assets/icons/icon-manifest.json`: filenames and palette.
- `assets/reference/`: historical visual reference files. **Not approved final source assets.**
- `docs/INTEGRATION.md` and `docs/CURSOR_PROMPT.md`.

## Important distinctions

1. **Logo:** The approved Smashi S + wordmark must be supplied from the actual approved master artwork. `logo-source-reference.png` is only a reference screenshot; **do not use it as the final logo**. This kit intentionally does not invent/retrace the logo.
2. **Glass intensity:** reduced compared to earlier neon concept. Subtle translucent panels, no lime, no new colors.
3. **Icons:** Each icon has separate normal/hover SVG and PNG files. The glass tile is baked into the exported images; do not apply a second tile behind them. Glyph-only variants are also included.
4. **Hover on mobile:** native mobile has no pointer hover; map `hover` assets to selected/pressed states where appropriate.
5. **Dynamic content:** upcoming training, group, AI insight, progress and friend activity must come from real application state. Never fabricate insights.
6. **Scope:** Home, Calendar, Profile navigation only. Dashboard sections: Welcome, Design a Training, Upcoming Training + Group (combined), Weekly Progress, AI Insights (when available), Recent Sessions, Friends Activity.

## Quick start

1. Copy `assets/icons/svg/*.svg` to your Next.js `public/smashi/icons/` folder.
2. Copy `src/components/SmashiDashboard.tsx` and `src/styles/smashi.css` to the project.
3. Pass `logoSrc` pointing to the **approved** logo file already in Smashi.
4. Wire props and callbacks to existing app state/navigation.
5. See `docs/INTEGRATION.md` for mobile and accessibility details.

This handoff does **not** assert pixel-perfect reproduction of the earlier generated image; review the actual rendering on devices with Majid before release.
