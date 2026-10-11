# PROJECT

**What this is:** WSS DevLabs' own website. Internal project (WSS DevLabs is the owner, not a client).

**Current state (2026-10-12):** Fully rebuilt from the founder's audit of 11 Oct 2026 ("follow it 100%, full authority"). Work is on branch `audit-rebuild`, committed, **not pushed** (push only when the founder says "push"; deploying = merging to main).

**Positioning:** "Software you own. Not rent." Fixed-price websites and ready-made business systems for Malaysian SMEs (5 to 100 staff). See `.agents/product-marketing.md` (v2).

**Structure (7 pages):** Home, /websites/, /systems/ (+ 15 system pages + 2 ecosystem pages), /custom/, /about/, /contact/, /insights/. Legal in the footer: /privacy/ (EN + BM), /terms/, /licence/, /refunds/, /care-plan-terms/, /cookies/. Old URLs redirect via `public/_redirects`.

**Stack:** Astro 7 (static) · TypeScript · Tailwind CSS v4 · MDX · Web3Forms · Decap CMS at /wss-console/ · Cloudflare Pages · Cloudflare Web Analytics (cookieless) · Zaraz hooks for conversion events. No React, GSAP, Lenis, Three.js or Partytown any more.

**Key files:**
- Prices: `src/data/catalog.ts` (the only place)
- Systems and their statuses: `src/data/systems.ts`
- Ecosystems: `src/data/ecosystems.ts`
- Company facts and Founding Client counter: `src/data/site.json`
- Security headers: `public/_headers`

**Constraints:**
- No fake proof: no placeholders, mock demos, invented stats, logos or reviews. Proof sections render only from real data with permission on file.
- One light theme, brand red as the only action colour, green only for WhatsApp. Design rules: `docs/DESIGN.md`.
- Strict CSP: no inline scripts (vite `assetsInlineLimit: 0`).
- No em dashes in visible copy.

**Docs:** `docs/audit/` (implementation checklist, founder actions), `docs/legal/` (contract drafts for lawyer review), `docs/business/`, `docs/ops/`.
