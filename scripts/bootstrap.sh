#!/usr/bin/env bash
set -euo pipefail

echo "HSF ERP bootstrap"

if [[ ! -f .env ]]; then
  cp .env.example .env
  echo "Created .env from .env.example. Replace all placeholder secrets."
fi

corepack enable
corepack prepare pnpm@11.10.0 --activate
pnpm install
docker compose up -d
pnpm db:validate
pnpm db:generate
pnpm verify:structure
pnpm verify:sensitive

echo "Bootstrap completed. Run: pnpm dev"
