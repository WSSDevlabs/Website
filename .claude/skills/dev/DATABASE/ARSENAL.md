# Database arsenal â€” WSS Devlabs

Read when the task is schema, migrations, queries, or data integrity.

| Resource | Path / command |
|----------|----------------|
| Backend patterns (includes data layer) | `D:/WSSDevlabsEngine/WSSDevlabsEngine/everything-claude-code/skills/backend-patterns/SKILL.md` |
| Schema decisions | escalate to /tech (ADR in memory/DECISIONS.md) |

## House rules
- Migrations only â€” never hand-edit a schema, even "just this once" on dev.
  Every migration reversible or explicitly marked one-way with a backup step.
- Money: integers in minor units (cents/sen) or DECIMAL. Never floats. Ever.
- Timestamps: UTC in storage, timezone at display. `created_at`/`updated_at` on
  every table by default.
- Soft-delete client business data (`deleted_at`) unless the client explicitly
  wants hard deletes; storage is cheaper than "can you restore that?"
- Index what you query: every FK, every WHERE column in a hot path. Check the
  query plan on anything touching a table that will grow.
- Backups are /coo's SOP but YOUR schema notes feed it: what needs backing up and
  how big it grows goes into docs/ARCHITECTURE.md.
