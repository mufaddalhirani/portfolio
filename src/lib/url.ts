/** Prefix an internal path with the site's base path ("/portfolio/" on GitHub Pages). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '')
  const clean = path.replace(/^\/+/, '')
  return `${base}/${clean}`
}

export const site = {
  name: 'Mufaddal Hirani',
  role: 'Software developer',
  email: 'mufaddalhirani7@gmail.com',
  github: 'https://github.com/mufaddalhirani',
  linkedin: 'https://www.linkedin.com/in/mufaddal-hirani/',
  location: 'Vasai (Mumbai area), India',
  updated: 'October 2026',
}
