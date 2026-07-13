# HSF ERP — Current Status

**Current version:** `v0.1.3`  
**Stage:** Platform, Executive UI, and Codex Documentation Foundation  
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

## Not completed

- Production authentication
- Organization membership enforcement
- Role-based access enforcement
- Project and location assignment enforcement
- Approved authentication-provider decision
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
- Full current monorepo validation must be re-established by Codex against the
  actual local repository.
- Do not assume `pnpm test:run` or all repository-level gates pass until Codex
  runs and reports them.

## Current next task

Follow `docs/codex/NEXT-TASK.md`.

The current task is a repository baseline audit and Phase 1A
authentication/RBAC implementation plan. It does not implement ERP business
features.
