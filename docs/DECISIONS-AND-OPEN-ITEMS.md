# HSF ERP

## Decisions, Assumptions, and Open Items Register

**Document status:** Draft v1.0  
**Purpose:** Keep implementation moving without hiding unresolved organizational decisions

---

# 1. Decision Categories

- Confirmed: Directly confirmed by HSF
- Provisional: Recommended design decision to be approved
- Open: Requires HSF confirmation
- Deferred: Intentionally postponed

---

# 2. Confirmed Decisions

| ID    | Decision                                                                                       |
| ----- | ---------------------------------------------------------------------------------------------- |
| C-001 | The system will be a customized HSF ERP.                                                       |
| C-002 | HSF currently has four principal projects: E4BL, A2PHC, Climate Action, and Women Empowerment. |
| C-003 | Central Office Management requires a separate MFR.                                             |
| C-004 | Each project coordinator prepares a monthly MFR.                                               |
| C-005 | Additional expenses require an Additional MFR and approval.                                    |
| C-006 | Purchases require a Purchase Requisition after MFR approval.                                   |
| C-007 | Expenses require proper bills and vouchers.                                                    |
| C-008 | Project coordinators prepare monthly financial and project management reports.                 |
| C-009 | HSF has three bank accounts in different banks.                                                |
| C-010 | Finance prepares salary sheets, salary request applications, and bank instructions.            |
| C-011 | HSF holds an annual planning meeting in October or November.                                   |
| C-012 | E4BL currently serves 300 students in two centres.                                             |
| C-013 | E4BL has 10 teachers and two helping hands.                                                    |
| C-014 | Hazaribagh education and materials are free.                                                   |
| C-015 | Uttara charges a very small fee and provides free materials.                                   |
| C-016 | Grade Five completers are called HSF Graduates.                                                |
| C-017 | HSF supports HSF Graduates through Grade Ten.                                                  |
| C-018 | A2PHC has five supervisors and five general physicians.                                        |
| C-019 | Patients are not charged at HSF medical camps.                                                 |
| C-020 | Medical supervisors currently use Google Forms for patient data.                               |
| C-021 | HSF uses pnpm for new JavaScript projects.                                                     |

---

# 3. Provisional Product Decisions

| ID    | Decision                                                   | Rationale                                  |
| ----- | ---------------------------------------------------------- | ------------------------------------------ |
| P-001 | Use a modular monolith.                                    | Lower cost, simpler security, easier audit |
| P-002 | Use a pnpm monorepo with Turborepo.                        | Shared packages and consistent workflow    |
| P-003 | Use Next.js for the web application.                       | Responsive UI and mature ecosystem         |
| P-004 | Use NestJS for the backend API.                            | Strong modular backend structure           |
| P-005 | Use PostgreSQL.                                            | Strong relational and reporting support    |
| P-006 | Use TypeScript end to end.                                 | Maintainability and type safety            |
| P-007 | Use private S3-compatible object storage.                  | Secure document management                 |
| P-008 | Use Redis and BullMQ for jobs.                             | Reports, imports, notifications            |
| P-009 | Use UUID primary keys.                                     | Scalable distributed identifiers           |
| P-010 | Use human-readable document numbers separately.            | Operational traceability                   |
| P-011 | Use English and Bangla interface support.                  | Head-office and field usability            |
| P-012 | Build Finance Core first.                                  | It is the shared control backbone          |
| P-013 | Pilot COM and E4BL first.                                  | Controlled scope with real finance flow    |
| P-014 | Treat projects and accounts as separate dimensions.        | Correct accounting and reporting           |
| P-015 | Treat internal transfers as contra transactions.           | Prevent double counting                    |
| P-016 | Treat IOU as an advance asset until adjustment.            | Correct accounting treatment               |
| P-017 | Use patient master plus separate visit records.            | Follow-up and duplicate control            |
| P-018 | Use student master plus annual enrolments.                 | Academic history and promotion             |
| P-019 | Use role, project, location, and sensitivity-based access. | Least-privilege security                   |
| P-020 | Require controlled monthly period closing.                 | Audit readiness                            |

---

# 4. Open Organizational Decisions

## 4.1 Governance and ownership

| ID    | Question                                        |
| ----- | ----------------------------------------------- |
| O-001 | Who will be the official HSF ERP Product Owner? |
| O-002 | Who will approve final product requirements?    |
| O-003 | Who will own finance master data?               |
| O-004 | Who will own HR master data?                    |
| O-005 | Who will own E4BL data?                         |
| O-006 | Who will own A2PHC data and medical privacy?    |
| O-007 | Who will act as internal system administrator?  |

## 4.2 Financial configuration

| ID    | Question                                                                         |
| ----- | -------------------------------------------------------------------------------- |
| O-008 | What is HSF's official financial year?                                           |
| O-009 | What are the official names and operational purposes of all three bank accounts? |
| O-010 | Which cash boxes and MFS accounts exist?                                         |
| O-011 | Who are the custodians for cash and MFS?                                         |
| O-012 | What are the final account codes?                                                |
| O-013 | What approval thresholds apply by amount?                                        |
| O-014 | What procurement thresholds require quotations or comparative statements?        |
| O-015 | What is the IOU settlement deadline?                                             |
| O-016 | When is the monthly financial closing deadline?                                  |
| O-017 | Which taxes and VAT rules must be supported?                                     |
| O-018 | Does HSF need multi-currency accounting in Phase 1?                              |

## 4.3 Payroll and HR

| ID    | Question                                                                |
| ----- | ----------------------------------------------------------------------- |
| O-019 | What is the exact current head-office staff list?                       |
| O-020 | Does the Chairman count within the stated 10 working head-office staff? |
| O-021 | What is the salary cut-off and payment date?                            |
| O-022 | How is attendance currently recorded?                                   |
| O-023 | What leave categories are used?                                         |
| O-024 | What recruitment forms and approvals are mandatory?                     |
| O-025 | What is the probation and confirmation policy?                          |

## 4.4 E4BL

| ID    | Question                                                                  |
| ----- | ------------------------------------------------------------------------- |
| O-026 | What is the official centre name for the Uttara education centre?         |
| O-027 | What is the current student distribution by centre, class, and gender?    |
| O-028 | What exact small-fee structure applies at Uttara?                         |
| O-029 | What fee-waiver rules apply?                                              |
| O-030 | What grading and promotion system is used?                                |
| O-031 | Which subjects are taught in each class?                                  |
| O-032 | What is the academic-year calendar?                                       |
| O-033 | What exact support items are covered for HSF Graduates through Grade Ten? |
| O-034 | What documents are required for child sponsorship?                        |

## 4.5 A2PHC

| ID    | Question                                                   |
| ----- | ---------------------------------------------------------- |
| O-035 | What are the current active A2PHC districts and locations? |
| O-036 | How are the five supervisors and five physicians assigned? |
| O-037 | Which patient fields are mandatory?                        |
| O-038 | What patient consent process is used?                      |
| O-039 | Should the patient ID be printed as a card or QR code?     |
| O-040 | What referral facilities are approved?                     |
| O-041 | How is medicine stock currently controlled?                |
| O-042 | Which diagnoses should use standardized codes?             |
| O-043 | What health records may be exported, and by whom?          |

## 4.6 Technology and operations

| ID    | Question                                                   |
| ----- | ---------------------------------------------------------- |
| O-044 | What hosting region and provider are preferred?            |
| O-045 | Is offline operation required in the first health release? |
| O-046 | What devices do field users normally use?                  |
| O-047 | Does HSF use Google Workspace formally?                    |
| O-048 | Which email service should send notifications?             |
| O-049 | What backup retention is required?                         |
| O-050 | Who will provide first-line user support?                  |

---

# 5. Assumptions Used to Continue Design

1. HSF will approve a single product owner before implementation.
2. The current MFR chain can be configured rather than hard-coded.
3. BDT is the primary accounting currency.
4. English is the default formal-report language.
5. Bangla will be supported for field usability.
6. Phase 1 can begin without direct bank API integration.
7. Existing bank statements can be imported through CSV or Excel.
8. Historical data will be cleaned before migration.
9. HSF will approve a normalized Chart of Accounts before posting real transactions.
10. Real patient data will not be used in development environments.
11. HSF will provide sample HR and recruitment forms before HR implementation.
12. HSF will validate the active location list before health go-live.
13. HSF will define consent and safeguarding policies before beneficiary modules go live.

---

# 6. Decisions That Must Be Closed Before Coding Phase 1

Critical blockers:

- O-001 Product Owner
- O-008 Financial year
- O-009 Bank account list and purpose
- O-012 Final Chart of Accounts codes
- O-013 Approval thresholds
- O-014 Procurement thresholds
- O-015 IOU deadline
- O-016 Monthly closing deadline
- O-044 Hosting preference

The repository foundation can be created before all blockers are closed, but production financial workflow should not be finalized without them.

---

# 7. Recommended Provisional Defaults

To avoid unnecessary delay, the following defaults may be used in development until HSF approves final values:

| Item                  | Provisional default                                       |
| --------------------- | --------------------------------------------------------- |
| Currency              | BDT                                                       |
| Timezone              | Asia/Dhaka                                                |
| Interface language    | English with Bangla support                               |
| Fiscal period         | Monthly                                                   |
| MFR approval          | Coordinator → Finance → Finance Director → CEO → Chairman |
| IOU due               | 15 days after activity or month-end, configurable         |
| Month close target    | By the 10th working day of the next month                 |
| Bank statement import | CSV and Excel                                             |
| Pilot projects        | COM and E4BL                                              |
| Pilot locations       | Head Office, Hazaribagh, Uttara                           |
| Pilot environment     | Staging before production                                 |
| Data deletion         | Archive or reverse, no hard delete for posted records     |

These are not final policy decisions.
