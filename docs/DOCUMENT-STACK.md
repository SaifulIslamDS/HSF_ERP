# HSF ERP Canonical Document Stack

## Purpose

This file defines which documents Codex and contributors must read, how they
relate to one another, and which source wins when documents conflict.

## Tier 0 — Repository instructions

1. `AGENTS.md`

This file controls repository-wide working rules, technology constraints,
security, quality gates, and documentation discipline.

## Tier 1 — Current execution state

1. `docs/CURRENT-STATUS.md`
2. `docs/codex/NEXT-TASK.md`
3. `docs/codex/WORKING-AGREEMENT.md`

These files answer:

- What is already complete?
- What is not complete?
- What is the single current task?
- What must Codex return?

## Tier 2 — Product truth

1. `docs/product/HSF-ERP-PRODUCT-VISION.md`
2. `docs/PRODUCT-REQUIREMENTS.md`
3. `docs/product/OPEN-PRODUCT-DECISIONS.md`
4. `docs/DECISIONS-AND-OPEN-ITEMS.md`

The Product Vision explains the institutional intent and end-to-end operating
model. The PRD provides structured requirements. Open-decision documents
identify matters that must not be invented.

## Tier 3 — System design

1. `docs/MASTER-SYSTEM-DESIGN.md`
2. `docs/ARCHITECTURE.md`
3. `docs/DATA-MODEL.md`
4. `docs/RBAC-AND-APPROVALS.md`
5. `docs/PHASE-1-SCOPE.md`
6. `docs/FINANCE-WORKFLOWS.md`
7. `docs/UI-BLUEPRINT-AND-ROUTE-MAP.md`
8. `docs/PREVIEW-PIN-ACCESS-GATE.md`

These files control implementation architecture, data boundaries, access,
approval, initial finance scope, and the approved management-facing UI route
contract. The UI route map does not override unresolved product or business
decisions.

## Tier 4 — Operating workflows and modules

### Cross-cutting workflows

- `docs/workflows/END-TO-END-OPERATING-LIFECYCLE.md`
- `docs/workflows/STAFF-ACHIEVEMENT-REPORTING.md`
- `docs/workflows/FIELD-REQUISITION-TO-MFR.md`
- `docs/OPERATIONS-AND-WORKFLOWS.md`

### Programme modules

- `docs/modules/E4BL-OPERATING-MODEL.md`
- `docs/modules/A2PHC-OPERATING-MODEL.md`
- `docs/modules/DOCTOR-CLINICAL-INPUT-RECOMMENDATION.md`

## Tier 5 — Decisions, releases, and history

- `docs/decisions/`
- `docs/releases/`
- `docs/archive/`

An approved ADR overrides an earlier architecture assumption. A release note
records what shipped but does not override current product requirements.

## Conflict-resolution rules

When two documents conflict:

1. Follow `AGENTS.md` for repository process.
2. Follow `CURRENT-STATUS.md` for the current implementation state.
3. Follow the explicitly approved current task for task scope.
4. Follow the latest approved product requirement for business behavior.
5. Treat anything marked **Recommendation**, **Proposed**, **Draft**, or
   **Open Decision** as unapproved.
6. Do not infer approval from the existence of a design document.
7. Record the conflict and request a decision rather than guessing.

## Update rules

When behavior changes:

- Update the relevant module or workflow document.
- Update `PRODUCT-REQUIREMENTS.md` when a requirement changes.
- Update `DATA-MODEL.md` when an approved domain model changes.
- Add an ADR for architecture decisions.
- Update `CURRENT-STATUS.md`.
- Update `UI-BLUEPRINT-AND-ROUTE-MAP.md` when routes or reusable UI contracts change.
- Add or update the release note when versioned.
