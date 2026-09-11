# HSF ERP — Approved Information Layer Implementation Contract

**Status:** Design contract; not yet implemented  
**Effective:** 11 September 2026

The ERP will eventually support the approved-information bridge used by MEAL, reporting and public communication. This document does not claim that the persistence/API already exists.

## Minimum conceptual record

- `indicatorCode`
- `programmeCode`
- `reportingPeriodStart`
- `reportingPeriodEnd`
- `value`
- `unit`
- `evidenceSource`
- `evidenceStatus`
- `verificationStatus`
- `verifiedBy` / `verifiedAt` where applicable
- `approvalStatus`
- `approvedBy` / `approvedAt` where applicable
- `dataClassification`
- `publicationState`
- `validFrom`
- `supersedesId`

## Server rules

When implemented:

1. Operational programme records remain in their domain models.
2. Indicator calculation/aggregation must retain provenance to source records or approved datasets.
3. Verification and approval actions must be server-enforced and auditable.
4. Public export/API access must filter on classification and `APPROVED_PUBLIC` publication state.
5. Superseded values remain historically traceable.
6. Patient/learner-level identifiers are excluded from the public information layer unless an explicit approved exception exists.

## Current boundary

Do not add public-reporting shortcuts directly to synthetic UI data. Implement this layer only after authentication, server authorization and foundational persistence are approved.
