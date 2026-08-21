# TASKS

## DOING
- Page-by-page live edit pass with the founder (2026-08-22, ongoing) — founder sends screenshots/instructions one at a time; see PROGRESS.md for the full batch done so far (fabricated-content removal, nav redesign, marketplace trim, 5th services pillar, form consolidation).

## TODO
- [uiux] Scroll-reveal / card-reveal / "3D transition" motion pass — founder wants the site to "feel alive... like have a soul." Not started; existing `data-stagger`/`data-split`/GSAP infra can likely be extended rather than rebuilt.
- [uiux] Typography hierarchy strengthening pass — founder's own resolution when asked to clarify a vaguer "multiple fonts/colors" request: stronger size/weight contrast within the existing design system, not literally more fonts or random colors. Not started.
- [founder] Check nav contrast on `/express` and `/status` — the top bar is now a fully transparent overlay with dark icons and no background, applied "for all page at first section" before the founder had seen it against those two pages' dark (`bg-ink`) hero sections specifically. May need a dark-hero icon variant.
- [cfo/founder] Confirm the remaining 4-package names (Launch/Expand/Grow/Custom) and prices (RM1,200 / RM4,500 / RM12,000 / Custom) — still placeholders. The 5th "Scale" tier (From RM28,000) was removed entirely 2026-08-22 per founder request, not renamed.
- [uiux/dev] The new "IoT Solutions & Infrastructure" services pillar (`/services/iot-solutions-infrastructure`) has no real service content yet — no page-count/pricing/deliverables exist for it in `data/services.json` (deliberately, to avoid fabricating content). Needs real IoT service definitions whenever the founder is ready to sell it, or it stays a light hero-only page.
- [media] Founder will source the real "laptop, komputer, mobile app real design" image from their media designer — largely moot now: most homepage/about photo placeholders were replaced with abstract pattern panels 2026-08-22 rather than photos, per founder's "decrease the photos... too much photo for now" direction. Revisit only if founder wants photography back somewhere specific.
- [admin] Fill in real WSS Devlabs details (SSM no., bank account, address) into the new templates before first real client use — legalName/ssmNumber/sstNumber in `src/data/site.json` are still blank (WhatsApp/social/email are already real)
- [pm] Track lead volume once the campaign runs, to validate the new package structure
- [content] `src/content/projects/` is still empty — real case studies would replace the "coming soon" empty state on /work with actual proof
- [content] `src/data/testimonials.ts` is still empty by design (content gate) — add real reviews as they come in. Note: 2026-08-22 found and fixed a bug where `Testimonials.astro` was ignoring this and showing 2 hardcoded fake reviews anyway on every service page — that's fixed, the gate is now real.
- [dev] Consider adding a "testimonials" collection to `public/wss-console/config.yml` — it's the only content type not currently editable via the CMS
- [cmo] No dedicated landing page for the SME campaign — ad copy in `docs/marketing/SME-LAUNCH-CAMPAIGN.md` currently points at the full `/pricing` page instead of a focused page per segment.
- [cmo] Confirm `PUBLIC_CF_ANALYTICS_TOKEN` is actually set in production — blank in `.env.example`, no local `.env`, so analytics status on the live site is unverified.
- [cmo] Capture real customer language (verbatim quotes) from the first SME-tier and growth-tier clients and fold into `.agents/product-marketing.md` v2 — currently empty, flagged as an open section in the doc.

## BLOCKED
- (none)

## DONE
- [2026-08-22] Resolved the long-open fabricated-team question — founder confirmed their real name is Razali and asked to remove all "Razin"/"Natasya" content. Removed site-wide (Header, express, status, work, marketplace, SME calculator, docs/DESIGN.md, team.json/ts), deleted the fake 6-person `TeamGrid.astro` homepage section, and fixed `Testimonials.astro` which was silently ignoring its props and showing 2 fake testimonials with stock photos on every service page regardless.
- [2026-08-22] Replaced stock photos implying real people/team/office across ~12 files (Hero, HomepageServices, About, ElevateCTA, Differentiator, QuoteForm, contact, coming-soon, testimonials, Header mega-menu) with abstract pattern/blob panels, per founder's "too much photo for now" direction.
- [2026-08-22] Trimmed marketplace from 15 to 6 systems (kept the 6 already cross-linked from `/work`'s case studies); removed `/services/bespoke` with a redirect; added the 5th "IoT Solutions & Infrastructure" services pillar per founder's explicit 5-pillar list.
- [2026-08-22] Full header/nav redesign: left icon rail → floating transparent top bar overlaying every hero, real logo + favicon, fixed 7 broken/duplicate nav links (4x identical `/status`, 3x identical `/express#packages`, marketplace links to nonexistent slugs) by adding real page anchors.
- [2026-08-22] Consolidated lead-capture forms from 8+ pages to 2 (`/contact`, `/pricing`) per founder's "limit it to 2" instruction; other pages use a single CTABand instead.
- [2026-08-22] GitHub → TikTok swap site-wide; red heartbeat `.badge-highlight`; removed eyebrow micro-labels sitewide. Committed and pushed to `origin/main` (`435f86e`).
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
