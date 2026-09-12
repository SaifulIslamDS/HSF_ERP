# HSF ERP

Customized NGO ERP for **Human Safety Foundation (HSF)**.

## Current status

- **Current codebase version:** `v0.1.6`
- **Stage:** Complete Management UI Blueprint; Functional Implementation Pending
- **Current governance alignment baseline:** HSF Digital Institutional System Contract `v1.0.0` — 11 September 2026
- **Next controlled task:** `docs/codex/NEXT-TASK.md` (`v0.1.7` baseline verification and access-control contract)
- **Field Data Gateway:** offline-first capture/sync management UI blueprint added 12 September 2026; functional offline storage/synchronization remains pending.

The repository contains a broad management UI blueprint, but the existence of a screen or route does **not** mean the business function is implemented. Production authentication, server-enforced RBAC, operational database persistence, approval engines, financial processing, E4BL persistence, A2PHC clinical persistence, notifications, real uploads/exports and production deployment remain incomplete unless `docs/CURRENT-STATUS.md` explicitly says otherwise.

All management/UI people, amounts, records and performance values are synthetic demonstrations unless clearly documented as approved non-sensitive reference content.

## HSF digital architecture

The ERP is one layer of a wider institutional system:

`Operational ERP → Verification / MEAL → Approved Information → Reports / Public Platform`

The **Knowledge Hub is not the ERP**. The Knowledge Hub owns controlled institutional policies/frameworks/standards. The ERP owns protected operational implementation and records. Public systems receive only approved public information.

Canonical mirrored governance:

- `docs/governance/HSF_DIGITAL_SYSTEM_CONTRACT.json`
- `docs/governance/SYSTEM-BOUNDARIES.md`
- `docs/governance/PROGRAMME-REGISTRY.md`
- `docs/governance/DATA-CLASSIFICATION-AND-EVIDENCE.md`
- `docs/governance/APPROVED-INFORMATION-LAYER.md`
- `docs/governance/SECURITY-BASELINE.md`
- `docs/governance/PUBLIC_REPOSITORY_POLICY.md`
- `docs/governance/EXTERNAL_STANDARDS.md`

The canonical institutional contract is maintained in `SaifulIslamDS/hsfdigitalhub`; this repository mirrors it for implementation.

## Architecture

- pnpm + Turborepo monorepo
- Next.js web application
- NestJS API
- Worker foundation
- Prisma + PostgreSQL
- Supabase Auth + Supabase PostgreSQL architecture decision
- HSF authorization enforced through local HSF role/project/location/sensitivity rules when implemented

See `docs/ARCHITECTURE.md`, `docs/MASTER-SYSTEM-DESIGN.md`, and `docs/decisions/ADR-0005-supabase-auth-and-postgresql-hosting.md`.

## Local requirements

- Node.js `>=24.18.0 <27`
- pnpm `>=11.10.0 <12`

```bash
corepack enable
corepack prepare pnpm@11.10.0 --activate
pnpm install --frozen-lockfile
```

## Repository gates

```bash
pnpm verify:structure
pnpm verify:sensitive
pnpm verify:alignment
pnpm db:format
pnpm db:validate
pnpm db:generate
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:run
pnpm build
```

`pnpm verify` runs the repository verification, formatting, lint, typecheck, tests and build sequence.

## Public repository rule

This repository is intentionally public. Repository visibility is independent of the temporary preview PIN gate. **Never commit real patient/learner/HR/payroll/finance records, credentials, private keys, production secrets or restricted operational exports.**

## Preview access

The current management-preview PIN gate is temporary. It is not individual user authentication and it is not RBAC. The aligned baseline requires a strong server-only signing secret when the gate is enabled; the PIN must not serve as the signing secret.

## Contribution discipline

Use Conventional Commit-style messages where practical, preserve stable release history, update current-status documentation when implementation changes, and do not convert unresolved product questions into business rules without approval.
