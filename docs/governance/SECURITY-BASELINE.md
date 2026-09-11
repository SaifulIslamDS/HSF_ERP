# HSF ERP Security Baseline

**Status:** Alignment baseline, not certification  
**Date:** 11 September 2026

## External baselines

- OWASP ASVS 5.0.0 — detailed application-security verification baseline.
- OWASP Top 10:2025 — developer/risk-awareness baseline.
- NIST CSF 2.0 — organizational cybersecurity-risk outcomes.
- NIST SSDF 1.1 — secure software-development practices.
- WCAG 2.2 AA — accessibility target for web interfaces.

See `EXTERNAL_STANDARDS.md` for official references.

## Current ERP control position

### Implemented/foundation controls

- Public-repository sensitive-file guard.
- Temporary server-side preview PIN gate.
- Signed HttpOnly preview cookie.
- Preview brute-force throttling.
- Architecture for Supabase identity + local HSF authorization.
- RBAC/SoD design documentation.
- Audit-event foundation in Prisma.
- CI pipeline definition.

### Not yet production controls

- Individual production authentication.
- Organization-membership enforcement.
- Server-enforced role/project/location/sensitivity authorization.
- Full audit logging of protected business actions and denials.
- Production operational persistence/workflows.
- Mature secret management and deployment hardening.
- Security testing against the ASVS baseline.

## Preview-gate rule

The preview PIN gate is a temporary management-preview control, not user authentication or RBAC. A strong server-only signing secret is required when the gate is enabled; the PIN must never be used as the signing secret.

## Go-live rule

No real patient, learner, payroll, finance or other restricted production data should be entered until production identity, authorization, persistence, audit, privacy and backup controls appropriate to the domain are implemented and accepted.
