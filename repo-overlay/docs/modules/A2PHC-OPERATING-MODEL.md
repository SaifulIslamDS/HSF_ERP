# A2PHC Operating and Reporting Model

## Project context

Access to Primary Health Care uses Medical Camp Supervisors and General
Physicians to provide free consultation, advice, prescription, and medicine
when available.

Both Health Supervisors and Doctors will be assigned to the A2PHC project and
their permitted camps, service areas, or locations.

## Responsibility split

### Health Supervisor

Primarily responsible for:

- Camp date and location
- Doctor and supervisor assignment
- Patient registration
- Patient demographic information
- New or follow-up status
- Basic vitals where approved
- Queue and visit tracking
- Operational camp data
- Medicine-distribution record
- Referral follow-up coordination
- Daily camp summary
- Operational challenge
- Missing medicine or supply
- Next-month camp requisition

### Doctor

Primarily responsible for:

- Clinical complaint review
- Diagnosis
- Prescription
- Test advice
- Referral decision
- Follow-up instruction
- High-risk flag
- Clinical notes
- Consultation completion
- Clinical sign-off

The exact doctor dataset is not yet approved.

## Core data model principle

```text
Patient Master
    1
    ↓
Many Patient Visits
    ↓
One or more Clinical Records / Actions
```

Do not mix Patient Master and Patient Visit.

Do not create a separate doctor patient list that duplicates registration.

## Daily flow

```text
Supervisor registers patient and opens visit
    ↓
Basic operational and approved vital data captured
    ↓
Doctor opens the same visit
    ↓
Doctor completes clinical section
    ↓
Prescription / referral / follow-up recorded
    ↓
Doctor provides clinical sign-off
    ↓
Supervisor completes operational camp record
    ↓
System generates daily camp summary
```

## Monthly flow

```text
Daily Camp and Patient Visits
    ↓
System-generated Supervisor Monthly Draft
    ↓
Supervisor Review and Submission
    ↓
Project / Health Data Review
    ↓
Doctor Clinical Completion Check
    ↓
Verified A2PHC Monthly Report
```

## Future entities

- Camp Plan
- Camp
- User Assignment
- Patient Master
- Patient Visit
- Vitals
- Consultation
- Diagnosis
- Prescription
- Prescription Item
- Test Advice
- Referral
- Follow-up
- Medicine Issue
- Clinical Sign-off
- Daily Camp Summary
- Supervisor Achievement
- Doctor Camp Summary
- Field Requisition
- Disease and Service Dashboard

## Data-quality controls

- Duplicate-patient detection
- Valid age or date-of-birth rules
- Contact validation
- Location standardization
- Required-field rules by visit status
- Pending clinical-record visibility
- Follow-up linkage
- Referral tracking
- Audit history
- Sensitive-data masking and least privilege
