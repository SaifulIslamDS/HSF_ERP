# HSF ERP

## Phase 1 Implementation Scope — Platform Foundation and Finance Core

**Purpose:** Define the first implementation phase in a build-ready form  
**Scope:** Core platform, master data, annual budget, MFR, Additional MFR, PR, disbursement, IOU, expenses, vouchers, bank, cash, reconciliation, and monthly closing  
**Package manager:** pnpm  
**Architecture:** TypeScript modular monolith in a monorepo

---

# 1. Phase 1 Objective

Build the financial-control backbone of HSF ERP so that HSF can manage one complete monthly cycle digitally:

```text
Annual Budget
→ Monthly MFR
→ Approval
→ PR
→ Disbursement or IOU
→ Expense and Voucher
→ Cash / Bank Entry
→ Reconciliation
→ Monthly Closing
```

Phase 1 will not yet replace all education and health reports. It will create the shared financial and approval foundation required by those modules.

---

# 2. Phase 1 Modules

## 2.1 Platform Foundation

- Authentication
- User management
- Role-based access
- Project access
- Location access
- Fiscal year
- Audit log
- Approval inbox
- Notification centre
- Document upload
- Global numbering sequence

## 2.2 Master Data

- Projects
- Locations
- Cost centres
- Account groups
- Chart of Accounts
- Donors
- Funds
- Activities
- Units of measure
- Bank accounts
- Cash accounts
- MFS accounts
- Vendors
- Employees as financial recipients

## 2.3 Budget

- Annual budget
- Budget lines
- Monthly allocation
- Budget revision
- Available balance
- Budget lock
- Budget-versus-actual

## 2.4 MFR

- Main MFR
- Annex lines
- Account grouping
- Amount in words
- Budget check
- Approval
- Return for correction
- Additional MFR
- PDF and print
- Disbursement link
- Adjustment status

## 2.5 PR and Procurement Baseline

- Purchase Requisition
- PR lines
- Vendor
- Estimated amount
- Budget validation
- Approval
- Purchase completion
- Bill attachment

Advanced quotation, comparative statement, purchase order, and goods receipt can be completed in the next release if necessary.

## 2.6 Disbursement and IOU

- Bank disbursement
- Cash disbursement
- MFS disbursement
- Field recipient
- Recipient acknowledgement
- IOU
- Due date
- Partial adjustment
- Full adjustment
- Return
- Overdue alerts

## 2.7 Expense and Voucher

- Expense entry
- Bill attachment
- MFR reference
- PR reference
- Account
- Project
- Fund
- Location
- Activity
- Vendor or recipient
- Payment method
- Voucher generation
- Finance verification
- Journal posting

## 2.8 Cash and Bank

- Cash book
- Bank book
- MFS book
- Deposit
- Withdrawal
- Internal transfer
- Bank charge
- Interest
- Statement import
- Reconciliation
- Closing balance

## 2.9 Monthly Closing

- Field submission status
- Missing vouchers
- Open IOUs
- Unreconciled bank lines
- Unposted vouchers
- MFR adjustment status
- Management review
- Period close
- Controlled reopening

---

# 3. Phase 1 Users

- System Administrator
- Chairman
- CEO
- Finance Director
- Finance Officer
- Project Coordinator
- Admin Assistant
- Field Supervisor
- Head Teacher
- Auditor
- Board Viewer

---

# 4. Phase 1 Permission Summary

| Action              | Project Coordinator |          Finance |      CEO | Chairman | Field User |
| ------------------- | ------------------: | ---------------: | -------: | -------: | ---------: |
| Create MFR          |                 Yes |              Yes |       No |       No |         No |
| Submit MFR          |                 Yes |              Yes |       No |       No |         No |
| Budget check        |                  No |              Yes |       No |       No |         No |
| Recommend MFR       |                  No | Finance Director |      Yes |       No |         No |
| Final approve       |                  No |               No | Optional |      Yes |         No |
| Record disbursement |                  No |              Yes |       No |       No |         No |
| Submit expense      |                 Yes |              Yes |       No |       No |        Yes |
| Verify voucher      |                  No |              Yes |       No |       No |         No |
| Reconcile bank      |                  No |              Yes |     View |     View |         No |
| Close month         |                  No | Finance Director |  Approve |     View |         No |

The final matrix must be configured, not hard-coded.

---

# 5. Core Entities for Phase 1

- User
- Role
- Permission
- Project
- Location
- CostCenter
- FiscalYear
- FinancialPeriod
- Account
- AccountGroup
- Donor
- Fund
- Activity
- UnitOfMeasure
- Budget
- BudgetLine
- MFR
- MFRLine
- MFRApproval
- PurchaseRequisition
- PRLine
- Vendor
- Disbursement
- IOU
- IOUAdjustment
- Expense
- Voucher
- VoucherLine
- JournalEntry
- JournalLine
- BankAccount
- CashAccount
- MFSAccount
- BankStatement
- BankStatementLine
- BankReconciliation
- InternalTransfer
- Document
- AuditEvent
- Notification
- PeriodClose

---

# 6. Critical Business Rules

1. No MFR can be approved without an active budget line unless special approval is recorded.
2. No requester can final-approve their own request.
3. MFR line totals must equal the MFR total.
4. Additional MFR must link to an original MFR.
5. Every expense must link to an approved MFR.
6. A PR is required for purchases based on configured rules.
7. An internal transfer must create balanced entries.
8. An IOU is an asset or advance until adjusted.
9. Posted vouchers must produce balanced journal entries.
10. Closed financial periods cannot be edited by normal users.
11. Reopening a period requires authorized approval and an audit reason.
12. Every approval, return, edit, posting, and deletion attempt must be audited.
13. Uploaded financial evidence must be private.
14. Project coordinators can only access assigned projects.
15. Field users can only access assigned locations.
16. Budget availability must be calculated from approved budget, revisions, commitments, and actuals.
17. Draft records do not affect accounting.
18. Posted records affect the ledger.
19. Cancelled records remain visible in audit history.
20. The system must distinguish transaction date, expense month, and payment date.

---

# 7. Required Screens

## 7.1 Authentication

- Login
- Forgot password
- Two-factor verification
- Session management

## 7.2 Dashboard

- My approvals
- My drafts
- Budget alerts
- Pending MFR
- Pending PR
- Overdue IOU
- Missing voucher
- Bank reconciliation status
- Month-close status

## 7.3 Master Data

- Projects
- Locations
- Accounts
- Funds
- Donors
- Activities
- Units
- Banks
- Cash accounts
- Vendors
- Users and roles

## 7.4 Budget

- Annual budget list
- Budget builder
- Budget-line detail
- Monthly allocation
- Revision
- Budget dashboard

## 7.5 MFR

- MFR list
- Create MFR
- MFR annex
- MFR detail
- Approval timeline
- Additional MFR
- Print preview
- MFR versus actual

## 7.6 PR

- PR list
- Create PR
- PR detail
- Approval
- Completion

## 7.7 Disbursement and IOU

- Disbursement list
- Create disbursement
- IOU list
- IOU detail
- Adjustment
- Ageing dashboard

## 7.8 Expense and Voucher

- Expense list
- Create expense
- Voucher list
- Voucher detail
- Verification
- Posting

## 7.9 Cash and Bank

- Bank account detail
- Cash account detail
- Transaction register
- Statement import
- Matching screen
- Reconciliation
- Internal transfer

## 7.10 Monthly Closing

- Period checklist
- Exceptions
- Management review
- Close
- Reopen request

---

# 8. Required Reports

- Annual budget
- Budget versus actual
- MFR register
- Additional MFR register
- MFR versus actual
- PR register
- Disbursement register
- IOU register
- IOU ageing
- Expense register
- Voucher register
- Cash book
- Bank book
- MFS book
- Internal-transfer register
- Bank reconciliation
- Project expenditure
- Donor-fund utilization
- Account-head expenditure
- Monthly financial summary
- Monthly closing checklist
- Audit log report

---

# 9. Phase 1 Acceptance Criteria

## 9.1 Platform

- Users can log in securely.
- Role and project restrictions work.
- Every sensitive action appears in the audit log.
- Private documents cannot be opened without authorization.

## 9.2 Budget

- Finance can create an annual budget by project, fund, account, activity, and location.
- The system calculates available balance.
- Approved budget cannot be edited without a revision.

## 9.3 MFR

- A project coordinator can prepare an MFR with annex lines.
- Account totals are calculated automatically.
- The system shows budget, previous actual, current request, and remaining amount.
- Approvers can approve, reject, or return.
- Approval history is visible.
- A print-ready MFR can be generated.
- Additional MFR links to the original MFR.

## 9.4 PR

- A PR can be created from an approved MFR.
- The requested amount cannot exceed authorized availability without approval.
- The PR approval status is visible.

## 9.5 IOU

- Finance can issue an IOU.
- The recipient can submit partial or full adjustment.
- The system calculates outstanding balance.
- Overdue IOUs appear on the dashboard.

## 9.6 Expense and voucher

- Expense entry requires an approved MFR.
- Bill evidence can be uploaded.
- Finance can verify and create a voucher.
- A posted voucher creates a balanced journal entry.
- Posted vouchers cannot be edited normally.

## 9.7 Bank and cash

- Finance can record bank, cash, and MFS transactions.
- Internal transfers do not affect income or expense.
- A bank statement can be imported.
- Lines can be matched and reconciled.
- Closing balance is calculated.

## 9.8 Closing

- The system prevents closing while critical exceptions remain.
- Authorized users can close the month.
- Closed-month records are locked.
- Reopening requires reason and approval.

---

# 10. Phase 1 Data Migration

## 10.1 Import

- Current Chart of Accounts
- Project list
- Location list
- Bank accounts
- Cash accounts
- User list
- Donor and fund list
- Active annual budget
- Open IOUs
- Opening balances

## 10.2 Historical reference only

- November 2025 MFR samples
- Payment workbooks
- Receipt workbooks
- Salary workbooks
- Bank statements

Historical files can be attached as reference without immediately posting every old transaction.

---

# 11. Phase 1 Repository Documents

The repository should contain:

- README.md
- AGENTS.md
- docs/CURRENT-STATUS.md
- docs/PRODUCT-SPECIFICATION.md
- docs/ARCHITECTURE.md
- docs/DATA-MODEL.md
- docs/PERMISSIONS.md
- docs/FINANCE-WORKFLOWS.md
- docs/TESTING-CHECKLIST.md
- docs/DEVELOPMENT-WORKFLOW.md
- docs/RELEASE-PROCESS.md
- docs/decisions/
- docs/releases/

---

# 12. Phase 1 Build Order

## Task 1 — Repository foundation

- pnpm monorepo
- Next.js web
- NestJS API
- PostgreSQL
- Shared packages
- CI

## Task 2 — Authentication and RBAC

- Login
- Roles
- Permissions
- Project access
- Audit log

## Task 3 — Master data

- Projects
- Locations
- Accounts
- Funds
- Donors
- Banks
- Units
- Activities

## Task 4 — Annual budget

- Budget
- Budget lines
- Approval
- Available balance

## Task 5 — MFR

- Draft
- Annex
- Validation
- Approval
- PDF

## Task 6 — Additional MFR

- Original linkage
- Special reason
- Approval

## Task 7 — PR

- PR
- Approval
- Completion

## Task 8 — Disbursement and IOU

- Bank, cash, MFS
- Recipient
- Acknowledgement
- Adjustment

## Task 9 — Expense and voucher

- Bill upload
- Verification
- Voucher
- Journal

## Task 10 — Cash and bank

- Ledgers
- Transfers
- Statement import
- Reconciliation

## Task 11 — Monthly closing

- Checklist
- Exceptions
- Lock
- Reopen

## Task 12 — Phase 1 QA and pilot

- COM and E4BL pilot
- One real month
- One bank
- One cash account
- Management approval
- Month close

---

# 13. Phase 1 Pilot Scenario

Use a controlled pilot with:

- Fiscal year 2026
- Projects:
  - COM
  - E4BL
- Locations:
  - Head Office
  - Hazaribagh
  - Uttara
- Accounts:
  - Salaries
  - Office Rent
  - School Rent
  - School Utilities
  - Student Materials
  - Office Stationery
  - Local Conveyance
  - Bank Charges
- One bank account
- One office cash account
- Real project coordinator
- Real finance reviewer
- Real CEO recommender
- Real final approver

The pilot is successful when HSF completes one monthly cycle without depending on a separate MFR spreadsheet.

---

# 14. Phase 1 Definition of Done

Phase 1 is complete when:

- Core financial master data is approved.
- One annual budget is active.
- MFR and Additional MFR work end to end.
- PR is linked to MFR.
- Disbursement and IOU are traceable.
- Bills and vouchers are linked and verified.
- Bank and cash ledgers are operational.
- One bank account is reconciled.
- One financial month is closed.
- Audit logs are complete.
- Users are trained.
- Backup and restore are tested.
- Pilot acceptance is signed by HSF management.
