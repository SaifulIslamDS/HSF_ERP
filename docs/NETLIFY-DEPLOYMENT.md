# HSF ERP Web — Netlify Deployment

This repository is a pnpm monorepo. The deployable frontend is `apps/web`.

## Recommended repository configuration

Keep the following files at the repository root:

- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `netlify.toml`

Do not upload only the `apps/web` folder. Netlify needs the workspace files at the repository root so pnpm can resolve the monorepo correctly.

## Netlify settings

Connect the GitHub repository and use the `main` branch.

The repository already includes `netlify.toml`, so the Netlify UI should not override it.

```text
Production branch:   main
Base directory:      blank
Package directory:   blank
Build command:       blank in the UI
Publish directory:   blank in the UI
Functions directory: blank
```

The committed configuration runs:

```text
corepack pnpm --filter @hsf/web build
```

and publishes:

```text
apps/web/.next
```

## Required runtime versions

```text
Node.js: 24.18.0
pnpm:    11.10.0
```

The repository pins these versions through `package.json`, `.node-version`, `.nvmrc`, and `netlify.toml`.

## First deployment checklist

1. Confirm `index` and application source files are under `apps/web`.
2. Confirm `pnpm-lock.yaml` is committed.
3. Confirm no `node_modules`, `.next`, `.turbo`, local environment files, or real HSF data are committed.
4. Push the repository root to GitHub.
5. Connect the GitHub repository in Netlify.
6. Leave UI build fields blank so `netlify.toml` remains authoritative.
7. Use **Clear cache and deploy site** after changing build settings.

## Expected install and build behavior

Netlify should detect the root `packageManager` value and install with pnpm. A successful build should include the Next.js build for `@hsf/web`.

If Netlify uses npm instead of pnpm, check that:

- `packageManager` remains `pnpm@11.10.0` in the root `package.json`;
- `pnpm-lock.yaml` is present at the repository root;
- Base directory and Package directory are blank;
- no conflicting build settings remain in the Netlify UI.

## Environment variables

The complete UI blueprint does not require live Supabase, database, or API credentials. Do not add production credentials merely to deploy the UI preview.

Functional milestones will document their own required environment variables before they are introduced.

## Local pre-deployment validation

Run with Node 24.18.0 and pnpm 11.10.0:

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

Only claim a production-ready build after these commands complete successfully in a correctly provisioned environment.
