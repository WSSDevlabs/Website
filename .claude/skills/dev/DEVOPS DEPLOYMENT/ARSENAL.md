# DevOps / Deployment arsenal â€” WSS Devlabs

Read when the task is CI, environments, hosting, or deploy plumbing.
Release EXECUTION (the act of shipping to the client) belongs to /coo â€” this
arsenal is for building the plumbing /coo pushes the button on.

| Resource | Path / command |
|----------|----------------|
| One-time deploy config | /setup-deploy (gstack global) |
| Ship pipeline | /ship, /land-and-deploy (gstack global â€” /coo drives these) |
| Post-deploy monitoring | /canary (gstack global) |
| Cloudflare stack (Workers, Pages, KV, D1, R2) | `cloudflare` + `wrangler` skills (installed globally in this environment) |
| Platform choice | escalate to /tech with monthly cost estimate |

## House rules
- Environments: local â†’ staging â†’ production. Client sees staging, never localhost
  screenshots.
- Config via env vars; `.env.example` always current; real values in the platform's
  secret store, logged by name in the handover inventory.
- CI runs tests on every push to main; deploys are explicit, not on-push, unless
  the project truly is a static site.
- Every deploy answerable in one sentence: "how do we roll back?" If the answer
  is unclear, the pipeline isn't done.
- Cost guard: alerts/budget caps on anything usage-billed (serverless, APIs) â€”
  a surprise bill is a client-relationship bug.
