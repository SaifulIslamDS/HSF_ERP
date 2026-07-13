import { describe, expect, it } from "vitest";
import type { ReportRequest } from "./index.js";

describe("reporting contracts", () => {
  it("supports a report request", () => {
    const request: ReportRequest = {
      reportCode: "MFR_REGISTER",
      requestedBy: "test-user",
      parameters: {},
    };

    expect(request.reportCode).toBe("MFR_REGISTER");
  });
});
