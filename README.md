# Essam Hamood Abdo — Portfolio

موقع شخصي ثابت (HTML / CSS / JavaScript) بدون أي أدوات بناء، جاهز للرفع على GitHub Pages.

## المميزات
- واجهة عربية وإنجليزية مع تبديل فوري، ووضع داكن وفاتح.
- معرض أعمال بفلاتر (موشن جرافيك، تصاميم، فيديو، مواقع) وعارض بحجم كامل يشغّل الفيديوهات من Google Drive ويدعم الأسهم ومفتاح Esc.
- حركات GSAP مع ScrollTrigger وتمرير ناعم بـ Lenis (المكتبات محفوظة داخل `assets/vendor`).
- قسم خاص بالاسم الحركي «بابلو» مع الشعار المعتمد.
- العمر وسنوات الخبرة تُحسب تلقائيًا من تاريخ الميلاد وسنة البداية.

## الملفات
- `index.html` — الصفحة الرئيسية.
- `styles.css` — التصميم.
- `script.js` — الترجمة، المعرض، والتفاعل. لإضافة عمل جديد أضف معرّف ملف Google Drive إلى `motionWorks` أو `imageIds` أو `videoIds`، أو أضف موقعًا إلى `websites` في أعلى الملف. يجب أن يكون الملف مشاركًا لأي شخص لديه الرابط.
- `cv.html` — نسخة سيرة ذاتية قابلة للطباعة.
- `assets/` — الصورة الشخصية، شعار بابلو، ملف السيرة PDF، لقطات المواقع، ومكتبات GSAP و Lenis.

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
