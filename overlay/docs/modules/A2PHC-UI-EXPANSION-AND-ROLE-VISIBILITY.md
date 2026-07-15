# A2PHC UI Expansion and Role-Aware Module Visibility

**Release:** `v0.1.5`  
**Baseline:** HSF ERP complete responsive UI blueprint `v0.1.4`  
**Status:** UI presentation patch only  
**Business functionality:** Not implemented

## Purpose

This patch expands A2PHC from a generic route catalogue into a dedicated, mobile-first field-operations experience while preserving every non-A2PHC interface.

It also adds a UI preview for role-aware module visibility. The selected role changes which module links and A2PHC options are visible.

## Non-negotiable boundary

This release does **not** implement authentication, server authorization, database row-level security, project assignment, location assignment, clinical persistence, finance posting, or real patient records.

Menu hiding is usability. It is not security.

## A2PHC operating model represented

```text
One MBBS Doctor
+
One Medical Supervisor
+
One mobile field team
+
Assigned district, union, village or char
```

Current districts:

- Bogura
- Manikganj
- Narail
- Habiganj
- Mymensingh

Current programme rule:

> Patients receive free MBBS consultation and prescription. Regular medicine dispensing remains disabled because there is no approved regular medicine budget.

## Expanded A2PHC navigation

The patch adds dedicated UI groups for:

1. Overview
2. Coverage and Teams
3. Camp Operations
4. Patients
5. Clinical Care
6. Equipment and Resources
7. Field Finance
8. Achievement and Reports
9. Configuration

The A2PHC module connects the presentation flow:

```text
Camp plan
→ Team and route assignment
→ Equipment readiness
→ Patient registration
→ Patient visit
→ Doctor consultation
→ Prescription / test / referral / follow-up
→ Clinical sign-off
→ Daily summary
→ Field expense and evidence
→ Requisition / MFR traceability
→ Monthly project reporting
```

## Role-visibility examples

| Role | A2PHC | E4BL | Finance | Other programme modules |
|---|---:|---:|---:|---:|
| Executive / CEO | Visible | Visible | Visible | Visible |
| A2PHC Coordinator | Visible | Hidden | Limited supporting routes | Hidden unless assigned |
| Medical Supervisor | Assigned A2PHC field options | Hidden | Hidden | Hidden |
| General Physician | Clinical A2PHC options | Hidden | Hidden | Hidden |
| E4BL Coordinator | Hidden | Visible | Limited supporting routes | Hidden unless assigned |
| Head Teacher / Teacher | Hidden | Assigned education options | Hidden | Hidden |
| Finance Director / Officer | Supporting finance and requisition routes | No programme workspaces by default | Visible | Supporting records only |
| Auditor | Controlled read-only presentation | Controlled | Controlled | Controlled |
| Donor Viewer | Privacy-safe summaries only | Privacy-safe summaries only | No confidential finance workspace | Restricted |
| System Administrator | System configuration | No automatic business authority | No automatic approval authority | Configuration only |

## Added source files

```text
apps/web/src/app/a2phc/[[...slug]]/page.tsx
apps/web/src/app/template.tsx
apps/web/src/components/a2phc/a2phc-module.tsx
apps/web/src/components/a2phc/a2phc-module.module.css
apps/web/src/components/role-visibility/role-visibility-preview.tsx
apps/web/src/components/role-visibility/role-visibility-preview.module.css
apps/web/src/lib/a2phc-catalog.ts
apps/web/src/lib/portal-role-access.ts
```

## Other UI modules

No E4BL, Climate Action, Women Empowerment, Finance, HR, Payroll, Procurement, Inventory, Donor, MEAL, Meeting, Training, Document, Report, or Administration page is redesigned by this patch.

The global addition is limited to the role-visibility preview layer.

## Validation target

```bash
pnpm verify:structure
pnpm verify:sensitive
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:run
pnpm --filter @hsf/web build
```

Also review desktop, tablet, and mobile navigation for at least:

- Executive
- A2PHC Coordinator
- Medical Supervisor
- General Physician
- E4BL Coordinator
- Head Teacher
- Teacher
- Finance Director
- Auditor
