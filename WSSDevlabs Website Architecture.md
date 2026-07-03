# WSS DevLabs — Master Build Specification (v2)

**For:** AI coding copilot (Claude Code / Cursor)
**Project:** Premium web & software studio site.
**Offering:** Websites, **mobile apps**, custom business systems (CMS/ERP), **AI-powered software**, UI/UX, and maintenance — for startups and growing companies.
**Build philosophy:** SEO-first, performance-led, futuristic _within_ a strict mobile performance budget. Built from scratch, typed, clean.
**Theme:** Black matte, dark mode. Red is the dominant brand accent (CTAs, primary actions); matte blue and matte yellow are supporting accents used for category/service-group coding (badges, tags, hero eyebrows) — never as competing primary actions.

> **Governing principle.** This site's speed IS the product demo. Competitors run WordPress/Elementor; our custom build being measurably faster is the competitive wedge. "Futuristic" = most premium feel per kilobyte, never maximalist effects. Every animation/3D element is lazy-loaded, `prefers-reduced-motion`-guarded, mobile-light/static. Lighthouse after each layer; if mobile Performance < 90 or LCP > 2.5s, trim the last addition. Dark-mode-futuristic is won on sharp oversized type, whitespace, hairline detail, one dominant red accent plus two restrained supporting accents (blue/yellow), precise micro-interactions, and a single restrained 3D moment.

> **IMPORTANT distinction for the copilot.** PART 1 below is the stack used to BUILD THIS MARKETING SITE (Astro/TypeScript/GSAP). The services WSS DevLabs SELLS (mobile apps, AI, ML) are delivered to clients with different technologies (React Native/Flutter, Python, etc.) — those appear only as showcased _capabilities content_ on the site, NOT as the build stack for this site. Do not build this site in React Native or introduce ML tooling into it.

---

# PART 1 — TECH STACK (for building THIS site — locked)

## Foundation

- **Astro** — static-first, islands, near-zero JS by default. The base; do not substitute.
- **TypeScript** — typed from line one.
- **Tailwind CSS** — CSS-variable theme tokens (white/red/black).
- **Astro Content Collections** — projects, case studies, blog posts as typed content (Markdown/MDX), not hardcoded.

## Futuristic interaction layer

- **GSAP + ScrollTrigger** — scroll choreography, pinned sections, timeline reveals. In an island.
- **Lenis** — weighted smooth-scroll. Respect reduced-motion.
- **Astro View Transitions** — SPA-like seamless navigation while static.
- **Native CSS scroll-driven animations** — zero-JS cheap wins.
- **React Three Fiber + drei + @react-three/postprocessing** — ONE hero 3D moment, lazy island, single bloom/glow, desktop-only.
- **Custom GLSL shader** (hero only) — animated gradient mesh / particle field. Static poster fallback; mobile gets poster.
- **Variable fonts**, self-hosted.
- Optional: subtle SVG/CSS grain overlay.

## Forms, infra, quality

- **Web3Forms** (serverless, no backend). Key in `.env`. Upgrade path: Resend + Cloudflare Pages Functions.
- **Cloudflare Pages** + GitHub.
- **astro:assets / Sharp** — WebP/AVIF, explicit width/height.
- **Partytown** — analytics off the main thread.
- **Cloudflare Web Analytics** — privacy-friendly, no cookie banner.
- **ESLint + Prettier** from the start.

## Anti-patterns — DO NOT use

- Spline / any ~1MB+ 3D runtime. No countdown/urgency gimmicks. No fake scale (empty counters, unearned certs/logos). No template-builder bloat. Don't run GSAP + Framer Motion both heavily.

---

# PART 2 — SITE ARCHITECTURE

> ⚑ = requires REAL content before that page ships. Trust comes from demonstrated speed + direct-with-the-engineer, not borrowed scale. **Only advertise services you can credibly deliver** — listing a capability is a promise.

## URL / Sitemap (flat — every page ≤ 2 clicks from home)

```
/
/services
/services/web-development
/services/mobile-app-development      (NEW)
/services/custom-systems              (CMS / ERP)
/services/ai-development              (NEW — AI integration / AI-powered apps / ML)
/services/ui-ux-design
/services/maintenance-support
/work
/work/[project-slug]
/about
/process
/contact
/insights
/insights/[article-slug]
/privacy
/terms
/cookies
```

## Service taxonomy (6 services, grouped for clean IA)

- **Build:** Web Development · Mobile App Development · Custom Systems (CMS/ERP)
- **Intelligence:** AI Development (integration, LLM-powered apps, automation; ML where genuinely offered)
- **Design & Care:** UI/UX Design · Maintenance & Support

## Global elements (every page)

- **Header / sticky nav** — logo (left); nav: Services, Work, About, Process, Insights, Contact; CTA "Start a Project" (right); accessible mobile hamburger.
- **Footer (trust block)** — logo + tagline; quick links; services links; contact (email, WhatsApp, address); social; **SSM registration number**; SST number if registered; legal links; copyright.
- **Floating WhatsApp button** — fixed bottom-right, never overlaps CTAs on mobile.
- **PDPA / cookie consent** — first visit.

## SEO head per page

Unique title; meta description; canonical; OpenGraph (title, description, image 1200×630, url, type, site_name, locale `en_MY`); Twitter card; robots; **geo meta** (`geo.region`, `geo.placename`, `geo.position`, `ICBM`); `theme-color`. JSON-LD: `LocalBusiness` (home/contact), `Article` (blog), `BreadcrumbList` (deep pages). One `<h1>` per page. sitemap.xml + robots.txt.

> Expand keyword targeting to include mobile app development and AI development terms alongside web/CMS/ERP.

---

## 1. HOME `/`

1. **Hero** — headline, sub-headline, primary CTA + secondary link, 3D element (static poster as LCP; shader layered after interactive via IntersectionObserver). Headline should now reflect the fuller scope (web, mobile, systems, AI).
2. **Trust bar** ⚑ — real client logos.
3. **Who we work with** — Startups launching / SMEs growing / Companies needing custom systems or AI.
4. **Services overview** — 6 cards in the grouped taxonomy (Web, Mobile, Custom Systems, AI, UI/UX, Maintenance). Use a 2×3 / 3×2 grid; each → its service page.
5. **The differentiator** — real engineering, custom not templated, direct-with-the-builder, performance-obsessed.
6. **How we work: Strategize → Build → Evolve** — three-phase model; links to /process.
7. **Featured work** ⚑ — 2–3 best case studies → /work.
8. **Capabilities / tech we build with** — showcase the DELIVERY technologies: web (Astro/React/Next), mobile (React Native/Flutter/native), systems (CMS/ERP), AI (LLM APIs, automation, ML where offered). This is where mobile + AI competence is signalled. List only what you can deliver.
9. **Impact / stats** ⚑ — real numbers only; omit until honest.
10. **Testimonials** ⚑.
11. **CTA band** + WhatsApp.
12. **FAQ (condensed).**
13. **Contact teaser.**

## 2. SERVICES (pillar) `/services`

1. Hero. 2. Services grid (6, grouped). 3. Strategize → Build → Evolve. 4. Who we work with. 5. Why choose WSS DevLabs. 6. Featured related work ⚑. 7. CTA band.

### Service child page template (×6)

web-development · mobile-app-development · custom-systems · ai-development · ui-ux-design · maintenance-support

1. Hero — the service, value prop, CTA.
2. Overview — what it is, problem it solves.
3. What's included / deliverables.
4. Our approach.
5. Tech / tools used (service-specific: e.g. mobile → React Native/Flutter/Swift/Kotlin; AI → LLM APIs, RAG, automation, ML frameworks where offered).
6. Relevant work ⚑.
7. Process for this service.
8. Pricing — "from RM___" or request a quote (lean quote-based).
9. Service-specific FAQ.
10. CTA band.

> For mobile-app-development and ai-development pages specifically: be precise about scope (native vs cross-platform; AI integration vs custom ML). Vague claims read as amateur to technical buyers.

## 3. WORK / PORTFOLIO (pillar) `/work`

1. Hero. 2. Filter bar — by type (Web / Mobile / System / AI) once enough projects. 3. Project grid ⚑. 4. CTA band.

### Case study page template `/work/[project-slug]` ⚑

1. Hero (name, client, category, hero image, headline result). 2. Overview (client, industry, timeline, services). 3. Challenge. 4. Solution. 5. Process. 6. Tech stack. 7. Results ⚑ (measurable). 8. Gallery ⚑. 9. Testimonial ⚑. 10. Next project. 11. CTA band.

## 4. ABOUT `/about`

1. Hero (mission). 2. Story. 3. Approach & values. 4. The team / the person ⚑ (real face + credentials). 5. Why work with us. 6. Partners / certifications — empty until earned. 7. CTA band.

## 5. PROCESS `/process` (Strategize → Build → Evolve)

1. Hero (promise: clear scope, honest timelines). 2. Strategize (discovery, requirements, design, roadmap; for AI: feasibility/readiness assessment). 3. Build (development, integration, QA). 4. Evolve (launch, support, optimisation; for AI: tuning/retraining where offered). 5. Timeline expectations. 6. What you get (ownership, handover, docs). 7. Process FAQ. 8. CTA band.

## 6. CONTACT `/contact`

1. Hero — "Let's build something" + response-time promise.
2. **Lead-qualifying form** (Web3Forms):
   - Name, Email, Phone (optional), Company (optional)
   - **Project type** (multi-select: Website / Mobile App / Custom System (CMS/ERP) / AI Development / UI/UX / Maintenance / Not sure)
   - Budget range (select)
   - How did you hear about us? (select)
   - Message
   - PDPA consent checkbox (required)
   - Send — loading state, inline success/error, no reload, honeypot, aria-live.
3. Direct contact panel — email, WhatsApp, phone.
4. Office ⚑ — address, hours, static map image.
5. Contact FAQ.

## 7. INSIGHTS / BLOG `/insights`

Listing: hero, featured post, post grid, filter/pagination. Article: hero (title/author/date/reading time/cover), body, author bio, related posts, CTA band.

## 8. LEGAL

`/privacy` (PDPA 2010), `/terms`, `/cookies`.

---

# PART 3 — CROSS-CUTTING REQUIREMENTS (every page)

- **SEO:** unique title/meta/OG + geo meta; one `<h1>`; semantic HTML; JSON-LD; sitemap.xml; robots.txt; descriptive URLs; keywords cover web + mobile + AI + systems.
- **Performance:** static-first; lazy-load 3D/heavy; WebP/AVIF with dimensions; mobile LCP < 2.5s; Lighthouse ≥ 90 mobile (100 on static). The wedge — protect ruthlessly.
- **Accessibility:** keyboard-nav; visible focus; alt text; `prefers-reduced-motion`; WCAG AA contrast.
- **Animation discipline:** lazy, reduced-motion-guarded, mobile-light; animate transform/opacity only.
- **Conversion:** clear CTA per page; WhatsApp always reachable.
- **Security:** no secrets client-side; `.env` gitignored.

---

# PART 4 — BUILD SEQUENCE (ship in waves; Lighthouse between layers)

**Phase 0 — Clean foundation:** Scaffold Astro (minimal + TypeScript), Tailwind, @astrojs/sitemap, @astrojs/react (R3F island only), Content Collections (projects + posts), ESLint/Prettier, theme tokens. Deploy empty shell to Cloudflare Pages. Baseline Lighthouse ~100. Commit.

**Phase 1 — Wave 1 pages (static):** Home, Services pillar, Work pillar + 2–3 case studies, About, Contact, Privacy/Terms. Nav + footer + flat URLs + full SEO head. Web3Forms. WhatsApp. Complete, credible, rankable. Lighthouse, commit.

**Phase 2 — Futuristic layer (wow-per-kilobyte):** (a) CSS scroll animations + variable fonts + grain. (b) Lenis + GSAP/ScrollTrigger + View Transitions. (c) ONE R3F + GLSL shader hero, lazy + desktop-only + poster fallback. Lighthouse after each; trim if mobile <90 or LCP >2.5s. Commit per step.

**Phase 3 — Depth & compounding:** All 6 service child pages, Process page, more case studies, Insights/blog. Certifications & stats only when real.

---

# CONTENT GATE (the real bottleneck — not code)

Before each ⚑ ships: real case studies (challenge/solution/results/gallery/quote), real client logos, real testimonials, team photo + bio, office address/hours/map, real stats, SSM registration number. **And: only list mobile/AI/ML services you can genuinely deliver — capability claims are promises.** Structure builds ahead of content; no ⚑ launches with placeholders.
