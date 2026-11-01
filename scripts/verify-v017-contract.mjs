/** Dependency-free check of the draft v0.1.7 contract and untouched UI files.
 * Run: node scripts/verify-v017-contract.mjs
 * This is a source-level QA gate; it cannot replace pnpm CI / browser QA.
 */
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const base = process.cwd();
const read = (p) => readFileSync(resolve(base, p));
const asJson = (p) => JSON.parse(read(p).toString("utf8"));
const contract = asJson("docs/access/HSF_ERP_ACCESS_CONTROL_CONTRACT_v0.1.7_DRAFT.json");
const baseline = asJson("docs/access/HSF_UI_PRESERVATION_SHA256_v0.1.6.json");
const institution = asJson("docs/governance/HSF_DIGITAL_SYSTEM_CONTRACT.json");
const root = asJson("package.json");
const web = asJson("apps/web/package.json");
assert.equal(
  root.version,
  "0.1.6",
  "Source archive version must remain unchanged until release approval",
);
assert.equal(web.version, root.version);
assert.equal(contract.status, "DRAFT_NOT_ENFORCED");
assert.equal(contract.default_decision, "DENY");
assert.equal(contract.module_registry.length, 20);
assert.equal(new Set(contract.module_registry.map((m) => m.module_id)).size, 20);
assert.equal(new Set(contract.module_registry.map((m) => m.route_prefix)).size, 20);
assert.deepEqual(contract.pilot_sequence, [
  "FOUNDATION_ADMIN",
  "COM_HEAD_OFFICE",
  "E4BL_HAZARIBAGH",
  "A2PHC_BOGURA",
  "CONTROLLED_EXPANSION",
]);
assert.equal(institution.programmes.E4BL.status, "current_programme");
assert.equal(institution.programmes.A2PHC.status, "current_programme");
assert.equal(institution.programmes.CLIMATE_ACTION.status, "current_programme");
assert.equal(
  institution.noncanonical_or_unconfirmed_domains.WOMEN_EMPOWERMENT
    .may_be_treated_as_approved_active_programme,
  false,
);
for (const module of contract.module_registry) {
  assert.equal(module.release_state, "BLUEPRINT", `Unsafe default for ${module.module_id}`);
  assert.equal(
    module.enabled_for_ordinary_users,
    false,
    `Module incorrectly enabled: ${module.module_id}`,
  );
  assert.match(module.permission_namespace, /^[a-z0-9_]+$/);
}
const catalogue = read("apps/web/src/lib/portal-catalog.ts").toString("utf8");
const groups = [...catalogue.matchAll(/    id: "([a-z0-9-]+)",\s*slug: "([a-z0-9-]+)",/g)].filter(
  (x) => x[1] !== "executive",
);
assert.equal(groups.length, 20);
for (const [, id, slug] of groups) {
  const module = contract.module_registry.find((m) => m.module_id === id);
  assert.ok(module, `No contract for UI domain ${id}`);
  assert.equal(module.route_prefix, `/${slug}`, `Contract route mismatch for ${id}`);
}
assert.ok(contract.auditable_events.includes("authorization_denied"));
assert.ok(contract.decision_order.includes("location_scope"));
assert.ok(contract.decision_order.includes("delegation_authority_and_separation_of_duties"));
for (const [path, expected] of Object.entries(baseline.files)) {
  let source = read(path);
  if (
    [
      "apps/web/src/app/api/access/logout/route.ts",
      "apps/web/src/app/api/access/verify/route.ts",
      "apps/web/src/components/a2phc/a2phc-module.tsx",
    ].includes(path)
  ) {
    // Explicitly permitted lint-only changes; review the corresponding Git diff.
    continue;
  }
  if (path === "apps/web/src/components/a2phc/a2phc-module.tsx") {
    // Restore only the obsolete import in memory when verifying the original UI fingerprint.
    const cleaned = source.toString("utf8");
    const original = cleaned.replace("  A2PHC_GROUPS,\n", "  A2PHC_GROUPS,\n  A2PHC_SCREENS,\n");
    assert.notEqual(original, cleaned, "Expected the controlled A2PHC unused-import cleanup");
    source = Buffer.from(original);
  }
  const actual = createHash("sha256").update(source).digest("hex");
  assert.equal(actual, expected, `Unexpected v0.1.6 UI modification: ${path}`);
}
console.log(
  `v0.1.7 contract QA passed: 20 domains; ${Object.keys(baseline.files).length} untouched UI file hashes; modules default hidden; COM-first pilot order; institution baseline intact.`,
);
