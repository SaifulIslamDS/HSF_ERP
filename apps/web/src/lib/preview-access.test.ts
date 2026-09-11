import { afterEach, describe, expect, it } from "vitest";
import {
  createPreviewSessionToken,
  isPreviewGateConfigured,
  isPreviewSessionValid,
  isPreviewSigningSecretConfigured,
  isSubmittedPinValid,
} from "./preview-access";

const ORIGINAL_ENV = { ...process.env };

afterEach(() => {
  process.env = { ...ORIGINAL_ENV };
});

describe("preview access security configuration", () => {
  it("rejects PIN-only configuration", () => {
    process.env.HSF_ERP_ACCESS_PIN = "654321";
    delete process.env.HSF_ERP_ACCESS_SECRET;
    delete process.env.AUTH_SECRET;
    expect(isPreviewSigningSecretConfigured()).toBe(false);
    expect(isPreviewGateConfigured()).toBe(false);
  });

  it("rejects placeholder secrets", () => {
    process.env.HSF_ERP_ACCESS_PIN = "654321";
    process.env.HSF_ERP_ACCESS_SECRET = "replace-with-a-long-random-secret-value";
    expect(isPreviewGateConfigured()).toBe(false);
  });

  it("accepts a six-digit PIN with an independent strong secret", () => {
    process.env.HSF_ERP_ACCESS_PIN = "654321";
    process.env.HSF_ERP_ACCESS_SECRET = "7Jx4dQ9Yp2Vn8Lc5Rk3Wm6Ts1Hz0AfEeXbCuPqZo";
    expect(isPreviewSigningSecretConfigured()).toBe(true);
    expect(isPreviewGateConfigured()).toBe(true);
    expect(isSubmittedPinValid("654321")).toBe(true);
  });

  it("creates a verifiable token only when configuration is secure", () => {
    process.env.HSF_ERP_ACCESS_PIN = "654321";
    process.env.HSF_ERP_ACCESS_SECRET = "7Jx4dQ9Yp2Vn8Lc5Rk3Wm6Ts1Hz0AfEeXbCuPqZo";
    const now = 1_800_000_000_000;
    const { token } = createPreviewSessionToken(now);
    expect(isPreviewSessionValid(token, now + 1000)).toBe(true);
  });
});
