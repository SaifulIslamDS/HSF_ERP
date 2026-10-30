# Next Task — Controlled Phase G1: COM Identity / Read-Only Authorization Vertical Slice

**Status:** Proposed after v0.1.7 baseline verification; **not authorized for release**.  
**Source:** 30 October 2026 Admin Control Centre Specification and Revised COM-first Roadmap; `docs/access/HSF_ERP_ACCESS_CONTROL_CONTRACT_v0.1.7_DRAFT.md`.

## Mandatory prerequisites

1. Perform clean checkout of actual Git repository to verify release/tag and compare against provided 28 October source ZIP.
2. Install Node.js 24.18.0 and pnpm 11.10.0; install lockfile and pass repository CI gates: structure, sensitive, alignment, Prisma format/validate/generate, Prettier, ESLint, TypeScript, Vitest and production builds.
3. Run preview PIN HTTP/browser QA including desktop/mobile, 5-failure throttle, safe return, cookie flags, API 401, idle/logout and secrets/headers; capture evidence.
4. Review and approve canonical roles, Supabase provisioning/Google mode, COM unit/location and minimum module release, audit, backup and deprovisioning policies. Reject migrations/live connections until separately approved.

## Minimal implementation scope when approved

- Use existing Next.js/NestJS/Prisma/Supabase architecture and ADR-0005.
- Identity: validate Supabase-issued JWT on the server, link immutable subject to authorized HSF local user, deny disabled/unlisted identities.
- Scope: use active `UserRole`, `UserProjectAccess`, `UserLocationAccess`, and module acceptance registry for **COM** only.
- Permit one documented synthetic **read-only** Admin profile route; prove direct route/API denials and audit.
- Retain preview PIN as independent outer preview layer until replacement is independently accepted.
- Use no real learner, patient, payroll or financial transaction data.

## Test before any release

No auth → 401; unknown user → deny; suspended user → deny; out-of-unit or out-of-location user → deny; tampered browser role ignored; stale/revoked assignment denied; allowed read-only user can read only COM synthetic fixture; write/approve denied; denied requests audited without sensitive payload; logout and token expiry respected. Module defaults remain hidden for ordinary users.

**Excluded:** full Admin CRUD, COM requisition transactions, school/clinic persistence, programme rollout, deployment, Git push/tag/release. These follow separate approval and acceptance gates.
