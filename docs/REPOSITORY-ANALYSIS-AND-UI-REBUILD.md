# HSF ERP Repository Analysis and Complete UI Rebuild

**Version:** v0.1.4  
**Status:** Complete responsive management UI blueprint  
**Functional status:** No production business functionality added

## 1. Analysis performed

The repository was reviewed as a complete product and engineering system rather
than as an isolated frontend.

The review covered:

- `AGENTS.md`
- the canonical document precedence in `docs/DOCUMENT-STACK.md`
- current implementation status and open decisions
- product vision, requirements, architecture, data model, RBAC, approval, and
  workflow documentation
- project-specific E4BL and A2PHC operating models
- field requisition, MFR, finance, HR, recruitment, payroll, reporting,
  documents, meetings, notices, training, inventory, donor, and MEAL scope
- Codex working rules and the active task
- existing Next.js, NestJS, Prisma, package, CI, and deployment foundations
- existing public and executive web design

The complete UI is an implementation of the approved management presentation
scope. It does not resolve open organizational policy decisions.

## 2. Repository cleanup

Obsolete patch-delivery artifacts and stale generated build metadata were
removed from the rebuilt repository. The canonical repository structure,
monorepo packages, infrastructure foundation, tests, CI files, and project
history documents were preserved.

The root Markdown rule remains intact: only `README.md` and `AGENTS.md` are at
repository root; all other Markdown documentation is under `docs/`.

## 3. Complete UI architecture

The web application now uses one shared responsive portal architecture:

- public HSF landing page
- executive dashboard
- desktop sidebar
- tablet-responsive workspace
- mobile drawer navigation
- mobile bottom navigation
- searchable route navigation
- shared page header and synthetic-data warning
- reusable screen templates
- centralized route catalogue

The route catalogue is maintained in:

```text
apps/web/src/lib/portal-catalog.ts
```

The complete route reference is maintained in:

```text
docs/UI-BLUEPRINT-AND-ROUTE-MAP.md
```

## 4. UI coverage

The rebuilt interface contains:

- **19 management domains**
- **400 module base routes**
- **1 executive dashboard**
- **401 total base screens**
- reusable UI-only new, detail, and edit previews for module routes

The domains are:

1. Planning and Performance
2. Projects and Locations
3. Requisitions and MFR
4. Procurement
5. Finance and Accounting
6. Human Resources
7. Payroll
8. E4BL Education
9. A2PHC Health
10. Climate Action
11. Women Empowerment
12. Inventory and Assets
13. Donors, CSR, Grants, and Sponsorship
14. MEAL and Impact
15. Meetings and Communication
16. Training and Learning
17. Documents and Evidence
18. Reports and Analytics
19. Administration and System

## 5. Reusable UI patterns

The interface includes management-ready patterns for:

- executive and module dashboards
- searchable registries and data tables
- draft and approval workflows
- new and edit forms
- synthetic record details
- individual work plans
- individual achievement reports
- project management and achievement reports
- calendars
- document and training libraries
- profiles
- configuration pages
- evidence and attachment panels
- workflow history and audit timelines
- responsive module catalogue

## 6. Workflow-state presentation

The UI presents the planned record lifecycle visually:

```text
Draft
→ Submitted
→ Under Review
→ Returned for Correction
→ Resubmitted
→ Recommended
→ Approved
→ In Progress
→ Completed
→ Verified
→ Closed
```

Additional states such as rejected, cancelled, on hold, partially approved,
adjusted, and reopened can be represented through the shared status system.

These states are visual only until a later approved functional task implements
enforcement, persistence, authorization, and audit behavior.

## 7. Product and security boundaries preserved

The rebuilt UI does not implement or claim:

- authentication or session security
- role, project, location, ownership, or sensitivity enforcement
- database persistence
- production Prisma migrations
- approval authority or separation-of-duties enforcement
- financial posting or calculation
- clinical processing or medical-policy decisions
- payroll processing
- notifications, uploads, exports, integrations, or online meeting services
- historical data migration

All displayed people, identifiers, dates, amounts, beneficiary numbers, patient
visits, student records, financial figures, and performance values are
synthetic.

## 8. Responsive behavior

The complete portal is designed for:

- desktop management presentations
- laptop and tablet use
- mobile field and management review

Responsive behavior includes collapsible navigation, mobile bottom navigation,
stacked dashboard cards, scrollable tables, adaptive forms, single-column
catalogue cards, and mobile-safe spacing.

## 9. Deployment configuration

The repository contains a root `netlify.toml` for the pnpm monorepo. The
frontend build target is `@hsf/web`, and the publish output is
`apps/web/.next`.

Detailed deployment guidance is in:

```text
docs/NETLIFY-DEPLOYMENT.md
```

## 10. Validation performed in the rebuild environment

The following checks passed:

- repository structure verification
- sensitive-file guard
- TypeScript and TSX syntax parsing for all web source files
- strict TypeScript static analysis of the web source using temporary framework
  declarations
- portal route count and uniqueness validation
- index, new, detail, and edit route-resolution checks
- static internal-link resolution checks
- CSS parser validation
- check for internal OpenAI package-registry URLs in lock and configuration
  files

The complete pnpm install, Prettier, ESLint, Vitest, and Next.js production build
could not be executed in the rebuild environment because external npm package
resolution timed out and the available runtime was Node.js 22 rather than the
repository-required Node.js 24.18.0.

These gates must be run on the user's machine or CI before a release-ready
claim:

```powershell
pnpm install --frozen-lockfile
pnpm verify:structure
pnpm verify:sensitive
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:run
pnpm --filter @hsf/web build
```

## 11. Next implementation method

Management should review the complete UI first. After approval, functionality
should be added as small vertical slices behind the existing routes.

A functional task should define:

- exact user roles
- project and location scope
- data model
- workflow states
- approval authority
- security and privacy controls
- audit behavior
- validation and tests
- migration and deployment implications

The interface should not be rebuilt during each functional milestone unless a
confirmed usability issue requires a controlled change.
