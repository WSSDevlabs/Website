# Claims evidence file

> Audit 14.2 B: "Keep a claims evidence file: for every number or claim on the site, the evidence behind it, with a date." Every claim on the website must be true today and provable. Review this file every 6 months, and whenever a page changes.

**Last reviewed:** 14 October 2026

## Numbers and comparisons

| Claim on the site | Where | Evidence | Checked | Owner |
|---|---|---|---|---|
| "A typical POS subscription costs RM158 a month" (3 years = RM5,688) | Home, /systems/, rent vs own article | Published entry plan of a Malaysian POS provider: https://qashier.com/my/pricing-fnb/ (RM158 to 238/month). Don't name the provider on the site. Screenshot the pricing page and save it with the date. | Oct 2026 (from audit 12.12) | Founder |
| POS SaaS plans RM122 to 471/month per outlet | Audit only (not on site) | https://main.billplz.com/blog/insights/pos-system-malaysia-guide | Oct 2026 | Founder |
| Website price ranges RM500 to RM20,000+, custom SME RM3,000 to 8,000, KL corporate RM8,000 to 18,000, stores RM5,000 to 20,000+ | Cost article | Sources listed at the end of the article (Zenweb, Lamanify, Rebrand, WDD, Bingo) | Oct 2026 | Founder |
| Maintenance RM150 to 300/month for small sites | Cost article | Webbit, Ulement (linked in the article) | Oct 2026 | Founder |
| Domain RM80 to 200/year, hosting from about RM200/year | Cost article | Audit 12.1 market table (Zenweb, Cerouno) | Oct 2026 | Founder |
| Hosting estimate RM50/month in calculators | /systems/, rent vs own article | **Placeholder.** Replace with the real monthly price of the host you recommend (`RENT_VS_OWN.hostingEstimateMonthly` in `src/data/catalog.ts`). | Needs action | Founder |
| Google Business Profile statistics (60% check before visiting, etc.) | GBP article | LocalIQ: https://localiq.com/blog/local-seo-statistics/ | Jul 2026 | Founder |
| E-invoicing threshold RM1,000,000 from 1 Jan 2026 | E-invoicing article | ClearTax article linked + LHDN official page (linked). Re-check with LHDN and your accountant. | Jul 2026, re-check now | Founder |

## Performance and quality promises

| Claim | Where | Evidence | Checked |
|---|---|---|---|
| "We target a 90+ mobile Lighthouse score at handover, and fix it free if we miss" | /websites/, /terms/ | Conditional promise, not a guarantee. **Not yet measured on this version of our own site.** Run PageSpeed Insights (mobile) on the live site after deploy and put the score in the CMS (`pageSpeedMobile`). If our own site scores under 90, fix it before making the promise prominent. | Needs action |
| "We reply within one business day. Fixed quote within three." | Everywhere | A promise the founder must keep on their worst week (audit 1.6). Track response times in the CRM sheet. | Ongoing |

## Company and capability claims

| Claim | Where | Evidence needed | Status |
|---|---|---|---|
| Founder-led; Razali scopes, builds and supports every project | Home, About, FAQ | True per founder. If a freelancer works on a project, tell the client first. | OK |
| Home stats: "15 ready-made systems", "10+ custom projects delivered", "RM0 monthly licence fees" | Home hero | 15 = the public systems in `src/data/systems.ts`. RM0 = no licence fee on any system. **"10+ custom projects" was supplied by the founder in September 2026: keep a list of the projects behind it.** | Founder to confirm "10+" |
| Based in Kuala Lumpur; meetings in the Klang Valley or online | Footer, About, Contact, policies | From the CMS (`baseLocation`, `meetings`). Replace with the exact true location once the registered address is set. | Founder to confirm |
| "Founding Client Programme: X of 5 places left" | Home | `foundingSlotsLeft` in the CMS. Update it the day a place is taken. | Ongoing |
| 15 ready-made systems for sale, each with source code | /systems/ | Each must actually be deliverable today with an install guide. Confirm per product, and its PHP/MySQL requirements. | Founder to confirm |
| "Watch any system working on a screen-share" | /systems/, product pages | Founder must be able to demo every public system with sample data. | Founder to confirm |
| Licence check works offline, never phones home, no kill switch | Product pages, /licence/ | Matches the Ed25519 offline verification described in the old design doc. Confirm in the code. | Founder to confirm |
| Kiosk supports more than one language | Kiosk page | From the product data ("Multi-language support"). Confirm. | Founder to confirm |
| Event space booking takes FPX deposits through ToyyibPay | Event space page | From the product data. Confirm. | Founder to confirm |
| Systems' standard interface is in English | All system pages | Confirm per product; change `language` in `src/data/systems.ts` where BM exists. | Founder to confirm |
| Smart Premises and Smart Outlet "now booking pilot sites" | Ecosystem pages | Honest status: modules exist, connected dashboard being finished with the first pilot. Update the status text the day it changes. | OK |

## Things the site must never claim (removed in the audit)

- Grants of any kind, grant matching, "after grant" prices
- "Senior engineers", "senior architect", "enterprise", "offices in Cyberjaya and Kuala Lumpur"
- Partner or client logos without written permission
- Live demos that don't load the real system
- Guaranteed rankings, guaranteed speed without conditions, "sub-50ms", "won't lose rankings"
- "100% ownership" of ready-made systems (it's a perpetual licence)
- Stats such as "2,000+ hours", "15+ happy clients", "40+ systems"
- A "live demo" or preview address (such as demo.wssdevlabs.com) unless it really loads the system
