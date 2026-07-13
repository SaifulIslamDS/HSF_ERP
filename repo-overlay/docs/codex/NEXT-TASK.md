# Codex Task 001 — Audit the Current Baseline and Prepare the Phase 1A Access-Control Plan

## Purpose

Establish a trustworthy view of the repository after the initial UI releases
and prepare a small, implementation-ready plan for authentication,
organization context, project/location assignment, and RBAC.

This task must not implement the ERP feature set yet.

## Controlling documents

Read:

1. `AGENTS.md`
2. `docs/CURRENT-STATUS.md`
3. `docs/DOCUMENT-STACK.md`
4. `docs/product/HSF-ERP-PRODUCT-VISION.md`
5. `docs/PRODUCT-REQUIREMENTS.md`
6. `docs/ARCHITECTURE.md`
7. `docs/DATA-MODEL.md`
8. `docs/RBAC-AND-APPROVALS.md`
9. `docs/product/OPEN-PRODUCT-DECISIONS.md`
10. `docs/codex/WORKING-AGREEMENT.md`

## Scope

1. Inspect the complete repository and current Git status.
2. Confirm the actual package versions, application boundaries, workspace
   packages, Prisma schema, existing authentication package, UI routes, tests,
   and deployment configuration.
3. Run the existing repository validation:
   - `pnpm verify:structure`
   - `pnpm verify:sensitive`
   - `pnpm format:check`
   - `pnpm lint`
   - `pnpm typecheck`
   - `pnpm test:run`
   - `pnpm build`
4. Run package-specific commands where needed to isolate failures.
5. Fix only confirmed repository-foundation defects that block the audit.
6. Do not implement authentication or ERP business features in this task.
7. Compare the current codebase with the canonical document stack.
8. Prepare an implementation recommendation for Phase 1A covering:
   - authentication architecture
   - session and API authentication strategy
   - organization membership
   - role assignment
   - project assignment
   - location assignment
   - permission evaluation
   - separation of duties
   - audit logging
9. Present authentication options and trade-offs. Do not silently choose an
   option when owner approval is required.
10. Divide the recommended implementation into small Codex tasks with explicit
    acceptance criteria.
11. Update:
    - `docs/CURRENT-STATUS.md`
    - `docs/product/OPEN-PRODUCT-DECISIONS.md`
      only where the audit provides confirmed information.

## Excluded

- Authentication implementation
- Login UI implementation
- Database migrations for new business features
- Finance workflows
- Staff achievement implementation
- Field requisition implementation
- E4BL implementation
- A2PHC implementation
- Real HSF data
- Production backend deployment
- Tagging or releasing

## Acceptance criteria

- The current repository state is accurately documented.
- All validation commands and results are reported truthfully.
- Any foundation fix remains small and in scope.
- Current authentication and RBAC code is inventoried.
- At least two viable authentication approaches are evaluated.
- One recommended approach is identified with reasons and risks.
- The recommendation explains how Next.js and NestJS will share identity and
  authorization.
- Organization, project, location, role, permission, and audit boundaries are
  mapped.
- Phase 1A is divided into small implementation tasks.
- No ERP business feature is implemented.
- No sensitive data is committed.
- Documentation reflects confirmed findings only.

## Required report

Return:

1. Repository and Git status
2. Environment and package versions
3. Current application and package architecture
4. Current Prisma and authentication inventory
5. Commands run
6. Validation results
7. Foundation fixes, if any
8. Authentication option comparison
9. Recommended Phase 1A architecture
10. Proposed small-task sequence
11. Open decisions requiring user approval
12. Files changed
13. Remaining warnings
14. Whether this task passed its acceptance criteria
