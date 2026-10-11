# Deploy checklist (Cloudflare Pages)

> Run through this the first time the rebuilt site goes live, and spot-check it after every big change.

## Before deploying
- [ ] `npm run build` passes (type check + build, 0 errors)
- [ ] `npm run lint` passes
- [ ] `src/data/site.json` has the registered name, SSM number and registered address (or you accept they're still missing; the footer shows "Klang Valley, Malaysia" until then)

## Cloudflare Pages settings
- [ ] **Environment variables** (Settings > Environment variables, Production):
  - `PUBLIC_WEB3FORMS_ACCESS_KEY`: required, or forms won't send
  - `PUBLIC_CF_ANALYTICS_TOKEN`: only if you are **not** using automatic Web Analytics (never both)
- [ ] Build command `npm run build`, output directory `dist`, Node 22 or newer

## Cloudflare dashboard (wssdevlabs.com zone)
- [ ] **Scrape Shield > Email Address Obfuscation: OFF.** The email is now plain HTML (audit G1); obfuscation would rewrite it into "[email protected]" for anyone without JavaScript.
- [ ] **Speed > Rocket Loader: OFF.** It rewrites scripts and would be blocked by the Content-Security-Policy.
- [ ] **Web Analytics:** choose one method. Automatic setup in the dashboard **or** the `PUBLIC_CF_ANALYTICS_TOKEN` variable.
- [ ] **Zaraz (conversion tracking, audit T12):** switch on, then add a tool (Google Analytics 4 in cookieless mode, or Zaraz's own events) and track these events, which the site already sends:
  - `quote_click`, `whatsapp_click`, `buy_click`, `demo_click`, `site_visit_click`, `custom_click`
  - `form_submit` (enquiry sent), `order_request` (system order request sent)
  - Keep it cookieless, or the Cookie Policy must change. If Zaraz injects an inline script that the CSP blocks, add its hash or domain to `script-src` in `public/_headers`.

## After deploying: check these
- [ ] https://wssdevlabs.com/ loads with the new design
- [ ] Old URLs redirect: `/express/` > `/websites/`, `/marketplace/` > `/systems/`, `/marketplace/wss-pos/` > `/systems/wss-pos/`, `/services/` > `/`, `/testimonials/` > `/about/#reviews`, `/coming-soon/` > `/`
- [ ] Send a test enquiry from `/contact/` and a test order from `/contact/?order=wss-pos`; both arrive in the inbox
- [ ] https://securityheaders.com/?q=wssdevlabs.com shows HSTS, CSP, X-Frame-Options, Permissions-Policy (target grade A)
- [ ] Response headers no longer include `Access-Control-Allow-Origin: *` on pages
- [ ] PageSpeed Insights (mobile) on `/`, `/websites/`, `/systems/wss-pos/`: 90+. Put the home page score in the CMS (`pageSpeedMobile`) so `/websites/` shows it.
- [ ] Google Rich Results Test on `/`, `/systems/wss-pos/` (Product + FAQ) and an article (Article)
- [ ] Google Search Console: submit `https://wssdevlabs.com/sitemap-index.xml`; request removal of `/coming-soon/` and the grant article if they still show
- [ ] The CMS at `/wss-console/` still opens and saves
- [ ] On your phone: the hamburger menu opens, the bottom bar shows "Get a fixed quote" and "WhatsApp", nothing scrolls sideways
