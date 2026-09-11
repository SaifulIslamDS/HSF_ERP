# HSF ERP — Institutional Alignment Summary

This copy-paste-ready snapshot was prepared from the user-supplied repository ZIP on 11 September 2026.

## Repository cleanup

- Added missing root README and current repository manifest.
- Removed obsolete `overlay/` and `.hsf-patch-backup/` patch-package residue after confirming current files were already integrated in the active tree.
- Removed generated `apps/web/tsconfig.tsbuildinfo` and added `*.tsbuildinfo` to `.gitignore`.
- Synchronized private workspace package versions to v0.1.6.
- Corrected stale health/API version surfaces.
- Aligned pnpm lockfile configuration with `.npmrc` and changed CI to `--frozen-lockfile`.

## Institutional alignment

- Mirrored HSF Digital Institutional System Contract v1.0.0 exactly from the Knowledge Hub.
- Added system-boundary, programme-registry, evidence/classification, approved-information, security, public-repository and external-standards documentation.
- Reworked volatile discovery figures so enrolment, staffing, coverage and similar changing values require dated approved sources instead of being architecture constants.
- Preserved E4BL, A2PHC and Climate Action as canonical current programmes.
- Retained Women Empowerment as a UI/product blueprint domain whose active programme status requires management confirmation.
- Standardized current A2PHC naming to “Access to Primary Healthcare”.
- Kept historical v0.1.5 release records intact, with warnings where old coverage/staffing wording must not be read as current operational truth.

## Security/CI alignment

- Preview PIN can no longer be used as the session-signing secret fallback.
- Added tests for strong independent preview signing-secret configuration.
- Sensitive-file guard runs before dependency installation in CI.
- CI now uses the committed lockfile in frozen mode.
- Added institutional alignment verification to CI.

## Deliberately not implemented

No real ERP business functionality was fabricated. Production authentication/RBAC, operational persistence, approvals, finance, E4BL persistence, A2PHC clinical persistence and go-live controls remain future controlled work as stated in `docs/CURRENT-STATUS.md`.
