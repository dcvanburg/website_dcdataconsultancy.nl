# Improvement Roadmap

These improvements are identified but NOT implemented in this initial rebuild. Implement them after the initial deployment is live and verified.

## Priority 1 — High Impact

### 1. Real Contact Form with Backend
**Current state:** mailto: fallback only
**Improvement:** Integrate a proper form handler:
- Option A: [Resend](https://resend.com) API for email delivery (free tier available)
- Option B: [Formspree](https://formspree.io) (no backend needed)
- Option C: Next.js Server Action with `nodemailer`
**Benefit:** Better UX, no client's email client required, spam protection

### 2. Blog Pages
**Current state:** /blog route exists on live site but not implemented here
**Improvement:** Add:
- `/blog` listing page
- `/blog/[slug]` dynamic page
- MDX support for content authoring
- RSS feed at `/feed.xml`
**Benefit:** SEO, thought leadership, recurring traffic

### 3. Vaardigheden (Skills) Page
**Current state:** /vaardigheden route exists on live site but not implemented
**Improvement:** Full dedicated skills/tools page listing technologies used (Python, SQL, Power BI, Tableau, dbt, Azure, etc.)

### 4. Image Optimization
**Current state:** Raw images from Wix CDN, variable sizes/formats
**Improvement:**
- Convert all images to WebP/AVIF
- Proper sizing for each breakpoint using `next/image` `sizes` prop
- Add `blurDataURL` placeholders for images

## Priority 2 — Medium Impact

### 5. Animation & Scroll Reveal
**Current state:** Static sections, no entrance animations
**Improvement:** Add scroll-triggered reveal animations using `framer-motion` or CSS `@keyframes`

### 6. Dark Mode Toggle
**Current state:** Site is permanently dark (hero/about/services) + light (why/offer/projects) per design
**Improvement:** Add a full dark/light mode toggle using `next-themes`, honoring `prefers-color-scheme`

### 7. Testimonials / Reviews Section
**Current state:** No testimonials
**Improvement:** Add a section with client quotes/testimonials to build social proof

### 8. Case Studies
**Current state:** Projects section shows only logos
**Improvement:** Expand to include brief case study cards or a dedicated `/projecten/[slug]` page with project descriptions

### 9. Structured Data (JSON-LD)
**Current state:** Basic OpenGraph meta only
**Improvement:** Add `application/ld+json` for:
- `Person` schema (Dennis van Burg)
- `LocalBusiness` or `ProfessionalService` schema
- `WebSite` schema with `SearchAction`

## Priority 3 — Nice to Have

### 10. CMS Integration
**Current state:** All content in `lib/site-content.ts` (requires code edit to update)
**Improvement:** Connect to a headless CMS (Sanity, Contentful, or Notion via API) for non-developer content editing

### 11. Analytics
**Current state:** No analytics
**Improvement:** Add privacy-friendly analytics:
- [Plausible](https://plausible.io) or [Fathom](https://usefathom.com)
- Avoid Google Analytics due to GDPR concerns (Dutch audience)

### 12. Cookie Consent Banner
**Current state:** No cookie banner
**Improvement:** Add a GDPR-compliant cookie consent mechanism if analytics or tracking is added

### 13. Multi-Language Support
**Current state:** Dutch only
**Improvement:** Add English version using Next.js `i18n` routing

### 14. CI/CD Pipeline
**Current state:** Manual Vercel deploy
**Improvement:** GitHub Actions workflow for:
- Lint on PR
- Build check on PR
- Auto-deploy to Vercel on push to main

### 15. Performance Monitoring
**Current state:** None
**Improvement:** Add Core Web Vitals monitoring via Vercel Speed Insights or similar
