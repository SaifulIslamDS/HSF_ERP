# HSF ERP — Local Installation Guide

## Requirements

- Node.js `>=24.18.0 <27`
- pnpm `>=11.10.0 <12`
- PostgreSQL/Redis only when required by the task being tested

## Install

```bash
corepack enable
corepack prepare pnpm@11.10.0 --activate
pnpm install --frozen-lockfile
```

Copy `.env.example` to a local `.env` file and replace placeholders with local-only values. Never commit `.env` or real credentials.

## Validate repository

```bash
pnpm verify:structure
pnpm verify:sensitive
pnpm verify:alignment
```

For the full codebase gate:

```bash
pnpm verify
```

For Prisma validation:

```bash
pnpm db:format
pnpm db:validate
pnpm db:generate
```

## Run development applications

```bash
pnpm dev
```

The web application defaults to port `3000`; the API foundation defaults to port `4000` according to `.env.example`.

## Current implementation boundary

The present repository is a complete management UI blueprint plus platform foundations, not a production-functional ERP. Follow `docs/CURRENT-STATUS.md` and `docs/codex/NEXT-TASK.md` rather than old version-specific installation handovers.

## Temporary preview gate

If testing the management-preview PIN gate locally, configure a six-digit PIN **and an independent strong signing secret of at least 32 characters**. The PIN is never used as a signing-secret fallback. See `docs/PREVIEW-PIN-ACCESS-GATE.md`.
