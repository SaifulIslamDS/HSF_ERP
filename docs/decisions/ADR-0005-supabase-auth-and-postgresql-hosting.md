# ADR-0005: Use Supabase Auth and Supabase PostgreSQL Hosting

**Status:** Accepted

**Decision date:** 13 July 2026

## Context

HSF ERP requires authentication shared by the Next.js web application and
NestJS API, plus managed production PostgreSQL hosting. HSF authorization also
depends on organization membership, role, project, location, workflow status,
sensitivity, separation of duties, approval authority, account status, and
audit history. Those are HSF domain rules and must remain in the ERP data model.

## Decision

- Supabase Auth is the managed identity provider for Phase 1A. It handles
  sign-in, sign-out, password reset, email verification, session management,
  user identity, and access-token and refresh-token issuance.
- Next.js uses `@supabase/ssr` with secure cookie-based sessions. Server-side
  code is responsible for reading and refreshing the authenticated session.
- NestJS validates Supabase-issued access tokens using the configured Supabase
  project issuer and JWKS endpoint before constructing an HSF authorization
  context. Validation must cover signature, expiry, and required claims.
- A local HSF user is linked to the immutable Supabase Auth user identifier
  represented by the JWT subject (`sub`). The subject identifies the actor; it
  does not grant ERP authorization.
- Supabase PostgreSQL is the preferred production database hosting platform.
- Prisma remains responsible for HSF ERP schema definitions, reviewed
  migrations, type-safe queries, and database access from the application.
- HSF ERP tables remain authoritative for organization membership, internal
  user profile, account status, roles, permissions, project assignments,
  location assignments, separation-of-duties rules, approval authority, and
  audit history.
- Supabase user metadata, custom claims, provider-level role data, and Row Level
  Security are not the sole source of HSF ERP business authorization.
- NestJS is the authoritative authorization enforcement boundary. Next.js may
  use the same HSF authorization context for presentation, but hiding UI is not
  an access control.
- Browser access to core ERP business data goes through the NestJS domain API.
  Business tables must not be directly exposed to browser clients as a bypass
  around domain rules, authorization, separation of duties, or audit logging.

## Consequences

- HSF avoids storing or verifying passwords in ERP tables.
- Authentication and production database availability depend on Supabase.
- Prisma migrations must be coordinated with Supabase PostgreSQL features and
  must not modify Supabase-managed authentication schemas.
- The database connection strategy must distinguish migration/direct access
  from runtime pooling according to the approved deployment design.
- Supabase project region, environments, MFA policy, password recovery,
  invitation and provisioning rules, JWT verification configuration, session
  duration, key rotation, database pooling, backups, and external-user handling
  must be configured before production use.
- Local suspension or assignment removal must deny ERP access even when the
  Supabase Auth session remains valid.
- Authorization changes take effect from HSF ERP tables and must be audited.
- Phase 1A implementation requires schema, integration, security, and
  denial-path tests in separately approved tasks.

## Alternatives considered

- Auth0 with separately hosted PostgreSQL: superseded before implementation in
  favor of the approved Supabase Auth and database platform.
- Self-hosted credentials and sessions: rejected for Phase 1A because it would
  make HSF responsible for password storage, recovery, and authentication
  operations.
- Supabase metadata, custom claims, or RLS as the sole ERP authorization source:
  rejected because they cannot replace HSF's project, location, workflow,
  sensitivity, approval, separation-of-duties, and audit rules.

## Scope

This ADR approves architecture only. It does not authorize authentication,
database-hosting, or deployment implementation outside the scope of
`docs/codex/NEXT-TASK.md`.
