# Backend arsenal â€” WSS Devlabs

Read when the task is API, server logic, auth, jobs, or services.

| Resource | Path / command |
|----------|----------------|
| Backend patterns (API design, caching, queues, auth) | `D:/WSSDevlabsEngine/WSSDevlabsEngine/everything-claude-code/skills/backend-patterns/SKILL.md` |
| Security rules (validation, authz, secrets) | `D:/WSSDevlabsEngine/WSSDevlabsEngine/everything-claude-code/rules/security.md` |
| Coding standards | `D:/WSSDevlabsEngine/WSSDevlabsEngine/everything-claude-code/skills/coding-standards/SKILL.md` |
| Architecture questions | escalate to /tech |

## House rules
- Validate at the boundary; trust nothing from the client side, including field
  lengths and types.
- Every endpoint: authn checked, authz checked (WHOSE data is this?), errors return
  safe messages (no stack traces to clients).
- Idempotency on anything money- or email-sending-related; retries happen.
- Background jobs need: timeout, retry policy, and a dead-letter answer ("what
  happens when it fails 5 times?").
- Log enough to debug at 2am: request id, user id, what failed. Never log secrets
  or full card/personal data.
