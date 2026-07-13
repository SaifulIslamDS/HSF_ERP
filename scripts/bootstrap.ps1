$ErrorActionPreference = "Stop"

Write-Host "HSF ERP bootstrap" -ForegroundColor Cyan

if (-not (Test-Path ".env")) {
  Copy-Item ".env.example" ".env"
  Write-Host "Created .env from .env.example. Replace all placeholder secrets." -ForegroundColor Yellow
}

corepack enable
corepack prepare pnpm@11.10.0 --activate
pnpm install
docker compose up -d
pnpm db:validate
pnpm db:generate
pnpm verify:structure
pnpm verify:sensitive

Write-Host "Bootstrap completed. Run: pnpm dev" -ForegroundColor Green
