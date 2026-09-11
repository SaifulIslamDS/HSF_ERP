# Contributing to HSF ERP

## Read before changing code

Start with `AGENTS.md`, `docs/CURRENT-STATUS.md`, the mirrored HSF Digital System Contract and `docs/codex/NEXT-TASK.md`.

## Rules

- Work one approved scope at a time.
- Inspect existing architecture before changing it.
- Do not infer business policy, clinical policy, financial authority or current programme facts.
- Do not use real HSF operational data in source control, tests, screenshots or seeds.
- Keep Knowledge Hub policy/governance separate from ERP operational implementation.
- Preserve evidence states and data classification.
- Add/update tests for changed behavior.
- Update documentation when implementation status changes.

## Commit style

Prefer Conventional Commits, for example:

- `feat(auth): add authenticated user context`
- `fix(ci): use frozen lockfile`
- `security(preview): require independent signing secret`
- `docs(governance): align programme registry`

## Validation

Run the required repository gates in `README.md` before calling a change release-ready.
