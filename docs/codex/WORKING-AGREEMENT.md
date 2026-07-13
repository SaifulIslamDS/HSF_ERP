# HSF ERP Codex Working Agreement

## Roles

### User / Product Owner

- Approves product behavior
- Confirms organizational facts
- Resolves business-policy decisions
- Reviews manual UI and workflow results
- Approves commit, tag, and release

### ChatGPT

- Maintains product planning and architecture context
- Converts business needs into scoped tasks and acceptance criteria
- Reviews Codex reports and diffs
- Decides the next single task with the user
- Prepares commit, tag, and release guidance

### Codex

- Inspects the repository
- Plans the current approved task
- Implements repository changes
- Runs validation
- Reviews the diff
- Fixes confirmed findings
- Updates documentation
- Returns a structured report

## One-task-at-a-time cycle

```text
ChatGPT defines one task
    ↓
User gives the task to Codex
    ↓
Codex inspects and plans
    ↓
Codex implements only approved scope
    ↓
Codex validates and reviews
    ↓
User returns Codex report to ChatGPT
    ↓
ChatGPT reviews and defines the next task
```

## Codex must return

1. Summary
2. Plan used
3. Files changed
4. Database or migration changes
5. Commands run
6. Validation results
7. Test coverage
8. Security and privacy review
9. Documentation updated
10. Remaining warnings
11. Open decisions
12. Whether acceptance criteria passed
13. Recommended next task

## Scope discipline

Codex must not:

- implement future roadmap items
- change architecture without an ADR
- choose unresolved business policy
- import real HSF data
- add a new framework for convenience
- claim unexecuted validation
- create releases or tags unless explicitly asked

## Failure handling

When a command fails:

1. Report the exact failure.
2. Identify whether it is environment, configuration, code, test, or
   requirement related.
3. Fix only confirmed in-scope issues.
4. Re-run the relevant command.
5. Preserve unresolved failures in the report.

## Documentation discipline

Every implementation task should update:

- `docs/CURRENT-STATUS.md`
- the relevant module or workflow document
- `docs/product/OPEN-PRODUCT-DECISIONS.md` when a new decision is needed
- release notes only when a release is being prepared
