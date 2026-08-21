# TASKS

## DOING
- Redesign of WSS DevLabs website — original target 2026-08-12 (passed; work continued past it, including a week of founder-driven work on 2026-08-15–17 done outside this memory system, reconciled 2026-08-21 — see PROGRESS.md).

## TODO
- [founder] **Confirm the "Natasya Umairah" / "Razin Hakim" names in `docs/DESIGN.md`** — the doc credits them as real Lead Specialists (Front-End/UI-UX and Full-Stack/Backend). `memory/CLIENT.md` states WSS DevLabs is a one-person company (founder only). Same pattern as prior fabricated-content incidents in this project (testimonials, About-page team, career-page team — all found and removed). Confirm real vs. fabricated before this ships anywhere client-facing.
- [founder] Confirm which design direction is current: this session's "Industrial Concrete" pass (dark/red-primary/sharp corners) or the later "light off-white theme" + side-nav-rail work from 2026-08-15–17. Some elements of both currently coexist in the codebase (e.g. red accent + grain survived, but background went back to near-white and corners went back to soft).
- [founder] Confirm the 4-category service mapping is correct (see PROGRESS.md 2026-08-14) before shipping — it's my grouping, not founder-confirmed.
- [cfo/founder] Confirm the 5-package names (Launch/Expand/Grow/Scale/Custom) and prices (RM1,200 / RM4,500 / RM12,000 / From RM28,000 / Custom) — placeholders, not founder-confirmed. See DECISIONS.md 2026-08-14 supersession entry.
- [media] Founder will source the real "laptop, komputer, mobile app real design" image from their media designer to replace the homepage placeholder in `WhateverYouNeed.astro` — unclear if this survived the 2026-08-15–17 homepage changes ("3-pillar package cards," "new hero contact form"); needs a fresh look.
- [uiux/dev] Deeper hero/ServicesGrid copy pass for SME audience (current fix added a grant section + pricing copy; a fuller homepage narrative rewrite is still open if wanted)
- [admin] Fill in real WSS Devlabs details (SSM no., bank account, address) into the new templates before first real client use — legalName/ssmNumber/sstNumber in `src/data/site.json` are still blank (WhatsApp/social/email are already real)
- [pm] Track lead volume once the campaign runs, to validate the new package structure
- [content] `src/content/projects/` is still empty — real case studies would replace the "coming soon" empty state on /work with actual proof
- [content] `src/data/testimonials.ts` is still empty by design (content gate) — add real reviews as they come in
- [dev] Consider adding a "testimonials" collection to `public/wss-console/config.yml` — it's the only content type not currently editable via the CMS
- [cmo] No dedicated landing page for the SME campaign — ad copy in `docs/marketing/SME-LAUNCH-CAMPAIGN.md` currently points at the full `/pricing` page instead of a focused page per segment.
- [cmo] Confirm `PUBLIC_CF_ANALYTICS_TOKEN` is actually set in production — blank in `.env.example`, no local `.env`, so analytics status on the live site is unverified.
- [cmo] Capture real customer language (verbatim quotes) from the first SME-tier and growth-tier clients and fold into `.agents/product-marketing.md` v2 — currently empty, flagged as an open section in the doc.
- [dev] New pages found unlogged in the repo (`express.astro`, `marketplace/`, `status.astro`) and a new side-nav-rail navigation component from the 2026-08-15–17 work — not yet reviewed against the content gate or cross-checked against `nav.ts`/`Header.astro`.

## BLOCKED
- (none)

## DONE
- [2026-08-15–17, unlogged — reconstructed from git log 2026-08-21] Founder built (from another IDE/session, outside this memory system): an "SME market entry blueprint" adding `express.astro`, `marketplace/`, `status.astro`; converted the top nav to a floating icon side-rail navigation with hover detail cards (several sizing/positioning follow-up commits); removed the "Malaysian brand trust grid" and "Direct Builder Philosophy" footer bar; overhauled `/work` with an interactive prototype viewer, flagship client builds, and sprint methodology; and a final pass moving the theme toward "light off-white," adding date-time scheduling and a new hero contact form, and "3-pillar package cards." Full detail not available — this is a summary from commit messages only, not a first-hand account. See PROGRESS.md 2026-08-21 entry.
- [2026-08-14] Consolidated 14 individual service pages into 4 category pages; ran the "Industrial Concrete" design pass (red primary accent, concrete-grey palette, sitewide grain, sharpened corners, structural hero motifs); replaced the 12-tier pricing grid with 5 stage-based packages (Launch/Expand/Grow/Scale/Custom); removed Process FAQ section; made homepage nav transparent; replaced homepage 3-card grid with an image placeholder; force-pushed history rewrite to strip a Co-Authored-By: Claude trailer per founder request. Full detail in PROGRESS.md 2026-08-14 entries.
- [2026-08-10] Fixed footer newsletter form (`Footer.astro`) — was `onsubmit="return false;"` (silently dropped every email); wired to Web3Forms with the same pattern as the contact/quote/review forms, plus loading/success/error states.
- [2026-08-10] Verified a 20-item punch list from the founder — found all 20 already implemented in the working tree from an earlier unlogged session; confirmed each against live-rendered HTML.
- [2026-08-09] Researched Malaysia SME digitalisation grants, government AI push, and market pricing benchmarks for websites (cmo/ceo research)
- [2026-08-09] Designed and shipped new SME pricing tier (Starter RM500, Business RM1,500) — later superseded by the SWOT-matched 9-tier structure, then superseded again by the 2026-08-14 5-package structure.
- [2026-08-09] Added grant-related FAQ entries and updated turnaround-time FAQ answer
- [2026-08-09] Created 5 admin document templates and a standby document checklist in admin/SKILL.md — note: these templates were later found deleted from disk (flagged mid-August, cause unconfirmed).
- [2026-08-09] Found and fixed a real content-gate violation: fabricated client testimonials and case studies across the site — replaced with the real (then-empty) data source and honest empty states.
- [2026-08-09] Corrected initial grant messaging: MADANI is a 50% match up to RM5,000, not full coverage — fixed across pricing.json, faq.json, grant-assistance-info-sheet.md, FINANCE.md
- [2026-08-09] Wrote CMO SME launch campaign at `docs/marketing/SME-LAUNCH-CAMPAIGN.md`
- [2026-08-09] Fetched competitor SWOT's live pricing pages and replaced the SME tier with a 9-package ladder mirroring SWOT's structure and prices — later fully superseded 2026-08-14.
- [2026-08-09] Extracted repeated pricing-card markup into `src/components/sections/PricingCard.astro`
- [2026-08-09] Confirmed WSS already has a live git-based CMS (Decap CMS at `/wss-console`) covering 9 of 10 content types — testimonials is the one gap
- [2026-08-09] Ran a full CMO audit of the website and gave a prioritized list of gaps
- [2026-08-09] Removed the career page per founder decision
- [2026-08-09] Auto-drafted the product-marketing positioning doc at `.agents/product-marketing.md` (v1)
- (earlier history predates this memory system; see git log)
