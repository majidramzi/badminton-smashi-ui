# Splash motion specification (not a rendered animation)
- Background: Navy #0C2747 to Deep Teal #066B6E, static diagonal line pattern at 10–15% opacity.
- 0–180 ms: screen appears; no flashing or scaling background.
- 180–650 ms: approved Smashi symbol fades from 0 to 100% opacity and translates 10px upward (ease-out).
- 650–900 ms: wordmark appears if the app has the original approved wordmark asset; otherwise keep symbol only.
- 900–1250 ms: hold for brand recognition, then navigate as soon as app initialization completes.
- Respect prefers-reduced-motion / Android animator duration scale: disable motion, show still.
- Never artificially delay app loading; do not use continuous infinite splash animation.
- Use provided splash background SVG and static PNG. Motion is an implementation spec, not a GIF or Lottie file.
