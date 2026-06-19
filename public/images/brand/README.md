# Brand assets — DC Data Consultancy

Plaats hier je **logo** en **eigen foto**. Cursor en Claude kunnen deze map gebruiken via `@public/images/brand`.

## Bestanden

| Bestand | Doel | Aanbevolen formaat |
|---------|------|--------------------|
| `logo.png` of `logo.svg` | Site-logo (header, favicon, OG-image) | PNG met transparante achtergrond, min. 512 px breed; of SVG |
| `profile-dennis.jpg` | Profielfoto Dennis (homepage, Over Dennis) | JPG/WebP, min. 800×1000 px, portret 4:5 |

## Gebruik op de website

Bestanden in `public/` zijn bereikbaar als:

- `/images/brand/logo.png`
- `/images/brand/profile-dennis.jpg`

De site verwijst momenteel naar `/images/profile-dennis.jpg` in `lib/site-content.ts`. Na het toevoegen van je foto kun je Cursor vragen de paden naar `/images/brand/…` bij te werken.

## Tips

- Gebruik korte, vaste bestandsnamen (geen spaties).
- Commit deze bestanden niet als ze gevoelig zijn; anders wel, zodat Vercel ze meeneemt bij deploy.
- Voor client-logo's: gebruik `public/images/clients/` (aparte map).
