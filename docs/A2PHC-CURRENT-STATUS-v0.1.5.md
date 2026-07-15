# A2PHC Current Status — v0.1.5

## Release status

**Expected version:** `v0.1.5`  
**Release type:** UI feature patch  
**Functional status:** Presentation only

## UI coverage now available

The expanded A2PHC experience presents:

- programme dashboard;
- five-district coverage;
- team and assignment views;
- camp plans and schedules;
- routes, travel, and readiness;
- Patient Master and Patient Visit separation;
- patient registration and queue;
- Supervisor basic-data workflow;
- Doctor consultation;
- diagnosis and prescription;
- tests, referral, follow-up, and clinical sign-off;
- equipment custody and condition;
- fuel, transport, boat fare, communication, and field expense;
- field requisition and MFR traceability;
- daily and monthly reports;
- data-quality review;
- future medicine-support planning;
- role-based UI visibility preview.

## Current UI-only access examples

| Role | A2PHC UI | E4BL UI | Finance UI |
|---|---|---|---|
| Executive / CEO | Full management view | Visible | Visible according to authority |
| A2PHC Coordinator | Project and management view | Hidden unless separately assigned | Limited supporting view |
| Medical Supervisor | Camp, patients, equipment, expense, reports | Hidden | No finance workspace |
| General Physician | Queue, consultation, prescription, referral, sign-off | Hidden | Hidden |
| E4BL Coordinator | Hidden | Project view | Limited supporting view |
| Teacher / Head Teacher | Hidden | Assigned education view | Hidden |
| Finance user | Supporting A2PHC financial records | No programme workspace by default | Assigned finance view |
| Auditor | Controlled read-only view | Controlled | Controlled |
| System Administrator | Configuration only | No automatic programme authority | No automatic approval authority |

## Known security limitation

Menu visibility is not access control.

The same routes may remain technically reachable until authentication and
server authorization are implemented.

## Validation required after patch application

```bash
pnpm verify:structure
pnpm verify:sensitive
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:run
pnpm --filter @hsf/web build
```

Also manually check:

- desktop navigation;
- tablet navigation;
- mobile navigation;
- A2PHC dashboard;
- patient registration;
- Doctor consultation;
- E4BL route remains unchanged;
- representative routes from all other domains remain unchanged;
- role preview hides and shows expected menus;
- medicine feature is clearly marked future/disabled;
- synthetic data is not presented as real HSF data.

## Next development objective

Replace UI-only role visibility with authenticated, project-aware, location-aware,
server-enforced access control without redesigning the existing modules.
