# Git and Release Instructions — HSF ERP

## Current baseline

- Codebase: `v0.1.6`
- Governance alignment: HSF Digital Institutional System Contract `v1.0.0`
- Next controlled task: `docs/codex/NEXT-TASK.md`

## Working rule

Use a feature/alignment branch and pull request where practical. Do not tag, release or deploy from a working tree that has not passed the required gates.

## Required gates before a release claim

```bash
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

## Version discipline

Use Semantic Versioning for the codebase. Historical release notes under `docs/releases/` are immutable release records. A new stable tag requires a new release note; do not silently rewrite an existing tag/release.

## Commit discipline

Prefer Conventional Commit-style messages, for example:

- `docs(governance): align HSF system contract`
- `fix(ci): enforce frozen lockfile`
- `security(preview): require independent signing secret`
- `feat(auth): add authenticated user context`

## Release approval

A technically green build is necessary but not sufficient for HSF operational release. Management approval is still required for business rules, production data use and go-live decisions.
