# Smashi logo contract

Revision: `brand-logo-r2` (design record, not a package release). Source: product owner’s supplied images and follow-up approvals, 2026-11-20. Applies to web and mobile wherever the design calls for Smashi branding; does not add new placements or change navigation.

| Role | Source | Usage | Intrinsic dimensions |
| --- | --- | --- | --- |
| Primary symbol — owner-approved | [Image 1](../assets/brand/owner-reference/Smashi-logo.png) | Default wherever a Smashi logo is needed. Use the original artwork, including both detached elements. | 795 × 822, RGBA PNG |
| Full lockup — inspiration only | [Image 2](../assets/brand/owner-reference/logo-source-reference.png) | When a design calls for the full brand and there is room, take inspiration from this stacked composition: symbol, Smashi wordmark, then slogan. Do not render the reference image itself. Otherwise use the primary symbol alone. | 1536 × 1024 (3:2), opaque RGB PNG |

**Slogan:** `PLAY • CONNECT • GROW`. Preserve the wording, order and capitalization. It belongs with the full lockup; do not add it to symbol-only placements.

## Approved brand foundations

- Every reference to the ribbon S with two detached ovals means **Image 1**, including in full lockups, brand frames and app icons. Never substitute a cropped symbol from a reference board or draw a new S.
- Brand icon and frame designs center on the original mark. Choose any needed background colors from the approved palette. No final app icon variant, background treatment or layout is approved here.
- The full lockup uses Image 1 above the Smashi wordmark and slogan. The slogan treatment is uppercase with open tracking and teal separators; exact typography and spacing remain pending. The white reference background is not part of the design.
- **Montserrat** is the UI typeface on web and mobile. Use the checked-in [font files](FONTS.md). Exact UI weights and sizing remain pending; do not infer how to redraw the wordmark from the UI typeface.

### Approved brand palette

| Color | Value |
| --- | --- |
| Navy | `#0C2747` |
| Deep Teal | `#066B6E` |
| Teal | `#14B8A6` |
| Mint | `#8FE9D1` |
| Off White | `#F7FAF9` |
| Warm Sand | `#F3EAD7` |

These match the `brand` primitives in [colors.json](../design-system/tokens/colors.json). This approval does not assign semantic Light/Dark roles or approve control and screen color pairings. Those will be specified separately.

## Shared integration rules

- Preserve proportions (web: auto dimension or `object-fit: contain`; native: `resizeMode="contain"`). Do not crop, stretch, trace, recolor, or replace the symbol with a glyph. These sources are raster, not editable vector masters.
- Ignore the white background in Image 2 entirely. Do not ship the reference image as a UI asset or recreate its white backdrop. Any future full lockup must sit on the surrounding UI surface in the fixed Smashi theme, using Image 1 for the symbol. Its final artwork, clear space, minimum size and specific placements remain pending.
- For new or revised shared surfaces, this decision supersedes earlier default logo recommendations. Existing exports remain for compatibility; they are not automatically equivalent to the supplied sources. App icon and splash migration are not part of this revision.

## Original-file checksums (SHA-256)

- `Smashi-logo.png`: `b9b9278f31d697d3dd7ee0e75433b1adc90676665fec1a4f52cd93c79e1e5c01`
- `logo-source-reference.png`: `722177ec977937908a7fb4a8daff2d335f729a71eaa31887d26f44f78ce46eea`
