# HSF ERP Architecture

## Architecture style

HSF ERP begins as a TypeScript modular monolith in a pnpm monorepo.

```text
Browser
  ↓
Next.js Web
  ↓
NestJS REST API
  ↓
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

PostgreSQL is the source of truth. Prisma manages schema and migrations.

The foundation schema contains only organization, users, roles, permissions, project access, location access, fiscal years, periods, and audit events. Finance and programme entities must be added incrementally with tests.

## Security

- Least privilege
- Project and location scoping
- Sensitive-data classification
- No real HSF data in source control
- Private attachments
- Audit logging
- Controlled posting and period closure

## Deployment direction

Initial environments:

- Local
- Development
- Staging
- Production

Production should use managed infrastructure and private object storage rather than the local Docker Compose services.
