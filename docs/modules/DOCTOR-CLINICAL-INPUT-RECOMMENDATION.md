# Doctor Clinical Input Recommendation

**Status:** Recommendation — not yet approved as the final doctor dataset.

## Problem

The Health Supervisor will already create the patient and visit record. Asking
the Doctor to re-enter the patient list would create:

- duplicate work
- inconsistent patient counts
- mismatched demographic data
- fragmented clinical history
- delayed camp reporting

## Recommended model

The Doctor opens the same visit created by the Health Supervisor and completes
the clinical section.

## Recommended patient-level fields

- Clinical complaint review
- Provisional or confirmed diagnosis
- Prescription
- Recommended medicine
- Test advice
- Referral decision
- Follow-up required
- Follow-up timeframe
- High-risk case flag
- Clinical notes
- Consultation completion
- Digital clinical sign-off

## Recommended daily camp summary

- Camp date and location
- Total consultations — system generated
- Common disease pattern
- Serious or high-risk cases
- Referral count — system generated or confirmed
- Follow-up-required count
- Medicine shortage or clinical supply need
- Public-health observation
- Maternal, child, or elderly health concern
- Clinical-quality issue
- Recommendation for the next camp

## Rules

- Patient counts come from Patient Visit records.
- The Doctor does not duplicate registration data.
- Clinical records may remain pending until sign-off.
- Corrections preserve audit history.
- Clinical data is visible only to authorized users.
- No diagnosis list, mandatory clinical field, prescribing rule, or referral
  policy becomes final without HSF clinical approval.

## Decisions required before implementation

1. Minimum required doctor fields
2. Whether diagnosis uses free text, coded values, or both
3. Whether prescription templates are allowed
4. Which vitals are mandatory and who records them
5. Digital sign-off meaning and legal/organizational policy
6. High-risk and emergency flags
7. Referral workflow
8. Follow-up workflow
9. Clinical correction policy
10. Doctor monthly performance indicators
