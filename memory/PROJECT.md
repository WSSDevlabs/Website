# PROJECT

**What this is:** WSS DevLabs' own marketing website. Internal project (WSS DevLabs is the owner, not a client).

**Current state (2026-10-14):** the founder's October 2026 audit is implemented on top of the existing design. Positioning: **"Software you own. Not rent."** Fixed-price websites and ready-made business systems for Malaysian SMEs (5 to 100 staff), plus custom builds. Founder-led by Razali.

**Pages:** Home · /websites/ · /systems/ (15 public systems + 2 complete solutions as pilots: Smart Premises, Smart Outlet) · /custom/ · /about/ · /contact/ · /insights/ · legal: /privacy/ (EN + BM), /terms/, /licence/, /refunds/, /care-plan-terms/, /cookies/. Old URLs (/express/, /marketplace/, /services/, /testimonials/, /coming-soon/) 301 via `public/_redirects`.

**Source of truth for prices:** `src/data/catalog.ts` (never retype prices). Systems: `src/data/systems.ts`. Complete solutions: `src/data/ecosystems.ts`. FAQs: `src/data/faqs.ts`. Company settings: `src/data/site.json` (CMS).

**Stack:** Astro 7 · TypeScript · Tailwind CSS v4 · React 19 (R3F island, currently unused) · GSAP/ScrollTrigger · Lenis · Motion · Astro View Transitions · Content Collections (MD/MDX) · Web3Forms · Cloudflare Pages · Partytown · Cloudflare Web Analytics · Botpress chat · Decap CMS at /wss-console/.

**Constraints:**
- **Design rule (founder, 2026-10-14):** change content, descriptions, pages and structure freely, but keep the UI, style, design, buttons, effects and transitions (floating icon nav, top bar, intro animation, cookie banner, Botpress bubble, red badge highlights, GSAP motion, hover-reveal category browser). New pages are built from existing section designs. Design reference: `docs/DESIGN.md`.
- Content gate: no fake proof. Legal identity, reviews, partner logos, case studies, screenshots and the founder photo stay empty or hidden until real.
- Push only when the founder says "push". No "Co-Authored-By: Claude" in commits.

**Links:** README.md · docs/DESIGN.md · docs/audit/ (checklist + founder actions) · docs/legal/ · docs/business/ · docs/ops/deploy-checklist.md · .agents/product-marketing.md
