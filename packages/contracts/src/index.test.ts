import { describe, expect, it } from "vitest";
import type { HealthResponse } from "./index.js";

describe("shared API contracts", () => {
  it("supports the health-response contract", () => {
    const response: HealthResponse = {
      service: "hsf-api",
      status: "ok",
      version: "0.1.0",
    };

    expect(response.status).toBe("ok");
  });
});
