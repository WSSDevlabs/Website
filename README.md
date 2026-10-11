# WSS DevLabs website

Fixed-price websites and ready-made business systems for Malaysian SMEs. **Software you own. Not rent.**

Rebuilt in October 2026 from the full website audit: 22 pages became 7, every price lives in one file, and nothing on the site claims more than we can prove. What changed, item by item, is in [docs/audit/implementation-checklist.md](docs/audit/implementation-checklist.md). What still needs you is in [docs/audit/founder-actions.md](docs/audit/founder-actions.md).

## Stack

Astro 7 (static) · TypeScript · Tailwind CSS v4 · MDX · Web3Forms (contact form) · Decap CMS (`/wss-console/`) · Cloudflare Pages · Cloudflare Web Analytics (cookieless). No client-side framework, no animation libraries.

## Site map

| Page | File | What it is |
|---|---|---|
| `/` | `src/pages/index.astro` | Hero, three-way chooser, own vs rent, how it works, founder, FAQ, Founding Client offer |
| `/websites/` | `src/pages/websites.astro` | 3 website packages, add-ons, Go Digital Bundle, Care Plans |
| `/systems/` | `src/pages/systems/index.astro` | Rent vs own calculator, ecosystems, the 15 public systems |
| `/systems/[slug]/` | `src/pages/systems/[slug].astro` | One page per public system and per published ecosystem |
| `/custom/` | `src/pages/custom.astro` | Discovery Sprint, custom builds, Rescue Audit, mobile apps |
| `/about/` | `src/pages/about.astro` | Founder, mission, principles, story, company details |
| `/contact/` | `src/pages/contact.astro` | 4-field form; also the order request for systems (`?order=wss-pos`) |
| `/insights/` | `src/pages/insights/` | Articles (footer link) |
| Legal | `privacy`, `terms`, `licence`, `refunds`, `care-plan-terms`, `cookies` | Footer links only |

Old URLs are redirected in [public/_redirects](public/_redirects). Security headers are in [public/_headers](public/_headers).

## Where things live

| To change... | Edit |
|---|---|
| **Any price** | `src/data/catalog.ts` (the only place prices exist) |
| Which systems are public, their text and FAQs | `src/data/systems.ts` |
| Ecosystem packages (Smart Premises, Smart Outlet, ...) | `src/data/ecosystems.ts` |
| Company details, SSM number, address, Founding Client places left | `src/data/site.json` (or the CMS) |
| Founder photo, name and bio | `src/data/team.json` (or the CMS) |
| Client reviews | `src/data/testimonials.json` (or the CMS); shown only with permission on file |
| Case studies | `src/content/case-studies/` (or the CMS); shown only when not draft and permission is on file |
| Articles | `src/content/posts/` |
| FAQs | `src/data/faqs.ts`, plus `extraFaq` per system |
| Design tokens and rules | `src/styles/global.css`, [docs/DESIGN.md](docs/DESIGN.md) |

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `astro dev --background` | Start the dev server in the background (`astro dev stop` to stop) |
| `npm run build` | Type-check, then build to `./dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint with ESLint |

## Environment variables

Copy `.env.example` to `.env`:

- `PUBLIC_WEB3FORMS_ACCESS_KEY`: required for the contact and order forms.
- `PUBLIC_CF_ANALYTICS_TOKEN`: optional. Use it **or** Cloudflare's automatic Web Analytics setup, not both.
- `PUBLIC_SITE_URL`: canonical site URL.

## Documents

- [docs/audit/](docs/audit/): the audit implementation record and the founder's to-do list
- [docs/legal/](docs/legal/): contract templates and policies for a lawyer to review
- [docs/business/](docs/business/): sales playbook, marketing plan, pricing and margins, claims evidence, ecosystem readiness
- [docs/ops/](docs/ops/): deploy checklist and compliance controls
- [docs/archive/](docs/archive/): superseded documents, kept for history
