# HSF ERP

A customized NGO Enterprise Resource Planning and Management Information System for **Human Safety Foundation (HSF)**.

HSF ERP is designed to integrate finance, annual budgeting, Monthly Fund Requisitions, procurement, bank and cash management, IOUs, payroll, HR, E4BL education-centre operations, A2PHC health services, donor management, project monitoring, and organizational reporting.

## Current status

**Version:** `v0.1.0 — Repository and Platform Foundation`

This repository contains:

- A pnpm and Turborepo monorepo
- A Next.js web-app foundation
- A NestJS API foundation
- A worker-service foundation
- A PostgreSQL and Prisma foundation schema
- Shared package scaffolding
- Docker-based PostgreSQL and Redis development services
- CI workflow
- Codex operating instructions
- Full product, architecture, workflow, data-model, RBAC, and implementation documentation

No production HSF financial, patient, student, payroll, donor, or banking data is included.

## Technology baseline

- Node.js 24 LTS
- pnpm 11
- TypeScript
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
│   ├── web/
│   ├── api/
│   └── worker/
├── packages/
│   ├── auth/
│   ├── config/
│   ├── contracts/
│   ├── database/
│   ├── reporting/
│   ├── ui/
│   └── validation/
├── docs/
├── scripts/
├── infrastructure/
├── .github/
├── AGENTS.md
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Prerequisites

Install:

- Node.js 24 LTS
- Corepack
- Docker Desktop
- Git

Enable pnpm:

```powershell
corepack enable
corepack prepare pnpm@11.10.0 --activate
pnpm --version
```

## Local setup

```powershell
Copy-Item .env.example .env
pnpm install
docker compose up -d
pnpm db:validate
pnpm db:generate
pnpm dev
```

Services:

- Web: `http://localhost:3000`
- API: `http://localhost:4000/api/v1/health`
- PostgreSQL: `localhost:5432`
- Redis: `localhost:6379`

The first `pnpm install` creates `pnpm-lock.yaml`. Commit that lockfile before feature implementation.

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

## Canonical documentation

Codex and developers must read:

1. [Current Status](docs/CURRENT-STATUS.md)
2. [Product Requirements](docs/PRODUCT-REQUIREMENTS.md)
3. [Master System Design](docs/MASTER-SYSTEM-DESIGN.md)
4. [Phase 1 Scope](docs/PHASE-1-SCOPE.md)
5. [Architecture](docs/ARCHITECTURE.md)
6. [Data Model](docs/DATA-MODEL.md)
7. [RBAC and Approvals](docs/RBAC-AND-APPROVALS.md)
8. [Decisions and Open Items](docs/DECISIONS-AND-OPEN-ITEMS.md)
9. [Codex Onboarding](docs/CODEX-ONBOARDING.md)

## Development rule

Every implementation task must have:

- Purpose
- Scope
- Acceptance criteria
- Validation commands
- Security and data considerations
- Documentation update
- Review before commit

See [AGENTS.md](AGENTS.md) and [Development Workflow](docs/DEVELOPMENT-WORKFLOW.md).

## Data safety

Never commit:

- Patient exports
- Student personal information
- Employee salary sheets
- Bank statements
- Donor KYC information
- Real bills or vouchers
- Production credentials
- `.env` files
- Database dumps

Use synthetic fixtures only.
