# FINANCE

This file tracks WSS Devlabs' company-wide pricing (not billing specific to this
website project, which is internal/n/a).

## ⚠️ 2026-08-25 rewrite note

The pricing structure previously documented here (a 5-tier Launch/Expand/Grow/Scale/Custom
ladder on a standalone `/pricing` page) **no longer exists** — the founder had `/pricing`
deleted entirely (redirects to `/express`; see `memory/DECISIONS.md`). `src/data/pricing.json`/
`.ts`/`PricingCard.astro` are now orphaned dead code, not live pricing. Below reflects what's
actually live as of this rewrite.

## Live pricing — WSS Express (`src/data/express.ts`, rendered on `/express`)

Three fixed packages, no page-count/segment ladder — this is now the site's only
standalone "pricing page" in practice (it also absorbed the old `/faq` content as
its last section).

| Package | Price | Turnaround | Audience |
|---|---|---|---|
| WSS Express Landing | RM 180 / year | 3–5 days | Micro-SMEs, hawkers, solo traders — 1 page |
| WSS Express Starter | RM 1,500 (one-time) | 3–7 days | Growing SMEs/clinics/consultancies — up to 3 pages, marked "Most Popular" |
| WSS Express Business | RM 4,500 (one-time) | 7–14 days | Retail/wholesale/booking ops — full e-commerce, PMKS Madani grant-eligible |

## Live pricing — service category comparison tables (`/services/[category]` pages)

These are the other two places real prices appear on the site, both added 2026-08-25:

- **`/services/web-software-app-development`**: SME website packages RM 1,799–RM 3,499
  (by page count, +8% SST) and Corporate packages RM 4,299–RM 7,399 (Corporate→Champion
  tier, +8% SST) — comparison tables, not the old SWOT-sourced 9-tier ladder (that's the
  now-orphaned structure this file used to document).
- **`/services/digital-design-media-marketing`**: Google Ads campaign management
  RM 500–RM 2,000/month; SEO retainer RM 1,200–RM 1,900/month; one-time SEO essentials
  setup (flat fee, exact figure in the page copy).

## Grant angle (still applies to Express Business + SME web packages)

MSME Digital Grant MADANI: **50% matching, up to RM5,000, not full coverage** (client
still pays the other half). Administered by MDEC, first-come-first-served against a
fixed pool, one claim per business, requires ≥6 months SSM registration and ≥RM50,000
annual turnover. Never market this as "free."

## Quotes / Invoices
Use `.claude/skills/cfo/templates/quotation.md` and `invoice.md` per client.

## P&L
Not yet tracked — set up once real client volume starts flowing.

## Business contact details still needed
`legalName`/`ssmNumber`/`sstNumber` in `src/data/site.json` are still blank.
Email corrected 2026-08-25: `hello@wssdevlabs.com` → `info@wssdevlabs.com`
(WhatsApp/phone/social were already real).
