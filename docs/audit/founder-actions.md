# Founder actions

> Everything the code can't do for you, in priority order. The website leaves these gaps empty on purpose rather than faking them. Most are 5-minute edits in the CMS at `/wss-console/` (Site Settings).

## Before you push the site live (or within its first week)

1. **Company identity (legal requirement, audit L1).** Site Settings: registered name exactly as on your SSM certificate, SSM registration number, registered address. They then appear in the footer, About, structured data and every policy.
2. **Your true location.** The site says "Kuala Lumpur, Malaysia" and "Meetings in the Klang Valley or online". Change `baseLocation` and `meetings` if that isn't exactly right.
3. **Cloudflare dashboard** (see `docs/ops/deploy-checklist.md`): turn OFF automatic Web Analytics injection, set `PUBLIC_CF_ANALYTICS_TOKEN` and `PUBLIC_WEB3FORMS_ACCESS_KEY`, keep Rocket Loader off.
4. **Botpress chat assistant.** Replace its knowledge base with `docs/business/chat-assistant-knowledge.md` (new prices, no grants, no "Express" or "Marketplace", no SST). Ask it the 10 hard questions in that file and check every answer. Set its font so it stops loading Arial from Google Fonts.
5. **Confirm the facts the site states for you** (`docs/business/claims-evidence.md`): "10+ custom projects delivered", every one of the 15 public systems can be delivered and shown on a screen-share today, PHP 8.2+ and MySQL requirements, the offline licence check, kiosk languages, FPX deposits on event space booking, English-only interfaces.
6. **Read the copy that speaks for you:** the About story ("Why WSS DevLabs exists"), the vision and mission, the founder lines on Home, and the article bylines. Change anything that isn't exactly true.
7. **Social accounts.** Instagram and Facebook were blanked so the site shows the same accounts everywhere (LinkedIn and TikTok, as in your top bar and footer). Add them back in Site Settings only if you post there.
8. **Privacy email host.** The Privacy Notice lists "Our email provider: may be outside Malaysia". Name the provider (for example Google Workspace) once you've confirmed it.

## Within the first month

9. **Founder photo** (Team in the CMS). It replaces the placeholder circle on About. Add your LinkedIn and years of experience to your bio.
10. **PageSpeed:** after deploy, run PageSpeed Insights (mobile) on the home page and put the score in Site Settings (`pageSpeedMobile`). Don't promise 90+ to clients if your own site scores lower.
11. **Founding Client counter:** update `foundingSlotsLeft` every time a place is taken.
12. **Google Business Profile:** verify it, add services and prices, real photos, weekly posts, and **ask past clients for honest reviews**. Add the profile link in Site Settings.
13. **Hosting estimate:** replace the RM50/month placeholder (`RENT_VS_OWN.hostingEstimateMonthly` in `src/data/catalog.ts`) with the real monthly price of the host you recommend. It feeds the rent-vs-own calculators and the article example.
14. **Lawyer:** book a fixed-fee review of /terms/, /licence/, /refunds/, /privacy/, /cookies/, /care-plan-terms/ and `docs/legal/` (the questions are in `docs/legal/README.md`).
15. **Accountant:** business structure (incorporate before any Smart Premises contract), SST and e-invoicing thresholds, record keeping.
16. **Freelancer agreements** for anyone who works with you (`docs/legal/freelancer-agreement.md`).
17. **Insurance quotes:** professional indemnity and cyber.
18. **Validate the "estimate" prices** with 3 competitor quotes (`docs/business/pricing-and-margins.md`).
19. **Security headers:** after a week with no CSP violations in the browser console, switch the CSP from report-only to enforced (`public/_headers`).

## Months 2 to 3

20. **Real screenshots and a 60-second screen recording** (sample data only) for each public system: add them as `media` and `videoUrl` in `src/data/systems.ts`. They appear in the preview frame on each product page automatically.
21. **Replace the stock photos** on the home page offer cards with real screenshots of your work.
22. **First case studies and reviews:** only real ones, with written permission. Reviews go in `src/data/testimonials.ts` and appear on Home and About automatically.
23. **Real checkout** with ToyyibPay or Stripe and automatic delivery (needs your merchant account). Until then, "Buy now" opens WhatsApp with the order details.
24. **Two articles a month** (calendar in `docs/business/marketing-plan.md`).
25. **Test with 5 SME owners** (`docs/business/usability-test-script.md`).
26. **Smart Premises:** integration layer, real demo, hardware partner, one pilot site (`docs/business/ecosystem-readiness.md`). Update the status line the day it changes.
27. **Bahasa Malaysia pages** for Home, Websites and Systems (real translation). Then the EN/BM switch in the top bar can actually switch languages; for now it shows "coming soon" on hover.

## Keep doing

- **Reply within one business day; fixed quote within three.**
- **Track your hours** on the first 3 projects of each package; the floor is RM70/hour.
- **Price review on 14 April 2027,** or after the 5 Founding Client projects.
- **Stop building new systems** until 5 existing ones have each sold 3 times (audit Part 9).
