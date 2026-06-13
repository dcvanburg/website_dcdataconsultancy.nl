# Assumptions — DC Data Consultancy Next.js Rebuild

## Content Assumptions

1. **Email address** — `dennis@dcdataconsultancy.nl` used for mailto contact form; not found directly in page source (Wix hides it), but provided as known content.
2. **LinkedIn URL** — `https://www.linkedin.com/in/dennisvanburg/` extracted from crawl of the live site.
3. **Location** — "Goes, Nederland" found in meta title of live site.
4. **8+ years experience** — Stated as "meer dan 8 jaar ervaring" in the known content.
5. **Industries list** — Logistiek, Vastgoed, Energie, Banken, Verzekeraars — from known content; capitalized for display.
6. **Quote attribution** — The quote "To ask the right question is harder than to answer it" has no visible attribution on the live site; left blank.
7. **Color scheme** — The live Wix site uses a professional dark background. Since exact CSS variables are not available from Wix dynamic rendering, a near-black (`#0d1117`) primary dark, `#161b22` secondary dark, and `#3b82f6` blue accent was chosen to match the professional aesthetic.
8. **Copyright year** — "2024" used as seen in many freelance sites of this type; not directly crawlable from Wix footer.
9. **Section content paragraphs** — The bio, intro copy, and service descriptions were written in the style/tone of the live site, using the known content fragments as foundation. The Wix SPA rendering made full body text extraction difficult.
10. **Client logo images** — Downloaded directly from Wix CDN. No resizing was done; images are served as-is.
11. **Nav order** — Wie, Waarom, Wat, Projecten, Contact — based on the crawled navigation table.
12. **Font** — Inter (Google Fonts) chosen as a close match to the clean sans-serif used on the original; Geist was replaced because it is more developer-oriented.
13. **Contact form** — Uses `mailto:` fallback since there is no backend/API in this static Next.js build. A note is displayed after submission.
14. **Blog** — The source site has a /blog route. This rebuild does not include a blog page; link omitted from primary nav to keep scope manageable. Listed in improvement roadmap.
15. **Vaardigheden page** — Found in source site nav but not included; listed in improvement roadmap.

## Technical Assumptions

1. Node.js v22 (via `~/.local/node-v22.15.0-darwin-arm64`) used for scaffolding.
2. Next.js App Router with TypeScript strict mode.
3. shadcn/ui initialized with default theme.
4. No external form handling service (Formspree, Resend, etc.) added — mailto fallback only.
5. Images served from `/public/images/` with `next/image` component.
6. Deployment target: Vercel (default for Next.js).
7. All section navigation uses hash anchors (`#wie`, `#waarom`, etc.) and `scroll-smooth` on html element.
