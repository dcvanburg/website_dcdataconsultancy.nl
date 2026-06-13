# DC Data Consultancy — Website

Next.js rebuild of [dcdataconsultancy.nl](https://www.dcdataconsultancy.nl).

**Stack:** Next.js 15, TypeScript, Tailwind CSS, shadcn/ui

## Prerequisites

- Node.js 18+ (project was built with Node.js 22)
- npm 10+

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
# Auto-fix
npm run lint -- --fix
```

## Vercel Deployment

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2 — Vercel Dashboard

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Framework preset: **Next.js** (auto-detected).
5. Deploy — no environment variables required for the base site.

### Option 3 — Git integration (recommended)

Connect the GitHub repo to Vercel for automatic deployments on every push to `main`.

## Project Structure

```
app/
  layout.tsx        # Root layout, metadata, font
  page.tsx          # Main page — renders all sections
  globals.css       # Tailwind + site color tokens
  sitemap.ts        # Dynamic sitemap for SEO
components/
  Header.tsx        # Sticky nav + mobile hamburger
  Hero.tsx          # Full-height hero section
  WhyDataSection.tsx
  AboutSection.tsx
  OfferSection.tsx
  QuoteSection.tsx
  AiUseCasesSection.tsx
  ServicesSection.tsx
  ProjectsSection.tsx
  ContactSection.tsx  # Form with mailto fallback
  Footer.tsx
lib/
  site-content.ts   # All text content, nav items, data
public/
  images/           # Client logos, profile photo
  robots.txt
docs/
  content-inventory.md
  audit.md
  assumptions.md
  progress.md
  improvement-roadmap.md
  qa-checklist.md
```

## Content Updates

All website text is centralized in `lib/site-content.ts`. Edit that file to update any copy, navigation items, or data without touching component files.

## Contact

Dennis van Burg — [dennis@dcdataconsultancy.nl](mailto:dennis@dcdataconsultancy.nl)
