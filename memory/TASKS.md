# TASKS

## DOING
- Redesign of WSS DevLabs website — target 2026-08-12

## TODO
- [cfo/founder] **Retune the 9 new package prices** — currently exact SWOT (competitor) figures shipped as placeholders per founder request ("put their price first, I will change later"). Update `src/data/pricing.json`, then sync `memory/FINANCE.md` and `grant-assistance-info-sheet.md`'s per-package grant math to match.
- [cfo] Resolve the pricing/scope overlap between the new "10+ Pages" Informative package (RM3,499) and the existing "Launch" growth tier (from RM3,000, up to 8 pages) — not reconciled, flagged in DECISIONS.md
- [uiux/dev] Deeper hero/ServicesGrid copy pass for SME audience (current fix added a grant section + pricing copy; a fuller homepage narrative rewrite is still open if wanted)
- [admin] Fill in real WSS Devlabs details (SSM no., bank account, address) into the new templates before first real client use — legalName/ssmNumber/sstNumber in `src/data/site.json` are still blank (WhatsApp/social/email are already real)
- [pm] Track lead volume once the campaign runs, to validate the new package structure
- [content] `src/content/projects/` is still empty — real case studies would replace the new honest "coming soon" empty state on /work with actual proof
- [content] `src/data/testimonials.ts` is still empty by design (content gate) — add real reviews as they come in via /testimonials, /work, homepage, and service pages (all now correctly wired to the same source)
- [dev] Consider adding a "testimonials" collection to `public/wss-console/config.yml` — it's the only content type not currently editable via the CMS

## BLOCKED
- (none)

## DONE
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
- (earlier history predates this memory system; see git log: "update design", "update", "Reposition as a full digital solutions studio and add a git-based CMS")
