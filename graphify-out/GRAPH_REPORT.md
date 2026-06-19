# Graph Report - .  (2026-06-14)

## Corpus Check
- 98 files · ~73,400 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 248 nodes · 453 edges · 13 communities (10 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Site chrome & homepage|Site chrome & homepage]]
- [[_COMMUNITY_Site content & sections|Site content & sections]]
- [[_COMMUNITY_Service pages|Service pages]]
- [[_COMMUNITY_Package dependencies|Package dependencies]]
- [[_COMMUNITY_Blog & sitemap|Blog & sitemap]]
- [[_COMMUNITY_shadcn  Tailwind config|shadcn / Tailwind config]]
- [[_COMMUNITY_TypeScript config|TypeScript config]]
- [[_COMMUNITY_SEO schema & layout|SEO schema & layout]]
- [[_COMMUNITY_Button & utils|Button & utils]]
- [[_COMMUNITY_ESLint config|ESLint config]]
- [[_COMMUNITY_Next.js config|Next.js config]]
- [[_COMMUNITY_PostCSS config|PostCSS config]]

## God Nodes (most connected - your core abstractions)
1. `siteConfig` - 23 edges
2. `Reveal()` - 17 edges
3. `compilerOptions` - 16 edges
4. `Footer()` - 11 edges
5. `BreadcrumbSchema()` - 10 edges
6. `CtaBanner()` - 10 edges
7. `tailwind` - 6 edges
8. `aliases` - 6 edges
9. `getPostBySlug()` - 5 edges
10. `getAllPostsSortedByDate()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `getPostBySlug()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → lib/blog-posts.ts
- `BlogIndexPage()` --calls--> `getAllPostsSortedByDate()`  [EXTRACTED]
  app/blog/page.tsx → lib/blog-posts.ts
- `BlogSection()` --calls--> `getAllPostsSortedByDate()`  [EXTRACTED]
  components/BlogSection.tsx → lib/blog-posts.ts
- `BlogPostPage()` --calls--> `getPostBySlug()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → lib/blog-posts.ts
- `BlogPostPage()` --calls--> `getRelatedPosts()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → lib/blog-posts.ts

## Import Cycles
- None detected.

## Communities (13 total, 3 thin omitted)

### Community 0 - "Site chrome & homepage"
Cohesion: 0.08
Nodes (24): metadata, metadata, Footer(), topNav, BreadcrumbSchema(), metadata, metadata, metadata (+16 more)

### Community 1 - "Site content & sections"
Cohesion: 0.09
Nodes (20): AboutSection(), ICONS, Hero(), QuoteSection(), ICONS, aboutSection, aiUseCases, contactSection (+12 more)

### Community 2 - "Service pages"
Cohesion: 0.07
Nodes (14): metadata, ServicePageData, metadata, metadata, metadata, metadata, azureDataEngineeringPage, dataAnalyticsPage (+6 more)

### Community 3 - "Package dependencies"
Cohesion: 0.07
Nodes (28): dependencies, @base-ui/react, class-variance-authority, clsx, lucide-react, next, react, react-dom (+20 more)

### Community 4 - "Blog & sitemap"
Cohesion: 0.14
Nodes (13): staticPages, BlogIndexPage(), BlogSection(), blogCategories, BlogCategory, BlogPost, blogPosts, BlogSection (+5 more)

### Community 5 - "shadcn / Tailwind config"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 6 - "TypeScript config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 7 - "SEO schema & layout"
Cohesion: 0.16
Nodes (11): inter, manrope, metadata, mono, ArticleSchema(), FaqSchema(), OrganizationSchema(), PersonSchema() (+3 more)

### Community 8 - "Button & utils"
Cohesion: 0.70
Nodes (3): cn(), Button(), buttonVariants

## Knowledge Gaps
- **95 isolated node(s):** `metadata`, `metadata`, `metadata`, `metadata`, `metadata` (+90 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `siteConfig` connect `Site chrome & homepage` to `Site content & sections`, `Service pages`, `Blog & sitemap`, `SEO schema & layout`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `Reveal()` connect `Site content & sections` to `Site chrome & homepage`, `Service pages`, `Blog & sitemap`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `metadata`, `metadata`, `metadata` to the rest of the system?**
  _95 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Site chrome & homepage` be split into smaller, more focused modules?**
  _Cohesion score 0.08163265306122448 - nodes in this community are weakly interconnected._
- **Should `Site content & sections` be split into smaller, more focused modules?**
  _Cohesion score 0.08888888888888889 - nodes in this community are weakly interconnected._
- **Should `Service pages` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `Package dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._