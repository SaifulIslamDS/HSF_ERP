# Codex Next Task — v0.1.7 Baseline Verification and Access-Control Contract

## Task type

Validation and preparation task.

## Purpose

Verify the `v0.1.6` management-preview PIN gate and the existing `v0.1.5` A2PHC UI expansion as one stable baseline, confirm that all non-access ERP UI remains unchanged, and prepare the implementation-ready contract for real authenticated module access.

The temporary PIN gate must remain clearly separate from future Supabase user authentication and HSF RBAC.

## Read first

1. `AGENTS.md`
2. `docs/CURRENT-STATUS.md`
3. `docs/PREVIEW-PIN-ACCESS-GATE.md`
4. `docs/A2PHC-CURRENT-STATUS-v0.1.5.md`
5. `docs/A2PHC-CONTINUATION-HANDOVER-v0.1.5.md`
6. `docs/modules/A2PHC-UI-EXPANSION-AND-ROLE-VISIBILITY.md`
7. `docs/A2PHC-FUNCTIONAL-ROADMAP.md`
8. `docs/product/A2PHC-OPEN-DECISIONS.md`
9. `docs/codex/A2PHC-CODEX-WORKING-INSTRUCTIONS.md`
10. relevant architecture, data-model, RBAC, environment, and ADR documents

## Scope

### 1. Verify Git and version baseline

- inspect branch and working tree;
- verify `v0.1.6` tag status after release;
- verify root and web package versions;
- report any mismatch.

### 2. Run all repository gates

```bash
pnpm verify:structure
pnpm verify:sensitive
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:run
pnpm build
```

Fix only confirmed baseline defects.

### 3. Verify preview PIN gate

Check:

- `/access` renders correctly on desktop and mobile;
- six numeric digits are required;
- invalid PIN is rejected;
- repeated failures trigger the lightweight rate-limit response;
- valid PIN returns the user to the requested ERP route;
- preview cookie is HttpOnly and secure in production;
- session expires according to configuration;
- PIN rotation invalidates existing preview sessions;
- `/api/health` remains public;
- protected API routes return `401` without preview access;
- the PIN and signing secret never appear in client code, Git, logs, or rendered HTML.

### 4. Verify UI preservation

Check that:

- the landing page behind the gate is unchanged;
- A2PHC routes render unchanged;
- role-preview behavior works after PIN access;
- E4BL UI is unchanged;
- representative routes from every other domain remain unchanged;
- shared navigation remains responsive;
- all displayed records remain synthetic.

### 5. Build the real access-control contract

Document, without implementing full authentication:

- module identifiers;
- route groups;
- permission names;
- role-to-module visibility;
- project and location assignment requirements;
- read/write/submit/review/approve distinctions;
- clinical sensitivity;
- finance-versus-clinical boundaries;
- System Administrator boundaries;
- audit requirements for denied access.

### 6. Prepare the next functional authentication task

Prepare one small vertical slice for:

```text
Supabase authentication
+ secure application session
+ internal user link
+ representative role/project/location context
+ server-protected representative routes
```

Do not replace the temporary preview gate until the real authentication milestone is explicitly approved and ready.

## Excluded

- patient persistence;
- Doctor consultation persistence;
- finance functionality;
- requisition/MFR functionality;
- medicine functionality;
- full RBAC implementation;
- production patient or staff data;
- destructive migration;
- commit, push, tag, release, or production deployment without explicit approval.

## Acceptance criteria

- Exact Git/version baseline is reported.
- Required gates pass or failures are reported exactly.
- PIN gate passes the documented security and UX checks.
- Existing non-access ERP UI remains unchanged.
- Role-preview behavior remains intact behind the gate.
- Temporary PIN access is clearly distinguished from user authentication.
- Access-control contract is complete enough for the next task.
- No business functionality or real data is introduced.

## Required final report

1. Git and version baseline
2. Commands and exact results
3. PIN-gate QA
4. Security findings
5. UI regression QA
6. A2PHC and E4BL isolation QA
7. Mobile QA
8. Access-control contract summary
9. Documentation updates
10. Remaining warnings
11. Acceptance-criteria result
12. Exact recommended next task

Do not commit, push, tag, release, or deploy.
