import type { ReactNode } from "react";
import { RoleVisibilityPreview } from "@/components/role-visibility/role-visibility-preview";

export default function PortalRoleVisibilityTemplate({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      {children}
      <RoleVisibilityPreview />
    </>
  );
}
