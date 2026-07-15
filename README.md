# HSF ERP — A2PHC Continuation and Codex Document Set

**Baseline:** `v0.1.5` — A2PHC UI Expansion and Role-Aware Module Visibility  
**Application state:** Complete UI presentation; business functionality not yet implemented  
**Purpose:** Continue HSF ERP development from the A2PHC UI patch without losing product, access-control, workflow, or implementation context

## What was already included in the v0.1.5 patch

The previous patch already contained:

- `docs/modules/A2PHC-UI-EXPANSION-AND-ROLE-VISIBILITY.md`
- `docs/codex/NEXT-TASK-v0.1.5.md`
- `docs/releases/v0.1.5.md`

Those files were useful but intentionally brief. This package adds a complete
continuation and Codex instruction set for the next development stage.

## Included files

```text
docs/
├── A2PHC-CONTINUATION-HANDOVER-v0.1.5.md
├── A2PHC-CURRENT-STATUS-v0.1.5.md
├── A2PHC-FUNCTIONAL-ROADMAP.md
├── product/
│   └── A2PHC-OPEN-DECISIONS.md
└── codex/
    ├── A2PHC-CODEX-WORKING-INSTRUCTIONS.md
    └── NEXT-TASK-v0.1.6.md

INSTALLATION-GUIDE.md
```

## Correct continuation principle

```text
Existing complete HSF ERP UI
        ↓
A2PHC expanded UI and role-visibility preview
        ↓
Baseline verification
        ↓
Real authentication and server authorization
        ↓
A2PHC functionalization through small vertical slices
```

## Important boundary

The current role selector and hidden/visible menus are a UI preview only.
They are not security.

Real access must later be enforced through:

- authenticated user identity;
- internal HSF user status;
- role and permission;
- project assignment;
- location assignment;
- record ownership;
- workflow state;
- medical-data sensitivity;
- server-side API checks;
- audit logging.

## Recommended reading order for Codex

1. `AGENTS.md`
2. `docs/CURRENT-STATUS.md`
3. `docs/A2PHC-CURRENT-STATUS-v0.1.5.md`
4. `docs/A2PHC-CONTINUATION-HANDOVER-v0.1.5.md`
5. `docs/modules/A2PHC-UI-EXPANSION-AND-ROLE-VISIBILITY.md`
6. `docs/A2PHC-FUNCTIONAL-ROADMAP.md`
7. `docs/product/A2PHC-OPEN-DECISIONS.md`
8. `docs/codex/A2PHC-CODEX-WORKING-INSTRUCTIONS.md`
9. `docs/codex/NEXT-TASK-v0.1.6.md`
10. Relevant architecture, data-model, RBAC, workflow, and release documents

## Immediate next action

Apply the document overlay, review it, then give Codex only the task in:

```text
docs/codex/NEXT-TASK-v0.1.6.md
```

Do not ask Codex to functionalize the complete A2PHC module in one task.
