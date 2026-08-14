# DESIGN — WSS DevLabs website

Direction locked 2026-08-14. This file is law for `/dev` — check it before
touching color, and update it (not just chat) when the direction changes.

## Palette

The site stays a **light, ink-first theme with one primary interactive accent
(cobalt blue)**, now grounded in a true **matte grey** neutral scale and
punctuated by deliberate **red** and **yellow** moments — not four accents
fighting for attention, but one calm base plus purposeful highlight color.

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Page background | `--color-paper` | `#ffffff` | base |
| Soft surface (matte grey) | `--color-paper-dim` | `#f4f3f1` | alternating section bands, cards-on-dim |
| Deep surface (matte grey) | `--color-paper-deep` | `#e9e7e3` | inset panels |
| Hairline (matte grey) | `--color-line` | `#e5e3df` | borders, rules |
| Matte grey scale | `--color-matte` / `-dim` / `-soft` | `#6e6c67` / `#4a4844` / `#d9d6d0` | secondary UI, future use |
| Matte dark | `--color-charcoal` / `-soft` | `#17181b` / `#232427` | premium dark panels, non-highlighted pricing cards |
| Primary accent | `--color-accent` / `-dim` | `#2d5be3` / `#2348c2` | links, primary CTAs, focus rings, default interactive state |
| Red | `--color-accent-red` / `-dim` | `#d92d20` / `#b42318` | "Intelligence" service tag, **highlighted/recommended pricing tier**, one hero blob, second brand-mark square |
| Yellow (text-safe) | `--color-accent-yellow` | `#b45309` | "Design & Care" service tag, small labels — kept AA-compliant on white |
| Yellow (vivid) | `--color-accent-yellow-vivid` | `#eab308` | flat decorative fills only (hero blob, icon tiles) — **pair with dark `ink` content on top, never white**, low contrast on white |
| Green | `--color-accent-green` | `#15803d` | "Grow" service tag, included-feature checks |

Previously `paper-dim`/`paper-deep`/`line` carried a faint blue cast (`#f4f6fa`
etc.) that read as generic "SaaS blue." Retinting them toward neutral matte
grey (2026-08-14) is a global, low-risk change — it cascades through every
page automatically since these are the site's core surface tokens.

## Where red/yellow actually show up (deliberate, not scattered)

- **Pricing** (`/pricing`, `/services` plan preview): the highlighted/recommended
  tier's badge, ring, and CTA button are `accent-red` instead of blue — pairs
  with the existing matte-`charcoal` card background. Red = "this is the one
  to pick," a standard and legible convention, distinct from blue's
  everyday-interactive role.
- **Homepage "Why trust us"** (`Differentiator.astro`): the 2×2 icon-tile grid
  now cycles blue → red → yellow → green (one tone per tile) instead of flat
  blue ×4.
- **Hero sections** (`Hero.astro`, both variants): a second, smaller blurred
  background blob in yellow-vivid (page hero) or red (home hero) sits opposite
  the existing blue blob, at very low opacity (6–8%) — adds warmth to the
  gradient-mesh background without competing with foreground content.
- **Testimonials** mark icons cycle red → blue → green → yellow (fixed a bug
  where blue was listed twice, silently dropping red from the rotation).
- **Service category pages**: the "Artificial Intelligence & Automation"
  category (tone = red per `GROUP_TONE`) now actually renders red icon tiles —
  fixed a mapping bug where its `toneAccent` entry pointed at blue.

## Anti-patterns for this project
- Don't turn every CTA band/button red or yellow — blue stays the default
  interactive color; red/yellow are for the moments listed above, not a
  wholesale recolor.
- Don't use `accent-yellow-vivid` for text or with white content on top —
  contrast fails. Dark (`ink`) content on top, or decorative-only (blurred
  blobs, fills behind icons that don't need contrast).
- Don't reintroduce a blue cast into `paper-dim`/`paper-deep`/`line` — matte
  grey is now the base neutral.

## Next candidates (not done, worth asking the founder about before doing)
- Extending the per-tile tone-cycling pattern (used in `Differentiator.astro`)
  to other icon-grid sections (`Capabilities.astro`, `WhateverYouNeed.astro`)
  for more sitewide rhythm — deferred since it touches more files per section
  and wasn't explicitly asked for.
- A genuine "matte grey" dark-mode variant was not requested/built — this
  pass is light-theme only.
