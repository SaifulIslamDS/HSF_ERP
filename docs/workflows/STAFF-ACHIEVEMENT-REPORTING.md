# Staff Daily Activity and Monthly Achievement Reporting

## Purpose

Create a consistent reporting model for staff while allowing different roles
to report at the frequency appropriate to their work.

## Reporting modes

### Daily operational reporting

Use daily reporting when work:

- occurs every day
- is class-, attendance-, camp-, consultation-, or visit-based
- directly serves beneficiaries
- must later be summarized by month
- loses reliability when entered late

Examples:

- Teacher class and attendance entries
- Health Supervisor patient and camp entries
- Doctor consultation completion and clinical sign-off

### Month-end achievement reporting

Use month-end reporting when daily entry is not operationally useful.

Examples may include:

- management coordination
- administrative outputs
- periodic stakeholder engagement
- consolidated project tasks

The exact role-to-frequency matrix is an open product decision.

## Recommended monthly achievement fields

- Staff
- Designation
- Project
- Location
- Reporting month
- Planned activity
- Indicator
- Unit
- Monthly target
- Monthly achievement
- Achievement percentage
- Evidence
- Challenge
- Corrective action
- Next-month priority
- Supervisor comment
- Submission status
- Review status
- Submission and review timestamps

## Daily-to-monthly consolidation

Where daily records exist:

```text
Daily Operational Entries
    ↓
System-generated Monthly Draft
    ↓
Staff Review
    ↓
Submission
    ↓
Supervisor Verification
    ↓
Project-level Consolidation
    ↓
Verified Project Report
```

A system-generated draft is not automatically a submitted or approved report.

## Unit integrity

The following must remain separate:

- Student
- Patient
- Consultation
- Visit
- Day
- Session
- Meeting
- Report
- Material
- Currency

The system must not calculate one total by adding incompatible units.

Achievement percentage should be calculated by indicator:

```text
Achievement Percentage = Actual ÷ Target × 100
```

Weighted scores require explicitly approved indicator weights.

## Evidence and correction

- Evidence remains linked to the activity or achievement.
- Submitted reports should be returned for correction rather than overwritten.
- Corrections must preserve previous values or audit history.
- Final project reporting uses verified records only.

## Recommended statuses

```text
Draft
Ready for Review
Submitted
Returned
Resubmitted
Verified
Approved
Locked
```

Exact status permissions require RBAC approval.
