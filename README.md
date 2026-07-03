# WSS DevLabs — Website

Premium web & software studio site. Build spec: [WSSDevlabs Website Architecture.md](./WSSDevlabs%20Website%20Architecture.md).

## Stack

Astro · TypeScript · Tailwind CSS v4 · React (R3F island only) · GSAP/ScrollTrigger · Lenis · Astro View Transitions · Content Collections (MDX) · Web3Forms · Cloudflare Pages · Partytown · Cloudflare Web Analytics.

## Project structure

```text
src/
├── components/
│   ├── layout/      Header, Footer, WhatsAppButton, CookieConsent
│   ├── seo/          SEO meta + JSON-LD
│   ├── sections/     Reusable page sections (Hero, ServicesGrid, CTABand, FAQ, ...)
│   ├── ui/           Primitives (Button, Card, Badge, Container, Section)
│   ├── forms/        ContactForm (Web3Forms)
│   └── three/         R3F hero scene island + GLSL shaders (desktop-only, lazy)
├── content/
│   ├── projects/      Case studies (Content Collection)
│   └── posts/          Insights/blog (Content Collection)
├── content.config.ts  Content Collection schemas (glob loader)
├── data/              Static structured content (services, nav, faq, process, site constants)
├── layouts/           BaseLayout, ServiceLayout, ArticleLayout
├── lib/               SEO helpers
└── pages/             Routes — mirrors the flat sitemap in the architecture doc
```

## Commands

| Command                | Action                               |
| :--------------------- | :----------------------------------- |
| `npm install`          | Install dependencies                 |
| `npm run dev`          | Start local dev server               |
| `npm run build`        | Type-check, then build to `./dist/`  |
| `npm run preview`      | Preview the production build locally |
| `npm run lint`         | Lint with ESLint                     |
| `npm run format`       | Format with Prettier                 |
| `npm run format:check` | Check formatting without writing     |

## Environment variables

Copy `.env.example` to `.env` and fill in:

- `PUBLIC_WEB3FORMS_ACCESS_KEY` — required for the contact form to submit.
- `PUBLIC_CF_ANALYTICS_TOKEN` — optional, enables Cloudflare Web Analytics via Partytown.
- `PUBLIC_SITE_URL` — canonical site URL.

## Content gate

Several sections are intentionally empty until real content exists (per the architecture doc's content gate — no placeholder/fake trust content ships):

- `src/data/site.ts` — legal name, SSM/SST numbers, email, WhatsApp, phone, address, hours, socials.
- `src/content/projects/` — case studies (drives Featured Work, Work grid, relevant-work on service pages).
- `src/content/posts/` — Insights articles.
- Home page `TrustBar`, `ImpactStats`, `Testimonials` — pass data via props once real.
- About page `Team`, `Partners` — pass data via props once real.
- `public/images/og/default.png` — default 1200×630 OG image.
- `public/fonts/` — self-hosted variable font files (referenced via `--font-sans` in `src/styles/global.css`; currently falls back to system fonts).
