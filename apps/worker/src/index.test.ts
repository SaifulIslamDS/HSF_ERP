import { describe, expect, it } from "vitest";

describe("worker foundation", () => {
  it("uses an explicit enable switch", () => {
    expect(["true", "false"]).toContain(process.env.WORKER_ENABLED ?? "false");
  });
});
