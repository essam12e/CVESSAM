const BIRTH_DATE = new Date(1999, 7, 28);
const CAREER_START = 2020;
const PAGE_SIZE = 12;

const driveThumb = (id, size = 900) => `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
const driveView = (id) => `https://drive.google.com/file/d/${id}/view`;
const drivePreview = (id) => `https://drive.google.com/file/d/${id}/preview`;

/* ---------- Portfolio data (Google Drive file ids) ---------- */
const motionWorks = [
  ["1ezRal0ioC-aDM--e6ONM9kz0--oSj37s", "فيلم علامة بابلو", "PABLO Brand Film"],
  ["1QabtYad80IpmQ7lPJr60LBFcjgEjNIBy", "إعلان بابلو موشن", "Pablo Motion Ad"],
  ["1AkgZm5JMLQI70mBAbN0enJYFGXcGI15l", "إعلان بابلو", "Pablo Ad"],
  ["1RA4Ecf0urIoRCrkeZBQy31qt2_6K31qT", "ماجيك ستور", "Magic Store"],
  ["1fayiYIMv4sjDiFHeapq-YYxjFdr3epUr", "المعيار الرقمي", "Al-Meyar Digital"],
  ["1Fis3TzBiI9OE_6hlqUTi5Wff5CZs3tMt", "قبس", "Qabas"],
  ["1zWdl2HRcfMCVJqD7wFnxWMw_mpu4ybdg", "ليالي جلو", "Layali Glow"],
  ["1OgmReV29VGejfmRZVUxr90TuYZLBQUL-", "توصيل الأسنان", "Dental Tawseel"],
  ["10KL5UYzlkh9D6Ux3MxtrDLqi9IRysrH0", "السرعة الرقمية", "Digital Speed"],
  ["1XXhyftlIss1wavc5wHxmMzOL1gzu7gJu", "فاصل", "Fassil"],
  ["1GejloUircVBgulH3cgE-h9GTTiV1KmXM", "بالم ويفز", "Palm Waves"],
  ["1BDu5yl6Wc6MlDqusPV51GxOAXvX82AzV", "نيلوف بلس", "NILOV Plus"],
  ["1bx9W-ffecoFsKdCfo77HjDTNKxjOHnFD", "إعلان متجر نطاق", "Nitaaq Store Ad"],
  ["1ieQ-4IQwfnhgmm7xhr2VN4AWbH1fgQ2D", "نطاق ستور", "Nitaaq Store"],
  ["1uIopLUnX1TkhtdvJpA1WHgfcgyot9OBR", "نطاق موشن", "Nitaaq Motion"],
  ["1sO4-EYrs7eY6KjP_J5e4TGf30IJ4D7Nz", "إعلان نطاق", "Nitaaq Ad"],
  ["1r9qFz6q-1Q67PlIoyFqZUPzdv0cEWpjT", "أسند لين", "Ascend Lane"],
  ["16ZlJ-8VtgoTA8Do6QzCVwWdOVFtaSHBs", "سياق", "Siyaq"],
  ["1fLVL6hlp9IQ3NNoQa3eBylMgnPuizvZs", "لاكشري", "Luxury"],
  ["1bpA5l8NrnNVFGyCY9oIrGkITKwyZqcwa", "مورف", "Morph"],
  ["1I2Pe4ymNZMQ-TSLy8Oc3uaNDeWc9KGkP", "وصول", "Wusool"],
  ["14xo6fgf_9yxYNa5V2sjx1XRhfVLh7EFd", "نيولوف", "Newlove"],
  ["1qtlng6XtKXd34LbMN9G5sK91ZlIfMpSd", "روف", "Roof"],
  ["1E_G3CK_oBc6JBQeKI_h6hCNKM4L6Gbxb", "بريق اللؤلؤ", "Pearl Glow"],
  ["1HHWI7MpnGhgH8a7eIYAJP3K4ajYyxevO", "أوريكس", "Oryx"],
  ["1ca6ziroWkAYu1je_DDj6H2sf2jIz8JUV", "إعلان موشن", "Motion Ad"]
];

const imageIds = [
  "1w8V5RKlrS6uwrXCQqIcJCYP3uVz8WARh",
  "15ClUJMLvVC9ZMGRYTgXOzlkerSkZDWCD",
  "1IS5jkkJqZ0zPZSXmTnhd8YvrH257GR5y",
  "1RDK_uKAE6ke3vFZXtarJytb7lC9LUnzd",
  "1N2c0YTB-NduaCab97P48AoZEfJoar4UF",
  "1oqbid1WGwoQe9hcc_RtigJX66LarZbW3",
  "13UxsgYEwOQiCFGowZWg8M9lpn5Z3teS_",
  "1HacSNY1CIn2hxUjEB6CCF8iecuvKcy_M",
  "1q2H5WexUGilZq_zrgPNsifeU2v8062p4",
  "1Moetv9xCn9gwY91-0fXgKPWhCka-Qyxk",
  "1XIjrEbppCoAFr2PDZbrxnLj36bmwWXUn",
  "1XT970wT9trtmgFv16gIo16ec7LmWqp37",
  "1YDcgwfK0CPaQZXbiK6_tFndtd2Z3CU9m",
  "1xoct6VgdEjKTUV4ph_KpthFjq9mP3Ff-",
  "1l0aY8dcOLkutJm6QEXDwoMGcL-cVYhkh",
  "1R-dYrGlQ0VTvz8HZc2bOkXcjqj3kdEQn"
];

const videoIds = [
  "1TN4TJXVXe3fzGkg40umQDJa_cJA7ywmQ",
  "1JHpTZOdYuzAJQYXVbLVJdexFxIrdUUSe",
  "1L2lNHyNBpvAiEEI044hHbvcv7o9HLMKI",
  "1VQc0Et6-Ug-X92VPQLIRatP44YVX8snx",
  "1kQt9f3aWGAJH0DjRZ_yr0hqfPBLOXnkW",
  "1L35JhMFZQwTfdDq4fABUH7K1WqUsTlqp",
  "1qzLHqaWAqvH5mmQDhSSHvi6ft0oVechp",
  "1fngNBBDzgZd6HyhD0zJ9YoACAmBhviKT",
  "1joqeBk6pOrmdwZg5Hyt668Rt_jq_y2gz",
  "1gu7t-fa4-2DXc4oK93xl716fiQ9iNciB",
  "1BoZml8Y-710sh0VJ59goE-f26bwVfG-o"
];

const websites = [
  { title: "Sahel 2031", image: "assets/website-sahel.png", url: "https://sahel2031.twsaa.com/%D9%8A%D9%88%D8%AA%D9%8A%D9%88%D8%A8" },
  { title: "Atyab Alghada", image: "assets/website-atyab.png", url: "https://atyab-sa.com/" },
  { title: "ORIMA Group", image: "assets/website-orima.png", url: "https://orimagroup.com/ar" },
  { title: "RZ Store", image: "assets/website-rzstore.png", url: "https://storerz.com/" }
];

const pad = (n) => String(n).padStart(2, "0");

const motion = motionWorks.map(([id, ar, en]) => ({
  category: "motion",
  title: { ar, en },
  thumb: driveThumb(id),
  embed: drivePreview(id),
  url: driveView(id)
}));

const images = imageIds.map((id, i) => ({
  category: "image",
  title: { ar: `تصميم ${pad(i + 1)}`, en: `Design ${pad(i + 1)}` },
  thumb: driveThumb(id),
  full: driveThumb(id, 2000),
  url: driveView(id)
}));

const videos = videoIds.map((id, i) => ({
  category: "video",
  title: { ar: `فيديو ${pad(i + 1)}`, en: `Video ${pad(i + 1)}` },
  thumb: driveThumb(id),
  embed: drivePreview(id),
  url: driveView(id)
}));

const sites = websites.map((site) => ({
  category: "web",
  title: { ar: site.title, en: site.title },
  thumb: site.image,
  full: site.image,
  url: site.url
}));

// "All" interleaves the categories so the first screen shows every kind of work.
function interleave(...lists) {
  const out = [];
  const max = Math.max(...lists.map((l) => l.length));
  for (let i = 0; i < max; i++) lists.forEach((l) => l[i] && out.push(l[i]));
  return out;
}

const works = interleave(motion, images, sites, videos);

const translations = {
  ar: {
    brand: "عصام حمود عبده",
    "nav.about": "نبذة",
    "nav.pablo": "بابلو",
    "nav.services": "الخدمات",
    "nav.work": "الأعمال",
    "nav.experience": "الخبرات",
    "nav.contact": "تواصل",
    "nav.hire": "اطلب تصميمك",
    "hero.available": "متاح لمشاريع جديدة",
    "hero.hello": "مرحبًا، أنا",
    "hero.name": "عصام حمود عبده",
    "hero.rolePrefix": "أصمم",
    "hero.description":
      "مصمم جرافيك وموشن جرافيك ومنشئ متاجر إلكترونية، أستخدم تقنيات الذكاء الاصطناعي لتحويل الأفكار إلى تجارب بصرية جذابة تصنع فرقًا في حضور علامتك التجارية.",
    "hero.ctaWork": "شاهد أعمالي",
    "hero.ctaCv": "تحميل السيرة الذاتية",
    "hero.location": "صنعاء، اليمن",
    "stats.years": "سنوات خبرة",
    "stats.projects": "عمل في المعرض",
    "stats.motion": "فيديو موشن جرافيك",
    "about.kicker": "01 — نبذة",
    "about.title": "أصمم بشغف، وأنفّذ بدقة",
    "about.text":
      "أنا عصام حمود عبده، مصمم جرافيك ومصمم موشن جرافيك متخصص في استخدام تقنيات الذكاء الاصطناعي لتطوير حلول إبداعية مبتكرة. أمتلك شغفًا بتحويل الأفكار إلى تصاميم بصرية جذابة ومؤثرة، وأعمل على تقديم محتوى بصري حديث يجمع بين الإبداع والتقنية لتلبية احتياجات العملاء بأعلى جودة.",
    "facts.location": "الموقع",
    "facts.age": "العمر",
    "facts.years": "سنة",
    "facts.education": "التعليم",
    "facts.educationValue": "جامعة صنعاء — حاسب آلي (جرافكس)",
    "facts.languages": "اللغات",
    "facts.languagesValue": "العربية، الإنجليزية",
    "pablo.kicker": "02 — الاسم الحركي",
    "pablo.title": "بابلو، توقيعي الإبداعي",
    "pablo.text":
      "«بابلو» هو اسمي الحركي وعلامتي التجارية كمصمم ومنشئ متاجر إلكترونية. تحت هذا الاسم أقدّم الهويات البصرية، والموشن جرافيك، وتجهيز المتاجر على سلة وزد بجودة تليق بعلامتك.",
    "pablo.film": "شاهد فيلم العلامة",
    "pablo.tagline": "مصمم ومنشئ متاجر إلكترونية",
    "services.kicker": "03 — الخدمات",
    "services.title": "ماذا أقدّم لك؟",
    "services.s1Title": "التصميم الجرافيكي",
    "services.s1Desc": "هويات بصرية، تصاميم سوشيال ميديا، إعلانات ومطبوعات بلمسة احترافية متناسقة.",
    "services.s2Title": "الموشن جرافيك",
    "services.s2Desc": "فيديوهات إعلانية وتعريفية متحركة تشرح فكرتك وتجذب جمهورك في ثوانٍ.",
    "services.s3Title": "التصميم بالذكاء الاصطناعي",
    "services.s3Desc": "توظيف أدوات الذكاء الاصطناعي لتسريع الإنتاج ورفع الجودة وابتكار أفكار غير تقليدية.",
    "services.s4Title": "إنشاء المتاجر الإلكترونية",
    "services.s4Desc": "تجهيز وإدارة المتاجر على سلة وزد وترنديول، من التصميم إلى رفع المنتجات.",
    "work.kicker": "04 — معرض الأعمال",
    "work.title": "أعمال مختارة",
    "work.sub": "اضغط على أي عمل لعرضه بحجم كامل أو تشغيله.",
    "work.all": "الكل",
    "work.motion": "موشن جرافيك",
    "work.image": "تصاميم",
    "work.video": "فيديو",
    "work.web": "مواقع ومتاجر",
    "work.more": "عرض المزيد",
    "work.openDrive": "فتح في Google Drive",
    "work.visitSite": "زيارة الموقع",
    "cursor.view": "عرض",
    "cursor.play": "تشغيل",
    "exp.kicker": "05 — الخبرات والتعليم",
    "exp.title": "رحلتي المهنية",
    "exp.present": "الآن",
    "exp.role": "مصمم جرافيك وموشن جرافيك",
    "exp.company": "عمل حر — بابلو",
    "exp.item1": "تنفيذ تصاميم جرافيكية إبداعية متنوعة لعدة عملاء",
    "exp.item2": "إنشاء فيديوهات موشن جرافيك إعلانية",
    "exp.item3": "استخدام أدوات الذكاء الاصطناعي لتحسين جودة وسرعة العمل",
    "exp.item4": "تنفيذ مشاريع متنوعة لمنصات التواصل الاجتماعي",
    "exp.item5": "تصميم وإنشاء مواقع ومتاجر إلكترونية",
    "edu.duration": "4 سنوات",
    "edu.university": "جامعة صنعاء",
    "edu.major": "قسم الحاسب الآلي — تخصص جرافكس",
    "edu.cert": "شهادة تخرج من جامعة صنعاء — قسم الحاسب الآلي — تخصص جرافكس",
    "contact.kicker": "06 — تواصل",
    "contact.title": "لنصنع شيئًا مميزًا معًا",
    "contact.sub": "عندك فكرة مشروع؟ أرسل لي رسالة وسأرد عليك في أقرب وقت.",
    "contact.phone": "الجوال",
    "contact.cv": "السيرة الذاتية",
    "footer.top": "العودة للأعلى ↑",
    rotator: ["هويات بصرية", "موشن جرافيك", "تصاميم سوشيال ميديا", "إعلانات بالذكاء الاصطناعي", "متاجر إلكترونية"]
  },
  en: {
    brand: "Essam Hamood Abdo",
    "nav.about": "About",
    "nav.pablo": "Pablo",
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.hire": "Hire me",
    "hero.available": "Available for new projects",
    "hero.hello": "Hi, I'm",
    "hero.name": "Essam Hamood Abdo",
    "hero.rolePrefix": "I design",
    "hero.description":
      "A graphic and motion designer and e-commerce store builder who uses AI tools to turn ideas into striking visual experiences that elevate your brand.",
    "hero.ctaWork": "View my work",
    "hero.ctaCv": "Download CV",
    "hero.location": "Sana'a, Yemen",
    "stats.years": "Years of experience",
    "stats.projects": "Works in the gallery",
    "stats.motion": "Motion graphics videos",
    "about.kicker": "01 — About",
    "about.title": "Designed with passion, delivered with precision",
    "about.text":
      "I am Essam Hamood Abdo, a graphic and motion graphics designer specializing in AI technologies to create innovative visual solutions. I love turning ideas into attractive, impactful designs and delivering modern content that blends creativity with technology at the highest quality.",
    "facts.location": "Location",
    "facts.age": "Age",
    "facts.years": "years",
    "facts.education": "Education",
    "facts.educationValue": "Sana'a University — Computer Science (Graphics)",
    "facts.languages": "Languages",
    "facts.languagesValue": "Arabic, English",
    "pablo.kicker": "02 — Creative alias",
    "pablo.title": "Pablo, my creative signature",
    "pablo.text":
      "“Pablo” is my creative alias and personal brand as a designer and e-commerce store builder. Under this name I deliver visual identities, motion graphics and store setups on Salla and Zid with the quality your brand deserves.",
    "pablo.film": "Watch the brand film",
    "pablo.tagline": "Designer & e-commerce store builder",
    "services.kicker": "03 — Services",
    "services.title": "What I can do for you",
    "services.s1Title": "Graphic Design",
    "services.s1Desc": "Visual identities, social media designs, ads and print with a consistent professional touch.",
    "services.s2Title": "Motion Graphics",
    "services.s2Desc": "Animated promo and explainer videos that tell your story and hook your audience in seconds.",
    "services.s3Title": "AI-Powered Design",
    "services.s3Desc": "Using AI tools to speed up production, raise quality and explore unconventional ideas.",
    "services.s4Title": "E-commerce Stores",
    "services.s4Desc": "Building and managing stores on Salla, Zid and Trendyol, from design to product listings.",
    "work.kicker": "04 — Portfolio",
    "work.title": "Selected work",
    "work.sub": "Click any piece to view it full size or play it.",
    "work.all": "All",
    "work.motion": "Motion graphics",
    "work.image": "Designs",
    "work.video": "Videos",
    "work.web": "Websites & stores",
    "work.more": "Show more",
    "work.openDrive": "Open in Google Drive",
    "work.visitSite": "Visit website",
    "cursor.view": "View",
    "cursor.play": "Play",
    "exp.kicker": "05 — Experience & Education",
    "exp.title": "My journey",
    "exp.present": "Present",
    "exp.role": "Graphic & Motion Graphics Designer",
    "exp.company": "Freelance — PABLO",
    "exp.item1": "Delivered diverse creative graphic design work for multiple clients",
    "exp.item2": "Created promotional motion graphics videos",
    "exp.item3": "Used AI tools to improve speed and quality of production",
    "exp.item4": "Delivered diverse content for social media platforms",
    "exp.item5": "Designed and built websites and online stores",
    "edu.duration": "4 years",
    "edu.university": "Sana'a University",
    "edu.major": "Computer Department — Graphics Major",
    "edu.cert": "Graduation certificate, Sana'a University — Computer Department — Graphics Major",
    "contact.kicker": "06 — Contact",
    "contact.title": "Let's create something remarkable",
    "contact.sub": "Have a project in mind? Send me a message and I'll get back to you soon.",
    "contact.phone": "Phone",
    "contact.cv": "Resume",
    "footer.top": "Back to top ↑",
    rotator: ["visual identities", "motion graphics", "social media content", "AI-powered ads", "online stores"]
  }
};

const categoryLabel = {
  motion: { ar: "موشن جرافيك", en: "Motion graphics" },
  image: { ar: "تصميم", en: "Design" },
  video: { ar: "فيديو", en: "Video" },
  web: { ar: "موقع / متجر", en: "Website" }
};

const isPlayable = (work) => Boolean(work.embed);

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
const animate = hasGsap && !reduceMotion;

let lang = "ar";
let activeFilter = "all";
let visibleCount = PAGE_SIZE;
let lightboxList = works;
let lightboxIndex = 0;
let lenis = null;

function storageGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function storageSet(key, value) {
  try { localStorage.setItem(key, value); } catch { /* storage unavailable */ }
}

/* ---------- Computed facts ---------- */
function computeAge(birth, now = new Date()) {
  const age = now.getFullYear() - birth.getFullYear();
  const beforeBirthday =
    now.getMonth() < birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate());
  return beforeBirthday ? age - 1 : age;
}

const counts = {
  years: new Date().getFullYear() - CAREER_START,
  works: works.length,
  motion: motion.length
};
$$(".js-age").forEach((el) => (el.textContent = computeAge(BIRTH_DATE)));
$$(".js-years").forEach((el) => (el.dataset.countTo = el.textContent = counts.years));
$$(".js-work-count").forEach((el) => (el.dataset.countTo = el.textContent = counts.works));
$$(".js-motion-count").forEach((el) => (el.dataset.countTo = el.textContent = counts.motion));
$("#year").textContent = new Date().getFullYear();

/* ---------- Word splitting (keeps Arabic letters joined) ---------- */
function splitWords(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.replaceChildren(
    ...words.flatMap((word, i) => {
      const outer = document.createElement("span");
      outer.className = "w";
      const inner = document.createElement("span");
      inner.className = "wi";
      inner.textContent = word;
      outer.append(inner);
      return i < words.length - 1 ? [outer, " "] : [outer];
    })
  );
}

/* ---------- Language ---------- */
function setLanguage(next) {
  lang = next;
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (typeof value === "string") el.textContent = value;
    if (el.hasAttribute("data-split")) splitWords(el);
  });
  $("#langToggle").textContent = lang === "ar" ? "EN" : "ع";
  storageSet("portfolio-language", lang);
  restartRotator();
  renderWork(false);
  if (hasGsap) ScrollTrigger.refresh();
}

$("#langToggle").addEventListener("click", () => setLanguage(lang === "ar" ? "en" : "ar"));

/* ---------- Theme ---------- */
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "light" ? "#f5f1ea" : "#0b0b10";
  storageSet("portfolio-theme", theme);
}

$("#themeToggle").addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
});

/* ---------- Rotating role ---------- */
let rotatorTimer;
function restartRotator() {
  const el = $("#rotator");
  const words = translations[lang].rotator;
  let i = 0;
  clearInterval(rotatorTimer);
  el.textContent = words[0];
  if (reduceMotion) return;
  rotatorTimer = setInterval(() => {
    i = (i + 1) % words.length;
    if (hasGsap) {
      gsap.timeline()
        .to(el, { yPercent: -60, autoAlpha: 0, filter: "blur(6px)", duration: 0.35, ease: "power2.in" })
        .add(() => (el.textContent = words[i]))
        .fromTo(el, { yPercent: 60, autoAlpha: 0, filter: "blur(6px)" }, { yPercent: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.5, ease: "power3.out" });
    } else {
      el.textContent = words[i];
    }
  }, 2800);
}

/* ---------- Portfolio ---------- */
const grid = $("#workGrid");
const loadMoreBtn = $("#loadMore");

function filteredWorks() {
  return activeFilter === "all" ? works : works.filter((w) => w.category === activeFilter);
}

function workCard(work, index, list) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = `work-card cat-${work.category}`;
  card.setAttribute("aria-label", work.title[lang]);
  card.dataset.cursor = isPlayable(work) ? "play" : "view";

  const media = document.createElement("span");
  media.className = "work-media";
  const img = document.createElement("img");
  img.src = work.thumb;
  img.alt = work.title[lang];
  img.loading = "lazy";
  img.decoding = "async";
  img.referrerPolicy = "no-referrer";
  img.addEventListener("load", () => card.classList.add("is-loaded"));
  img.addEventListener("error", () => card.classList.add("is-fallback"));
  media.append(img);

  const fallback = document.createElement("span");
  fallback.className = "work-fallback";
  fallback.textContent = work.title[lang];
  media.append(fallback);

  if (isPlayable(work)) {
    const play = document.createElement("span");
    play.className = "work-play";
    play.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5-11-6.5Z"/></svg>';
    media.append(play);
  }

  const info = document.createElement("span");
  info.className = "work-info";
  info.innerHTML = `<em></em><strong></strong><i class="work-arrow" aria-hidden="true">↗</i>`;
  info.querySelector("em").textContent = categoryLabel[work.category][lang];
  info.querySelector("strong").textContent = work.title[lang];

  card.append(media, info);
  card.addEventListener("click", () => openLightbox(list, index));
  return card;
}

function renderWork(animateIn = true, from = 0) {
  const list = filteredWorks();
  const shown = list.slice(0, visibleCount);
  if (from === 0) grid.replaceChildren(...shown.map((w, i) => workCard(w, i, list)));
  else grid.append(...shown.slice(from).map((w, i) => workCard(w, i + from, list)));

  loadMoreBtn.hidden = visibleCount >= list.length;
  $$("[data-count]").forEach((el) => {
    const key = el.dataset.count;
    el.textContent = key === "all" ? works.length : works.filter((w) => w.category === key).length;
  });

  const fresh = [...grid.children].slice(from);
  if (animate && animateIn) {
    gsap.fromTo(
      fresh,
      { y: 60, autoAlpha: 0, scale: 0.94 },
      { y: 0, autoAlpha: 1, scale: 1, duration: 0.9, ease: "expo.out", stagger: 0.05, clearProps: "transform", onComplete: () => ScrollTrigger.refresh() }
    );
  }
}

$$(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.filter === activeFilter) return;
    activeFilter = btn.dataset.filter;
    visibleCount = PAGE_SIZE;
    $$(".filter").forEach((b) => {
      const on = b === btn;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on);
    });
    if (animate) {
      gsap.to(grid.children, {
        y: -20, autoAlpha: 0, duration: 0.3, stagger: 0.015, ease: "power2.in",
        onComplete: () => renderWork(true)
      });
    } else {
      renderWork();
    }
  });
});

loadMoreBtn.addEventListener("click", () => {
  const from = grid.children.length;
  visibleCount += PAGE_SIZE;
  renderWork(true, from);
});

/* ---------- Lightbox ---------- */
const lightbox = $("#lightbox");
const lbMedia = $("#lbMedia");

function showLightboxItem() {
  const work = lightboxList[lightboxIndex];
  lightbox.classList.remove("is-fallback");
  lightbox.dataset.kind = work.category;

  if (isPlayable(work)) {
    const frame = document.createElement("iframe");
    frame.src = work.embed;
    frame.allow = "autoplay; fullscreen";
    frame.allowFullscreen = true;
    frame.title = work.title[lang];
    frame.className = `lb-frame ${work.category === "motion" ? "is-vertical" : ""}`;
    lbMedia.replaceChildren(frame);
  } else {
    const img = document.createElement("img");
    img.src = work.full;
    img.alt = work.title[lang];
    img.referrerPolicy = "no-referrer";
    img.addEventListener("error", () => lightbox.classList.add("is-fallback"));
    lbMedia.replaceChildren(img);
  }

  $("#lbTitle").textContent = work.title[lang];
  const counter = document.createElement("bdi");
  counter.dir = "ltr";
  counter.textContent = `${lightboxIndex + 1} / ${lightboxList.length}`;
  $("#lbCat").replaceChildren(`${categoryLabel[work.category][lang]} · `, counter);
  $("#lbLink").href = work.url;
  $("#lbLinkText").textContent = translations[lang][work.category === "web" ? "work.visitSite" : "work.openDrive"];

  if (animate) gsap.fromTo(lbMedia, { autoAlpha: 0, scale: 0.96 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: "expo.out" });
}

function openLightbox(list, index) {
  lightboxList = list;
  lightboxIndex = index;
  showLightboxItem();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  lenis?.stop();
  $("#lbClose").focus();
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  lbMedia.replaceChildren();
  lenis?.start();
}

function stepLightbox(delta) {
  const total = lightboxList.length;
  lightboxIndex = (lightboxIndex + delta + total) % total;
  showLightboxItem();
}

// "Next" follows reading direction: leftwards in Arabic, rightwards in English.
$("#lbNext").addEventListener("click", () => stepLightbox(1));
$("#lbPrev").addEventListener("click", () => stepLightbox(-1));
$("#lbClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("is-open")) return;
  const rtl = document.documentElement.dir === "rtl";
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") stepLightbox(rtl ? -1 : 1);
  if (e.key === "ArrowLeft") stepLightbox(rtl ? 1 : -1);
});

$("#pabloFilm").addEventListener("click", () => openLightbox(motion, 0));

/* ---------- Header, nav, scroll ---------- */
const header = $("#siteHeader");
const menuBtn = $("#menuToggle");
const progress = $("#scrollProgress");

menuBtn.addEventListener("click", () => {
  const open = header.classList.toggle("menu-open");
  menuBtn.setAttribute("aria-expanded", open);
});

$$('a[href^="#"]').forEach((a) =>
  a.addEventListener("click", (e) => {
    header.classList.remove("menu-open");
    menuBtn.setAttribute("aria-expanded", "false");
    const target = document.querySelector(a.getAttribute("href"));
    if (lenis && target) {
      e.preventDefault();
      lenis.scrollTo(target, { offset: a.hash === "#hero" ? -200 : -90, duration: 1.6 });
    }
  })
);

function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  header.classList.toggle("is-scrolled", scrollY > 24);
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

const navLinks = [...$$("#topNav a")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle("is-current", a.hash === `#${entry.target.id}`));
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
$$("main section[id]").forEach((s) => sectionObserver.observe(s));

/* ---------- Custom cursor ---------- */
function initCursor() {
  if (!finePointer || !hasGsap) return;
  const cursor = $("#cursor");
  const label = $("#cursorLabel");
  document.documentElement.classList.add("has-cursor");
  const xTo = gsap.quickTo(cursor, "x", { duration: 0.45, ease: "power3" });
  const yTo = gsap.quickTo(cursor, "y", { duration: 0.45, ease: "power3" });
  gsap.set(cursor, { autoAlpha: 0 });
  let seen = false;
  addEventListener("pointermove", (e) => {
    if (!seen) {
      seen = true;
      gsap.set(cursor, { x: e.clientX, y: e.clientY });
      gsap.to(cursor, { autoAlpha: 1, duration: 0.3 });
    }
    xTo(e.clientX);
    yTo(e.clientY);
  });
  document.addEventListener("pointerover", (e) => {
    const card = e.target.closest("[data-cursor]");
    const link = e.target.closest("a, button");
    cursor.classList.toggle("is-media", Boolean(card));
    cursor.classList.toggle("is-link", Boolean(link) && !card);
    label.textContent = card ? translations[lang][`cursor.${card.dataset.cursor}`] : "";
  });
  document.addEventListener("pointerleave", () => gsap.to(cursor, { autoAlpha: 0, duration: 0.2 }));
  document.addEventListener("pointerenter", () => gsap.to(cursor, { autoAlpha: 1, duration: 0.2 }));
}

/* ---------- Magnetic buttons ---------- */
function initMagnetic() {
  if (!finePointer || !animate) return;
  $$(".magnetic").forEach((el) => {
    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.35);
      yTo((e.clientY - r.top - r.height / 2) * 0.35);
    });
    el.addEventListener("pointerleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}

/* ---------- Smooth scroll ---------- */
function initLenis() {
  if (!animate || typeof window.Lenis === "undefined") return;
  lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ---------- Scroll animations ---------- */
function countUp(el) {
  const end = Number(el.dataset.countTo) || 0;
  const obj = { v: 0 };
  gsap.to(obj, { v: end, duration: 1.8, ease: "power3.out", onUpdate: () => (el.textContent = Math.round(obj.v)) });
}

function heroIntro() {
  const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
  tl.fromTo("#portrait", { clipPath: "inset(100% 0% 0% 0% round 28px)" }, { clipPath: "inset(0% 0% 0% 0% round 28px)", duration: 1.6, ease: "expo.inOut" })
    .fromTo("#portrait img", { scale: 1.35 }, { scale: 1, duration: 1.9, ease: "expo.out" }, "<0.2")
    .fromTo(".hero-name .wi", { yPercent: 115, rotate: 4 }, { yPercent: 0, rotate: 0, duration: 1.3, stagger: 0.09 }, 0.35)
    .fromTo("[data-hero]", { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.08 }, 0.55)
    .fromTo(".site-header", { y: -40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1 }, 0.6)
    .fromTo(".scroll-cue", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 1.2)
    .add(() => $$(".hero-stats [data-count-to]").forEach(countUp), 0.9)
    .add(revealHeroShapes(), 0.8);
  return tl;
}

function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Section titles: words rise out of a mask.
  $$(".section [data-split]").forEach((title) => {
    gsap.fromTo(
      title.querySelectorAll(".wi"),
      { yPercent: 115, rotate: 3 },
      { yPercent: 0, rotate: 0, duration: 1.2, ease: "expo.out", stagger: 0.07, scrollTrigger: { trigger: title, start: "top 88%" } }
    );
  });

  ScrollTrigger.batch("[data-anim]", {
    start: "top 90%",
    onEnter: (batch) =>
      gsap.fromTo(batch, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.1, ease: "expo.out", stagger: 0.08, overwrite: true })
  });
  gsap.set("[data-anim]", { autoAlpha: 0 });

  gsap.fromTo(
    ".service",
    { y: 90, autoAlpha: 0, rotateX: -18, transformPerspective: 900 },
    { y: 0, autoAlpha: 1, rotateX: 0, duration: 1.3, ease: "expo.out", stagger: 0.1, clearProps: "transform", scrollTrigger: { trigger: ".services-grid", start: "top 85%" } }
  );

  // Hero parallax.
  gsap.to("#portrait img", { yPercent: 12, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".hero-copy", { yPercent: -10, autoAlpha: 0.25, ease: "none", scrollTrigger: { trigger: ".hero", start: "center top", end: "bottom top", scrub: true } });

  // Pablo logo reveal.
  gsap.fromTo("#pabloCard", { clipPath: "inset(18% 18% 18% 18% round 40px)" }, {
    clipPath: "inset(0% 0% 0% 0% round 28px)", ease: "none",
    scrollTrigger: { trigger: "#pablo", start: "top 85%", end: "top 30%", scrub: 1 }
  });
  gsap.fromTo("#pabloLogo", { scale: 0.6, rotate: -10, autoAlpha: 0 }, {
    scale: 1, rotate: 0, autoAlpha: 1, duration: 1.6, ease: "elastic.out(1, 0.6)",
    scrollTrigger: { trigger: "#pabloCard", start: "top 70%" }
  });
  gsap.to("#pabloLogo", { yPercent: -12, ease: "none", scrollTrigger: { trigger: "#pablo", start: "top bottom", end: "bottom top", scrub: true } });

  // Contact panel grows into place.
  gsap.fromTo("#contactPanel", { scale: 0.9, borderRadius: 80 }, {
    scale: 1, borderRadius: 32, ease: "none",
    scrollTrigger: { trigger: "#contact", start: "top bottom", end: "top 40%", scrub: 1 }
  });

  // Marquee speeds up and skews with scroll velocity.
  const marquee = gsap.to("#marqueeTrack", { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
  ScrollTrigger.create({
    onUpdate: (self) => {
      const v = self.getVelocity();
      gsap.to(marquee, { timeScale: 1 + Math.min(Math.abs(v) / 400, 5), duration: 0.3, overwrite: true });
      gsap.to("#marqueeTrack", { skewX: gsap.utils.clamp(-10, 10, v / -250), duration: 0.4, overwrite: "auto" });
      gsap.to(marquee, { timeScale: 1, duration: 1.2, delay: 0.3 });
    }
  });
}

/* ---------- Hero motion accents ---------- */
function initHeroShapes() {
  const shapes = [...$$(".hs")];
  gsap.set(shapes, { autoAlpha: 0, scale: 0 });
  shapes.forEach((el, i) => {
    gsap.to(el, { y: i % 2 ? 18 : -18, rotate: i % 2 ? -25 : 25, duration: 3 + i * 0.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
  });
  if (!finePointer) return;
  const movers = shapes.map((el) => ({
    depth: Number(el.dataset.depth) || 1,
    x: gsap.quickTo(el, "x", { duration: 1, ease: "power3" })
  }));
  addEventListener("pointermove", (e) => {
    const dx = (e.clientX / innerWidth - 0.5) * 60;
    movers.forEach((m) => m.x(dx * m.depth));
  });
}

function revealHeroShapes() {
  return gsap.to(".hs", { autoAlpha: 1, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.5)", stagger: 0.08 });
}

/* ---------- Loader: a short motion-graphics "render" ---------- */
function loaderTimeline() {
  const FPS = 24;
  const RENDER = 2.9;
  const keys = [...$$(".ld-key")];
  const timecode = $("#ldTimecode");
  const percent = $("#ldPercent");
  const words = $$(".ld-words span");
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Comp setup: guides draw in, HUD and timeline appear.
  tl.fromTo(".ld-grid i:nth-child(-n+3)", { scaleY: 0 }, { scaleY: 1, duration: 0.8, stagger: 0.06, ease: "expo.inOut" }, 0)
    .fromTo(".ld-grid i:nth-child(n+4)", { scaleX: 0 }, { scaleX: 1, duration: 0.8, stagger: 0.06, ease: "expo.inOut" }, 0.05)
    .fromTo([".ld-hud", ".ld-timeline"], { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.1)
    .fromTo(".ld-path", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, 0.2);

  // Playhead scrubs the timeline; timecode, percent and keyframes follow it.
  const head = { p: 0 };
  tl.to(head, {
    p: 1,
    duration: RENDER,
    ease: "none",
    onUpdate: () => {
      const frames = Math.round(head.p * RENDER * FPS);
      timecode.textContent = `00:00:${pad(Math.floor(frames / FPS))}:${pad(frames % FPS)}`;
      percent.textContent = Math.round(head.p * 100);
      $("#ldPlayhead").style.left = `${head.p * 100}%`;
      keys.forEach((k) => k.classList.toggle("is-hit", head.p * 100 >= parseFloat(k.style.getPropertyValue("--at"))));
    }
  }, 0);

  // Shapes: the circle rides the bezier with squash & stretch, the square drops and bounces, the triangle spins in.
  tl.fromTo(".ld-circle", { x: -280, y: 100, scale: 0, autoAlpha: 1 }, { scale: 1, duration: 0.3, ease: "back.out(3)" }, 0.25)
    .to(".ld-circle", {
      keyframes: [
        { x: -150, y: -10, scaleX: 1.35, scaleY: 0.75, duration: 0.22, ease: "power1.in" },
        { x: 0, y: -110, scaleX: 0.85, scaleY: 1.2, duration: 0.22, ease: "power1.out" },
        { x: 150, y: -10, scaleX: 1.35, scaleY: 0.75, duration: 0.22, ease: "power1.in" },
        { x: 280, y: 100, scaleX: 1, scaleY: 1, duration: 0.22, ease: "power1.out" }
      ]
    }, 0.5)
    .fromTo(".ld-square", { y: -320, x: -90, rotate: -90, autoAlpha: 0 }, { y: 60, rotate: 180, autoAlpha: 1, duration: 0.8, ease: "bounce.out" }, 0.35)
    .fromTo(".ld-tri", { x: 110, y: 40, scale: 0, rotate: -240, autoAlpha: 1 }, { scale: 1, rotate: 0, duration: 0.7, ease: "back.out(2.2)" }, 0.55)
    // Everything snaps to the centre and pops as a shockwave.
    .to([".ld-circle", ".ld-square", ".ld-tri"], { x: 0, y: 0, rotate: 0, scale: 0.4, duration: 0.35, ease: "power3.in", stagger: 0.03 }, 1.4)
    .to([".ld-circle", ".ld-square", ".ld-tri"], { scale: 0, duration: 0.15, ease: "power2.in" }, 1.78)
    .fromTo(".ld-ring", { scale: 0, autoAlpha: 1 }, { scale: 4, autoAlpha: 0, duration: 0.8, ease: "expo.out" }, 1.8)
    .to(".ld-path", { autoAlpha: 0, duration: 0.3 }, 1.6);

  // Kinetic type: each word slams in and out.
  words.forEach((word, i) => {
    const at = 1.85 + i * 0.2;
    tl.fromTo(word, { autoAlpha: 0, yPercent: 70, skewY: 10, scale: 1.2 }, { autoAlpha: 1, yPercent: 0, skewY: 0, scale: 1, duration: 0.14, ease: "power4.out" }, at)
      .to(word, { autoAlpha: 0, yPercent: -60, skewY: -6, duration: 0.1, ease: "power4.in" }, at + 0.14);
  });

  // Logo reveal with a horizontal wipe.
  tl.fromTo(".loader-logo", { autoAlpha: 1, clipPath: "inset(0% 100% 0% 0%)", scale: 1.15 }, { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 0.6, ease: "expo.out" }, 2.65);

  // Colour wipes cover the comp, then lift away to reveal the site.
  const wipes = [...$$(".ld-wipes i")];
  gsap.set(wipes, { y: 0, yPercent: 101 }); // replace the CSS offset so GSAP owns the transform
  tl.to(wipes, { yPercent: 0, duration: 0.7, stagger: 0.09, ease: "expo.inOut" }, 3.25)
    .set(".loader > :not(.ld-wipes)", { autoAlpha: 0 })
    .set("#loader", { backgroundColor: "transparent", pointerEvents: "none" })
    .to(wipes.reverse(), { yPercent: -101, duration: 0.8, stagger: 0.09, ease: "expo.inOut" }, "+=0.02");

  return tl;
}

function finishLoader() {
  const loader = $("#loader");
  if (!animate) {
    loader.remove();
    return;
  }
  const tl = loaderTimeline().timeScale(1.3);
  tl.add(heroIntro().timeScale(1 / 1.3), "-=0.9").eventCallback("onComplete", () => loader.remove());
}

/* ---------- Init ---------- */
setTheme(storageGet("portfolio-theme") || "dark");
setLanguage(storageGet("portfolio-language") || "ar");
initCursor();

if (animate) {
  try {
    gsap.set(["#portrait", ".hero-name .wi", "[data-hero]"], { autoAlpha: 1 });
    gsap.set(".hero-name .wi", { yPercent: 115 });
    gsap.set("[data-hero]", { autoAlpha: 0 });
    gsap.set("#portrait", { clipPath: "inset(100% 0% 0% 0% round 28px)" });
    initLenis();
    initHeroShapes();
    initScrollAnimations();
    initMagnetic();
  } catch (err) {
    console.error(err);
  }
}

let loaderStarted = false;
function startOnce() {
  if (loaderStarted) return;
  loaderStarted = true;
  try {
    finishLoader();
  } catch (err) {
    console.error(err);
    $("#loader")?.remove();
  }
}
// The intro only needs the fonts, not every image on the page.
if (document.fonts?.ready) document.fonts.ready.then(startOnce);
else addEventListener("load", startOnce, { once: true });
setTimeout(startOnce, 900);
