# Legal document pack

> **DRAFTS FOR LAWYER REVIEW.** These are plain-English starting points built from the audit's clause library (Part 14.5). They are not legal advice. A practising Malaysian advocate and solicitor must review and adapt them to your business structure and current law before you sign anything with a client. Items marked **(verify)** need a lawyer or accountant to confirm.

## What's live on the website (audit 14.4, items 1 to 6)

| # | Document | Where |
|---|---|---|
| 1 | Website Terms of Use | `/terms/` section 3 |
| 2 | Terms of Service | `/terms/` |
| 3 | Licence Agreement (ready-made systems) | `/licence/` |
| 4 | Refund Policy | `/refunds/` |
| 5 | Privacy Notice (English and Bahasa Malaysia) | `/privacy/` |
| 6 | Cookie Policy | `/cookies/` |
| - | Care Plan terms (summary) | `/care-plan-terms/` |

## Templates in this folder (items 7 to 20)

| # | Document | Use it for | File |
|---|---|---|---|
| 7 | Master Services Agreement | Custom builds, ecosystems, anything over about RM5,000 or with personal data or hardware | [master-services-agreement.md](master-services-agreement.md) |
| 8 | Statement of Work / Quotation | Every project | [statement-of-work-template.md](statement-of-work-template.md) |
| 9 | Change Request | Any scope change | [change-request-form.md](change-request-form.md) |
| 10 | Acceptance and Handover certificates | End of each milestone and project | [acceptance-and-handover-certificates.md](acceptance-and-handover-certificates.md) |
| 11 | Care Plan SLA (full) | Every Care Plan | [care-plan-sla.md](care-plan-sla.md) |
| 12 | Data Processing Agreement | Care Plans, ecosystems, any access to client personal data | [data-processing-agreement.md](data-processing-agreement.md) |
| 13 | Hardware Schedule | Ecosystems with devices | [hardware-schedule.md](hardware-schedule.md) |
| 14 | System Access Authorisation | Rescue Audits, takeovers | [system-access-authorisation.md](system-access-authorisation.md) |
| 15 | Freelancer / Contractor Agreement | Anyone who works on client material | [freelancer-agreement.md](freelancer-agreement.md) |
| 16 | Hardware Partner Agreement | Device suppliers and installers | [hardware-partner-agreement.md](hardware-partner-agreement.md) |
| 17 | Founding Client Agreement | The first 5 clients | [founding-client-agreement.md](founding-client-agreement.md) |
| 18 | Mutual NDA | Discovery Sprints and sensitive projects | [mutual-nda.md](mutual-nda.md) |
| 19 | AI Assistant Addendum | AI WhatsApp Assistant | [ai-assistant-addendum.md](ai-assistant-addendum.md) |
| 20 | Clinic Addendum | Smart Clinic (when it launches) | [clinic-addendum.md](clinic-addendum.md) |
| - | Breach response runbook and notices | Any personal data breach | [breach-response-runbook.md](breach-response-runbook.md) |
| - | Guardhouse PDPA notice (EN/BM) | Smart Premises sites | [guardhouse-pdpa-notice.md](guardhouse-pdpa-notice.md) |

## Which documents for which sale

| Selling | Documents |
|---|---|
| One-Page, Business or Store website | Quotation (SOW template, short form) referencing the online Terms; Care Plan SLA + DPA if they take a Care Plan |
| Ready-made system | Invoice + the buyer's written acceptance of the Licence and Refund Policy (a WhatsApp or email reply is fine); DPA if we install or maintain it with live data |
| Discovery Sprint | Quotation; NDA if anything sensitive is shared |
| Custom build | MSA + SOW + DPA (if personal data) |
| Rescue Audit / takeover | Quotation + System Access Authorisation (before any login) |
| Ecosystem | MSA + SOW + DPA + Hardware Schedule + Care Plan SLA; Clinic Addendum for clinics |
| AI WhatsApp Assistant | Quotation + AI Assistant Addendum + DPA |
| Founding Client | Their normal documents + Founding Client Agreement |

## Questions to take to the lawyer (audit 14.10)

1. Does the Consumer Protection Act 1999 apply to any of my buyers (for example a sole trader buying a One-Page site), and which clauses can't be excluded for them?
2. How do the commissioned-works rules in the Copyright Act 1987 affect my IP clause?
3. Do I, or any of my clients, meet the Data Protection Officer appointment thresholds? Which clients must register as data users?
4. What breach notification timeline should my DPA commit to?
5. Is my liability cap enforceable as drafted?
6. What insurance limits are sensible for my contract sizes?
7. Should the English or Bahasa Malaysia version of the Privacy Notice prevail? (The draft says English.)
8. Is the late-payment interest rate I plan to state reasonable under section 75 of the Contracts Act 1950?

## Legal action plan (audit 14.11)

**Week 1**
- [x] Remove misleading content (fake demos, placeholders, unverifiable claims, guarantees): done on the website
- [ ] Add the legal identity block: the footer and every policy are ready, **fill in `legalName`, `ssmNumber` and `registeredAddress` in the CMS**
- [ ] Freelancer agreements signed for anyone currently working with you
- [ ] Confirm the legal structure; book accountant and lawyer consultations

**Month 1**
- [x] Terms, Refund Policy, Licence, Privacy Notice (EN/BM) and Cookie Policy published (drafts, need lawyer review)
- [ ] SOW, Change Request, UAT and Handover templates in use (drafts in this folder)
- [ ] DPA template finalised; breach runbook adopted
- [ ] SBOM and NOTICE files for all public systems (see docs/ops/compliance-controls.md)
- [ ] Insurance quotes: professional indemnity and cyber
- [ ] Confirm e-invoicing obligations with your accountant

**Months 2 to 3**
- [ ] Incorporate (if needed) before the first ecosystem contract
- [ ] MSA, Hardware Schedule, Hardware Partner Agreement, Clinic Addendum and AI Addendum finalised
- [ ] Real checkout with terms acceptance and automatic receipts (in the meantime, "Buy now" opens WhatsApp; get the buyer's written acceptance of the Licence and Refund Policy before sending the download)
- [ ] Trademark search and filing for "WSS DevLabs"
- [ ] Insurance in place before the first on-site installation
- [ ] Annual legal review scheduled
