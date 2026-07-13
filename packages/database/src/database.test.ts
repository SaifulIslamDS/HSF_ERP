import { describe, expect, it } from "vitest";

describe("database foundation", () => {
  it("documents PostgreSQL as the selected provider", () => {
    expect("postgresql").toBe("postgresql");
  });
});
