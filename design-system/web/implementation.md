# Web integration — badminton-web

Use the [repository handoff index](../../README.md) to select a screen and pin a specific UI revision. Previews are visual examples, not drop-in application pages.

- Keep the existing Next.js routes, server/client boundaries, authentication and authorization. A screen redesign does not change route destinations, the player access gate or Admin eligibility.
- Integrate player tokens into `app/globals.css` using Tailwind 4 `@theme inline` mappings and scoped, namespaced variables. Do not replace the global stylesheet or modify `--admin-*` during a player-surface migration.
- The current visual target is one fixed Smashi appearance. Do not design Light/Dark/System variants from the historical token examples. Handle changes to persisted preferences, the provider and pre-hydration initialization as a separate migration; prevent theme flashes.
- Load the [local Montserrat faces](../../docs/FONTS.md) through `next/font/local` or local CSS, and use the [primary mark](../../docs/BRAND_LOGO.md) with its original proportions.
- Render the shared Lucide glyph for each approved general UI role. Keep provider marks and specialized court artwork separate. Preserve keyboard focus, reduced-motion behavior and readable text at narrow widths and enlarged text settings.
- Use synthetic, backend-free fixtures for visual review. Do not mount live auth or route loaders just to capture screenshots. Record the UI revision, implementation commit, viewport and remaining gaps.
