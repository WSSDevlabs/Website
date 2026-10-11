# Data Processing Agreement (DPA)

> **DRAFT FOR LAWYER REVIEW.** Required before WSS hosts, maintains or accesses any client system that holds personal data (Care Plans, ecosystems, installations with live data). Based on the PDPA 2010 as amended in 2024. Items marked (verify) need legal confirmation.

**Between:** [Client registered name] ("**Controller**") and [Registered name of WSS DevLabs] ("**Processor**").
**Linked to:** [Care Plan / SOW no. / MSA dated ...] · **Date:** [ ]

## 1. Roles
1.1 The Controller decides what personal data the system holds and why. The Processor processes it only to provide the services in the linked agreement.

## 2. Details of the processing
| Item | Details |
|---|---|
| Systems | [e.g. Visitor Management, Guard Patrol, website contact form] |
| Data subjects | [e.g. residents, visitors, staff, customers, patients] |
| Personal data | [e.g. name, phone, IC number (masked), vehicle plate, photo] |
| Sensitive data | [None / health / biometric: requires explicit consent by the Controller] |
| Processing | Hosting, backups, updates, troubleshooting, restoring data on request |
| Location | [Hosting provider and country, e.g. Malaysia] |
| Retention | As set by the Controller: [e.g. visitor records 90 days] |

## 3. Processor obligations
3.1 Process personal data only on the Controller's documented instructions, including this DPA.
3.2 Keep it confidential; only people who need access get it, and they are bound by written confidentiality.
3.3 Apply security measures appropriate to the risk (PDPA Security Principle), at minimum: encryption in transit, encrypted backups, role-based access with no shared accounts, access logs, timely security updates, quarterly restore tests.
3.4 Not use any sub-processor not listed in Annex A without telling the Controller first, giving it [14] days to object. Sub-processors are bound by terms at least as protective as this DPA.
3.5 **Breach notice:** notify the Controller without undue delay and in any case within **[24/48] hours** of becoming aware of a personal data breach (verify timeline against the Commissioner's guidelines), with what is known, and keep updating. Help the Controller notify the Personal Data Protection Commissioner and affected individuals where required.
3.6 Help the Controller respond to data subject requests (access, correction, withdrawal of consent, portability), including exporting data in CSV or JSON.
3.7 Not transfer personal data outside Malaysia except to the locations in Annex A, or with the Controller's written approval.
3.8 Make available the information needed to show compliance, and allow reasonable audits with [30] days' notice, at the Controller's cost.

## 4. Controller obligations
4.1 Have a lawful basis and the consents needed, including explicit consent for sensitive data, and give notices to data subjects (for example guardhouse signage).
4.2 Register as a data user if the Controller's class requires it (verify).
4.3 Give only lawful instructions.

## 5. End of the engagement
5.1 Within [30] days of the end, the Processor returns the personal data to the Controller in a usable format and then deletes its copies (including backups, once they expire), unless the law requires keeping them. The Processor confirms deletion in writing.

## 6. Liability
6.1 As in the linked agreement. Nothing limits liability that cannot be limited by law.

## Annex A: approved sub-processors
| Sub-processor | Purpose | Location |
|---|---|---|
| [Hosting provider] | Hosting and backups | [country] |
| Cloudflare, Inc. | CDN and security | Global |
| [Email provider] | Notifications | [country] |
| [Meta Platforms] | WhatsApp notifications (if used) | Global |

| | Name | Signature | Date |
|---|---|---|---|
| Controller | | | |
| Processor | | | |
