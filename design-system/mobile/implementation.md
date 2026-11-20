# Mobile integration — badminton-mobile

Use the [repository handoff index](../../README.md) to select a screen and pin a specific UI revision. HTML previews are visual examples, not React Native components.

- Keep Expo Router routes, authentication, permissions and training logic application-owned. Adapt approved values through the existing theme and spacing interfaces; map spacing by actual value and purpose rather than renaming existing scale keys globally.
- The current visual target is one fixed Smashi appearance, independent of device theme. Changes to persisted appearance preferences and the current provider are a separate migration.
- Register selected [local Montserrat faces](../../docs/FONTS.md) in Expo; use explicit face keys for static weights. Preserve text scaling, safe areas, keyboard avoidance and scrolling on shorter screens.
- Render the shared Lucide glyph geometry with `react-native-svg` and adapt only approved color roles. Preserve specialized court artwork. Audit local data-driven Ionicons names before migrating a surface; do not rename stored notification kinds or calendar event types. Touch controls use pressed feedback rather than web hover.
- Use the [primary mark](../../docs/BRAND_LOGO.md) without cropping or distortion. For Splash, follow the [static backdrop revision](../screens/splash/specification.md); native launch asset integration still needs review. Check the startup transition in real iOS and Android builds.
- Review with synthetic fixtures and record the UI revision, implementation commit, device dimensions, text scale and remaining gaps.
