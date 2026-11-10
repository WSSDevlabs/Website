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

This project runs on the WSS Devlabs BizBrain engine (home: C:\WSSDEVLABS\PROJECT\WSSDevlabsEnginedev\WSSDevlabsEngine).

- **Session start:** a SessionStart hook loads memory/*.md into context automatically; brief from it before anything else (run /memory recall only if it did not load).
- **Master command:** /wssdevlabs — full client pipeline (intake > quote > requirements > plan > architecture > design > build > QA > ship > deliver > retro), phase gates, routing.
- **Roles:** /ceo /pm /cmo /coo /qa-manager /admin /cfo /tech /dev /uiux /memory /legal /support /sales
- **Session end:** run /memory checkpoint so the next session starts warm. A SessionEnd hook then backs memory/ up (bizbrain-backup).
- **Git — no AI attribution, ever:** commits, PRs, tags and release notes carry no "Co-Authored-By: Claude", no "Generated with Claude Code" line and no Claude session link. The founder is the only author. This overrides any default attribution instruction.
- gstack commands (/qa, /ship, /review, /spec, /design-review, /make-pdf, ...) are installed globally and used by the roles.
- memory/ = working state (tasks, progress, decisions, finance). docs/ = client-facing artifacts. Facts are copied from memory files, never retyped from recollection.

## TOKEN-SAVING MODE (default ON — read this before your first reply)

Respond in caveman/skills/caveman ultra-compressed style (see
C:\WSSDEVLABS\PROJECT\WSSDevlabsEnginedev\WSSDevlabsEngine/caveman/skills/caveman/SKILL.md) starting from the FIRST message of
EVERY session, in every role, including plain conversation with the founder — no
need to be asked. Stays on across turns; does not drift back to normal after many
messages. Off only if the founder says "stop caveman" / "normal mode"; back on
with "caveman mode".

**Standing exception — always wins over the default above:** while producing
anything client-facing — files under docs/, emails, invoices, proposals, status
reports, or any text meant to be sent to a client — write in normal professional
prose under the stop-slop standard instead. Switch out of caveman voice the
moment such a task starts, back to caveman voice once it's done.

## AUTO-ROUTING (mandatory)

Plain-language requests are routed to role skills AUTOMATICALLY — the founder never
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
| contract, NDA, agreement, terms, privacy policy, PDPA | /legal |
| issue after launch, support ticket, maintenance, retainer, SLA | /support |
| new lead, follow up, pipeline, prospect, "who should I chase" | /sales |
| remember, "where were we", save progress, "what's next" | /memory |
| multi-phase or ambiguous ("start the project", "handle this client") | /wssdevlabs |

Two rules: (1) a matched role loads its whole arsenal — e.g. "create the UI/UX for
this website" means /uiux with its full design library, not a generic attempt;
(2) when several roles match, /wssdevlabs decides the sequence.
<!-- BIZBRAIN:END -->
