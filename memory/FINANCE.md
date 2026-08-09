# FINANCE

This file tracks WSS Devlabs' company-wide pricing (not billing specific to this
website project, which is internal/n/a). Live on `/pricing` — see
`src/data/pricing.json`.

## Rates — pricing ladder (superseded 2026-08-09, see DECISIONS.md)

**Status: prices are explicit placeholders.** Founder pulled this structure and
these exact figures from a competitor (SWOT, swot.com.my /
websitedesign.swot.com.my) on 2026-08-09 and said to ship the package LIST first,
tune pricing later. Do not treat these numbers as final — check `src/data/pricing.json`
for the current live figures before quoting.

| Tier | Segment | Price (SWOT-matched, placeholder) | Scope | Turnaround |
|------|---------|-------|-------|------------|
| 1 Page | Informative | RM 1,799 | 1 page, 1 animated banner, CMS, 3 SEO keywords | ~7–10 business days |
| 5 Pages | Informative | RM 2,599 | 5 pages, 2 animated banners | ~7–10 business days |
| 5+ Pages | Informative | RM 2,799 | 5 pages + product catalogue (20 products) | ~7–10 business days |
| 10 Pages | Informative | RM 3,299 | 10 pages, 3 animated banners | ~1–2 weeks |
| 10+ Pages | Informative | RM 3,499 | 10 pages + product catalogue (20 products) | ~1–2 weeks |
| 1 Page Ecommerce | Ecommerce | RM 3,899 | 1 page, full checkout, inventory, shipping | 2–3 weeks |
| 5 Pages Ecommerce | Ecommerce | RM 4,799 | 5 pages, full checkout | 2–3 weeks |
| 10 Pages Ecommerce | Ecommerce | RM 5,799 | 10 pages + delivery scheduling/bundle plugin | 3–4 weeks |
| 10+ Pages Ecommerce | Ecommerce | RM 6,799 | 10+ pages + multi-tier/dynamic pricing | 3–4 weeks |
| Launch | Growth | From RM 3,000 | Up to 8 pages, custom-designed | 2–4 weeks |
| Build | Growth | From RM 15,000 | App / custom CMS / AI feature | 6–10 weeks |
| Enterprise | Growth | Custom quote | ERP / bespoke architecture | scoped individually |
| Care Plan (add-on, any tier) | Recurring | RM 99–199 / month | Hosting, updates, up to 2 minor edits/mo | ongoing |

**Known overlap to resolve later:** the new "10+ Pages" Informative package
(RM3,499) sits right next to "Launch" (from RM3,000, up to 8 pages) with similar
scope — these two segments (SWOT-mirrored ladder vs. the original growth ladder)
weren't reconciled against each other. Worth a pass once pricing is finalized.

**All SWOT-matched packages exclude 8% SST** and carry a **RM549/year renewal**
(domain/hosting/SSL) from year 2 — matches SWOT's terms, carried over as-is.

**Grant angle (Informative tier only, 1 Page/5 Pages/5+ Pages):** positioned as
compatible with the MSME Digital Grant MADANI — **50% matching, up to RM5,000, not
full coverage** (client still pays the other half). Administered by MDEC,
first-come-first-served against a fixed RM50M pool, one claim per business,
requires ≥6 months SSM registration and ≥RM50,000 annual turnover. Never market
this as "free" — see `.claude/skills/admin/templates/grant-assistance-info-sheet.md`
for corrected per-package math (needs re-checking again now that prices changed).

## Quotes / Invoices
Use `.claude/skills/cfo/templates/quotation.md` and `invoice.md` per client.

## P&L
(not yet tracked — set up once volume from the SME tier starts flowing)
