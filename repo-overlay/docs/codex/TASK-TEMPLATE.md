# Codex Task XXX — Task Name

## Purpose

State the business and technical reason for this task.

## Controlling documents

- `AGENTS.md`
- `docs/CURRENT-STATUS.md`
- `docs/DOCUMENT-STACK.md`
- Relevant product, architecture, workflow, and module documents

## Scope

1. Explicit item
2. Explicit item
3. Explicit item

## Excluded

- Explicitly excluded module
- Future enhancement
- Unapproved policy decision
- Real HSF data

## Acceptance criteria

- [ ] Observable criterion
- [ ] Observable criterion
- [ ] Tests added or updated
- [ ] Relevant validation passes
- [ ] Documentation updated
- [ ] No sensitive data committed

## Validation

```bash
pnpm verify:structure
pnpm verify:sensitive
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:run
pnpm build
```

Add database validation when applicable.

## Required report

- Summary
- Files changed
- Commands run
- Validation results
- Test results
- Migration impact
- Security/privacy review
- Open decisions
- Remaining warnings
- Acceptance-criteria result
- Recommended next task
