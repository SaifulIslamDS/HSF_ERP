export type PortalPageKind =
  | "dashboard"
  | "registry"
  | "workflow"
  | "report"
  | "calendar"
  | "library"
  | "settings"
  | "profile";

export type PortalPageDefinition = {
  slug: string;
  title: string;
  summary?: string;
  kind?: PortalPageKind;
  owner?: string;
};

export type PortalGroupDefinition = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  code: string;
  pages: PortalPageDefinition[];
};

export type PortalRoute = PortalPageDefinition & {
  path: string;
  group: PortalGroupDefinition;
  kind: PortalPageKind;
  summary: string;
};

const page = (
  title: string,
  kind: PortalPageKind = "registry",
  slug?: string,
  summary?: string,
  owner?: string,
): PortalPageDefinition => ({
  title,
  kind,
  slug: slug ?? slugify(title),
  ...(summary === undefined ? {} : { summary }),
  ...(owner === undefined ? {} : { owner }),
});

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const portalGroups: PortalGroupDefinition[] = [
  {
    id: "planning",
    slug: "planning",
    title: "Planning & Performance",
    shortTitle: "Planning",
    code: "PL",
    description:
      "Annual plans, individual work plans, daily activity, achievement, indicators, risks, and management follow-up.",
    pages: [
      page("Planning Dashboard", "dashboard", "dashboard"),
      page("Annual Planning Meetings", "calendar"),
      page("Organizational Priorities"),
      page("Annual Project Plans", "workflow"),
      page("Activity Plans"),
      page("Event Calendar", "calendar"),
      page("Training Plan"),
      page("Recruitment Plan"),
      page("Procurement Plan"),
      page("Staff Work Plans", "workflow"),
      page("Weekly Task Plans"),
      page("Daily Activities"),
      page("Monthly Achievement Reports", "workflow"),
      page("Project Management Reports", "report"),
      page("Project Achievement Reports", "report"),
      page("Indicators & Targets"),
      page("Evidence Register", "library"),
      page("Risk Register", "workflow"),
      page("Corrective Actions", "workflow"),
      page("Plan versus Progress", "report"),
      page("Data Quality Review", "report"),
    ],
  },
  {
    id: "projects",
    slug: "projects",
    title: "Projects & Locations",
    shortTitle: "Projects",
    code: "PJ",
    description:
      "Organization-wide programme portfolio, locations, responsibilities, beneficiary reach, and project coordination.",
    pages: [
      page("Project Portfolio", "dashboard", "portfolio"),
      page("Projects"),
      page("Programmes"),
      page("Locations"),
      page("Cost Centres"),
      page("Project Assignments"),
      page("Location Assignments"),
      page("Beneficiary Groups"),
      page("Central Office Management"),
      page("E4BL Project Overview", "dashboard", "e4bl"),
      page("A2PHC Project Overview", "dashboard", "a2phc"),
      page("Climate Action Overview", "dashboard", "climate-action"),
      page("Women Empowerment Overview", "dashboard", "women-empowerment"),
      page("Project Calendar", "calendar"),
      page("Project Issues & Decisions", "workflow"),
    ],
  },
  {
    id: "requisitions",
    slug: "requisitions",
    title: "Requisitions & MFR",
    shortTitle: "Requisitions",
    code: "RQ",
    description:
      "Field requests, coordinator consolidation, MFR preparation, approval, disbursement tracking, and adjustment status.",
    pages: [
      page("Requisition Dashboard", "dashboard", "dashboard"),
      page("Field Requisitions", "workflow"),
      page("E4BL Centre Requisitions", "workflow"),
      page("A2PHC Camp Requisitions", "workflow"),
      page("Coordinator Review Queue", "workflow"),
      page("Consolidated Project Needs"),
      page("Monthly Fund Requisitions", "workflow", "mfr"),
      page("MFR Line Items"),
      page("MFR Approval Queue", "workflow"),
      page("Additional MFR", "workflow"),
      page("Disbursement Tracking", "workflow"),
      page("Adjustment Status", "workflow"),
      page("Requisition Reports", "report"),
      page("MFR Register", "report"),
      page("MFR versus Actual", "report"),
    ],
  },
  {
    id: "procurement",
    slug: "procurement",
    title: "Procurement",
    shortTitle: "Procurement",
    code: "PR",
    description:
      "Purchase requisitions, quotations, vendor selection, purchase orders, receipt, bill registration, and procurement control.",
    pages: [
      page("Procurement Dashboard", "dashboard", "dashboard"),
      page("Purchase Requisitions", "workflow"),
      page("PR Approval Queue", "workflow"),
      page("Quotation Requests", "workflow"),
      page("Supplier Quotations"),
      page("Comparative Statements", "workflow"),
      page("Vendor Selection", "workflow"),
      page("Vendors"),
      page("Purchase Orders", "workflow"),
      page("Goods Receipts", "workflow"),
      page("Service Completion Notes", "workflow"),
      page("Bill Registration", "workflow"),
      page("Vendor Payments", "workflow"),
      page("Vendor Performance", "report"),
      page("Procurement Register", "report"),
      page("Procurement Ageing", "report"),
    ],
  },
  {
    id: "finance",
    slug: "finance",
    title: "Finance & Accounting",
    shortTitle: "Finance",
    code: "FN",
    description:
      "Budget control, accounting, cash, bank, MFS, IOU, vouchers, reconciliation, closing, and financial reporting.",
    pages: [
      page("Finance Dashboard", "dashboard", "dashboard"),
      page("Annual Budgets", "workflow"),
      page("Monthly Allocations"),
      page("Budget Revisions", "workflow"),
      page("Budget Availability", "report"),
      page("Funding Gaps", "report"),
      page("Commitments"),
      page("Chart of Accounts"),
      page("Account Groups"),
      page("Funds"),
      page("Financial Dimensions", "settings"),
      page("Disbursements", "workflow"),
      page("IOU & Advances", "workflow", "iou-and-advances"),
      page("IOU Adjustments", "workflow"),
      page("IOU Ageing", "report"),
      page("Bills", "workflow"),
      page("Vouchers", "workflow"),
      page("Journal Entries", "workflow"),
      page("Receipts", "workflow"),
      page("Payments", "workflow"),
      page("Cash Accounts"),
      page("Cash Book", "report"),
      page("Bank Accounts"),
      page("Bank Book", "report"),
      page("MFS Accounts"),
      page("MFS Book", "report"),
      page("Internal Transfers", "workflow"),
      page("Cheque Register"),
      page("Bank Statements"),
      page("Bank Reconciliation", "workflow"),
      page("General Ledger", "report"),
      page("Trial Balance", "report"),
      page("Income & Expenditure", "report"),
      page("Fund Balance", "report"),
      page("Project Statements", "report"),
      page("Donor Statements", "report"),
      page("Monthly Closing", "workflow"),
      page("Closing Checklist", "workflow"),
      page("Financial Reports", "report"),
    ],
  },
  {
    id: "hr",
    slug: "hr",
    title: "Human Resources",
    shortTitle: "HR",
    code: "HR",
    description:
      "Employee lifecycle, assignments, attendance, leave, recruitment, onboarding, performance, training, and separation.",
    pages: [
      page("HR Dashboard", "dashboard", "dashboard"),
      page("Employees"),
      page("Employee Profiles", "profile"),
      page("Positions"),
      page("Designations"),
      page("Departments"),
      page("Duty Stations"),
      page("Reporting Lines"),
      page("Employee Assignments"),
      page("Attendance"),
      page("Leave Requests", "workflow"),
      page("Leave Balances", "report"),
      page("Performance Reviews", "workflow"),
      page("Staff Achievement Link", "report"),
      page("Training History", "report"),
      page("Employee Documents", "library"),
      page("Transfers", "workflow"),
      page("Promotions", "workflow"),
      page("Separations", "workflow"),
      page("Exit Clearance", "workflow"),
      page("HR Reports", "report"),
      page("Manpower Requisitions", "workflow"),
      page("Vacancies"),
      page("Applicants"),
      page("Screening", "workflow"),
      page("Interview Schedule", "calendar"),
      page("Interview Assessments", "workflow"),
      page("Selection Recommendations", "workflow"),
      page("Offers & Appointments", "workflow"),
      page("Joining & Verification", "workflow"),
      page("Onboarding Checklists", "workflow"),
    ],
  },
  {
    id: "payroll",
    slug: "payroll",
    title: "Payroll",
    shortTitle: "Payroll",
    code: "PY",
    description:
      "Salary structures, payroll periods, review, approval, bank instruction, payslips, accounting, and payroll reports.",
    pages: [
      page("Payroll Dashboard", "dashboard", "dashboard"),
      page("Salary Structures"),
      page("Salary Components"),
      page("Payroll Periods"),
      page("Payroll Runs", "workflow"),
      page("Payroll Review Queue", "workflow"),
      page("Salary Requests", "workflow"),
      page("Bank Instructions", "workflow"),
      page("Payment Confirmations", "workflow"),
      page("Payslips", "library"),
      page("Project Salary Allocation", "report"),
      page("Payroll Journals", "workflow"),
      page("Payroll Variance", "report"),
      page("Payroll Reports", "report"),
    ],
  },
  {
    id: "e4bl",
    slug: "e4bl",
    title: "E4BL Education",
    shortTitle: "E4BL",
    code: "ED",
    description:
      "Education centres, students, teachers, attendance, learning, results, materials, graduates, and sponsorship.",
    pages: [
      page("E4BL Dashboard", "dashboard", "dashboard"),
      page("Education Centres"),
      page("Academic Years"),
      page("Class Levels"),
      page("Subjects"),
      page("Teacher Assignments"),
      page("Students"),
      page("Guardians"),
      page("Admissions", "workflow"),
      page("Annual Enrolments", "workflow"),
      page("Student Attendance"),
      page("Staff Attendance"),
      page("Class & Lesson Activity"),
      page("Teacher Daily Activity"),
      page("Teacher Monthly Achievement", "workflow"),
      page("Assessments"),
      page("Examinations", "workflow"),
      page("Results", "report"),
      page("Promotions", "workflow"),
      page("Dropout Intervention", "workflow"),
      page("At-Risk Students", "workflow"),
      page("Home Visits"),
      page("Parent Meetings", "calendar"),
      page("Material Distributions", "workflow"),
      page("Fees & Waivers", "workflow"),
      page("Education Events", "calendar"),
      page("Teacher Training", "calendar"),
      page("HSF Graduates"),
      page("High-School Support", "workflow"),
      page("Child Sponsorships", "workflow"),
      page("Centre Requisitions", "workflow"),
      page("Education Reports", "report"),
    ],
  },
  {
    id: "a2phc",
    slug: "a2phc",
    title: "A2PHC Health",
    shortTitle: "A2PHC",
    code: "HL",
    description:
      "Health camps, patients, visits, consultations, prescriptions, medicine, referrals, follow-up, and health reporting.",
    pages: [
      page("A2PHC Dashboard", "dashboard", "dashboard"),
      page("Camp Plans", "workflow"),
      page("Health Camps"),
      page("Camp Calendar", "calendar"),
      page("Doctor Assignments"),
      page("Supervisor Assignments"),
      page("Camp Teams"),
      page("Patients"),
      page("Patient Visits", "workflow"),
      page("Patient Registration", "workflow"),
      page("Consultations", "workflow"),
      page("Vitals"),
      page("Diagnoses"),
      page("Prescriptions", "workflow"),
      page("Prescription Items"),
      page("Medicine Issues", "workflow"),
      page("Tests & Advice"),
      page("Referrals", "workflow"),
      page("Follow-Ups", "workflow"),
      page("High-Risk Cases", "workflow"),
      page("Nutrition Sessions"),
      page("MHPSS Sessions"),
      page("Daily Camp Summaries", "report"),
      page("Doctor Daily Summaries", "report"),
      page("Supervisor Achievement", "workflow"),
      page("Clinical Sign-Off Queue", "workflow"),
      page("Camp Requisitions", "workflow"),
      page("Health Reports", "report"),
      page("Health Data Quality", "report"),
    ],
  },
  {
    id: "climate",
    slug: "climate",
    title: "Climate Action",
    shortTitle: "Climate",
    code: "CA",
    description:
      "Climate-risk communities, awareness, adaptation, distributions, restoration, emergency response, and outcome tracking.",
    pages: [
      page("Climate Dashboard", "dashboard", "dashboard"),
      page("Climate-Risk Locations"),
      page("Communities"),
      page("Youth Groups"),
      page("Awareness Sessions"),
      page("Climate Trainings", "calendar"),
      page("Adaptation Activities", "workflow"),
      page("Seed Distributions", "workflow"),
      page("Farmer Support", "workflow"),
      page("Tree & Restoration Activities", "workflow"),
      page("Emergency Responses", "workflow"),
      page("Household Reach"),
      page("Climate Outcomes", "report"),
      page("Climate Reports", "report"),
    ],
  },
  {
    id: "women",
    slug: "women-empowerment",
    title: "Women Empowerment",
    shortTitle: "Women",
    code: "WE",
    description:
      "Health, dignity, protection, skills, financial literacy, livelihood, entrepreneurship, and outcome tracking.",
    pages: [
      page("Women Empowerment Dashboard", "dashboard", "dashboard"),
      page("Participants"),
      page("Menstrual Health Sessions"),
      page("Sanitary Product Distributions", "workflow"),
      page("Adolescent Sessions"),
      page("Maternal Health Sessions"),
      page("Cancer Awareness Activities"),
      page("Rights Awareness"),
      page("Protection Referrals", "workflow"),
      page("Skills Trainings", "calendar"),
      page("Financial Literacy Sessions"),
      page("Livelihood Support", "workflow"),
      page("Entrepreneurship Support", "workflow"),
      page("Community Engagement"),
      page("Empowerment Outcomes", "report"),
      page("Women Empowerment Reports", "report"),
    ],
  },
  {
    id: "inventory",
    slug: "inventory",
    title: "Inventory & Assets",
    shortTitle: "Inventory",
    code: "IN",
    description:
      "Medicine, school materials, supplies, equipment, stock movements, expiry, assets, repair, and disposal.",
    pages: [
      page("Inventory Dashboard", "dashboard", "dashboard"),
      page("Item Master"),
      page("Item Categories"),
      page("Units of Measure"),
      page("Stores & Locations"),
      page("Medicines"),
      page("School Materials"),
      page("Office Supplies"),
      page("Equipment & Furniture"),
      page("Fixed Assets"),
      page("Stock Receipts", "workflow"),
      page("Stock Issues", "workflow"),
      page("Stock Transfers", "workflow"),
      page("Stock Returns", "workflow"),
      page("Batches"),
      page("Expiry Alerts", "report"),
      page("Reorder Alerts", "report"),
      page("Repair & Maintenance", "workflow"),
      page("Damage & Disposal", "workflow"),
      page("Asset Assignments", "workflow"),
      page("Distributions", "workflow"),
      page("Inventory Reports", "report"),
      page("Asset Register", "report"),
    ],
  },
  {
    id: "donors",
    slug: "donors",
    title: "Donors, CSR & Grants",
    shortTitle: "Donors",
    code: "DN",
    description:
      "Donors, CSR partners, grants, agreements, restrictions, donations, utilization, deadlines, and sponsorship.",
    pages: [
      page("Donor Dashboard", "dashboard", "dashboard"),
      page("Donors"),
      page("CSR Partners"),
      page("Donor Profiles", "profile"),
      page("Proposals", "workflow"),
      page("Grants", "workflow"),
      page("Agreements", "library"),
      page("Restricted Funds"),
      page("Donations", "workflow"),
      page("Donation Receipts", "workflow"),
      page("Reporting Schedules", "calendar"),
      page("Fund Utilization", "report"),
      page("Donor Communications"),
      page("Renewals", "workflow"),
      page("Sponsorships", "workflow"),
      page("Funding Gaps", "report"),
      page("Donor Reports", "report"),
      page("Donor Portal Preview", "dashboard"),
    ],
  },
  {
    id: "meal",
    slug: "meal",
    title: "MEAL & Impact",
    shortTitle: "MEAL",
    code: "ME",
    description:
      "Results frameworks, indicators, baselines, targets, achievements, monitoring, evaluation, feedback, and impact reports.",
    pages: [
      page("MEAL Dashboard", "dashboard", "dashboard"),
      page("Results Frameworks"),
      page("Goals & Outcomes"),
      page("Outputs"),
      page("Activities"),
      page("Indicators"),
      page("Baselines"),
      page("Targets"),
      page("Achievements", "workflow"),
      page("Monitoring Visits", "workflow"),
      page("Evaluations", "workflow"),
      page("Beneficiary Feedback", "workflow"),
      page("Evidence Review", "library"),
      page("Data Quality Assessments", "report"),
      page("Monthly Impact Reports", "report"),
      page("Annual Impact Reports", "report"),
      page("Donor Results Reports", "report"),
    ],
  },
  {
    id: "meetings",
    slug: "meetings",
    title: "Meetings & Communication",
    shortTitle: "Meetings",
    code: "MC",
    description:
      "Meeting schedules, agendas, attendance, minutes, resolutions, actions, notices, acknowledgements, and official communication.",
    pages: [
      page("Meeting Dashboard", "dashboard", "dashboard"),
      page("Meetings", "workflow"),
      page("Meeting Calendar", "calendar"),
      page("Agendas", "library"),
      page("Participants"),
      page("Attendance"),
      page("Meeting Minutes", "library"),
      page("Resolutions", "workflow"),
      page("Action Items", "workflow"),
      page("Follow-Up Meetings", "calendar"),
      page("Online Meeting Workspace", "dashboard"),
      page("Official Notices", "workflow"),
      page("Office Orders", "library"),
      page("Notice Acknowledgements", "report"),
      page("Internal Messages"),
      page("Communication Archive", "library"),
    ],
  },
  {
    id: "training",
    slug: "training",
    title: "Training & Learning",
    shortTitle: "Training",
    code: "TR",
    description:
      "Training needs, annual plans, sessions, nominations, attendance, assessments, certificates, materials, and learning history.",
    pages: [
      page("Training Dashboard", "dashboard", "dashboard"),
      page("Training Needs"),
      page("Annual Training Plan", "workflow"),
      page("Training Calendar", "calendar"),
      page("Training Sessions", "workflow"),
      page("Trainers"),
      page("Participant Nominations", "workflow"),
      page("Training Attendance"),
      page("Pre & Post Assessments", "workflow"),
      page("Feedback"),
      page("Certificates", "library"),
      page("Training Reports", "report"),
      page("Training Material Library", "library"),
      page("Presentations", "library"),
      page("Manuals & Guides", "library"),
      page("Video Resources", "library"),
      page("Policies & Handouts", "library"),
    ],
  },
  {
    id: "documents",
    slug: "documents",
    title: "Documents & Evidence",
    shortTitle: "Documents",
    code: "DC",
    description:
      "Controlled document storage, evidence, versions, approvals, access, retention, expiry, and audit history.",
    pages: [
      page("Document Dashboard", "dashboard", "dashboard"),
      page("All Documents", "library"),
      page("Document Categories", "settings"),
      page("Policies", "library"),
      page("Agreements", "library"),
      page("Financial Evidence", "library"),
      page("Programme Evidence", "library"),
      page("Employee Documents", "library"),
      page("Education Documents", "library"),
      page("Health Documents", "library"),
      page("Document Approvals", "workflow"),
      page("Expiring Documents", "report"),
      page("Private Documents", "library"),
      page("Document Versions", "library"),
      page("Retention Schedule", "settings"),
      page("Document Audit History", "report"),
    ],
  },
  {
    id: "reports",
    slug: "reports",
    title: "Reports & Analytics",
    shortTitle: "Reports",
    code: "RP",
    description:
      "Executive, programme, financial, HR, procurement, donor, audit, and custom reporting previews.",
    pages: [
      page("Reports Dashboard", "dashboard", "dashboard"),
      page("Executive Dashboard", "dashboard"),
      page("Pending Approvals", "report"),
      page("Deadline & Risk Report", "report"),
      page("Project Management Reports", "report"),
      page("Project Achievement Reports", "report"),
      page("Financial Reports", "report"),
      page("Budget versus Actual", "report"),
      page("HR Reports", "report"),
      page("Payroll Reports", "report"),
      page("Education Reports", "report"),
      page("Health Reports", "report"),
      page("Procurement Reports", "report"),
      page("Inventory Reports", "report"),
      page("Donor Reports", "report"),
      page("MEAL & Impact Reports", "report"),
      page("Meeting Action Reports", "report"),
      page("Notice Acknowledgement Reports", "report"),
      page("Audit Reports", "report"),
      page("Data Quality Reports", "report"),
      page("Custom Report Builder", "settings"),
      page("Scheduled Exports", "settings"),
    ],
  },
  {
    id: "administration",
    slug: "administration",
    title: "Administration & System",
    shortTitle: "Administration",
    code: "AD",
    description:
      "Organization configuration, users, access, approvals, master data, numbering, notifications, integrations, security, and audit.",
    pages: [
      page("Administration Dashboard", "dashboard", "dashboard"),
      page("Organization Profile", "profile"),
      page("Users"),
      page("User Invitations", "workflow"),
      page("Roles"),
      page("Permissions"),
      page("User Role Assignments"),
      page("Project Access"),
      page("Location Access"),
      page("Account Status", "workflow"),
      page("Approval Matrix", "settings"),
      page("Workflow Configuration", "settings"),
      page("Separation of Duties", "settings"),
      page("Fiscal Years", "settings"),
      page("Financial Periods", "settings"),
      page("Document Numbering", "settings"),
      page("Status Values", "settings"),
      page("Units of Measure", "settings"),
      page("Master Data", "settings"),
      page("Notification Preferences", "settings"),
      page("Integrations", "settings"),
      page("Security Settings", "settings"),
      page("Localization", "settings"),
      page("Bangla & English Labels", "settings"),
      page("Audit Log", "report"),
      page("System Health", "dashboard"),
      page("Data Import Centre", "workflow"),
      page("Backup & Recovery", "settings"),
      page("Module Catalogue", "library"),
    ],
  },
];

export const portalRoutes: PortalRoute[] = portalGroups.flatMap((group) =>
  group.pages.map((definition) => ({
    ...definition,
    group,
    path: `${group.slug}/${definition.slug}`,
    kind: definition.kind ?? "registry",
    summary:
      definition.summary ??
      `${definition.title} provides a complete management-ready interface within ${group.title}. This preview uses synthetic demonstration data and contains no live workflow or organizational record.`,
  })),
);

export const portalRouteCount = portalRoutes.length + 1;

export const executiveDashboardRoute: PortalRoute = {
  slug: "dashboard",
  path: "dashboard",
  title: "Executive Overview",
  summary:
    "A management-level view of HSF programmes, organizational priorities, approval queues, financial control, people, service delivery, and institutional readiness.",
  kind: "dashboard",
  owner: "Chairman, CEO and senior management",
  group: {
    id: "executive",
    slug: "dashboard",
    title: "Executive Workspace",
    shortTitle: "Executive",
    code: "EX",
    description: "Organization-wide leadership and decision support.",
    pages: [],
  },
};

export type PortalRouteResolution = {
  route: PortalRoute;
  action: "index" | "new" | "detail" | "edit";
  recordId?: string;
};

export function resolvePortalRoute(pathSegments: string[]): PortalRouteResolution | null {
  const normalized = pathSegments.filter(Boolean).join("/");
  const exact = portalRoutes.find((route) => route.path === normalized);
  if (exact) return { route: exact, action: "index" };

  if (pathSegments.length < 2) return null;

  const last = pathSegments.at(-1) ?? "";
  const basePath = pathSegments.slice(0, -1).join("/");
  const baseRoute = portalRoutes.find((route) => route.path === basePath);
  if (!baseRoute) return null;

  if (last === "new") return { route: baseRoute, action: "new" };
  if (last === "edit") return { route: baseRoute, action: "edit", recordId: "HSF-DEMO-001" };
  return { route: baseRoute, action: "detail", recordId: last };
}

export function getRouteByPath(path: string) {
  if (path.replace(/^\//, "") === "dashboard") return executiveDashboardRoute;
  return portalRoutes.find((route) => route.path === path.replace(/^\//, ""));
}
