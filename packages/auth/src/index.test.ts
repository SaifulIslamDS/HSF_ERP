import { describe, expect, it } from "vitest";
import { Permission } from "./index.js";

describe("permission constants", () => {
  it("contains the core MFR creation permission", () => {
    expect(Permission.MfrCreate).toBe("finance.mfr.create");
  });
});
