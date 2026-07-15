# HSF ERP

A customized NGO Enterprise Resource Planning and Management Information System
for **Human Safety Foundation (HSF)**.

HSF ERP is designed to connect planning, people, projects, funds, activities,
approvals, evidence, achievements, procurement, finance, HR, education, health,
donors, meetings, training, documents, and reporting through one controlled
platform.

## Current release

**Version:** `v0.1.4 — Complete Management UI Blueprint`

The repository now contains the complete management-facing interface planned in
the HSF ERP overview and canonical documentation:

- One executive dashboard
- Nineteen connected UI domains
- Four hundred planned module screens
- Responsive desktop, tablet, and mobile navigation
- Dashboard, table, workflow, form, report, calendar, library, profile,
  settings, detail, evidence, and audit-history patterns
- Synthetic demonstration content only

The complete route catalogue is available in
[UI Blueprint and Route Map](docs/UI-BLUEPRINT-AND-ROUTE-MAP.md).

## Important boundary

This release is **UI only**.

A visible route does not mean that its authentication, authorization, database,
calculation, approval, posting, notification, export, upload, clinical, payroll,
or integration functionality exists.

Functionality will be connected step by step through separately approved tasks.
No real HSF financial, patient, student, payroll, donor, banking, employee, or
credential data is included.

## Technology baseline

- Node.js 24 LTS
- pnpm 11
- TypeScript 5.9
- Next.js 16
- React 19
- NestJS 11
- PostgreSQL 18
- Prisma ORM 7
- Redis 8
- Turborepo
- Vitest
- Docker Compose

## Repository structure

```text
HSF_ERP/
├── apps/
│   ├── web/          # Complete management UI blueprint
│   ├── api/          # NestJS foundation
│   └── worker/       # Background-worker foundation
├── packages/
│   ├── auth/
│   ├── config/
│   ├── contracts/
│   ├── database/
│   ├── reporting/
│   ├── ui/
│   └── validation/
├── docs/
├── infrastructure/
├── scripts/
├── AGENTS.md
├── docker-compose.yml
├── netlify.toml
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Local setup

Install Node.js `24.18.0` or a compatible declared version.

```powershell
corepack enable
corepack prepare pnpm@11.10.0 --activate
pnpm install
pnpm --filter @hsf/web dev
```

Open:

- Public presentation: `http://localhost:3000`
- Complete ERP UI: `http://localhost:3000/dashboard`
- Module catalogue: `http://localhost:3000/administration/module-catalogue`

The current UI does not require PostgreSQL, Redis, Supabase, or the NestJS API to
be running.

## Full development services

For later functional work:

```powershell
Copy-Item .env.example .env
pnpm install
docker compose up -d
pnpm db:validate
pnpm db:generate
pnpm dev
```

## Validation

```powershell
pnpm verify:structure
pnpm verify:sensitive
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:run
pnpm build
```

## Netlify deployment

The root `netlify.toml` is prepared for the Next.js monorepo web application.
Connect the GitHub repository and keep the Netlify base directory blank so the
root pnpm workspace and lockfile are detected.

The file supplies:

```text
Build command: corepack pnpm --filter @hsf/web build
Publish directory: apps/web/.next
Node version: 24.18.0
```

## Canonical documentation

Read in the order defined by [AGENTS.md](AGENTS.md) and
[Document Stack](docs/DOCUMENT-STACK.md).

Key references:

1. [Current Status](docs/CURRENT-STATUS.md)
2. [Complete UI Blueprint and Route Map](docs/UI-BLUEPRINT-AND-ROUTE-MAP.md)
3. [Product Vision](docs/product/HSF-ERP-PRODUCT-VISION.md)
4. [Product Requirements](docs/PRODUCT-REQUIREMENTS.md)
5. [Master System Design](docs/MASTER-SYSTEM-DESIGN.md)
6. [Architecture](docs/ARCHITECTURE.md)
7. [Data Model](docs/DATA-MODEL.md)
8. [RBAC and Approvals](docs/RBAC-AND-APPROVALS.md)
9. [Open Product Decisions](docs/product/OPEN-PRODUCT-DECISIONS.md)

## Data safety

Never commit real patient, student, employee, salary, bank, donor, bill,
voucher, identity, safeguarding, or credential data. Use synthetic fixtures and
screenshots only.
