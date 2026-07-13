# HSF ERP

## Complete and Integrated Management System — Master System Design

**Organization:** Human Safety Foundation (HSF)  
**System working name:** HSF ERP  
**System type:** Customized NGO Enterprise Resource Planning and Management Information System  
**Prepared:** 13 July 2026  
**Status:** Master design baseline for product planning, architecture, implementation, and Codex execution  
**Primary package manager:** pnpm

---

# 1. Executive Summary

HSF ERP will be a secure, bilingual, modular, role-based management platform designed specifically for Human Safety Foundation.

It will connect:

- Annual planning
- Budgeting
- Monthly Fund Requisitions
- Additional MFRs
- Purchase Requisitions
- Procurement
- Fund disbursement
- Cash, bank, and MFS
- IOUs and advances
- Bills and vouchers
- Payroll
- Recruitment
- Training
- Education-centre management
- HSF Graduate support
- Health-camp management
- Patient records
- Medicine and equipment management
- Climate Action
- Women Empowerment
- Child Sponsorship
- Donors, CSR, and grants
- Project management
- Monitoring and evaluation
- Document management
- Management dashboards
- Donor and annual reporting

The first implementation will serve HSF as a single organization with multiple:

- Projects
- Locations
- Donors and funds
- Bank accounts
- Cash and MFS accounts
- Approval levels
- Field offices
- Beneficiary groups

The system should not begin as a generic commercial SaaS. It should first become a reliable, audit-ready internal HSF operating platform. The architecture will remain configurable enough for future NGO productization.

---

# 2. Product Vision

> HSF ERP will become the single operational source of truth for HSF, connecting approved plans and funds with actual activities, beneficiaries, expenditures, documents, results, and management decisions.

The system must answer, at any time:

- What was planned?
- What budget was approved?
- What funding is available?
- Which donor or fund supports the activity?
- Which MFR authorized the expenditure?
- Which PR initiated the purchase?
- Who received the money?
- Which bill or voucher supports it?
- Which project, location, and activity benefited?
- What result was achieved?
- What remains unspent?
- What is awaiting approval or adjustment?
- What should management act on?

---

# 3. Product Goals

## 3.1 Operational goals

- Replace disconnected Excel files with connected workflows.
- Reduce duplicate data entry.
- Make responsibilities and approvals clear.
- Improve field-to-head-office communication.
- Speed up monthly reporting and closing.
- Preserve an auditable history of every action.

## 3.2 Financial goals

- Connect annual budget to monthly MFR and actual expenditure.
- Prevent unauthorized or over-budget spending.
- Separate donor funds, projects, accounts, locations, and activities.
- Track cash, bank, MFS, and internal transfers correctly.
- Control advances and IOUs.
- Improve bank reconciliation.
- Produce reliable project, donor, monthly, and annual financial reports.

## 3.3 Programme goals

- Maintain accurate student, graduate, patient, event, and participant records.
- Measure project targets and achievements.
- Improve follow-up, intervention, and service continuity.
- Provide management dashboards and donor-ready reports.

## 3.4 Governance goals

- Enforce role-based access.
- Protect sensitive patient, child, employee, donor, and bank data.
- Maintain complete audit logs.
- Improve board, management, donor, and auditor confidence.

---

# 4. Product Non-Goals for Initial Releases

The initial ERP will not:

- Become a public multi-tenant NGO SaaS.
- Replace licensed medical professionals or make clinical decisions.
- Automatically approve financial requests.
- Replace human verification of bills, vouchers, or beneficiary data.
- Depend on direct bank API integrations from the first release.
- Attempt to digitize every historical record before go-live.
- Introduce microservices before operational scale requires them.
- Support every possible NGO workflow in the first version.

---

# 5. Design Principles

## 5.1 Single source of truth

Each important entity will have one master record.

Examples:

- One employee record
- One student record
- One patient record
- One donor record
- One project record
- One account record
- One MFR record
- One voucher record

## 5.2 Enter once, use many times

Data entered at source should automatically support downstream reports.

## 5.3 Plan before spending

The system will preserve the control sequence:

```text
Annual Plan
    ↓
Approved Budget
    ↓
Monthly Fund Requisition
    ↓
Approval
    ↓
Purchase Requisition or Disbursement
    ↓
Activity or Purchase
    ↓
Bill, Voucher, and Evidence
    ↓
Financial and Project Reporting
    ↓
Reconciliation and Monthly Closing
```

## 5.4 Modular monolith first

The system should begin as a modular monolith:

- One main application
- Clear module boundaries
- Shared authentication
- Shared database
- Shared audit log
- Separate domain services inside the codebase

This is simpler and safer than starting with microservices.

## 5.5 Mobile-first field operation

Field forms must work well on low-cost Android phones and weak internet connections.

## 5.6 Configuration over hard-coding

Projects, locations, approval levels, account heads, activity types, and report periods should be configurable.

## 5.7 Privacy by design

Users should see only the data required for their responsibility.

---

# 6. Organizational Scope

## 6.1 Organization

- Human Safety Foundation

## 6.2 Current projects

| Code  | Project                       |
| ----- | ----------------------------- |
| COM   | Central Office Management     |
| E4BL  | Education for Better Life     |
| A2PHC | Access to Primary Health Care |
| CAI   | Climate Action Initiative     |
| WEI   | Women Empowerment Initiative  |

## 6.3 Cross-cutting initiatives

| Code  | Initiative                             |
| ----- | -------------------------------------- |
| CSI   | Child Sponsorship Initiative           |
| ER    | Emergency Response                     |
| NUT   | Nutrition Activities                   |
| MHPSS | Mental Health and Psychosocial Support |
| ZMI   | Zakat Management Initiative            |

Cross-cutting initiatives may be configured as:

- Sub-projects
- Programmes
- Activities
- Restricted funds
- Reporting dimensions

The final classification will be approved during master-data design.

## 6.4 Current education locations

- Hazaribagh
- Uttara

## 6.5 Current health operating structure

- Five supervisors
- Five general physicians
- Current and historical service locations across several districts

The location hierarchy must support:

```text
Country → Division → District → Upazila → Union → Ward → Village / Service Point
```

---

# 7. User Roles

## 7.1 System and governance roles

- System Administrator
- Chairman
- CEO
- Finance Director
- Finance Officer
- Auditor
- Board Viewer

## 7.2 Project roles

- Project Coordinator
- Project Officer
- Monitoring Officer
- Data Entry Officer
- Field Supervisor

## 7.3 Education roles

- Education Coordinator
- Head Teacher
- Teacher
- Helping Hand
- Sponsorship Officer

## 7.4 Health roles

- Health Coordinator
- Medical Supervisor
- General Physician
- Health Data Officer
- Medicine Storekeeper

## 7.5 HR and administration roles

- HR Officer
- Admin Assistant
- Payroll Officer
- Recruitment Committee Member

## 7.6 Donor and external roles

- Donor Viewer
- CSR Partner Viewer
- External Auditor
- Read-only Consultant

---

# 8. Role-Based Access Model

Access should be controlled by four dimensions:

1. **Module**
2. **Action**
3. **Project**
4. **Location**

Example:

A medical supervisor may:

- Create patient visits for assigned locations.
- View assigned camp records.
- Submit bills and camp reports.
- Not view payroll.
- Not view donor bank balances.
- Not edit approved vouchers.

A project coordinator may:

- Prepare MFRs for assigned projects.
- Review field reports.
- View project budgets.
- Submit project financial reports.
- Not approve their own final MFR.

A Finance Director may:

- View all financial projects.
- Review budgets.
- approve finance-checking stages.
- prepare payroll.
- reconcile banks.
- close financial periods.

The Chairman may:

- View organization-wide dashboards.
- approve according to the approval matrix.
- access board-level reports.

---

# 9. Main Module Catalogue

## 9.1 Core Platform

- Authentication
- User management
- Role management
- Project access
- Location access
- Fiscal year
- Organization settings
- Notification preferences
- Audit log
- Global search
- Document numbering
- Approval engine
- Master data

## 9.2 Annual Planning and Budget

- Annual planning meeting
- Annual project plan
- Activity plan
- Event calendar
- Training plan
- Recruitment plan
- Procurement plan
- Annual budget
- Monthly allocation
- Budget revision
- Funding gap
- Plan-versus-progress

## 9.3 Finance and Accounting

- Normalized Chart of Accounts
- Fund accounting
- Project accounting
- Cost centres
- Donor restrictions
- Journal entries
- Receipts
- Payments
- Contra transfers
- Cash books
- Bank books
- MFS books
- General ledger
- Trial balance
- Income and expenditure
- Fund balance
- Project statement
- Donor statement
- Monthly and annual reports

## 9.4 MFR and Additional MFR

- Draft MFR
- Annex lines
- Budget lookup
- Available balance
- Approval workflow
- Recommendation
- Final approval
- Amendment
- Additional MFR
- Disbursement tracking
- Adjustment status
- Export and print

## 9.5 Purchase Requisition and Procurement

- Purchase Requisition
- Quotation
- Comparative statement
- Vendor selection
- Purchase Order
- Goods receipt
- Service completion
- Bill registration
- Vendor payment
- Procurement reporting

## 9.6 Cash, Bank, MFS, and IOU

- Cash accounts
- Bank accounts
- MFS accounts
- Internal transfer
- Cash withdrawal
- Deposit
- Bank charges
- Cheque register
- Bank reconciliation
- IOU issue
- IOU adjustment
- IOU ageing
- Advance settlement

## 9.7 HR, Recruitment, and Payroll

- Employee master
- Manpower requisition
- Vacancy
- Candidate
- Interview
- Appointment
- Joining
- Deployment
- Attendance
- Leave
- Payroll
- Salary request
- Bank transfer instruction
- Training
- Performance
- Separation

## 9.8 E4BL School Management

- Centre management
- Academic year
- Class and subject
- Student admission
- Guardian
- Attendance
- Assessment
- Exam
- Result
- Promotion
- Dropout intervention
- Material distribution
- Fee and waiver
- Teacher activity
- Parent meeting
- Home visit
- Events
- Training
- HSF Graduate
- High-school support
- Child Sponsorship
- Education dashboards

## 9.9 A2PHC Health Management

- Camp planning
- Doctor assignment
- Supervisor assignment
- Patient registration
- Patient visit
- Consultation
- Vitals
- Diagnosis
- Prescription
- Medicine issue
- Test
- Referral
- Follow-up
- Nutrition session
- MHPSS
- Disease dashboard
- District report
- Doctor report
- Data-quality monitoring

## 9.10 Climate Action

- Climate-risk location
- Community
- Youth group
- Awareness session
- Training
- Adaptation activity
- Seed distribution
- Farmer support
- Tree or restoration activity
- Emergency response
- Outcome tracking

## 9.11 Women Empowerment

- Menstrual health
- Sanitary product distribution
- Adolescent session
- Maternal health session
- Rights awareness
- Protection referral
- Skills training
- Livelihood support
- Entrepreneurship
- Financial literacy
- Outcome tracking

## 9.12 Donor, CSR, Grant, and Sponsorship

- Donor profile
- CSR partner
- Grant
- Proposal
- Agreement
- Restricted fund
- Donation
- Receipt
- Reporting schedule
- Utilization
- Sponsorship
- Donor communication
- Renewal
- Donor dashboard

## 9.13 Inventory, Medicine, Equipment, and Assets

- Item master
- Medicine
- School materials
- Office supplies
- Equipment
- Furniture
- Fixed asset
- Stock receipt
- Stock issue
- Stock transfer
- Batch
- Expiry
- Reorder
- Repair
- Disposal
- Distribution

## 9.14 Project Management and MEAL

- Goal
- Outcome
- Output
- Activity
- Indicator
- Baseline
- Target
- Achievement
- Evidence
- Responsible user
- Risk
- Corrective action
- Monthly report
- Annual report
- Donor report

## 9.15 Document Management

- Document upload
- Document category
- Linked record
- Version
- Expiry
- Approval
- Access control
- Search
- Retention
- Audit history

## 9.16 Dashboards and Analytics

- Executive dashboard
- Finance dashboard
- Education dashboard
- Health dashboard
- Project dashboard
- Donor dashboard
- HR dashboard
- Data-quality dashboard
- Approval dashboard

---

# 10. System Architecture

## 10.1 Recommended architecture style

**Modular monolith with background workers**

Advantages:

- Easier to develop
- Easier to deploy
- Easier to secure
- Easier to audit
- Lower cost
- Clear path to later separation

## 10.2 Suggested technology stack

### Monorepo

- pnpm workspaces
- Turborepo

### Frontend

- Next.js
- TypeScript
- React
- Tailwind CSS
- Accessible component library
- Server-rendered dashboards where appropriate
- Progressive Web App capability for field users

### Backend

- NestJS
- TypeScript
- REST API initially
- OpenAPI documentation
- Background jobs for reports, notifications, imports, and reconciliation

### Database

- PostgreSQL

### ORM

- Prisma or Drizzle ORM

The final selection should be made once before implementation and then kept consistent.

### Cache and queues

- Redis
- BullMQ

### File storage

- S3-compatible object storage
- Private buckets
- Signed URLs
- Virus scanning where feasible

### Authentication

- Secure session-based authentication
- Email/password
- Two-factor authentication for finance and senior roles
- Optional SSO later

### Reporting

- Server-generated PDF
- Excel export
- CSV export
- Dashboard charts
- Scheduled report generation

### Infrastructure

- Docker
- Managed PostgreSQL
- Managed object storage
- Automated backups
- Staging and production environments
- CI/CD through GitHub Actions

### Observability

- Structured logs
- Error tracking
- Metrics
- Audit events
- Backup monitoring

---

# 11. Monorepo Structure

```text
hsf-erp/
├── apps/
│   ├── web/
│   ├── api/
│   └── worker/
├── packages/
│   ├── ui/
│   ├── database/
│   ├── auth/
│   ├── config/
│   ├── validation/
│   ├── types/
│   ├── reporting/
│   └── eslint-config/
├── docs/
│   ├── product/
│   ├── architecture/
│   ├── workflows/
│   ├── modules/
│   ├── decisions/
│   ├── testing/
│   └── releases/
├── infrastructure/
│   ├── docker/
│   └── scripts/
├── AGENTS.md
├── README.md
├── pnpm-workspace.yaml
└── turbo.json
```

---

# 12. Core Data Model

## 12.1 Organization and access

- Organization
- User
- Role
- Permission
- UserRole
- ProjectAccess
- LocationAccess
- ApprovalAuthority
- AuditEvent
- Session

## 12.2 Structure and master data

- FiscalYear
- Project
- Program
- SubProject
- CostCenter
- Location
- ActivityType
- Indicator
- UnitOfMeasure
- DocumentSequence
- Currency

## 12.3 Finance

- Account
- AccountGroup
- Fund
- Donor
- Budget
- BudgetLine
- BudgetRevision
- MFR
- MFRLine
- MFRApproval
- AdditionalMFRLink
- PurchaseRequisition
- PRLine
- Quotation
- PurchaseOrder
- GoodsReceipt
- Vendor
- Expense
- Voucher
- VoucherLine
- Receipt
- Payment
- JournalEntry
- JournalLine
- BankAccount
- CashAccount
- MFSAccount
- BankStatement
- BankStatementLine
- BankReconciliation
- InternalTransfer
- IOU
- IOUAdjustment
- FinancialPeriod
- PeriodClose

## 12.4 HR and payroll

- Employee
- Position
- Department
- EmployeeAssignment
- RecruitmentRequisition
- Vacancy
- Candidate
- Interview
- Appointment
- Attendance
- LeaveRequest
- PayrollPeriod
- SalaryStructure
- PayrollRun
- PayrollLine
- BankInstruction
- Training
- TrainingParticipant
- PerformancePlan
- PerformanceReview

## 12.5 Education

- EducationCenter
- AcademicYear
- ClassLevel
- Subject
- TeacherAssignment
- Student
- Guardian
- StudentEnrollment
- StudentAttendance
- Assessment
- Exam
- ExamResult
- Promotion
- MaterialItem
- MaterialDistribution
- FeeStructure
- StudentFee
- FeePayment
- FeeWaiver
- HomeVisit
- ParentMeeting
- SchoolEvent
- HSFGraduate
- GraduateSupport
- Sponsorship
- SponsorStudentLink

## 12.6 Health

- HealthCamp
- CampTeam
- Patient
- PatientContact
- PatientVisit
- Vital
- Diagnosis
- Prescription
- PrescriptionItem
- MedicineItem
- MedicineIssue
- TestResult
- Referral
- FollowUp
- NutritionSession
- MHPSSSession
- HealthEvent
- ClinicalAudit

## 12.7 Climate and women empowerment

- Community
- Participant
- Household
- ClimateActivity
- FarmerSupport
- Distribution
- WomenEmpowermentActivity
- ProtectionReferral
- LivelihoodSupport
- OutcomeRecord

## 12.8 Monitoring and reporting

- ProjectPlan
- PlanActivity
- ActivityTarget
- Achievement
- Evidence
- MonthlyProjectReport
- AnnualProjectReport
- DonorReport
- Risk
- Issue
- CorrectiveAction

## 12.9 Documents

- Document
- DocumentVersion
- DocumentLink
- DocumentAccess
- DocumentRetentionRule

---

# 13. Financial Dimension Model

Every financial transaction should support these dimensions:

| Dimension         | Purpose                                           |
| ----------------- | ------------------------------------------------- |
| Natural Account   | What type of income, expense, asset, or liability |
| Project           | Which HSF project                                 |
| Cost Centre       | Which operational unit                            |
| Fund / Donor      | Which source of money                             |
| Activity          | Which approved activity                           |
| Location          | Where the cost occurred                           |
| Beneficiary Group | Optional reporting dimension                      |
| Fiscal Period     | Which accounting period                           |

Example:

```text
Natural Account: Medicine Support
Project: A2PHC
Fund: Corporate CSR Health Fund
Activity: Mobile Health Camp
Location: Manikganj
Fiscal Period: July 2026
```

---

# 14. Normalized Chart of Accounts Design

## 14.1 Main classes

| Code range | Class                            |
| ---------- | -------------------------------- |
| 1000–1999  | Assets                           |
| 2000–2999  | Liabilities                      |
| 3000–3999  | Fund Balances / Reserves         |
| 4000–4999  | Income and Donations             |
| 5000–5999  | Programme Expenses               |
| 6000–6999  | Administrative Expenses          |
| 7000–7999  | Other Income and Expense         |
| 8000–8999  | Control and Statistical Accounts |

## 14.2 Example accounts

### Assets

- 1101 Office Cash
- 1102 E4BL Hazaribagh Cash
- 1103 E4BL Uttara Cash
- 1201 City Bank
- 1202 Dutch-Bangla Bank
- 1203 Janata Bank
- 1301 MFS Wallet
- 1401 Staff Advance
- 1402 Field Advance
- 1501 Medicine Inventory
- 1502 School Materials Inventory
- 1601 Office Equipment
- 1602 Furniture and Fixtures
- 1603 Vehicles

### Liabilities

- 2101 Salary Payable
- 2102 Vendor Payable
- 2103 Withholding Tax Payable
- 2104 VAT Payable
- 2201 Unspent Restricted Grant

### Fund balances

- 3101 Unrestricted General Fund
- 3102 Child Sponsorship Restricted Fund
- 3103 Zakat Restricted Fund
- 3104 Emergency Response Fund

### Income

- 4101 National Donation
- 4102 International Donation
- 4103 CSR Contribution
- 4104 Child Sponsorship Donation
- 4105 Zakat Receipt
- 4201 Admission Fee
- 4202 Student Monthly Fee
- 4301 Bank Interest

### Programme expenses

- 5101 Salaries and Allowances — Programme
- 5102 Hardship Allowance
- 5201 School Materials
- 5202 Student Materials
- 5203 School Rent
- 5204 School Utilities
- 5301 Medicine Support
- 5302 Medical Equipment
- 5303 Nutrition Session
- 5304 Courtyard Session
- 5401 Climate Activity
- 5402 Livelihood Initiative
- 5501 Women Empowerment Activity
- 5601 Training and Workshop
- 5602 Event Management
- 5701 Supervision and Monitoring
- 5702 Travel and Per Diem
- 5703 Local Conveyance
- 5704 Transport and Logistics

### Administrative expenses

- 6101 Salaries and Allowances — COM
- 6201 Office Rent
- 6202 Office Utilities
- 6203 Office Stationery and Supplies
- 6204 Printing and Photocopy
- 6205 Communication
- 6206 IT Services
- 6207 Professional Fees
- 6208 Bank and MFS Charges
- 6209 Repair and Maintenance
- 6210 Research and Documentation

Internal transfers must use contra entries and should not be income or expense accounts.

---

# 15. Numbering Conventions

## 15.1 MFR

```text
MFR-{PROJECT}-{YEAR}-{MONTH}-{SEQUENCE}
Example: MFR-E4BL-2026-07-001
```

## 15.2 Additional MFR

```text
AMFR-{PROJECT}-{YEAR}-{MONTH}-{SEQUENCE}
Example: AMFR-A2PHC-2026-07-001
```

## 15.3 Purchase Requisition

```text
PR-{PROJECT}-{YEAR}-{SEQUENCE}
Example: PR-COM-2026-0042
```

## 15.4 Purchase Order

```text
PO-{YEAR}-{SEQUENCE}
```

## 15.5 Voucher

```text
PV-{YEAR}-{MONTH}-{SEQUENCE}
RV-{YEAR}-{MONTH}-{SEQUENCE}
JV-{YEAR}-{MONTH}-{SEQUENCE}
CV-{YEAR}-{MONTH}-{SEQUENCE}
```

## 15.6 IOU

```text
IOU-{PROJECT}-{YEAR}-{SEQUENCE}
```

## 15.7 Student

```text
STU-{CENTER}-{ADMISSION_YEAR}-{SEQUENCE}
```

## 15.8 HSF Graduate

```text
GRD-{GRADE5_YEAR}-{SEQUENCE}
```

## 15.9 Patient

```text
PAT-{YEAR}-{SEQUENCE}
```

## 15.10 Patient visit

```text
VIS-{YEAR}-{MONTH}-{SEQUENCE}
```

---

# 16. Workflow Status Models

## 16.1 MFR status

```text
Draft
→ Submitted
→ Finance Review
→ Returned for Correction
→ Recommended
→ Approved
→ Partially Disbursed
→ Fully Disbursed
→ Partially Adjusted
→ Fully Adjusted
→ Closed
→ Cancelled
```

## 16.2 PR status

```text
Draft
→ Submitted
→ Budget Checked
→ Approved
→ Procurement in Progress
→ Ordered
→ Received
→ Invoiced
→ Paid
→ Closed
→ Cancelled
```

## 16.3 IOU status

```text
Draft
→ Approved
→ Issued
→ Partially Adjusted
→ Fully Adjusted
→ Overdue
→ Closed
→ Written Off
```

## 16.4 Financial period status

```text
Open
→ Field Submission Due
→ Finance Review
→ Reconciliation
→ Management Review
→ Closed
→ Reopened by Authorized User
```

## 16.5 Student status

```text
Applicant
→ Enrolled
→ Active
→ Temporarily Absent
→ At Risk
→ Promoted
→ HSF Graduate
→ Supported in High School
→ Completed Grade Ten
→ Dropped Out
→ Withdrawn
```

## 16.6 Patient visit status

```text
Registered
→ Waiting
→ In Consultation
→ Prescribed
→ Medicine Issued
→ Referred
→ Follow-up Required
→ Completed
→ Cancelled
```

---

# 17. Approval Engine

The approval engine must support:

- Sequential approval
- Parallel review
- Return for correction
- Delegation
- Amount-based authority
- Project-based authority
- Donor-specific approval
- Emergency approval
- Acting approver
- Approval expiry
- Mandatory comments
- Attachment requirement

## 17.1 Example MFR approval

| Step | Role                | Action                    |
| ---- | ------------------- | ------------------------- |
| 1    | Project Coordinator | Submit                    |
| 2    | Finance Officer     | Budget and account check  |
| 3    | Finance Director    | Financial recommendation  |
| 4    | CEO                 | Management recommendation |
| 5    | Chairman            | Final approval            |
| 6    | Finance             | Disbursement              |

## 17.2 Self-approval prevention

A requester must not be the final approver of their own request.

---

# 18. Annual Planning Workflow

```text
Planning Meeting Created
    ↓
Projects Submit Next-Year Plans
    ↓
Activities and Events Consolidated
    ↓
Staffing and Training Needs Added
    ↓
Project Budgets Prepared
    ↓
Funding Sources Mapped
    ↓
Management Review
    ↓
Board Approval
    ↓
Annual Plan Locked
    ↓
Monthly Allocation Generated
```

The system should allow controlled revisions with:

- Reason
- Requester
- Approval
- Effective date
- Previous value
- Revised value

---

# 19. MFR Workflow

```text
Project Coordinator Selects Month and Project
    ↓
System Loads Annual Budget and Available Balance
    ↓
Coordinator Adds Annex Lines
    ↓
System Groups Lines by Account
    ↓
Coordinator Submits
    ↓
Finance Checks Budget, Account, Donor, and Balance
    ↓
Finance Director Recommends
    ↓
CEO Recommends
    ↓
Chairman Approves
    ↓
Finance Records Disbursement
    ↓
MFR Becomes Available for PR, IOU, and Expense Linkage
```

Required fields:

- Project
- Month
- Fiscal year
- Working area
- Funding source
- Request date
- Account head
- Activity
- Quantity
- Unit
- Unit cost
- Amount
- Remarks
- Budget available
- Previous expenditure
- Current request
- Remaining budget
- Attachment

---

# 20. Additional MFR Workflow

```text
Field Need Raised
    ↓
Project Coordinator Creates Additional MFR
    ↓
Original MFR Linked
    ↓
Reason and Urgency Recorded
    ↓
Supporting Message or Evidence Attached
    ↓
Finance Checks Budget
    ↓
Special Recommendation
    ↓
Approval
    ↓
Disbursement
    ↓
Adjustment and Closure
```

The system should retain the original phone, email, or WhatsApp evidence as an attachment when used.

---

# 21. Purchase and Procurement Workflow

```text
Approved MFR
    ↓
PR Created
    ↓
Account and Budget Validated
    ↓
Approval
    ↓
Quotation Collection if Required
    ↓
Comparative Statement
    ↓
Vendor Selection
    ↓
Purchase Order
    ↓
Goods or Service Received
    ↓
Bill Registered
    ↓
Payment Voucher
    ↓
Inventory or Asset Update
    ↓
Closure
```

Procurement thresholds should be configurable.

---

# 22. Field Disbursement Workflow

```text
Approved MFR or IOU
    ↓
Finance Selects Bank, Cash, or MFS Source
    ↓
Recipient and Purpose Selected
    ↓
Disbursement Recorded
    ↓
Recipient Acknowledges
    ↓
Field Uses Funds
    ↓
Evidence Submitted
    ↓
Project Coordinator Reviews
    ↓
Finance Adjusts
```

---

# 23. Bills and Voucher Workflow

```text
Bill or Expense Created
    ↓
MFR and PR Linked
    ↓
Vendor or Recipient Added
    ↓
Account, Project, Fund, Activity, and Location Selected
    ↓
Bill Image or PDF Uploaded
    ↓
Project Review
    ↓
Finance Verification
    ↓
Voucher Generated
    ↓
Payment Recorded
    ↓
Journal Posted
    ↓
Record Locked
```

---

# 24. IOU Workflow

```text
IOU Requested
    ↓
Purpose and Due Date Defined
    ↓
Approval
    ↓
Fund Issued
    ↓
Expense Evidence Uploaded
    ↓
Adjustment Submitted
    ↓
Unused Balance Returned or Additional Amount Approved
    ↓
Finance Verifies
    ↓
IOU Closed
```

Rules:

- Overdue IOUs appear on dashboards.
- New advances may be blocked for users with overdue IOUs.
- Exceptions require authorized approval.
- Partial adjustment must be supported.

---

# 25. Payroll Workflow

```text
Employee and Salary Structure Active
    ↓
Payroll Period Opened
    ↓
Attendance and Leave Imported
    ↓
Allowances and Deductions Applied
    ↓
Project Allocation Verified
    ↓
Salary Sheet Generated
    ↓
Finance Review
    ↓
CEO / Authorized Approval
    ↓
Salary Request Application Generated
    ↓
Bank Instruction Generated
    ↓
Payment Confirmation Imported
    ↓
Payslips and Payroll Journal Generated
    ↓
Payroll Period Closed
```

The system must separately record:

- Earning month
- Payroll run date
- Bank instruction date
- Payment date
- Accounting period

---

# 26. Monthly Closing Workflow

```text
Field Submission Deadline
    ↓
All Bills and Vouchers Submitted
    ↓
All IOUs Reviewed
    ↓
MFR vs Actual Reviewed
    ↓
Bank and Cash Reconciled
    ↓
Payroll Completed
    ↓
Project Reports Submitted
    ↓
Finance Reports Generated
    ↓
CEO / Finance Director Review
    ↓
Period Closed
```

After closing:

- Normal users cannot edit transactions.
- Authorized users can request a controlled reopening.
- Reopening requires reason and approval.
- Every change is audited.

---

# 27. E4BL School Management Design

## 27.1 Current operating baseline

- Two education centres
- 300 students
- Pre-primary through Grade Five
- 10 teachers
- Two helping hands
- Hazaribagh: free education and free materials
- Uttara: very small fee and free materials
- Grade Five completers become HSF Graduates
- HSF supports high-school admission and necessary fees through Grade Ten

## 27.2 Admission

- Student application
- Guardian information
- Socioeconomic profile
- Vulnerability assessment
- Approval
- Student ID
- Centre and class assignment
- Material allocation
- Consent and safeguarding records

## 27.3 Attendance

- Daily student attendance
- Teacher attendance
- Reason for absence
- Repeated-absence alert
- Home-visit request
- Attendance dashboard

## 27.4 Academic management

- Academic year
- Class
- Subject
- Teacher
- Lesson plan
- Assessment
- Examination
- Grade
- Result card
- Promotion
- Repeat
- Dropout
- Transfer

## 27.5 Materials

- Item
- Quantity
- Centre
- Student
- Date
- Donor or fund
- Acknowledgement
- Stock balance

## 27.6 Fee management

### Hazaribagh

- Fee status: free
- Full waiver by policy

### Uttara

- Fee structure
- Monthly fee
- Small fee
- Waiver
- Receipt
- Due
- Collection
- Bank deposit
- Arrears

## 27.7 HSF Graduate

- Grade Five completion
- Graduate ID
- High-school admission
- High-school details
- Grade Six to Ten
- Tuition support
- Exam support
- Material support
- Result
- Attendance
- Dropout risk
- Sponsor
- Support completion

## 27.8 Education events

- Event type
- Date
- Centre
- Participants
- Budget
- MFR
- Attendance
- Photos
- Outcome
- Report

## 27.9 Education dashboards

- Active students
- Students by centre, class, and gender
- Attendance
- Results
- Dropout risk
- Teacher-student ratio
- Material distribution
- Fee collection
- Graduates
- Sponsorship gap
- High-school continuation rate
- Cost per student

---

# 28. A2PHC Health Management Design

## 28.1 Current operating baseline

- Free patient service
- Five general physicians
- Five supervisors
- Patient data currently collected through Google Forms
- Medical camps in field locations
- Patient records include demographics, condition, diabetes test, contact, and blood pressure

## 28.2 Camp planning

- Camp date
- Location
- Supervisor
- Doctor
- Target
- Budget
- MFR
- Equipment
- Medicine allocation
- Transport
- Local coordination

## 28.3 Patient registration

- Patient ID
- Name
- Age or date of birth
- Gender
- Address hierarchy
- Contact
- Guardian or relationship
- Consent
- Vulnerability category

## 28.4 Consultation

- Complaint
- Vitals
- Diabetes test
- Blood pressure
- Clinical notes
- Diagnosis
- Prescription
- Advice
- Referral
- Follow-up

## 28.5 Data validation

- Age range validation
- Contact normalization
- Required field rules
- Duplicate detection
- Location validation
- Doctor identity
- Visit date validation
- Follow-up linkage

## 28.6 Medicine management

- Medicine item
- Batch
- Expiry
- Stock location
- Issue to camp
- Prescription issue
- Return
- Wastage
- Expiry alert

## 28.7 Health dashboards

- Unique patients
- Visits
- New and follow-up
- Age and gender
- District
- Disease pattern
- Blood-pressure completion
- Diabetes-test completion
- Referrals
- Medicine use
- Camp productivity
- Doctor productivity
- Data-quality score
- Cost per visit

---

# 29. Climate Action Design

The module should support:

- Risk area
- Community profile
- Climate hazard
- Awareness activity
- Youth participation
- Farmer support
- Seed distribution
- Adaptation practice
- Emergency response
- Training
- Household follow-up
- Outcome evidence
- Budget and expenditure
- Donor reporting

---

# 30. Women Empowerment Design

The module should support:

- Women and adolescent participant profile
- Menstrual-health activity
- Product distribution
- Maternal-health session
- Cancer awareness
- Rights awareness
- Protection referral
- Skills training
- Financial literacy
- Livelihood support
- Entrepreneurship support
- Outcome follow-up
- Strict privacy access

---

# 31. Donor and CSR Design

## 31.1 Donor profile

- Name
- Type
- Country
- Contact
- Communication preference
- KYC or due-diligence document
- Relationship owner

## 31.2 Donation

- Date
- Amount
- Currency
- Payment channel
- Bank
- Restricted or unrestricted
- Project
- Fund
- Receipt number
- Acknowledgement
- Agreement

## 31.3 Grant management

- Proposal
- Agreement
- Budget
- Start and end date
- Reporting schedule
- Deliverables
- Restrictions
- Utilization
- Balance
- Renewal

## 31.4 Donor portal

Later release:

- Approved financial summary
- Project progress
- Documents
- Stories and photographs with consent
- Reporting schedule
- Donation history

---

# 32. Dashboards

## 32.1 Executive dashboard

- Total fund received
- Total expenditure
- Available fund
- Bank and cash balance
- Projects on track
- Pending approvals
- Overdue IOUs
- Unclosed periods
- Beneficiaries served
- High-risk issues

## 32.2 Finance dashboard

- Budget versus actual
- MFR status
- PR status
- Project spending
- Donor balance
- Bank reconciliation
- Missing vouchers
- Payroll
- IOU ageing

## 32.3 Project dashboard

- Annual target
- Monthly target
- Achievement
- Budget used
- Activity completion
- Evidence completeness
- Risk and issue

---

# 33. Notifications

The system should notify users about:

- MFR submitted
- MFR returned
- MFR approved
- PR awaiting approval
- Budget exceeded
- IOU due
- IOU overdue
- Missing voucher
- Bank reconciliation incomplete
- Payroll ready
- Project report due
- Donor report due
- Student absence risk
- Graduate fee due
- Patient follow-up due
- Medicine expiry
- Training scheduled
- Document expiry

---

# 34. Audit and Compliance

Every important action should record:

- User
- Date and time
- IP address where appropriate
- Previous value
- New value
- Record
- Action
- Reason
- Approval
- Attachment

High-risk actions:

- Budget revision
- MFR approval
- Voucher posting
- Bank reconciliation
- Payroll approval
- Period reopening
- Patient-record correction
- Student deletion
- User-role change

Records should normally be archived, not deleted.

---

# 35. Security Requirements

- Secure authentication
- Strong password policy
- Two-factor authentication for sensitive roles
- Role-based access
- Project and location restrictions
- Encrypted data in transit
- Encrypted backups
- Private file storage
- Signed file access
- Session timeout
- Login monitoring
- Export permission
- Sensitive-field masking
- Audit logs
- Backup verification
- Disaster recovery plan

---

# 36. Privacy and Safeguarding

The system must protect:

- Child data
- Patient health data
- Women-protection records
- Employee salaries
- Donor information
- Bank records
- Identity documents

Required controls:

- Consent records
- Photo and story consent
- Child safeguarding access
- Medical confidentiality
- Protection referral restrictions
- Complaint and incident tracking
- Minimum necessary access
- Export controls
- Retention policies

---

# 37. Bilingual and Accessibility Requirements

- English and Bangla interface
- English financial and donor reports
- Bangla-friendly field forms
- Mobile-responsive
- Large touch targets
- Clear validation
- Simple workflows
- Keyboard accessibility
- Screen-reader support
- Printable forms
- Low-bandwidth design

---

# 38. Offline and Low-Bandwidth Strategy

Initial releases should prioritize:

- Responsive mobile web
- Draft saving
- Reliable retry
- Compressed file upload
- Minimal page weight

Later releases can add:

- PWA offline forms
- Local encrypted storage
- Background synchronization
- Conflict resolution
- Offline patient and attendance capture

---

# 39. Data Migration Strategy

## 39.1 Migrate first

- Projects
- Locations
- Accounts
- Banks
- Employees
- Students
- Current graduates
- Doctors
- Supervisors
- Donors
- Active budgets
- Open IOUs
- Opening bank and cash balances

## 39.2 Migrate after cleansing

- Patient records
- Historical payments
- Historical receipts
- Salary records
- Old project reports
- Sponsorship history

## 39.3 Do not migrate blindly

- Broken formulas
- Duplicate rows
- Copied template data
- Unverified totals
- Incorrect dates
- Inconsistent project names

All imports should have:

- Validation report
- Rejected-row report
- Import batch ID
- User
- Timestamp
- Source file

---

# 40. Reporting Outputs

## 40.1 Finance reports

- MFR register
- Additional MFR register
- PR register
- Budget versus actual
- General ledger
- Trial balance
- Income and expenditure
- Fund balance
- Donor utilization
- Project expenditure
- Bank book
- Cash book
- IOU ageing
- Bank reconciliation
- Payroll summary
- Monthly financial report
- Annual financial report

## 40.2 E4BL reports

- Student register
- Attendance
- Class result
- Promotion
- Dropout
- Material distribution
- Fee collection
- Centre performance
- Teacher activity
- Event report
- HSF Graduate report
- Sponsorship report

## 40.3 A2PHC reports

- Camp register
- Patient register
- Disease report
- District report
- Doctor report
- Supervisor report
- Medicine report
- Referral report
- Follow-up report
- Nutrition report
- MHPSS report
- Data-quality report

## 40.4 Management reports

- Monthly project report
- Annual project report
- Plan versus progress
- Executive dashboard
- Risk report
- Donor report
- Board report

---

# 41. MVP Definition

The first production-worthy MVP should include:

## Core

- Authentication
- Users
- Roles
- Projects
- Locations
- Fiscal year
- Audit log
- Documents

## Finance

- Chart of Accounts
- Funds and donors
- Annual budget
- MFR
- Additional MFR
- PR
- Disbursement
- IOU
- Expense
- Bill and voucher
- Cash and bank
- Bank reconciliation
- Monthly closing
- Basic reports

## HR

- Employee master
- Basic recruitment records
- Salary structure
- Payroll
- Bank instruction

## Management

- Approval inbox
- Executive dashboard
- Finance dashboard
- Project dashboard

E4BL and A2PHC should follow immediately after finance stabilization.

---

# 42. Release Roadmap

## v0.1.0 — Repository and Platform Foundation

- Monorepo
- Authentication
- RBAC
- Organization
- Projects
- Locations
- Fiscal year
- Audit log
- Basic design system

## v0.2.0 — Master Data and Chart of Accounts

- Accounts
- Funds
- Donors
- Cost centres
- Activities
- Bank, cash, and MFS accounts
- Numbering sequences

## v0.3.0 — Annual Budget and MFR

- Annual budget
- Budget lines
- MFR
- Annex
- Approval workflow
- PDF export

## v0.4.0 — PR, Procurement, and Disbursement

- PR
- Vendor
- Quotation
- PO
- Disbursement
- Receipt

## v0.5.0 — Expense, Voucher, and IOU

- Expense
- Attachments
- Vouchers
- IOU
- Adjustment
- Ageing

## v0.6.0 — Cash, Bank, and Reconciliation

- Cash book
- Bank book
- Internal transfer
- Statement import
- Reconciliation
- Monthly closing

## v0.7.0 — HR and Payroll

- Employee
- Recruitment baseline
- Salary structure
- Payroll
- Bank instruction

## v0.8.0 — E4BL School Management

- Student
- Attendance
- Result
- Material
- Fee
- Events
- HSF Graduate

## v0.9.0 — A2PHC Health Management

- Camp
- Patient
- Visit
- Doctor
- Supervisor
- Diagnosis
- Medicine
- Referral

## v0.10.0 — Climate, Women Empowerment, and MEAL

- Project activities
- Participants
- Indicators
- Monthly project report
- Dashboards

## v0.11.0 — Donor, Grant, and Sponsorship

- Donor CRM
- Grant
- Donation
- Sponsorship
- Donor reports

## v1.0.0 — HSF ERP Production Release

- Security hardening
- Data migration
- Full QA
- Training
- Documentation
- Backup and recovery
- Production deployment

---

# 43. Testing Strategy

## 43.1 Automated

- Unit tests
- Integration tests
- API tests
- Permission tests
- Workflow tests
- Financial calculation tests
- Import validation tests
- End-to-end tests

## 43.2 Manual

- Role-by-role testing
- Approval testing
- MFR print testing
- Mobile testing
- Low-bandwidth testing
- Bank reconciliation testing
- Payroll testing
- Student lifecycle testing
- Patient lifecycle testing
- Security testing
- Data-export testing

## 43.3 Financial invariants

The system must enforce:

- Debit equals credit for posted journal entries.
- Internal transfer does not create income or expense.
- Closed-period records cannot be edited normally.
- Voucher total equals journal total.
- MFR line total equals approved MFR total.
- IOU adjustment cannot exceed authorized rules without approval.
- Budget availability cannot become negative without special authorization.

---

# 44. Deployment Environments

- Local development
- Shared development
- Staging
- Production

Production requirements:

- Managed database
- Daily automated backups
- Point-in-time recovery where available
- Private object storage
- HTTPS
- Environment secrets
- Monitoring
- Error tracking
- Access logs
- Restore testing

---

# 45. Governance for Software Development

## 45.1 Product owner

HSF should appoint one product owner with authority to:

- Confirm requirements
- Prioritize work
- Approve workflow decisions
- Accept releases
- Coordinate users

## 45.2 Process owners

Recommended:

- Finance Process Owner
- HR Process Owner
- E4BL Process Owner
- A2PHC Process Owner
- Climate Action Process Owner
- Women Empowerment Process Owner
- Donor and Reporting Process Owner
- IT and Security Owner

## 45.3 Change control

Every confirmed requirement change should record:

- Request
- Reason
- Impact
- Priority
- Approval
- Target release

---

# 46. Open Decisions

Before implementation begins, HSF should confirm:

1. Official system name
2. Product owner
3. Fiscal year
4. Final current employee structure
5. Approval matrix
6. Financial approval thresholds
7. Final normalized Chart of Accounts
8. Donor and fund model
9. Location hierarchy
10. Procurement thresholds
11. IOU settlement deadline
12. Payroll cut-off
13. Attendance method
14. Student ID policy
15. Patient consent and ID policy
16. Language priority
17. Offline requirement for the first release
18. Hosting preference
19. Data migration scope
20. Go-live pilot module

---

# 47. Recommended First Build Decision

The recommended first implementation sequence is:

```text
Platform Foundation
    ↓
Master Data
    ↓
Annual Budget
    ↓
MFR and Additional MFR
    ↓
PR and Procurement
    ↓
Disbursement and IOU
    ↓
Bills and Vouchers
    ↓
Cash, Bank, and Reconciliation
    ↓
Monthly Closing
    ↓
HR and Payroll
    ↓
E4BL
    ↓
A2PHC
```

The first pilot should use:

- One fiscal year
- Central Office Management
- E4BL
- One bank account
- One cash account
- A limited set of account heads
- Real approval users
- A controlled month-end close

After the pilot succeeds, A2PHC and the remaining projects can be added.

---

# 48. Final Design Position

HSF ERP should be built as a serious organizational operating system, not as a collection of digital forms.

Its foundational relationship is:

> **Every approved plan creates a controlled budget; every budget creates an authorized request; every request creates traceable disbursement or purchase; every expense has evidence; every activity has results; every month closes with reconciled financial and project reports.**

This master design is the baseline for:

- Product Requirements Document
- Database design
- Permission matrix
- UI and UX design
- Repository architecture
- Codex implementation workflow
- Testing strategy
- Data migration
- Release planning
