# FINANCE

Company-wide pricing for WSS DevLabs (this website is an internal project, not billed).

## 2026-10-11 rewrite: the audit price catalogue is the only price list

All earlier price structures are gone (Express RM180/1,500/4,500, SME and Corporate tables, UI/UX tiers, SEO retainers, Google Ads, the SWOT-matched ladder, Marketplace RM749, Bespoke RM8,500, every grant figure and every "+8% SST" label). **Live prices exist in exactly one place: `src/data/catalog.ts`.** Every page, card, calculator, schema and article table reads from it.

Founder decision (11 Oct 2026): market reference x 0.75 x 0.75 (about 44% below market). No SST added. Review target (the x 0.75 level) is stored per item as `reviewTarget`.

| Offer | Price |
|---|---|
| One-Page Website | RM569 one-time (+ RM219/year hosting and domain from year 2) |
| Business Website (most popular) | RM2,990 |
| Store Website | RM5,590 (+ RM369/year from year 2) |
| Add-ons | Extra page RM219 · Copywriting RM149/page · BM+EN +RM749/+RM1,119 · Payment gateway RM369 · Local SEO Setup RM819 · AI WhatsApp RM629 + RM99/month |
| Systems | Basic RM569 · Standard RM1,119 · Advanced RM2,249 (perpetual licence, 30 days support, 12 months updates) |
| System extras | Installation RM369 · Branding from RM669 · Training RM219 · Data import from RM299 · Update install RM219 (free on a Care Plan) |
| Custom | Discovery Sprint RM1,129 (credited within 60 days) · Build from RM8,250 (usually RM14,000 to 28,000) · Mobile app from RM16,500 · Rescue Audit RM749 |
| Care Plans | Hosting Only RM219/RM369 per year · Care Basic RM129/month or RM1,290/year · Care Pro RM339/month or RM3,390/year (+RM119/month per extra ecosystem site) |
| Go Digital Bundle | RM6,790 (RM7,285 separately) |
| Ecosystems | Smart Premises RM9,690 / RM18,690 · Smart Outlet RM4,490 / RM11,900 (+ hardware, Care Pro required where stated). Smart Clinic and Smart Warehouse priced but unpublished |
| Founding Client Programme | 20% off (not One-Page, Care Plans or hardware) for the first 5 clients: Business RM2,390, Store RM4,470, Standard system RM895. Counter: `foundingSlotsLeft` in `src/data/site.json` |

## Margins and review
- Floor: RM70/hour of founder time. Track hours on the first 3 projects of each package. Detail: `docs/business/pricing-and-margins.md`.
- One-Page is excluded from the Founding Client discount (it would fall below the floor).
- **Price review: 11 April 2027,** or after the 5 Founding Client projects, whichever comes first. Move toward `reviewTarget`.
- Validate every price marked `estimate: true` with 3 competitor quotes.

## Grants and SST
- **No grant offering** (founder decision 11 Oct 2026). Don't mention grants anywhere unless the administrator confirms WSS can issue claimable invoices.
- **No SST added** while not registered. Monitor turnover against the registration threshold with the accountant.

## Quotes and invoices
- Quotation / SOW template: `docs/legal/statement-of-work-template.md` (Care Plan pre-selected).
- Payment schedules: websites 50/50; stores 40/30/30; custom 30/40/30; systems 100% upfront; Care Plans in advance.
- System orders arrive as "Order request" emails from the site; invoice within one business day, deliver after payment clears.

## P&L
Not tracked yet. Start with the first paid project: revenue, hours, effective rate, Care Plan MRR.

## Business details still needed
`legalName`, `ssmNumber`, `registeredAddress` in `src/data/site.json` are blank. They appear automatically in the footer, About, schema and every policy once filled.
