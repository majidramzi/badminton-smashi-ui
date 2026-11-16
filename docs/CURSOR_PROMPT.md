# Prompt for Cursor / Claude

You are working inside the existing Smashi app. Read the existing frontend architecture before modifying files. Web stack: Next.js, React, TypeScript, Tailwind CSS, custom CSS/components. Mobile framework is custom/unspecified; do not assume React Native.

Task: integrate the `Smashi_UI_v2` dashboard presentation into the current codebase while preserving the existing app logic, API contracts, routes, and user flows.

Requirements:
1. Use exactly the approved brand palette: Navy #0C2747, Deep Teal #066B6E, Teal #14B8A6, Mint #8FE9D1, Off White #F7FAF9, Warm Sand #F3EAD7. Do not introduce lime or bright neon accents.
2. Use restrained premium glassmorphism, not highly luminous neon: subtle translucency, modest blur, restrained borders.
3. Use the *actual approved* Smashi logo asset already in the project, S + Smashi wordmark. The reference image is not a master asset.
4. Icons are provided individually under assets/icons, with separate normal and hover SVG/PNG exports. Prefer the supplied icon files over unrelated library icons. Map hover to selected/pressed on touch devices.
5. Keep only Home, Calendar, Profile in the bottom floating dock. No new tabs or dashboard features.
6. Dashboard sections, in order: dynamic time-of-day greeting; Design a Training; combined Upcoming Training + Group; horizontal Weekly Progress; AI Insights (two lines, only when supported by real insight data); Recent Sessions; Friends Activity.
7. Greeting subtitle exact text: "I am here to help you build today's training."
8. No racket or shuttle icon inside Design a Training. No mascot characters.
9. Design a Training can have a very subtle motion effect; respect reduced-motion preference.
10. Bind all cards to existing data. Do not replace real data with placeholder training times, fake people, or invented AI recommendations.
11. Ensure responsive mobile layout, safe areas, keyboard accessibility, and readable text contrast.
12. Inspect existing dependencies and code conventions before integrating. Do not rewrite navigation, state management, or business logic.

Deliverables: working integrated dashboard, component and token mapping, and a short note listing files changed and any unresolved integration points. If existing app structure differs from sample, adapt it rather than copying blindly.
