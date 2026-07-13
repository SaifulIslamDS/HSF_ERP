# Release Process

1. Confirm accepted scope.
2. Review the entire diff.
3. Run repository validation.
4. Run database validation when applicable.
5. Complete manual QA.
6. Confirm no sensitive data.
7. Update `docs/CURRENT-STATUS.md`.
8. Create release notes under `docs/releases/`.
9. Commit with an approved message.
10. Tag only when the release is accepted.
11. Deploy to staging.
12. Complete staging acceptance.
13. Deploy to production according to the approved change window.

Do not tag a release when validation is incomplete.
