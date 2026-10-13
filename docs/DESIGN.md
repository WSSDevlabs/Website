# WSS DevLabs — Master Design & Visual Architecture Specification

> **Governing Direction:** "Industrial Concrete & Anti-SaaS Engineering."  
> **Core Pillars:** Clarity, Speed, and Directness.  
> **Led By:** **Razali**, Founder of WSS DevLabs.

---

## 1. Core Design Philosophy & Visual Language

WSS Dev Labs’ design identity is built on three core pillars: **Clarity, Speed, and Directness**. Every visual and interactive decision is designed to turn first-time visitor interactions into lasting brand trust.

### A. High-Converting, Minimalist UI/UX
- **The "Anti-SaaS" Visual Tone:** We deliberately reject generic, illustration-heavy corporate SaaS templates and cartoonish 3D icons. Instead, we deploy clean, structural, and developer-centric layouts that communicate raw engineering competence, precision, and sub-second load times.
- **Premium Simplicity:** Engineered to *"make small brands look big"*. We utilize generous whitespace, high-contrast typography, sharp chamfered geometry, and zero filler "fluff".
- **Trust-Building Micro-Moments:** The front-end leverages subtle hover elevations, smooth page view transitions, and tactile button states to create polished micro-moments that validate user actions and signal authority.

### B. Typography & Visual Hierarchy
- **Sizing & Weighting:** Headers are oversized, bold, and scannable (`Outfit Variable` / `Geist Variable`), designed so human visitors and automated Answer Engines parse key value propositions within 2 seconds.
- **Functional Layout Sections:** Information is broken into numbered structural grids (`01`, `02`, `03` using `Space Grotesk Variable`) and split-screen layouts pairing punchy text with live interactive previews.

### C. Motion & Interactive Previews
- **GSAP-Powered Motion:** Hardware-accelerated GSAP animations are purpose-driven (scroll-triggered reveals, subtle fades, timeline orchestration). Motion never compromises our strict sub-second performance budget.
- **Interactive Desktop & Mobile Previews:** System pages wrap real screenshots or screen recordings (sample data only) in a device frame with instant **Desktop (100%)** vs. **Mobile (375px)** viewport toggles. The frame never shows a made-up address or a "live" status; until real material exists, it offers a 15-minute screen-share walkthrough instead.

---

## 2. Palette & Material Tokens

| Role | Token | Hex / Value | Architectural Purpose |
|:---|:---|:---|:---|
> Exact values live in `src/styles/global.css` (`@theme`). This table mirrors them.

| Role | Token | Hex / Value | Architectural Purpose |
|:---|:---|:---|:---|
| **Page Background** | `--color-paper` | `#fcfbfa` | Crisp light off-white base surface |
| **Soft Surface** | `--color-paper-dim` | `#f3f2ee` | Inset panels, cards, and secondary sections |
| **Deep Surface** | `--color-paper-deep` | `#e8e6df` | Structural panel dividers and active pill states |
| **Primary Text** | `--color-ink` | `#19191b` | Neutral steel near-black (high contrast, AA accessible) |
| **Body Copy** | `--color-ink-dim` | `#5c5d61` | Neutral grey with zero navy tint for effortless reading |
| **Primary Accent** | `--color-accent` | `#d92d20` | **Signal Red** — drives primary CTAs, highlight badges, and focus rings |
| **Accent Dim** | `--color-accent-dim` | `#b42318` | Hover state for primary buttons |
| **Structural Blue** | `--color-accent-blue` | `#2d5be3` | The header "Get a quote" pill, footer WhatsApp pill, minor structural stripes |
| **Signal Gold/Yellow** | `--color-accent-yellow` | `#b45309` / `#eab308` | Highlight badges and price callouts on dark panels |
| **Verified Green** | `--color-accent-green` | `#15803d` / `#10b981` | Status indicators ("Now booking pilot sites") and checkmarks |
| **Hairline Joints** | `--color-line` | `#e2dfd7` | Precision-formwork joints |
| **Matte Dark** | `--color-charcoal` | `#19191b` | Footer, timeline, dark panels and the top utility bar |

### Texture Wash
- **Global Film Grain:** `body::after` fixed fractal-noise SVG overlay (`opacity: 0.025`, `mix-blend-mode: overlay`) imparting physical, tactile material depth to every surface.

---

## 3. Technical Stack & Front-End Engineering

All technology choices are strictly performance-led:

### A. Core Technologies & Frameworks
- **Astro + TypeScript:** Static-first architecture, zero JS overhead by default, typed from line one.
- **Tailwind CSS (v4):** Atomic utility token engine delivering an ultra-lightweight CSS footprint.
- **PHP 8.2+ & Vanilla JS:** The foundation for our **ready-made systems**. Clean, dependency-free PHP with an offline licence check (no phoning home, no kill switch), local MySQL storage, and zero telemetry. Sales copy says "Works offline. No kill switch."; the cryptography detail stays in tech specs.
- **GSAP & Lenis:** Smooth scrolling and physics-based micro-interactions respecting `prefers-reduced-motion`.

### B. Mobile-First Responsiveness & Accessibility
- Touch-friendly 48px+ button tap targets.
- Strict performance budget: Mobile Lighthouse Score ≥ 90, LCP ≤ 2.5s.
- Semantic HTML5, ARIA labels, and keyboard-navigable interactive widgets.

---

## 4. Optimization & Content Strategy Matrix

```
┌──────────────────────────────────────────────────────────┐
│             WSS DEV LABS OPTIMIZATION PILLARS            │
├────────────────────────────┬─────────────────────────────┤
│      HUMAN AUDIENCE        │        AI & BOT CRAWLERS    │
├────────────────────────────┼─────────────────────────────┤
│ • Direct, "No-Fluff" Copy  │ • Clear Heading Structures  │
│ • Clear Milestone Sprints  │ • Structured FAQ Schemas    │
│ • Fixed-Price Package Tiers│ • Local Relevance Metadata  │
│ • Direct Builder WhatsApp  │ • SoftwareApplication Schema│
└────────────────────────────┴─────────────────────────────┘
```

### A. AI-First SEO Strategy (Answer Engines)
- **Engineered for LLMs:** Systematic heading hierarchies (`h1` ➔ `h2` ➔ `h3`) and clean semantic markup.
- **Direct Q&A Formats:** Scannable FAQ accordions mirrored into JSON-LD `FAQPage` schema so ChatGPT, Perplexity, and Gemini cite WSS Dev Labs directly for Malaysian digital queries.

### B. Local SEO & Trust Signals
- **Malaysia-Anchored Copy:** Direct mentions of Malaysian places (Kuala Lumpur, Klang Valley) with the SSM registration identifier in the footer once it's set.
- **Malaysian Payment Gateways:** ToyyibPay, SenangPay and Stripe (FPX, cards and e-wallets) on Store websites; money goes straight to the client's own merchant account.

### C. "Software you own. Not rent."
- The positioning on every page: fixed prices, full source code, no monthly software rent.
- Ready-made systems: **"Perpetual licence with full source code. No monthly fee."** (a licence, never "100% ownership"; it can't be resold).
- Websites and custom builds: the client owns the design, code and content once paid in full, and the domain is registered in their name.
- Every claim must be true today and provable (see `docs/business/claims-evidence.md`).

---

## 5. Recurring High-Converting UI Patterns

### A. High-Impact Hero Sections
- **Punchy Value Proposition:** Short, bold headlines with a red highlight badge on the key phrase ("Software you own. **Not rent.**").
- **Dual CTAs:** Always pair the primary action ("Get a fixed quote") with a secondary exploratory link ("See systems" / "See websites"). On phones, at least one of them is visible on the first screen.

### B. Logo Arrays (The Trust Grid)
- Horizontal grayscale marquee of client or partner logos below the hero. **Only real clients or partners, each with written permission**, and only once there are at least 4. Until then the section stays off the page (never placeholder boxes).

### C. Step-by-Step Step Modules
- Numbered step modules: the 3-step "How it works" on Home (`01 Tell us what you need` ➔ `02 Get a fixed quote` ➔ `03 We build and hand over everything`) and the 8-step custom build timeline on /custom/ with its scroll-filled line.

### D. Embedded Utility Calculators
- Interactive client-side calculators in the shared calculator card (options left, dark live-total panel right): the **website quote builder** (package + add-ons ➔ total + prefilled WhatsApp quote) and the **rent vs own calculator** (3-year cost of subscriptions vs owning, counting hosting and support on both sides).

### E. Interactive Desktop / Mobile Device Viewport Switcher
- Toggle switches show a system's real screenshots or recording at 100% desktop and 375px mobile widths inside a simulated browser chrome. No fake addresses, no "live" badges, no demo claims until a real demo loads.
