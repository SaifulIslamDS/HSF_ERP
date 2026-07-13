# AGENTS.md — HSF ERP Codex Operating Instructions

These instructions apply to the entire HSF ERP repository.

HSF ERP is a customized NGO Enterprise Resource Planning and Management
Information System for Human Safety Foundation. Its purpose is to become the
organization's controlled **single source of truth** for plans, people,
projects, funds, service delivery, achievements, evidence, approvals, and
reports.

## 1. Begin every task here

Before planning or changing code, read the following in this order:

1. `AGENTS.md`
2. `docs/CURRENT-STATUS.md`
3. `docs/codex/NEXT-TASK.md`
4. `docs/DOCUMENT-STACK.md`
5. `docs/product/HSF-ERP-PRODUCT-VISION.md`
6. `docs/PRODUCT-REQUIREMENTS.md`
7. `docs/MASTER-SYSTEM-DESIGN.md`
8. `docs/ARCHITECTURE.md`
9. `docs/DATA-MODEL.md`
10. `docs/RBAC-AND-APPROVALS.md`
11. The relevant workflow and module documents
12. `docs/product/OPEN-PRODUCT-DECISIONS.md`
13. `docs/DECISIONS-AND-OPEN-ITEMS.md`

Do not allow archived, copied, generated, sample, or outdated documents to
override the canonical stack defined in `docs/DOCUMENT-STACK.md`.

## 2. Product truths that must be preserved

The following are current product truths:

- HSF ERP is one integrated system for the whole organization.
- Data should be entered once and reused through controlled workflows.
- Every user is scoped by role, project, location, record status, and
  sensitivity.
- Teachers belong to the E4BL project context.
- Head Teachers review centre-level E4BL reporting and submit the next month's
  field requisition.
- Health Supervisors belong to the A2PHC project context.
- Health Supervisors submit patient-registration, camp-operation, and daily
  service-delivery data.
- General Physicians belong to the A2PHC project context.
- Doctors should complete the clinical section of the same patient visit
  rather than re-entering the patient list.
- Doctor clinical fields are recommendations until HSF formally approves them.
- Daily records should generate a monthly achievement draft where practical.
- Staff whose work is not naturally daily may submit a month-end achievement
  report.
- Student, patient, session, day, meeting, report, material, and currency are
  different units and must not be added into one misleading total.
- A field requisition is not an MFR.
- Head Teacher and Medical Supervisor field requisitions are reviewed and
  consolidated by the relevant Project Coordinator.
- The Project Coordinator prepares the project MFR.
- Finance reviews budget availability, account coding, and financial control.
- Management approval follows the approved authority matrix.
- Plan, requisition, MFR, disbursement, purchase, expense, evidence,
  achievement, and report must remain traceable.
- No requester may final-approve the same request.
- Closed financial periods and posted financial records are immutable except
  through controlled reversal or reopening.

Do not silently change these truths. Record proposed changes as open decisions
or ADRs and wait for approval.

## 3. Technology constraints

- Use **pnpm only**. Do not use npm, Yarn, or Bun.
- Preserve the existing pnpm workspace and Turborepo structure.
- Preserve the TypeScript modular-monolith architecture.
- Web application: Next.js.
- API application: NestJS.
- Database: PostgreSQL with Prisma.
- Background jobs: worker application; Redis/BullMQ only when required.
- Do not introduce microservices without an approved ADR.
- Do not replace the selected framework, ORM, package manager, or architecture
  without an approved ADR.
- Keep the public and dashboard UI aligned with the HSF executive green brand.
- Prefer shared packages for contracts, validation, UI primitives, and access
  rules where the repository already defines those boundaries.

## 4. Work one task at a time

For every task:

1. Read the current task and controlling documents.
2. Inspect the relevant code before proposing changes.
3. State the implementation plan.
4. List the files expected to change.
5. Confirm assumptions and unresolved decisions.
6. Implement only the approved scope.
7. Add or update tests.
8. Run the required validation.
9. Review the complete diff.
10. Fix confirmed findings only.
11. Update relevant documentation and `docs/CURRENT-STATUS.md`.
12. Return the required report.

Do not combine multiple modules or future roadmap items into one task without
explicit approval.

## 5. Acceptance criteria are mandatory

Do not implement a feature without explicit acceptance criteria.

When requirements are incomplete:

- Record the gap in `docs/product/OPEN-PRODUCT-DECISIONS.md`.
- Record architecture-level decisions under `docs/decisions/`.
- Use provisional behavior only when it is safe, reversible, and clearly
  marked.
- Never invent financial authority, approval thresholds, medical policy,
  safeguarding policy, donor restrictions, staff facts, or beneficiary facts.
- Do not convert a recommendation into an approved requirement without user
  confirmation.

## 6. Authentication and access-control rules

Access control must support:

- Organization membership
- Role assignment
- Project assignment
- Location assignment
- Record ownership where applicable
- Workflow status
- Data sensitivity
- Separation of duties
- Audit history

At minimum:

- Teachers are limited to assigned E4BL centres, classes, and permitted data.
- Head Teachers can review assigned centre submissions.
- Health Supervisors are limited to assigned A2PHC camps or service areas.
- Doctors are limited to assigned consultations and permitted clinical data.
- Project Coordinators can review their own project's field submissions.
- Finance users can review financial coding and budget impact without changing
  verified programme achievements.
- Donor or external viewers receive privacy-safe, read-only information only.

Do not choose an authentication provider or session architecture without
recording the decision and its trade-offs.

## 7. Programme and achievement-reporting rules

- Preserve the distinction between daily operational entries and month-end
  achievement reports.
- Daily entries may feed a generated monthly draft.
- A generated draft must be reviewed before submission.
- Submitted reports require reviewer status and timestamps.
- Corrections must preserve history.
- Evidence must remain linked to the relevant activity and achievement.
- Indicator performance is calculated by indicator and unit.
- Weighted performance requires an approved weight configuration.
- Final project reporting uses verified data only.

## 8. A2PHC clinical-data rules

- Keep Patient Master separate from Patient Visit.
- A patient can have many visits.
- The Health Supervisor owns registration and operational camp data.
- The Doctor owns or confirms clinical data and clinical sign-off.
- Do not duplicate the patient list for doctor reporting.
- Patient counts should be calculated from visit records.
- Clinical records may be incomplete or pending until doctor sign-off.
- Medical terminology, required clinical fields, referral policy, and
  prescription rules require HSF approval.
- Never use real patient data in source control, tests, screenshots, or seeds.

## 9. Financial invariants

Financial work must preserve:

- Debit equals credit for every posted journal.
- Internal transfers create no income or expense.
- IOUs remain advances until adjusted.
- Approved and posted records cannot be directly edited.
- Closed periods cannot be changed without controlled reopening.
- A requester cannot final-approve the same request.
- Every expense is traceable to authorization and evidence.
- Budget commitments and actual expenditure are not double counted.
- Every reversal, return, adjustment, and reopening is audited.
- A field requisition does not itself authorize expenditure.
- MFR approval does not replace a required Purchase Requisition.

Add automated tests for every new financial invariant.

## 10. Security, privacy, and safeguarding

Never commit real:

- Patient records
- Student or child personal data
- Protection or safeguarding records
- Employee salary or bank information
- Donor KYC
- Bank statements
- Bills, vouchers, or identity documents
- Credentials, tokens, private keys, or `.env` files
- Production database exports

Use synthetic data only.

Apply least privilege and data minimization. Sensitive exports and attachments
must be private, auditable, and access controlled.

## 11. Database discipline

- Use migrations for schema changes.
- Never modify a migration already applied to a shared environment.
- Use UUID primary keys and separate human-readable document numbers.
- Do not hard-delete posted financial records.
- Do not mix Patient Master with Patient Visit.
- Do not mix Student Master with annual Enrollment.
- Model Project, Location, User Assignment, and Reporting Period explicitly.
- Use constraints and indexes deliberately.
- Keep generated Prisma files out of Git.
- Do not import historical spreadsheets until a reviewed migration plan exists.

## 12. Code-quality gates

Run the relevant commands before completing a task:

```bash
pnpm verify:structure
pnpm verify:sensitive
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:run
pnpm build
```

When database files change, also run:

```bash
pnpm db:format
pnpm db:validate
pnpm db:generate
```

Run package-specific commands during development when faster, but run the
agreed repository-level release gate before claiming a release-ready result.

Do not claim a command passed unless it was executed successfully.

## 13. Documentation rules

- `README.md` and `AGENTS.md` are the only Markdown files allowed at repository
  root.
- All other Markdown files belong under `docs/`.
- Update `docs/CURRENT-STATUS.md` after each approved task.
- Update the relevant workflow or module document when behavior changes.
- Record architecture decisions under `docs/decisions/`.
- Record release notes under `docs/releases/`.
- Keep recommendations, approved requirements, and open decisions clearly
  separated.
- Do not silently rewrite organizational facts.

## 14. Release discipline

Before a commit or release:

- Review the complete diff.
- Confirm no sensitive data is present.
- Confirm acceptance criteria.
- Confirm relevant validation.
- Confirm migration and rollback implications.
- Update status and release notes.
- Use a focused commit message.
- Do not tag a release until the intended commit is pushed.

## 15. Current task

Read `docs/codex/NEXT-TASK.md`.

Follow the one-task-at-a-time working agreement in
`docs/codex/WORKING-AGREEMENT.md`.
