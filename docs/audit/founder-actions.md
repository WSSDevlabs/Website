# Founder actions

> Everything the code can't do for you, in priority order. The website is rebuilt; these items fill the gaps it deliberately leaves empty rather than faking. Most are 5-minute CMS edits at `/wss-console/`.

## Before you push the new site live (or within its first week)

1. **Company identity (legal requirement, audit L1).** CMS > Company Settings: registered name exactly as on your SSM certificate, SSM registration number, full registered address. They then appear in the footer, About, structured data and every policy.
2. **Your exact location.** Replace "Klang Valley, Malaysia" with the true place (for example "Cyberjaya, Selangor") in the same screen.
3. **Cloudflare dashboard** (docs/ops/deploy-checklist.md): Email Address Obfuscation off, Rocket Loader off, choose one Web Analytics method, check `PUBLIC_WEB3FORMS_ACCESS_KEY` is set.
4. **Confirm the product facts the site states** (docs/business/claims-evidence.md, "Founder to confirm"): every one of the 15 public systems can be delivered and demoed today; PHP 8.2+ and MySQL requirements; offline licence check; kiosk languages; FPX deposits on event space booking; English-only interfaces.
5. **Privacy contact and email provider.** Check the Privacy Notice lists your real email host (it says Google). Optionally create privacy@wssdevlabs.com.
6. **Social links.** Delete any account in the CMS that you don't actively post on.
7. **Read the drafted copy that speaks for you:** the About story, the founder lines on Home and the founder bio. Change anything that isn't exactly true.

## Within the first month

8. **Founder photo, full name, LinkedIn, years of experience, 2 or 3 notable builds** (CMS > Founder & Team). A real photo replaces the monogram everywhere.
9. **PageSpeed:** after deploy, run PageSpeed Insights (mobile) on the home page and put the score in the CMS (`pageSpeedMobile`).
10. **Zaraz conversion tracking:** switch it on and record the 7 events the site already sends.
11. **Google Business Profile:** verify it, add services and prices, real photos, weekly posts, and **ask 10 past clients for honest reviews**. Add the profile URL in the CMS.
12. **Hosting estimate:** replace the RM50/month placeholder in `src/data/catalog.ts` (`hostingEstimateMonthly`) with the real price of the host you recommend.
13. **Lawyer:** book a fixed-fee review of /terms/, /licence/, /refunds/, /privacy/ and docs/legal/ (questions in docs/legal/README.md).
14. **Accountant:** business structure (incorporate before any ecosystem contract), SST and e-invoicing thresholds, record keeping.
15. **Freelancer agreements** for anyone who works with you (docs/legal/freelancer-agreement.md).
16. **Insurance quotes:** professional indemnity and cyber.
17. **Validate the "estimate" prices** with 3 competitor quotes (list in docs/business/pricing-and-margins.md).
18. **SBOM and NOTICE files** for the 15 public systems (docs/ops/compliance-controls.md).

## Months 2 to 3

19. **Real screenshots** (sample data only) for each public system: add them to `media` in `src/data/systems.ts`, plus a 60-second screen recording as `videoUrl`.
20. **First case studies:** use the CMS (Case Studies) or `src/content/case-studies/example-template.md`. They appear only with permission on file.
21. **Real checkout** with ToyyibPay or Stripe and automatic delivery (needs your merchant account).
22. **Two articles a month** (calendar in docs/business/marketing-plan.md).
23. **Test with 5 SME owners** (docs/business/usability-test-script.md).
24. **Smart Premises:** integration layer, real demo, hardware partner, one pilot site (docs/business/ecosystem-readiness.md). Update the status text the day it changes.
25. **Bahasa Malaysia pages** for Home, Websites and Systems (real translation), then add `hreflang`.

## Keep doing

- **Founding Client counter:** update `foundingSlotsLeft` in the CMS every time one signs.
- **Reply within one business day; fixed quote within three.**
- **Track hours** on the first 3 projects of each package; the floor is RM70/hour.
- **Price review on 11 April 2027,** or after the 5 Founding Client projects.
- **Stop building new systems** until 5 existing ones have each sold 3 times (audit Part 9).
