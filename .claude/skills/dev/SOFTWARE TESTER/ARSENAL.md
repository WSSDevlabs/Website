# Software Tester arsenal â€” WSS Devlabs

Read when the task is writing or structuring tests themselves.

| Resource | Path / command |
|----------|----------------|
| TDD methodology | `D:/WSSDevlabsEngine/WSSDevlabsEngine/everything-claude-code/skills/tdd-workflow/SKILL.md` |
| TDD guidance agent | `D:/WSSDevlabsEngine/WSSDevlabsEngine/everything-claude-code/agents/tdd-guide.md` |
| E2E test patterns (Playwright) | `D:/WSSDevlabsEngine/WSSDevlabsEngine/everything-claude-code/agents/e2e-runner.md` |
| Eval/verification harness ideas | `D:/WSSDevlabsEngine/WSSDevlabsEngine/everything-claude-code/skills/eval-harness/SKILL.md` |
| Testing rules (coverage bar) | `D:/WSSDevlabsEngine/WSSDevlabsEngine/everything-claude-code/rules/testing.md` |

## What to test, in priority order (solo-founder economics)
1. Money paths â€” pricing, checkout, invoicing math. Bugs here cost trust AND cash.
2. Data writes â€” anything that creates/mutates client business data.
3. Auth boundaries â€” who can see/do what.
4. Business rules â€” the "if X then Y" logic the client described in requirements.
5. Integration seams â€” where their systems meet ours (mock the remote, test the
   handling of its failures: timeout, 500, garbage payload).

UI pixel-pushing gets /qa in a real browser, not brittle snapshot tests.

## House rules
- A test that never fails is decoration; make it fail once (break the code) to
  prove it guards something.
- Test names state the rule: `rejects_expired_voucher`, not `test_voucher_2`.
- Fast suite or unrun suite â€” keep unit tests under seconds; E2E can be minutes
  but runs before release, not before every commit.
