# Login

Structure approved; dimensions, colors and responsive behavior proposed in [preview](../../../previews/login.html). Preserve existing authentication and provider availability.

## Proposed shared control defaults

Use logical units (CSS px / native layout units); typography scales with user settings. Heights are minimums, not clamps. Reuse these roles across screens instead of redefining per page.

| Role | Min height | Type (Montserrat size/line height, weight) | Shape |
|---|---:|---|---|
| Text input | 56 | 16/24, 500 | 14 radius; 16 horizontal padding |
| Primary button | 56 | 16/24, 700 | pill; 16 horizontal padding |
| Secondary button | 52 | 14/20, 600 | pill; 16 horizontal padding |
| Supporting text / link | — | 14/20, 500 / 600 | interactive targets at least 44 × 44 |

Icons: 20 visual size; standalone controls at least 44 × 44. Slogan 12/18, 500; preview wordmark 40–56, 800 italic (placeholder artwork).

## Proposed color and layout

Navy background, static Deep Teal halo and translucent Deep Teal/Teal ribbons. Off White text and outlines (lower opacity for secondary text and idle outlines); Mint links and keyboard focus for standalone controls. Text-field focus only brightens the existing 1-unit Off White border (50% → 76% opacity); no inner or outer field outline and no geometry change. Keep the password visibility button’s own keyboard focus indicator. Primary button Teal → Mint with Navy text. Official provider artwork, if approved and available, is separate from palette; preview does not ship provider artwork.

Centered form, maximum 440 CSS px in web preview, mobile gutters 20, scroll when vertical space is limited. Provider buttons wrap into one column on narrow screens. Preserve safe areas, keyboard scrolling and text enlargement; verify these in the native integration. Exact error/loading/disabled styling and accessibility QA remain pending.

Preview interaction: the enabled Log In button gets one subtle left-to-right Off White light sweep on mouse hover (850 ms, ease-out). It does not loop or affect button size or label. No sweep on touch or with reduced motion. This is a control interaction, not background or Splash motion.

Preview link style: Mint, no underline; on fine-pointer hover, shift to Off White with a faint Mint glow (180 ms, no transition with reduced motion). Preserve the keyboard focus indicator and touch target.

## Icon decision

Use Lucide by default for general UI icons across web and mobile; share the same SVG geometry per semantic role. Login uses mail, lock, eye, eye-off and arrow-right. Smashi artwork and provider marks are separate.

Render a 20-unit provider mark beside each label in the design preview. Apple is preview-only: hide the entire Apple button in web and mobile until the existing host application supports Apple sign-in. Preserve Google sign-in and do not add authentication behavior in the UI handoff. The local preview marks are not release assets; verify provider-approved artwork and button requirements before shipping.

Apple and Google preview buttons use the same one-pass hover sweep as Log In, with a softer highlight for their outlined surfaces and the same touch and reduced-motion exclusions.
