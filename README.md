# Essam Hamood Abdo — Portfolio

موقع شخصي ثابت (HTML / CSS / JavaScript) بدون أي أدوات بناء، جاهز للرفع على GitHub Pages.

## المميزات
- واجهة عربية وإنجليزية مع تبديل فوري، ووضع داكن وفاتح.
- معرض أعمال بفلاتر (تصاميم، ملفات تجميعية، مواقع) وعارض صور بحجم كامل يدعم الأسهم ومفتاح Esc.
- العمر وسنوات الخبرة تُحسب تلقائيًا من تاريخ الميلاد وسنة البداية.

## الملفات
- `index.html` — الصفحة الرئيسية.
- `styles.css` — التصميم.
- `script.js` — الترجمة، المعرض، والتفاعل. لإضافة عمل جديد عدّل المصفوفات `designIds` أو `collectionIds` أو `websites` في أعلى الملف.
- `cv.html` — نسخة سيرة ذاتية قابلة للطباعة.
- `assets/` — الصورة الشخصية، ملف السيرة PDF، ولقطات المواقع.

## التشغيل محليًا
```bash
git clone https://github.com/essam12e/CVESSAM.git
cd CVESSAM
python -m http.server 8080
```
ثم افتح http://localhost:8080

## النشر على GitHub Pages
1. افتح Settings > Pages.
2. اختر الفرع `main` والمجلد `/(root)`.
3. احفظ الإعدادات.
