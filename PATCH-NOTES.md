# HSF ERP v0.1.1 Executive UI Patch

## Apply

```powershell
PowerShell -ExecutionPolicy Bypass -File .\apply-patch.ps1 -RepoPath "D:\Essentials\HSF_ERP"
```

## Validate

```powershell
cd "D:\Essentials\HSF_ERP"
pnpm format
pnpm --filter @hsf/web lint
pnpm --filter @hsf/web typecheck
pnpm --filter @hsf/web test:run
pnpm --filter @hsf/web build
pnpm --filter @hsf/web dev
```

Open:

- `http://localhost:3000`
- `http://localhost:3000/dashboard`
- `http://localhost:3000/api/health`

## Commit and tag

```powershell
git add -A
git commit -m "feat(web): add HSF executive UI foundation"
git push origin main

git tag -a v0.1.1 -m "v0.1.1 - Executive UI Foundation"
git push origin v0.1.1
```

Use `docs/releases/v0.1.1.md` for the GitHub release.
