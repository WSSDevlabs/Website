# PROJECT

**What this is:** WSS DevLabs' own marketing/agency website — a premium web & software studio site. Internal project (WSS DevLabs is the owner, not a client).

**Current goal:** Redesign in progress. Target: within 3 days of 2026-08-09 → **2026-08-12**.

**Business pivot (2026-08-09):** Company-wide focus shifted to volume acquisition in the Malaysian SME / traditional business market (hawkers, traders, kedai runcit), alongside the existing premium studio offering. Website now carries a two-tier pricing ladder: SME tier (Starter RM500, Business RM1,500) plus the existing growth tier (Launch RM3,000, Build RM15,000, Enterprise custom). See pricing detail in FINANCE.md and rationale in DECISIONS.md.

**Stack:** Astro 7 · TypeScript · Tailwind CSS v4 · React 19 (R3F hero island only) · GSAP/ScrollTrigger · Lenis · Astro View Transitions · Content Collections (MDX) · Web3Forms (contact) · Cloudflare Pages · Partytown · Cloudflare Web Analytics.

**Structure:** see [README.md](../README.md) and [WSSDevlabs Website Architecture.md](../WSSDevlabs%20Website%20Architecture.md) for the full build spec and flat sitemap.

**Constraints:**
- Content gate: several sections (TrustBar, ImpactStats, Testimonials, Team, Partners, case studies, insights posts, legal/business info in `src/data/site.ts`, self-hosted fonts, default OG image) intentionally stay empty until real content exists — no placeholder/fake trust content ships.
- Design direction: light theme, red/blue/yellow/green accents (per prior design memory).
- Apply the taste-skill (design-taste-frontend) to all frontend work.

**Links:** README.md, WSSDevlabs Website Architecture.md, SERVICE_PRICING_RESEARCH.md (all in project root).
