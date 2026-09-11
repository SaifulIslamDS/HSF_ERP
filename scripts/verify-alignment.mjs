import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const errors = [];
const readText = (p) => readFileSync(resolve(root, p), "utf8");
const readJson = (p) => JSON.parse(readText(p));

const required = [
  "README.md",
  "CHANGELOG.md",
  "MANIFEST.json",
  "docs/governance/HSF_DIGITAL_SYSTEM_CONTRACT.json",
  "docs/governance/SYSTEM-BOUNDARIES.md",
  "docs/governance/PROGRAMME-REGISTRY.md",
  "docs/governance/DATA-CLASSIFICATION-AND-EVIDENCE.md",
  "docs/governance/APPROVED-INFORMATION-LAYER.md",
  "docs/governance/SECURITY-BASELINE.md",
  "docs/governance/PUBLIC_REPOSITORY_POLICY.md",
  "docs/governance/EXTERNAL_STANDARDS.md",
];
for (const file of required) if (!existsSync(resolve(root, file))) errors.push(`Missing alignment file: ${file}`);

try {
  const pkg = readJson("package.json");
  const web = readJson("apps/web/package.json");
  const manifest = readJson("MANIFEST.json");
  const contract = readJson("docs/governance/HSF_DIGITAL_SYSTEM_CONTRACT.json");
  const version = pkg.version;

  if (version !== "0.1.6") errors.push(`Expected current codebase version 0.1.6, found ${version}`);
  if (web.version !== version) errors.push(`apps/web version ${web.version} does not match root ${version}`);
  const workspacePackages = [
    "apps/api/package.json",
    "apps/web/package.json",
    "apps/worker/package.json",
    "packages/auth/package.json",
    "packages/config/package.json",
    "packages/contracts/package.json",
    "packages/database/package.json",
    "packages/reporting/package.json",
    "packages/ui/package.json",
    "packages/validation/package.json",
  ];
  for (const file of workspacePackages) {
    const child = readJson(file);
    if (child.version !== version) errors.push(`${file} version ${child.version} does not match root ${version}`);
  }
  if (manifest.current_version !== version) errors.push(`MANIFEST current_version ${manifest.current_version} does not match root ${version}`);
  if (contract.contract_version !== "1.0.0") errors.push("Digital System Contract mirror must be v1.0.0");

  const programmeCodes = Object.keys(contract.programmes ?? {}).sort().join(",");
  if (programmeCodes !== ["A2PHC", "CLIMATE_ACTION", "E4BL"].sort().join(",")) {
    errors.push(`Unexpected canonical programme set: ${programmeCodes}`);
  }

  const evidence = Object.keys(contract.evidence_states ?? {}).sort().join(",");
  const expectedEvidence = ["RAW", "CLEANED", "VERIFIED", "CALCULATED", "ESTIMATED", "INFERRED"].sort().join(",");
  if (evidence !== expectedEvidence) errors.push("Evidence-state set does not match institutional contract");

  for (const file of [
    "apps/web/src/app/api/health/route.ts",
    "apps/api/src/app.service.ts",
    "apps/api/src/modules/health/health.controller.ts",
  ]) {
    const text = readText(file);
    if (!text.includes(`version: \"${version}\"`)) errors.push(`${file} does not expose current codebase version ${version}`);
  }

  const status = readText("docs/CURRENT-STATUS.md");
  if (!status.includes("`v0.1.6`")) errors.push("CURRENT-STATUS.md does not identify v0.1.6");
  if (!status.includes("Functional Implementation Pending")) errors.push("CURRENT-STATUS.md lost the implementation-boundary statement");

  const readme = readText("README.md");
  if (!readme.includes("v0.1.6")) errors.push("README.md does not identify v0.1.6");
  if (!readme.includes("Functional Implementation Pending")) errors.push("README.md must not imply production completeness");

  if (existsSync(resolve(root, "overlay"))) errors.push("Obsolete overlay/ patch package must not be present in the clean baseline");
  if (existsSync(resolve(root, ".hsf-patch-backup"))) errors.push("Obsolete .hsf-patch-backup/ must not be present in the clean baseline");
  if (existsSync(resolve(root, "apps/web/tsconfig.tsbuildinfo"))) errors.push("Generated tsconfig.tsbuildinfo must not be committed");

  const workspace = readText("pnpm-workspace.yaml");
  const lockfile = readText("pnpm-lock.yaml");
  const ci = readText(".github/workflows/ci.yml");

  if (!workspace.includes("autoInstallPeers: false"))
    errors.push("pnpm-workspace.yaml must keep autoInstallPeers disabled");

  if (!workspace.includes("strictPeerDependencies: true"))
    errors.push("pnpm-workspace.yaml must enforce strict peer dependencies");

  if (!workspace.includes("sharedWorkspaceLockfile: true"))
    errors.push("pnpm-workspace.yaml must use the shared workspace lockfile");

  if (!workspace.includes("linkWorkspacePackages: true"))
    errors.push("pnpm-workspace.yaml must link workspace packages");

  if (!lockfile.includes("autoInstallPeers: false"))
    errors.push("pnpm-lock.yaml settings must match pnpm-workspace.yaml autoInstallPeers=false");

  if (!ci.includes("pnpm install --frozen-lockfile"))
    errors.push("CI must install from the committed lockfile with --frozen-lockfile");

  const previewAccess = readText("apps/web/src/lib/preview-access.ts");
  if (previewAccess.includes("|| pin")) errors.push("Preview access must never fall back to the six-digit PIN as a signing secret");
  if (!previewAccess.includes("isPreviewSigningSecretConfigured")) errors.push("Preview signing-secret configuration check is missing");
} catch (error) {
  errors.push(`Alignment validation error: ${error.message}`);
}

if (errors.length) {
  console.error("ERP alignment validation failed:");
  errors.forEach((item) => console.error(`- ${item}`));
  process.exit(1);
}

console.log("HSF ERP institutional/repository alignment verified.");
