import { describe, expect, it } from "vitest";
import { SYSTEM_DEFAULTS } from "./index.js";

describe("shared configuration", () => {
  it("uses the approved HSF defaults", () => {
    expect(SYSTEM_DEFAULTS).toEqual({
      currency: "BDT",
      timezone: "Asia/Dhaka",
      language: "en",
    });
  });
});
