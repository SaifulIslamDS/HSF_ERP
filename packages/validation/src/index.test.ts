import { describe, expect, it } from "vitest";
import { assertNonEmpty } from "./index.js";

describe("shared validation", () => {
  it("normalizes a non-empty value", () => {
    expect(assertNonEmpty("  HSF ERP  ", "Name")).toBe("HSF ERP");
  });

  it("rejects an empty value", () => {
    expect(() => assertNonEmpty("   ", "Name")).toThrow("Name is required");
  });
});
