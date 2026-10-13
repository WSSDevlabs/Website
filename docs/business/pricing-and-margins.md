# Pricing and margins

> The prices themselves live in `src/data/catalog.ts` (the only source of truth). This file explains how they were set, where they're thin, and when to review them. From audit Part 12.

## How the prices were set

Founder decision (11 Oct 2026): market reference x 0.75 x 0.75, about **44% below market**, to win the first clients. No SST added. Every price ending in 9 or 0.

| Item | Market reference | Step 1 (x 0.75): **review target** | Live price |
|---|---|---|---|
| One-Page Website | RM1,000 | RM750 | RM569 |
| Business Website | RM5,500 | RM3,990 | RM2,990 |
| Store Website | RM10,000 | RM7,490 | RM5,590 |
| Care Basic | RM225/month | RM169 | RM129/month |
| Care Pro | RM650/month | RM449 | RM339/month |
| Hosting only | RM400/year | RM290 / RM490 | RM219 / RM369 per year |
| Local SEO Setup | RM1,500 (estimate) | RM1,090 | RM819 |
| Local SEO Monthly (Phase 2, unpublished) | RM1,760 | RM1,290 | RM969/month |
| AI WhatsApp setup | RM1,100 | RM829 | RM629 |
| AI WhatsApp monthly | RM165 | RM129 | RM99/month |
| Custom build (from) | RM15,000 | RM11,000 | RM8,250 |
| Mobile app (from) | RM30,000 | RM22,000 | RM16,500 |
| System Basic | n/a | RM749 | RM569 |
| System Standard | RM1,900 | RM1,490 | RM1,119 |
| System Advanced (estimate) | RM4,000 | RM2,990 | RM2,249 |

The `reviewTarget` fields in `catalog.ts` hold the Step 1 prices.

## Items marked estimate: validate with 3 competitor quotes

Local SEO Setup RM819 · System Advanced RM2,249 · Installation RM369 · Branding from RM669 · Training RM219 · Data import from RM299 · Extra page RM219 · Copywriting RM149/page · BM + EN +RM749 / +RM1,119 · Discovery Sprint RM1,129 · Rescue Audit RM749 · Mobile app from RM16,500 · every ecosystem price.

## Profit check: the RM70/hour floor (audit 12.9)

Track real hours on the first 3 projects of each type. If any lands below RM70/hour, cut its scope or raise its price.

| Package | Price | Est. hours | Effective rate | Watch out for |
|---|---|---|---|---|
| One-Page (5 sections, template) | RM569 | 6 to 8 | RM71 to 95/h | Only works with a polished template and a strict 1 revision round |
| Business (6 pages) | RM2,990 | 28 to 35 | RM85 to 107/h | Late content |
| Store (10 pages, 50 products) | RM5,590 | 55 to 70 | RM80 to 102/h | Product loading beyond 50 is charged |
| Standard licence | RM1,119 | 2 to 4 | High | Support must stay inside 30 days |
| Installation | RM369 | 3 to 5 | RM74 to 123/h | Use a scripted installer |
| Discovery Sprint | RM1,129 | 10 to 14 | RM81 to 113/h | Keep workshops to 2 x 2 hours |
| Custom Build | from RM8,250 | 80 to 110 | RM75 to 103/h | "From" only for genuinely small systems |
| Care Basic | RM129/month | 1 to 1.5/month | RM70 to 110/h | Only healthy at 20+ clients; automate backups and monitoring |
| Founding Client, Business | RM2,390 | 28 to 35 | RM68 to 85/h | Borderline: only 5 clients, only for the full proof package |

**One-Page is excluded from the Founding Client Programme** (RM455 would be below the floor).

## Honest economics of owning vs renting (for sales conversations)

For a single outlet, owning a POS with a Care Plan costs more over 3 years (about RM7,932) than a RM158/month subscription (RM5,688). Owning wins clearly when the buyer doesn't need monthly support (about RM3,288 with hosting), or has several outlets or users. Say this openly: the rent vs own article and calculators already do.

## Price review

- **When:** after the 5 Founding Client projects, or 6 months after relaunch (**11 April 2027**), whichever comes first. Put it in your calendar.
- **Move toward:** the Step 1 column.
- **How:** change `price` in `src/data/catalog.ts`. Every page, card, calculator and article table updates automatically.

## Sales rules

1. Lead with the outcome, then the price.
2. Anchor honestly ("agencies typically quote RM3,000 to 8,000 for a custom SME site").
3. Show the own vs rent maths for systems, including the Care Plan.
4. Pre-select a Care Plan in every quote.
5. Never discount silently. Remove scope instead of cutting the price.
