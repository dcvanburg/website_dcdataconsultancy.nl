# QA Checklist — DC Data Consultancy

## Build & Lint

- [x] `npm run lint` — passes with 0 warnings/errors
- [x] `npm run build` — compiles successfully with Turbopack
  - Output: 3 static routes (`/`, `/_not-found`, `/sitemap.xml`)
  - TypeScript check: passed
  - No build errors

## Issues Found & Fixed

### Fix 1: Linkedin icon missing from lucide-react v1.18.0
- **Problem:** `import { Linkedin } from "lucide-react"` caused build error — icon not exported in v1.18.0
- **Fix:** Replaced with inline SVG (LinkedIn brand icon from Simple Icons path data) in both `ContactSection.tsx` and `Footer.tsx`
- **Files changed:** `components/ContactSection.tsx`, `components/Footer.tsx`

## Manual QA (to verify in browser)

### Navigation
- [ ] Header sticks on scroll
- [ ] Header background transitions from transparent to dark on scroll
- [ ] All nav links scroll to correct sections
- [ ] "Aan de slag!" CTA scrolls to #contact
- [ ] Mobile hamburger opens/closes correctly
- [ ] Mobile menu closes when a link is tapped

### Hero
- [ ] Full-height hero visible on load
- [ ] Gradient radial background visible
- [ ] Grid dot pattern visible
- [ ] Scroll indicator bounces
- [ ] CTA button links to #contact

### Sections
- [ ] WhyDataSection: 4 bullet points with check icons visible
- [ ] WhyDataSection: Data visualization mockup renders
- [ ] AboutSection: Profile photo loads
- [ ] AboutSection: "8+" experience badge visible
- [ ] OfferSection: 3 numbered steps with cards
- [ ] QuoteSection: Large quote with quotation mark decoration
- [ ] AiUseCasesSection: 5 use case cards + 1 CTA card
- [ ] ServicesSection: 4 service cards on dark background
- [ ] ProjectsSection: All 9 client logos load correctly
- [ ] ProjectsSection: Logos show grayscale, color on hover
- [ ] ContactSection: Form fields accept input
- [ ] ContactSection: Submit triggers mailto link
- [ ] ContactSection: Email, LinkedIn, location shown
- [ ] Footer: All nav links work
- [ ] Footer: LinkedIn link opens in new tab
- [ ] Footer: Email link opens mail client

### Responsiveness
- [ ] Mobile (375px): All sections readable, no overflow
- [ ] Tablet (768px): Grid layouts shift correctly
- [ ] Desktop (1280px): Max-width container limits width

### SEO
- [ ] `<html lang="nl">` set correctly
- [ ] Meta title: "DC Data Consultancy | Data Analytics, Analytics Engineering & Dashboarding"
- [ ] Meta description present
- [ ] OG tags present
- [ ] /robots.txt accessible
- [ ] /sitemap.xml returns XML

### Accessibility
- [ ] All images have alt text
- [ ] Form labels linked to inputs via `htmlFor`
- [ ] Header toggle button has `aria-label`
- [ ] LinkedIn SVGs have `aria-hidden="true"`
- [ ] Focus states visible on interactive elements

### Performance
- [ ] Run Lighthouse in Chrome DevTools
- [ ] Target: Performance > 80, Accessibility > 90, SEO > 90
