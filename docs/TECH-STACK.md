# WSS DevLabs website: tech stack and third-party services

Source: `package.json`, `astro.config.mjs`, `.env.example` and the source tree, as of 2026-10-17.

## Core stack

| Layer | What |
|---|---|
| Framework | Astro 7 (static site), TypeScript 6, Node 22.12+ |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`, `@tailwindcss/typography`) |
| Fonts | Geist, Geist Mono, Outfit, Space Grotesk (self-hosted via Fontsource) |
| UI islands | React 19 (3D scenes only) |
| Motion | GSAP + ScrollTrigger, Lenis (smooth scroll), Motion, Astro View Transitions |
| 3D | Three.js, React Three Fiber, Drei, postprocessing |
| Maps | Leaflet |
| Content | Astro Content Collections (MD/MDX) for Insights posts |
| SEO | `@astrojs/sitemap`, JSON-LD schema per page |
| Performance | Partytown (third-party scripts off the main thread) |
| Quality | `astro check` (runs inside `npm run build`), ESLint, Prettier |

## Third-party services

| Service | Used for | Config |
|---|---|---|
| Cloudflare Pages | Hosting and deploy (per project notes; no config file in the repo) | Cloudflare dashboard |
| Cloudflare Web Analytics | Visitor stats | `PUBLIC_CF_ANALYTICS_TOKEN` |
| Cloudflare Email Address Obfuscation | Dashboard setting that rewrites emails in HTML. Code works around it. | Cloudflare dashboard, Speed > Optimization |
| GitHub | Source repo `WSSDevlabs/Website` | |
| Web3Forms | Contact, quote and newsletter forms | `PUBLIC_WEB3FORMS_ACCESS_KEY` |
| Botpress Cloud | Chatbot, bottom-right corner | `src/scripts/botpressLoader.ts` |
| WhatsApp (`wa.me`) | Chat buttons | `src/data/site.json` |
| YouTube (nocookie) | Insights videos, loaded on click | |
| Mixkit | Stock video clips, hotlinked from `assets.mixkit.co` | `src/data/media.ts` |
| Unsplash | Stock photos, hotlinked | `src/data/*.ts` |
| Social links | LinkedIn, Instagram, TikTok, Facebook (links only) | `src/data/site.json` |
| `demo.wssdevlabs.com` | Demo subdomain, linked from the site | |

## Removed on 2026-10-17

- Decap CMS (`/wss-console`), loaded from unpkg.com.
- The `cms-oauth-worker` Cloudflare Worker (`wss-cms-auth`), which handled the GitHub login for the CMS.
- Still to do by hand: delete the deployed Worker in the Cloudflare dashboard, and delete the GitHub OAuth App that held `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`.

## Risks

1. Mixkit and Unsplash are hotlinked. If either blocks it, media breaks. Self-host the clips in `/public/videos`.
2. No `.env` is committed, so confirm `PUBLIC_WEB3FORMS_ACCESS_KEY` and `PUBLIC_CF_ANALYTICS_TOKEN` are set in the Cloudflare Pages project.
3. Content is now edited in code only (`src/data`, `src/content`) and pushed through git.
