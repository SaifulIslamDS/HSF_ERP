# HSF ERP Environment Guide

## Required local software

- Git
- Node.js 24 LTS
- Corepack
- pnpm 11.10
- Docker Desktop

## Windows PowerShell

```powershell
corepack enable
corepack prepare pnpm@11.10.0 --activate
Copy-Item .env.example .env
pnpm install
docker compose up -d
pnpm db:validate
pnpm db:generate
pnpm dev
```

## Local services

| Service    | Address                             |
| ---------- | ----------------------------------- |
| Web        | http://localhost:3000               |
| API        | http://localhost:4000/api/v1/health |
| PostgreSQL | localhost:5432                      |
| Redis      | localhost:6379                      |

## Secrets

Never use `.env.example` placeholder values in production.

Production secrets must be stored in the deployment platform's secret manager.

## Troubleshooting

### Corepack permission issue

Run PowerShell as Administrator only when required for Corepack activation. Avoid global npm installation of pnpm when Corepack works.

### Port conflict

Change host port mappings in `docker-compose.yml` and update `.env`.

### Prisma cannot find configuration

Run Prisma commands through the workspace scripts from repository root:

```powershell
pnpm db:validate
pnpm db:generate
```
