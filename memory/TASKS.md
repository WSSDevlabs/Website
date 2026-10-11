# TASKS

## DOING
- (none) The audit rebuild is complete and committed on branch `audit-rebuild`, **not pushed**. Waiting for the founder to say "push" (merge to main = deploy). Before pushing: run docs/ops/deploy-checklist.md.run docs/ops/deploy-checklist.md.

## TODO (founder; full ordered list in docs/audit/founder-actions.md)
- [founder] Fill legalName, ssmNumber, registeredAddress in the CMS (legal requirement, audit L1); set the exact base location.
- [founder] Cloudflare: Email Address Obfuscation OFF, Rocket Loader OFF, pick one Web Analytics method, check PUBLIC_WEB3FORMS_ACCESS_KEY, switch on Zaraz and record the 7 events.
- [founder] Confirm product facts the site states (docs/business/claims-evidence.md, "Founder to confirm"): all 15 public systems deliverable and demoable; PHP 8.2+/MySQL; offline licence check; kiosk languages; FPX deposits; English-only interfaces.
- [founder] Check the Privacy Notice's email provider (says Google); prune social accounts not actively used; read the drafted founder/About copy for truth.
- [founder] Founder photo, full name, LinkedIn, experience, notable builds (CMS > Founder & Team).
- [founder] After deploy: PageSpeed on the live site, put the score in the CMS (pageSpeedMobile); submit the sitemap in Search Console.
- [founder] Replace the RM50/month hosting placeholder (catalog.ts hostingEstimateMonthly).
- [founder] Lawyer review of /terms/ /licence/ /refunds/ /privacy/ and docs/legal/; accountant on structure, SST, e-invoicing; freelancer agreements; insurance quotes.
- [founder] Google Business Profile + 10 honest reviews; Founding Client Programme (update foundingSlotsLeft per signing).
- [founder] Validate the estimate prices with 3 competitor quotes; price review on 2027-04-11.
- [founder] Real screenshots (sample data) and 60-second recordings per public system; first case studies; real ToyyibPay/Stripe checkout (months 2 to 3).
- [founder] Smart Premises readiness: integration layer, real demo, hardware partner, pilot site (docs/business/ecosystem-readiness.md).
- [dev] Once the founder confirms per-product facts: fill version/lastUpdated, media, videoUrl, language in src/data/systems.ts.
- [dev] Build the "Which system do I need?" quiz once the first 3 sales show which questions matter.
- [dev] BM pages for Home, /websites/, /systems/ with hreflang (phase 3, real translation).
- [dev] SBOM + NOTICE files for the 15 public systems (docs/ops/compliance-controls.md).

## BLOCKED
- (none) Missing business facts don't block the build: the site shows honest fallbacks until they're filled.

## DONE
- [2026-10-11/12] **Implemented the full website audit** (Parts 1 to 14) on branch `audit-rebuild`: 22 pages to 7; single price catalogue (src/data/catalog.ts); 15 public systems + 2 ecosystem pages (pilot status); removed fake demos, placeholder partners and logos, grants, SST labels, Botpress, cookie banner, intro animation, motion libraries; new legal pages (bilingual privacy, terms, licence, refunds, care plan terms, cookies); security headers + full redirect map; trailing slashes; structured data; conversion events; 2 pillar articles; docs packs (audit, legal drafts, business, ops). Verified: astro check 0 errors, lint clean, 0 broken links, 0 inline scripts, 0 horizontal scroll at 375px, 14/14 browser tests, Lighthouse mobile 99-100 in all categories (local). Item-by-item record: docs/audit/implementation-checklist.md.
- [2026-08-22, session 2] Nav settled on a floating glass pill (rounded, `bg-white/15` + blur, no reserved page padding); light-themed the `/express`, `/marketplace`, `/status` dark hero sections to match the homepage; homepage's 5-pill service list now matches the 5 real category names/links exactly; added a real 15th "IoT Solutions & Infrastructure" service card+content (founder overrode the earlier "keep it 14" instruction, confirmed explicitly when asked); footer recolored to matte charcoal with the real logo; About page decluttered (banner, eyebrow, process section all removed); fixed a pricing-grid alignment bug. Pushed to `origin/main` (`6632372`).
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
