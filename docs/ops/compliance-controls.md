# Compliance controls (CTO and PM)

> From audit 14.8 and 14.9. The technical and process controls that back up the legal documents in docs/legal/.

## Technical controls (audit 14.8)

| Control | Why | Minimum standard | Status |
|---|---|---|---|
| Encryption in transit and at rest | PDPA Security Principle | HTTPS everywhere; encrypted databases and backups for systems with personal data | Website: HTTPS + HSTS done. Client systems: per project |
| Role-based access, least privilege | PDPA security, sensitive data | Separate roles (admin, staff, guard, front desk, doctor); no shared accounts | Check each public system before selling |
| Audit logs | Evidence for disputes and breaches | Log logins, exports and record changes | Check each public system |
| Backups and restore tests | Warranties, Care Plan SLA | Daily backups; restore test every quarter | Set up with the first Care Plan |
| Data residency | Cross-border transfer rules | Malaysian or regional hosting for sensitive systems; document locations in the DPA | Per project |
| Retention and deletion | PDPA retention principle | Configurable retention, scheduled deletion, deletion at contract end | Check each public system |
| Export | Data portability, client exit | CSV or JSON export of core records | Check each public system |
| Breach response | Breach notification duties | docs/legal/breach-response-runbook.md | Drafted |
| Secure development | Negligence, warranties | Dependency updates, secrets out of code, code review, basic security testing before release | Ongoing |
| Licence scanning (SBOM) | Open-source compliance | Licence list per product; NOTICE file in every delivery; no GPL/AGPL in ready-made systems | **To do** (see below) |
| Demo data | PDPA | Synthetic data only; demos reset regularly; can't send real email, SMS or WhatsApp; separate credentials from production | Applies once demos exist |
| Access authorisation | Computer Crimes Act 1997 | docs/legal/system-access-authorisation.md signed before any client login | Drafted |
| Security headers on our site | Credibility | HSTS, CSP, frame protection, Permissions-Policy (`public/_headers`) | **Done** |

### SBOM and NOTICE files for the 15 public systems
For each system:
1. List every third-party library, font, icon set and image with its licence (for a PHP project: `composer licenses`; for JavaScript: `npx license-checker --summary`).
2. Remove or replace anything under GPL or AGPL, unless the licence model changes.
3. Ship a `NOTICE` (or `LICENSES`) file in every download and handover.
4. Record image, icon and font sources for client websites too.

This website's own third-party parts: Astro (MIT), Tailwind CSS (MIT), Geist and Geist Mono (SIL OFL), Outfit (SIL OFL), Heroicons path data (MIT), Simple Icons WhatsApp glyph (CC0), Unsplash article covers (Unsplash licence).

## Process controls (audit 14.9)

| Stage | Legal checkpoint | Record kept |
|---|---|---|
| Lead | Contact form consent; marketing opt-in separate (the form has both) | Web3Forms email |
| Discovery | NDA if sensitive; access authorisation if systems are involved | Signed NDA / authorisation |
| Quote | Package spec, assumptions, validity, Terms referenced | Quote PDF |
| Contract | Terms accepted or MSA + SOW signed; DPA and schedules as needed; signatory authority checked | Signed documents |
| Deposit | Paid before work starts | Receipt / e-invoice |
| Build | Change requests for any scope change | Signed change requests |
| UAT | Acceptance checklist | Signed UAT certificate |
| Handover | Credentials, source code, licences, NOTICE file, documentation | Handover certificate |
| Care | SLA and DPA active; incidents logged | Support log, incident reports |
| Closure | Data returned or deleted at the end | Deletion confirmation |
| Marketing | Case study and logo permission | Founding Client Agreement / written consent |

Keep all records for at least 7 years (verify with your accountant).

## Personal data rules of thumb by product (audit 14.2 G)

| Data | Products | Rule |
|---|---|---|
| IC numbers, photos, plates | Visitor Management, Smart Premises | Collect the minimum; mask IC numbers; short retention (client decides, suggest 90 days); signage |
| CCTV footage | Smart Premises | WSS doesn't store it unless agreed in writing; access through the client's recorder |
| Fingerprints, faces | Staff Attendance, Smart ID | Sensitive: explicit consent, a card or PIN alternative, templates not images, encrypted |
| Location of staff and guards | Guard Patrol | Only during patrols, with written notice to staff |
| Health information | Smart Clinic | Sensitive: explicit consent, strict roles, audit logs, Malaysian hosting |
| Children's data | Safe Pick-Up, Smart Campus | Parent or guardian consent; minimum data; never used for marketing |
| Customer contacts for marketing | POS, websites, WhatsApp | Separate opt-in; honour opt-outs promptly |
