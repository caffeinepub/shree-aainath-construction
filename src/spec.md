# Specification

## Summary
**Goal:** Replace placeholder Contact section details with real, configurable business contact information and make phone/email clickable.

**Planned changes:**
- Update the Contact section to read phone, email, and address values from a configurable frontend source (no backend dependency).
- Render phone as a `tel:` link and email as a `mailto:` link when present.
- Hide any contact line item (Phone/Email/Address) that is not configured, instead of showing placeholders like "TBD".

**User-visible outcome:** The Contact section shows real business contact details (phone, email, address) with working clickable phone/email links, and no "TBD" placeholders.
