# HSF ERP v0.1.7 — Access-Control Contract

**Document status:** Implementation-ready **draft contract**, NOT enacted security controls.  
**Task:** v0.1.7 baseline verification, dated 30 October 2026.  
**Companion source:** `HSF_ERP_ACCESS_CONTROL_CONTRACT_v0.1.7_DRAFT.json` (machine-readable proposal).  
**Source hierarchy:** uploaded v0.1.6 repository, proposed PRD v1.0.0, 28 October handover, 30 October draft Admin and roadmap, explicit COM-first management instruction. Institutional mirror remains governed by the Knowledge Hub.

## 1. Product and pilot boundaries

The management UI blueprint contains 20 domains and 412 module routes, plus an executive route. This is NOT 20 functional domains. **All proposed module releases default to `BLUEPRINT`, disabled for ordinary users; the release registry is NOT wired to the product yet.** Admin controls must become functional separately and safely. COM is an **organizational unit / cost centre** and initial pilot context, not automatically a programme. E4BL, A2PHC and Climate Action are current programmes; Women Empowerment remains hidden pending management confirmation.

**Approved pilot order from current user instruction:** Foundation/Admin → **COM Head Office** → **E4BL Hazaribagh** → **A2PHC Bogura** → approved expansion including CAR and future programmes. This change supersedes older A2PHC-first planning for future implementation; it does not silently rewrite the historical PRD or the Knowledge Hub mirrored contract. Climate Action & Resilience is the newer management-facing programme name, while the existing mirrored contract still uses `CLIMATE_ACTION / Climate Action`. The mismatch requires coordinated governance reconciliation; this task does not overwrite the mirror.

## 2. One real authorization path, not a PIN or role-preview

```text
Browser / Next.js presentation
  ├─ temporary preview PIN gate (outer management-preview layer only)
  └─ verified Supabase Auth session (future separate identity step)
      ↓ bearer JWT validated by NestJS issuer, JWKS/signature, expiry, audience
NestJS local HSF user link by immutable auth subject (JWT sub)
      ↓ active organization user / permitted organization membership
      ↓ active canonical role + explicit action permission
      ↓ module release state (Pilot/Functional and assigned cohort)
      ↓ project + location + ownership / record assignment
      ↓ workflow status + data sensitivity + delegation / SoD
      ↓ permitted filtered Prisma query / transaction, else deny
      ↓ privacy-safe audit with correlation ID
```

**Default DENY.** User metadata, client-supplied scopes and hide/show controls must never grant authority. Any suspended local user is denied even with a valid Supabase token. A sysadmin can configure authorized access, but has **no automatic clinical, finance-posting or self-approval power**. Cross-site access is explicitly denied unless authorized.

## 3. Canonical module and permission registry

The JSON contract maps **all 20** `portal-catalog.ts` domain IDs to their **existing route prefixes**, classifications, scope flags and disabled release states. This is documentation, not an executable RBAC grant. Proposed permission grammar: `<module_namespace>.<resource>.<action>`. Suggested actions: `view`, `create`, `edit`, `submit`, `review`, `approve`, `reject`, `export`, `configure`, `post`, `close`, `reopen`, `verify`, `publish`. These are different authorities; **view** does not confer **edit**, **submit** does not confer **approve**, and **approve** does not confer **post** or **publish**.

Representative proposed role mappings are included in JSON: `SYS_ADMIN`, `FIN_OFF`, `AUDITOR`, `TEACHER`, `HEAD_TEACHER`, `MED_SUPERVISOR`, `PHYSICIAN`, plus **unapproved pilot-only templates** `COM_REQUESTER` and `COM_APPROVER`. They require a normalized management-approved canonical role matrix before any API is turned on. UI-preview role identifiers (`general-physician`, `medical-supervisor`, `system-administrator`, etc.) must be mapped intentionally; no UI profile is itself an HSF ERP permission.

## 4. Data boundaries and least privilege

- **COM:** Head Office scoped organization/user/role configuration. A COM requester cannot approve their own requisition; approval thresholds remain unspecified until approved policy is available.
- **E4BL Hazaribagh:** teachers limited to assigned centre and classes; children's images, guardian contact and sensitive fields require extra grants and consent controls; a school user cannot read healthcare clinical records.
- **A2PHC Bogura:** staff have location/camp and record-specific rights; supervisors enter operational registration/camp data; doctors receive only assigned clinical consultations. Finance cannot inspect clinical details simply to verify expenses.
- **CAR/future:** programme activation, modules and local permissions need independently approved release gates, not simply a new navigation link.
- **Public information:** restricted operational rows never flow directly to web/social; use verification, management approval and Approved Information Layer.
- **Evidence versus sync:** `Synced` never implies `Verified`; RAW → CLEANED → VERIFIED and CALCULATED/ESTIMATED/INFERRED remain separate.

## 5. Authorization inputs and expected error behavior

`subject`, `organizationId`, `localUserId`, `accountStatus`, active `roleIds`, permissions, `projectIds`, `locationIds`, `record assignment`, `workflow state`, `data classification`, `module release state`, `delegation and SoD` must be derived or resolved server-side, **not accepted as trusted browser role claims**. For valid but insufficient access, return `403` (or a documented existence-hiding `404`). An unauthenticated call is `401`; unauthorized write is rejected before transaction mutation. Workflow conflicts return `409`; server errors expose no patient, learner, staff, or finance data.

Authorization rules belong to NestJS business services, query filters and transactions; PostgreSQL RLS/grants are defense-in-depth where appropriate. A per-project/location filter is mandatory for list, details, create, update and exports. No approval if requester and approver are the same person. Privilege elevation requires independent authorization/audit.

## 6. Audit contract

Audit **denials**, administrative privilege changes, account suspension, module-release changes, exports, sensitive reads (per approved policy) and business transitions. Record event ID, UTC timestamp, actor and organization, action, resource type/identifier where permissible, scope, allow/deny, reason code and correlation ID; exclude passwords, PINs, JWTs, full clinical notes, child identifiers beyond necessity and sensitive payload bodies. Event retention, access and alert thresholds require HSF governance approval.

## 7. Initial functional vertical slice — next task, not implemented now

- Configure a **Google-only** Supabase sign-in mode and internal administrative allowlist process with one environment bootstrap identity (pending exact provisioning approval).
- Link signed-in identity to internal `User` by immutable Supabase subject; reject unknown, disabled or unassigned users.
- Configure minimum COM Head Office org/unit scope and **one read-only** permitted `administration.organization.view` route/service with synthetic fixture data.
- Add NestJS authentication middleware/guard for JWT validation, HSF user and scopes, deny-by-default authorization; validate 401/403 and scope-switch attempts.
- Capture privacy-safe audit for granted and denied access; prove disabled users are denied after sign-in.
- Keep preview PIN separate until supervised release decision; no patient/student/finance data, no live transaction, no automatic Admin business approval.
- Add browser integration, API integration, DB migrations, security, restore and UAT gates before live usage.

## 8. Approval dependencies

Before enabling functional business routes: canonical role names and aliases, initial COM unit/location master, initial Admin module activation, exact authentication method/MFA and JWT settings, user allowlist and offboarding rules, audit retention, emergency access, patient/learner safeguarding, backup recovery controls, and clear management owner for access changes. The PRD remains a proposed baseline until formal adoption/change control.

**Reference:** the companion JSON is intentionally schema-adjacent planning data. Neither this document nor passing its validator implements authentication, grants, RLS, audit persistence or privacy protection.
