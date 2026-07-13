# Field Requisition to Monthly Fund Requisition Workflow

## Purpose

Connect the next month's operational needs from field locations to the formal
project-level MFR without confusing a field request with financial
authorization.

## Field submitters

### E4BL

The Head Teacher submits the centre's next-month requisition.

Possible needs:

- teaching materials
- student materials
- centre supplies
- events
- training
- utilities
- maintenance
- transport
- approved staff-related needs
- planned activity costs
- emergency or special needs

### A2PHC

The Medical Camp Supervisor submits the next-month requisition.

Possible needs:

- planned camps
- transport
- medicine
- medical consumables
- printing and forms
- communication
- equipment
- venue and logistics
- approved referral support
- training or awareness sessions
- operational contingency

## Recommended fields

- Project
- Location
- Requisition month
- Requested by
- Planned activity
- Item or expense head
- Quantity
- Unit
- Estimated unit cost
- Estimated total
- Existing stock
- Previous-month use
- Justification
- Required date
- Supporting note or evidence
- Priority
- Reviewer comment
- Status

## Workflow

```text
Head Teacher / Medical Supervisor
submits next-month field requisition
    ↓
Project Coordinator reviews
    ↓
Duplicate, stock, plan, priority, and budget checks
    ↓
Coordinator returns or accepts lines
    ↓
Coordinator consolidates all field requisitions
    ↓
Project monthly plan is finalized
    ↓
Project Coordinator prepares project MFR
    ↓
Finance reviews budget and account coding
    ↓
Management recommendation
    ↓
Final approval
```

## Core controls

- Field Requisition and MFR are separate records.
- A requisition line should retain its relationship to the resulting MFR line.
- A reduction, exclusion, or modification requires a reason.
- Adding a need that did not come through field requisition requires a reason.
- Existing stock should be visible during review where inventory exists.
- Requisition totals are estimates until approved in the MFR process.
- The monthly cut-off date remains configurable until formally approved.
- The Project Coordinator may consolidate but cannot provide final financial
  approval for the same request.

## Suggested statuses

### Field requisition

```text
Draft
Submitted
Under Coordinator Review
Returned
Accepted
Partially Accepted
Consolidated
Closed
Cancelled
```

### MFR

```text
Draft
Submitted
Finance Review
Returned
Recommended
Approved
Partially Disbursed
Fully Disbursed
Adjusted
Closed
```

## Reporting outputs

- Requisition register
- Requisition-to-MFR trace report
- Accepted and rejected needs
- Unfunded need register
- Budget impact
- Existing-stock comparison
- Location-wise requisition summary
- Project monthly MFR consolidation
