// @ts-check
import { defineConfig } from 'astro/config'

// GitHub Pages serves this repo at /portfolio/. When a custom domain is added,
// set SITE_URL to it and BASE_PATH to "/" (or just change the defaults below).
const site = process.env.SITE_URL ?? 'https://mufaddalhirani.github.io'
const base = process.env.BASE_PATH ?? '/portfolio'

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
})
