# Build Progress Log

## Phase 1 — Next.js Project Setup
- [x] Scaffolded Next.js 16 with TypeScript, Tailwind CSS, ESLint, App Router
- [x] Initialized shadcn/ui with default theme
- [x] Created folder structure: components/, lib/, public/images/, docs/

## Phase 2 — Crawl & Inventory
- [x] Crawled https://www.dcdataconsultancy.nl
- [x] Downloaded 11 client logos + site logo + profile photo
- [x] Wrote docs/content-inventory.md
- [x] Wrote docs/audit.md

## Phase 3 — Initial Build
- [x] First version of homepage with original Wix copy

## Phase 4 — Strategic Repositioning (2026-06-13)
Major transformation from "Freelance data analytics consultant" positioning
to "Senior Data Engineering Consultancy" — based on briefing document.

### Repositioning
- [x] Primary specialization: **Data Engineering** (was: Data Analytics)
- [x] Location: **Breda** (was incorrectly: Goes)
- [x] Founded: **2021** (with experience since 2016)
- [x] Tone: senior, premium, technical-but-understandable
- [x] All copy rewritten with business-outcomes language

### New pages (15 total routes)
- [x] / — homepage redesigned
- [x] /diensten — services index
- [x] /diensten/data-engineering — flagship service page
- [x] /diensten/data-analytics
- [x] /diensten/analytics-engineering
- [x] /diensten/modern-data-stack
- [x] /diensten/dbt-consultancy
- [x] /diensten/azure-data-engineering
- [x] /over-dennis — extended About page
- [x] /cases — 6 detailed anonymized case studies
- [x] /industrieen — 5 industries with challenges
- [x] /data-consultant-breda — local SEO landing
- [x] /contact — dedicated contact page
- [x] /blog — insights index
- [x] /blog/[slug] — 10 SEO-optimized blog posts

### Blog content (10 posts)
1. ETL vs ELT in 2026 (Data Engineering)
2. dbt project-structuur (Analytics Engineering)
3. Modern Data Stack uitgelegd (Modern Data Stack)
4. Snowflake vs Databricks 2026 (Modern Data Stack)
5. Betrouwbare data pipelines (Data Engineering)
6. Data quality framework (Data Quality)
7. Azure data engineering keuzes (Cloud & Azure)
8. Dataplatform-architectuur blueprint (Data Strategy)
9. De analytics engineer rol (Analytics Engineering)
10. KPI-definitie met stakeholders (Data Strategy)

### Technical SEO
- [x] Full metadata on every page (title, description, canonical, OpenGraph)
- [x] JSON-LD schema: Organization, Person, Website, Service, Article, Breadcrumb, FAQ
- [x] Sitemap.ts auto-generates all 25+ URLs
- [x] robots.txt with AI crawler allow-list
- [x] Breadcrumbs on inner pages (visual + structured data)
- [x] Local SEO page with Breda, Brabant, Tilburg, Eindhoven keywords

### UX/UI improvements
- [x] Sticky header with dropdown for /diensten
- [x] Improved typography hierarchy and spacing rhythm
- [x] Consistent SectionShell pattern for visual rhythm
- [x] PageHero component with breadcrumbs for inner pages
- [x] FaqList interactive accordion (with FAQ schema)
- [x] CtaBanner at the bottom of every page

### Quality
- [x] Lint pass (0 errors, 0 warnings)
- [x] Build pass (Next.js 16 / Turbopack — 28 static routes)
- [x] TypeScript strict — no type errors
