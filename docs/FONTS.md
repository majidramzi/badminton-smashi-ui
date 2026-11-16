# Montserrat typography
Montserrat is the agreed typeface. Tokens and CSS have been corrected from Inter to Montserrat.
Font binaries (woff2/ttf/otf) are intentionally NOT included in this package. Obtain the licensed Montserrat font files from the official Google Fonts repository or Google Fonts CSS service and keep attribution/license as required.
Web: currently uses CSS @import for Google Fonts in onboarding; for offline production hosting, download the official woff2 files and define @font-face for weights 400,500,600,700,800, with font-display:swap. Dashboard should use the same font family.
Mobile: install the appropriate official Montserrat TTF/OTF files into the native project and register them using its platform-specific font loader. Verify file names and weights in the mobile stack before shipping.
Official source: https://fonts.google.com/specimen/Montserrat
