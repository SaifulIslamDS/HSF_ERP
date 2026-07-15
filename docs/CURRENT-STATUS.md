# HSF ERP — Current Status

**Current version:** `v0.1.4`  
**Stage:** Complete Management UI Blueprint; Functional Implementation Pending  
**Last updated:** 15 July 2026

## Completed

### Discovery, product, and operating design

- HSF operational discovery and current-workflow documentation
- Product vision and scalability planning
- Master ERP system design
- Product Requirements Document
- Phase 1 foundation and finance scope
- Data model and ERD specification
- RBAC and approval matrix
- Decisions and open-items registers
- End-to-end operating lifecycle
- Staff daily activity and monthly achievement-reporting model
- E4BL Teacher, Head Teacher, centre, graduate, and sponsorship model
- A2PHC Health Supervisor, Doctor, patient-visit, and camp-reporting model
- Field requisition to Project Coordinator MFR workflow
- Supabase Auth and Supabase PostgreSQL hosting architecture in ADR-0005

### Repository and platform foundation

- pnpm and Turborepo monorepo
- Next.js web application
- NestJS API foundation
- Worker foundation
- Prisma and PostgreSQL foundation
- Docker Compose development services
- Shared packages for auth, configuration, contracts, database, reporting, UI,
  and validation
- CI workflow
- Repository-structure verification
- Sensitive-file guard
- Canonical documentation stack
- Codex operating instructions and task workflow

### Complete management UI blueprint

- Existing HSF public landing design preserved and updated
- Responsive executive ERP shell with desktop sidebar, tablet navigation, and
  mobile bottom navigation
- One executive management dashboard
- Nineteen connected UI domains
- Four hundred module screens represented through the route catalogue
- UI-only new-record, edit, and synthetic detail routes for applicable screens
- Reusable presentation patterns for:
  - Dashboards
  - Registries and tables
  - Draft and approval workflows
  - Data-entry forms
  - Management and project reports
  - Calendars
  - Document and training libraries
  - Profiles
  - Configuration pages
  - Detail, evidence, and audit-history views
- Visual support for Draft, Submitted, Under Review, Returned, Recommended,
  Approved, In Progress, Completed, Verified, Closed, and related states
- Corporate HSF green design with no yellow interface dependency
- Synthetic-data notice displayed throughout the protected-style workspace
- Full route catalogue documented in
  `docs/UI-BLUEPRINT-AND-ROUTE-MAP.md`

### UI domain coverage

- Planning and performance
- Projects and locations
- Field requisitions and MFR
- Procurement
- Finance and accounting
- Human resources and recruitment
- Payroll
- E4BL education
- A2PHC health
- Climate Action
- Women Empowerment
- Inventory and assets
- Donors, CSR, grants, and sponsorship
- MEAL and impact
- Meetings, minutes, resolutions, notices, and communication
- Training and learning-material library
- Documents and evidence
- Reports and analytics
- Administration and system configuration

## Important implementation boundary

The complete route and UI surface is available for management review, but it is
not a functional ERP release.

The following are **not implemented** merely because their screens exist:

- Production authentication and secure sessions
- Organization-membership enforcement
- Role, project, location, status, sensitivity, or ownership enforcement
- Database persistence for UI records
- Production Prisma migrations
- Live approval engines or separation-of-duties enforcement
- Financial calculation, posting, reconciliation, or period closing
- Live MFR, procurement, IOU, bill, voucher, cash, bank, or payroll processing
- E4BL operational persistence
- A2PHC clinical persistence or medical policy enforcement
- Notification delivery
- Real file uploads, exports, report generation, online meetings, or external
  integrations
- Production API, object storage, database, Redis, or worker deployment
- Historical data migration

All people, amounts, dates, records, identifiers, and performance values shown
inside the UI are synthetic demonstrations.

## Open decisions preserved

Open product decisions remain recorded in
`docs/product/OPEN-PRODUCT-DECISIONS.md`. The UI presents safe, reversible
examples and does not convert a recommendation into an approved business rule.

This includes final approval authority, reporting frequency, clinical fields,
vitals, diagnosis coding, referral policy, evidence requirements, fee and
waiver approval, retention, safeguarding, numbering, migration scope, and
production hosting details.

## Validation position

The following rebuild-environment checks passed:

- Repository structure verification
- Sensitive-file guard
- TypeScript and TSX syntax parsing for all web source files
- Strict web-source static analysis with temporary framework declarations
- Portal route count, uniqueness, and route-resolution validation
- Static internal-link validation
- CSS parser validation
- Check for inaccessible internal package-registry URLs

A complete dependency install, Prettier check, ESLint run, Vitest run, and
Next.js production build were not completed in the rebuild environment because
external npm resolution timed out and the available Node.js runtime was version
22 rather than the repository-required version 24.18.0.

Run the full repository gates on the user's Node 24.18.0 and pnpm 11.10.0
environment before a release-ready claim. Do not treat the static checks above
as a replacement for the real package-level gates.

## Current next task

Follow `docs/codex/NEXT-TASK.md`.

The next step is management review of the complete responsive UI and approval of
one small functional vertical slice. Future work should connect functionality to
the existing interface incrementally rather than rebuilding the entire UI.
