# Ecosystem readiness

> From audit Part 13 and 14.2 K. Full package specs live in `src/data/ecosystems.ts`. Smart Premises and Smart Outlet are published, honestly labelled as booking pilot sites. Smart Clinic and Smart Warehouse are in the data with `published: false`.

## Rules
1. Build only from systems you already have.
2. Launch at most 2 (Smart Premises, then Smart Outlet). Publish Smart Clinic and Smart Warehouse only when the first two have **live reference clients**: then set `published: true` in `src/data/ecosystems.ts`.
3. Hardware from partners, quoted separately at cost plus handling, under the supplier's warranty.
4. **The integration layer is the product:** one login, one shared database, one dashboard, cross-module alerts. Until it exists, keep the "pilot" status text.
5. Care Pro is required.

## Smart Premises: before selling it as finished
- [ ] Integration layer built: one login, shared unit and person database, unified dashboard
- [ ] Real demo on a real server (synthetic data, resets regularly, can't send real messages)
- [ ] Hardware Partner Agreement signed (docs/legal/hardware-partner-agreement.md)
- [ ] One pilot site signed as a Founding Client
- [ ] PDPA review: retention, access control, guardhouse notice (docs/legal/guardhouse-pdpa-notice.md)
- [ ] Insurance: professional indemnity and cyber; public liability before installation
- [ ] Business incorporated (Sdn Bhd) before the first ecosystem contract (audit 14.2 A)
- [ ] Replace the calculator's example figure with real competitor per-unit pricing (3 quotes)

### Condominium proposal pack (audit 14.2 K)
- Formal proposal and quotation with a validity date
- Company profile with registration number and address
- Insurance certificates
- Sample contract: MSA + SOW + DPA + Hardware Schedule + Care Plan SLA
- PDPA guardhouse notice template
- Confirm the signatory's authority (committee resolution) before signing; contract with the management body's exact legal name

## Smart Outlet: before selling it as finished
- [ ] POS and Staff Attendance share one database
- [ ] Tested with real printers, scanners and cash drawers
- [ ] Hardware supplier agreement
- [ ] MyInvois position stated clearly (currently: not included as standard)
- [ ] Real price of a typical attendance app (for honest comparisons)

## Smart Clinic: before publishing
- [ ] Clinic Management reviewed for role-based access and audit logs
- [ ] Malaysian hosting arranged
- [ ] DPA and Clinic Addendum finalised by a lawyer
- [ ] AI assistant scripted to refuse medical advice
- [ ] Pilot clinic as a Founding Client; tested with a real queue display and printer

## Smart Warehouse: before publishing
- [ ] RFID and IoT modules integrated into one dashboard
- [ ] Certified hardware partner with stock and warranty terms
- [ ] Pilot zone at a Founding Client; read-rate test procedure written
- [ ] Electrical contractor partner

## Ecosystems 5 to 8 (outline only, build later)
| Ecosystem | Modules | Indicative price |
|---|---|---|
| Smart Workplace | Staff Attendance, Staff Portal, Helpdesk, Asset Management, Digital Forms, Cashless Canteen Wallet, Canteen Meal Redemption | Essential RM5,900 / Complete RM11,190 |
| Smart Factory Monitor | Machine Monitoring, IoT Sensor Dashboard, Energy Monitoring, RFID Tracking, Asset Management, Incident Reporting | Pilot line RM11,190 / Plant from RM22,400 + sensors |
| Smart Campus & Hostel | Hostel Management, Safe Student Pick-Up, Smart ID, Visitor Management, Room Booking, Student Cashless Card | Essential RM9,690 / Complete RM18,690 |
| Smart Venue | Room & Event Space Booking, Event Ticketing, Event Photo Gallery, Self-Service Kiosk, Visitor Management, POS | Essential RM5,190 / Complete RM10,400 |

Don't publish 5 to 8 until 1 and 2 each have a live reference client. Build Smart Factory after Smart Warehouse (same sensor and RFID stack).

## Corrections to the audit's product guesses
- `wss-emers` is canteen meal redemption, not emergency broadcast, so the Smart Premises "Complete" package lists facility booking (FABS) in its place.
- `wss-vims` is the visitor management system; `wss-vms` is vehicle maintenance.
