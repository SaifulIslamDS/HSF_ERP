# Codex Task 001 — Validate the Repository Foundation

## Purpose

Turn the generated scaffold into a locally validated repository without implementing ERP features.

## Scope

1. Read `AGENTS.md` and all canonical documents.
2. Inspect the repository for structural, configuration, package, TypeScript, Prisma, ESLint, test, and build issues.
3. Confirm Node.js and pnpm versions.
4. Run `pnpm install`.
5. Generate and retain `pnpm-lock.yaml`.
6. Copy `.env.example` to `.env` locally only; do not commit `.env`.
7. Start PostgreSQL and Redis with Docker Compose.
8. Run:
   - `pnpm verify:structure`
   - `pnpm verify:sensitive`
   - `pnpm db:format`
   - `pnpm db:validate`
   - `pnpm db:generate`
   - `pnpm format:check`
   - `pnpm lint`
   - `pnpm typecheck`
   - `pnpm test:run`
   - `pnpm build`
9. Fix only confirmed foundation issues.
10. Update `docs/CURRENT-STATUS.md`.

## Excluded

- Authentication implementation
- RBAC implementation
- Finance features
- E4BL features
- A2PHC features
- Real HSF data
- Production deployment

## Acceptance criteria

- Dependencies install successfully.
- `pnpm-lock.yaml` exists.
- Docker services become healthy.
- Prisma format, validation, and generation pass.
- Structure and sensitive-file checks pass.
- Formatting, lint, typecheck, tests, and build pass.
- Web and API health endpoints run locally.
- No feature scope is added.
- No sensitive data is committed.
- Current status is accurate.

## Required report

Return:

- Environment versions
- Files changed
- Lockfile status
- Commands run
- Validation results
- Errors and fixes
- Remaining warnings
- Recommended next task
