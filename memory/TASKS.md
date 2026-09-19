# TASKS

## DOING
- (none active — see PROGRESS.md 2026-09-19 entry: fixed the real nav bug (site-intro stuck overlay, not Botpress), removed the services popup, added 4 explanatory content sections to service category pages, pushed through `c495bb8`.)

## TODO
- [dev/founder] **Confirm the Botpress live-navigation hotfix (`0355af4`) actually resolved the blank-page-on-Home-click bug on the live site** — pushed but not yet confirmed by the founder. If it recurs, get the actual browser console error text (screenshots keep failing to send — ask for typed text).
- [coo] Flip Cloudflare's "Email Address Obfuscation" setting off (Speed → Optimization) for wssdevlabs.com — the code-side workaround (`emailReveal.ts`) covers JS-enabled visitors, but the dashboard toggle is the real fix and hasn't been requested from the founder yet.
- [cfo] **`memory/FINANCE.md` needs a full rewrite** — it still documents the 5-tier Launch/Expand/Grow/Scale/Custom `/pricing` structure, but that entire page was deleted 2026-08-25 (see DECISIONS.md). Current live pricing: WSS Express's 3 packages (Landing RM180/yr, Starter RM1,500, Business RM4,500 — `src/data/express.ts`), the SME/Corporate comparison tables on `/services/web-software-app-development`, and the Google Ads/SEO pricing table on `/services/digital-design-media-marketing`.
- [uiux] Scroll-reveal / card-reveal / "3D transition" motion pass — founder wants the site to "feel alive... like have a soul." Still not started as a dedicated pass, though the 2026-08-25 session did add several new micro-interactions piecemeal (auto-flip cards, popup stagger, marquee, hero glow) that partially serve this goal.
- [uiux] Typography hierarchy strengthening pass — still not started as a dedicated pass, though a partial version shipped 2026-08-25 (bold + `.badge-highlight` treatment applied to `/about`, `/contact`, `/testimonials`, `/services` headings).
- [content/media] Real partner/client logos needed for the new homepage "Our Strategic Partners & Clients" marquee (`PartnersMarquee.astro`, 2026-08-25) — currently placeholder cards.
- [content] Real case-study content needed for `/services`' new "Our Latest Projects" section (`LatestProjects.astro`, 2026-08-25) — currently 3 honest "Case Study Coming Soon" placeholders, not fabricated results.
- [dev] `src/data/pricing.json`/`.ts`, `PricingCard.astro`, and `FAQ.astro` (the component) are now fully orphaned dead code since the `/pricing`/`/faq` deletions — safe to delete outright if/when doing a cleanup pass, not urgent.
- [i18n] TopBar's "BM" language button is a non-functional placeholder (founder explicit: no translation needed yet) — real Bahasa Melayu i18n is a future task if the founder wants it, not scoped yet.
- [admin] Fill in real WSS Devlabs details (SSM no., bank account, address) into the client-document templates before first real client use — legalName/ssmNumber/sstNumber in `src/data/site.json` are still blank (WhatsApp/social/phone/email are already real; email corrected 2026-08-25 from `hello@` to `info@wssdevlabs.com`).
- [pm] Track lead volume once any campaign runs, to validate current pricing/package structure.
- [content] `src/content/projects/` is empty and now fully unused (its only consumer, `/work`, was deleted 2026-08-25) — either populate it and rebuild a case-studies surface, or consider removing the collection.
- [content] `src/data/testimonials.ts` is still empty by design (content gate) — add real reviews as they come in.
- [dev] Consider adding a "testimonials" collection to `public/wss-console/config.yml` — still the only content type not editable via the CMS.
- [cmo] `docs/marketing/SME-LAUNCH-CAMPAIGN.md` still points at `/pricing`, which no longer exists — needs its links updated to `/express` (or wherever the founder wants campaign traffic to land) before that campaign runs.
- [cmo] Confirm `PUBLIC_CF_ANALYTICS_TOKEN` is actually set in production — still unverified.
- [cmo] Capture real customer language once available and fold into `.agents/product-marketing.md` v2.
- [process] Founder feedback to self: several weeks of substantial dev/design work (2026-08-25/26) ran as plain chat instead of through `/dev`/`/uiux`/`/wssdevlabs`, and memory wasn't checkpointed during it. Per BizBrain's own auto-routing table, route plain-language build/design requests through the matching role skill going forward, and checkpoint memory at natural session boundaries, not just when the founder explicitly asks to "check progress."

## BLOCKED
- (none)

## DONE
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
