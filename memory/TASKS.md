# TASKS

## DOING
- (none) 2026-10-14: audit implemented on the existing design and pushed. See PROGRESS.md.

## TODO
- [founder] Everything in `docs/audit/founder-actions.md`, in order. Top items: SSM registered name, number and address in the CMS; Cloudflare: turn OFF automatic Web Analytics injection and set `PUBLIC_CF_ANALYTICS_TOKEN` + `PUBLIC_WEB3FORMS_ACCESS_KEY`; replace the Botpress knowledge base with `docs/business/chat-assistant-knowledge.md`; confirm "10+ custom projects delivered"; check the About story is true.
- [coo] Post-deploy checks in `docs/ops/deploy-checklist.md` (redirects, test enquiry, security headers, PageSpeed, Rich Results, Search Console sitemap).
- [dev] After a week with no CSP violations, switch `Content-Security-Policy-Report-Only` to `Content-Security-Policy` in `public/_headers`.
- [dev] Replace the RM50/month hosting placeholder (`RENT_VS_OWN.hostingEstimateMonthly` in `catalog.ts`) once the founder picks a host to recommend.
- [content] Real screenshots/recordings per system (`media`, `videoUrl` in `systems.ts`); real photos for the 3 home offer cards; founder photo (team.json).
- [content] First reviews (testimonials.ts) and case studies, only with written permission; Founding Client counter (`foundingSlotsLeft`).
- [cmo] 2 articles a month; Google Business Profile; usability test with 5 SME owners.
- [cfo] Real checkout (ToyyibPay/Stripe) once the founder has a merchant account; price review 2027-04-14.
- [legal] Lawyer review of /terms/, /licence/, /refunds/, /privacy/, /cookies/, /care-plan-terms/ and docs/legal/.
- [i18n] Real Bahasa Malaysia pages (Home, Websites, Systems), then make the BM toggle work and add hreflang.
- [dev, optional] Unused components with old content (AboutSection, Capabilities, ContactTeaser, ImpactStats, Partners, PartnersMarquee, ProcessOverview, Team, TrustBar, WhateverYouNeed, WhoWeWorkWith, WhatsAppButton, ContactForm, Badge, Button, Card, Marquee) can be deleted in a cleanup pass.

## BLOCKED
- (none)

## DONE
- [2026-10-14] Audit implemented on the existing design: 7-page structure + redirects, price catalogue, honest product pages, Care Plans, calculators, founding programme, legal pages, docs packs, map and contact-form fixes. Most older TODOs below this line (FINANCE rewrite, marketplace filters, email obfuscation, SME campaign links, orphaned pricing code) were resolved or made obsolete by this restructure.
- [2026-09-19] Nav bug (site intro overlay) fixed; services popup removed; 4 content sections; product catalog integrated (later restructured on 2026-10-14).
- [2026-08-22] Floating glass pill nav; real-name cleanup (Razali only); stock photos of people removed; forms consolidated; GitHub → TikTok; red heartbeat badge.
- [2026-08-14] Services consolidated; "Industrial Concrete" design pass; Co-Authored-By trailer stripped from history per founder.
- [2026-08-09/10] SME research, first pricing tiers (since superseded), footer form fix, fake testimonials removed, career page removed, product-marketing v1.
- (earlier history predates this memory system; see git log)
