# Installation Guide — A2PHC Continuation and Codex Documents

## What this package does

This package adds documentation only.

It does not modify application code or functionality.

## Install manually

1. Extract the ZIP.
2. Open the extracted `docs/` folder.
3. Copy its contents into the repository's existing `docs/` folder.
4. Keep existing files unless the same filename already exists and you have
   reviewed the difference.
5. Confirm these files exist:

```text
docs/A2PHC-CONTINUATION-HANDOVER-v0.1.5.md
docs/A2PHC-CURRENT-STATUS-v0.1.5.md
docs/A2PHC-FUNCTIONAL-ROADMAP.md
docs/product/A2PHC-OPEN-DECISIONS.md
docs/codex/A2PHC-CODEX-WORKING-INSTRUCTIONS.md
docs/codex/NEXT-TASK-v0.1.6.md
```

6. Add the new documents to `docs/DOCUMENT-STACK.md` if that file is the active
   document index.
7. Add a short reference from `docs/CURRENT-STATUS.md`.
8. Review the diff.

## Suggested documentation commit

```bash
git add docs

git commit -m "docs(a2phc): add continuation and Codex functionalization guide"

git push origin main
```

A documentation-only update does not require a new application release tag
unless HSF deliberately versions documentation changes.

## Codex start prompt

```text
Read AGENTS.md and the A2PHC continuation document set.

Execute only the task in docs/codex/NEXT-TASK-v0.1.6.md.

Inspect the repository before editing. State your understanding, implementation
plan, expected files, assumptions, and open decisions. Then perform the approved
scope, run all required validation, review the complete diff, update current
status, and return the required final report.

Do not implement business functionality. Do not change unrelated module UI.
Do not commit, push, tag, release, or deploy.
```
