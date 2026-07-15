# Codex Next Task — v0.1.6 Baseline Verification and Access-Control Contract

## Task type

Validation and preparation task.

## Purpose

Verify that the `v0.1.5` A2PHC UI patch is correctly integrated, confirm that
non-A2PHC UI remains unchanged, and prepare an implementation-ready contract
for real authenticated module access.

Do not functionalize patient, camp, Doctor, finance, or medicine records in this
task.

## Read first

1. `AGENTS.md`
2. `docs/CURRENT-STATUS.md`
3. `docs/A2PHC-CURRENT-STATUS-v0.1.5.md`
4. `docs/A2PHC-CONTINUATION-HANDOVER-v0.1.5.md`
5. `docs/modules/A2PHC-UI-EXPANSION-AND-ROLE-VISIBILITY.md`
6. `docs/A2PHC-FUNCTIONAL-ROADMAP.md`
7. `docs/product/A2PHC-OPEN-DECISIONS.md`
8. `docs/codex/A2PHC-CODEX-WORKING-INSTRUCTIONS.md`
9. relevant architecture, data-model, RBAC, and ADR documents

## Scope

### 1. Verify Git and version baseline

- inspect branch and working tree;
- verify `v0.1.5` tag status;
- verify package versions;
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

Fix only confirmed defects introduced by or exposed through the A2PHC patch.

### 3. Verify UI preservation

Check that:

- A2PHC routes render;
- role-preview behavior works;
- E4BL UI is unchanged;
- representative routes from every other domain remain unchanged;
- shared navigation remains responsive;
- mobile drawer and bottom navigation work;
- no active medicine-dispensing behavior is implied;
- all displayed records remain synthetic.

### 4. Build the access-control contract

Document, without implementing the full authentication system:

- module identifiers;
- route groups;
- required permission names;
- role-to-module visibility;
- project-assignment requirements;
- location-assignment requirements;
- read/write/submit/review/approve distinctions;
- clinical-data sensitivity;
- finance-versus-clinical boundaries;
- System Administrator boundaries;
- audit requirements for denied access.

The contract must cover at least:

- Executive / CEO;
- A2PHC Coordinator;
- Medical Supervisor;
- General Physician;
- E4BL Coordinator;
- Head Teacher;
- Teacher;
- Finance Director;
- Finance Officer;
- Auditor;
- Donor Viewer;
- System Administrator.

### 5. Prepare the next implementation task

Prepare one small task for:

```text
Supabase authentication
+ secure session
+ internal user
+ role/project/location context
+ server-protected representative routes
```

The next task must not implement the complete RBAC system or all module routes at
once.

## Allowed changes

- confirmed A2PHC patch defects;
- tests;
- access-control contract documentation;
- current-status documentation;
- next-task documentation;
- minor shared navigation fix only when required and regression-tested.

## Excluded

- patient persistence;
- Patient Visit persistence;
- Doctor consultation persistence;
- prescription persistence;
- clinical sign-off persistence;
- equipment persistence;
- field-expense persistence;
- requisition/MFR functionality;
- medicine functionality;
- Google Forms import;
- production Supabase setup;
- real HSF data;
- commit, push, tag, release, or deployment.

## Acceptance criteria

- Exact Git and version baseline is reported.
- Every required gate passes, or unresolved failure is reported accurately.
- A2PHC representative routes render on desktop and mobile.
- Representative non-A2PHC routes remain visually and functionally unchanged.
- Role-preview behavior matches the documented matrix.
- UI-only visibility is clearly distinguished from server authorization.
- A complete access-control contract is added.
- No business functionality or real data is introduced.
- Current status is updated.
- The next authentication task is small, explicit, and implementation-ready.

## Required final report

1. Git and version baseline
2. Commands and exact results
3. Defects found and fixed
4. Files changed
5. A2PHC route QA
6. Non-A2PHC regression QA
7. Mobile QA
8. Role-preview QA
9. Access-control contract summary
10. Security and privacy review
11. Documentation updates
12. Remaining warnings
13. Acceptance-criteria result
14. Exact recommended next task

Do not commit, push, tag, release, or deploy.
