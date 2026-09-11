# Codex Onboarding

## Read first

1. `AGENTS.md`
2. `docs/CURRENT-STATUS.md`
3. `docs/governance/HSF_DIGITAL_SYSTEM_CONTRACT.json`
4. `docs/governance/SYSTEM-BOUNDARIES.md`
5. `docs/governance/PROGRAMME-REGISTRY.md`
6. `docs/DOCUMENT-STACK.md`
7. `docs/codex/NEXT-TASK.md`
8. `docs/PRODUCT-REQUIREMENTS.md`
9. `docs/MASTER-SYSTEM-DESIGN.md`
10. `docs/PHASE-1-SCOPE.md`
11. `docs/ARCHITECTURE.md`
12. `docs/DATA-MODEL.md`
13. `docs/RBAC-AND-APPROVALS.md`
14. `docs/DECISIONS-AND-OPEN-ITEMS.md`

## Repository state

The repository includes a pnpm lockfile and the v0.1.6 management/UI baseline. Install with the locked dependency graph:

```bash
pnpm install --frozen-lockfile
```

Do not infer production functionality from route/UI completeness. Follow `docs/CURRENT-STATUS.md` and implement only the explicitly approved task.

## HSF-wide governance rule

The ERP is the operational system of record. The Knowledge Hub controls institutional policy/framework definitions, and public systems receive only approved information. The mirrored Digital System Contract defines canonical programme codes, evidence states, classification and publication boundaries.

## Expected Codex report

After each task, report:

- Plan followed
- Files created
- Files modified
- Commands executed
- Validation results
- Errors
- Security/privacy findings
- HSF governance/alignment impact
- Unresolved decisions
- Recommended next task
