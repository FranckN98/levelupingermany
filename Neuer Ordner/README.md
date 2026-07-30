# Eddy — Moderator & Master of Ceremonies

A premium, cinematic single-page platform with a **luxury deep-blue identity**, built around a curated **Event Appearances** showcase.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS** design system (midnight → navy → royal → electric, silver contrast, soft blue glow)
- Static-generated, SEO-ready (metadata, Open Graph, Twitter cards, JSON-LD, sitemap, robots)
- Accessible: skip link, focus rings, reduced-motion support, semantic landmarks

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Set the public URL for correct canonical/OG/sitemap links:

```bash
# .env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Add or edit event appearances

All content lives in one typed file — no code changes needed elsewhere.

1. Open `src/data/appearances.ts`.
2. Add an object to the `appearances` array (shape enforced by `appearances.types.ts`):
   - `title`, `type`, `role`, `city`, `country`, `date` (YYYY-MM-DD)
   - `impact` — one-line outcome shown on hover / on the featured card
   - `audience` — optional attendee count
   - `featured: true` — marks the large hero photo (only one)
   - `cover` — the photo (`src`, `alt`, `width`, `height`, `moment`)
3. Cards sort newest-first automatically; hero stats recalculate from the data.

## Replace placeholder photos with real ones

Placeholders use `picsum.photos`. To use Eddy's real photos:

1. Drop images into `public/appearances/` (e.g. `geneva-cover.jpg`).
2. In `src/data/appearances.ts`, set `src: '/appearances/geneva-cover.jpg'` and a
   descriptive `alt`. Keep `width`/`height` accurate for correct masonry sizing.
3. Add an OG image at `public/og.jpg` (1200×630) for social previews.
4. Remove `picsum.photos` from `next.config.mjs` once no placeholders remain.

## Future-ready

The data layer is intentionally framework-agnostic (`EventAppearance` type), so it can
later be sourced from a CMS or database (e.g. Prisma) returning the same shape — the UI
needs no changes.
