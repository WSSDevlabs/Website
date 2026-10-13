# Audit implementation checklist

**Audit:** "WSS DevLabs: Full Website, Software & Marketing Audit", 11 October 2026 (Parts 0 to 14).
**Implemented:** 14 October 2026, on top of the existing website design.

**The rule for this round (founder, 14 Oct 2026):** follow the audit for content, descriptions, pages, prices and structure, but keep the UI, style, design, buttons, effects and transitions. Where the audit asked for a visual change, the design was kept and only the content was changed.

**Legend**

- ✅ **Done** in the code
- 🎨 **Design kept** by your instruction; the audit's visual suggestion was not applied (or only its content part was)
- 🟡 **Built, needs your data**: it fills in once you add the fact (usually in the CMS)
- 👤 **Your action**: outside the code (a decision, an account setting, a person to call)

**Verification on the finished build:** `npm run build` passes (astro check 0 errors, 38 pages) · 0 broken internal links and anchors · every internal link uses a trailing slash · 0 pages that scroll sideways at 375px · calculators, contact-form prefill and the mobile menu tested in a real browser · sitemap lists only live pages.

---

## Part 1: Strategy

| Item | Status | What was done |
|---|---|---|
| 1.1 Serve Malaysian SMEs; stop marketing to enterprise and students | ✅ | "Enterprise", "students", "senior engineering team" and generalist copy are gone sitewide. |
| 1.2 Three offers, one idea | ✅ | Websites, Systems, Custom. Cut from the public site: IoT services, ML and computer vision, ESG, Industry 4.0, TeD, photography and video, Google Ads, branding, grant consulting. Kept as add-ons: Google Business Profile, Local SEO Setup, AI WhatsApp Assistant, payment gateway. |
| 1.3 "Software you own. Not rent." | ✅ | Home hero, footer, share image, tagline. |
| 1.4 Mission, vision, three principles | ✅ | About (word for word) and the home "Own it. Don't rent it." section. |
| 1.5 Keep the brand name | ✅ | |
| 1.6 One promise you can keep | ✅ | "We reply within one business day. Fixed quote within three." from one constant (`REPLY_PROMISE`). Removed: "senior architect within one business hour", evening slots, "start within two weeks". |

## Part 2: Site structure

| Item | Status | What was done |
|---|---|---|
| 2.1 From 22 pages to 7 | ✅ | Home, Websites, Systems (+ 15 system pages + 2 complete solutions), Custom, About, Contact, Insights. Legal pages in the footer only. |
| 2.2 Merge or delete pages | ✅ | Deleted: /services/ and its 5 pages, /express/, /marketplace/, /testimonials/, /coming-soon/, the grant article. No /pricing/ or /work/. |
| 2.3 Redirect map (301) | ✅ | `public/_redirects`: every old URL goes straight to its final page, slash and no-slash forms, no chains. |
| 2.4 Header: 4 links + 1 button | 🎨 ✅ | Kept your floating pill with its six icons, now pointing at Home, Websites, Systems, Custom, About and Insights, with hover hints. The button reads "Get a quote". Mobile: the "Services" chip is now a "Menu" chip that opens the same icons with their names, in the same glass style. Footer: new links, "Talk to the builder", SSM line once set. |
| 2.4 One floating WhatsApp button only | 🎨 | Kept your Botpress chat bubble and the WhatsApp icon in the mobile header. |
| 2.5 Homepage chooser | ✅ | Your three image cards now read "A website / A system to run my business / Something built just for us", with From RM569 / From RM569 / From RM8,250. |

## Part 3: Page by page

### 3.1 Global

| # | Status | Notes |
|---|---|---|
| G1 Email in plain HTML | ✅ | Plain `mailto:` links wrapped in `<!--email_off-->` so Cloudflare leaves them alone; the old script stays as a backup. |
| G2 Legal name, SSM number, address | 🟡 | Footer, About, schema and every policy show them as soon as they're set in the CMS. |
| G3 Text labels in the menu | 🎨 ✅ | Icons kept; hover hints on desktop; labels in the mobile menu; screen-reader labels throughout. |
| G4 Fake EN/BM toggle | 🎨 | Kept (it's part of your top bar). BM now shows "Bahasa Malaysia version coming soon" on hover. Real BM pages are a month 2 to 3 job. |
| G5 Footer "Direct FAQ" | ✅ | Removed; each page has its own FAQ. |
| G6 "Talk to the builder" | ✅ | |
| G7 Footer blurb | ✅ | "Fixed-price websites and business systems for Malaysian SMEs. You own the code." |
| G8 Alt text | ✅ | Descriptive alt on the offer cards; decorative icons hidden from screen readers. |
| G9 Stock photos | 🎨 👤 | Service pages are gone. Your three offer cards keep their photos until you have real screenshots. |
| G10 Botpress | 🎨 👤 | Kept. Its old knowledge base must be replaced: `docs/business/chat-assistant-knowledge.md`, with the audit's 10 hard questions answered. |
| G11 Cookie banner | 🎨 ✅ | Kept. New wording that matches what runs; on phones it now sits above the chat bubble, so the bubble no longer covers "Reject". |
| G12 Two CTAs | ✅ | Primary "Get a (fixed) quote"; secondary "See systems / See websites". Plus "Buy now" on systems, "Book a site visit" on complete solutions, "Book a 15-minute walkthrough" instead of "live demo". |

### 3.2 Home

| # | Status | Notes |
|---|---|---|
| H1 Title | ✅ | "Websites & Business Systems for Malaysian SMEs, Fixed Price \| WSS DevLabs" |
| H2 Meta description, no grant | ✅ | |
| H3 Hero headline | ✅ | "Software you own. Not rent." in your two-column hero with the red badge. |
| H4 One primary, one secondary CTA | ✅ | "Get a fixed quote" + "See systems". On phones they now come before the comparison card, so one is visible without scrolling (V8). |
| H5 Stats bar | ✅ | Same card. "2000+ hours" and "40+ systems" replaced with 15 ready-made systems, 10+ custom projects (👤 confirm) and RM0 monthly licence fees. |
| H6 Empty partners section | ✅ | Removed from the page; the four invented partner logos deleted. |
| H7 Five-services grid | ✅ | Became "Own it. Don't rent it.": the same numbered pill rows carry the three principles. |
| H8 Offer cards renamed with prices | ✅ | |
| H9 "See Reviews" | ✅ | Gone. The dark panel it sat in now shows the Founding Client Programme with an honest "X of 5 places left". |
| New sections | ✅ | Hero (with a rent vs own comparison in the old image frame) · chooser · own vs rent + founding places · reviews (hidden until real) · FAQ (5) · how it works (3 steps, in the old empty dotted panel) + final CTA. Founder line in the "Who we are" card. |

### 3.3 About

| # | Status | Notes |
|---|---|---|
| A1, A2 Vision, mission | ✅ | |
| A3 Honest team description | ✅ | "One founder, every build." No senior team claims. |
| A4 Founder photo, name, LinkedIn | 🟡 | The circle shows your photo once it's added in the CMS (Team). |
| A5 Story | ✅ 👤 | "Why WSS DevLabs exists", written around own-don't-rent. Check that it matches your real story. |
| A6 Process moved | ✅ | 3 steps on Home, the 8-step timeline (with its scroll fill) on /custom/. Your 6-card grid also moved to /custom/ as "What every custom build includes". |
| A7 Grants | ✅ | Deleted. |
| A8 Two offices claim | ✅ 🟡 | "Kuala Lumpur, Malaysia. Meetings in the Klang Valley or online." Change in the CMS if needed. |
| A9 Company facts | ✅ 🟡 | Replaces the generic "Key Features" cards; fills in from the CMS. |

### 3.4 to 3.9 Service pages
All deleted and redirected (S1 to S4, W1 to W8, C1 to C6, D1 to D6, I1 to I4, T1 to T3). Carried into the new pages: one 3-package website ladder (W1, W2); renewal on every card (W7); "Get a quote" goes to the contact form pre-filled with the package (W5); migration answer reworded (W6); mobile apps from RM16,500 under Custom (W8); no grant names anywhere (C2, C3); Care Plans as a real product (C5); no ranking guarantee, Local SEO Setup with deliverables (D2); Google Ads, photo, video, branding removed (D4, D5); practical AI only, with prices (I1 to I4); IoT only inside complete solutions (T1).

### 3.10 Express > Websites

| # | Status | Notes |
|---|---|---|
| E1 Price on every card | ✅ | Price on line 2, 5 highlights, "The fine print" box (payment, year 2, revisions, warranty) and "See everything included". |
| E2 RM180/year landing page | ✅ | One-Page RM569 one-time + RM219/year from year 2. |
| E3 Year-2 hosting price | ✅ | On every card and in the FAQ. |
| E4 Websites only | ✅ | Plus Care Plans and the Go Digital Bundle. |
| E5 Conditional speed promise + our own score | ✅ 🟡 | "90+ at handover on the agreed content, or we fix it free." Your own score shows once set in the CMS. |
| E6 Grant calculator | ✅ | Your calculator card is now "Build your website quote" with the audit's add-ons and a WhatsApp quote button. |
| E7 Bespoke RM8,500 | ✅ | Custom from RM8,250 + Discovery Sprint RM1,129. |
| E8 Warranty + Care Plan | ✅ | |
| E9 Takeover FAQ | ✅ | On /custom/, with the Rescue Audit. |
| "Recent Production Deployments" | ✅ | Removed: the listed deployments couldn't be verified. |

### 3.11 and 3.12 Marketplace > Systems and product pages

| # | Status | Notes |
|---|---|---|
| M1 Prices on every card | ✅ | Prices and one-line benefits inside your hover/tap category browser. |
| M2 15 public products | ✅ | See Corrections below. The other 26 are inside complete solutions, on request, or on hold. |
| M3 "Perpetual licence with full source code" | ✅ | Everywhere; /licence/ published. |
| M4 Same support terms everywhere | ✅ | 30 days support, 12 months of updates. |
| M5 Buyer groups | ✅ | Retail & F&B, Offices, Security & Property, Events & Hospitality, All systems. |
| M6 Ed25519 jargon | ✅ | "Works offline. No kill switch." |
| V10 "Hover to see systems" | 🎨 ✅ | Hover reveal kept (your request); hint now says "Tap or hover", and the list shows price and benefit. |
| P1 Price above the fold | ✅ | |
| P2 Real checkout | 👤 | "Buy now" opens WhatsApp with the system and price. Real ToyyibPay/Stripe checkout needs your merchant account. |
| P3 Fake "Live Viewport Demo" | 🎨 ✅ | Your device frame and desktop/mobile switch are kept, but the fake demo.wssdevlabs.com address and "Live Engine Active" tiles are gone. It now offers a 15-minute screen-share, and shows real screenshots or a recording once you add them. |
| P4 Demo path bug | ✅ | |
| P5 "Sub-50ms TTFB" | ✅ | Removed. |
| P6 FAQ | ✅ | 10 shared questions + payments, hardware, language and product-specific ones (13 to 15 per page). |
| P7 Tech specs box | ✅ 🟡 | Collapsed "Tech specs (for your IT person)". Add `version` and `lastUpdated` per system. |
| P8 Install and customisation prices | ✅ | |
| P9 Guard Patrol questions | ✅ | |
| P10 POS payments | ✅ | |

### 3.13 to 3.18

| # | Status | Notes |
|---|---|---|
| R1 Testimonials page | ✅ | Deleted, 301 to /about/#reviews. Reviews appear on Home and About automatically once real ones are added. |
| N1 Publishing cadence | 👤 | New pillar article published (rent vs own). Keep to 2 a month. |
| N2 Grant article | ✅ | Deleted, 301 to /insights/. |
| N3 Named author | ✅ | "By Razali, founder of WSS DevLabs" with a short bio and Article schema with a Person author. |
| N4, N5, N6 Cost article | ✅ | Rewritten with sourced ranges, our own price table and a bias disclosure. |
| N7 Topic CTAs | ✅ | Each article's sidebar points at Websites, Systems or Custom. |
| K1 to K7 Contact | ✅ | Plain email; "senior architect / one hour" gone; one location; evening slots and date picker removed; 4 fields (audit 3.18); one social set; "Get a fixed quote". The form now really sends (Web3Forms) and shows "what happens next". |
| Contact map | ✅ | Was showing "API KEY REQUIRED" (CARTO started requiring a key). Now OpenStreetMap, greyed to keep the same look. |
| X1 Coming Soon | ✅ | Deleted, 301 to /, not in the sitemap. |
| 3.18 Blueprints | ✅ | Each page follows its blueprint using your existing section designs. |

## Part 4: Pricing
✅ Superseded by Part 12.

## Part 5: Technical

| # | Status | Notes |
|---|---|---|
| T1 Trailing slashes | ✅ | Every internal link and canonical URL ends in "/". |
| T2 Security headers | ✅ 👤 | HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy enforced. CSP shipped as report-only: switch to enforced after a week with no violations. |
| T3 `Access-Control-Allow-Origin: *` | ✅ | Removed for pages. |
| T4 Coming Soon in the sitemap | ✅ | |
| T5 Duplicate brand in titles | ✅ | |
| T6 Accessibility | ✅ | Labels on icon links, decorative icons hidden, real alt text, one h1 per page. |
| T7 hreflang | 👤 | When BM pages exist. |
| T8 Botpress lazy-load | 🎨 | Kept loading as before (your chatbot). |
| T9 Own PageSpeed | 👤 | Measure the live site after deploy. |
| T10 Structured data | ✅ | ProfessionalService, Service with offers, SoftwareApplication with price per system, FAQPage, BreadcrumbList, Article with Person author. |
| T11 Demo path | ✅ | |
| T12 Conversion tracking | ✅ 👤 | Events: `quote_click`, `whatsapp_click`, `buy_click`, `walkthrough_click`, `site_visit_click`, `founding_click`, `calculator_whatsapp`, `article_cta`, `form_submit`. Switch on Zaraz to record them. |
| T13 Demo security | 👤 | No demos yet. |
| T14 Licence check messaging | ✅ | |
| Share image | ✅ | `/images/og/default.png` was missing (every shared link had a broken preview). |

## Part 6: Legal (first findings)

| # | Status | Notes |
|---|---|---|
| L1 Identity | 🟡 | Built into the footer and every policy. |
| L2 Named privacy contact | ✅ | "Razali, Founder". |
| L3 Providers and countries | ✅ 👤 | Cloudflare, Botpress, Web3Forms, Meta, your email provider (👤 name it), bank, accountant. |
| L4 Licence, not ownership | ✅ | |
| L5 Refund policy | ✅ | /refunds/ |
| L6 Dispute venue | ✅ | |
| L7 to L9 Guarantees | ✅ | |
| L10 Grants | ✅ | Nothing left on the site. |
| L11, L12 | ✅ | No public review form; logos only with permission. |

## Part 7: Marketing plan
👤 `docs/business/marketing-plan.md` and `docs/business/sales-playbook.md`. ✅ Rent vs own calculator (lead magnet) live on /systems/ and both complete-solution pages.

## Part 8: Action plan

**Today:** partners section ✅ · case-study placeholder cards ✅ (deleted with /services/) · testimonials out of the nav ✅ · Coming Soon ✅ · fake demo frames ✅ · hero placeholder ✅ · menu labels 🎨 · template text ✅ · top-30 guarantee ✅ · one-hour reply ✅.
**Week 1:** positioning, mission, vision, principles ✅ · SSM, legal name, address 🟡 · grants and SST labels ✅ · price ladder ✅ · stats ✅ · EN/BM toggle 🎨 · security headers ✅ · PageSpeed 👤 · reviews from past clients 👤.
**Weeks 2 to 4:** 7-page structure + redirects ✅ · new header 🎨 ✅ · chooser ✅ · About rewrite ✅ · 15 systems with price, specs, FAQ ✅ · licence wording ✅ · trailing slashes, labels, alt ✅ · Care Plans ✅ · tracking ✅ (Zaraz 👤) · Google Business Profile 👤.
**Months 2 to 3:** 👤 case studies, checkout, demo videos (`videoUrl` ready), 2 articles a month, lawyer review, BM translation, 5-person usability test.

## Part 9: Straight talk
👤 For you. The site now reflects points 3 to 6. Points 1, 2 and 7 are business decisions.

## Part 10: HCI

| Item | Status |
|---|---|
| 10.1 Hick's law etc. | ✅ 3 offers, 3 website prices, 15 systems in 4 buyer groups, plain words, prices next to products, collapsed details, "what happens next" after the form |
| 10.2 Things that make users dizzy | 🎨 Intro animation, chat bubble, cookie banner and EN/BM toggle kept by your instruction. ✅ Repeated CTAs, jargon lists and the 41-product grid are gone; the banner no longer collides with the chat bubble on phones |
| 10.3 Mobile-first | ✅ Mobile menu, CTA on the first screen, nothing scrolls sideways, care-plan table stacks on phones. 🎨 No sticky bottom bar (a new floating element). 👤 Test on a mid-range Android |
| 10.4 Accessibility | ✅ Labels, alt text, details/summary accordions; your animations already respect reduced motion |
| 10.5 Microcopy | ✅ |
| 10.6 Test with 5 people | 👤 `docs/business/usability-test-script.md` |

## Part 11: Visual and browser audit

| # | Status | # | Status |
|---|---|---|---|
| V1 Fake demo | ✅ (frame kept, fake content gone) | V12 See-through header | 🎨 |
| V2 Hero placeholder | ✅ | V13 Clipped badge | ✅ (badge removed with the grant) |
| V3 Empty partners | ✅ | V14 Five accent colours | 🎨 |
| V4 Empty dark card | ✅ | V15 Red highlight everywhere | 🎨 |
| V5 Empty dotted panel | ✅ | V16 Stock photos, card dots | 🎨 👤 |
| V6 Icon-only menu | 🎨 ✅ | V17 Content hidden until scrolled | 🎨 |
| V7 No mobile menu | ✅ | V18 Contrast | 🎨 |
| V8 Mobile first screen | ✅ | V19 Tap targets | 🎨 |
| V9 No prices on cards | ✅ | V20 Contact form | ✅ |
| V10 "Hover to see systems" | 🎨 ✅ | V21 Stats strip | ✅ |
| V11 Analytics before consent | ✅ 👤 | V22 Arial Google Fonts request | 👤 (Botpress font setting) |

V11: the site only loads analytics after Allow. The early load the audit saw comes from Cloudflare's automatic injection: **turn it off in the dashboard** (`docs/ops/deploy-checklist.md`).

## Part 12: Pricing and packages

| Item | Status |
|---|---|
| 12.0 Founder decisions (about 44% below market, Founding Client, 12 months of updates, no grants, no SST) | ✅ |
| 12.1 New prices | ✅ All in `src/data/catalog.ts`, with each price's review target |
| 12.2 Old price points removed | ✅ |
| 12.3 Missing prices added | ✅ |
| 12.4 A to G Packages, add-ons, systems, custom, Care Plans, Go Digital Bundle, Founding Client | ✅ |
| 12.5 Standard terms | ✅ /terms/ |
| 12.7 Education blocks | ✅ CMS, Facebook vs website, own store vs marketplace, why SEO takes months, WhatsApp fees, rent vs own, "Is this right for you?", "What you need to run it", ready-made or custom, why pay for discovery, why maintenance, app or mobile website |
| 12.8, 12.9 Sales playbook, profit check | ✅ `docs/business/` |
| 12.10 Pricing checklist | 👤 Validate estimate prices, track hours, price review on 14 April 2027 |

## Part 13: Complete solutions (ecosystems)

| Item | Status |
|---|---|
| Smart Premises, Smart Outlet | ✅ Published, honestly labelled as booking pilot sites |
| Smart Clinic, Smart Warehouse | ✅ Specs in the data, unpublished until the first two have reference clients |
| How they appear | ✅ "Complete solutions" row on /systems/, one page each, "Book a site visit" |
| Readiness | 👤 `docs/business/ecosystem-readiness.md` |

## Part 14: Legal and compliance review

| Item | Status |
|---|---|
| Website documents (14.4 items 1 to 6) | ✅ /terms/ (incl. services, maintenance, Care Plans, after-sales, NDA), /privacy/ (EN + BM, consent, NDA), /cookies/, /licence/, /refunds/, /care-plan-terms/ |
| Document pack (items 7 to 20) | ✅ Drafts for lawyer review in `docs/legal/` |
| Structure, insurance, trademark, lawyer, accountant | 👤 `docs/legal/README.md` |

---

## Corrections to the audit (from the real product data)

1. **`wss-vims` is the Visitor Management system;** nothing needed merging.
2. **`wss-vms` is Vehicle Maintenance,** not visitor management. It takes the 15th public slot.
3. **`wss-training` is a training service, not software,** so it's on hold.
4. **`wss-emers` is canteen meal redemption,** not emergency broadcast; it sits in Smart Workplace and Smart Campus.
5. **Owning vs renting, honestly:** for one outlet, owning a POS with a Care Plan can cost more over 3 years than a RM158/month subscription. The calculators and the article show both sides.

Final counts: 15 public, 15 inside complete solutions, 3 on request, 8 on hold.
