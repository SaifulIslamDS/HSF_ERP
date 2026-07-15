# Codex Working Instructions — A2PHC Functionalization

## 1. Role

Act as the repository implementation and validation agent for HSF ERP.

Follow `AGENTS.md` first.

This document adds A2PHC-specific instructions. It does not replace the
repository-wide rules.

## 2. Permanent scope boundary

The current A2PHC work must not redesign or rewrite unrelated modules.

Do not change E4BL or another programme merely because shared navigation exists.

A shared file may be changed only when required by the approved task, and its
impact on all modules must be tested.

## 3. Read before every A2PHC task

1. `AGENTS.md`
2. `docs/CURRENT-STATUS.md`
3. `docs/A2PHC-CURRENT-STATUS-v0.1.5.md`
4. `docs/A2PHC-CONTINUATION-HANDOVER-v0.1.5.md`
5. `docs/modules/A2PHC-UI-EXPANSION-AND-ROLE-VISIBILITY.md`
6. `docs/A2PHC-FUNCTIONAL-ROADMAP.md`
7. `docs/product/A2PHC-OPEN-DECISIONS.md`
8. current `docs/codex/NEXT-TASK*.md`
9. relevant architecture, data-model, RBAC, workflow, and release documents
10. relevant code and tests

## 4. Working method

For each task:

1. Inspect Git status and current branch.
2. Inspect the existing implementation.
3. State task understanding.
4. State implementation plan.
5. List expected files.
6. Identify assumptions and open decisions.
7. Implement only the approved scope.
8. Add tests.
9. Run required validation.
10. Review the full diff.
11. Fix confirmed in-scope findings.
12. Update current status and relevant documentation.
13. Return the required final report.

Do not stop after writing a plan unless a genuine blocker exists.

## 5. Stop conditions

Stop and request a product-owner decision when:

- mandatory clinical fields are unresolved;
- a patient-safety rule is required;
- privacy or consent policy is unresolved;
- financial authority is unknown;
- a destructive migration is required;
- real HSF data or credentials are required;
- canonical documents conflict materially;
- architecture must change;
- production deployment is requested without explicit authorization.

Do not stop for ordinary reversible technical decisions within the approved
architecture.

## 6. A2PHC data boundaries

Preserve:

- Patient Master separate from Patient Visit;
- Supervisor opens the Visit;
- Doctor completes the clinical section of the same Visit;
- Doctor does not re-enter the patient list;
- Field Requisition separate from MFR;
- current medicine dispensing disabled;
- project and location assignments;
- role and sensitivity boundaries;
- immutable signed clinical history with controlled amendment;
- synthetic data only.

## 7. Role and module access

The UI role preview is not security.

Every protected server request must eventually evaluate:

```text
Authenticated identity
+ active internal account
+ organization membership
+ role
+ permission
+ project assignment
+ location assignment
+ record ownership where required
+ workflow state
+ medical-data sensitivity
+ separation-of-duties rule
```

Examples:

- Teacher must not access A2PHC patient routes.
- Medical Supervisor must not access E4BL student routes.
- Doctor may access assigned clinical records but not field-finance approval.
- Finance may access financial records but not full clinical detail by default.
- System Administrator has configuration authority, not automatic clinical or
  financial approval authority.

Route protection and API protection must both be tested.

## 8. Security and privacy

Never add real:

- patient data;
- Doctor credentials;
- national identity data;
- phone numbers;
- prescriptions;
- bills;
- bank information;
- production tokens.

Do not log sensitive payloads.

Use synthetic fixtures with clearly fictional values.

## 9. Validation

Run the relevant subset throughout the task and all required gates before
claiming completion:

```bash
pnpm verify:structure
pnpm verify:sensitive
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:run
pnpm build
```

When Prisma changes:

```bash
pnpm db:format
pnpm db:validate
pnpm db:generate
```

Do not run destructive shared or production database commands.

## 10. Required testing

Test at least:

- success;
- unauthenticated;
- unauthorized;
- wrong project;
- wrong location;
- suspended account;
- invalid input;
- duplicate input;
- missing record;
- workflow-state violation;
- audit event;
- desktop and mobile UI where relevant.

## 11. Git and release

Do not commit, push, merge, tag, release, or deploy unless the active task
explicitly authorizes that action.

Never force push.

Prefer a task branch for authentication, database, clinical, financial, or
production work.

## 12. Required final report

Return:

1. Summary
2. Scope completed
3. Files changed
4. Database and migration changes
5. Authorization behavior
6. Tests added
7. Commands and exact results
8. Security and privacy review
9. UI regression review
10. Documentation updated
11. Open decisions
12. Remaining warnings
13. Acceptance-criteria result
14. Recommended next task
15. Git status and commit/branch/PR status if authorized
