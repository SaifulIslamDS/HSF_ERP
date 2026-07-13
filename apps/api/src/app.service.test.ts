import { describe, expect, it } from "vitest";
import { AppService } from "./app.service.js";

describe("AppService", () => {
  it("returns the API foundation status", () => {
    const service = new AppService();
    expect(service.getServiceInfo()).toMatchObject({
      name: "HSF ERP API",
      status: "foundation",
    });
  });
});
