# Site Audit — DC Data Consultancy

## Crawl Results

- **Homepage:** Successfully crawled https://www.dcdataconsultancy.nl
- **robots.txt:** Fetched. Disallows `?lightbox=` params, blocks PetalBot, delays dotbot/AhrefsBot. Sitemap at /sitemap.xml.
- **sitemap.xml:** Points to /pages-sitemap.xml (sitemap index pattern)

## Technology Stack (Source)
- Platform: Wix (static.wixstatic.com CDN used for all media)
- JavaScript: Wix proprietary SPA rendering

## Color Observations
- Professional dark background (dark navy / near-black)
- Blue/teal accent colors for CTAs and highlights
- White text on dark backgrounds
- Light sections with dark text for readability alternation

## Typography
- Clean sans-serif (Wix default, likely Helvetica Neue or similar)
- Large bold hero heading
- Medium weight subheadings

## Layout Patterns
- Full-width hero with dark background
- Alternating light/dark sections
- Two-column layouts (text + image) for about/offer sections
- Card grid for AI use cases and services
- Logo strip for projects
- Footer with links + social icon

## SEO Observations
- Meta title includes location ("Goes") — local SEO intent
- No explicit meta description found in crawl
- Wix SEO tooling appears to be used (robots.txt auto-generated comment)

## Content Gaps / Issues
- No explicit section anchor IDs found in source (Wix SPA)
- No email address found in page source (likely contact form only)
- Color values not extractable from Wix dynamic CSS

## Images
- All project client logos downloaded (11 images)
- Profile photo of Dennis van Burg downloaded
- Site logo downloaded
