# HSF ERP Complete UI Blueprint and Route Map

**Status:** Management presentation UI only  
**Version:** v0.1.4  
**Coverage:** 1 executive dashboard + 400 module screens across 19 domains  

## Purpose

This document records the complete planned user-interface surface implemented for management review. Route availability does not mean the related authentication, business rules, approvals, database operations, reporting calculations, or integrations are implemented. Every screen uses synthetic demonstration content only.

## UI principles

- Preserve the existing HSF executive green visual identity.
- Keep every route responsive for desktop, tablet, and mobile.
- Show realistic dashboards, tables, forms, workflows, reports, calendars, libraries, settings, and record details.
- Support draft, submitted, review, returned, approved, completed, verified, and closed states visually.
- Never present synthetic preview values as real HSF operational data.
- Add functionality only through later approved tasks and keep the UI contract stable where practical.

## Shared preview routes

- `/dashboard` — Executive management overview
- Every registry or workflow route also supports a UI-only `/new` preview.
- Every base route also supports a synthetic detail URL such as `/<route>/HSF-DEMO-001`.
- Every base route also supports an `/edit` preview.

## Complete module route catalogue

### 1. Planning & Performance (`PL`)

Base path: `/planning`  
Implemented screens: **21**

| Screen | Route | UI type |
|---|---|---|
| Planning Dashboard | `/planning/dashboard` | Dashboard |
| Annual Planning Meetings | `/planning/annual-planning-meetings` | Calendar |
| Organizational Priorities | `/planning/organizational-priorities` | Registry |
| Annual Project Plans | `/planning/annual-project-plans` | Workflow |
| Activity Plans | `/planning/activity-plans` | Registry |
| Event Calendar | `/planning/event-calendar` | Calendar |
| Training Plan | `/planning/training-plan` | Registry |
| Recruitment Plan | `/planning/recruitment-plan` | Registry |
| Procurement Plan | `/planning/procurement-plan` | Registry |
| Staff Work Plans | `/planning/staff-work-plans` | Workflow |
| Weekly Task Plans | `/planning/weekly-task-plans` | Registry |
| Daily Activities | `/planning/daily-activities` | Registry |
| Monthly Achievement Reports | `/planning/monthly-achievement-reports` | Workflow |
| Project Management Reports | `/planning/project-management-reports` | Report |
| Project Achievement Reports | `/planning/project-achievement-reports` | Report |
| Indicators & Targets | `/planning/indicators-and-targets` | Registry |
| Evidence Register | `/planning/evidence-register` | Library |
| Risk Register | `/planning/risk-register` | Workflow |
| Corrective Actions | `/planning/corrective-actions` | Workflow |
| Plan versus Progress | `/planning/plan-versus-progress` | Report |
| Data Quality Review | `/planning/data-quality-review` | Report |

### 2. Projects & Locations (`PJ`)

Base path: `/projects`  
Implemented screens: **15**

| Screen | Route | UI type |
|---|---|---|
| Project Portfolio | `/projects/portfolio` | Dashboard |
| Projects | `/projects/projects` | Registry |
| Programmes | `/projects/programmes` | Registry |
| Locations | `/projects/locations` | Registry |
| Cost Centres | `/projects/cost-centres` | Registry |
| Project Assignments | `/projects/project-assignments` | Registry |
| Location Assignments | `/projects/location-assignments` | Registry |
| Beneficiary Groups | `/projects/beneficiary-groups` | Registry |
| Central Office Management | `/projects/central-office-management` | Registry |
| E4BL Project Overview | `/projects/e4bl` | Dashboard |
| A2PHC Project Overview | `/projects/a2phc` | Dashboard |
| Climate Action Overview | `/projects/climate-action` | Dashboard |
| Women Empowerment Overview | `/projects/women-empowerment` | Dashboard |
| Project Calendar | `/projects/project-calendar` | Calendar |
| Project Issues & Decisions | `/projects/project-issues-and-decisions` | Workflow |

### 3. Requisitions & MFR (`RQ`)

Base path: `/requisitions`  
Implemented screens: **15**

| Screen | Route | UI type |
|---|---|---|
| Requisition Dashboard | `/requisitions/dashboard` | Dashboard |
| Field Requisitions | `/requisitions/field-requisitions` | Workflow |
| E4BL Centre Requisitions | `/requisitions/e4bl-centre-requisitions` | Workflow |
| A2PHC Camp Requisitions | `/requisitions/a2phc-camp-requisitions` | Workflow |
| Coordinator Review Queue | `/requisitions/coordinator-review-queue` | Workflow |
| Consolidated Project Needs | `/requisitions/consolidated-project-needs` | Registry |
| Monthly Fund Requisitions | `/requisitions/mfr` | Workflow |
| MFR Line Items | `/requisitions/mfr-line-items` | Registry |
| MFR Approval Queue | `/requisitions/mfr-approval-queue` | Workflow |
| Additional MFR | `/requisitions/additional-mfr` | Workflow |
| Disbursement Tracking | `/requisitions/disbursement-tracking` | Workflow |
| Adjustment Status | `/requisitions/adjustment-status` | Workflow |
| Requisition Reports | `/requisitions/requisition-reports` | Report |
| MFR Register | `/requisitions/mfr-register` | Report |
| MFR versus Actual | `/requisitions/mfr-versus-actual` | Report |

### 4. Procurement (`PR`)

Base path: `/procurement`  
Implemented screens: **16**

| Screen | Route | UI type |
|---|---|---|
| Procurement Dashboard | `/procurement/dashboard` | Dashboard |
| Purchase Requisitions | `/procurement/purchase-requisitions` | Workflow |
| PR Approval Queue | `/procurement/pr-approval-queue` | Workflow |
| Quotation Requests | `/procurement/quotation-requests` | Workflow |
| Supplier Quotations | `/procurement/supplier-quotations` | Registry |
| Comparative Statements | `/procurement/comparative-statements` | Workflow |
| Vendor Selection | `/procurement/vendor-selection` | Workflow |
| Vendors | `/procurement/vendors` | Registry |
| Purchase Orders | `/procurement/purchase-orders` | Workflow |
| Goods Receipts | `/procurement/goods-receipts` | Workflow |
| Service Completion Notes | `/procurement/service-completion-notes` | Workflow |
| Bill Registration | `/procurement/bill-registration` | Workflow |
| Vendor Payments | `/procurement/vendor-payments` | Workflow |
| Vendor Performance | `/procurement/vendor-performance` | Report |
| Procurement Register | `/procurement/procurement-register` | Report |
| Procurement Ageing | `/procurement/procurement-ageing` | Report |

### 5. Finance & Accounting (`FN`)

Base path: `/finance`  
Implemented screens: **39**

| Screen | Route | UI type |
|---|---|---|
| Finance Dashboard | `/finance/dashboard` | Dashboard |
| Annual Budgets | `/finance/annual-budgets` | Workflow |
| Monthly Allocations | `/finance/monthly-allocations` | Registry |
| Budget Revisions | `/finance/budget-revisions` | Workflow |
| Budget Availability | `/finance/budget-availability` | Report |
| Funding Gaps | `/finance/funding-gaps` | Report |
| Commitments | `/finance/commitments` | Registry |
| Chart of Accounts | `/finance/chart-of-accounts` | Registry |
| Account Groups | `/finance/account-groups` | Registry |
| Funds | `/finance/funds` | Registry |
| Financial Dimensions | `/finance/financial-dimensions` | Settings |
| Disbursements | `/finance/disbursements` | Workflow |
| IOU & Advances | `/finance/iou-and-advances` | Workflow |
| IOU Adjustments | `/finance/iou-adjustments` | Workflow |
| IOU Ageing | `/finance/iou-ageing` | Report |
| Bills | `/finance/bills` | Workflow |
| Vouchers | `/finance/vouchers` | Workflow |
| Journal Entries | `/finance/journal-entries` | Workflow |
| Receipts | `/finance/receipts` | Workflow |
| Payments | `/finance/payments` | Workflow |
| Cash Accounts | `/finance/cash-accounts` | Registry |
| Cash Book | `/finance/cash-book` | Report |
| Bank Accounts | `/finance/bank-accounts` | Registry |
| Bank Book | `/finance/bank-book` | Report |
| MFS Accounts | `/finance/mfs-accounts` | Registry |
| MFS Book | `/finance/mfs-book` | Report |
| Internal Transfers | `/finance/internal-transfers` | Workflow |
| Cheque Register | `/finance/cheque-register` | Registry |
| Bank Statements | `/finance/bank-statements` | Registry |
| Bank Reconciliation | `/finance/bank-reconciliation` | Workflow |
| General Ledger | `/finance/general-ledger` | Report |
| Trial Balance | `/finance/trial-balance` | Report |
| Income & Expenditure | `/finance/income-and-expenditure` | Report |
| Fund Balance | `/finance/fund-balance` | Report |
| Project Statements | `/finance/project-statements` | Report |
| Donor Statements | `/finance/donor-statements` | Report |
| Monthly Closing | `/finance/monthly-closing` | Workflow |
| Closing Checklist | `/finance/closing-checklist` | Workflow |
| Financial Reports | `/finance/financial-reports` | Report |

### 6. Human Resources (`HR`)

Base path: `/hr`  
Implemented screens: **31**

| Screen | Route | UI type |
|---|---|---|
| HR Dashboard | `/hr/dashboard` | Dashboard |
| Employees | `/hr/employees` | Registry |
| Employee Profiles | `/hr/employee-profiles` | Profile |
| Positions | `/hr/positions` | Registry |
| Designations | `/hr/designations` | Registry |
| Departments | `/hr/departments` | Registry |
| Duty Stations | `/hr/duty-stations` | Registry |
| Reporting Lines | `/hr/reporting-lines` | Registry |
| Employee Assignments | `/hr/employee-assignments` | Registry |
| Attendance | `/hr/attendance` | Registry |
| Leave Requests | `/hr/leave-requests` | Workflow |
| Leave Balances | `/hr/leave-balances` | Report |
| Performance Reviews | `/hr/performance-reviews` | Workflow |
| Staff Achievement Link | `/hr/staff-achievement-link` | Report |
| Training History | `/hr/training-history` | Report |
| Employee Documents | `/hr/employee-documents` | Library |
| Transfers | `/hr/transfers` | Workflow |
| Promotions | `/hr/promotions` | Workflow |
| Separations | `/hr/separations` | Workflow |
| Exit Clearance | `/hr/exit-clearance` | Workflow |
| HR Reports | `/hr/hr-reports` | Report |
| Manpower Requisitions | `/hr/manpower-requisitions` | Workflow |
| Vacancies | `/hr/vacancies` | Registry |
| Applicants | `/hr/applicants` | Registry |
| Screening | `/hr/screening` | Workflow |
| Interview Schedule | `/hr/interview-schedule` | Calendar |
| Interview Assessments | `/hr/interview-assessments` | Workflow |
| Selection Recommendations | `/hr/selection-recommendations` | Workflow |
| Offers & Appointments | `/hr/offers-and-appointments` | Workflow |
| Joining & Verification | `/hr/joining-and-verification` | Workflow |
| Onboarding Checklists | `/hr/onboarding-checklists` | Workflow |

### 7. Payroll (`PY`)

Base path: `/payroll`  
Implemented screens: **14**

| Screen | Route | UI type |
|---|---|---|
| Payroll Dashboard | `/payroll/dashboard` | Dashboard |
| Salary Structures | `/payroll/salary-structures` | Registry |
| Salary Components | `/payroll/salary-components` | Registry |
| Payroll Periods | `/payroll/payroll-periods` | Registry |
| Payroll Runs | `/payroll/payroll-runs` | Workflow |
| Payroll Review Queue | `/payroll/payroll-review-queue` | Workflow |
| Salary Requests | `/payroll/salary-requests` | Workflow |
| Bank Instructions | `/payroll/bank-instructions` | Workflow |
| Payment Confirmations | `/payroll/payment-confirmations` | Workflow |
| Payslips | `/payroll/payslips` | Library |
| Project Salary Allocation | `/payroll/project-salary-allocation` | Report |
| Payroll Journals | `/payroll/payroll-journals` | Workflow |
| Payroll Variance | `/payroll/payroll-variance` | Report |
| Payroll Reports | `/payroll/payroll-reports` | Report |

### 8. E4BL Education (`ED`)

Base path: `/e4bl`  
Implemented screens: **32**

| Screen | Route | UI type |
|---|---|---|
| E4BL Dashboard | `/e4bl/dashboard` | Dashboard |
| Education Centres | `/e4bl/education-centres` | Registry |
| Academic Years | `/e4bl/academic-years` | Registry |
| Class Levels | `/e4bl/class-levels` | Registry |
| Subjects | `/e4bl/subjects` | Registry |
| Teacher Assignments | `/e4bl/teacher-assignments` | Registry |
| Students | `/e4bl/students` | Registry |
| Guardians | `/e4bl/guardians` | Registry |
| Admissions | `/e4bl/admissions` | Workflow |
| Annual Enrolments | `/e4bl/annual-enrolments` | Workflow |
| Student Attendance | `/e4bl/student-attendance` | Registry |
| Staff Attendance | `/e4bl/staff-attendance` | Registry |
| Class & Lesson Activity | `/e4bl/class-and-lesson-activity` | Registry |
| Teacher Daily Activity | `/e4bl/teacher-daily-activity` | Registry |
| Teacher Monthly Achievement | `/e4bl/teacher-monthly-achievement` | Workflow |
| Assessments | `/e4bl/assessments` | Registry |
| Examinations | `/e4bl/examinations` | Workflow |
| Results | `/e4bl/results` | Report |
| Promotions | `/e4bl/promotions` | Workflow |
| Dropout Intervention | `/e4bl/dropout-intervention` | Workflow |
| At-Risk Students | `/e4bl/at-risk-students` | Workflow |
| Home Visits | `/e4bl/home-visits` | Registry |
| Parent Meetings | `/e4bl/parent-meetings` | Calendar |
| Material Distributions | `/e4bl/material-distributions` | Workflow |
| Fees & Waivers | `/e4bl/fees-and-waivers` | Workflow |
| Education Events | `/e4bl/education-events` | Calendar |
| Teacher Training | `/e4bl/teacher-training` | Calendar |
| HSF Graduates | `/e4bl/hsf-graduates` | Registry |
| High-School Support | `/e4bl/high-school-support` | Workflow |
| Child Sponsorships | `/e4bl/child-sponsorships` | Workflow |
| Centre Requisitions | `/e4bl/centre-requisitions` | Workflow |
| Education Reports | `/e4bl/education-reports` | Report |

### 9. A2PHC Health (`HL`)

Base path: `/a2phc`  
Implemented screens: **29**

| Screen | Route | UI type |
|---|---|---|
| A2PHC Dashboard | `/a2phc/dashboard` | Dashboard |
| Camp Plans | `/a2phc/camp-plans` | Workflow |
| Health Camps | `/a2phc/health-camps` | Registry |
| Camp Calendar | `/a2phc/camp-calendar` | Calendar |
| Doctor Assignments | `/a2phc/doctor-assignments` | Registry |
| Supervisor Assignments | `/a2phc/supervisor-assignments` | Registry |
| Camp Teams | `/a2phc/camp-teams` | Registry |
| Patients | `/a2phc/patients` | Registry |
| Patient Visits | `/a2phc/patient-visits` | Workflow |
| Patient Registration | `/a2phc/patient-registration` | Workflow |
| Consultations | `/a2phc/consultations` | Workflow |
| Vitals | `/a2phc/vitals` | Registry |
| Diagnoses | `/a2phc/diagnoses` | Registry |
| Prescriptions | `/a2phc/prescriptions` | Workflow |
| Prescription Items | `/a2phc/prescription-items` | Registry |
| Medicine Issues | `/a2phc/medicine-issues` | Workflow |
| Tests & Advice | `/a2phc/tests-and-advice` | Registry |
| Referrals | `/a2phc/referrals` | Workflow |
| Follow-Ups | `/a2phc/follow-ups` | Workflow |
| High-Risk Cases | `/a2phc/high-risk-cases` | Workflow |
| Nutrition Sessions | `/a2phc/nutrition-sessions` | Registry |
| MHPSS Sessions | `/a2phc/mhpss-sessions` | Registry |
| Daily Camp Summaries | `/a2phc/daily-camp-summaries` | Report |
| Doctor Daily Summaries | `/a2phc/doctor-daily-summaries` | Report |
| Supervisor Achievement | `/a2phc/supervisor-achievement` | Workflow |
| Clinical Sign-Off Queue | `/a2phc/clinical-sign-off-queue` | Workflow |
| Camp Requisitions | `/a2phc/camp-requisitions` | Workflow |
| Health Reports | `/a2phc/health-reports` | Report |
| Health Data Quality | `/a2phc/health-data-quality` | Report |

### 10. Climate Action (`CA`)

Base path: `/climate`  
Implemented screens: **14**

| Screen | Route | UI type |
|---|---|---|
| Climate Dashboard | `/climate/dashboard` | Dashboard |
| Climate-Risk Locations | `/climate/climate-risk-locations` | Registry |
| Communities | `/climate/communities` | Registry |
| Youth Groups | `/climate/youth-groups` | Registry |
| Awareness Sessions | `/climate/awareness-sessions` | Registry |
| Climate Trainings | `/climate/climate-trainings` | Calendar |
| Adaptation Activities | `/climate/adaptation-activities` | Workflow |
| Seed Distributions | `/climate/seed-distributions` | Workflow |
| Farmer Support | `/climate/farmer-support` | Workflow |
| Tree & Restoration Activities | `/climate/tree-and-restoration-activities` | Workflow |
| Emergency Responses | `/climate/emergency-responses` | Workflow |
| Household Reach | `/climate/household-reach` | Registry |
| Climate Outcomes | `/climate/climate-outcomes` | Report |
| Climate Reports | `/climate/climate-reports` | Report |

### 11. Women Empowerment (`WE`)

Base path: `/women-empowerment`  
Implemented screens: **16**

| Screen | Route | UI type |
|---|---|---|
| Women Empowerment Dashboard | `/women-empowerment/dashboard` | Dashboard |
| Participants | `/women-empowerment/participants` | Registry |
| Menstrual Health Sessions | `/women-empowerment/menstrual-health-sessions` | Registry |
| Sanitary Product Distributions | `/women-empowerment/sanitary-product-distributions` | Workflow |
| Adolescent Sessions | `/women-empowerment/adolescent-sessions` | Registry |
| Maternal Health Sessions | `/women-empowerment/maternal-health-sessions` | Registry |
| Cancer Awareness Activities | `/women-empowerment/cancer-awareness-activities` | Registry |
| Rights Awareness | `/women-empowerment/rights-awareness` | Registry |
| Protection Referrals | `/women-empowerment/protection-referrals` | Workflow |
| Skills Trainings | `/women-empowerment/skills-trainings` | Calendar |
| Financial Literacy Sessions | `/women-empowerment/financial-literacy-sessions` | Registry |
| Livelihood Support | `/women-empowerment/livelihood-support` | Workflow |
| Entrepreneurship Support | `/women-empowerment/entrepreneurship-support` | Workflow |
| Community Engagement | `/women-empowerment/community-engagement` | Registry |
| Empowerment Outcomes | `/women-empowerment/empowerment-outcomes` | Report |
| Women Empowerment Reports | `/women-empowerment/women-empowerment-reports` | Report |

### 12. Inventory & Assets (`IN`)

Base path: `/inventory`  
Implemented screens: **23**

| Screen | Route | UI type |
|---|---|---|
| Inventory Dashboard | `/inventory/dashboard` | Dashboard |
| Item Master | `/inventory/item-master` | Registry |
| Item Categories | `/inventory/item-categories` | Registry |
| Units of Measure | `/inventory/units-of-measure` | Registry |
| Stores & Locations | `/inventory/stores-and-locations` | Registry |
| Medicines | `/inventory/medicines` | Registry |
| School Materials | `/inventory/school-materials` | Registry |
| Office Supplies | `/inventory/office-supplies` | Registry |
| Equipment & Furniture | `/inventory/equipment-and-furniture` | Registry |
| Fixed Assets | `/inventory/fixed-assets` | Registry |
| Stock Receipts | `/inventory/stock-receipts` | Workflow |
| Stock Issues | `/inventory/stock-issues` | Workflow |
| Stock Transfers | `/inventory/stock-transfers` | Workflow |
| Stock Returns | `/inventory/stock-returns` | Workflow |
| Batches | `/inventory/batches` | Registry |
| Expiry Alerts | `/inventory/expiry-alerts` | Report |
| Reorder Alerts | `/inventory/reorder-alerts` | Report |
| Repair & Maintenance | `/inventory/repair-and-maintenance` | Workflow |
| Damage & Disposal | `/inventory/damage-and-disposal` | Workflow |
| Asset Assignments | `/inventory/asset-assignments` | Workflow |
| Distributions | `/inventory/distributions` | Workflow |
| Inventory Reports | `/inventory/inventory-reports` | Report |
| Asset Register | `/inventory/asset-register` | Report |

### 13. Donors, CSR & Grants (`DN`)

Base path: `/donors`  
Implemented screens: **18**

| Screen | Route | UI type |
|---|---|---|
| Donor Dashboard | `/donors/dashboard` | Dashboard |
| Donors | `/donors/donors` | Registry |
| CSR Partners | `/donors/csr-partners` | Registry |
| Donor Profiles | `/donors/donor-profiles` | Profile |
| Proposals | `/donors/proposals` | Workflow |
| Grants | `/donors/grants` | Workflow |
| Agreements | `/donors/agreements` | Library |
| Restricted Funds | `/donors/restricted-funds` | Registry |
| Donations | `/donors/donations` | Workflow |
| Donation Receipts | `/donors/donation-receipts` | Workflow |
| Reporting Schedules | `/donors/reporting-schedules` | Calendar |
| Fund Utilization | `/donors/fund-utilization` | Report |
| Donor Communications | `/donors/donor-communications` | Registry |
| Renewals | `/donors/renewals` | Workflow |
| Sponsorships | `/donors/sponsorships` | Workflow |
| Funding Gaps | `/donors/funding-gaps` | Report |
| Donor Reports | `/donors/donor-reports` | Report |
| Donor Portal Preview | `/donors/donor-portal-preview` | Dashboard |

### 14. MEAL & Impact (`ME`)

Base path: `/meal`  
Implemented screens: **17**

| Screen | Route | UI type |
|---|---|---|
| MEAL Dashboard | `/meal/dashboard` | Dashboard |
| Results Frameworks | `/meal/results-frameworks` | Registry |
| Goals & Outcomes | `/meal/goals-and-outcomes` | Registry |
| Outputs | `/meal/outputs` | Registry |
| Activities | `/meal/activities` | Registry |
| Indicators | `/meal/indicators` | Registry |
| Baselines | `/meal/baselines` | Registry |
| Targets | `/meal/targets` | Registry |
| Achievements | `/meal/achievements` | Workflow |
| Monitoring Visits | `/meal/monitoring-visits` | Workflow |
| Evaluations | `/meal/evaluations` | Workflow |
| Beneficiary Feedback | `/meal/beneficiary-feedback` | Workflow |
| Evidence Review | `/meal/evidence-review` | Library |
| Data Quality Assessments | `/meal/data-quality-assessments` | Report |
| Monthly Impact Reports | `/meal/monthly-impact-reports` | Report |
| Annual Impact Reports | `/meal/annual-impact-reports` | Report |
| Donor Results Reports | `/meal/donor-results-reports` | Report |

### 15. Meetings & Communication (`MC`)

Base path: `/meetings`  
Implemented screens: **16**

| Screen | Route | UI type |
|---|---|---|
| Meeting Dashboard | `/meetings/dashboard` | Dashboard |
| Meetings | `/meetings/meetings` | Workflow |
| Meeting Calendar | `/meetings/meeting-calendar` | Calendar |
| Agendas | `/meetings/agendas` | Library |
| Participants | `/meetings/participants` | Registry |
| Attendance | `/meetings/attendance` | Registry |
| Meeting Minutes | `/meetings/meeting-minutes` | Library |
| Resolutions | `/meetings/resolutions` | Workflow |
| Action Items | `/meetings/action-items` | Workflow |
| Follow-Up Meetings | `/meetings/follow-up-meetings` | Calendar |
| Online Meeting Workspace | `/meetings/online-meeting-workspace` | Dashboard |
| Official Notices | `/meetings/official-notices` | Workflow |
| Office Orders | `/meetings/office-orders` | Library |
| Notice Acknowledgements | `/meetings/notice-acknowledgements` | Report |
| Internal Messages | `/meetings/internal-messages` | Registry |
| Communication Archive | `/meetings/communication-archive` | Library |

### 16. Training & Learning (`TR`)

Base path: `/training`  
Implemented screens: **17**

| Screen | Route | UI type |
|---|---|---|
| Training Dashboard | `/training/dashboard` | Dashboard |
| Training Needs | `/training/training-needs` | Registry |
| Annual Training Plan | `/training/annual-training-plan` | Workflow |
| Training Calendar | `/training/training-calendar` | Calendar |
| Training Sessions | `/training/training-sessions` | Workflow |
| Trainers | `/training/trainers` | Registry |
| Participant Nominations | `/training/participant-nominations` | Workflow |
| Training Attendance | `/training/training-attendance` | Registry |
| Pre & Post Assessments | `/training/pre-and-post-assessments` | Workflow |
| Feedback | `/training/feedback` | Registry |
| Certificates | `/training/certificates` | Library |
| Training Reports | `/training/training-reports` | Report |
| Training Material Library | `/training/training-material-library` | Library |
| Presentations | `/training/presentations` | Library |
| Manuals & Guides | `/training/manuals-and-guides` | Library |
| Video Resources | `/training/video-resources` | Library |
| Policies & Handouts | `/training/policies-and-handouts` | Library |

### 17. Documents & Evidence (`DC`)

Base path: `/documents`  
Implemented screens: **16**

| Screen | Route | UI type |
|---|---|---|
| Document Dashboard | `/documents/dashboard` | Dashboard |
| All Documents | `/documents/all-documents` | Library |
| Document Categories | `/documents/document-categories` | Settings |
| Policies | `/documents/policies` | Library |
| Agreements | `/documents/agreements` | Library |
| Financial Evidence | `/documents/financial-evidence` | Library |
| Programme Evidence | `/documents/programme-evidence` | Library |
| Employee Documents | `/documents/employee-documents` | Library |
| Education Documents | `/documents/education-documents` | Library |
| Health Documents | `/documents/health-documents` | Library |
| Document Approvals | `/documents/document-approvals` | Workflow |
| Expiring Documents | `/documents/expiring-documents` | Report |
| Private Documents | `/documents/private-documents` | Library |
| Document Versions | `/documents/document-versions` | Library |
| Retention Schedule | `/documents/retention-schedule` | Settings |
| Document Audit History | `/documents/document-audit-history` | Report |

### 18. Reports & Analytics (`RP`)

Base path: `/reports`  
Implemented screens: **22**

| Screen | Route | UI type |
|---|---|---|
| Reports Dashboard | `/reports/dashboard` | Dashboard |
| Executive Dashboard | `/reports/executive-dashboard` | Dashboard |
| Pending Approvals | `/reports/pending-approvals` | Report |
| Deadline & Risk Report | `/reports/deadline-and-risk-report` | Report |
| Project Management Reports | `/reports/project-management-reports` | Report |
| Project Achievement Reports | `/reports/project-achievement-reports` | Report |
| Financial Reports | `/reports/financial-reports` | Report |
| Budget versus Actual | `/reports/budget-versus-actual` | Report |
| HR Reports | `/reports/hr-reports` | Report |
| Payroll Reports | `/reports/payroll-reports` | Report |
| Education Reports | `/reports/education-reports` | Report |
| Health Reports | `/reports/health-reports` | Report |
| Procurement Reports | `/reports/procurement-reports` | Report |
| Inventory Reports | `/reports/inventory-reports` | Report |
| Donor Reports | `/reports/donor-reports` | Report |
| MEAL & Impact Reports | `/reports/meal-and-impact-reports` | Report |
| Meeting Action Reports | `/reports/meeting-action-reports` | Report |
| Notice Acknowledgement Reports | `/reports/notice-acknowledgement-reports` | Report |
| Audit Reports | `/reports/audit-reports` | Report |
| Data Quality Reports | `/reports/data-quality-reports` | Report |
| Custom Report Builder | `/reports/custom-report-builder` | Settings |
| Scheduled Exports | `/reports/scheduled-exports` | Settings |

### 19. Administration & System (`AD`)

Base path: `/administration`  
Implemented screens: **29**

| Screen | Route | UI type |
|---|---|---|
| Administration Dashboard | `/administration/dashboard` | Dashboard |
| Organization Profile | `/administration/organization-profile` | Profile |
| Users | `/administration/users` | Registry |
| User Invitations | `/administration/user-invitations` | Workflow |
| Roles | `/administration/roles` | Registry |
| Permissions | `/administration/permissions` | Registry |
| User Role Assignments | `/administration/user-role-assignments` | Registry |
| Project Access | `/administration/project-access` | Registry |
| Location Access | `/administration/location-access` | Registry |
| Account Status | `/administration/account-status` | Workflow |
| Approval Matrix | `/administration/approval-matrix` | Settings |
| Workflow Configuration | `/administration/workflow-configuration` | Settings |
| Separation of Duties | `/administration/separation-of-duties` | Settings |
| Fiscal Years | `/administration/fiscal-years` | Settings |
| Financial Periods | `/administration/financial-periods` | Settings |
| Document Numbering | `/administration/document-numbering` | Settings |
| Status Values | `/administration/status-values` | Settings |
| Units of Measure | `/administration/units-of-measure` | Settings |
| Master Data | `/administration/master-data` | Settings |
| Notification Preferences | `/administration/notification-preferences` | Settings |
| Integrations | `/administration/integrations` | Settings |
| Security Settings | `/administration/security-settings` | Settings |
| Localization | `/administration/localization` | Settings |
| Bangla & English Labels | `/administration/bangla-and-english-labels` | Settings |
| Audit Log | `/administration/audit-log` | Report |
| System Health | `/administration/system-health` | Dashboard |
| Data Import Centre | `/administration/data-import-centre` | Workflow |
| Backup & Recovery | `/administration/backup-and-recovery` | Settings |
| Module Catalogue | `/administration/module-catalogue` | Library |

## Implementation boundary

The current release intentionally does not implement live authentication, authorization enforcement, persistence, calculations, approvals, financial posting, clinical processing, payroll, notifications, exports, uploads, or integrations. Those capabilities must be implemented module by module against the approved canonical documentation and open-decision register.
