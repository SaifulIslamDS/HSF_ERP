# HSF ERP Development Workflow

```text
ChatGPT Product Planning
        ↓
Approved Specification and Acceptance Criteria
        ↓
Codex Repository Inspection
        ↓
Codex Plan
        ↓
One Small Implementation Task
        ↓
Format + Lint + Typecheck + Tests + Build
        ↓
Codex Review
        ↓
Fix Confirmed Findings
        ↓
Manual QA
        ↓
Documentation Update
        ↓
Commit
        ↓
Version / Release When Required
```

## One-task rule

Do not implement an entire module in one uncontrolled request.

Each task must identify:

- Purpose
- Included scope
- Excluded scope
- Acceptance criteria
- Expected files
- Validation commands
- Security implications
- Documentation changes

## Validation

Baseline:

```bash
pnpm verify:structure
pnpm verify:sensitive
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:run
pnpm build
```

Database change:

```bash
pnpm db:format
pnpm db:validate
pnpm db:generate
```

## Git workflow

The user is currently the primary developer. Use the `main` branch unless a different workflow is explicitly approved.

Recommended commit format:

```text
type(scope): description
```

Examples:

```text
chore(repo): initialize pnpm monorepo foundation
feat(auth): add organization-scoped user roles
fix(finance): prevent internal transfers from affecting expenses
docs(mfr): clarify additional requisition approval
```

## Release rule

Repository-foundation tasks may remain under `v0.1.x`.

Feature releases should follow the approved roadmap and include:

- Release notes
- Validation results
- Migration notes
- Known limitations
- Rollback considerations
