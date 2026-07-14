# HSF ERP Autonomous MVP Roadmap

**Status:** Approved execution roadmap; implementation remains controlled by
`docs/codex/NEXT-TASK.md`
**Working branch:** `codex/hsf-erp-autonomous-mvp`
**Prepared:** 14 July 2026

## Objective and execution rule

Deliver a production-oriented HSF ERP MVP through small, dependency-aware
milestones while preserving the canonical product truths, access boundaries,
financial invariants, privacy requirements, and one-task-at-a-time agreement.

This roadmap does not authorize work excluded by the active NEXT-TASK. Each
implementation milestone requires a NEXT-TASK with explicit scope, exclusions,
and acceptance criteria. After every milestone: test, run repository gates,
review the complete diff, update documentation, create one focused Conventional
Commit, and push this branch. Never merge, force-push, tag, release, or deploy.

## Confirmed baseline

- Branch created from `main` at `b842428`.
- Applications are Next.js, NestJS, and worker; data access is Prisma/PostgreSQL.
- Supabase Auth and Supabase PostgreSQL direction is approved in ADR-0005.
- Authentication, authorization enforcement, production migrations, and ERP
  business modules are not implemented.
- On 14 July 2026 all repository gates plus Prisma validate/generate passed with
  pnpm 11.10.0 and a synthetic CI-style `DATABASE_URL`.
- The audit host uses Node.js 24.16.0, below the declared minimum 24.18.0, so
  validation required an engine-check exception.

## Milestones

### A — Repository and architecture stabilization

Status: in progress. Maintain reliable environment contracts, CI, validation,
package boundaries, ADR-0005, this roadmap, and CURRENT-STATUS.

Acceptance: all gates pass; no authoritative Auth0 conflict remains; decision,
credential, privacy, medical, safeguarding, and finance gates are explicit.

### B1 — Local identity schema and contracts

Dependencies: A and a new approved NEXT-TASK.

Implement immutable Supabase Auth user linkage, local account states,
authentication audit events, environment contracts, shared identity contracts,
a reviewed Prisma migration, and tests.

Acceptance: identity linkage is unique and immutable; local status controls ERP
access; no password/token storage; Prisma does not manage Supabase auth tables;
migration, indexes, rollback implications, and database gates pass.

### B2 — NestJS token validation

Dependencies: B1 and safe issuer/JWKS test configuration.

Validate Supabase JWT signature, issuer, expiry, and required claims; resolve
the active local user; provide consistent authentication failures; audit without
logging tokens.

Acceptance: valid synthetic tokens reach a neutral endpoint; invalid signature,
issuer, expiry, claims, or local account state is denied and tested.

### B3 — Next.js Supabase SSR authentication

Dependencies: B2 and non-production Supabase configuration.

Implement `@supabase/ssr`, sign-in/out, forgot/reset password, email
verification, secure cookies, protected routes, and HSF-branded responsive UI.

Acceptance: flows work against approved non-production configuration; business
data remains behind NestJS; security, accessibility, and responsive tests pass.

### C1 — Authorization primitives

Dependencies: B1/B2. Implement typed permission codes, default-deny evaluation,
organization/project/location scope, ownership, workflow status, sensitivity,
and separation-of-duties interfaces.

Acceptance: role alone cannot bypass scope; requester/final-approver conflicts
are denied; allow and denial paths are comprehensively unit-tested.

### C2 — Membership, roles, assignments, and audit

Dependencies: C1 and approved assignment semantics. Implement organization
membership, internal profiles, valid-dated role/project/location assignments,
admin API foundation, and audit logging.

Acceptance: cross-organization/project/location access is denied; assignment
lifecycle is audited; E4BL and A2PHC role assignment truths are enforced.

### C3 — Permission-aware application shell

Dependencies: B3/C2. Implement the protected shell, permission-aware navigation,
access-denied states, and neutral user-management foundation.

Acceptance: UI never replaces API enforcement; deep links remain protected;
executive branding is preserved.

### D — Organization master data

Dependencies: C2. Implement projects, locations, fiscal years/periods, approved
organization units, assignments, controlled statuses, numbering, and audit.

Decision gates: O-008, OPD-018, and approved active locations.

### E — Staff activity and achievement

Dependencies: C2/D. Implement reporting modes, indicators/units, targets,
achievements, evidence, generated drafts, review/correction, verification,
approval, and locking.

Acceptance: corrections preserve history; drafts require review; incompatible
units are not summed; final reporting uses verified data only.

Decision gates: OPD-002, OPD-013, OPD-014.

### F — E4BL reporting foundation

Dependencies: C2/D/E. Implement centres, assignments, separate Student Master
and annual Enrollment, and approved teacher/head-teacher reporting slices.

Decision gates: OPD-012, OPD-015, O-026–O-034, OPD-017.

### G — A2PHC operational foundation

Dependencies: C2/D/E and approved privacy policy. Implement camps, assignments,
separate Patient Master/Visit, registration, approved operational fields,
medicine issue, referral/follow-up, summaries, and supervisor achievement.

Decision gates: OPD-008, OPD-017, O-035–O-043.

### H — Doctor clinical workflow

Dependencies: G and clinical approval. Doctors complete the existing visit;
recommended fields remain optional/configurable until approved; patient lists
are never duplicated.

Decision gates: OPD-006–OPD-011.

### I — Field next-month requisition

Dependencies: C2/D/E. Implement separate E4BL/A2PHC field requests, line
estimates, stock/use context, evidence, review, correction, and statuses. A
field requisition remains distinct from an MFR.

Decision gates: OPD-003/OPD-004.

### J — Coordinator consolidation and MFR

Dependencies: I, budget foundation, and approved authority. Implement review,
partial acceptance, traceable consolidation, budget checks, MFR, finance review,
recommendation, approval, disbursement status, adjustment, and close.

Decision gates: OPD-005, O-012–O-016.

### K — Finance control foundation

Dependencies: D/J and approved master data/policies. Implement annual budget,
commitments, Additional MFR, PR, IOU, expense, voucher, journals, cash/bank,
transfers, reconciliation, and period close.

Acceptance: every implemented financial invariant has automated tests; posted
records are immutable; journals balance; transfers create no income/expense;
IOUs remain advances; commitments/actuals are not double-counted.

Decision gates: O-008–O-018 and approved Chart of Accounts.

### L — HR and payroll foundation

Dependencies: C2/D/K and approved HR policy. Implement employee/assignment,
recruitment, attendance/leave, training, salary structure, payroll, allocation,
bank export, payslip, and payroll journal using synthetic data only.

Decision gates: O-019–O-025.

### M — Donor, evidence, reporting, and dashboards

Dependencies: verified underlying data. Implement donor/fund/grant foundation,
evidence, deadlines, indicators, approval inbox, executive/module dashboards,
data-quality/audit reports, and controlled exports. Never aggregate incompatible
units; external views remain privacy-safe and read-only.

### N — Production-readiness hardening

Dependencies: all approved MVP slices. Complete authorization/security/privacy,
validation, accessibility/responsive UX, constraints/indexes, synthetic demo
data, backup/restore, environment/migration/deployment documentation, and
production-readiness review. Full gates must pass on supported Node.js.

## Current blockers

The active NEXT-TASK is Task 001. It authorizes audit/planning and explicitly
excludes authentication and ERP implementation. B1 cannot begin until NEXT-TASK
is replaced with a small approved task containing acceptance criteria.

Interactive Supabase flows also require an approved non-production Supabase
project and external environment configuration. Credentials and tokens must
never be committed.

Open decisions in `docs/product/OPEN-PRODUCT-DECISIONS.md` and
`docs/DECISIONS-AND-OPEN-ITEMS.md` block affected milestones from converting
provisional recommendations into mandatory policy.

## Recommended next task

Replace Task 001 with:

> Define and migrate the local Supabase identity-link, account-state, and
> authentication-audit foundation without implementing login UI or live
> Supabase integration.

Acceptance criteria should require immutable unique identity linkage, explicit
account-state semantics, no credential/token storage, a reviewed Prisma
migration with indexes, audit coverage, shared contracts/tests, database gates,
and no ERP business feature implementation.
