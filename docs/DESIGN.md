# DESIGN — WSS DevLabs website

**Direction: "Industrial Concrete."** Locked 2026-08-14 (supersedes the
2026-08-14 "matte grey secondary accent" pass earlier the same day — that
version kept blue primary; this one is the real, founder-directed rebrand).
Extended the same day with founder's explicit go-ahead ("you get my
permission, do it") to finish the follow-through items originally deferred
below. This file is law for `/dev` — check it before touching color, radius,
or surface treatment, and update it here, not just in chat, when the
direction changes.

## Brief

Founder sent their business card (red logo mark + "RAZALI" name, dark
charcoal "Devlabs" wordmark, a thin blue underline stripe, light grey grainy
background) plus a mood board of raw-concrete architecture — Tadao Ando-style
exposed structure, board-formed concrete, industrial stairwells, the
"Tamarind Square Cyberjaya" reference. Instruction: "no need to over maintain
the light theme, change what necessary, prioritize my dream." Full creative
latitude on this pass — not a timid tweak.

**Reading of the brief:** the business card establishes a clear color
hierarchy — red is dominant (the biggest, first-read element), dark
charcoal/near-black is the secondary structural color, light grey with
visible grain is the base surface, and blue is a minor accent (a single thin
stripe, small icon circles) — not a primary interactive color. The mood
board reinforces this with raw concrete grey, exposed dark steel, and red/
orange as the one sharp signal color against monochrome material.

## Palette

| Role | Token | Hex | Change from before |
|------|-------|-----|---------------------|
| Page background | `--color-paper` | `#f2f0eb` | was pure white `#ffffff` — now cast-concrete off-white |
| Soft surface | `--color-paper-dim` | `#e6e3db` | darker/greyer than the earlier matte-grey pass |
| Deep surface | `--color-paper-deep` | `#d6d2c7` | darker still — visible concrete-panel separation |
| Hairline | `--color-line` | `#cac6bb` | more visible — reads as a structural joint, not a whisper |
| Primary text | `--color-ink` | `#19191b` | neutral near-black (was navy-tinted `#0c1220`) |
| Body text | `--color-ink-dim` | `#57585b` | neutral grey (was navy-tinted) |
| **Primary accent** | `--color-accent` / `-dim` | `#d92d20` / `#b42318` | **was cobalt blue `#2d5be3` — now red.** Drives every button, link, focus ring, hover glow, CTA band, selection color. This is the single biggest change; it cascades from one token. |
| Blue (minor stripe only) | `--color-accent-blue` | `#2d5be3` | demoted — service-tag coding + literal thin stripe/underline moments only, never a button or primary CTA |
| Matte dark | `--color-charcoal` / `-soft` | `#17181b` / `#232427` | unchanged, already fit the brief — now a more central surface, not just occasional |
| Yellow / green | unchanged | — | categorical service-tag use only; the card has no yellow, so it's not part of the "brand identity" palette, just the existing 4-way service coding |

## Texture

Added a **sitewide film-grain wash**: `body::after`, `position: fixed`,
`opacity: 0.035`, `mix-blend-mode: overlay`, same fractal-noise SVG the
codebase already had as an opt-in `.grain-overlay` utility, now applied once
globally so every surface — paper, charcoal, red — reads as cast/textured
material instead of flat digital color. This was the highest-leverage way to
deliver "grainy" across the whole site without touching every component.

## What changed vs. what didn't

**Changed (token-level, cascades everywhere automatically):**
- Base background is no longer pure white.
- Primary interactive color is red, not blue.
- Neutrals are neutral-grey, not navy-tinted.
- Hardcoded button-glow shadow colors (`shadow-[...rgb(45_91_227...)]` in
  `Button.astro`, `Hero.astro`, `QuoteForm.astro`, `testimonials.astro`,
  `services/[slug].astro`) were retinted to match red — these were literal
  arbitrary values, not token references, so the accent swap didn't reach
  them automatically.
- Sitewide grain texture.

**Follow-through, same day, after founder's explicit go-ahead:**
- **Radius scale sharpened globally.** Overrode Tailwind's default
  `--radius-xs` through `--radius-4xl` in `@theme` (was 2px→32px, now
  1px→12px) — this single token change reshaped every `rounded-xl` /
  `rounded-2xl` / `rounded-3xl` utility across the *entire* codebase at once,
  no per-file edits needed. Also hand-fixed the small number of hardcoded
  arbitrary values (`rounded-[2rem]`, `rounded-[2.5rem]` in `contact.astro`,
  `FeaturedWork.astro`, `ContactTeaser.astro`, `CTABand.astro`) and the
  literal `border-radius` values in `.card`/`.panel`/`.panel-ink`/
  `.panel-charcoal`/`.glass-float-card` in `global.css`, since those aren't
  Tailwind utilities and the token override doesn't reach them.
  **`rounded-full` (pill buttons, badges) was deliberately left untouched** —
  it's a fixed 9999px value outside the scale, and stays as the one
  intentionally soft/human shape against otherwise sharp panels — a
  considered choice, not an oversight.
- **Structural motifs added to both hero variants** (`Hero.astro`): the
  existing `.grid-pattern` (fine blueprint-style line grid) now also runs on
  the inner-page hero, not just home (previously home-only); a single thin
  diagonal accent line was added to the home hero, styled like a concrete
  beam edge crossing the frame; a redundant second red blur-blob (home hero
  had two, both effectively the same color after the accent-token swap) was
  swapped for a neutral matte-grey blob instead of a second bright color, so
  the hero doesn't accumulate more competing hues than the brief calls for.
  `.grid-pattern`/`.dot-pattern` were also retinted from the old navy
  `rgb(12 18 32)` to the new neutral ink `rgb(25 25 27)`.

**Still not done (lower priority / bigger, separate undertaking):**
- **Genuine dark-mode variant** (charcoal + grain as the default surface,
  with a toggle) — this is real theme-infrastructure work, not a styling
  tweak, and wasn't clearly what was being asked for. Ask before building.
- **Typography.** Kept Geist/Outfit/Space Grotesk — already fairly geometric
  and technical (the mono face already suits a "blueprint" feel).

## Anti-patterns for this project
- Don't reintroduce blue as a button/CTA/link color — it's a minor stripe
  accent now, per the card, not the primary.
- Don't let red apply to literally everything (error states, every icon,
  every card border) — it's the signal color precisely because most of the
  page stays grey/charcoal. One accent doing accent work.
- Don't go back to pure-white backgrounds for new sections — match the
  existing `paper`/`paper-dim`/`paper-deep` concrete scale.
- Any new full-bleed color block should default to red (`bg-accent`) or
  charcoal, not blue.

## Next candidates (not done, worth asking the founder about before doing)
- A genuine dark-mode variant leaning into charcoal + grain as the default
  surface, with an actual toggle — real theme infrastructure, bigger than
  everything else on this list.
- Extending the diagonal structural-accent-line treatment (added to the home
  hero) to other full-bleed sections (CTABand, ContactTeaser) if the founder
  likes the effect.
