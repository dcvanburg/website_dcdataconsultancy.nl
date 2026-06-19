# DC Data Consultancy Design System — 2.0

Source of truth for the visual and verbal identity of dcdataconsultancy.nl.

2.0 is a **dark-led hybrid** system: every page opens on a dramatic deep
blue-black hero, dark feature bands carry the quote, the modern data stack and
the closing CTA, and the long-form reading sections sit on cool light surfaces.
One technical blue (`#0B5FFF`) is carried throughout, with a brighter variant
and a soft glow reserved for the dark surfaces.

Tokens below are the contract. Components consume them through the Tailwind
utilities defined in `app/globals.css`, never hard coded values.

## 1. Positioning

Senior data engineering consultancy from Breda, run by Dennis van Burg. Data
engineering is the primary positioning. Analytics engineering and data analytics are
derivatives that depend on a solid engineering foundation.

Pay off line (hero subheading, footer):

> Senior data engineering consultancy uit Breda, voor organisaties die meer uit
> hun data willen halen.

## 2. Brand voice

Confident, direct, no nonsense, pragmatic. Short sentences, concrete over
vague, no marketing fluff. A senior engineer talking to a CTO, not an agency
pitching. Five tone of voice anchors live in `lib/site-content.ts` and must
remain present (verbatim or near verbatim).

### Writing rules

- No hyphens (`-`) or em dashes (`—`) inside body copy. Full sentences with
  periods and commas. Open or merged compound words (data architectuur, self
  service, end to end, realtime).
- Slugs, URLs, file paths and code identifiers keep their hyphens.
- Number ranges use the word "tot", not an en dash.
- Avoid hype. "AI is geen knop" is on brand. "Revolutionair platform" is not.

## 3. Color palette

Cool editorial light for reading, deep blue-black for the signature dark bands.

### Light surfaces

| Token         | Value     | Use                                   |
| ------------- | --------- | ------------------------------------- |
| `canvas`      | `#F6F7F9` | Cool page background, calm bands.     |
| `surface`     | `#FFFFFF` | White content slabs, cards.           |
| `ink`         | `#0A0D14` | Body text, headings.                  |
| `ink-soft`    | `#3B4150` | Secondary body text.                  |
| `ink-muted`   | `#697186` | Tertiary text, metadata, mono tags.   |
| `ink-faint`   | `#A1A8B8` | Placeholders, hairline labels.        |
| `rule`        | `#E4E7EC` | Hairlines, dividers.                  |
| `rule-soft`   | `#F0F2F5` | Tag/pill backgrounds, soft dividers.  |

### Brand

| Token          | Value     | Use                                    |
| -------------- | --------- | -------------------------------------- |
| `brand`        | `#0B5FFF` | Primary action, eyebrow accent.        |
| `brand-ink`    | `#FFFFFF` | Text on `brand` fill.                  |
| `brand-soft`   | `#E7EEFF` | Brand tinted backgrounds on light.     |
| `brand-bright` | `#4C82FF` | Brand on dark surfaces, glow source.   |
| `accent`       | `#FFB347` | Warm amber, active data node only.     |
| `success`      | `#22C55E` | Availability indicator dot.            |

### Dark bands (the signature surface of 2.0)

| Token             | Value     | Use                                  |
| ----------------- | --------- | ------------------------------------ |
| `night`           | `#080B14` | Primary dark background.             |
| `night-soft`      | `#0E1320` | Raised dark panel.                   |
| `night-elevated`  | `#141A2A` | Card / input / node on dark.         |
| `night-ink`       | `#F4F6FB` | Primary text on dark.                |
| `night-soft-ink`  | `#AEB7CA` | Secondary text on dark.             |
| `night-muted-ink` | `#707B92` | Tertiary text on dark.               |
| `night-rule`      | `#1F2638` | Dividers on dark.                    |

Pair colors high contrast. Never tint body text with brand color, only
accents, eyebrows and active link states.

## 4. Surfaces and rhythm

Four surface utilities drive every section:

- `surface-canvas` — cool light reading sections.
- `surface-white` — white slabs (cards, alternating bands).
- `bg-night-field` — deep dark band with a built in brand glow gradient. Use
  with `text-night-ink`. The signature dark surface.
- `surface-brand` — solid brand fill (sparingly).

Homepage surface order (alternation, dark used as accent, never two light in a
visually flat row): dark hero → canvas → white → canvas → white → **dark quote**
→ canvas → **dark stack** → canvas → white → canvas → white → canvas →
**dark CTA** → dark footer.

Every page (home and all subpages) opens on a `bg-night-field` hero so the
fixed `Header` renders transparent with light text at the top, then turns
solid (`bg-canvas/85` + blur + hairline) once scrolled past 16px.

Section vertical rhythm: `py-24 md:py-32`. Dark hero/CTA bands run taller.

## 5. Typography

Trio unchanged from 1.0; only scale and rhythm evolved.

- Display, headings: **Manrope** (`var(--font-display)`), 600 to 800, tight
  tracking, `text-balance` on long headlines.
- Body, UI: **Inter** (`var(--font-sans)`), `leading-relaxed` for paragraphs.
- Mono, labels, tags, KPI numbers, code refs: **JetBrains Mono**
  (`var(--font-mono)`), uppercase + wide tracking.

### Type ramp

| Use            | Class hints                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| Hero H1        | `font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] leading-[0.98] tracking-tight text-balance` |
| Page H1        | `font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-tight` |
| Section H2     | `font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance` |
| Card H3        | `font-display font-bold text-xl md:text-2xl tracking-tight`                 |
| Lead / body    | `text-lg leading-relaxed` (`text-ink-soft` on light, `text-night-soft-ink` on dark) |
| Eyebrow        | `eyebrow` utility. `eyebrow-brand` on light, `text-brand-bright` on dark.    |
| Big stat       | `font-display font-extrabold text-3xl md:text-4xl tracking-tight`           |

## 6. Shape, surface, decoration

- Radius: `--radius` is `0.625rem`. Cards use `rounded-xl` / `rounded-2xl`,
  chips `rounded-md`/`rounded-lg`.
- Borders: hairline `border border-rule` on light, `border-white/10` on dark.
  Grids use the `gap-px bg-rule border border-rule rounded-xl overflow-hidden`
  trick to render a one pixel grid with rounded outer corners.
- Decoration utilities (all `aria-hidden`, inherit `currentColor`):
  - `grid-dot` / `grid-dot-dense` — radial dot field.
  - `grid-lines` — technical line grid, top masked. Used on dark bands.
  - `glow-brand` — blurred brand glow blob, position absolutely behind content.
  - `rule-glow` — gradient hairline to delimit dark bands.
  - `chip` — hairline mono tag.
- Shadows only on primary CTA hover and floating cards (`shadow-brand/30`).

## 7. Motion

Subtle and purposeful. Disabled under `prefers-reduced-motion` (handled in
`globals.css`).

- `components/ui/Reveal.tsx` — wraps content, fades + rises it in on scroll via
  IntersectionObserver (`[data-reveal]` + `.is-visible`). `as`, `delay`
  (stagger, ms) and `className` props. Stagger grids by `i * 70`ish.
- Hero lineage: `lineage-dash` (flowing connectors), `node-pulse` (pulsing
  nodes), `drift-slow` (slow glow drift). See `components/ui/LineageDiagram.tsx`.

## 8. Iconography

- `lucide-react` at `w-4 h-4` / `w-5 h-5`. `text-brand` for emphasis,
  `text-ink-muted` / `text-night-muted-ink` for incidental.
- Brand icons (LinkedIn) are hand rolled SVG; lucide dropped brand glyphs.
- Mono `::` and `->` may stand in for list bullets.

## 9. Components reference

| Component               | File                                  | Notes |
| ----------------------- | ------------------------------------- | ----- |
| Header                  | `components/Header.tsx`               | Transparent over the dark hero, solid on scroll, availability chip. |
| Hero                    | `components/Hero.tsx`                 | Dark, glow, animated lineage panel, trust bar. |
| Lineage diagram         | `components/ui/LineageDiagram.tsx`    | Decorative SVG DAG, CSS animated. |
| Reveal                  | `components/ui/Reveal.tsx`            | Scroll reveal wrapper. |
| Problem ("Herkenbaar?") | `components/WhyDataSection.tsx`       | Canvas, sticky intro + hairline two column list. |
| Wat ik doe              | `components/OfferSection.tsx`         | White, three pillar link grid, primary gets brand bar. |
| Process                 | `components/ProcessSection.tsx`       | Canvas, numbered steps, first filled. |
| Quote                   | `components/QuoteSection.tsx`         | Dark band, glow, large display quote. |
| Services                | `components/ServicesSection.tsx`      | Canvas, two cell link grid, primary highlighted. |
| Stack                   | `components/TechStackSection.tsx`     | Dark band, six category cells, mono chips. |
| AI use cases            | `components/AiUseCasesSection.tsx`    | Canvas, hairline icon grid. |
| Track record            | `components/ProjectsSection.tsx`      | White, greyscale client logos (hover to color). |
| Testimonials            | `components/TestimonialsSection.tsx`  | Canvas, three quote cells, first brand filled. |
| Insights                | `components/BlogSection.tsx`          | White, three editorial teasers. |
| Contact form            | `components/ContactSection.tsx`       | Canvas, two column, `bare` prop drops its own heading. |
| Final CTA               | `components/ui/CtaBanner.tsx`         | Dark band, glow, centered. |
| Footer                  | `components/Footer.tsx`               | Dark, mono labels. |
| Section shell           | `components/ui/SectionShell.tsx`      | Variants `canvas`, `white`, `night`. Reveals its own header. |
| Page hero               | `components/ui/PageHero.tsx`          | Dark hero for subpages, optional breadcrumbs/CTAs. |
| FAQ list                | `components/ui/FaqList.tsx`           | Accordion, animated grid rows, plus/close toggle. |
| Breadcrumbs             | `components/ui/Breadcrumbs.tsx`       | `tone` light/dark; dark by default (sits on dark heroes). |
| Service detail template | `components/ServicePageTemplate.tsx`  | Drives all `app/diensten/<slug>` pages. Dark hero. |

## 10. Content sources

All copy lives in `lib/site-content.ts` and `lib/blog-posts.ts`. No inline page
copy beyond labels in buttons, form fields and breadcrumbs. Run the "no dashes"
check (`—` / `–` should return zero matches inside string literals).

## 11. Verbal punctuation patterns

- Section eyebrow: ALL CAPS mono. `eyebrow-brand` on light, `text-brand-bright`
  on dark.
- List bullets in editorial sections: `::`.
- Status indicator: small `success` dot plus mono label, `Beschikbaar`.
