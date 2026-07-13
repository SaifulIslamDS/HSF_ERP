# AGENTS.md — HSF ERP Codex Instructions

These instructions apply to the entire repository.

## 1. Source of truth

Before planning or implementing work, read:

1. `docs/CURRENT-STATUS.md`
2. `docs/PRODUCT-REQUIREMENTS.md`
3. `docs/MASTER-SYSTEM-DESIGN.md`
4. `docs/PHASE-1-SCOPE.md`
5. `docs/ARCHITECTURE.md`
6. `docs/DATA-MODEL.md`
7. `docs/RBAC-AND-APPROVALS.md`
8. `docs/DECISIONS-AND-OPEN-ITEMS.md`
9. The relevant module documentation
10. The current task under `docs/codex/`

Do not allow old, archived, sample, or copied documents to override these files.

## 2. Technology constraints

- Use **pnpm only**. Do not use npm, Yarn, or Bun.
- Use the existing pnpm workspace and Turborepo structure.
- The architecture is a TypeScript modular monolith.
- Web: Next.js.
- API: NestJS.
- Database: PostgreSQL with Prisma.
- Jobs: worker app with Redis/BullMQ when enabled.
- Do not introduce microservices without an approved ADR.
- Do not replace the selected framework or ORM without an approved ADR.

## 3. Work one task at a time

For each task:

1. Inspect the repository.
2. Read controlling documentation.
3. State the implementation plan.
4. List files expected to change.
5. Implement only the approved scope.
6. Run the required validation.
7. Review the diff.
8. Fix confirmed findings.
9. Update current-status and relevant documentation.
10. Report changed files, commands, results, and unresolved issues.

Do not silently expand scope.

## 4. Acceptance criteria are mandatory

Do not implement a feature without explicit acceptance criteria.

When criteria are incomplete:

- Record the gap in `docs/DECISIONS-AND-OPEN-ITEMS.md`.
- Use a clearly documented provisional behavior only when it is safe and reversible.
- Never invent financial authority, approval thresholds, donor restrictions, medical rules, staff facts, or safeguarding policy.

## 5. Financial invariants

Financial work must preserve:

- Debit equals credit for every posted journal entry.
- Internal transfers create no income or expense.
- IOUs remain advances until adjusted.
- Approved and posted records cannot be directly edited.
- Closed periods cannot be changed without controlled reopening.
- A requester cannot final-approve the same request.
- Every expense must be traceable to authorization and evidence.
- Budget commitments and actuals must not be double counted.
- Every reversal and reopening must be audited.

Add automated tests for every new financial rule.

## 6. Security and privacy

Never commit real:

- Patient data
- Student or child personal data
- Protection records
- Employee salary or bank data
- Donor KYC
- Bank statements
- Bills, vouchers, or identity documents
- Credentials, tokens, private keys, or `.env` files
- Production database exports

Use synthetic data only.

Apply least-privilege access by:

- Role
- Project
- Location
- Record status
- Sensitivity

## 7. Database discipline

- Use migrations.
- Never edit a migration already applied to a shared environment.
- Use UUID primary keys and separate human-readable document numbers.
- Do not hard-delete posted financial records.
- Do not mix patient master and visit data.
- Do not mix student master and annual enrollment data.
- Add indexes and constraints deliberately.
- Keep generated Prisma files out of Git.

## 8. Code quality

Before completing a task, run the relevant commands:

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

Do not claim validation passed unless it was executed successfully.

## 9. Documentation rules

- `README.md` and `AGENTS.md` are the only Markdown files allowed at repository root.
- All other Markdown documentation belongs under `docs/`.
- Update `docs/CURRENT-STATUS.md` after each approved task.
- Record architecture decisions under `docs/decisions/`.
- Record releases under `docs/releases/`.
- Keep unresolved policy decisions visible.

## 10. Release discipline

Before commit or release:

- Review the entire diff.
- Confirm no sensitive data is present.
- Confirm acceptance criteria.
- Confirm lint, typecheck, tests, and build.
- Confirm migrations and rollback implications.
- Prepare a clear commit message.
- Update release notes when a version changes.

## 11. Current next task

Read `docs/codex/NEXT-TASK.md`.
