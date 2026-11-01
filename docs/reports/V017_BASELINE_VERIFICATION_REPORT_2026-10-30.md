# HSF ERP — v0.1.7 Baseline Verification & Access-Control Contract

**Date:** 30 October 2026  
**Status:** Controlled development **candidate**, NOT a published v0.1.7 release or a production security signoff.  
**Baseline:** `HSF_ERP-main-28-10-26.zip`, internal packages `0.1.6`; no `.git` included.  
**Direction:** Admin foundation → **COM Head Office** → **E4BL Hazaribagh** → **A2PHC Bogura** → accepted expansion / CAR / new programmes.

## 1. Git and version

- Repository ZIP extracted. It does **not** contain Git history, branch information or tags, so it is impossible to confirm the source commit, `v0.1.6` Git tag, or remote state.
- Root, web, API, worker and shared package manifests identify version **0.1.6**. Deliberately **not bumped**: v0.1.7 must not be called released without full CI/QA and change-control authorization.
- Baseline preview PIN gate and earlier A2PHC UI expansion appear present in source; no production business feature inferred from UI.

## 2. Validation commands and exact results

| Command                                                                        | Observed result                                                                       | Limitation                                                               |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `node scripts/verify-structure.mjs`                                            | **PASS** — 26 required files                                                          | Dependency-free structural check                                         |
| `node scripts/check-sensitive-files.mjs`                                       | **PASS**                                                                              | Static secret/public-file guard                                          |
| `node scripts/verify-alignment.mjs`                                            | **PASS**                                                                              | Mirrored institutional policy check                                      |
| `node scripts/verify-v017-contract.mjs`                                        | **PASS** — 20 domains, unchanged UI assets, disabled module defaults, COM-first order | Draft-contract/source-level validator                                    |
| `node --experimental-strip-types --test scripts/preview-access-smoke.test.mjs` | **PASS 5/5**                                                                          | Real preview helper functions, Node 22 TS stripping; NOT Next.js HTTP QA |
| `pnpm install --frozen-lockfile`                                               | **BLOCKED**                                                                           | pnpm 11.10.0 not available; Corepack gets registry `EAI_AGAIN`           |
| `pnpm verify:structure`, `verify:sensitive`, `verify:alignment`                | **BLOCKED as pnpm commands**                                                          | Equivalent direct Node scripts above passed                              |
| `pnpm format:check`                                                            | **NOT RUN**                                                                           | No pnpm/dependencies                                                     |
| `pnpm lint`                                                                    | **NOT RUN**                                                                           | No pnpm/dependencies                                                     |
| `pnpm typecheck`                                                               | **NOT RUN**                                                                           | No pnpm/dependencies                                                     |
| `pnpm test:run` / Vitest                                                       | **NOT RUN**                                                                           | No pnpm/dependencies; new Vitest cases not yet confirmed                 |
| `pnpm build`                                                                   | **NOT RUN**                                                                           | No pnpm/dependencies; cannot claim build pass                            |
| Prisma format/validate/generate                                                | **NOT RUN**                                                                           | Toolchain unavailable; no operational database needed for this task      |

Environment has Node **22.16.0** rather than required **24.18.0** and cannot retrieve pnpm **11.10.0** because registry DNS lookup fails. This **does not establish a code failure**, but it blocks release verification.

## 3. Preview PIN gate QA

**Successfully unit-tested using actual TypeScript utility:** rejects unconfigured signing secret, invalid PIN, incorrect PIN length; validates session; rejects expired and tampered tokens; invalidates token when PIN changes; bounds session lifetime; preserves valid internal return paths while rejecting external, slash-backslash and control-character variants.

**Source inspected, not tested via browser/HTTP:** six-digit numeric input, POST verification, redirect to original ERP route, signed HttpOnly preview cookie, `Secure` in production and `SameSite=Lax`, local five-failure/15-minute lockout, public `/api/health`, protected `/api/*` returning 401 without preview access. These cannot be labeled HTTP passes without a running Next.js app.

**Confirmed defect fixed:** previously `safeReturnTo('/\\external.example')` could be interpreted as an external URL by WHATWG parsing. New validator rejects backslashes and control characters. Vitest regression cases added; dependency-free tests executed.

## 4. Security findings / boundaries

1. **Blocking before sensitive real data:** preview PIN is shared, anonymous, not Supabase identity, not RBAC or independent audit. It cannot support ERP records.
2. Idle sign-out exists only in **browser JavaScript/localStorage**. The server validates absolute cookie expiry but does **not** enforce a rolling inactivity timeout. The UI wording must not be presented as a proven server timeout.
3. PIN brute-force state uses a server-instance-local `Map`; do not mistake it for distributed throttling. Client IP resolution involves proxy headers and needs trusted edge configuration.
4. Environment can explicitly disable the preview gate. Deployment configuration and all bypass paths need independent review.
5. `portal-role-access.ts` contains UI role-preview logic and an executive fallback. Neither may authorize server data. New API must default **deny**.
6. Source-only checks cannot establish deployed HTTP behavior, cookie correctness, CSRF protections, real server permissions, device security, role scoping, browser accessibility or secret-free HTTP response bodies.

## 5. UI preservation and role preview

The original 30 Next.js UI/asset files recorded in `docs/access/HSF_UI_PRESERVATION_SHA256_v0.1.6.json` matched **SHA-256** after patch. This covers landing/portal/role-visibility components, E4BL/A2PHC UI sources, CSS and public assets. Only `preview-access.ts` and its tests changed in the web application. It proves **source preservation**, not screenshot pixel parity.

Original test expectations still declare **20 planned domains, 412 domain/module routes, 413 including executive**. The route/role-preview modules have not been altered. Browser smoke of `/`, `/administration/*`, `/e4bl/*`, `/a2phc/*` and other representative routes **remains pending**.

## 6. A2PHC / E4BL isolation

Both programmes' source UI remains unchanged. No patient, visit, consultation, student, enrollment or attendance persistence has been added. Cross-role/clinical confidentiality and child safeguarding are **draft contract rules**, not implemented server-enforced isolation. Local synthetic demo labels remain in the untouched UI.

## 7. Mobile QA

CSS and mobile navigation sources unchanged by hash. Actual 360/390px mobile, 768px tablet, 1280px desktop, keyboard, focus, form errors, touch navigation, role switching and access screen rendering **not executed**. Must test after installing dependencies on supported Node/pnpm.

## 8. Access-control contract summary

New `docs/access/HSF_ERP_ACCESS_CONTROL_CONTRACT_v0.1.7_DRAFT.json` records **all 20 module IDs/prefixes**, default blueprint/hidden status, action grammar, proposed role-to-module matrix, organization/project/location/record scope, review-versus-approval separation, clinical/finance/child privacy, COM read-only example, authorization denial codes and audit-event rules. Its `.md` companion describes the enforcement path using Supabase Auth → local HSF User → NestJS authorization → Prisma filtered transactions. **Status: DRAFT_NOT_ENFORCED.**

Proposed COM_REQUESTER / COM_APPROVER templates, Google-only setup details, master locations, approvals, module activation and retention remain controlled decisions — not fabricated approved policy.

## 9. Documentation/code changes

- `apps/web/src/lib/preview-access.ts`: return URL validation fix.
- `apps/web/src/lib/preview-access.test.ts`: additional Vitest regression tests (unrun).
- `scripts/preview-access-smoke.test.mjs`: executable dependency-free source tests (5 passed).
- `scripts/verify-v017-contract.mjs`: contract and UI hash validator (passed).
- `docs/access/*`: JSON + Markdown contract and original UI fingerprints.
- `docs/decisions/ADR-0006-com-first-pilot-sequence.md`: explicit pilot sequence, no business-policy adoption.
- `docs/product/OPEN-PRODUCT-DECISIONS.md`: role/access/COM/policy outstanding decisions.
- `docs/CURRENT-STATUS.md`: release candidate status and blockers.
- `docs/codex/NEXT-TASK.md`: next G1 COM read-only authenticated slice with prerequisites.
- This report.

No Git commit/push/tag, production deployment, real data, live database, API business feature, migration or module activation.

## 10. Acceptance-criteria disposition

| Original v0.1.7 criterion                         | Disposition                                                        |
| ------------------------------------------------- | ------------------------------------------------------------------ |
| Exact Git/tag baseline                            | **Partial** — source package version yes, commit/tag unavailable   |
| Required test gates                               | **Blocked** — direct Node checks pass; full pnpm CI cannot run     |
| Preview PIN QA                                    | **Partial** — helper function passes, HTTP/UX untested             |
| UI preservation                                   | **Pass at source-hash level**; rendered checks pending             |
| Role preview intact                               | **Preserved at source level**; browser checks pending              |
| PIN distinct from production identity             | **Pass by design and documentation**; production auth still absent |
| Institutional boundary                            | **Pass** — mirror unchanged and alignment script passed            |
| Contract for next task                            | **Pass as proposal**, pending role/policy approval                 |
| No business data or new operational functionality | **Pass**                                                           |
| v0.1.7 release-ready                              | **Not met**                                                        |

## 11. Remaining warnings and exact recommended next task

**First:** run locked install and full CI with Node 24.18.0 / pnpm 11.10.0 in a true Git clone. Confirm commit/tag, Vitest, TypeScript, lint, format, Prisma, build, and HTTP/mobile/role-preview regression. Investigate `safeReturnTo` fix under real Next runtime, production cookie flags, rate-limit, API 401 and idle behavior. Do not approve a release without that evidence.

**Then:** after reviewing management approvals for canonical role names, COM unit/location and Google/Supabase invite/allowlist/MFA/audit rules, approve **G1** as a separate task: _authenticated HSF local user linked by Supabase subject + NestJS server-guarded, read-only COM Admin endpoint with audit and negative-path tests_. Keep all clinical, school and financial transactions unavailable.
