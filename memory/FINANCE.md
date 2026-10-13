# FINANCE

Company-wide pricing for WSS DevLabs (this website project itself is internal, no billing).

## Source of truth: `src/data/catalog.ts`

Every price on the website is read from `src/data/catalog.ts`. Change it there and every card, calculator, FAQ, article table and schema updates. This file is a summary; if they disagree, the code wins.

**Basis (founder decisions, 11 Oct 2026, audit Part 12):** prices sit about 44% below the Malaysian market reference (reference x 0.75 x 0.75) to win the first clients. No SST is added (prices are final). No grant offering. 12 months of updates included with every system licence. Founding Client Programme: 5 places, 20% off. **Price review: 14 April 2027** or after the 5 Founding Client projects, moving toward each item's `reviewTarget` (the "market minus 25%" level).

## Websites (one-time)
| Package | Price | From year 2 |
|---|---|---|
| One-Page Website | RM569 | Hosting + domain RM219/year |
| Business Website (most popular) | RM2,990 | RM219/year |
| Store Website | RM5,590 | RM369/year |

Add-ons: extra page RM219 · copywriting RM149/page · BM + EN +RM749 (Business) / +RM1,119 (Store) · payment gateway RM369 (Business; included in Store) · Local SEO Setup RM819 · AI WhatsApp Assistant RM629 setup + RM99/month (+ Meta fees at cost). Local SEO Monthly (RM969) stays unpublished until 2 clients have results.

Payment: One-Page and Business 50/50; Store 40/30/30.

## Ready-made systems (one-time, perpetual licence + source code)
Basic RM569 · Standard RM1,119 · Advanced RM2,249. Extras: installation RM369, branding from RM669, training RM219, data import from RM299, update install RM219 (free on a Care Plan). Paid in full before download. 30 days support, 12 months updates, 14-day refund if it can't be installed and we can't fix it.

## Custom
Discovery Sprint RM1,129 (credited within 60 days) · Custom Build from RM8,250 (typical RM14,000 to RM28,000; 30/40/30) · Mobile App from RM16,500 · Rescue Audit RM749 (credited toward the fix).

## Care Plans (recurring)
Hosting Only RM219/year (sites), RM369/year (stores) · Care Basic RM129/month or RM1,290/year · Care Pro RM339/month or RM3,390/year (+RM119/month per extra site for complete solutions). Pre-select a Care Plan in every quote.

## Bundles and complete solutions
Go Digital Bundle RM6,790 (saves RM495). Smart Premises RM9,690 / RM18,690 + hardware, Care Pro required. Smart Outlet RM4,490 / RM11,900 + hardware. (Smart Clinic and Smart Warehouse priced in the data, unpublished.)

## Margin floor
RM70/hour of founder time. Track hours on the first 3 projects of each package (`docs/business/pricing-and-margins.md`). One-Page is excluded from the Founding Client discount because it would fall below the floor.

## Quotes / Invoices
Use `.claude/skills/cfo/templates/quotation.md` and `invoice.md`, or `docs/legal/statement-of-work-template.md`. Prices must match `catalog.ts`.

## P&L
Not yet tracked; set up once client volume starts.

## Business details still needed
`legalName`, `ssmNumber`, `registeredAddress` in `src/data/site.json` are still blank (they render automatically once set).
