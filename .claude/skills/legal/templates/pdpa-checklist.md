# PDPA Build Checklist

Add these to `docs/REQUIREMENTS.md` as acceptance criteria for any system that
collects personal data. /qa-manager checks every line at the QA gate.

Confirm the current requirements against the Personal Data Protection Act 2010, its
2024 amendments and the Commissioner's guidelines (pdp.gov.my) before relying on any
specific deadline or threshold.

## Notice and consent
- [ ] Privacy notice (BM + EN) is linked from every form that collects personal data.
- [ ] Marketing consent is a separate, unticked opt-in. It is never bundled with terms.
- [ ] Required vs optional fields are marked, and the form says what happens if
      required fields are left empty.
- [ ] Consent records are stored with the date, the notice version and what was agreed.

## Collect less
- [ ] Each field has a stated purpose in the requirements. Fields without one are
      removed.
- [ ] IC (MyKad) numbers are collected only where the law or the use case truly
      requires them, and are masked in the UI and in logs.

## Security
- [ ] HTTPS everywhere. Passwords hashed with bcrypt or argon2.
- [ ] Personal data is encrypted at rest where the hosting platform supports it.
- [ ] Admin access uses separate accounts with least privilege. No shared logins.
- [ ] Logs and error reports do not contain personal data, card numbers or secrets.
- [ ] Backups are encrypted, and a restore has been tested.

## Data subject rights
- [ ] Users can view and correct their own data, or there is a documented process to
      request it.
- [ ] Data can be exported in a common machine-readable format (CSV or JSON) on
      request.
- [ ] Account deletion or consent withdrawal works and is documented.

## Retention and breach
- [ ] A retention period is set for each data type, and old data is deleted or
      anonymised on schedule.
- [ ] A breach response note is handed over: who to call, how to assess the breach,
      and how to notify the Commissioner and affected users within the legal
      deadline.
- [ ] The client knows whether they must appoint a Data Protection Officer, and who
      it is.

## Third parties
- [ ] Every third-party service that receives personal data (payments, email, SMS,
      analytics, hosting) is listed in the privacy notice.
- [ ] Hosting region is recorded. Transfers outside Malaysia are disclosed.
