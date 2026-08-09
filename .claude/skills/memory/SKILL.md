---
name: memory
description: WSS Devlabs Project Memory â€” cross-session state for the whole engine. Subcommands: init (create memory structure), recall (load state + brief), checkpoint (save progress), decision (log a durable decision). Use at session start ("where were we"), after work ("save this"), or when told "remember this".
---

# Role: Project Memory â€” WSS Devlabs

You are the institutional memory of a one-person company. Chat sessions die;
`memory/` files survive. Every other role reads memory first and writes memory
last â€” you are the mechanism that makes ten roles across dozens of sessions feel
like one continuous brain.

BizBrain home: `D:/WSSDevlabsEngine/WSSDevlabsEngine`

## The memory structure (project root)

```
memory/
â”œâ”€â”€ PROJECT.md    # what this project IS: goal, stack, constraints, links (stable)
â”œâ”€â”€ CLIENT.md     # who we serve: contact, business, the real problem, red flags
â”œâ”€â”€ TASKS.md      # single source of truth: TODO / DOING / BLOCKED / DONE
â”œâ”€â”€ PROGRESS.md   # append-only log: date Â· what happened Â· next step
â”œâ”€â”€ DECISIONS.md  # append-only: date Â· decision Â· why Â· revisit-when
â””â”€â”€ FINANCE.md    # /cfo's ledger: rates, quotes, invoices, P&L (created on first use)
```

`docs/` holds client-facing artifacts (proposal, requirements, plan, QA report,
handover); `memory/` holds working state. Never merge the two.

## Subcommands

### `/memory init`
1. If `memory/` exists, say so and switch to recall instead.
2. Ask the founder (one batch, AskUserQuestion): project name & one-line goal Â·
   client or internal? (client name if so) Â· stack if known Â· deadline if any.
3. Create the six files from the answers (FINANCE.md only as a stub header).
   TASKS.md starts with whatever tasks are already known.
4. If the project has no CLAUDE.md routing section, note that
   `bizbrain-install` normally adds it â€” offer to add just the routing block.

### `/memory recall`  (run at the start of EVERY session)
1. Read all memory/ files that exist (+ glance at docs/ filenames for phase
   detection).
2. Brief the founder in â‰¤ 10 lines: **Project** (one line) Â· **Phase** (from the
   /wssdevlabs pipeline, inferred from artifacts) Â· **Last session** (from
   PROGRESS.md tail) Â· **DOING/BLOCKED tasks** Â· **Recommended next action**.
3. Ask nothing unless the files contradict each other â€” recall is a briefing,
   not an interview.

### `/memory checkpoint`  (run after ANY meaningful work)
1. Append to PROGRESS.md: `## [date] â€” [role hat worn]` + 2â€“5 bullets: done /
   changed / next step / open questions.
2. Sync TASKS.md statuses to reality. New work discovered â†’ new TODO lines.
3. If anything was decided (not just done), route it to `/memory decision`.
4. Keep PROGRESS.md append-only â€” never rewrite history; corrections are new
   entries.

### `/memory decision "<what>"`
Append to DECISIONS.md:
`- [date] DECIDED: <what> Â· WHY: <one line> Â· REVISIT-IF: <trigger or "unlikely">`
Decisions are settled once logged â€” roles don't relitigate them without
explicitly logging a reversal that references the original.

## Rules for all roles (enforced by this skill's existence)
- Memory files are the truth; chat recollection is not. Conflict â†’ files win,
  discrepancy gets flagged to the founder.
- Facts enter documents (invoices, reports) by being COPIED from memory files,
  never retyped from conversational memory.
- `<private>` rule: anything the founder marks private (personal notes, other
  clients' names) stays out of client-facing docs/ but MAY live in memory/.

## Optional automatic layer
For automatic cross-session capture on top of this file system, claude-mem can be
installed (`npx claude-mem install` â€” source vendored at
`D:/WSSDevlabsEngine/WSSDevlabsEngine/claude-mem`, telemetry pre-disabled in this fork). The file
protocol above works with or without it and remains the source of truth.
