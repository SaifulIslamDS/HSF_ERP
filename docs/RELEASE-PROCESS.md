# HSF ERP Release Process

## 1. Confirm scope and authority

- Approved task/acceptance criteria are complete.
- Open business decisions are not being silently converted into policy.
- Current implementation claims in `docs/CURRENT-STATUS.md` are accurate.

## 2. Validate

Use the locked dependency graph and run:

```bash
pnpm install --frozen-lockfile
pnpm verify:structure
pnpm verify:sensitive
pnpm verify:alignment
pnpm db:format
pnpm db:validate
pnpm db:generate
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:run
pnpm build
```

Relevant manual workflow/security/accessibility checks must also be completed for changed features.

## 3. Version and documentation

- Use Semantic Versioning for the codebase.
- Add/update a release note under `docs/releases/`.
- Update package/application version surfaces consistently.
- Update `MANIFEST.json` and `docs/CURRENT-STATUS.md`.
- Preserve historical release files; do not rewrite old release claims to look current.

## 4. Review

- Review the complete diff.
- Confirm no restricted HSF operational data or secrets are present.
- Confirm migrations/rollback notes where applicable.
- Confirm HSF Digital System Contract alignment.

## 5. Approve and tag

Commit, tag, release and deploy only after explicit authorization. A green CI build does not itself authorize production use or real-data migration.
