# HSF ERP End-to-End Operating Lifecycle

## Objective

Connect organizational planning, funding, field delivery, staff reporting,
evidence, financial control, programme reporting, and annual consolidation
through one traceable lifecycle.

## Canonical lifecycle

```text
Annual Planning
    ↓
Annual Budget
    ↓
Project Work Plan
    ↓
Monthly Target
    ↓
Field-level Next-month Requisition
    ↓
Project Coordinator Review and Consolidation
    ↓
Monthly Fund Requisition
    ↓
Finance Review
    ↓
Management Recommendation
    ↓
Final Approval
    ↓
Purchase Requisition / Fund Disbursement
    ↓
Daily Field Implementation
    ↓
Daily Data and Staff Activity Entry
    ↓
Monthly Achievement Submission
    ↓
Bill, Voucher, and Evidence Submission
    ↓
Project Management Report
    ↓
Financial Report
    ↓
Bank Reconciliation
    ↓
Monthly Closing
    ↓
Donor Report
    ↓
Annual Consolidated Report
```

## Traceability chain

The system should be able to trace, where applicable:

```text
Annual Objective
→ Project Plan
→ Monthly Target
→ Field Requisition
→ MFR Line
→ Approval
→ PR / Disbursement
→ Activity
→ Beneficiary or Service Record
→ Achievement
→ Evidence
→ Expense and Voucher
→ Monthly Report
→ Donor / Annual Report
```

## Lifecycle controls

- Planning and expenditure remain linked.
- A field requisition is a statement of operational need, not financial
  authorization.
- The Project Coordinator consolidates field needs into the project MFR.
- Finance validates budget, coding, and financial control.
- Management approval follows the approved authority matrix.
- Daily service-delivery data feeds monthly reporting where appropriate.
- Monthly reporting uses reviewed and verified data.
- Supporting documents remain linked to the relevant transaction or activity.
- Monthly closing checks both financial and programme completeness.
- Closed periods require controlled reopening.

## Status model principles

Every controlled document should have explicit states, timestamps, actors, and
history. Typical states include:

```text
Draft
Submitted
Under Review
Returned
Resubmitted
Recommended
Approved
Partially Executed
Completed
Adjusted
Closed
Cancelled
```

Exact states are module-specific and require approved acceptance criteria.

## Future implementation note

Do not build the entire lifecycle in one task. Implement it as small vertical
slices that preserve the final traceability model.
