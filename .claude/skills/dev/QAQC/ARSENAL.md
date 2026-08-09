# QA/QC arsenal â€” WSS Devlabs (developer self-check)

Read before handing anything to /qa-manager. This is the developer's own quality
pass â€” the goal is that /qa-manager's gate finds NOTHING functional.

| Resource | Path / command |
|----------|----------------|
| Self-review the diff | /review (gstack global) |
| Quick browser verification | /browse or /qa (gstack global) |
| Verification loop discipline | `D:/WSSDevlabsEngine/WSSDevlabsEngine/everything-claude-code/skills/verification-loop/SKILL.md` |
| Code quality scan | /health (gstack global) |

## The self-check (before marking any task DONE)
1. Acceptance criterion from REQUIREMENTS.md â€” demonstrated working? (Seen with
   your own eyes in the app, not inferred from green tests.)
2. Unhappy paths: empty input, wrong type, double-submit, refresh mid-action.
3. Tests: new logic covered; whole suite still green â€” not just the new tests.
4. Diff hygiene: no debug prints, no commented-out corpses, no stray files,
   no secrets.
5. /review on the diff; blockers fixed now.

Only then: TASKS.md â†’ DONE.

Distinction: this is QC (building it right). /qa-manager owns QA (gating the
release). Skipping self-check to "let QA catch it" doubles the loop time â€” there
is no QA department to hide behind, it's the same founder wearing a different hat.
