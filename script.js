const BIRTH_DATE = new Date(1999, 7, 28);
const CAREER_START = 2020;
const PAGE_SIZE = 9;

const driveThumb = (id, size = 1000) => `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
const driveView = (id) => `https://drive.google.com/file/d/${id}/view?usp=drive_link`;

const designIds = [
  "1TN4TJXVXe3fzGkg40umQDJa_cJA7ywmQ",
  "1JHpTZOdYuzAJQYXVbLVJdexFxIrdUUSe",
  "1w8V5RKlrS6uwrXCQqIcJCYP3uVz8WARh",
  "15ClUJMLvVC9ZMGRYTgXOzlkerSkZDWCD",
  "1IS5jkkJqZ0zPZSXmTnhd8YvrH257GR5y"
];

const collectionIds = [
  "1RDK_uKAE6ke3vFZXtarJytb7lC9LUnzd",
  "1N2c0YTB-NduaCab97P48AoZEfJoar4UF",
  "1oqbid1WGwoQe9hcc_RtigJX66LarZbW3",
  "13UxsgYEwOQiCFGowZWg8M9lpn5Z3teS_",
  "1HacSNY1CIn2hxUjEB6CCF8iecuvKcy_M",
  "1q2H5WexUGilZq_zrgPNsifeU2v8062p4",
  "1Moetv9xCn9gwY91-0fXgKPWhCka-Qyxk",
  "1XIjrEbppCoAFr2PDZbrxnLj36bmwWXUn",
  "1fngNBBDzgZd6HyhD0zJ9YoACAmBhviKT",
  "1joqeBk6pOrmdwZg5Hyt668Rt_jq_y2gz",
  "1gu7t-fa4-2DXc4oK93xl716fiQ9iNciB",
  "1BoZml8Y-710sh0VJ59goE-f26bwVfG-o",
  "1XT970wT9trtmgFv16gIo16ec7LmWqp37",
  "1xTWKt6uSJnAWX6SWa3phgrbNPftAyx56",
  "1YDcgwfK0CPaQZXbiK6_tFndtd2Z3CU9m",
  "1upLItt3tMR-OBu971uya6OigVWFQnV2G",
  "1P2KLbbI83wk1IqASPN3WcKpEgElkJ7Vs",
  "1L35JhMFZQwTfdDq4fABUH7K1WqUsTlqp",
  "1qzLHqaWAqvH5mmQDhSSHvi6ft0oVechp"
];

const websites = [
  { title: "Sahel 2031", image: "assets/website-sahel.png", url: "https://sahel2031.twsaa.com/%D9%8A%D9%88%D8%AA%D9%8A%D9%88%D8%A8" },
  { title: "Atyab Alghada", image: "assets/website-atyab.png", url: "https://atyab-sa.com/" },
  { title: "ORIMA Group", image: "assets/website-orima.png", url: "https://orimagroup.com/ar" },
  { title: "RZ Store", image: "assets/website-rzstore.png", url: "https://storerz.com/" }
];

const pad = (n) => String(n).padStart(2, "0");

const designs = designIds.map((id, i) => ({
  category: "design",
  title: { ar: `تصميم ${pad(i + 1)}`, en: `Design ${pad(i + 1)}` },
  thumb: driveThumb(id),
  full: driveThumb(id, 1800),
  url: driveView(id)
}));

const collections = collectionIds.map((id, i) => ({
  category: "collection",
  title: { ar: `ملف أعمال ${pad(i + 1)}`, en: `Collection ${pad(i + 1)}` },
  thumb: driveThumb(id),
  full: driveThumb(id, 1800),
  url: driveView(id)
}));

const sites = websites.map((site) => ({
  category: "web",
  title: { ar: site.title, en: site.title },
  thumb: site.image,
  full: site.image,
  url: site.url
}));

// Lead with a mix so the first screen of "All" shows every kind of work.
const works = [
  designs[0], sites[0], designs[1], sites[1], designs[2], collections[0],
  sites[2], designs[3], collections[1], sites[3], designs[4], collections[2],
  ...collections.slice(3)
];

const translations = {
  ar: {
    brand: "عصام حمود عبده",
    "nav.about": "نبذة",
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
      "مصمم جرافيك وموشن جرافيك، أستخدم تقنيات الذكاء الاصطناعي لتحويل الأفكار إلى تجارب بصرية جذابة تصنع فرقًا في حضور علامتك التجارية.",
    "hero.ctaWork": "شاهد أعمالي",
    "hero.ctaCv": "تحميل السيرة الذاتية",
    "hero.tagMotion": "موشن جرافيك",
    "hero.location": "صنعاء، اليمن",
    "stats.years": "سنوات خبرة",
    "stats.projects": "عمل في المعرض",
    "stats.ai": "سير عمل مدعوم بالذكاء الاصطناعي",
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
    "services.kicker": "02 — الخدمات",
    "services.title": "ماذا أقدّم لك؟",
    "services.s1Title": "التصميم الجرافيكي",
    "services.s1Desc": "هويات بصرية، تصاميم سوشيال ميديا، إعلانات ومطبوعات بلمسة احترافية متناسقة.",
    "services.s2Title": "الموشن جرافيك",
    "services.s2Desc": "فيديوهات إعلانية وتعريفية متحركة تشرح فكرتك وتجذب جمهورك في ثوانٍ.",
    "services.s3Title": "التصميم بالذكاء الاصطناعي",
    "services.s3Desc": "توظيف أدوات الذكاء الاصطناعي لتسريع الإنتاج ورفع الجودة وابتكار أفكار غير تقليدية.",
    "services.s4Title": "إدارة المتاجر الإلكترونية",
    "services.s4Desc": "تجهيز وإدارة المتاجر على سلة وزد وترنديول، من التصميم إلى رفع المنتجات.",
    "work.kicker": "03 — معرض الأعمال",
    "work.title": "أعمال مختارة",
    "work.sub": "اضغط على أي عمل لعرضه بحجم كامل.",
    "work.all": "الكل",
    "work.design": "تصاميم مفردة",
    "work.collection": "ملفات تجميعية",
    "work.web": "مواقع ومتاجر",
    "work.more": "عرض المزيد",
    "work.openDrive": "فتح الملف",
    "work.visitSite": "زيارة الموقع",
    "exp.kicker": "04 — الخبرات والتعليم",
    "exp.title": "رحلتي المهنية",
    "exp.present": "الآن",
    "exp.role": "مصمم جرافيك وموشن جرافيك",
    "exp.company": "عمل حر",
    "exp.item1": "تنفيذ تصاميم جرافيكية إبداعية متنوعة لعدة عملاء",
    "exp.item2": "إنشاء فيديوهات موشن جرافيك إعلانية",
    "exp.item3": "استخدام أدوات الذكاء الاصطناعي لتحسين جودة وسرعة العمل",
    "exp.item4": "تنفيذ مشاريع متنوعة لمنصات التواصل الاجتماعي",
    "exp.item5": "المشاركة في تصميم وتطوير مواقع ومتاجر إلكترونية",
    "edu.duration": "4 سنوات",
    "edu.university": "جامعة صنعاء",
    "edu.major": "قسم الحاسب الآلي — تخصص جرافكس",
    "edu.cert": "شهادة تخرج من جامعة صنعاء — قسم الحاسب الآلي — تخصص جرافكس",
    "contact.kicker": "05 — تواصل",
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
      "A graphic and motion designer who uses AI tools to turn ideas into striking visual experiences that elevate your brand.",
    "hero.ctaWork": "View my work",
    "hero.ctaCv": "Download CV",
    "hero.tagMotion": "Motion graphics",
    "hero.location": "Sana'a, Yemen",
    "stats.years": "Years of experience",
    "stats.projects": "Works in the gallery",
    "stats.ai": "AI-powered workflow",
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
    "services.kicker": "02 — Services",
    "services.title": "What I can do for you",
    "services.s1Title": "Graphic Design",
    "services.s1Desc": "Visual identities, social media designs, ads and print with a consistent professional touch.",
    "services.s2Title": "Motion Graphics",
    "services.s2Desc": "Animated promo and explainer videos that tell your story and hook your audience in seconds.",
    "services.s3Title": "AI-Powered Design",
    "services.s3Desc": "Using AI tools to speed up production, raise quality and explore unconventional ideas.",
    "services.s4Title": "E-commerce Stores",
    "services.s4Desc": "Setting up and managing stores on Salla, Zid and Trendyol, from design to product listings.",
    "work.kicker": "03 — Portfolio",
    "work.title": "Selected work",
    "work.sub": "Click any piece to view it full size.",
    "work.all": "All",
    "work.design": "Designs",
    "work.collection": "Collections",
    "work.web": "Websites & stores",
    "work.more": "Show more",
    "work.openDrive": "Open file",
    "work.visitSite": "Visit website",
    "exp.kicker": "04 — Experience & Education",
    "exp.title": "My journey",
    "exp.present": "Present",
    "exp.role": "Graphic & Motion Graphics Designer",
    "exp.company": "Freelance",
    "exp.item1": "Delivered diverse creative graphic design work for multiple clients",
    "exp.item2": "Created promotional motion graphics videos",
    "exp.item3": "Used AI tools to improve speed and quality of production",
    "exp.item4": "Delivered diverse content for social media platforms",
    "exp.item5": "Contributed to the design and development of websites and online stores",
    "edu.duration": "4 years",
    "edu.university": "Sana'a University",
    "edu.major": "Computer Department — Graphics Major",
    "edu.cert": "Graduation certificate, Sana'a University — Computer Department — Graphics Major",
    "contact.kicker": "05 — Contact",
    "contact.title": "Let's create something remarkable",
    "contact.sub": "Have a project in mind? Send me a message and I'll get back to you soon.",
    "contact.phone": "Phone",
    "contact.cv": "Resume",
    "footer.top": "Back to top ↑",
    rotator: ["visual identities", "motion graphics", "social media content", "AI-powered ads", "online stores"]
  }
};

const categoryLabel = {
  design: { ar: "تصميم", en: "Design" },
  collection: { ar: "ملف تجميعي", en: "Collection" },
  web: { ar: "موقع / متجر", en: "Website" }
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

let lang = "ar";
let activeFilter = "all";
let visibleCount = PAGE_SIZE;
let lightboxIndex = 0;

function storageGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function storageSet(key, value) {
  try { localStorage.setItem(key, value); } catch { /* storage unavailable */ }
}

/* ---------- Computed facts ---------- */
function computeAge(birth, now = new Date()) {
  let age = now.getFullYear() - birth.getFullYear();
  const beforeBirthday =
    now.getMonth() < birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate());
  return beforeBirthday ? age - 1 : age;
}

$$(".js-age").forEach((el) => (el.textContent = computeAge(BIRTH_DATE)));
$$(".js-years").forEach((el) => (el.textContent = new Date().getFullYear() - CAREER_START));
$$(".js-work-count").forEach((el) => (el.textContent = works.length));
$("#year").textContent = new Date().getFullYear();

/* ---------- Language ---------- */
function setLanguage(next) {
  lang = next;
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (typeof value === "string") el.textContent = value;
  });
  $("#langToggle").textContent = lang === "ar" ? "EN" : "ع";
  storageSet("portfolio-language", lang);
  restartRotator();
  renderWork();
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
  el.classList.remove("is-out");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  rotatorTimer = setInterval(() => {
    el.classList.add("is-out");
    setTimeout(() => {
      i = (i + 1) % words.length;
      el.textContent = words[i];
      el.classList.remove("is-out");
    }, 350);
  }, 2600);
}

/* ---------- Portfolio ---------- */
const grid = $("#workGrid");
const loadMoreBtn = $("#loadMore");

function filteredWorks() {
  return activeFilter === "all" ? works : works.filter((w) => w.category === activeFilter);
}

function workCard(work, index) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = `work-card cat-${work.category}`;
  card.style.setProperty("--i", index % PAGE_SIZE);
  card.dataset.index = index;
  card.setAttribute("aria-label", work.title[lang]);

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

  const info = document.createElement("span");
  info.className = "work-info";
  info.innerHTML = `<em></em><strong></strong><i class="work-arrow" aria-hidden="true">↗</i>`;
  info.querySelector("em").textContent = categoryLabel[work.category][lang];
  info.querySelector("strong").textContent = work.title[lang];

  card.append(media, info);
  card.addEventListener("click", () => openLightbox(index));
  return card;
}

function renderWork() {
  const list = filteredWorks();
  grid.replaceChildren(...list.slice(0, visibleCount).map(workCard));
  loadMoreBtn.hidden = visibleCount >= list.length;
  $$("[data-count]").forEach((el) => {
    const key = el.dataset.count;
    el.textContent = key === "all" ? works.length : works.filter((w) => w.category === key).length;
  });
}

$$(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter;
    visibleCount = PAGE_SIZE;
    $$(".filter").forEach((b) => {
      const on = b === btn;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on);
    });
    renderWork();
  });
});

loadMoreBtn.addEventListener("click", () => {
  visibleCount += PAGE_SIZE;
  renderWork();
});

/* ---------- Lightbox ---------- */
const lightbox = $("#lightbox");
const lbImg = $("#lbImg");

function showLightboxItem() {
  const list = filteredWorks();
  const work = list[lightboxIndex];
  lightbox.classList.remove("is-fallback");
  lbImg.src = work.full;
  lbImg.alt = work.title[lang];
  $("#lbTitle").textContent = work.title[lang];
  const counter = document.createElement("bdi");
  counter.dir = "ltr";
  counter.textContent = `${lightboxIndex + 1} / ${list.length}`;
  $("#lbCat").replaceChildren(`${categoryLabel[work.category][lang]} · `, counter);
  $("#lbLink").href = work.url;
  $("#lbLinkText").textContent = translations[lang][work.category === "web" ? "work.visitSite" : "work.openDrive"];
}

lbImg.addEventListener("error", () => lightbox.classList.add("is-fallback"));

function openLightbox(index) {
  lightboxIndex = index;
  showLightboxItem();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  $("#lbClose").focus();
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function stepLightbox(delta) {
  const total = filteredWorks().length;
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

/* ---------- Header, nav, scroll ---------- */
const header = $("#siteHeader");
const menuBtn = $("#menuToggle");
const progress = $("#scrollProgress");

menuBtn.addEventListener("click", () => {
  const open = header.classList.toggle("menu-open");
  menuBtn.setAttribute("aria-expanded", open);
});
$$("#topNav a").forEach((a) =>
  a.addEventListener("click", () => {
    header.classList.remove("menu-open");
    menuBtn.setAttribute("aria-expanded", "false");
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

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
$$(".reveal").forEach((el) => revealObserver.observe(el));

/* ---------- Init ---------- */
setTheme(storageGet("portfolio-theme") || "dark");
setLanguage(storageGet("portfolio-language") || "ar");
