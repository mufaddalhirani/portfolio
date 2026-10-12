# mufaddalhirani.github.io/portfolio

Personal portfolio of **Mufaddal Hirani**: software developer, final-year B.Sc. IT student.

**Live:** https://mufaddalhirani.github.io/portfolio/

## Built with

- [Astro](https://astro.build): static pages, no client framework. The only JavaScript on the site is the theme switch and the video autoplay, together a few hundred bytes.
- Plain CSS with design tokens and light and dark themes.
- Fonts (Instrument Serif, Geist, Geist Mono) are bundled from `@fontsource` and served from this site. No Google Fonts, no CDNs, no analytics, no cookies.
- Images are pre-sized WebP with `srcset`. Demo videos are muted H.264 loops that load only on demand.

## Quality gates

Every push runs [Lighthouse CI](lighthouserc.json) on every page before deploying:
accessibility must score **100**, and best practices and SEO **≥ 95**. Pages target WCAG 2.2 AA:
semantic landmarks, a skip link, visible focus, `prefers-reduced-motion` and colour contrast checked in both themes.

## Run locally

```bash
npm ci
npm run dev       # http://localhost:4321/portfolio/
npm run build     # static output in dist/
```

The CV PDF in `public/cv/` is printed from the `/cv/` page (A4 print stylesheet) with headless Chrome.

## Custom domain

Set `SITE_URL` and `BASE_PATH` (see `astro.config.mjs`), add `public/CNAME`, and point DNS at GitHub Pages.

## License

Code: MIT. Text, photos and screenshots: © Mufaddal Hirani, all rights reserved.
