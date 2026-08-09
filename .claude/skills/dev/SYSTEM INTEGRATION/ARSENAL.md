# System Integration arsenal â€” WSS Devlabs

Read when the task is connecting to third-party APIs, client legacy systems,
webhooks, imports/exports, or automation between services.

| Resource | Path / command |
|----------|----------------|
| Backend patterns (API clients, retries) | `D:/WSSDevlabsEngine/WSSDevlabsEngine/everything-claude-code/skills/backend-patterns/SKILL.md` |
| Scraping when no API exists | /scrape, /browse (gstack global) |
| Browser automation of external sites | browser-use (optional: `uv tool install browser-use`; library at `D:/WSSDevlabsEngine/WSSDevlabsEngine/browser-use`) |
| Workflow automation platform | n8n (self-hosted) â€” evaluate when the client needs many SaaS glue flows |
| Integration architecture | escalate to /tech (auth method per integration is an ADR) |

## House rules
- Treat every external system as hostile-adjacent: it WILL be slow, down, or
  return garbage. Timeout + retry-with-backoff + a defined failure behavior on
  every call. "What does the user see when their CRM is down?" must have an answer.
- Credentials for client systems: obtained via THEIR account creation, stored in
  the platform secret store, logged by name for handover. Chase access in week
  one â€” it is always the schedule risk (/pm risk table).
- Webhooks: verify signatures, handle replays (idempotency key), respond fast and
  process async.
- Data imports: dry-run mode first, row-level error report, never destructive
  without a backup taken in the same session.
- Rate limits are contracts â€” read them BEFORE designing the sync strategy, not
  after the 429s start.
