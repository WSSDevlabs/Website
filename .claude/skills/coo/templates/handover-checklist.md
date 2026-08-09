# Client handover checklist

## Access & ownership transfer
- [ ] Domain: registered under client's account (registrar: ___)
- [ ] Hosting/deploy platform: client is owner, WSS Devlabs is collaborator (or removed)
- [ ] Database: client has admin credential (delivered via password manager share, never email)
- [ ] Third-party services (payment, email, analytics, APIs): each on client's own account & billing
- [ ] Code repository: transferred or client added as owner
- [ ] All WSS Devlabs personal/test accounts removed from production

## Documentation delivered
- [ ] HANDOVER.md â€” access inventory (names & locations, no secret values)
- [ ] Runbook â€” restart, redeploy, logs, 3 most likely problems + fixes
- [ ] User guide (if the client's staff operates the product) â€” /admin formats
- [ ] Requirements â†’ delivered mapping (what was promised vs. what shipped)

## Commercial close-out
- [ ] Final invoice issued (/cfo), tied to delivery milestone
- [ ] Post-delivery support terms stated in HANDOVER.md (X days bug fixes included)
- [ ] Maintenance/retainer offer made (if appropriate for this client)
- [ ] Testimonial / case-study permission asked (feed answer to /cmo)

## Internal close-out
- [ ] memory/PROGRESS.md â€” final entry with delivery date & version
- [ ] /pm retro completed, learnings logged
- [ ] Reusable pieces identified (components, patterns â†’ note for next project)
