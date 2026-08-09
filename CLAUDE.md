## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

<!-- BIZBRAIN:BEGIN -->
# WSS Devlabs BizBrain

This project runs on the WSS Devlabs BizBrain engine (home: D:\WSSDevlabsEngine\WSSDevlabsEngine).

- **Session start:** run /memory recall (or read memory/*.md) before anything else.
- **Master command:** /wssdevlabs â€” full client pipeline (intake > quote > requirements > plan > architecture > design > build > QA > ship > deliver > retro), phase gates, routing.
- **Roles:** /ceo /pm /cmo /coo /qa-manager /admin /cfo /tech /dev /uiux /memory
- **Session end:** run /memory checkpoint so the next session starts warm.
- gstack commands (/qa, /ship, /review, /spec, /design-review, /make-pdf, ...) are installed globally and used by the roles.
- memory/ = working state (tasks, progress, decisions, finance). docs/ = client-facing artifacts. Facts are copied from memory files, never retyped from recollection.

## AUTO-ROUTING (mandatory)

Plain-language requests are routed to role skills AUTOMATICALLY â€” the founder never
needs to type the slash command. Before answering any request, match it against this
table; on a match, invoke that role skill FIRST and work inside it:

| Request sounds like | Auto-invoke |
|---------------------|-------------|
| new client, lead, proposal, "should we take this", scope fight | /ceo |
| price, charge, quote, invoice, payment, profit | /cfo |
| requirements, plan, break it down, tasks, timeline, status, retro | /pm |
| UI, UX, design, screens, looks, colors, fonts, landing page design | /uiux |
| build, implement, code, add feature, fix bug, refactor, integrate | /dev |
| which stack, architecture, structure, slow performance, code audit | /tech |
| test, QA, review code, security, "client found a bug" | /qa-manager |
| copy, SEO, marketing, launch, ads, email campaign, social | /cmo |
| deploy, release, go live, deliver, handover | /coo |
| write up, minutes, report, SOW, PDF, formal email | /admin |
| remember, "where were we", save progress, "what's next" | /memory |
| multi-phase or ambiguous ("start the project", "handle this client") | /wssdevlabs |

Two rules: (1) a matched role loads its whole arsenal â€” e.g. "create the UI/UX for
this website" means /uiux with its full design library, not a generic attempt;
(2) when several roles match, /wssdevlabs decides the sequence.
<!-- BIZBRAIN:END -->
