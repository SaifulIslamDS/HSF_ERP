# Security Policy — HSF ERP

## Public source repository

This repository is intentionally public. Never report or commit real HSF patient, learner, staff, payroll, finance, donor, safeguarding or other restricted operational data here.

Do not post exploitable production secrets or sensitive disclosure details in public issues. Use an appropriate private HSF management/technical channel for sensitive reports.

## Security baseline

HSF uses OWASP ASVS 5.0.0 and OWASP Top 10:2025 as application-security baselines, NIST CSF 2.0 for organizational cyber-risk outcomes, NIST SSDF 1.1 for secure software development and WCAG 2.2 AA as the accessibility target. These are alignment baselines, not certification claims.

See `docs/governance/SECURITY-BASELINE.md`.

## Current limitation

The v0.1.6 repository is not production ready. The management-preview PIN gate is temporary and does not replace individual authentication, RBAC or production authorization. Do not introduce real restricted operational data until the controls listed in `docs/CURRENT-STATUS.md` and the relevant go-live acceptance criteria are implemented.
