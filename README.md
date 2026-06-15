# 🔩 NEXUS Seal & Bearing GmbH — وب‌سایت شرکتی

<div dir="rtl">

[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Ready-F38020?logo=cloudflare)](https://pages.cloudflare.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Ready-000000?logo=vercel)](https://vercel.com/)

---

## 📋 فهرست مطالب

- [معرفی پروژه](#معرفی-پروژه)
- [ویژگی‌های کلیدی](#ویژگیهای-کلیدی)
- [ساختار پروژه](#ساختار-پروژه)
- [پیش‌نیازها](#پیشنیازها)
- [نصب و راه‌اندازی محلی](#نصب-و-راهاندازی-محلی)
- [ساخت (Build) برای محیط تولید](#ساخت-build-برای-محیط-تولید)
- [استقرار روی Vercel](#استقرار-روی-vercel)
- [استقرار روی Cloudflare Pages](#استقرار-روی-cloudflare-pages)
- [پیکربندی محیط](#پیکربندی-محیط)
- [معماری و کامپوننت‌ها](#معماری-و-کامپوننتها)
- [سفارشی‌سازی رنگ‌ها و برند](#سفارشیسازی-رنگها-و-برند)
- [عیب‌یابی رایج](#عیبیابی-رایج)

---

## معرفی پروژه

این پروژه یک وب‌سایت شرکتی کامل و حرفه‌ای برای **NEXUS Seal & Bearing GmbH** است — یک شرکت آلمانی سازنده واشرهای O-Ring صنعتی و بلبرینگ‌های دقیق. این وب‌سایت کاملاً بدون بک‌اند (Serverless Static) است و روی Vercel یا Cloudflare Pages به صورت استاتیک هاست می‌شود.

### فناوری‌های استفاده‌شده

| فناوری | نسخه | کاربرد |
|--------|-------|---------|
| **React** | 18.x | فریم‌ورک رابط کاربری |
| **Vite** | 5.x | باندلر و ابزار توسعه |
| **Tailwind CSS** | 3.x | استایل‌دهی ادیلیتی |
| **Lucide React** | 0.383.x | آیکون‌های وکتوری |
| **Node.js** | ≥ 18.0.0 | محیط اجرا |

---

## ویژگی‌های کلیدی

- 🎡 **انیمیشن بلبرینگ مبتنی بر اسکرول** — یک SVG تعاملی که رینگ داخلی و توپک‌های بلبرینگ با اسکرول صفحه می‌چرخند
- 🪟 **هدر شیشه‌ای (Glassmorphism)** — هدر ثابت با افکت بلور پس‌زمینه
- 📊 **داشبورد استانداردهای بین‌المللی** — ISO 492، ASTM D2000، FDA/NSF 61 با تب‌های تعاملی
- 📦 **کاتالوگ محصولات فنی** — سه بسته نگهداری صنعتی با جدول مشخصات کامل
- 📅 **تایم‌لاین تاریخچه شرکت** — ۴ دهه سابقه مهندسی آلمانی
- 🌍 **طراحی واکنش‌گرا** — کاملاً بهینه برای موبایل، تبلت و دسکتاپ
- ⚡ **بدون بک‌اند** — خروجی کاملاً استاتیک، مناسب CDN/Edge

---

## ساختار پروژه

```
nexus-seal/
├── public/
│   └── favicon.svg               # آیکون وب‌سایت (SVG بلبرینگ)
├── src/
│   ├── components/
│   │   ├── Header.jsx            # هدر ناوبری با Glassmorphism
│   │   ├── Hero.jsx              # بخش قهرمان با انیمیشن بلبرینگ
│   │   ├── Products.jsx          # کاتالوگ محصولات (۳ بسته فنی)
│   │   ├── Standards.jsx         # داشبورد استانداردها و آزمایشگاه
│   │   ├── About.jsx             # درباره شرکت و تایم‌لاین
│   │   └── Footer.jsx            # فوتر با ستون‌های شرکتی
│   ├── App.jsx                   # کامپوننت اصلی + منطق اسکرول
│   ├── index.jsx                 # نقطه ورود React
│   └── index.css                 # استایل‌های سراسری + Tailwind
├── index.html                    # فایل HTML اصلی
├── tailwind.config.js            # پیکربندی Tailwind
├── vite.config.js                # پیکربندی Vite
├── postcss.config.js             # پیکربندی PostCSS
├── package.json                  # وابستگی‌ها و اسکریپت‌ها
└── README.md                     # همین فایل
```

---

## پیش‌نیازها

قبل از شروع، مطمئن شوید موارد زیر نصب شده‌اند:

```bash
# بررسی نسخه Node.js (باید ≥ 18.0.0 باشد)
node --version

# بررسی نسخه npm (باید ≥ 8.x باشد)
npm --version

# یا بررسی نسخه yarn (اختیاری)
yarn --version
```

اگر Node.js نصب نیست، از [nodejs.org](https://nodejs.org/) نسخه LTS را دانلود کنید.

---

## نصب و راه‌اندازی محلی

### مرحله ۱: دریافت کد

```bash
# کلون کردن مخزن (اگر از Git استفاده می‌کنید)
git clone https://github.com/your-org/nexus-seal-bearing.git

# وارد پوشه پروژه شوید
cd nexus-seal-bearing
```

یا اگر فایل‌ها را دستی کپی کرده‌اید، مستقیماً وارد پوشه پروژه شوید.

### مرحله ۲: نصب وابستگی‌ها

```bash
# با npm
npm install

# یا با yarn
yarn install

# یا با pnpm (اگر نصب است)
pnpm install
```

### مرحله ۳: اجرای سرور توسعه

```bash
# با npm
npm run dev

# یا با yarn
yarn dev
```

پس از اجرا، مرورگر را باز کنید و به آدرس زیر بروید:

```
http://localhost:5173
```

سرور توسعه Vite با قابلیت **Hot Module Replacement (HMR)** فعال است — تغییرات بلافاصله در مرورگر نمایش داده می‌شوند.

---

## ساخت (Build) برای محیط تولید

### ساخت خروجی استاتیک

```bash
# با npm
npm run build

# یا با yarn
yarn build
```

پس از اجرا، پوشه `dist/` در ریشه پروژه ایجاد می‌شود که شامل تمام فایل‌های استاتیک آماده استقرار است.

### پیش‌نمایش نسخه تولید (محلی)

```bash
npm run preview
```

این دستور یک سرور محلی روی پورت `4173` راه می‌اندازد که نسخه build شده را سرو می‌کند — قبل از استقرار می‌توانید آن را تست کنید.

### بررسی خروجی

```bash
# اندازه فایل‌های تولیدشده
ls -lh dist/assets/

# ساختار پوشه خروجی
find dist/ -type f
```

---

## استقرار روی Vercel

### روش ۱: استقرار از طریق رابط وب Vercel (توصیه‌شده)

**مرحله اول: آماده‌سازی مخزن Git**

```bash
# مقداردهی اولیه Git (اگر قبلاً نشده)
git init
git add .
git commit -m "feat: initial NEXUS Seal & Bearing website"

# ساخت مخزن در GitHub/GitLab/Bitbucket
# سپس:
git remote add origin https://github.com/your-username/nexus-seal.git
git push -u origin main
```

**مرحله دوم: وارد شدن به Vercel**

۱. به [vercel.com](https://vercel.com/) بروید
۲. با حساب GitHub/GitLab/Bitbucket خود وارد شوید
۳. روی دکمه **"Add New Project"** کلیک کنید

**مرحله سوم: Import مخزن**

۱. مخزن `nexus-seal` را از لیست انتخاب کنید
۲. روی **"Import"** کلیک کنید

**مرحله چهارم: پیکربندی پروژه**

در صفحه پیکربندی، تنظیمات زیر را اعمال کنید:

| تنظیم | مقدار |
|-------|-------|
| **Framework Preset** | `Vite` |
| **Root Directory** | `./` (پیش‌فرض) |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |
| **Node.js Version** | `18.x` |

**مرحله پنجم: استقرار**

روی **"Deploy"** کلیک کنید. Vercel به صورت خودکار:
- کد را دریافت می‌کند
- وابستگی‌ها را نصب می‌کند
- پروژه را Build می‌کند
- روی CDN جهانی مستقر می‌کند

**مرحله ششم: دامنه سفارشی (اختیاری)**

۱. در داشبورد پروژه، به **Settings → Domains** بروید
۲. دامنه سفارشی خود را وارد کنید (مثلاً `nexusseal.de`)
۳. رکوردهای DNS را طبق دستورالعمل Vercel تنظیم کنید

### روش ۲: استقرار از طریق CLI

```bash
# نصب Vercel CLI
npm install -g vercel

# ورود به حساب
vercel login

# استقرار در محیط Preview
vercel

# استقرار در محیط تولید
vercel --prod
```

### به‌روزرسانی‌های خودکار

پس از اتصال مخزن Git، هر بار که کد را به شاخه اصلی (main) Push کنید، Vercel به صورت **خودکار** نسخه جدید را Build و مستقر می‌کند.

---

## استقرار روی Cloudflare Pages

### روش ۱: استقرار از طریق داشبورد Cloudflare (توصیه‌شده)

**مرحله اول: ورود به Cloudflare**

۱. به [dash.cloudflare.com](https://dash.cloudflare.com/) بروید
۲. وارد حساب کاربری خود شوید
۳. در منوی سمت چپ، **"Workers & Pages"** را انتخاب کنید
۴. روی **"Create application"** → **"Pages"** → **"Connect to Git"** کلیک کنید

**مرحله دوم: اتصال مخزن**

۱. حساب GitHub/GitLab خود را به Cloudflare متصل کنید
۲. مخزن `nexus-seal` را از لیست انتخاب کنید
۳. روی **"Begin setup"** کلیک کنید

**مرحله سوم: تنظیمات Build**

در صفحه تنظیمات Build، مقادیر زیر را وارد کنید:

| تنظیم | مقدار |
|-------|-------|
| **Project name** | `nexus-seal-bearing` |
| **Production branch** | `main` |
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (خالی بگذارید) |
| **Node.js version** | `18` |

**مرحله چهارم: متغیرهای محیطی (در صورت نیاز)**

اگر متغیر محیطی دارید، در بخش **"Environment variables"** اضافه کنید.

**مرحله پنجم: Save and Deploy**

روی **"Save and Deploy"** کلیک کنید. Cloudflare Pages:
- کد را از مخزن دریافت می‌کند  
- Build می‌کند  
- روی شبکه جهانی Cloudflare Edge مستقر می‌کند

لینک پروژه شما در قالب زیر خواهد بود:
```
https://nexus-seal-bearing.pages.dev
```

**مرحله ششم: دامنه سفارشی**

۱. در تب **"Custom domains"** روی **"Set up a custom domain"** کلیک کنید
۲. دامنه خود را وارد کنید (مثلاً `nexusseal.de`)
۳. اگر دامنه شما در Cloudflare ثبت شده، رکوردها به صورت خودکار تنظیم می‌شوند
۴. اگر دامنه شما در جای دیگری است، رکوردهای CNAME را دستی وارد کنید

### روش ۲: استقرار از طریق Wrangler CLI

```bash
# نصب Wrangler CLI
npm install -g wrangler

# ورود به حساب Cloudflare
wrangler login

# ساخت پروژه
npm run build

# استقرار روی Cloudflare Pages
wrangler pages deploy dist --project-name nexus-seal-bearing
```

### فایل پیکربندی Cloudflare (اختیاری)

برای مدیریت Redirect و Header‌ها، فایل زیر را در پوشه `public/` بسازید:

**`public/_redirects`** (برای SPA routing):
```
/*  /index.html  200
```

**`public/_headers`** (برای هدرهای امنیتی):
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self'
```

---

## پیکربندی محیط

### متغیرهای محیطی

این پروژه در حال حاضر نیازی به متغیرهای محیطی ندارد (کاملاً استاتیک است). اما اگر در آینده API اضافه کردید:

**فایل `.env.local` (برای توسعه محلی — هرگز Commit نکنید!):**
```env
VITE_CONTACT_EMAIL=technical@nexusseal.de
VITE_ANALYTICS_ID=your-analytics-id
```

**نکته مهم:** در Vite، تمام متغیرهای محیطی که باید در مرورگر قابل دسترس باشند باید با پیشوند `VITE_` شروع شوند.

---

## معماری و کامپوننت‌ها

### `App.jsx` — کامپوننت اصلی

این کامپوننت وظایف زیر را برعهده دارد:
- **ردیابی اسکرول** (`scrollY`) برای انیمیشن بلبرینگ
- **تشخیص بخش فعال** برای هایلایت کردن آیتم‌های منو
- **انتقال صفحه** (`scrollTo`) برای ناوبری صاف

```jsx
// منطق کلیدی App.jsx
useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

### `Hero.jsx` — انیمیشن بلبرینگ

قلب انیمیشن در کامپوننت `BearingSVG` است:

```jsx
// زاویه چرخش بر اساس موقعیت اسکرول
const rotation = (scrollY / maxScroll) * 720; // ۲ دور کامل در ۳۰۰۰ پیکسل اسکرول

// موقعیت هر توپک (Rolling Element)
const angle = (i / ballCount) * 2 * Math.PI + (rotation * Math.PI) / 180;
const x = cx + ballRadius * Math.cos(angle);
const y = cy + ballRadius * Math.sin(angle);
```

- **رینگ خارجی**: ثابت است
- **رینگ داخلی**: با CSS transform می‌چرخد
- **توپک‌ها**: موقعیت‌شان با مثلثات محاسبه می‌شود

### `Standards.jsx` — سیستم تب

سیستم تب در موبایل به صورت استک نمایش داده می‌شود و در دسکتاپ به صورت تب‌های کلیکی.

---

## سفارشی‌سازی رنگ‌ها و برند

### تغییر رنگ‌های اصلی

فایل `tailwind.config.js` را باز کنید و مقادیر رنگ را تغییر دهید:

```js
// tailwind.config.js
colors: {
  carbon: {
    DEFAULT: "#121824",  // رنگ پس‌زمینه اصلی
  },
  amber: {
    DEFAULT: "#F59E0B",  // رنگ تأکید (Accent)
  },
}
```

### تغییر نام برند

فایل `Header.jsx` و `Footer.jsx` را ویرایش کنید:

```jsx
// Header.jsx — خط ۱۸ تقریباً
<div className="text-base font-black ...">NEXUS</div>
<div className="text-[9px] ...">SEAL &amp; BEARING</div>
```

### تغییر محتوای محصولات

آرایه `PRODUCTS` در فایل `Products.jsx` را ویرایش کنید — هر آبجکت شامل نام، مشخصات فنی، و گواهینامه‌ها است.

---

## عیب‌یابی رایج

### مشکل: صفحه بعد از Refresh خالی می‌شود (روی Cloudflare/Vercel)

**علت:** برنامه SPA است و مسیریابی باید به `index.html` هدایت شود.

**راه‌حل:** فایل `public/_redirects` را با محتوای زیر بسازید:
```
/*    /index.html    200
```

### مشکل: فونت Google Fonts بارگذاری نمی‌شود

**علت:** ممکن است شبکه یا CSP مانع شود.

**راه‌حل:** فونت را دانلود و به صورت Local اضافه کنید:
```bash
# دانلود Inter font
npm install @fontsource/inter

# در index.jsx اضافه کنید:
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
```

### مشکل: انیمیشن بلبرینگ روی موبایل کند است

**راه‌حل:** در `Hero.jsx`، تعداد توپک‌ها را کاهش دهید:
```jsx
const ballCount = 6; // به جای 8
```

یا با استفاده از `will-change` عملکرد GPU را بهبود دهید:
```jsx
style={{ willChange: "transform", transform: `rotate(${rotation}deg)` }}
```

### مشکل: خطای `Cannot find module` هنگام نصب

```bash
# پاک کردن cache npm و node_modules
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### مشکل: Build ناموفق در Cloudflare/Vercel

بررسی کنید نسخه Node.js صحیح تنظیم شده:
- Vercel: در `Settings → General → Node.js Version` مقدار `18.x` را انتخاب کنید
- Cloudflare: در Build settings مقدار `NODE_VERSION = 18` را اضافه کنید

---

## لایسنس و مالکیت

© ۲۰۲۴ NEXUS Seal & Bearing GmbH. تمامی حقوق محفوظ است.

این کد برای استفاده داخلی شرکت NEXUS طراحی شده است. هرگونه بازتوزیع بدون اجازه کتبی ممنوع است.

---

<div align="center">

**ساخته‌شده با ❤️ و دقت مهندسی آلمانی**

[🌐 وب‌سایت](https://nexusseal.de) · [📧 تماس](mailto:technical@nexusseal.de) · [📦 کاتالوگ فنی](https://nexusseal.de/catalog)

</div>

</div>
