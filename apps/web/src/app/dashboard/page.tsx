import { PortalPage } from "@/components/portal-page";
import { PortalShell } from "@/components/portal-shell";
import { executiveDashboardRoute } from "@/lib/portal-catalog";

export default function DashboardPage() {
  return (
    <PortalShell pageTitle={executiveDashboardRoute.title}>
      <PortalPage resolution={{ route: executiveDashboardRoute, action: "index" }} />
    </PortalShell>
  );
}
