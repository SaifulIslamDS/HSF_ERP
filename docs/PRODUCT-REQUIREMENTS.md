# HSF ERP

## Product Requirements Document (PRD)

**Product:** HSF ERP  
**Organization:** Human Safety Foundation (HSF)  
**Document status:** Draft v1.0 — Implementation Baseline  
**Prepared:** 13 July 2026  
**Primary implementation package manager:** pnpm  
**Initial architecture:** Modular monolith  
**Primary users:** HSF head office, project coordinators, field teams, management, finance, HR, education, health, auditors, and selected donors

---

# 1. Purpose

This PRD converts HSF's current operations and the approved master system design into a detailed product specification.

It defines:

- Product scope
- User roles
- Functional requirements
- Business rules
- Approval workflows
- Reports
- Non-functional requirements
- Release priorities
- Acceptance criteria
- Assumptions and dependencies

The document is intended to guide:

- Product planning
- UI and UX design
- Database design
- API design
- Repository implementation
- Testing
- Data migration
- Pilot rollout
- Management acceptance

---

# 2. Product Summary

HSF ERP will be a customized, secure, bilingual NGO management platform that connects:

```text
Annual Planning
→ Budget
→ Monthly Fund Requisition
→ Additional MFR
→ Purchase Requisition
→ Procurement
→ Disbursement
→ IOU
→ Expense
→ Bill and Voucher
→ Bank and Cash
→ Reconciliation
→ Monthly Closing
→ Project Reporting
→ Donor and Annual Reporting
```

The same platform will later manage:

- HR and payroll
- E4BL School Management
- HSF Graduate support
- Child Sponsorship
- A2PHC camps and patient records
- Medicine and inventory
- Climate Action
- Women Empowerment
- Donors, CSR, and grants
- MEAL and impact reporting

---

# 3. Current Operational Baseline

## 3.1 Organization

HSF is a Bangladesh-based non-governmental, non-political, and non-profit organization supported mainly by:

- National donors
- International donors
- Individual donors
- Corporate Social Responsibility partners
- Sponsorship contributors

## 3.2 Active projects

- Education for Better Life (E4BL)
- Access to Primary Health Care (A2PHC)
- Climate Action Initiative
- Women Empowerment Initiative
- Central Office Management as a separate operational and financial cost centre

## 3.3 Current education baseline

- Two education centres
- Hazaribagh and Uttara
- 300 students
- Pre-primary through Grade Five
- 10 teachers
- Two helping hands
- Hazaribagh provides free education and free materials
- Uttara charges a very small fee and provides free materials
- Grade Five completers are called HSF Graduates
- HSF supports high-school admission and necessary education costs through Grade Ten

## 3.4 Current health baseline

- Five general physicians
- Five supervisors
- Free medical-camp service
- Patient data currently collected through Google Forms
- Camp-level and patient-level reporting currently managed through spreadsheets and exports

## 3.5 Current financial baseline

- Three bank accounts in different banks
- Cash and MFS usage
- Monthly MFRs
- Separate COM MFR
- Additional MFRs for unplanned expenditure
- Purchase Requisition after MFR approval
- Field disbursement through cash or bank
- Bills and vouchers
- Monthly project financial reports
- Salary sheets and bank instructions
- Annual planning meeting in October or November
- Monthly budgets and MFRs expected to reflect the annual plan

---

# 4. Product Objectives

## 4.1 Primary objectives

1. Create one source of truth for HSF operations.
2. Replace disconnected spreadsheets with connected workflows.
3. Link every expense to approved planning and authorization.
4. Improve budget control and donor accountability.
5. Reduce manual reporting time.
6. Protect patient, child, donor, employee, and bank data.
7. Improve monthly closing and audit readiness.
8. Make project performance measurable.
9. Support growth in projects, locations, staff, and beneficiaries.
10. Build a stable foundation for future NGO productization.

## 4.2 Success outcomes

The system will be considered successful when HSF can:

- Complete one full financial month without relying on separate MFR spreadsheets.
- Trace an expense from budget to voucher.
- Reconcile at least one real bank account.
- Close a monthly financial period digitally.
- Produce project-wise and donor-wise reports.
- Track overdue IOUs.
- Restrict users to their assigned projects and locations.
- Preserve a complete audit trail.

---

# 5. Product Scope

## 5.1 Phase 1 — Foundation and Finance Core

Included:

- Authentication
- RBAC
- Organization settings
- Projects
- Locations
- Fiscal years and periods
- Chart of Accounts
- Funds and donors
- Annual budget
- MFR
- Additional MFR
- Purchase Requisition
- Basic procurement
- Disbursement
- IOU and adjustment
- Expenses
- Bills and vouchers
- Cash, bank, and MFS
- Internal transfers
- Bank statement import
- Bank reconciliation
- Monthly closing
- Audit log
- Document attachments
- Core dashboards and reports

## 5.2 Phase 2 — HR and Payroll

- Employee master
- Recruitment
- Appointment and joining
- Attendance and leave
- Salary structure
- Payroll
- Salary request application
- Bank instruction
- Training
- Performance
- Separation

## 5.3 Phase 3 — E4BL School Management

- Centre management
- Student admission
- Guardians
- Attendance
- Classes and subjects
- Exams and results
- Promotion and dropout
- Teacher management
- Material distribution
- Fee management
- Events and training
- HSF Graduate support
- Child Sponsorship

## 5.4 Phase 4 — A2PHC Health Management

- Camp planning
- Doctor and supervisor assignment
- Patient registration
- Patient visits
- Vitals
- Diagnosis
- Prescription
- Medicine issue
- Referral
- Follow-up
- Nutrition
- MHPSS
- Health reporting and data quality

## 5.5 Phase 5 — Climate, Women Empowerment, Donor, and MEAL

- Climate activities
- Women Empowerment activities
- Participants
- Distributions
- Outcomes
- Donor CRM
- Grants
- CSR
- Sponsorship
- Indicators
- Monthly and annual project reports

---

# 6. Out of Scope for Initial MVP

- Public multi-tenant SaaS
- Automated medical diagnosis
- Direct online banking integration
- Full electronic medical record interoperability
- Government API integrations
- Native mobile applications
- Full offline synchronization in the first release
- Advanced AI decision-making
- Automatic accounting classification without review
- Fully automated donor proposal generation

---

# 7. User Personas

## 7.1 Chairman

Needs:

- Final approval
- Organization-wide dashboard
- Financial visibility
- Project performance
- Risk visibility
- Board reporting

## 7.2 CEO

Needs:

- Management approval
- Project oversight
- Budget and activity status
- Pending decisions
- Monthly closing
- Donor and annual reports

## 7.3 Finance Director

Needs:

- Budget control
- MFR review
- Payroll
- Voucher verification
- Bank reconciliation
- Monthly closing
- Financial reporting
- Audit support

## 7.4 Finance Officer

Needs:

- Data entry
- Budget checking
- Disbursement
- Voucher preparation
- Bank and cash registers
- Reconciliation support
- Document verification

## 7.5 Project Coordinator

Needs:

- Annual plan
- Monthly targets
- MFR
- Additional MFR
- Field disbursement
- PR
- Field expense review
- Project report
- Project budget visibility

## 7.6 Head Teacher

Needs:

- E4BL centre operations
- Student and teacher records
- Attendance
- School expenses
- Materials
- Events
- Bills and vouchers

## 7.7 Medical Supervisor

Needs:

- Camp plan
- Patient registration
- Doctor assignment
- Field expenditure
- Health data submission
- Camp report
- Bills and vouchers

## 7.8 General Physician

Needs:

- Assigned camps
- Patient consultation
- Diagnosis
- Prescription
- Referral
- Follow-up

## 7.9 HR or Admin User

Needs:

- Employee records
- Recruitment
- Attendance
- Payroll support
- Training
- Documentation

## 7.10 Auditor

Needs:

- Read-only financial data
- Supporting documents
- Audit trail
- Period status
- Reconciliation
- Export

---

# 8. Functional Requirements

# 8.1 Authentication and Security

| ID       | Requirement                                                  | Priority |
| -------- | ------------------------------------------------------------ | -------- |
| AUTH-001 | Users must authenticate through approved Supabase Auth.      | Must     |
| AUTH-002 | Supabase Auth must support two-factor authentication policy. | Must     |
| AUTH-003 | Sessions must expire after configured inactivity.            | Must     |
| AUTH-004 | Failed login attempts must be logged.                        | Must     |
| AUTH-005 | Administrators must be able to suspend or deactivate users.  | Must     |
| AUTH-006 | Password reset and email verification use Supabase Auth.     | Must     |
| AUTH-007 | Role changes must be audited.                                | Must     |
| AUTH-008 | Users must only access assigned projects and locations.      | Must     |

---

# 8.2 Organization and Master Data

| ID       | Requirement                                                        | Priority |
| -------- | ------------------------------------------------------------------ | -------- |
| CORE-001 | Administrators must configure organization details.                | Must     |
| CORE-002 | The system must support multiple projects.                         | Must     |
| CORE-003 | The system must support hierarchical locations.                    | Must     |
| CORE-004 | The system must support fiscal years and monthly periods.          | Must     |
| CORE-005 | The system must support configurable document-numbering sequences. | Must     |
| CORE-006 | Master data must support active and inactive status.               | Must     |
| CORE-007 | Changes to controlled master data must be audited.                 | Must     |
| CORE-008 | The system must support English and Bangla labels.                 | Should   |

---

# 8.3 Chart of Accounts and Financial Dimensions

| ID      | Requirement                                                                                             | Priority |
| ------- | ------------------------------------------------------------------------------------------------------- | -------- |
| FIN-001 | The system must maintain a normalized Chart of Accounts.                                                | Must     |
| FIN-002 | Accounts must belong to Assets, Liabilities, Fund Balance, Income, Expense, or Control groups.          | Must     |
| FIN-003 | Transactions must support project, fund, donor, activity, location, cost centre, and period dimensions. | Must     |
| FIN-004 | Internal transfers must not be treated as income or expense.                                            | Must     |
| FIN-005 | IOUs must be treated as advances until adjusted.                                                        | Must     |
| FIN-006 | Accounts must have unique codes.                                                                        | Must     |
| FIN-007 | Controlled accounts must not be deleted after use.                                                      | Must     |
| FIN-008 | The system must support restricted and unrestricted funds.                                              | Must     |

---

# 8.4 Annual Budget

| ID      | Requirement                                                                    | Priority |
| ------- | ------------------------------------------------------------------------------ | -------- |
| BUD-001 | Finance must create annual budgets by fiscal year.                             | Must     |
| BUD-002 | Budget lines must support project, account, fund, activity, and location.      | Must     |
| BUD-003 | Budget lines may be allocated monthly.                                         | Must     |
| BUD-004 | Approved budgets must be locked.                                               | Must     |
| BUD-005 | Budget revisions must require approval and reason.                             | Must     |
| BUD-006 | The system must calculate budget, commitments, actuals, and available balance. | Must     |
| BUD-007 | Users must see only the budgets they are authorized to view.                   | Must     |
| BUD-008 | Budget versus actual reports must be available by project and fund.            | Must     |

---

# 8.5 Monthly Fund Requisition

| ID      | Requirement                                                                                          | Priority |
| ------- | ---------------------------------------------------------------------------------------------------- | -------- |
| MFR-001 | A project coordinator must be able to create an MFR for a project and month.                         | Must     |
| MFR-002 | A separate COM MFR must be supported.                                                                | Must     |
| MFR-003 | Each MFR must have detailed annex lines.                                                             | Must     |
| MFR-004 | Annex lines must include quantity, unit, unit cost, total, account, activity, location, and remarks. | Must     |
| MFR-005 | Account totals and grand total must calculate automatically.                                         | Must     |
| MFR-006 | The system must show budget, previous actual, current request, commitments, and remaining balance.   | Must     |
| MFR-007 | The system must warn or block over-budget requests based on policy.                                  | Must     |
| MFR-008 | MFRs must follow a configurable approval workflow.                                                   | Must     |
| MFR-009 | Approvers must be able to approve, reject, or return for correction.                                 | Must     |
| MFR-010 | Approval comments and timestamps must be retained.                                                   | Must     |
| MFR-011 | MFRs must generate print-ready PDF output.                                                           | Must     |
| MFR-012 | MFR status must show disbursement and adjustment progress.                                           | Must     |
| MFR-013 | Duplicate active MFRs for the same project and month must be controlled.                             | Must     |

---

# 8.6 Additional MFR

| ID       | Requirement                                                          | Priority |
| -------- | -------------------------------------------------------------------- | -------- |
| AMFR-001 | Additional MFRs must link to an original MFR.                        | Must     |
| AMFR-002 | Reason and urgency must be mandatory.                                | Must     |
| AMFR-003 | Supporting phone, email, or WhatsApp evidence may be attached.       | Should   |
| AMFR-004 | Additional MFRs must follow special approval rules.                  | Must     |
| AMFR-005 | The system must show combined original and additional authorization. | Must     |

---

# 8.7 Purchase Requisition and Procurement

| ID     | Requirement                                                                                       | Priority |
| ------ | ------------------------------------------------------------------------------------------------- | -------- |
| PR-001 | A PR must link to an approved MFR where required.                                                 | Must     |
| PR-002 | PR lines must include item, specification, quantity, unit, estimated cost, account, and location. | Must     |
| PR-003 | Budget availability must be validated.                                                            | Must     |
| PR-004 | The PR must support review, recommendation, and approval.                                         | Must     |
| PR-005 | Procurement thresholds must be configurable.                                                      | Should   |
| PR-006 | Vendors must have master records.                                                                 | Must     |
| PR-007 | Quotation and comparative statement support should be available.                                  | Should   |
| PR-008 | Goods or service receipt must be recorded before final closure.                                   | Should   |
| PR-009 | PR status must be visible.                                                                        | Must     |

---

# 8.8 Disbursement

| ID      | Requirement                                                                          | Priority |
| ------- | ------------------------------------------------------------------------------------ | -------- |
| DIS-001 | Finance must record bank, cash, or MFS disbursement.                                 | Must     |
| DIS-002 | Disbursement must identify recipient, project, location, amount, and source account. | Must     |
| DIS-003 | Disbursement must link to MFR, PR, or IOU.                                           | Must     |
| DIS-004 | Recipient acknowledgement must be stored.                                            | Should   |
| DIS-005 | Partial and full disbursement must be supported.                                     | Must     |
| DIS-006 | Disbursement status must update the MFR.                                             | Must     |

---

# 8.9 IOU and Advance

| ID      | Requirement                                                                | Priority |
| ------- | -------------------------------------------------------------------------- | -------- |
| IOU-001 | Finance must be able to issue an IOU against approved authorization.       | Must     |
| IOU-002 | The IOU must contain recipient, purpose, amount, issue date, and due date. | Must     |
| IOU-003 | Partial and full adjustment must be supported.                             | Must     |
| IOU-004 | Returned cash must be recorded.                                            | Must     |
| IOU-005 | Overdue IOUs must appear on dashboards.                                    | Must     |
| IOU-006 | New advances may be blocked for overdue recipients based on policy.        | Should   |
| IOU-007 | Every adjustment must include supporting bills or vouchers.                | Must     |
| IOU-008 | IOU ageing reports must be available.                                      | Must     |

---

# 8.10 Expense, Bill, and Voucher

| ID      | Requirement                                                                                         | Priority |
| ------- | --------------------------------------------------------------------------------------------------- | -------- |
| EXP-001 | Every expense must link to approved authorization.                                                  | Must     |
| EXP-002 | Expense entry must support project, fund, account, activity, location, vendor, recipient, and date. | Must     |
| EXP-003 | Bill or supporting evidence must be attachable.                                                     | Must     |
| EXP-004 | Finance must verify submitted expenses.                                                             | Must     |
| EXP-005 | A voucher must be generated after verification.                                                     | Must     |
| EXP-006 | Posted vouchers must create balanced journal entries.                                               | Must     |
| EXP-007 | Posted vouchers must not be editable by normal users.                                               | Must     |
| EXP-008 | Voucher reversal must be controlled and audited.                                                    | Must     |
| EXP-009 | Missing-document exceptions must be reportable.                                                     | Must     |

---

# 8.11 Cash, Bank, and MFS

| ID      | Requirement                                                                     | Priority |
| ------- | ------------------------------------------------------------------------------- | -------- |
| CBM-001 | The system must maintain separate ledgers for each bank, cash, and MFS account. | Must     |
| CBM-002 | Deposits, withdrawals, charges, interest, and transfers must be recorded.       | Must     |
| CBM-003 | Internal transfers must create linked balanced entries.                         | Must     |
| CBM-004 | Bank statements must be importable from CSV or Excel.                           | Must     |
| CBM-005 | Imported lines must support matching with ledger entries.                       | Must     |
| CBM-006 | Unmatched statement lines must be visible.                                      | Must     |
| CBM-007 | Monthly bank reconciliation must be approved and locked.                        | Must     |
| CBM-008 | Bank, cash, and MFS books must be exportable.                                   | Must     |

---

# 8.12 Monthly Closing

| ID      | Requirement                                                                         | Priority |
| ------- | ----------------------------------------------------------------------------------- | -------- |
| CLS-001 | The system must maintain monthly financial periods.                                 | Must     |
| CLS-002 | A closing checklist must show open MFRs, IOUs, vouchers, and reconciliation issues. | Must     |
| CLS-003 | Critical exceptions must block closing.                                             | Must     |
| CLS-004 | Authorized management must approve closing.                                         | Must     |
| CLS-005 | Closed periods must be locked.                                                      | Must     |
| CLS-006 | Reopening must require reason and approval.                                         | Must     |
| CLS-007 | Reopening and all subsequent changes must be audited.                               | Must     |

---

# 8.13 HR and Payroll

| ID     | Requirement                                                                                               | Priority |
| ------ | --------------------------------------------------------------------------------------------------------- | -------- |
| HR-001 | The system must maintain employee master records.                                                         | Must     |
| HR-002 | Recruitment must support manpower requisition, vacancy, candidate, interview, selection, and appointment. | Should   |
| HR-003 | Employees must be assigned to projects and duty stations.                                                 | Must     |
| HR-004 | Payroll must support earning month, payment date, project allocation, allowance, and deduction.           | Must     |
| HR-005 | Salary sheets must be generated.                                                                          | Must     |
| HR-006 | Salary request applications and bank instructions must be generated.                                      | Must     |
| HR-007 | Payroll approval must be configurable.                                                                    | Must     |
| HR-008 | Training and professional development must be recorded.                                                   | Should   |

---

# 8.14 E4BL School Management

| ID      | Requirement                                                                            | Priority |
| ------- | -------------------------------------------------------------------------------------- | -------- |
| EDU-001 | The system must manage Hazaribagh and Uttara centres.                                  | Must     |
| EDU-002 | Students must have unique IDs.                                                         | Must     |
| EDU-003 | Students must be assigned to academic year, centre, and class.                         | Must     |
| EDU-004 | Guardian information must be recorded.                                                 | Must     |
| EDU-005 | Daily attendance must be recorded.                                                     | Must     |
| EDU-006 | Repeated absence must trigger follow-up.                                               | Should   |
| EDU-007 | Exams, results, and promotion must be managed.                                         | Must     |
| EDU-008 | Materials must be distributed and recorded by student.                                 | Must     |
| EDU-009 | Hazaribagh students must be supported as fully fee-free.                               | Must     |
| EDU-010 | Uttara small fees, waivers, receipts, and deposits must be managed.                    | Must     |
| EDU-011 | Grade Five completers must become HSF Graduates.                                       | Must     |
| EDU-012 | Graduate high-school admission and support through Grade Ten must be tracked.          | Must     |
| EDU-013 | Child Sponsorship must link donors with supported students.                            | Should   |
| EDU-014 | Teacher activity, training, events, home visits, and parent meetings must be recorded. | Should   |

---

# 8.15 A2PHC Health Management

| ID      | Requirement                                                                                | Priority |
| ------- | ------------------------------------------------------------------------------------------ | -------- |
| HLT-001 | The system must manage medical camps.                                                      | Must     |
| HLT-002 | Doctors and supervisors must be assigned to camps.                                         | Must     |
| HLT-003 | Patients must have unique IDs.                                                             | Must     |
| HLT-004 | Patient visits must be separate from patient master records.                               | Must     |
| HLT-005 | The system must record complaint, vitals, diagnosis, prescription, medicine, and referral. | Must     |
| HLT-006 | Patients must not be charged for camp services.                                            | Must     |
| HLT-007 | Duplicate-patient checks must be available.                                                | Must     |
| HLT-008 | Age, contact, location, and date validation must be applied.                               | Must     |
| HLT-009 | Follow-up visits must link to earlier visits.                                              | Must     |
| HLT-010 | Health dashboards must report patient, disease, district, doctor, and data quality.        | Must     |
| HLT-011 | Nutrition and MHPSS activity reporting must be supported.                                  | Should   |
| HLT-012 | Patient data must have strict privacy controls.                                            | Must     |

---

# 8.16 Donor, CSR, and Sponsorship

| ID      | Requirement                                                                              | Priority |
| ------- | ---------------------------------------------------------------------------------------- | -------- |
| DON-001 | The system must maintain donor and CSR profiles.                                         | Must     |
| DON-002 | Donations must record source, amount, currency, date, restriction, project, and receipt. | Must     |
| DON-003 | Grants must include agreement, budget, dates, reporting schedule, and restrictions.      | Should   |
| DON-004 | Donor utilization reports must be available.                                             | Must     |
| DON-005 | Sponsorship must link donor, student, amount, period, and progress reporting.            | Should   |
| DON-006 | Donor access must be read-only and privacy-safe.                                         | Could    |

---

# 8.17 Project Management and MEAL

| ID       | Requirement                                                             | Priority |
| -------- | ----------------------------------------------------------------------- | -------- |
| MEAL-001 | Projects must define goals, outputs, activities, and indicators.        | Must     |
| MEAL-002 | Indicators must have unit, baseline, target, and achievement.           | Must     |
| MEAL-003 | Different units must not be summed into one total.                      | Must     |
| MEAL-004 | Evidence must be linked to achievements.                                | Must     |
| MEAL-005 | Monthly and annual project reports must be generated.                   | Must     |
| MEAL-006 | Plan-versus-progress and budget-versus-actual must be visible together. | Should   |

---

# 9. Key Business Rules

1. No user may final-approve their own request.
2. Approved budgets are immutable except through approved revisions.
3. Draft records do not affect financial balances.
4. Posted vouchers affect the ledger.
5. Journal entries must balance.
6. Internal transfers do not create income or expense.
7. IOUs remain advances until adjusted.
8. Every expense must link to authorization.
9. Purchases must use PR according to configured thresholds.
10. Closed periods cannot be edited normally.
11. Sensitive documents must be private.
12. Patient data must be separated into patient and visit records.
13. Student status transitions must be controlled.
14. HSF Graduate support must end or change after Grade Ten according to policy.
15. Medical camp patients must not be charged.
16. Financial reports must distinguish transaction date, expense period, and payment date.
17. Every approval and correction must be audited.
18. Historical records should be archived, not deleted.
19. Project coordinators may only access assigned projects.
20. Field users may only access assigned locations.

---

# 10. Approval Workflows

## 10.1 MFR

```text
Draft
→ Submitted by Project Coordinator
→ Finance Budget Review
→ Finance Director Recommendation
→ CEO Recommendation
→ Chairman Final Approval
→ Disbursement
→ Adjustment
→ Closure
```

The exact chain must remain configurable.

## 10.2 PR

```text
Draft
→ Submitted
→ Budget Check
→ Recommendation
→ Approval
→ Procurement
→ Receipt
→ Bill
→ Payment
→ Closure
```

## 10.3 IOU

```text
Requested
→ Approved
→ Issued
→ Adjustment Submitted
→ Finance Verified
→ Closed
```

## 10.4 Payroll

```text
Payroll Prepared
→ Finance Review
→ Management Approval
→ Bank Instruction
→ Payment Confirmation
→ Payroll Posting
→ Closure
```

## 10.5 Period Closing

```text
Field Submission
→ Finance Review
→ Bank Reconciliation
→ Project Report Review
→ CEO / Finance Director Approval
→ Period Lock
```

---

# 11. Reports

## 11.1 Finance

- Annual budget
- Budget versus actual
- MFR register
- Additional MFR register
- MFR versus actual
- PR register
- Procurement register
- IOU register
- IOU ageing
- Expense register
- Voucher register
- General ledger
- Trial balance
- Cash book
- Bank book
- MFS book
- Bank reconciliation
- Fund utilization
- Project expenditure
- Donor utilization
- Monthly financial report
- Annual financial report

## 11.2 HR

- Employee list
- Recruitment status
- Attendance
- Leave
- Salary sheet
- Salary payment
- Bank instruction
- Training history

## 11.3 E4BL

- Student register
- Attendance
- Exam results
- Promotion
- Dropout
- Material distribution
- Fee collection
- Fee waiver
- Teacher activity
- Event report
- HSF Graduate report
- High-school support report
- Sponsorship report

## 11.4 A2PHC

- Camp register
- Patient register
- Visit register
- Disease summary
- District summary
- Doctor summary
- Supervisor summary
- Referral report
- Follow-up report
- Medicine issue
- Nutrition
- MHPSS
- Data-quality report

## 11.5 Management

- Executive dashboard
- Project dashboard
- Plan versus progress
- Budget versus actual
- Pending approvals
- Overdue IOUs
- Missing evidence
- Unclosed periods
- Donor deadlines
- Annual impact report

---

# 12. Non-Functional Requirements

## 12.1 Security

- HTTPS
- Strong password policy
- 2FA for sensitive roles
- Supabase Auth-managed sign-in, sign-out, password reset, email verification,
  session, identity, and access/refresh token issuance
- Secure cookie-based Next.js sessions through `@supabase/ssr`
- NestJS validation through the Supabase project issuer and JWKS endpoint
- Supabase-hosted production PostgreSQL with Prisma-managed HSF ERP schema,
  migrations, and queries
- HSF ERP database tables remain authoritative for authorization
- Supabase metadata, custom claims, and RLS are not the sole HSF business
  authorization source
- Browser access to core ERP data goes through the NestJS domain API; business
  tables are not directly exposed as an API bypass
- RBAC
- Project and location scoping
- Encryption in transit
- Encrypted backups
- Private object storage
- Audit logs
- Export control
- Sensitive-field masking

## 12.2 Availability

- Target production availability: 99.5% initially
- Daily automated backups
- Restore testing
- Error monitoring
- Health checks

## 12.3 Performance

- Normal dashboard response under three seconds on standard broadband
- Field forms optimized for low bandwidth
- Pagination for large datasets
- Background jobs for heavy reports and imports

## 12.4 Scalability

- Support at least:
  - 100 internal users initially
  - 50,000 students and beneficiaries combined
  - 1,000,000 patient visits over time
  - 10 years of financial history
  - Multiple projects, donors, and locations

## 12.5 Accessibility

- Keyboard navigation
- Screen-reader-friendly labels
- Responsive mobile layout
- Clear validation
- Bangla-friendly field input
- High-contrast support

## 12.6 Maintainability

- TypeScript
- Modular domain boundaries
- Automated tests
- API documentation
- Database migrations
- Coding standards
- CI/CD
- Versioned release notes

---

# 13. Data Migration Requirements

## 13.1 Initial master data

- Projects
- Locations
- Accounts
- Bank accounts
- Cash accounts
- Employees
- Users
- Donors
- Funds
- Vendors
- Students
- Doctors
- Supervisors

## 13.2 Opening data

- Opening bank balances
- Opening cash balances
- Open IOUs
- Active annual budgets
- Active student records
- Current HSF Graduates
- Active employee salary structures

## 13.3 Historical imports

Historical financial, patient, education, and payroll data must be cleaned before import.

Each import must produce:

- Batch number
- Source file
- Imported rows
- Rejected rows
- Duplicate rows
- Warning rows
- User
- Timestamp

---

# 14. MVP Pilot

The first pilot should use:

- Fiscal Year 2026
- COM
- E4BL
- Head Office
- Hazaribagh
- Uttara
- One bank account
- One cash account
- Limited approved accounts
- Real HSF approvers
- One complete monthly cycle

The pilot succeeds when:

1. Annual budget is loaded.
2. MFR is prepared and approved.
3. PR is generated.
4. Funds are disbursed.
5. Bills and vouchers are submitted.
6. Bank or cash entries are posted.
7. Bank reconciliation is completed.
8. Monthly financial period is closed.
9. Reports are generated.
10. HSF management signs acceptance.

---

# 15. Release Priorities

## Must before pilot

- Authentication
- RBAC
- Projects and locations
- Accounts and funds
- Annual budget
- MFR
- Additional MFR
- PR
- Disbursement
- IOU
- Expense and voucher
- Cash and bank
- Reconciliation
- Monthly close
- Audit log
- Core reports

## Should shortly after pilot

- Payroll
- Recruitment baseline
- E4BL student and attendance
- A2PHC patient registration
- Donor CRM
- Inventory

## Could later

- Donor portal
- Advanced BI
- Native mobile apps
- Direct bank integration
- AI-assisted reporting
- Multi-organization SaaS capability

---

# 16. Product Acceptance

HSF management should formally approve:

- Scope
- Roles
- Approval matrix
- Chart of Accounts
- Budget design
- MFR workflow
- PR workflow
- IOU policy
- Monthly closing rules
- Data privacy policy
- Pilot acceptance results

This PRD becomes the controlled source of truth after approval.
