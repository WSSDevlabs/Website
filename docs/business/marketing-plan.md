# Marketing plan

> From audit Part 7. For a solo founder: few channels, done consistently. Replaces the archived SME launch campaign.

## Channels, in priority order

1. **Google Business Profile.** Free, and where SMEs look ("web developer near me").
   - [ ] Verify the profile; categories: web designer, software company.
   - [ ] Add services with the same names and prices as the site.
   - [ ] Add real photos (you at work, real screenshots with sample data).
   - [ ] Post weekly.
   - [ ] **Get 10 reviews from past clients this month.** Ask for honest reviews; never write them yourself or reward positive ones.
   - [ ] Put the profile URL in the CMS (`googleBusinessProfileUrl`).
2. **"Own vs rent" content.** The clearest Malaysian guides on owning vs subscribing to business software. Each links to /systems/. (First one is live: "Renting vs owning business software".)
3. **Founder LinkedIn,** 3 posts a week: builds, client wins (with permission), own vs rent maths, behind the scenes.
4. **TikTok / Reels:** 30-second screen recordings of real systems. "This POS costs RM1,119 once. Here's what it does." Real screens only, never mockups. Reuse each as the system's page video (`videoUrl` in `src/data/systems.ts`).
5. **Insights:** 2 articles a month, every month, each linked to a page you sell.
6. **Partnerships:** accountants, company secretaries, e-invoicing consultants (10% referral).
7. **Not yet:** paid ads. Start only when conversion tracking works (Zaraz, see docs/ops/deploy-checklist.md) and there's real proof on the site.

## Lead magnets
- [x] **Rent vs own calculator:** live on /systems/ and every ecosystem page.
- [ ] **"Which system do I need?" quiz:** 5 questions, recommends a system with its price, collects email or WhatsApp. Build after the first 3 sales show which questions matter.
- [ ] **E-invoicing readiness checklist (PDF):** check the current LHDN rules first.

## Content calendar (next 6 articles)
| # | Title | Links to | Status |
|---|---|---|---|
| 1 | Renting vs owning business software: the 3-year cost for a Malaysian SME | /systems/ | **Published 11 Oct 2026** |
| 2 | Visitor management for condos and offices: paper logbook vs digital, and what the PDPA requires | /systems/wss-vims/, /systems/smart-premises/ | To write |
| 3 | POS systems in Malaysia compared: subscription vs buy-once (fairly include competitors) | /systems/wss-pos/ | To write |
| 4 | How to choose a visitor management system for your office or condo | /systems/wss-vims/ | To write |
| 5 | What happens to your data if your SaaS provider shuts down? | /systems/ | To write |
| 6 | Case study: [first real client] | Relevant offer page | After the first Founding Client |

Rules: 1,200 to 2,000 words for pillar articles, cite official sources, named author, one closing call to action that matches the topic (`cta` in the article's frontmatter).

## Month 6 checkpoint (11 April 2027): measure
- Leads per month, and from which source
- Quote to won rate
- Care Plan subscribers
- Google reviews count
- Which 3 systems get the most views and enquiries: double down; consider dropping the rest
- Founding Client places filled (target 5) and case studies published
- Effective hourly rate per package vs the RM70/hour floor
