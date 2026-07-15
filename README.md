# HSF ERP v0.1.5 Update Patch
## A2PHC UI Expansion and Role-Aware Module Visibility

This is an additive patch for the HSF ERP `v0.1.4` complete responsive UI blueprint.

It:

- leaves every non-A2PHC UI page untouched;
- adds a dedicated complete A2PHC field-operations experience;
- adds UI-only role-based module visibility;
- separates E4BL and A2PHC navigation for project-specific users;
- keeps current medicine dispensing disabled and marks it as a future capability;
- adds release and implementation documentation.

## Apply on Windows PowerShell

From the extracted patch directory:

```powershell
.\apply-patch.ps1 -Target "D:\path\to\HSF_ERP"
```

The script:

1. validates the target repository;
2. creates backups for any overwritten patch paths;
3. copies the additive overlay;
4. updates root and web package versions to `0.1.5`;
5. prints validation commands.

## Apply manually

Copy everything inside:

```text
overlay/
```

into the repository root, preserving directories.

Then set these package versions to `0.1.5`:

```text
package.json
apps/web/package.json
```

## Required validation

```powershell
pnpm install --frozen-lockfile
pnpm verify:structure
pnpm verify:sensitive
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:run
pnpm --filter @hsf/web build
```

## Important

Role-based menu hiding in this release is a UI preview. It is not authorization. Real security must be enforced through authentication, server-side permissions, project/location scope, database policy, and audit logging.
