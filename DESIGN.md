# DC Data Consultancy Design System

Source of truth for the visual and verbal identity of dcdataconsultancy.nl.
Originated from a Google Stitch design (project `5319704438672755105`, design
system `assets/9513113575026205990`) and applied across the Next.js codebase.

The tokens below are the contract. Components should consume them via the
Tailwind utilities defined in `app/globals.css`, not hard coded values.

## 1. Positioning

DC Data Consultancy is a senior data engineering consultancy from Breda, run by
Dennis van Burg. Data engineering is the primary positioning. Analytics and
data science are derivatives that depend on a solid engineering foundation.

Pay off line, present on the homepage hero and the footer:

> Senior data engineering consultancy uit Breda, voor organisaties die meer uit
> hun data willen halen.

## 2. Brand voice

Confident, direct, no nonsense, pragmatic. Short sentences, concrete over
vague, no marketing fluff. The narrator is a senior engineer talking to a CTO,
not an agency pitching.

Five tone of voice anchors must remain present somewhere on the site, verbatim
or near verbatim. They appear in `lib/site-content.ts`.

- "Techniek is altijd een middel, nooit een doel. Wat de business kan met de
  oplossing telt zwaarder dan welke tool we kiezen."
- "Liever een eerste werkend resultaat na vier weken dan een perfect plan na
  vier maanden. Iteratie boven big bang."
- "Ik bouw zo dat jouw team het overneemt. Geen afhankelijkheid van DC Data
  Consultancy, wel een goede samenwerking als je dat wilt."
- "Geen verkooppraatjes. Eén aanspreekpunt, korte lijnen, en de mogelijkheid om
  binnen weken een eerste resultaat op te leveren in plaats van na maanden."
- "Die brug slaan, tussen techniek en business, is een groot deel van mijn
  werk."

### Writing rules

- Do not use hyphens (`-`) or em dashes (`—`) inside body copy. Write full
  sentences with periods and commas. Use the merged or open form for compound
  words (data architectuur, self service, end to end, realtime).
- Slugs, URLs, file paths and code identifiers may keep their hyphens. Those
  are not rendered as prose.
- Numbers ranges use the word "tot" (`2 tot 6 maanden`), not an en dash.
- Avoid the word "powerpoint" outside the literal sense.
- Avoid hype. "AI is geen knop" is on brand. "Revolutionair platform" is not.

## 3. Color palette

Warm light editorial. Strong contrast. One technical blue primary, one warm
accent for sparing highlights.

| Token              | Value     | Use                                  |
| ------------------ | --------- | ------------------------------------ |
| `canvas`           | `#FAFAF7` | Page background, hero, calm bands.   |
| `surface`          | `#FFFFFF` | Cards, content slabs.                |
| `ink`              | `#0A0A0B` | Body text, headings.                 |
| `ink-soft`         | `#3F3F46` | Secondary body text.                 |
| `ink-muted`        | `#71717A` | Tertiary text, metadata, mono tags.  |
| `ink-faint`        | `#A1A1AA` | Placeholders, hairline labels.       |
| `rule`             | `#E4E4E7` | Hairlines, table dividers.           |
| `rule-soft`        | `#F4F4F5` | Pill/tag backgrounds, soft dividers. |
| `brand`            | `#0B5FFF` | Primary action, eyebrow accent.      |
| `brand-ink`        | `#FFFFFF` | Text on `brand` fill.                |
| `brand-soft`       | `#E6EEFF` | Brand tinted backgrounds, callouts.  |
| `accent`           | `#FFB347` | Used sparingly for active data nodes.|
| `success`          | `#16A34A` | Availability indicator dot only.     |
| `night`            | `#0A0A0B` | "Herkenbaar?" dark band background.  |
| `night-soft`       | `#18181B` | Secondary dark slabs.                |
| `night-ink`        | `#FAFAF7` | Text on `night`.                     |
| `night-rule`       | `#27272A` | Dividers on `night`.                 |

Pair colors high contrast. Never tint body text with brand color, only
accents, eyebrows and the active state of links.

## 4. Typography

- Display, headings: **Manrope** (`var(--font-display)`), weight 600 to 800,
  tight tracking (`tracking-tight`), `text-balance` on long headlines.
- Body, UI text: **Inter** (`var(--font-sans)`), comfortable reading sizes,
  `leading-relaxed` for paragraphs.
- Mono, labels, tags, KPI numbers, code references: **JetBrains Mono**
  (`var(--font-mono)`), small caps style via uppercase + tracking.

### Type ramp

| Use            | Class hints                                                   |
| -------------- | ------------------------------------------------------------- |
| Hero H1        | `font-display font-extrabold text-6xl md:text-8xl leading-[0.95] tracking-tight text-balance` |
| Section H2     | `font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance` |
| Card H3        | `font-display font-bold text-xl md:text-2xl tracking-tight`   |
| Body paragraph | `text-ink-soft text-lg leading-relaxed`                       |
| Lead intro     | `text-ink-soft text-xl leading-relaxed`                       |
| Eyebrow / tag  | `eyebrow` (utility in `globals.css`). Brand accent: `eyebrow-brand` |
| Big stat       | `font-display font-extrabold text-5xl md:text-6xl tracking-tight` |
| Mono prefix    | `font-mono text-xs uppercase tracking-[0.18em] text-ink-muted` |

## 5. Spacing and layout

- Page container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical rhythm: `py-28 md:py-36`. Calm bands `py-32 md:py-40`.
- Editorial grid: prefer `grid-cols-12` with content in `lg:col-span-5` and
  `lg:col-span-7` for two column reads.
- Section intros: max width `max-w-3xl mb-16 md:mb-20`.
- Avoid card overload. Use `border-t border-rule pt-6` to delimit list items
  instead of boxed cards where possible.
- Subtle dot grid for hero and quote sections: `grid-dot` and
  `grid-dot-dense` utilities. They inherit color from `currentColor`.

## 6. Shape and surface

- Border radius: `0.5rem` default (`rounded-lg`). KPI badges and small chips
  may be smaller (`rounded`). No pill shapes except the availability indicator.
- Borders: hairline `border border-rule`. Cells in grids use the
  `gap-px bg-rule border border-rule` trick to render a one pixel grid.
- Shadows used only on the primary CTA hover state. No drop shadows on
  general cards.

## 7. Components reference

| Component                | File                                  | Notes |
| ------------------------ | ------------------------------------- | ----- |
| Header                   | `components/Header.tsx`               | Translucent canvas backdrop, optional availability chip. |
| Hero                     | `components/Hero.tsx`                 | Massive headline, mono eyebrow, decorative lineage SVG on `xl`. |
| Problem ("Herkenbaar?")  | `components/WhyDataSection.tsx`       | Full bleed `surface-night`, mono `::` bullets. |
| Wat ik doe               | `components/OfferSection.tsx`         | Three column editorial, first column gets the brand bar. |
| Process                  | `components/ProcessSection.tsx`       | Numbered circles, first step filled, others outlined. |
| Quote                    | `components/QuoteSection.tsx`         | Full bleed `surface-brand`, large display text, mono attribution. |
| About                    | `components/AboutSection.tsx`         | Two column with four large stat numbers. |
| Stack                    | `components/TechStackSection.tsx`     | Six cell grid, mono tag chips. |
| Track record             | `components/ProjectsSection.tsx`      | Greyscale client wordmarks in a grid. |
| Testimonials             | `components/TestimonialsSection.tsx`  | Two or three column quotes, left border, first is brand. |
| Insights                 | `components/BlogSection.tsx`          | Three column editorial teasers. |
| Contact form             | `components/ContactSection.tsx`       | Two column, form on right inside a canvas card. |
| Final CTA banner         | `components/ui/CtaBanner.tsx`         | Centered, primary CTA plus mono mail link. |
| Footer                   | `components/Footer.tsx`               | Minimal, mono labels. |
| Section shell            | `components/ui/SectionShell.tsx`      | Variants `canvas`, `white`, `night`. |
| Page hero                | `components/ui/PageHero.tsx`          | Used by every subpage. |
| FAQ list                 | `components/ui/FaqList.tsx`           | Accordion with hairline dividers. |
| Breadcrumbs              | `components/ui/Breadcrumbs.tsx`       | Mono uppercase, brand on the active item. |
| Service detail template  | `components/ServicePageTemplate.tsx`  | Drives all `app/diensten/<slug>/page.tsx` pages. |

## 8. Iconography

- Use `lucide-react` icons at `w-4 h-4` or `w-5 h-5`. Default color `text-brand`
  for emphasized elements, `text-ink-muted` for incidental ones.
- Mono characters `::` and `->` may stand in for icons in list bullets.
- The hero lineage SVG is decorative; mark `aria-hidden="true"`.

## 9. Verbal punctuation patterns

- Section eyebrow: ALL CAPS mono, brand colored on light surfaces.
  `WAT IK DOE`, `WERKPRINCIPES`, `INSIGHTS`.
- Mail address: `MAIL_:: dennis@dcdataconsultancy.nl`.
- List bullets in editorial sections: `::`.
- Status indicator: small dot plus mono label, `Beschikbaar voor nieuwe
  opdrachten`.

## 10. Content sources

All copy lives in `lib/site-content.ts`. There should be no inline page copy
beyond labels in buttons, form fields and breadcrumbs. When editing, run the
"no dashes" check by greping for `—` and `–`; both should return zero matches
inside string literals.

## 11. Updating the design system

The Stitch project ID is `5319704438672755105`. To regenerate a section, use
the Stitch MCP tools (`mcp__stitch__generate_screen_from_text` with the design
system asset `assets/9513113575026205990`). Translate the resulting HTML into
the existing component structure, never bypass the tokens in this document.
