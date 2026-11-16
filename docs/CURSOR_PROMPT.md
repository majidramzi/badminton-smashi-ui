# Cursor / Claude implementation prompt — Smashi UI v4
You are integrating the provided Smashi design handoff into an EXISTING Next.js + React + TypeScript + Tailwind application. Do not scaffold a replacement app.

1. Read docs/V4_DELIVERY_STATUS.md and the other docs before changing files.
2. Inspect existing routes, auth, data types, design tokens and icon system. Propose a small file-by-file integration plan.
3. Preserve exact approved brand palette. Use Montserrat only after fetching licensed official fonts. No font files are bundled.
4. Use approved source logo assets; do not replace the S with a newly invented symbol. SVG logo wrappers embed raster and are not vector masters.
5. Integrate login and wizard starter components with existing callbacks/data; never hardcode fake user training insights.
6. Dashboard: time-aware greeting, exact subtitle 'I’m here to help you build today’s training.', one animated Design a Training CTA (no shuttle/racket mascot), one combined Upcoming Training + Group card, horizontal weekly progress, prominent two-line AI Insights, separate Recent Sessions and Friends Activity cards, and exactly three tabs Home / Calendar / Profile.
7. Keep glass subtle and premium, with accessible contrast and reduced-motion support. Respect iOS safe areas, Android adaptive icon safe zone, responsive widths.
8. Icon assets have normal/hover pairs; use active state for touch devices (not hover alone).
9. Splash animation timing in docs/SPLASH_ANIMATION.md. Avoid forcing splash delays on slow devices.
10. Run typecheck/lint/build, test keyboard navigation and mobile viewport, and provide screenshots for comparison.
11. Never claim this is a full production-ready integration until real app routes, API/auth and visual QA pass.
