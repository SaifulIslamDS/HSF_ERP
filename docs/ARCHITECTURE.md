# HSF ERP Architecture

## Architecture style

HSF ERP begins as a TypeScript modular monolith in a pnpm monorepo.

```text
Browser
  ↕ secure server-side session
Next.js Web
  ↔ Supabase Auth (`@supabase/ssr` cookie session)
  ↓ Supabase-issued JWT
NestJS REST API
  ↓ HSF authorization context
Domain Modules
  ↓
Prisma
  ↓
PostgreSQL
```

Background reports, imports, notifications, and scheduled work will be processed through the worker application and Redis queues when those capabilities are implemented.

## Applications

### `apps/web`

- Next.js App Router
- Management and field interfaces
- English and Bangla support
- Mobile-first forms
- Server and client rendering selected per use case

### `apps/api`

- NestJS REST API
- Domain-module boundaries
- Authorization
- Audit logging
- Financial workflow services
- OpenAPI later

### `apps/worker`

- Background reports
- Imports
- Notification delivery
- Reconciliation assistance
- Scheduled checks

## Shared packages

- `@hsf/auth`: permissions and authorization primitives
- `@hsf/config`: controlled defaults
- `@hsf/contracts`: shared API contracts
- `@hsf/database`: Prisma and database access
- `@hsf/reporting`: reporting primitives
- `@hsf/ui`: shared React components
- `@hsf/validation`: shared validation

## Module boundaries

The API module directories are scaffolds. Features should be implemented inside their domain rather than in one global service.

Primary domains:

- Identity and access
- Organization and master data
- Planning and budget
- MFR
- Procurement
- Disbursement and IOU
- Accounting and voucher
- Cash and bank
- Period close
- HR and payroll
- E4BL
- A2PHC
- Climate Action
- Women Empowerment
- Donors and grants
- MEAL
- Documents

## Database

PostgreSQL is the source of truth. Supabase PostgreSQL is the preferred
production database host. Prisma manages HSF ERP schema definitions, migrations,
queries, and application database access.

The foundation schema contains only organization, users, roles, permissions, project access, location access, fiscal years, periods, and audit events. Finance and programme entities must be added incrementally with tests.

## Security

- Supabase Auth is the approved identity provider for Phase 1A.
- Next.js uses `@supabase/ssr` with secure cookie-based sessions.
- NestJS validates Supabase-issued access tokens using the configured Supabase
  project issuer and JWKS endpoint, including signature, expiry, and required
  claims.
- The immutable Supabase Auth user identifier in JWT `sub` links identity to a
  local HSF user.
- HSF ERP PostgreSQL tables are authoritative for HSF membership, roles,
  permissions, assignments, approval authority, account status, separation of
  duties, and audit history. Supabase user metadata, custom claims, or RLS must
  not be the sole source of HSF business authorization.
- NestJS enforces authorization; client-side visibility is not a security
  boundary.
- Browser clients access core ERP business data through the NestJS domain API,
  not through direct exposure of business tables.
- Least privilege
- Project and location scoping
- Sensitive-data classification
- No real HSF data in source control
- Private attachments
- Audit logging
- Controlled posting and period closure

See `docs/decisions/ADR-0005-supabase-auth-and-postgresql-hosting.md`.

## Deployment direction

Initial environments:

- Local
- Development
- Staging
- Production

Production should use managed infrastructure and private object storage rather than the local Docker Compose services.
