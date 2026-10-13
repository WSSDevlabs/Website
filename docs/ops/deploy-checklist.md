# Deploy checklist (Cloudflare Pages)

> Run through this the first time the restructured site goes live, and spot-check it after every big change.

## Before deploying
- [ ] `npm run build` passes (type check + build, 0 errors)
- [ ] `src/data/site.json` has the registered name, SSM number and registered address, or you accept they're still missing (the footer and policies show "Kuala Lumpur, Malaysia" until then)
- [ ] `foundingSlotsLeft` in `src/data/site.json` matches reality (it shows "X of 5 places left" on the home page)

## Cloudflare Pages settings
- [ ] **Environment variables** (Settings > Environment variables, Production):
  - `PUBLIC_WEB3FORMS_ACCESS_KEY`: required for the contact form and the home page form to send through Web3Forms. Without it, the contact form falls back to opening the visitor's email app.
  - `PUBLIC_CF_ANALYTICS_TOKEN`: your Cloudflare Web Analytics token. The cookie banner only loads analytics after a visitor clicks Allow, using this token.
- [ ] Build command `npm run build`, output directory `dist`, Node 22 or newer

## Cloudflare dashboard (wssdevlabs.com zone)
- [ ] **Web Analytics: turn OFF "automatic setup" (JS snippet injection) for wssdevlabs.com.** The audit found analytics loading before anyone clicked Allow; that comes from Cloudflare injecting its own snippet at the edge, which bypasses the cookie banner. With automatic setup off, the banner is the only thing that loads analytics, which is what the Cookie Policy says. (Never use both methods: every visit would be counted twice.)
- [ ] **Speed > Rocket Loader: OFF.** It rewrites scripts and can break the animations and the chat assistant.
- [ ] **Scrape Shield > Email Address Obfuscation:** can stay on. Emails are now plain HTML wrapped in `<!--email_off-->` comments, which tells Cloudflare to leave them alone. Check that the email shows correctly in the top bar, footer and Contact page after deploy.
- [ ] **Zaraz (conversion tracking, audit T12), optional:** if you switch it on, record these events, which the site already sends: `quote_click`, `whatsapp_click`, `buy_click`, `walkthrough_click`, `site_visit_click`, `founding_click`, `calculator_whatsapp`, `article_cta`, `form_submit`. Keep it cookieless, or update the Cookie Policy and load it only after Allow. Add its domain to `script-src` in `public/_headers`.

## Botpress (chat assistant)
- [ ] Update the bot's knowledge base with the new offers and prices (`docs/business/chat-assistant-knowledge.md` has a ready-made version). Remove anything about grants, "Express", "Marketplace", SST, RM180/year, RM749 systems or RM8,500 bespoke.
- [ ] Make sure the bot introduces itself as an automated assistant, offers a person on request, and never gives medical, legal or financial advice.
- [ ] Set the webchat font to inherit or a system font, so it stops loading "Arial" from Google Fonts (audit V22).

## After deploying: check these
- [ ] https://wssdevlabs.com/ loads with the new content and your usual design
- [ ] Old URLs redirect: `/express/` > `/websites/`, `/marketplace/` > `/systems/`, `/marketplace/wss-pos/` > `/systems/wss-pos/`, `/marketplace/wss-smartid/` > `/systems/smart-premises/`, `/services/` > `/`, `/services/iot-solutions-infrastructure/` > `/custom/`, `/testimonials/` > `/about/#reviews`, `/coming-soon/` > `/`, `/insights/msme-digital-grant-madani-explained/` > `/insights/`
- [ ] Send a test enquiry from `/contact/?package=business` (the form should arrive pre-filled) and one from the home page form; both arrive in the inbox
- [ ] Cookie banner: appears on a first visit, sits above the chat bubble on a phone, and analytics only loads after Allow (DevTools > Network: no `cloudflareinsights` request before clicking)
- [ ] https://securityheaders.com/?q=wssdevlabs.com shows HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- [ ] **CSP:** the policy ships as `Content-Security-Policy-Report-Only`. Browse the site for a week with DevTools open (chat, contact form, map, analytics). If the console shows no CSP violations, rename the header to `Content-Security-Policy` in `public/_headers` to enforce it.
- [ ] Response headers no longer include `Access-Control-Allow-Origin: *` on pages
- [ ] PageSpeed Insights (mobile) on `/`, `/websites/`, `/systems/wss-pos/`. Put the home page score in the CMS (`pageSpeedMobile`) so `/websites/` shows it. If it's under 90, fix that before promising 90+ to clients.
- [ ] Google Rich Results Test on `/`, `/systems/wss-pos/` (SoftwareApplication + FAQ) and an article (Article)
- [ ] Google Search Console: submit `https://wssdevlabs.com/sitemap-index.xml`; request removal of `/coming-soon/` and the grant article if they still show
- [ ] The CMS at `/wss-console/` still opens and saves Site Settings and Blog Posts
- [ ] On your phone: "Menu" opens the navigation, both hero buttons show on the first screen, nothing scrolls sideways
