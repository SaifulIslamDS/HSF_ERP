# A2PHC Continuation Handover — v0.1.5

## 1. Purpose

This document preserves the complete project context after the A2PHC UI
expansion and role-aware module-visibility patch.

It is the primary handover document for future ChatGPT and Codex sessions.

## 2. Current baseline

Expected release:

```text
v0.1.5 — A2PHC UI Expansion and Role-Aware Module Visibility
```

Verify the actual Git branch, commit, and tag before assuming the release was
applied successfully.

## 3. Current system state

### Complete

- Full HSF ERP management UI blueprint
- Existing non-A2PHC routes and designs
- Expanded A2PHC module UI
- Mobile-oriented Supervisor and Doctor workspaces
- A2PHC route catalogue
- UI-only role and module visibility preview
- E4BL and A2PHC menu separation in the preview
- Synthetic demonstration data
- A2PHC documentation and release note

### Not implemented

- Real authentication
- Real user session
- Persistent roles and permissions
- Project and location assignments
- Server-side route protection
- API authorization
- Patient database
- Camp database
- Doctor consultation persistence
- Prescription generation from stored records
- Equipment persistence
- Field-expense persistence
- Requisition and MFR integration
- File uploads
- Offline synchronization
- Audit persistence
- Notifications
- Real reports and exports

## 4. Permanent A2PHC operating facts

A2PHC currently operates free mobile medical-camp services in five districts:

1. Bogura
2. Manikganj
3. Narail
4. Habiganj
5. Mymensingh

Each field team normally includes:

- one MBBS Doctor;
- one Medical Supervisor.

The Supervisor travels between unions and communities, commonly by motorcycle.
Travel may also require local transport or boat fare for char and river-access
areas.

HSF purchases approved medical equipment or provides approved funds for local
purchase.

## 5. Current medicine rule

Current operating truth:

> A2PHC provides free MBBS consultation and prescription. It does not currently
> have a regular approved medicine budget.

Therefore:

```text
Prescription UI: Enabled
Medicine-dispensing UI: Disabled / Future
Medicine inventory: Not functional
```

Historical HSF activity may include medicine support. Historical activity must
not be used to claim that routine medicine dispensing is currently active.

Future medicine activation requires approved:

- budget;
- procurement;
- batch and expiry controls;
- storage responsibility;
- prescription-to-issue link;
- stock reconciliation;
- audit rules.

## 6. Core record boundaries

### Patient Master is not Patient Visit

One patient can have multiple visits.

```text
Patient Master
    ├── Visit 1
    ├── Visit 2
    └── Visit 3
```

### Supervisor and Doctor responsibilities are separate

Supervisor:

- searches or registers the patient;
- opens the Patient Visit;
- records approved operational and basic measurement data;
- manages the queue;
- records camp, travel, equipment, expense, and daily summary information.

Doctor:

- opens the same Patient Visit;
- records clinical review;
- records diagnosis or provisional diagnosis;
- prepares prescription;
- adds test, referral, and follow-up advice;
- signs off the clinical record.

The Doctor must not re-enter the full patient list.

### Field Requisition is not MFR

```text
Supervisor Field Requisition
→ Project Coordinator Review and Consolidation
→ A2PHC MFR
→ Finance Review
→ Management Approval
→ Disbursement
```

## 7. UI preservation rule

All non-A2PHC UI modules must remain untouched unless the current approved task
explicitly includes a shared component required by the task.

Protected from unrelated redesign:

- E4BL
- Climate Action
- Women Empowerment
- Finance
- HR
- Payroll
- Procurement
- Inventory
- Donor and Grant
- MEAL
- Meetings
- Training
- Documents
- Reports
- Administration

A global authentication or navigation change may affect shared infrastructure,
but must not change unrelated module content, route contracts, or visual design.

## 8. Role and module separation

Programme-specific users should not see unrelated programme workspaces.

Examples:

```text
Teacher / Head Teacher
→ E4BL visible
→ A2PHC hidden

Medical Supervisor / Doctor
→ A2PHC visible according to role
→ E4BL hidden

Executive / authorized senior management
→ organization-wide visibility

System Administrator
→ system configuration
→ no automatic clinical or financial approval authority
```

This rule must eventually be enforced on the server, not only in the menu.

## 9. Privacy boundary

A2PHC contains medical information.

Never use real patient data in:

- source code;
- tests;
- screenshots;
- seed files;
- demo accounts;
- documentation examples;
- public logs.

Finance users should not automatically see full clinical records.
Management dashboards should prefer aggregated data unless detailed access is
approved and necessary.

## 10. Functional implementation sequence

Recommended sequence:

```text
1. Verify v0.1.5 baseline
2. Authentication and secure session
3. Internal user, role, project, and location assignments
4. Server-side route and API authorization
5. A2PHC geographic and team master data
6. Camp planning and assignment
7. Patient Master and Patient Visit
8. Supervisor registration and queue
9. Doctor consultation and sign-off
10. Daily camp and monthly achievement reports
11. Equipment and field expense
12. Requisition and MFR integration
13. Offline field support
14. Production hardening and pilot
```

## 11. Recommended pilot

```text
One district
→ One Doctor
→ One Supervisor
→ Selected unions
→ One reporting month
```

The pilot should evaluate:

- patient registration time;
- duplicate detection;
- Doctor usability;
- internet and offline conditions;
- report accuracy;
- privacy;
- training requirement;
- field support burden.

## 12. Handover warning

Do not tell Codex:

```text
Build the complete functional A2PHC app.
```

Use one vertical slice at a time with explicit acceptance criteria, tests,
security review, and documentation updates.
