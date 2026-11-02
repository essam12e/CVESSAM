// Takes phone-sized screenshots of the websites shown in the «مختبر بابلو» section.
import { chromium } from "playwright";

const sites = [
  ["jaddid", "https://j-addid.com"],
  ["trendbox", "https://trend-box.online"],
  ["ratbha", "https://atbha.vercel.app/"],
  ["image-links", "https://sher-nine.vercel.app/"],
  ["save-numbers", "https://nitaaq-save-numbers.vercel.app/"],
  ["public-search", "https://nitaaqsearch.vercel.app/"],
  ["nitaaq-map", "https://nitaaq-map.vercel.app/"]
];

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 430, height: 932 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
  locale: "ar-SA",
  userAgent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
});
let failed = 0;
for (const [slug, url] of sites) {
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 }).catch(() => page.waitForTimeout(3000));
    await page.waitForTimeout(3500);
    await page.screenshot({ path: `assets/lab/${slug}.jpg`, type: "jpeg", quality: 78 });
    console.log("ok", slug);
  } catch (e) {
    failed++;
    console.log("FAIL", slug, e.message);
  }
  await page.close();
}
await browser.close();
if (failed === sites.length) process.exit(1);
