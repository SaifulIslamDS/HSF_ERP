# HSF ERP Changelog

## Unreleased — Institutional Alignment Baseline — 11 September 2026

- Added root README describing the actual v0.1.6 implementation boundary.
- Replaced outdated root A2PHC v0.1.5 package manifest with a truthful repository manifest.
- Added HSF Digital Institutional System Contract v1.0.0 mirror and governance documents.
- Added programme-status, evidence-state, data-classification and approved-information rules.
- Added public-repository and external-security/accessibility baselines.
- Hardened temporary preview-session signing so the six-digit PIN is never used as the signing secret.
- Added repository alignment validation and strengthened CI ordering.
- Added TypeScript build artifacts to `.gitignore` and removed committed `tsconfig.tsbuildinfo`.
- Removed obsolete patch-package directories (`overlay/`, `.hsf-patch-backup/`) from the clean repository snapshot after confirming their active changes are already integrated.
- Corrected current health/version surfaces to v0.1.6 where they were stale.
- Clarified that programme/coverage/staffing figures in UI are synthetic or volatile and are not institutional source-of-truth values.
- Kept production authentication, RBAC enforcement, operational persistence and business workflows explicitly unimplemented.

## v0.1.6 — Temporary Management Preview PIN Gate
See `docs/releases/v0.1.6.md`.

## v0.1.5 — A2PHC UI Expansion and Role-Aware Module Visibility
See `docs/releases/v0.1.5.md`.

Earlier release notes remain under `docs/releases/`.
