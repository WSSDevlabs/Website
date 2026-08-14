# TASKS

## DOING
- Redesign of WSS DevLabs website — target 2026-08-12

## TODO
- [founder] Confirm the 4-category service mapping is correct (see PROGRESS.md 2026-08-14) before shipping — it's my grouping, not founder-confirmed.
- [uiux/founder] "Enhance my entire website" was scoped to a color-system pass (matte grey + red/yellow, see docs/DESIGN.md) — confirm whether founder wants more (layout, typography, motion, other icon-grid sections) or this covers it.
- [cfo/founder] **Retune the 9 new package prices** — currently exact SWOT (competitor) figures shipped as placeholders per founder request ("put their price first, I will change later"). Update `src/data/pricing.json`, then sync `memory/FINANCE.md` and `grant-assistance-info-sheet.md`'s per-package grant math to match.
- [cfo] Resolve the pricing/scope overlap between the new "10+ Pages" Informative package (RM3,499) and the existing "Launch" growth tier (from RM3,000, up to 8 pages) — not reconciled, flagged in DECISIONS.md
- [uiux/dev] Deeper hero/ServicesGrid copy pass for SME audience (current fix added a grant section + pricing copy; a fuller homepage narrative rewrite is still open if wanted)
- [admin] Fill in real WSS Devlabs details (SSM no., bank account, address) into the new templates before first real client use — legalName/ssmNumber/sstNumber in `src/data/site.json` are still blank (WhatsApp/social/email are already real)
- [pm] Track lead volume once the campaign runs, to validate the new package structure
- [content] `src/content/projects/` is still empty — real case studies would replace the new honest "coming soon" empty state on /work with actual proof
- [content] `src/data/testimonials.ts` is still empty by design (content gate) — add real reviews as they come in via /testimonials, /work, homepage, and service pages (all now correctly wired to the same source)
- [dev] Consider adding a "testimonials" collection to `public/wss-console/config.yml` — it's the only content type not currently editable via the CMS
- [cmo] No dedicated landing page for the SME campaign — ad copy in `docs/marketing/SME-LAUNCH-CAMPAIGN.md` currently points at the full `/pricing` page instead of a focused page per segment.
- [cmo] Confirm `PUBLIC_CF_ANALYTICS_TOKEN` is actually set in production — blank in `.env.example`, no local `.env`, so analytics status on the live site is unverified.
- [cmo] Capture real customer language (verbatim quotes) from the first SME-tier and growth-tier clients and fold into `.agents/product-marketing.md` v2 — currently empty, flagged as an open section in the doc.

## BLOCKED
- (none)

## DONE
- [2026-08-10] Fixed footer newsletter form (`Footer.astro`) — was `onsubmit="return false;"` (silently dropped every email); wired to Web3Forms with the same pattern as the contact/quote/review forms, plus loading/success/error states.
- [2026-08-10] Verified a 20-item punch list from the founder (navbar hover dropdown, hero quote-form swap, hero CTA copy, Build/Grow/Launch redesign, homepage section reorder, stat corrections, contact-page rework, insights popup-modal system, about-page team/vision-mission changes, testimonials partnership section, FAQ consolidation — full list in PROGRESS.md) — found all 20 already implemented in the working tree from an earlier unlogged session; confirmed each against live-rendered HTML (`astro check`: 0 errors; HTTP 200 + string checks on /, /contact, /about, /testimonials, /faq, /insights). Nothing besides the newsletter form needed a code change.
- [2026-08-09] Researched Malaysia SME digitalisation grants, government AI push, and market pricing benchmarks for websites (cmo/ceo research)
- [2026-08-09] Designed and shipped new SME pricing tier (Starter RM500, Business RM1,500) alongside existing Launch/Build/Enterprise ladder in `src/data/pricing.json` + `pricing.ts`
- [2026-08-09] Rebuilt `/pricing` page into two grouped sections (SME vs growth/custom) with grant messaging and Care Plan callout
- [2026-08-09] Added grant-related FAQ entries and updated turnaround-time FAQ answer
- [2026-08-09] Created 5 new admin document templates (service-agreement, change-request, content-intake-form, care-plan-agreement, grant-assistance-info-sheet) and a standby document checklist in admin/SKILL.md
- [2026-08-09] Logged pricing/business-pivot decisions and rationale in DECISIONS.md, updated FINANCE.md with the full rate card
- [2026-08-09] Found and fixed a real content-gate violation: fabricated client testimonials (fake names/companies) hardcoded across homepage, /testimonials, /work, and every /services/[slug] page, plus 8 fabricated case studies on /work with invented performance metrics — all replaced with the real (currently empty) data source and honest empty states
- [2026-08-09] Surfaced the existing (previously unused-on-homepage) `GrantSolutions` component on the homepage; wired its SME card's CTA to `/pricing`
- [2026-08-09] Corrected initial grant messaging after deeper research: MADANI is a 50% match up to RM5,000 (not full/near-free coverage), first-come-first-served, one claim per business, requires ≥6mo registration and ≥RM50,000 turnover — fixed across pricing.json, faq.json, grant-assistance-info-sheet.md, FINANCE.md
- [2026-08-09] Wrote CMO SME launch campaign (ad copy, WhatsApp broadcast, organic post, 7-day launch sequence) at `docs/marketing/SME-LAUNCH-CAMPAIGN.md`
- [2026-08-09] Verified all changes: `astro check` clean (0 errors) and live HTTP checks on /, /pricing, /work, /testimonials, /services/web-development (all 200, zero fabricated names remaining)
- [2026-08-09] Fetched competitor SWOT's (swot.com.my) live pricing pages per founder's link share; replaced the Starter/Business SME tier with a 9-package ladder (5 "Informative Website Packages" + 4 new "Ecommerce Website Packages") mirroring SWOT's structure and prices exactly, per founder's explicit request — see DECISIONS.md for the supersession log
- [2026-08-09] Extracted repeated pricing-card markup into `src/components/sections/PricingCard.astro` (now reused across 3 grouped sections instead of duplicated inline)
- [2026-08-09] Confirmed WSS already has a live git-based CMS (Decap CMS at `/wss-console`, GitHub-backed via a working Cloudflare Worker OAuth proxy) covering 9 of 10 content types — testimonials is the one gap
- [2026-08-09] Ran a full CMO audit of the website (`/cmo` skill) and gave a prioritized list of gaps: zero proof content, broken newsletter form, fictional career-page team/perks, no positioning doc, no dedicated campaign landing page, unconfirmed analytics, no booking link
- [2026-08-09] Removed the career page per founder decision: deleted `src/pages/career.astro`, `src/data/career.json`, `src/data/career.ts`; removed its 2 nav links (`nav.ts`) and its CMS collection (`public/wss-console/config.yml`); verified `/career` now 404s cleanly and nothing else references it
- [2026-08-09] Auto-drafted the product-marketing positioning doc at `.agents/product-marketing.md` (v1) from the codebase + this session's history, per founder request; added `memory/MARKETING.md` as the memory-system pointer to it. Flagged 3 open issues in the doc itself: zero proof content, the fictional About-page team roster, and placeholder SWOT-matched pricing
- (earlier history predates this memory system; see git log: "update design", "update", "Reposition as a full digital solutions studio and add a git-based CMS")
