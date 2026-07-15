import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortalPage } from "@/components/portal-page";
import { PortalShell } from "@/components/portal-shell";
import { resolvePortalRoute } from "@/lib/portal-catalog";

type RouteProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const resolution = resolvePortalRoute(slug);
  if (!resolution) return { title: "Page not found" };
  return {
    title: resolution.action === "index" ? resolution.route.title : `${resolution.route.title} Preview`,
    description: resolution.route.summary,
  };
}

export default async function PlannedModuleRoute({ params }: RouteProps) {
  const { slug } = await params;
  const resolution = resolvePortalRoute(slug);
  if (!resolution) notFound();

  return (
    <PortalShell pageTitle={resolution.route.title}>
      <PortalPage resolution={resolution} />
    </PortalShell>
  );
}
