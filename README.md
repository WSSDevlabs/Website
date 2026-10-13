# WSS DevLabs — Website

Fixed-price websites and ready-made business systems for Malaysian SMEs. Design system: [docs/DESIGN.md](./docs/DESIGN.md). October 2026 audit status: [docs/audit/](./docs/audit/).

## Stack

Astro · TypeScript · Tailwind CSS v4 · React (R3F island only) · GSAP/ScrollTrigger · Lenis · Motion · Astro View Transitions · Content Collections (MD/MDX) · Web3Forms · Cloudflare Pages · Partytown · Cloudflare Web Analytics · Botpress chat · Decap CMS (`/wss-console/`).

## Pages

Home · `/websites/` · `/systems/` (+ 15 system pages and 2 complete solutions) · `/custom/` · `/about/` · `/contact/` · `/insights/` · legal: `/privacy/`, `/terms/`, `/licence/`, `/refunds/`, `/care-plan-terms/`, `/cookies/`. Old URLs redirect via `public/_redirects`; security headers in `public/_headers`.

## Project structure

```text
src/
├── components/
│   ├── layout/       Header (floating icon nav + mobile menu), TopBar, Footer, CookieConsent, SiteIntro
│   ├── sections/     Page sections (Hero, OfferChooser, HomeOwnership, ElevateCTA, CarePlans, calculators, FAQ, CTABand, EcosystemPage, ...)
│   ├── legal/        LegalLayout, LegalSection, LegalIdentity
│   ├── content/      Components used inside MDX articles
│   ├── seo/          SEO meta + JSON-LD
│   ├── ui/           Primitives (Container, Section, Email, SocialIcon, InteractiveDevicePreview, ...)
│   └── three/        R3F hero scene island + GLSL shaders
├── content/posts/    Insights articles (Content Collection)
├── data/
│   ├── catalog.ts    THE price catalogue: every price on the site comes from here
│   ├── systems.ts    All 41 systems with their status (15 public)
│   ├── ecosystems.ts Complete solutions (Smart Premises, Smart Outlet; 2 unpublished)
│   ├── faqs.ts       FAQs per page
│   ├── site.json     Company settings (CMS-editable): identity, contact, founding places left
│   └── nav.ts, team.json, testimonials.ts, partners.json
├── layouts/          BaseLayout, ArticleLayout
├── lib/              SEO and structured-data helpers
├── scripts/          Motion, email reveal, Botpress loader, click tracking
└── pages/            Routes
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

- `PUBLIC_WEB3FORMS_ACCESS_KEY` — the contact and home page forms send through Web3Forms with this key (without it, the contact form falls back to the visitor's email app).
- `PUBLIC_CF_ANALYTICS_TOKEN` — Cloudflare Web Analytics, loaded only after a visitor clicks Allow on the cookie banner. Turn off Cloudflare's automatic injection so the banner is the only route.
- `PUBLIC_SITE_URL` — canonical site URL.

## Content gate

Nothing fake ships. These stay empty or hidden until real content exists:

- `src/data/site.json` — registered name, SSM number, registered address (footer, About, policies and schema fill in automatically).
- `src/data/testimonials.ts` — real reviews only, with permission; the reviews section stays hidden until there's one.
- `src/data/partners.json` — real client or partner logos only, with written permission.
- `src/data/systems.ts` — `media` (real screenshots) and `videoUrl` (real screen recording) per system; the product page preview shows them automatically.
- `src/data/team.json` — the founder photo for the About page.

Before deploying, run through [docs/ops/deploy-checklist.md](./docs/ops/deploy-checklist.md).
