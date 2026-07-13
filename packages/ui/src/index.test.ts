import { describe, expect, it } from "vitest";
import { Button, Card } from "./index.js";

describe("shared UI exports", () => {
  it("exports the foundation components", () => {
    expect(typeof Button).toBe("function");
    expect(typeof Card).toBe("function");
  });
});
