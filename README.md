# DC Data Consultancy — Website

Codebase voor [dcdataconsultancy.nl](https://www.dcdataconsultancy.nl) — senior data engineering consultancy uit Breda.

**Stack:** Next.js 16 (App Router · Turbopack), React 19, TypeScript, Tailwind CSS v4, shadcn/ui.

## Prerequisites

- Node.js 18+ (project gebouwd op Node.js 22)
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
npm run lint -- --fix
```

## Vercel Deployment

### Optie 1 — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Optie 2 — Vercel Dashboard

1. Push deze repository naar GitHub.
2. Ga naar [vercel.com/new](https://vercel.com/new).
3. Importeer de repository.
4. Framework preset: **Next.js** (auto-detected).
5. Deploy — geen environment variables vereist.

### Optie 3 — Git integratie (aanbevolen)

Koppel de GitHub repo aan Vercel voor automatische deployments bij elke push naar `main`.

## Projectstructuur

```
app/
  layout.tsx                      # Root layout, metadata, JSON-LD schema
  page.tsx                        # Homepage
  globals.css                     # Tailwind + site color tokens
  sitemap.ts                      # Dynamische sitemap (alle 25+ URLs)
  diensten/
    page.tsx                      # Services index
    data-engineering/page.tsx     # Flagship service
    data-analytics/page.tsx
    data-science/page.tsx
    modern-data-stack/page.tsx
    dbt-consultancy/page.tsx
    azure-data-engineering/page.tsx
  cases/page.tsx                  # 6 geanonimiseerde case studies
  industrieen/page.tsx            # 5 sectoren met uitdagingen
  over-dennis/page.tsx            # About / bio
  data-consultant-breda/page.tsx  # Lokale SEO landing
  contact/page.tsx
  blog/
    page.tsx                      # Blog index
    [slug]/page.tsx               # Dynamische post pages (10 posts)
components/
  Header.tsx, Footer.tsx          # Site chrome met dropdown nav
  Hero, About, Why, Offer, ...    # Homepage secties
  SchemaMarkup.tsx                # JSON-LD componenten
  ServicePageTemplate.tsx         # Shared template voor service pages
  ui/
    PageHero.tsx                  # Inner-page hero
    SectionShell.tsx              # Consistente section wrapper
    FaqList.tsx                   # Accordion (met FAQ schema)
    Breadcrumbs.tsx
    CtaBanner.tsx
lib/
  site-content.ts                 # Alle copy, navigatie, services data
  blog-posts.ts                   # 10 blog posts (structured content)
public/
  images/                         # Client logos, profile photo
  robots.txt                      # Met AI crawler allow-list
docs/
  content-inventory.md
  audit.md
  assumptions.md
  progress.md
  improvement-roadmap.md
  qa-checklist.md
```

## Content Updates

Alle teksten staan centraal in [lib/site-content.ts](lib/site-content.ts). Bloginhoud in [lib/blog-posts.ts](lib/blog-posts.ts). Pas die bestanden aan om copy te wijzigen — geen wijzigingen in componentbestanden nodig.

## SEO

- Per-pagina metadata via Next.js `Metadata` API en `generateMetadata`
- JSON-LD: `ProfessionalService`, `Person`, `WebSite`, `Service`, `Article`, `BreadcrumbList`, `FAQPage`
- Dynamische `sitemap.xml` (app/sitemap.ts) bevat alle 25+ routes
- `robots.txt` met expliciete allow voor AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
- Breadcrumbs op alle inner pages (visueel + structured data)
- Lokale SEO pagina: `/data-consultant-breda` voor Breda / Noord-Brabant rankings

## Positionering

- **Primary:** senior data engineering consultancy
- **Secondary:** data analytics, data science
- Locatie: **Breda**, Nederland
- Actief sinds: **2021** (ervaring sinds 2016)

## Contact

Dennis van Burg — [dennis@dcdataconsultancy.nl](mailto:dennis@dcdataconsultancy.nl) — [LinkedIn](https://www.linkedin.com/in/dennisvanburg/)
