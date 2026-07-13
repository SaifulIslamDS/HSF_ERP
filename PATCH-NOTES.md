# HSF ERP v0.1.3 Codex Documentation Stack Patch

## Important naming note

The repository uses `AGENTS.md`, not `AGENT.md`.

This is intentional because:

- the existing repository already uses `AGENTS.md`
- Codex reads repository instructions from that file
- the repository rule permits only `README.md` and `AGENTS.md` at root

## Apply

Extract this ZIP outside the repository, open PowerShell in the extracted patch
folder, and run:

```powershell
PowerShell -ExecutionPolicy Bypass -File .\apply-patch.ps1 `
  -RepoPath "D:\Essentials\HSF_ERP"
```

## Review and validate the documentation patch

```powershell
cd "D:\Essentials\HSF_ERP"

git status --short
git diff -- AGENTS.md docs package.json apps/web/package.json

pnpm format
pnpm verify:structure
pnpm verify:sensitive
pnpm format:check
```

This patch changes documentation and package version metadata only. It does not
change application runtime behavior.

## Suggested commit

```powershell
git add -A
git commit -m "docs(codex): add HSF ERP operating document stack"
git push origin main
```

## Suggested tag

```powershell
git tag -a v0.1.3 -m "v0.1.3 - Codex Documentation and Operating Stack"
git push origin v0.1.3
```

## GitHub release title

```text
v0.1.3 — Codex Documentation and Operating Stack
```

Use `docs/releases/v0.1.3.md` as the release note.

## First Codex action

After the patch is committed, open the repository in Codex and use:

```text
Read AGENTS.md and execute the single current task in docs/codex/NEXT-TASK.md.

Before changing anything, inspect the repository and state your plan. Do not
implement authentication or ERP business features in this task. Return the
complete required report from NEXT-TASK.md.
```
