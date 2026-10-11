# WSS DevLabs: Design System

**Updated:** 11 October 2026, after the full website audit. This replaces the earlier "Industrial Concrete" spec.
**Direction:** calm, honest and fast. The site is for Malaysian SME owners, mostly on phones. The design's job is to make the offer, the price and the next step obvious within 5 seconds.

## 1. Rules that come before taste

These come from the audit and override any visual preference:

1. **No fake proof.** No placeholder images, no mock browser frames, no "live demo" that isn't live, no logos without written permission, no invented stats or reviews. If a section has no real content yet, it doesn't render (case studies, reviews, screenshots all switch on from data).
2. **Price on the same screen as the offer.** Every card shows its price on line 2. Prices come only from `src/data/catalog.ts`.
3. **Two calls to action.** Primary: **Get a fixed quote**. Secondary: **See details** / **See systems**. Ecosystems use **Book a site visit**; systems use **Buy now**. No other labels.
4. **One floating element.** The WhatsApp button (desktop) or the sticky bottom bar (phones). No chat widget, no cookie banner, no intro animation.
5. **Plain words.** Would a 50-year-old kedai owner understand it? No "productized", "bespoke", "Ed25519", "TTFB". Benefits before features.
6. **No em dashes or en dashes** in visible copy. Ranges are written "2 to 3 weeks".

## 2. Tokens (`src/styles/global.css`)

| Role | Token | Value | Use |
|---|---|---|---|
| Page background | `--color-paper` | `#fcfbfa` | Every page (one light theme) |
| Soft surface | `--color-paper-dim` | `#f3f2ee` | Alternating sections, footer |
| Text | `--color-ink` | `#19191b` | Headings, important text |
| Body text | `--color-ink-dim` | `#55565a` | Paragraphs (6.9:1 contrast) |
| Small print | `--color-muted` | `#6b6a66` | Captions only (5.1:1) |
| Lines | `--color-line` / `--color-line-strong` | `#e2dfd7` / `#cfcbc1` | Borders, dividers |
| Action | `--color-accent` | `#d92d20` | **The only button colour.** White text passes 4.8:1 |
| Action hover | `--color-accent-dim` | `#b42318` | Hover, red text on light backgrounds |
| WhatsApp | `--color-whatsapp` | `#15803d` | WhatsApp buttons only |

There is no blue, yellow or decorative green. The logo's blue stripe stays in the logo only.

## 3. Type

- **Outfit Variable** for headings (`.h-display`, `.h-section`, `.h-sub`), preloaded because the headline is usually the largest thing on screen.
- **Geist Variable** for body text, minimum 16px.
- **Geist Mono** only for the rare `.eyebrow` label (max one per three sections).
- The red `.highlight` box appears **once**: the home page hero.

## 4. Shape and spacing

- Buttons and chips: full pill, at least 44px tall (`.btn`).
- Cards and panels: 16px radius (`rounded-2xl`).
- Form inputs: 12px radius, 48px tall, label above, help text below.
- Sections: `py-16 md:py-24`. Content width `max-w-6xl`; reading pages `max-w-3xl`.

## 5. Motion

CSS only: hover colour changes, a 1px press on buttons, chevrons that rotate on open. No scroll animations, no smooth-scroll library, no parallax. Content is visible without JavaScript. Everything respects `prefers-reduced-motion`.

## 6. Patterns

| Need | Pattern | Component |
|---|---|---|
| Packages | Price card: badge, name, price, who it's for, 5 benefits, timeline, one button, full spec collapsed | `PriceCard.astro` |
| Systems | Card: name, one-line benefit, price, "See details" | `SystemCard.astro` |
| Long detail | Collapsed by default (`details`/`summary`) | `Disclosure.astro`, `FaqList.astro` |
| Own vs rent | Honest calculator, both sides shown | `RentVsOwnCalculator.astro` |
| Proof | Case studies and reviews, only with permission on file | `CaseStudies.astro`, `Reviews.astro` |
| Closing | One dark panel with one button | `FinalCTA.astro` |
| Icons | Heroicons outline (MIT), one stroke width | `Icon.astro` |

## 7. Images

Real screenshots (with sample data) and a real founder photo are the only images that belong on offer pages. Until they exist, layouts are typographic. Article covers may use licensed stock photos and are marked decorative (`alt=""`). The share image is `public/images/og/default.png`; favicons were cut from the logo's circle mark.

## 8. Checks before shipping a page

- [ ] One `h1`, headings in order
- [ ] Price visible next to the offer
- [ ] Only the two allowed CTA labels
- [ ] No horizontal scroll at 375px; all buttons at least 44px tall
- [ ] No placeholder or stock image presented as our work
- [ ] No em or en dashes in visible text
- [ ] Lighthouse mobile 90+ in every category
