# HSF ERP

## RBAC, Segregation of Duties, and Approval Matrix

**Document status:** Draft v1.0  
**Purpose:** Define who can see, create, review, approve, post, close, and export HSF ERP records

---

# 1. Access-Control Model

HSF ERP access is determined by:

```text
Role Permission
× Project Scope
× Location Scope
× Record Status
× Approval Authority
× Data Sensitivity
```

A role alone is not sufficient.

Example:

A Medical Supervisor may have permission to create patient visits, but only for:

- A2PHC
- Assigned districts or service points
- Open camps
- Non-restricted fields

---

# 2. Standard Roles

| Code           | Role                    |
| -------------- | ----------------------- |
| SYS_ADMIN      | System Administrator    |
| CHAIRMAN       | Chairman                |
| CEO            | Chief Executive Officer |
| FIN_DIR        | Finance Director        |
| FIN_OFF        | Finance Officer         |
| HR_OFF         | HR Officer              |
| ADMIN_ASST     | Admin Assistant         |
| PROJECT_COORD  | Project Coordinator     |
| MONITORING_OFF | Monitoring Officer      |
| HEAD_TEACHER   | Head Teacher            |
| TEACHER        | Teacher                 |
| MED_SUPERVISOR | Medical Supervisor      |
| PHYSICIAN      | General Physician       |
| STOREKEEPER    | Storekeeper             |
| DATA_ENTRY     | Data Entry Officer      |
| AUDITOR        | Auditor                 |
| BOARD_VIEWER   | Board Viewer            |
| DONOR_VIEWER   | Donor Viewer            |

---

# 3. Permission Categories

## 3.1 Actions

- View
- Create
- Edit Draft
- Submit
- Review
- Recommend
- Approve
- Reject
- Return
- Disburse
- Verify
- Post
- Reconcile
- Close
- Reopen
- Export
- Configure
- Archive

## 3.2 Data scopes

- Own records
- Assigned project
- Assigned location
- Department
- Organization-wide
- Restricted read-only
- Confidential
- Medical restricted
- Child restricted

---

# 4. Segregation of Duties Principles

1. A requester cannot final-approve the same request.
2. A project coordinator cannot perform final finance verification of their own project expense.
3. A bank reconciliation preparer should not be the sole approver.
4. Payroll preparation and payroll final approval should be separated.
5. User-role changes require administrator authority and audit.
6. Period reopening requires higher authority than period preparation.
7. Patient clinical records may only be edited by authorized clinical users.
8. Donor viewers may never access employee salary, patient identity, or unrestricted beneficiary records.
9. Auditors are read-only.
10. Posted financial records require reversal, not direct edit.

---

# 5. Finance Permission Matrix

Legend:

- C = Create
- V = View
- S = Submit
- R = Review
- A = Approve
- D = Disburse
- P = Post
- X = Export
- — = No access

| Function               |     Chairman |          CEO | Finance Director | Finance Officer | Project Coordinator |  Field User | Auditor |
| ---------------------- | -----------: | -----------: | ---------------: | --------------: | ------------------: | ----------: | ------: |
| Annual budget          |          V/A |          V/R |              C/R |               C |                 V/S |           — |     V/X |
| Budget revision        |            A |            R |              C/R |               C |                 V/S |           — |     V/X |
| MFR draft              |            V |            V |                V |               C |                   C |           — |       V |
| MFR submit             |            — |            — |                S |               S |                   S |           — |       — |
| Budget check           |            V |            V |                R |               R |                   — |           — |       V |
| Finance recommendation |            V |            V |              A/R |               R |                   — |           — |       V |
| CEO recommendation     |            V |          A/R |                V |               — |                   — |           — |       V |
| Final MFR approval     |            A | Configurable |                V |               — |                   — |           — |       V |
| Disbursement           |            V |            V |                A |             D/C |                   V | Acknowledge |       V |
| PR creation            |            V |            V |                V |               C |                   C |   C limited |       V |
| PR approval            | A high value |          A/R |                R |               R |                   — |           — |       V |
| IOU issue              |            V |            V |                A |             C/D |                   V |   Recipient |       V |
| Expense submission     |            V |            V |                V |               C |                   C |           C |       V |
| Expense verification   |            V |            V |              A/R |               R |                   — |           — |       V |
| Voucher posting        |            V |            V |              A/P |  P configurable |                   — |           — |       V |
| Bank reconciliation    |            V |            V |                A |             C/R |                   — |           — |     V/X |
| Period close           |            V |            A |              C/R |         Prepare |                   — |           — |       V |
| Period reopen          |            A |          A/R |          Request |               — |                   — |           — |       V |

Final approval levels should be configurable by amount.

---

# 6. HR and Payroll Matrix

| Function             |       Chairman | CEO | Finance Director | HR Officer | Project Coordinator |       Employee |
| -------------------- | -------------: | --: | ---------------: | ---------: | ------------------: | -------------: |
| Manpower requisition |              V |   A |     Budget check |        C/R |                 C/S |              — |
| Vacancy approval     |   A high level |   A |                V |          R |                   V |              — |
| Candidate management |              — |   V |                — |        C/R |           Interview | Applicant only |
| Appointment approval | A/Configurable | A/R |     Salary check |        C/R |           Recommend |              — |
| Employee master      |              V |   V |      Salary view |     C/Edit | Assigned staff view |            Own |
| Attendance           |              V |   V |                V |          R |    Approve assigned |     Own submit |
| Salary structure     |              V |   A |              C/R |          R |           V limited |       Own read |
| Payroll prepare      |              V |   V |                R |          C |                   — |              — |
| Payroll approve      | A/Configurable |   A |                R |          — |                   — |              — |
| Bank instruction     |              V |   V |                A |          C |                   — |              — |
| Payslip              |              — |   — |                V |          V |                   — |            Own |

---

# 7. E4BL Permission Matrix

| Function              | Education Coordinator |  Head Teacher |        Teacher |   Finance |        CEO |                  Donor Viewer |
| --------------------- | --------------------: | ------------: | -------------: | --------: | ---------: | ----------------------------: |
| Centre master         |                     R |             V |              V |         V |          A |                             — |
| Student admission     |                   A/R |           C/S |      C limited |         — |          V |                             — |
| Student profile       |                V/Edit | V/Edit centre |        V class |         — |          V |                    Restricted |
| Attendance            |                   V/R |           C/R |              C |         — |          V |                Aggregate only |
| Exam and result       |                   V/R |           C/R |              C |         — |          V |                Aggregate only |
| Material distribution |                   V/R |             C |              C |    V cost |          V |                Aggregate only |
| Fee collection        |                     V |             C |              — |         R |          V |                             — |
| HSF Graduate          |                   C/R |             C |              V | V support |          V |                    Restricted |
| Sponsorship           |                     V |     V limited |              — |         V |          V | Own supported student summary |
| Safeguarding record   |            Restricted |    Restricted | Limited report |         — | Restricted |                             — |

---

# 8. A2PHC Permission Matrix

| Function                  | Health Coordinator | Medical Supervisor |    Physician | Data Officer |     Finance |        CEO |
| ------------------------- | -----------------: | -----------------: | -----------: | -----------: | ----------: | ---------: |
| Camp plan                 |                A/R |                C/S |            V |            V | Budget view |          V |
| Patient registration      |                  V |                  C |    C limited |          C/R |           — |  Aggregate |
| Patient identity          |                  V |         V assigned |   V assigned |   V assigned |           — | Restricted |
| Clinical visit            |                  V |                  V |   C/Edit own |    V limited |           — |  Aggregate |
| Diagnosis                 |                  V |                  V |   C/Edit own |            — |           — |  Aggregate |
| Prescription              |                  V |                  V |   C/Edit own |            — |           — |  Aggregate |
| Medicine issue            |                  V |                  C |      Request |            C |  Stock cost |  Aggregate |
| Referral                  |                  V |                  C |            C |            V |           — |  Aggregate |
| Health report             |                C/R |                  C |            V |            C |   Cost view |          V |
| Medical restricted export |            Special |      No by default | Own assigned |      Special |           — |          — |

---

# 9. Approval Threshold Model

The final amounts are not yet approved. The system should support configurable tiers.

Example structure:

| Tier |               Amount Range | Required Approval                 |
| ---- | -------------------------: | --------------------------------- |
| T1   | Up to configured low limit | Finance + Project Authority       |
| T2   |               Medium limit | Finance Director + CEO            |
| T3   |                 High limit | CEO + Chairman                    |
| T4   |  Exceptional or unbudgeted | Special recommendation + Chairman |

Rules may also vary by:

- Project
- Donor
- Procurement category
- Capital asset
- Emergency expenditure
- Additional MFR
- Restricted fund

---

# 10. Record-Level Rules

## 10.1 Draft

Creator and authorized reviewers may edit.

## 10.2 Submitted

Creator may not edit unless returned.

## 10.3 Approved

No normal edits. Use amendment or revision workflow.

## 10.4 Posted

No direct edit. Use reversal and reposting.

## 10.5 Closed period

No transaction edit without authorized reopening.

## 10.6 Sensitive records

Patient, child safeguarding, salary, donor KYC, and bank details require field-level masking and access checks.

---

# 11. Emergency Delegation

The system should support temporary delegated authority.

Required fields:

- Delegator
- Delegate
- Role or permission
- Start time
- End time
- Reason
- Approved by
- Scope
- Audit log

Delegation must not allow a user to bypass segregation of duties.

---

# 12. Approval Audit Requirements

Every decision must record:

- Record
- Workflow step
- Approver
- Role
- Decision
- Comment
- Date and time
- Previous status
- New status
- Delegation status
- IP and device metadata where appropriate

---

# 13. Recommended Initial Role Assignment

This is provisional and must be confirmed by HSF:

- Chairman → CHAIRMAN
- CEO → CEO
- Finance Director → FIN_DIR
- Finance team members → FIN_OFF
- Four project coordinators → PROJECT_COORD with project-specific access
- Admin Assistant → ADMIN_ASST
- School head teachers → HEAD_TEACHER
- Teachers → TEACHER
- Five medical supervisors → MED_SUPERVISOR
- Five general physicians → PHYSICIAN
- External auditor → AUDITOR
