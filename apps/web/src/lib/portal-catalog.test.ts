import { describe, expect, it } from "vitest";
import { portalGroups, portalRouteCount, portalRoutes, resolvePortalRoute } from "./portal-catalog";

describe("HSF ERP complete UI route catalogue", () => {
  it("contains the complete management UI surface", () => {
    expect(portalGroups.length).toBe(19);
    expect(portalRoutes.length).toBe(400);
    expect(portalRouteCount).toBe(401);
  });

  it("uses unique route paths", () => {
    const paths = portalRoutes.map((route) => route.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("resolves index, new, detail, and edit previews", () => {
    expect(resolvePortalRoute(["finance", "dashboard"])?.action).toBe("index");
    expect(resolvePortalRoute(["finance", "annual-budgets", "new"])?.action).toBe("new");
    expect(resolvePortalRoute(["finance", "annual-budgets", "HSF-DEMO-001"])?.action).toBe(
      "detail",
    );
    expect(resolvePortalRoute(["finance", "annual-budgets", "edit"])?.action).toBe("edit");
  });
});
