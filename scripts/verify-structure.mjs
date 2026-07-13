import { existsSync } from "node:fs";
import { resolve } from "node:path";

const required = [
  "README.md",
  "AGENTS.md",
  "package.json",
  "pnpm-workspace.yaml",
  "turbo.json",
  "docker-compose.yml",
  "apps/web/package.json",
  "apps/api/package.json",
  "apps/worker/package.json",
  "packages/database/package.json",
  "packages/database/prisma/schema.prisma",
  "docs/CURRENT-STATUS.md",
  "docs/PRODUCT-REQUIREMENTS.md",
  "docs/MASTER-SYSTEM-DESIGN.md",
  "docs/PHASE-1-SCOPE.md",
  "docs/DATA-MODEL.md",
  "docs/RBAC-AND-APPROVALS.md",
  "docs/DECISIONS-AND-OPEN-ITEMS.md",
  "docs/CODEX-ONBOARDING.md",
  "docs/codex/NEXT-TASK.md",
];

const missing = required.filter((file) => !existsSync(resolve(file)));

if (missing.length > 0) {
  console.error("Missing required repository files:");
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

console.log(`Repository structure verified: ${required.length} required files present.`);
