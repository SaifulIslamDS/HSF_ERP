# Git and Release Instructions — HSF ERP v0.1.5

## Commit

```powershell
git status
git diff
git add .
git commit -m "feat(web): expand A2PHC UI and add role-aware module visibility"
git push origin main
```

## Annotated tag

```powershell
git tag -a v0.1.5 -m "v0.1.5 - A2PHC UI Expansion and Role-Aware Module Visibility"
git push origin v0.1.5
```

## Release title

```text
v0.1.5 — A2PHC UI Expansion and Role-Aware Module Visibility
```

Use `docs/releases/v0.1.5.md` as the GitHub release body.
