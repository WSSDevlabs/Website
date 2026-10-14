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
- **Interactive Desktop & Mobile Previews:** Instead of static screenshots, our marketplace and showcase pages embed live, interactive preview wrappers with instant **Desktop (100%)** vs. **Mobile (375px)** viewport toggles, allowing clients to test touch responsiveness directly.

---

## 2. Palette & Material Tokens

| Role | Token | Hex / Value | Architectural Purpose |
|:---|:---|:---|:---|
| **Page Background** | `--color-paper` | `#f2f0eb` | Cast concrete off-white base surface (Tamarind Square aesthetic) |
| **Soft Surface** | `--color-paper-dim` | `#e6e3db` | Inset panels, cards, and secondary sections |
| **Deep Surface** | `--color-paper-deep` | `#d6d2c7` | Structural panel dividers and active pill states |
| **Primary Text** | `--color-ink` | `#19191b` | Neutral steel near-black (high contrast, AA accessible) |
| **Body Copy** | `--color-ink-dim` | `#57585b` | Neutral grey with zero navy tint for effortless reading |
| **Primary Accent** | `--color-accent` | `#d92d20` | **Signal Red** — drives primary CTAs, active badges, and focus rings |
| **Accent Dim** | `--color-accent-dim` | `#b42318` | Hover state for primary buttons |
| **Structural Blue** | `--color-accent-blue` | `#2d5be3` | Minor structural stripe and service taxonomy coding |
| **Signal Gold/Yellow** | `--color-accent-yellow` | `#b45309` / `#eab308` | Highlight badges, Answer Engine tags, and grant notices |
| **Verified Green** | `--color-accent-green` | `#15803d` / `#10b981` | Live status indicators, uptime badges, and instant checkmarks |
| **Hairline Joints** | `--color-line` | `#cac6bb` | Precision-formwork concrete joints |

### Texture Wash
- **Global Film Grain:** `body::after` fixed fractal-noise SVG overlay (`opacity: 0.035`, `mix-blend-mode: overlay`) imparting physical, tactile material depth to every surface.

---

## 3. Technical Stack & Front-End Engineering

All technology choices are strictly performance-led:

### A. Core Technologies & Frameworks
- **Astro + TypeScript:** Static-first architecture, zero JS overhead by default, typed from line one.
- **Tailwind CSS (v4):** Atomic utility token engine delivering an ultra-lightweight CSS footprint.
- **PHP 8.2+ & Vanilla JS:** The foundation for our **WSS Marketplace** products. Clean, dependency-free PHP with Ed25519 offline cryptographic licensing, local MySQL storage, and zero telemetry.
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
│ • Direct Engineer WhatsApp │ • SoftwareApplication Schema│
└────────────────────────────┴─────────────────────────────┘
```

### A. AI-First SEO Strategy (Answer Engines)
- **Engineered for LLMs:** Systematic heading hierarchies (`h1` ➔ `h2` ➔ `h3`) and clean semantic markup.
- **Direct Q&A Formats:** Scannable FAQ accordions mirrored into JSON-LD `FAQPage` schema so ChatGPT, Perplexity, and Gemini cite WSS Dev Labs directly for Malaysian digital queries.

### B. Local SEO & Trust Signals
- **Malaysia-Anchored Copy:** Direct mentions of Malaysian states (Kuala Lumpur, Selangor, Johor, Penang, Sabah, Sarawak) with SSM registration identifiers in the footer.
- **Malaysian Payment Gateways:** Native support for ToyyibPay, SenangPay, gKash, Stripe, and DuitNow QR.

### C. The "No Subscriptions. No SaaS. Just Yours." Philosophy
- Marketing copy for the **WSS Marketplace** explicitly highlights: **"No monthly fees. Buy once, own forever."**
- Complete source code ownership, zero vendor lock-in, and self-hosted privacy under Malaysian PDPA.

---

## 5. Recurring High-Converting UI Patterns

### A. High-Impact Hero Sections
- **Punchy Value Proposition:** Short, bold headlines with dynamic gradient text.
- **Dual CTAs:** Always pair a primary action ("WhatsApp an Engineer" / "Get Express") with a secondary exploratory link ("Browse 15 Systems" / "View Grant Subsidies").

### B. Logo Arrays (The Trust Grid)
- Horizontal grayscale grid of recognizable Malaysian commercial landmarks and enterprises (Parkson, AEON, Sunway, KLCC, Plaza Sentral, Nexus Bangsar) placed directly below the hero to anchor immediate credibility.

### C. Step-by-Step Step Modules
- 4-phase numbered sprint pipelines (`01 Architecture Lock` ➔ `02 Staging Prototype` ➔ `03 Security & Payments` ➔ `04 Go-Live Handover`).

### D. Embedded Utility Calculators
- Interactive client-side calculators (e.g., **SME Project & Grant Savings Calculator**) that dynamically compute package costs, 50% PMKS Madani grant deductions, and generate prefilled WhatsApp booking prompts.

### E. Interactive Desktop / Mobile Device Viewport Switcher
- Live toggle switches allowing potential buyers to test systems across 100% desktop and 375px mobile phone dimensions with simulated browser chromes.

---

## 6. Solutions Positioning & Motion Layer (October 2026)

> **Positioning:** WSS DevLabs is a **technology solutions company**, not only a website/system shop. We apply software, apps, AI, IoT, analytics and marketing to real problems in **agriculture, biomass, smart cities, energy & sustainability, waste-to-energy, digital foundations (websites/apps/basic IoT) and SME digital shift + training**. The base design system above (palette, type, red `badge-highlight`, floating glass nav, pill buttons, charcoal panels) is unchanged. This section adds patterns on top of it.

### A. Information architecture additions
- `/solutions` (sector bento) and `/solutions/[slug]` (7 sector pages, data in `src/data/sectors.ts`).
- `/labs` (demo stage, filterable use cases, "what we are building", pilot process; data in `src/data/demos.ts`).
- Floating nav gains two icons: **globe** (Solutions) and **beaker** (Labs). Icons stay 48px at `lg`, 40px at `md`; the "Consult with Us" pill shows from `lg`.

### B. Media rules
- **One video library:** `src/data/media.ts`. Every clip has a first-frame poster in `/public/images/posters/` (shown instantly, and the only thing reduced-motion / Save-Data visitors see).
- **`VideoMedia.astro`** handles three modes: background (plays only while on screen), hover (desktop hover preview on cards with `data-hover-host`), and player (click-to-load; YouTube uses `youtube-nocookie.com` and loads nothing until play).
- Stock clips (Mixkit, free licence) show the *setting*, never our system output; pages label them "Illustrative footage". Replace with real recordings by setting `footage: 'wss'` or a `youtubeId`.

### C. Scroll scenes (`src/scripts/scrollScenes.ts`, GSAP ScrollTrigger)
| Pattern | Attribute | Where | Fallback (phones / reduced motion) |
|---|---|---|---|
| Hero word scramble synced to the sector reel | `data-scramble-word` | Home hero | Plain text |
| Label decode on enter | `data-scramble` | Mono labels | Plain text |
| Zoom reveal (card between two oversized lines grows to full screen) | `data-zoom-reveal` | Home | Full-bleed video panel with copy |
| Pinned sector scroller (list → media → panel) | `data-sector-scroller` | Home | Tabs |
| Horizontal pan gallery | `data-hpan` | Home demos | Native swipe with scroll-snap |
| Self-drawing rules | `data-draw-line` | Stack + pilot steps | Static line |
| Media unmask on enter | `data-clip-reveal` | Use-case bento, cards | Static |
- Pinned scenes are created **in page order** (see `init()`), otherwise ScrollTrigger mis-measures later pins.
- Existing motion (`siteMotion.ts`: Lenis, split headlines, colour reveal, tilt, spotlight, magnetic) is untouched; add `data-noreveal` to pinned sections so auto-reveal doesn't fight GSAP.

### D. 3D
- `NetworkScene.tsx` (React Three Fiber): a rotating sphere of sensor nodes (paper), active nodes (signal red) and links (structural blue). Mounted lazily by `mountScene.ts` via `<div data-scene="network">`, desktop only, never for reduced motion, unmounted on page swap. Used on the dark "Sense. Connect. Understand. Act." panel, the Solutions hero and the Labs hero.

### E. Content rules for this layer
- No invented clients, results or event attendance. Use cases are written as "what we build"; event posts are analysis with cited sources, not first-person attendance claims.
- Every new Insights post carries `sourceUrl` / `sourceLabel` and links to the matching sector page.
