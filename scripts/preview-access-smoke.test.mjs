/** Dependency-free unit smoke for the actual preview-access.ts logic.
 * Run (Node 22 experimental / Node 24 native TypeScript stripping):
 *   node --experimental-strip-types --test scripts/preview-access-smoke.test.mjs
 * This does NOT validate Next.js rendering, cookies, rate limits, or browser UX.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  createPreviewSessionToken,
  isPreviewSessionValid,
  isPreviewGateConfigured,
  isSubmittedPinValid,
  safeReturnTo,
  isPreviewSigningSecretConfigured,
  getPreviewSessionHours,
} from "../apps/web/src/lib/preview-access.ts";

const storedEnv = { ...process.env };
function reset() {
  process.env = { ...storedEnv };
}
function setup() {
  process.env.HSF_ERP_ACCESS_PIN = "654321";
  process.env.HSF_ERP_ACCESS_SECRET =
    "synthetic-unit-test-secret-64-characters-xxxxxxxxxxxxxxxxxxxxxxxx";
}
const now = 1800000000000;
test("fail closed without independent signing secret", () => {
  reset();
  process.env.HSF_ERP_ACCESS_PIN = "654321";
  delete process.env.HSF_ERP_ACCESS_SECRET;
  delete process.env.AUTH_SECRET;
  assert.equal(isPreviewSigningSecretConfigured(), false);
  assert.equal(isPreviewGateConfigured(), false);
  reset();
});
test("wrong format and incorrect PIN are denied", () => {
  reset();
  setup();
  assert.equal(isSubmittedPinValid("654321"), true);
  assert.equal(isSubmittedPinValid("65432"), false);
  assert.equal(isSubmittedPinValid("000000"), false);
  reset();
});
test("token valid, expired, tampered, then revoked on PIN rotation", () => {
  reset();
  setup();
  process.env.HSF_ERP_ACCESS_SESSION_HOURS = "1";
  const { token, maxAgeSeconds } = createPreviewSessionToken(now);
  assert.equal(maxAgeSeconds, 3600);
  assert.equal(isPreviewSessionValid(token, now + 1000), true);
  assert.equal(isPreviewSessionValid(token, now + 3600000), false);
  assert.equal(isPreviewSessionValid(token + "x", now + 1000), false);
  process.env.HSF_ERP_ACCESS_PIN = "123456";
  assert.equal(isPreviewSessionValid(token, now + 1000), false);
  reset();
});
test("return paths are internal and reject backslash escape", () => {
  for (const bad of [
    "https://bad.example",
    "//bad.example",
    "/\\bad.example",
    "/access",
    "/access?returnTo=//bad.example",
    "/a\nLocation:evil",
  ]) {
    assert.equal(safeReturnTo(bad), "/dashboard", bad);
  }
  assert.equal(safeReturnTo("/administration/dashboard?tab=x"), "/administration/dashboard?tab=x");
});
test("session configuration is bounded", () => {
  reset();
  setup();
  process.env.HSF_ERP_ACCESS_SESSION_HOURS = "200";
  assert.equal(getPreviewSessionHours(), 24);
  reset();
});
