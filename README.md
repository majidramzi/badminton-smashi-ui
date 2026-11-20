# Smashi UI

Shared presentation-design reference for **badminton-web** and **badminton-mobile**. This repository contains visual specifications, assets and interactive previews. It is not a standalone application, a package release, or an authority on authentication, routing, authorization or training logic.

## Start here

| Surface | Specification | Preview | Status |
| --- | --- | --- | --- |
| Mobile Splash | [Splash spec](design-system/screens/splash/specification.md) | [Static Splash](previews/splash-halo.html) | Backdrop approved as `splash-backdrop-r1`; final wordmark, layout measurements and native launch integration pending. No animation or artificial delay. |
| Login | [Login spec](design-system/screens/login/specification.md) | [Login](previews/login.html) | Reviewed visual baseline; production provider artwork, full state coverage and accessibility QA remain pending. |
| Create account | [Signup spec](design-system/screens/signup/specification.md) | [Create account](previews/signup.html) | Reviewed interactive design; sample terms and password checks are not production contracts. |
| Home and Calendar | [Home](design-system/screens/home/specification.md) · [Calendar](design-system/screens/calendar/specification.md) | — | Older design drafts; not implementation-ready. |

## Shared visual foundations

- **Brand:** Use the [original Smashi mark](assets/brand/owner-reference/Smashi-logo.png). The full lockup stacks the mark, Smashi wordmark and `PLAY • CONNECT • GROW`. The second reference image is composition inspiration only; do not render it or reproduce its white background. See the [brand contract](docs/BRAND_LOGO.md).
- **Theme:** One fixed look on web and mobile, independent of the system appearance. Use the six brand colors: Navy `#0C2747`, Deep Teal `#066B6E`, Teal `#14B8A6`, Mint `#8FE9D1`, Off White `#F7FAF9`, and Warm Sand `#F3EAD7`. Older Light/Dark token examples do not define the current theme.
- **Backdrops:** [Static backgrounds and adjustable halos](design-system/patterns/static-background.md) define how to place, size and soften decorative layers per screen. Palette stops may blend; do not sample extra colors from mockups.
- **Type and icons:** Use checked-in [Montserrat faces and license](docs/FONTS.md). [Lucide](previews/login-icons/README.md) is the default for general UI icons; share the same SVG geometry across platforms. Custom Smashi art and provider marks are separate. Logo source files are raster, not editable vectors.
- **Controls:** The auth previews share one stylesheet. The baseline uses 56-unit minimum heights for inputs and primary buttons, 52 for secondary buttons, 16-unit text in inputs and primary buttons, and 14-unit text on secondary buttons. Keep responsive layouts and text scaling; do not clamp control heights. The focused input brightens only its existing border. Links have no underline and use a subtle hover highlight. Enabled auth buttons use a single left-to-right light sweep on fine-pointer hover, not on touch or with reduced motion.

## Auth behavior shown in the previews

- **Login:** Email and password, password visibility, password recovery, primary Log In action, `OR` divider, provider buttons and signup link.
- **Signup:** First name, optional ID, email, password and confirmation. Strength and checklist appear below confirmation only after password entry begins. The `Too weak` red is a proposed validation-only palette exception. The terms link opens a modal with a [separate sample document](previews/signup-terms.html). Reaching the end unlocks explicit consent; it does not automatically check the box. Create account requires valid fields and consent.
- **Providers:** Google is currently supported. Apple is visible in the design only and must remain hidden in production until the host app supports it. Preview marks and button treatments require provider compliance review before shipping. Neither preview submits credentials or creates an account.

## Run and consume

From the repository root, run `python3 -m http.server 4173 --bind 0.0.0.0`, then open `/previews/login.html`, `/previews/signup.html` or `/previews/splash-halo.html` on the server. Serve over HTTP so the signup preview can load the sample terms document.

For a consumer handoff, pin the UI commit and any named design revision, read the screen spec and the [web](design-system/web/implementation.md) or [mobile](design-system/mobile/implementation.md) guide, and report the consumed revision, implementation commit, QA evidence and pending items. Reuse decisions from reviewed screens; flag gaps rather than inventing independent visual rules. Older React examples, exports and handoff notes under `src/`, `assets/` and `docs/` are reference material where they conflict with newer screen decisions. No changes to either consumer repository are required to run these previews.
