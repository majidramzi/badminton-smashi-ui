# Design Tokens

این فایل‌ها **مرجع اصلی** برای تمام مقادیر طراحی در Smashi هستند.

## ساختار

- `colors.json` - پالت رنگی برند و semantic colors برای light/dark mode
- `typography.json` - فونت‌ها، اندازه‌ها، وزن‌ها
- `spacing.json` - فاصله‌گذاری، padding، margin، border radius
- `effects.json` - سایه‌ها، glass effect، انیمیشن‌ها

## استفاده در پروژه‌ها

### Mobile (React Native / Expo)
راهنمای کامل: `../mobile/implementation.md`

### Web (Next.js / React)
راهنمای کامل: `../web/implementation.md`

## قوانین مهم

1. ⚠️ **هیچ‌وقت مقادیر را hardcode نکنید** - همیشه از tokens استفاده کنید
2. ⚠️ **رنگ‌های brand را تغییر ندهید** - این مقادیر تایید شده هستند
3. ⚠️ **برای افزودن token جدید** - ابتدا در این فایل‌ها اضافه کنید، سپس در هر دو پلتفرم پیاده‌سازی کنید

## مرجع طراحی

تصاویر مرجع در: `../../assets/reference/`

- `Smashi_Dashboard_Approved_Official_Logo.png` - صفحه Home
- `smashi_badminton_calendar_dashboard.png` - صفحه Calendar
- `logo.png` - لوگو اصلی Smashi
