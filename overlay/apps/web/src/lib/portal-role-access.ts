import { A2PHC_SCREENS } from "@/lib/a2phc-catalog";

export const PORTAL_ROLE_IDS = [
  "executive",
  "ceo",
  "finance-director",
  "finance-officer",
  "hr-admin",
  "a2phc-coordinator",
  "medical-supervisor",
  "general-physician",
  "e4bl-coordinator",
  "head-teacher",
  "teacher",
  "climate-coordinator",
  "women-empowerment-coordinator",
  "auditor",
  "donor-viewer",
  "system-administrator",
] as const;

export type PortalRoleId = (typeof PORTAL_ROLE_IDS)[number];

export type PortalRoleProfile = {
  id: PortalRoleId;
  label: string;
  shortLabel: string;
  description: string;
  visibleDomains: string[];
  visibleRoutes?: string[];
  blockedRoutes?: string[];
};

const sharedOperationalDomains = [
  "/dashboard",
  "/planning",
  "/projects",
  "/meetings",
  "/training",
  "/documents",
  "/reports",
];

export const PORTAL_ROLE_PROFILES: PortalRoleProfile[] = [
  {
    id: "executive",
    label: "Chairman / Executive Oversight",
    shortLabel: "Executive",
    description: "Organization-wide management presentation view.",
    visibleDomains: ["*"],
  },
  {
    id: "ceo",
    label: "Chief Executive Officer",
    shortLabel: "CEO",
    description:
      "Broad operational, project, approval, and performance visibility.",
    visibleDomains: ["*"],
  },
  {
    id: "finance-director",
    label: "Finance Director",
    shortLabel: "Finance Director",
    description:
      "Finance, MFR, procurement, payroll, reports, and management controls.",
    visibleDomains: [
      "/dashboard",
      "/planning",
      "/projects",
      "/requisitions",
      "/procurement",
      "/finance",
      "/payroll",
      "/inventory",
      "/a2phc",
      "/donors",
      "/documents",
      "/reports",
      "/administration",
    ],
  },
  {
    id: "finance-officer",
    label: "Finance Officer",
    shortLabel: "Finance",
    description:
      "Operational finance, vouchers, bank work, adjustments, and reports.",
    visibleDomains: [
      "/dashboard",
      "/projects",
      "/requisitions",
      "/procurement",
      "/finance",
      "/payroll",
      "/inventory",
      "/a2phc",
      "/documents",
      "/reports",
    ],
  },
  {
    id: "hr-admin",
    label: "HR and Administration",
    shortLabel: "HR/Admin",
    description:
      "Employees, recruitment, attendance, training, notices, and administration.",
    visibleDomains: [
      "/dashboard",
      "/planning",
      "/projects",
      "/hr",
      "/payroll",
      "/meetings",
      "/training",
      "/documents",
      "/reports",
      "/administration",
    ],
  },
  {
    id: "a2phc-coordinator",
    label: "A2PHC Project Coordinator",
    shortLabel: "A2PHC Coordinator",
    description:
      "A2PHC planning, team review, requisition, achievement, and project reporting.",
    visibleDomains: [
      ...sharedOperationalDomains,
      "/a2phc",
      "/requisitions",
      "/procurement",
      "/inventory",
      "/meal",
    ],
    blockedRoutes: ["/e4bl", "/climate", "/women-empowerment"],
  },
  {
    id: "medical-supervisor",
    label: "A2PHC Medical Supervisor",
    shortLabel: "Supervisor",
    description:
      "Assigned camp, patient registration, field logistics, expense, and daily reporting.",
    visibleDomains: [
      "/dashboard",
      "/planning",
      "/a2phc",
      "/requisitions",
      "/inventory",
      "/documents",
      "/training",
    ],
    blockedRoutes: ["/e4bl", "/finance", "/payroll", "/hr", "/donors"],
  },
  {
    id: "general-physician",
    label: "A2PHC General Physician",
    shortLabel: "Doctor",
    description:
      "Assigned patient queue, consultation, prescription, referral, and sign-off.",
    visibleDomains: ["/dashboard", "/a2phc", "/documents", "/training"],
    visibleRoutes: [
      "/a2phc",
      "/a2phc/dashboard",
      "/a2phc/today",
      "/a2phc/field-operations",
      "/a2phc/camp-teams",
      "/a2phc/health-camps",
      "/a2phc/camp-calendar",
      "/a2phc/patients",
      "/a2phc/patient-history",
      "/a2phc/patient-visits",
      "/a2phc/patient-queue",
      "/a2phc/consultations",
      "/a2phc/vitals",
      "/a2phc/diagnoses",
      "/a2phc/prescriptions",
      "/a2phc/prescription-items",
      "/a2phc/tests-and-advice",
      "/a2phc/referrals",
      "/a2phc/follow-ups",
      "/a2phc/high-risk-cases",
      "/a2phc/clinical-sign-off-queue",
      "/a2phc/doctor-daily-summaries",
      "/a2phc/doctor-achievement",
      "/a2phc/disease-and-complaint-trends",
    ],
    blockedRoutes: ["/e4bl", "/finance", "/payroll", "/hr", "/requisitions"],
  },
  {
    id: "e4bl-coordinator",
    label: "E4BL Project Coordinator",
    shortLabel: "E4BL Coordinator",
    description:
      "E4BL planning, centre review, requisition, achievement, and reporting.",
    visibleDomains: [
      ...sharedOperationalDomains,
      "/e4bl",
      "/requisitions",
      "/procurement",
      "/inventory",
      "/meal",
    ],
    blockedRoutes: ["/a2phc", "/climate", "/women-empowerment"],
  },
  {
    id: "head-teacher",
    label: "E4BL Head Teacher",
    shortLabel: "Head Teacher",
    description:
      "Assigned centre, teachers, students, reports, and centre requisition.",
    visibleDomains: [
      "/dashboard",
      "/planning",
      "/e4bl",
      "/requisitions",
      "/inventory",
      "/documents",
      "/training",
    ],
    blockedRoutes: ["/a2phc", "/finance", "/payroll", "/hr", "/donors"],
  },
  {
    id: "teacher",
    label: "E4BL Teacher",
    shortLabel: "Teacher",
    description:
      "Assigned class, attendance, lessons, students, and achievement reporting.",
    visibleDomains: [
      "/dashboard",
      "/planning",
      "/e4bl",
      "/documents",
      "/training",
    ],
    blockedRoutes: ["/a2phc", "/finance", "/payroll", "/hr", "/requisitions"],
  },
  {
    id: "climate-coordinator",
    label: "Climate Action Coordinator",
    shortLabel: "Climate",
    description:
      "Climate activities, participants, evidence, requisitions, and reporting.",
    visibleDomains: [
      ...sharedOperationalDomains,
      "/climate",
      "/requisitions",
      "/procurement",
      "/inventory",
      "/meal",
    ],
    blockedRoutes: ["/e4bl", "/a2phc", "/women-empowerment"],
  },
  {
    id: "women-empowerment-coordinator",
    label: "Women Empowerment Coordinator",
    shortLabel: "Women Empowerment",
    description:
      "Women empowerment activities, participants, protection, evidence, and reports.",
    visibleDomains: [
      ...sharedOperationalDomains,
      "/women-empowerment",
      "/requisitions",
      "/procurement",
      "/inventory",
      "/meal",
    ],
    blockedRoutes: ["/e4bl", "/a2phc", "/climate"],
  },
  {
    id: "auditor",
    label: "Auditor",
    shortLabel: "Auditor",
    description:
      "Controlled read-only preview of approved records, evidence, and audit trails.",
    visibleDomains: [
      "/dashboard",
      "/projects",
      "/requisitions",
      "/procurement",
      "/finance",
      "/hr",
      "/payroll",
      "/e4bl",
      "/a2phc",
      "/climate",
      "/women-empowerment",
      "/inventory",
      "/donors",
      "/meal",
      "/meetings",
      "/training",
      "/documents",
      "/reports",
    ],
  },
  {
    id: "donor-viewer",
    label: "Donor / CSR Read-only Viewer",
    shortLabel: "Donor Viewer",
    description:
      "Privacy-safe project, achievement, utilization, and evidence summaries only.",
    visibleDomains: ["/dashboard", "/projects", "/donors", "/meal", "/reports"],
  },
  {
    id: "system-administrator",
    label: "System Administrator",
    shortLabel: "System Admin",
    description:
      "System configuration preview without automatic business approval authority.",
    visibleDomains: [
      "/dashboard",
      "/administration",
      "/projects",
      "/a2phc",
      "/documents",
      "/reports",
    ],
  },
];

export const DEFAULT_PORTAL_ROLE: PortalRoleId = "executive";

export function getPortalRoleProfile(
  roleId: string | null | undefined,
): PortalRoleProfile {
  return (
    PORTAL_ROLE_PROFILES.find((profile) => profile.id === roleId) ??
    PORTAL_ROLE_PROFILES.find((profile) => profile.id === DEFAULT_PORTAL_ROLE)!
  );
}

function normalisePath(pathname: string): string {
  const clean = pathname.split("?")[0]?.split("#")[0] ?? "/";
  return clean !== "/" && clean.endsWith("/") ? clean.slice(0, -1) : clean;
}

export function canRoleViewRoute(
  roleId: string | null | undefined,
  pathname: string,
): boolean {
  const profile = getPortalRoleProfile(roleId);
  const route = normalisePath(pathname);

  if (
    route === "/" ||
    route.startsWith("/api/") ||
    route.startsWith("/_next/")
  ) {
    return true;
  }

  if (profile.visibleDomains.includes("*")) {
    return true;
  }

  if (
    profile.blockedRoutes?.some(
      (prefix) => route === prefix || route.startsWith(`${prefix}/`),
    )
  ) {
    return false;
  }

  if (route === "/a2phc" || route.startsWith("/a2phc/")) {
    const screenId = route.split("/")[2] || "dashboard";
    const screen = A2PHC_SCREENS.find((item) => item.id === screenId);
    if (screen && !screen.roles.includes(profile.id)) {
      return false;
    }
  }

  if (profile.visibleRoutes && route.startsWith("/a2phc")) {
    return profile.visibleRoutes.some(
      (allowedRoute) =>
        route === allowedRoute || route.startsWith(`${allowedRoute}/`),
    );
  }

  return profile.visibleDomains.some(
    (prefix) => route === prefix || route.startsWith(`${prefix}/`),
  );
}

export function inferDomainFromHref(href: string): string {
  if (!href.startsWith("/")) return "external";
  const [domain = ""] = href.slice(1).split("/");
  return domain || "home";
}
