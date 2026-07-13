# HSF ERP — Current Status

**Current version:** `v0.1.3`  
**Stage:** Baseline Audited; Supabase Phase 1A Architecture Approved
**Last updated:** 13 July 2026

## Completed

### Discovery and product design

- HSF operational discovery
- Current workflow documentation
- Product vision and scalability planning
- Master ERP system design
- Phase 1 foundation and finance scope
- Product Requirements Document
- Data model and ERD specification
- RBAC and approval matrix
- Decisions and open-items register
- Updated end-to-end operational vision
- Staff daily and monthly achievement-reporting model
- E4BL Teacher and Head Teacher reporting model
- A2PHC Health Supervisor reporting model
- Recommended Doctor clinical-input model
- Field requisition to Project Coordinator MFR workflow

### Repository and platform

- pnpm and Turborepo monorepo
- Next.js web application foundation
- NestJS API foundation
- Worker foundation
- Prisma and PostgreSQL foundation
- Docker Compose configuration for future PostgreSQL and Redis use
- Shared packages
- CI workflow
- Structure verifier
- Sensitive-file guard
- Codex-ready repository instructions
- Baseline repository audit completed against the canonical document stack
- Monorepo validation re-established across all 10 workspace packages
- NestJS API package corrected to use the repository's NodeNext ESM convention

### UI and deployment

- Executive HSF-branded landing page
- Executive dashboard preview
- Responsive dashboard hotfix
- Web health endpoint
- Frontend deployed to Netlify
- Releases through `v0.1.2` prepared and deployed

### Codex documentation stack

- Canonical document precedence
- Updated `AGENTS.md`
- Product vision as a canonical English document
- Focused workflow documents
- Focused E4BL and A2PHC operating-model documents
- Doctor clinical-input recommendation
- Open product-decision register
- Codex working agreement
- Codex task template
- New baseline-audit task
- Supabase Auth, Supabase PostgreSQL hosting, Prisma data access, and HSF-owned
  authorization architecture approved in ADR-0005

### Confirmed baseline audit — 13 July 2026

- Git was clean on `main`, tracking `origin/main`, at `f3043a4` before the
  audit changes.
- Applications are `apps/web` (Next.js), `apps/api` (NestJS), and
  `apps/worker`; shared packages are `auth`, `config`, `contracts`, `database`,
  `reporting`, `ui`, and `validation`.
- Web routes are `/`, `/dashboard`, `/_not-found`, `/api/health`, and the app
  icon route. They are public foundation/preview routes; no login route or
  protected application route exists.
- `packages/auth` contains permission-code constants only. No authentication
  provider, credential flow, session store, token verification, route guard,
  or enforced permission evaluator is implemented.
- The Prisma foundation contains Organization, User, Role, Permission,
  UserRole, Project, Location, project/location access, fiscal-period, and
  AuditEvent models. No production migration exists and these models are not
  connected to application enforcement.
- The repository-level structure, sensitive-file, format, lint, typecheck,
  test, and build gates pass after the scoped API package-format fix. Prisma
  validate and generate also pass with a synthetic CI-style `DATABASE_URL`.
- The local audit host provided Node.js `24.16.0`, below the repository's
  declared minimum `24.18.0`; gates were therefore run with engine enforcement
  relaxed while retaining the pinned pnpm `11.10.0`. CI remains configured for
  Node.js `24.18.0` and pnpm `11.10.0`.

## Not completed

- Production authentication
- Organization membership enforcement
- Role-based access enforcement
- Project and location assignment enforcement
- Production database migrations
- Staff daily and monthly achievement reporting
- Field requisition workflow
- Annual budget and MFR modules
- Procurement, IOU, voucher, cash, bank, and closing workflows
- HR, recruitment, and payroll
- E4BL operational module
- A2PHC operational and clinical module
- Final Doctor dataset approval
- Donor, CSR, grant, sponsorship, and MEAL modules
- Production API, database, object storage, Redis, and worker deployment
- Historical data migration

## Validation position

- The Next.js web build and Netlify frontend deployment have been completed.
- On 13 July 2026, all repository-level gates passed against the audited
  working tree after the scoped NestJS ESM package fix.
- The test run contains 10 passing test files and 11 passing tests. Current
  tests are foundation smoke/unit tests, not authentication, authorization, or
  ERP workflow coverage.
- Validation should be repeated on the declared Node.js version before a
  release; the audit host's Node.js version was below the supported range.

## Current next task

Follow `docs/codex/NEXT-TASK.md`.

The baseline audit and OPD-001 architecture decision are complete. Supabase Auth
is the approved Phase 1A identity provider, `@supabase/ssr` is approved for the
Next.js cookie-based session, and Supabase PostgreSQL is the preferred production
database host. Prisma remains the HSF schema, migration, and query layer, while
HSF ERP tables remain authoritative for authorization. Authentication and
production hosting are not implemented. The next task should be a separately
approved, small Phase 1A foundation task and must not combine ERP business
features with access-control implementation.
