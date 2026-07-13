# Finance Workflow Summary

```text
Annual Plan
→ Annual Budget
→ Monthly MFR
→ Finance Check
→ Management Recommendation
→ Final Approval
→ PR or Disbursement
→ Purchase / Field Activity
→ Bill and Voucher
→ IOU Adjustment
→ Bank and Cash Reconciliation
→ Project Financial Report
→ Monthly Period Closing
```

## Required traceability

Every final expense should be traceable through:

- Fiscal year
- Project
- Donor or fund
- Account
- Activity
- Location
- MFR
- Additional MFR when applicable
- PR when applicable
- Disbursement or IOU
- Bill or voucher
- Payment method
- Bank, cash, or MFS ledger
- Monthly period
- Approval history
- Supporting document

## Implementation warning

Do not implement account balances with ad hoc arithmetic in controllers.

Financial effects must be generated through tested domain services and balanced journal entries.
