# Personal data breach response runbook

> **DRAFT FOR LAWYER REVIEW.** For WSS's own data (as controller) and for client systems WSS hosts or maintains (as processor). The PDPA, as amended in 2024, requires controllers to notify the Personal Data Protection Commissioner of a personal data breach, and affected individuals where the breach is likely to cause significant harm, within the timeframes in the Commissioner's guidelines (verify the current timeframes before relying on this). Processors are directly bound by the Security Principle.

## 1. Detect and record (first hour)
- [ ] Note the time you became aware, what you saw, and who reported it.
- [ ] Open an incident log (date, time, action, person) and keep updating it.
- [ ] Don't delete evidence (logs, files, emails).

## 2. Contain (first hours)
- [ ] Revoke or change compromised passwords, keys and tokens.
- [ ] Take affected systems offline or into maintenance mode if needed.
- [ ] Block the attacker's access (IP, account), patch the hole if known.
- [ ] Restore from a clean backup only after the cause is understood.

## 3. Assess
- What personal data, whose, and how many people?
- Is it sensitive (health, biometric, children's data, IC numbers, financial)?
- Was it encrypted? Has it been copied or published?
- What harm could follow (fraud, identity theft, embarrassment, physical risk)?

## 4. Notify
| If WSS is... | Then |
|---|---|
| **Processor** (client system) | Notify the client (controller) within the hours promised in the DPA, using template A. Help them notify the Commissioner and individuals. |
| **Controller** (WSS's own leads and clients) | Notify the Commissioner within the required timeframe (template B). Notify affected individuals where significant harm is likely (template C). |

## 5. Recover and learn
- [ ] Fix the root cause, confirm systems are clean.
- [ ] Write a short report: what happened, impact, actions, what changes.
- [ ] Update this runbook and the security baseline (docs/ops/compliance-controls.md).
- [ ] Keep the incident log and report for at least 7 years.

---

## Template A: notice to a client (WSS as processor)
> Subject: Security incident affecting [system]
>
> On [date/time] we became aware of [what happened] affecting [system]. The personal data involved appears to be [types], for about [number] people. We have [containment steps]. We are still investigating and will update you by [time]. Under our Data Processing Agreement, we will help you with any notification to the Personal Data Protection Commissioner and affected individuals. Your contact for this incident is Razali, +6011-2720-5895.

## Template B: notice to the Commissioner (WSS as controller)
Include: WSS's details and contact person; description of the breach; dates (occurred, discovered); types and approximate number of data subjects and records; likely consequences; measures taken or proposed; whether individuals have been notified. Submit through the channel the Commissioner specifies (verify).

## Template C: notice to affected individuals
> We're writing to tell you about a security incident that may affect your personal data. On [date], [what happened]. The information involved is [types]. We have [actions taken]. To protect yourself, we suggest [steps, e.g. watch for suspicious messages, change passwords]. We're sorry this happened. If you have questions, contact Razali at info@wssdevlabs.com or +6011-2720-5895.
