# Codex Task 002 — Management Review and First Functional Vertical-Slice Selection

## Purpose

Review the complete HSF ERP management UI blueprint, correct confirmed visual or
route gaps, and select the first small functional vertical slice to implement.

The complete UI is already present. This task must not attempt to implement the
whole ERP.

## Controlling documents

Read:

1. `AGENTS.md`
2. `docs/CURRENT-STATUS.md`
3. `docs/DOCUMENT-STACK.md`
4. `docs/UI-BLUEPRINT-AND-ROUTE-MAP.md`
5. `docs/product/HSF-ERP-PRODUCT-VISION.md`
6. `docs/PRODUCT-REQUIREMENTS.md`
7. `docs/ARCHITECTURE.md`
8. `docs/DATA-MODEL.md`
9. `docs/RBAC-AND-APPROVALS.md`
10. `docs/product/OPEN-PRODUCT-DECISIONS.md`

## Scope

1. Run and inspect the complete responsive UI.
2. Confirm navigation, route coverage, mobile behavior, synthetic-data labels,
   and visual consistency.
3. Fix only confirmed UI defects or route omissions.
4. Prepare three candidate first vertical slices with dependencies, risks, and
   acceptance criteria.
5. Recommend one small first slice for product-owner approval.

## Excluded

- Full authentication implementation
- Full RBAC implementation
- Any complete finance, HR, E4BL, A2PHC, procurement, payroll, donor, or MEAL
  module
- Production data or credentials
- Destructive database or Git actions
- Commit, push, tag, release, or deployment without explicit approval

## Acceptance criteria

- Every documented base route opens without a runtime error.
- Desktop, tablet, and mobile navigation remain usable.
- No preview screen presents synthetic data as real HSF data.
- Any route-map change is reflected in both the route catalogue and the UI route
  document.
- The recommended next slice is small, testable, and does not silently close an
  open product decision.

## Required report

Return the reviewed routes, defects fixed, validation results, candidate slices,
recommended slice, open decisions, and exact files changed.
