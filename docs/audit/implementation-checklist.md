# Audit implementation checklist

**Audit:** "WSS DevLabs: Full Website, Software & Marketing Audit", 11 October 2026 (Parts 0 to 14).
**Implemented:** 11 October 2026, on branch `audit-rebuild`.

**Legend**

- ✅ **Done** in the code
- 🟡 **Done, needs your data**: the feature is built; it fills in once you add the fact (usually in the CMS)
- 👤 **Your action**: outside the code (a business decision, an account setting, a person to call)
- ↪ **Changed from the audit**, with the reason

**Verification run on the finished build:** `astro check` 0 errors · ESLint clean · 38 pages built · 0 broken internal links · 0 inline scripts (strict CSP) · 0 pages that scroll sideways at 375px · Lighthouse mobile (local): performance 99 to 100, accessibility 100, best practices 100, SEO 100 on Home, Websites, POS, Smart Premises, Contact and the cost article.

---

## Part 1: Strategy

| Item | Status | What was done |
|---|---|---|
| 1.1 Serve Malaysian SMEs (5 to 100 staff); stop marketing to enterprise and students | ✅ | All copy targets SMEs. "Enterprise", "students" and "senior engineering team" are gone. About states the 5 to 100 staff focus. |
| 1.2 Three offers, one idea | ✅ | Websites, Systems, Custom. Cut from the public site: IoT services page, ML and computer vision, ESG, Industry 4.0, MDSG-MFG, TeD, photoshoot and video, Google Ads, VR/AR (on hold). Kept as add-ons: Google Business Profile (in every package and Local SEO), basic SEO, AI WhatsApp Assistant, payment gateway. AI appears only as practical automation on /custom/. |
| 1.3 Positioning "Software you own. Not rent." | ✅ | Home hero, OG share image, tagline. |
| 1.4 Mission, vision, three principles | ✅ | About page, word for word. |
| 1.5 Keep the brand name | ✅ | |
| 1.6 One promise you can keep | ✅ | "We reply within one business day. Fixed quote within three." everywhere (one constant, `REPLY_PROMISE`). Removed: "senior architect within one business hour", evening 8 to 10pm slots, "start within two weeks". |

## Part 2: Site structure

| Item | Status | What was done |
|---|---|---|
| 2.1 From 22 pages to 7 | ✅ | Home, Websites, Systems (+ system pages), Custom, About, Contact, Insights. Legal pages in the footer only. |
| 2.2 Merge or delete pages | ✅ | Deleted: /services/ and all 5 service pages, /express/, /marketplace/, /testimonials/, /coming-soon/, the grant article. No /pricing/, /grant/ or /work/ pages. |
| 2.3 Redirect map (301s) | ✅ | `public/_redirects`: every old URL goes straight to its final page, both slash and no-slash forms, no chains. Kept products > their system page; ecosystem modules > their ecosystem page; everything else > /systems/. |
| 2.4 Header: 4 links + 1 button; mobile hamburger; footer; one WhatsApp button | ✅ | Desktop: Websites, Systems, Custom, About + "Get a fixed quote". Mobile: logo + button + hamburger with the same 4 links. Footer has the full list plus email, phone, WhatsApp, location and (once set) SSM number. One floating WhatsApp button on desktop; the sticky bottom bar on phones. |
| 2.5 Homepage chooser | ✅ | "A website / A system to run my business / Something built just for us" with From RM569 / From RM569, one-time / From RM8,250. |

## Part 3: Page by page

### 3.1 Global

| # | Status | Notes |
|---|---|---|
| G1 Email in plain HTML | ✅ 👤 | Plain `mailto:` everywhere; the JavaScript email script is deleted. **Turn off Cloudflare Email Address Obfuscation** (docs/ops/deploy-checklist.md). |
| G2 Legal name, SSM number, address in footer | 🟡 | Footer, About and every policy show them automatically once `legalName`, `ssmNumber`, `registeredAddress` are set in the CMS. |
| G3 Text labels in the menu | ✅ | |
| G4 Remove the fake EN/BM toggle | ✅ 👤 | Removed with the top bar. Real BM pages are phase 3 (the Privacy Notice is already bilingual). |
| G5 Remove the footer "Direct FAQ" link | ✅ | Each offer page has its own collapsed FAQ. |
| G6 "Talk to the builder" | ✅ | |
| G7 New footer blurb | ✅ | "Fixed-price websites and business systems for Malaysian SMEs. You own the code." |
| G8 Alt text, no reused images | ✅ | Offer pages no longer use images. Article covers are decorative (`alt=""`). |
| G9 Stock photos on service pages | ✅ | Gone. Real screenshots appear per system once added (`media` in systems.ts). |
| G10 Botpress chat widget | ✅ | Removed (audit 10.2). |
| G11 Cookie banner | ✅ | Removed; nothing non-essential to consent to (see V11). |
| G12 Two CTAs | ✅ ↪ | Primary "Get a fixed quote"; secondary "See systems" / "See details". Plus the audit's own "Buy now" (systems) and "Book a site visit" (ecosystems). ↪ "Book a screen-share" replaces "Try live demo" until real demos exist (audit P3). |

### 3.2 Home

| # | Status | Notes |
|---|---|---|
| H1 Title | ✅ | "Websites & Business Systems for Malaysian SMEs at a Fixed Price \| WSS DevLabs" |
| H2 Meta description, no grant | ✅ | |
| H3 Hero headline | ✅ | |
| H4 One primary, one secondary CTA | ✅ | |
| H5 Stats bar | ✅ ↪ | Removed. There are no numbers yet that could be defended to a journalist; add them back only when true. |
| H6 Empty partners section | ✅ | Deleted, and the 4 invented partner logo files with it. |
| H7 Five-services grid | ✅ | Replaced by the three-offer chooser. |
| H8 Offer cards renamed with prices | ✅ | |
| H9 "See Reviews" | ✅ | Removed; real reviews appear on Home automatically once published with permission. |
| New sections in order | ✅ | Hero, chooser, own vs rent, proof (hidden until real), how it works (3 steps), founder, FAQ (5), final CTA with the Founding Client counter. |

### 3.3 About

| # | Status | Notes |
|---|---|---|
| A1, A2 Vision, mission | ✅ | |
| A3 Honest team description | ✅ | Founder-led; specialists named upfront when needed. |
| A4 Founder photo, full name, LinkedIn, experience | 🟡 | Fields ready in the CMS (Founder & Team). A monogram shows until the photo is added. |
| A5 Story rewritten as "own, don't rent" | ✅ 👤 | Drafted; check that every sentence is true for you. |
| A6 Process moved | ✅ | 3 steps on Home, 8 steps on /custom/. |
| A7 Grants service | ✅ | Deleted. |
| A8 Two offices claim | ✅ 🟡 | Now "Klang Valley, Malaysia. Meetings in the Klang Valley or online." Set the exact location in the CMS. |
| A9 Company facts block | ✅ 🟡 | Shows whatever is set: registered name, SSM no., founded year, address, email, phone. |

### 3.4 to 3.9 Services pages
All deleted and redirected (S1 to S4, W1 to W8, C1 to C6, D1 to D6, I1 to I4, T1 to T3). Specific fixes carried into the new pages: ✅

- W1, W2: one ladder of 3 website packages. W3, W4: no badges or icon-only comparison cells; tables use "Yes"/"No" text. W5: buttons go to `/contact/?need=website&package=...` with the form pre-filled. W6: migration answer reworded ("We keep your existing page addresses where we can, and set up redirects"). W7: renewal shown on every card. W8: mobile apps from RM16,500 under Custom, scoped by discovery.
- C2, C3: every grant name removed. C4: Startup Package removed. C5: Care Plans are a real product. C6: growth consulting removed.
- D1: template text gone. D2: no ranking guarantee anywhere; Local SEO Setup sold with deliverables. D4: Google Ads removed. D5: photo, video, branding removed. D6: design is included in website packages.
- I1: ML and computer vision removed. I2: "Automation and AI assistants". I4: prices shown.
- T1: IoT page deleted, redirected to /custom/; IoT returns only inside ecosystems.

### 3.10 Express > Websites

| # | Status | Notes |
|---|---|---|
| E1 Price on line 2 of every card, 5 features, no "Architecture Details" | ✅ | |
| E2 RM180/year landing page | ✅ | One-Page RM569 one-time + RM219/year from year 2. |
| E3 Year-2 hosting price | ✅ | Shown on every card and in the FAQ. |
| E4 Websites page sells websites only | ✅ | (Plus the Go Digital Bundle, which is a website package.) |
| E5 Conditional speed promise + our own score | ✅ 🟡 | "90+ at handover on the agreed content, or we fix it free." A "Test this site's speed" button links to PageSpeed Insights; add your measured score in the CMS (`pageSpeedMobile`). |
| E6 Grant calculator, badge, FAQ | ✅ | All removed. |
| E7 Bespoke RM8,500 | ✅ | Custom Build from RM8,250 + Discovery Sprint RM1,129. |
| E8 Warranty + Care Plan upsell | ✅ | |
| E9 Takeover FAQ moved to /custom/ | ✅ | With the Rescue Audit price and written authorisation. |

### 3.11 and 3.12 Marketplace > Systems, product pages

| # | Status | Notes |
|---|---|---|
| M1 Prices on every card | ✅ | |
| M2 15 public products | ✅ ↪ | See "Corrections" below for the real product mapping. |
| M3 "Perpetual licence with full source code" | ✅ | Everywhere; /licence/ published. |
| M4 Same support terms on every page | ✅ | 30 days support, 12 months updates, from one constant. |
| M5 Buyer categories | ✅ | Retail & F&B, Offices, Security & Property, Events & Hospitality, All. |
| M6 Ed25519 jargon | ✅ | Now "Verified offline. Never phones home. No remote kill switch," in the tech specs only. |
| P1 Price above the fold | ✅ | |
| P2 Real checkout | 🟡 👤 | Interim: "Buy now" opens an order request with an order summary, extras, a live total and a required tick-box accepting the Licence and Refund Policy, then an email invoice. A real ToyyibPay/Stripe checkout with automatic delivery needs your merchant account (month 2 to 3). |
| P3 Fake "Live Viewport Demo" | ✅ | Removed from all pages. Each page offers a real 15-minute screen-share and shows screenshots or a video only once real ones are added. |
| P4 Demo path bug | ✅ | Gone with the frame. |
| P5 "Sub-50ms TTFB" | ✅ | Removed. |
| P6 10-question FAQ | ✅ | 10 shared questions + payments + language + product-specific ones. |
| P7 Tech specs box | ✅ 🟡 | PHP 8.2+, MySQL, stack, licence check, data location. Add `version` and `lastUpdated` per system when known. |
| P8 Installation and customisation prices | ✅ | Installation RM369, branding from RM669, training RM219, data import from RM299, update install RM219. |
| P9 Guard Tour questions | ✅ | QR vs NFC, phones, what's recorded. |
| P10 POS gateways named | ✅ | How counter payments, card terminals and DuitNow QR work; MyInvois stated as not included. |

### 3.13 to 3.17

| # | Status | Notes |
|---|---|---|
| R1 Testimonials page | ✅ | Deleted, 301 to /about/#reviews. Reviews come from the CMS and need permission on file. |
| N1 Publishing cadence | 👤 | One new pillar article published (rent vs own). Keep to 2 a month (docs/business/marketing-plan.md). |
| N2 Remove the grant article | ✅ | Deleted, 301 to /insights/. |
| N3 Named author | ✅ 🟡 | Every article: "By Razali, Founder" with bio; photo once added. |
| N4 Contradictory range | ✅ | Cost article rewritten. |
| N5 "What we charge" + disclosure | ✅ | Live price table from the catalogue, bias disclosure, link to /websites/. |
| N6 Longer, sourced articles | ✅ | Two pillar articles (about 1,400 and 1,300 words) with sources; LHDN link added to the e-invoicing article. |
| N7 Topic-specific CTA | ✅ | Each article picks Websites, Systems or Custom. |
| K1 Email in plain HTML | ✅ | |
| K2 "Senior architect within one hour" | ✅ | |
| K3 One true address | 🟡 | |
| K4 Evening slots vs office hours | ✅ | Evening slots removed; hours Monday to Friday, 9am to 6pm. |
| K5 Budget and timeline fields | ↪ | The audit's later blueprint (3.18) says 4 fields and ask budget and dates on the call. Followed 3.18. |
| K6 One set of social links | ✅ 👤 | One set everywhere from the CMS. Delete any account you don't actually post on. |
| K7 Same CTA label | ✅ | |
| 3.16 Legal pages | ✅ | See Part 6 and Part 14. |
| X1 Coming Soon | ✅ | Deleted, 301 to /, not in the sitemap. |
| 3.18 Blueprints for the 7 pages | ✅ | Each page follows its blueprint, 6 to 8 sections. Case study template: `src/content/case-studies/example-template.md` and the CMS. |

## Part 4: Pricing
✅ Superseded by Part 12, as the audit says.

## Part 5: Technical

| # | Status | Notes |
|---|---|---|
| T1 Trailing slashes | ✅ | `trailingSlash: 'always'`; a scan of every built page found 0 links without a slash and 0 broken links. |
| T2 Security headers | ✅ | `public/_headers`: HSTS, CSP, X-Frame-Options, Permissions-Policy, nosniff, Referrer-Policy. |
| T3 `Access-Control-Allow-Origin: *` | ✅ | Removed for pages in `_headers`. |
| T4 Coming Soon in the sitemap | ✅ | |
| T5 Duplicate brand in titles | ✅ | |
| T6 Accessibility | ✅ | Lighthouse accessibility 100; tap targets checked at 44px. |
| T7 hreflang | 👤 | Add when BM pages exist. |
| T8 Botpress | ✅ | Removed. |
| T9 Own PageSpeed | ✅ 👤 | Local Lighthouse 99 to 100. Re-test the live site after deploy. |
| T10 Structured data | ✅ | ProfessionalService (with address and SSM once set), Product with price for each system, FAQPage, BreadcrumbList, Article with a Person author. |
| T11 Demo path | ✅ | |
| T12 Conversion tracking | ✅ 👤 | Clicks and submits are sent as events (`quote_click`, `whatsapp_click`, `buy_click`, `demo_click`, `site_visit_click`, `form_submit`, `order_request`). **Switch on Cloudflare Zaraz** to record them. |
| T13 Demo security | 👤 | No demos exist now. Rules for when they do: docs/ops/compliance-controls.md. |
| T14 Licence check messaging | ✅ | |

Also done: React, Three.js, GSAP, Lenis, Motion, Leaflet and Partytown removed (115 packages); the default Astro favicon replaced with icons cut from your logo; a real 1200x630 share image (it was missing); header logo shrunk from 249KB to 6KB; the headline font preloaded.

## Part 6: Legal (first findings)

| # | Status | Notes |
|---|---|---|
| L1 Identity in footer and policies | 🟡 | Built into every policy; fills in from the CMS. |
| L2 Named privacy contact | ✅ 👤 | "Razali, Founder" at info@wssdevlabs.com. Create privacy@wssdevlabs.com if you want a separate inbox, then change it in the CMS. |
| L3 Name providers and countries | ✅ 👤 | Cloudflare, Web3Forms, Meta, Google, bank, accountant. **Check that Google is really your email host** and correct it if not. |
| L4 Licence, not ownership | ✅ | |
| L5 Refund policy | ✅ | /refunds/ |
| L6 Dispute venue | ✅ | Negotiation, mediation (AIAC), then Kuala Lumpur courts; Tribunal for Consumer Claims for consumers. |
| L7 to L9 Guarantees | ✅ | |
| L10 Grants | ✅ | Nothing left on the site. |
| L11 Testimonial form | ✅ | No public submission form. |
| L12 Logos without permission | ✅ | |

## Part 7: Marketing plan
👤 In docs/business/marketing-plan.md and docs/business/sales-playbook.md. ✅ The rent vs own calculator (lead magnet) is live on /systems/ and every ecosystem page. ✅ First content-calendar article published.

## Part 8: Action plan

**Today:** all 10 items ✅ (partners section, case-study cards, testimonials in nav, Coming Soon, fake demo frames, hero placeholder, menu labels, template text, top-30 guarantee, one-hour reply promise).

**Week 1:** positioning, mission, vision, principles ✅ · SSM, legal name, address 🟡 · grants and "+8% SST" removed ✅ · price ladder ✅ · stats ✅ (removed) · EN/BM toggle ✅ · security headers ✅ · PageSpeed ✅ local, 👤 live · ask past clients for reviews 👤.

**Weeks 2 to 4:** 7-page restructure + redirects ✅ · old pages deleted ✅ · new header, one WhatsApp button, chooser ✅ · HCI checklist ✅ · About rewrite ✅ (photo 🟡) · 15 public systems with price, tech specs and FAQ ✅ · "perpetual licence" ✅ · trailing slashes, labels, alt text ✅ · Care Plan launched ✅ · conversion tracking ✅ (Zaraz 👤) · Google Business Profile 👤.

**Months 2 to 3:** case studies 🟡 (template ready) · real checkout 👤 · demo videos 👤 (`videoUrl` ready) · calculator ✅ · 2 articles a month 👤 · lawyer review 👤 · LinkedIn and TikTok 👤 · BM translation 👤 · test with 5 SME owners 👤 (docs/business/usability-test-script.md).

**Month 6 checkpoint:** 👤 11 April 2027 (docs/business/marketing-plan.md).

**Legal track:** see docs/legal/README.md. **Pricing and ecosystem track:** prices ✅, Founding Client Programme ✅ (counter in the CMS), integration layer, hardware partner and pilot site 👤 (docs/business/ecosystem-readiness.md).

## Part 9: Straight talk
👤 These are for you. The site now reflects points 3 to 6 (no aspirational copy, no fake proof, "own, don't rent" up front, proof slots ready). Points 1, 2 and 7 are business decisions: stop building new systems until 5 existing ones have each sold 3 times; resist adding services; build the recurring layer (Care Plans are now live and pre-selected in every quote).

## Part 10: HCI

| Item | Status |
|---|---|
| 10.1 Hick's law, cognitive load, recognition, consistency, progressive disclosure, system status, error prevention, trust at decisions, Fitts's law | ✅ 3 offers, 3 tiers, 15 products in 4 buyer groups, plain words, prices next to products, one glossary, collapsed details, "what happens next" screens, renewal shown on cards, big buttons, sticky mobile bar |
| 10.2 Things that make users dizzy | ✅ Intro animation, chat bubble, cookie banner, fake toggle, icon-only links, repeated CTAs, jargon lists, the 41-product grid and stock photos are all gone |
| 10.3 Mobile-first rules | ✅ Sticky bottom bar, 44px targets, 16px body text, price tables stack on phones, hero fits one screen, big submit button. 👤 Test on a mid-range Android on 4G |
| 10.4 Accessibility | ✅ Lighthouse 100; one h1 per page; details/summary accordions; reduced motion respected; visible focus outline |
| 10.5 Microcopy | ✅ Every "Instead of / Write" swap applied |
| 10.6 Test with 5 people | 👤 Script ready |
| 10.7 Before vs after | ✅ 7 pages, 4 links + 1 button, 3 website prices, 15 products, WhatsApp the only overlay, 4 form fields, 1 reply promise |

## Part 11: Visual and browser audit

| # | Status | # | Status |
|---|---|---|---|
| V1 Fake demo | ✅ | V12 Opaque header | ✅ |
| V2 Hero placeholder | ✅ | V13 Anchor offset | ✅ (scroll padding) |
| V3 Empty partners | ✅ | V14 One action colour | ✅ (red; green only for WhatsApp; blue gone) |
| V4 Empty dark card | ✅ | V15 Red highlight once | ✅ (home hero only) |
| V5 Empty dotted panel | ✅ | V16 Stock photos, card carousels | ✅ |
| V6 Icon-only menu | ✅ | V17 Content invisible until scrolled | ✅ (no scroll animations) |
| V7 No mobile menu | ✅ | V18 Contrast | ✅ (all text 4.5:1 or better) |
| V8 Mobile first screen | ✅ | V19 Tap targets | ✅ |
| V9 No prices on Express cards | ✅ | V20 Contact form | ✅ |
| V10 "Hover to see systems" | ✅ | V21 Stats strip | ✅ |
| V11 Analytics before consent | ✅ | V22 Arial Google Fonts request | ✅ |

V11: analytics is cookieless, the banner is gone, and the Cookie Policy now describes exactly what runs.

## Part 12: Pricing and packages

| Item | Status |
|---|---|
| 12.0 Founder decisions (44% below market, Founding Client, 12 months of updates, no grants, no SST) | ✅ |
| 12.1 New prices | ✅ All in `src/data/catalog.ts`, with each price's review target |
| 12.2 Every old price point removed or replaced | ✅ 31 price points down to the new catalogue |
| 12.3 Missing prices added | ✅ Cards, product pages, installation, branding, training, data import, Care Plans, year-2 hosting, Custom, Rescue Audit, extra page, copywriting, bilingual |
| 12.4 A Websites (spec, add-ons, education) | ✅ ↪ Business "Not included" corrected to "more than 6 pages" (the audit still said 8 after trimming scope to 6) |
| 12.4 B Local SEO Setup, AI WhatsApp | ✅ Local SEO Monthly kept unpublished until 2 clients have results |
| 12.4 C Systems: tiers, 41 statuses, licence, extras, rent vs own | ✅ ↪ see Corrections |
| 12.4 D Custom: Discovery, Build, Mobile App, Rescue Audit | ✅ |
| 12.4 E Care Plans | ✅ Plus a full SLA draft |
| 12.4 F Go Digital Bundle (RM6,790, saves RM495) | ✅ Totals calculated from the catalogue |
| 12.4 G Founding Client Programme | ✅ Honest counter from the CMS; One-Page excluded; terms on /terms/ |
| 12.4 H Removed items | ✅ |
| 12.5 Standard terms | ✅ /terms/ |
| 12.6 Package card layout | ✅ |
| 12.7 Education blocks | ✅ Home teaser; Facebook vs website, CMS, store vs marketplace, why SEO takes months, WhatsApp fees, rent vs own table, "Is this right for you?", "What you need to run it", ready-made or custom, why pay for discovery, why maintenance, app or mobile website. Not on About, Contact or legal pages |
| 12.8 Sales playbook | ✅ docs/business/sales-playbook.md |
| 12.9 Profit check | ✅ docs/business/pricing-and-margins.md |
| 12.10 Pricing checklist | ✅ / 👤 validate the estimate prices with 3 competitor quotes; track hours; price review on 11 April 2027 |
| 12.12 Sources | ✅ Kept in the claims evidence file and the cost article |

## Part 13: Ecosystems

| Item | Status |
|---|---|
| 13.0 Rules | ✅ Built only from existing systems; hardware quoted separately; Care Pro required |
| 13.2 Smart Premises | ✅ ↪ Published with the honest status "Now booking our first pilot site", because the integration layer, demo and hardware partner aren't in place yet |
| 13.3 Smart Outlet | ✅ ↪ Published as "Now booking pilot outlets" |
| 13.4 Smart Clinic, 13.5 Smart Warehouse | ✅ ↪ Full specs in the data, **unpublished** (rule 2: only after the first two have reference clients) |
| 13.6 Ecosystems 5 to 8 | ✅ Outlined in data and docs only |
| 13.7 How they appear | ✅ "Complete solutions" row on /systems/, one page each, "Book a site visit", no fourth chooser card |
| Readiness checklists | 👤 docs/business/ecosystem-readiness.md |

## Part 14: Legal and compliance review

| Item | Status |
|---|---|
| 14.1 Top 15 risks | 1, 6, 9, 10, 15: ✅ on the site · 2: 🟡 · 3, 4, 5, 7, 8, 11 to 14: 👤 with drafts in docs/legal/ |
| 14.2 A Structure, identity, trademark | 👤 Incorporate before the first ecosystem; trademark search; move accounts into the business name |
| 14.2 B Claims | ✅ Plus docs/business/claims-evidence.md |
| 14.2 C Selling online | ✅ Disclosures on every product page; order request with terms acceptance; 👤 real checkout |
| 14.2 D Contract architecture | ✅ Drafts: MSA, SOW, Change Request, UAT and Handover certificates |
| 14.2 E IP | ✅ Background-IP clause in Terms and MSA; freelancer IP assignment draft; 👤 SBOM and NOTICE files |
| 14.2 F Licence | ✅ /licence/ (one business, one live installation + one test copy; 14-day refund rule) |
| 14.2 G PDPA | ✅ Bilingual Privacy Notice, DPA draft, breach runbook, named contact; 👤 DPO threshold check |
| 14.2 H Security and access | ✅ Access authorisation form; security headers |
| 14.2 I Hardware | ✅ Hardware Schedule and Partner Agreement drafts |
| 14.2 J Health | ✅ Clinic Addendum draft; Smart Clinic unpublished |
| 14.2 K Condominiums | ✅ Proposal pack checklist and guardhouse notice template |
| 14.2 L AI | ✅ AI Assistant Addendum; disclosure wording on /websites/; AI products on hold |
| 14.2 M Payments and tax | ✅ No card data, money straight to the client; MyInvois stated honestly; 👤 e-invoicing and SST thresholds with your accountant |
| 14.2 N People | ✅ Freelancer agreement draft |
| 14.2 O Marketing consent | ✅ Separate unticked marketing box on the form; Founding Client Agreement; honest-review wording |
| 14.2 P Insurance | 👤 |
| 14.2 Q Complaints and disputes | ✅ /terms/ section 19 |
| 14.3 Issue register | See 14.1 and docs/legal/README.md |
| 14.4 Document pack (20 items) | ✅ 1 to 6 live on the site; 7 to 20 drafted in docs/legal/ |
| 14.5 Clause library | ✅ Used throughout the Terms, Licence and MSA |
| 14.6 Website legal fixes | ✅ Including new /licence/, /refunds/, /care-plan-terms/ |
| 14.7 Per-ecosystem compliance | ✅ On each published ecosystem page and in docs |
| 14.8, 14.9 Controls | ✅ docs/ops/compliance-controls.md |
| 14.10 Lawyer questions | ✅ docs/legal/README.md |
| 14.11 Legal action plan | ✅ / 👤 docs/legal/README.md |

---

## Corrections to the audit (from the real product data)

1. **`wss-vims` is the Visitor Management system.** The audit thought it duplicated `wss-vms`. It's the public "Visitor Management" product; nothing needed merging.
2. **`wss-vms` is Vehicle Maintenance,** not visitor management. It takes the 15th public slot.
3. **`wss-training` is a training and teambuilding service, not software.** Selling it as a RM1,119 licence would misdescribe it, so it's on hold (and off-strategy per 1.2).
4. **`wss-emers` is canteen meal redemption, not emergency broadcast.** It moved to Smart Workplace and Smart Campus; Smart Premises "Complete" lists facility booking (FABS) in its place.
5. **Owning vs renting, honestly:** for one outlet, owning a POS **with** a Care Plan costs more over 3 years than a RM158/month subscription. The calculators and the new article show both sides, as the audit's fairness rule asks (12.4 C).

Final counts: 15 public, 15 inside ecosystems, 3 on request, 8 on hold (the audit had 7 on hold + 1 merged).
