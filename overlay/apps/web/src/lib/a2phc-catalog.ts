export type A2PHCScreenKind =
  "dashboard" | "registry" | "workflow" | "calendar" | "report" | "settings";

export type A2PHCScreen = {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  group: string;
  kind: A2PHCScreenKind;
  roles: string[];
  medicineFuture?: boolean;
};

const managementRoles = ["executive", "ceo", "a2phc-coordinator"];
const supervisorRoles = [
  "medical-supervisor",
  "a2phc-coordinator",
  "executive",
  "ceo",
];
const doctorRoles = [
  "general-physician",
  "a2phc-coordinator",
  "executive",
  "ceo",
];
const financeRoles = [
  "finance-director",
  "finance-officer",
  "a2phc-coordinator",
  "executive",
  "ceo",
  "auditor",
];

export const A2PHC_GROUPS = [
  "Overview",
  "Coverage and Teams",
  "Camp Operations",
  "Patients",
  "Clinical Care",
  "Equipment and Resources",
  "Field Finance",
  "Achievement and Reports",
  "Configuration",
] as const;

export const A2PHC_SCREENS: A2PHCScreen[] = [
  {
    id: "dashboard",
    title: "A2PHC Dashboard",
    description:
      "Five-district management view for camps, patients, teams, quality, and field finance.",
    group: "Overview",
    kind: "dashboard",
    roles: [
      ...managementRoles,
      "medical-supervisor",
      "general-physician",
      "finance-director",
      "finance-officer",
      "auditor",
    ],
  },
  {
    id: "today",
    title: "Today’s Field Operations",
    shortTitle: "Today",
    description:
      "Today’s assigned camp, patient queue, travel readiness, and pending work.",
    group: "Overview",
    kind: "dashboard",
    roles: [...supervisorRoles, ...doctorRoles],
  },
  {
    id: "field-operations",
    title: "A2PHC Field Operations",
    description:
      "Mobile-team operating model, daily flow, and field-readiness presentation.",
    group: "Overview",
    kind: "dashboard",
    roles: [...managementRoles, ...supervisorRoles, ...doctorRoles],
  },
  {
    id: "coverage",
    title: "Geographic Coverage",
    description:
      "District, upazila, union, village, char, and camp-point coverage.",
    group: "Coverage and Teams",
    kind: "registry",
    roles: [...managementRoles, ...supervisorRoles],
  },
  {
    id: "camp-locations",
    title: "Camp Locations",
    description:
      "Configurable camp points across river-erosion and hard-to-reach communities.",
    group: "Coverage and Teams",
    kind: "registry",
    roles: [...managementRoles, ...supervisorRoles],
  },
  {
    id: "camp-teams",
    title: "Camp Teams",
    description: "One MBBS Doctor and one Medical Supervisor per mobile team.",
    group: "Coverage and Teams",
    kind: "registry",
    roles: [...managementRoles, ...supervisorRoles, ...doctorRoles],
  },
  {
    id: "doctor-assignments",
    title: "Doctor Assignments",
    description:
      "Doctor availability and assigned camps, districts, and consultation dates.",
    group: "Coverage and Teams",
    kind: "registry",
    roles: managementRoles,
  },
  {
    id: "supervisor-assignments",
    title: "Supervisor Assignments",
    description:
      "Supervisor district, union, field route, and responsibility assignments.",
    group: "Coverage and Teams",
    kind: "registry",
    roles: managementRoles,
  },
  {
    id: "team-availability",
    title: "Team Availability",
    description:
      "Team availability, leave, substitution, and coverage-gap view.",
    group: "Coverage and Teams",
    kind: "calendar",
    roles: managementRoles,
  },
  {
    id: "camp-plans",
    title: "Camp Plans",
    description:
      "Plan district, union, community, team, travel, equipment, and expected reach.",
    group: "Camp Operations",
    kind: "workflow",
    roles: [...managementRoles, ...supervisorRoles],
  },
  {
    id: "health-camps",
    title: "Health Camps",
    description:
      "Camp register with location, team, timing, status, and service summary.",
    group: "Camp Operations",
    kind: "registry",
    roles: [...managementRoles, ...supervisorRoles, ...doctorRoles],
  },
  {
    id: "camp-calendar",
    title: "Camp Calendar",
    description:
      "Monthly view of planned, approved, active, completed, and cancelled camps.",
    group: "Camp Operations",
    kind: "calendar",
    roles: [...managementRoles, ...supervisorRoles, ...doctorRoles],
  },
  {
    id: "travel-plans",
    title: "Travel and Route Plans",
    description:
      "Motorcycle, local transport, and boat-route planning for field access.",
    group: "Camp Operations",
    kind: "workflow",
    roles: [...managementRoles, ...supervisorRoles],
  },
  {
    id: "camp-readiness",
    title: "Camp Readiness Checklist",
    description:
      "Doctor, Supervisor, equipment, forms, travel budget, and access-risk readiness.",
    group: "Camp Operations",
    kind: "workflow",
    roles: [...managementRoles, ...supervisorRoles],
  },
  {
    id: "patients",
    title: "Patient Master",
    description:
      "One privacy-controlled identity record supporting many patient visits.",
    group: "Patients",
    kind: "registry",
    roles: [...managementRoles, ...supervisorRoles, ...doctorRoles],
  },
  {
    id: "patient-registration",
    title: "Patient Registration",
    description:
      "Search an existing patient or create a new patient and visit draft.",
    group: "Patients",
    kind: "workflow",
    roles: supervisorRoles,
  },
  {
    id: "patient-visits",
    title: "Patient Visits",
    description:
      "Visit-level service records linked to camp, Supervisor, Doctor, and location.",
    group: "Patients",
    kind: "workflow",
    roles: [...managementRoles, ...supervisorRoles, ...doctorRoles],
  },
  {
    id: "patient-queue",
    title: "Patient Queue",
    description:
      "Registered, waiting, in consultation, pending sign-off, and completed patients.",
    group: "Patients",
    kind: "workflow",
    roles: [...supervisorRoles, ...doctorRoles],
  },
  {
    id: "patient-history",
    title: "Patient History",
    description:
      "Previous visits, consultation summaries, prescriptions, referrals, and follow-up.",
    group: "Patients",
    kind: "registry",
    roles: [...supervisorRoles, ...doctorRoles],
  },
  {
    id: "consent-and-privacy",
    title: "Consent and Privacy",
    description:
      "Consent acknowledgement, privacy classification, and restricted access preview.",
    group: "Patients",
    kind: "settings",
    roles: managementRoles,
  },
  {
    id: "consultations",
    title: "Doctor Consultations",
    description: "Clinical workspace for assigned patient visits.",
    group: "Clinical Care",
    kind: "workflow",
    roles: doctorRoles,
  },
  {
    id: "vitals",
    title: "Basic Measurements",
    description:
      "Management-approved measurements recorded by trained field staff.",
    group: "Clinical Care",
    kind: "registry",
    roles: [...supervisorRoles, ...doctorRoles],
  },
  {
    id: "diagnoses",
    title: "Diagnoses",
    description:
      "Provisional or final diagnosis presentation linked to the consultation.",
    group: "Clinical Care",
    kind: "registry",
    roles: doctorRoles,
  },
  {
    id: "prescriptions",
    title: "Prescriptions",
    description:
      "Doctor prescription, dosage, duration, instructions, and printable preview.",
    group: "Clinical Care",
    kind: "workflow",
    roles: doctorRoles,
  },
  {
    id: "prescription-items",
    title: "Prescription Items",
    description:
      "Medicine name, dosage, frequency, route, duration, and advice.",
    group: "Clinical Care",
    kind: "registry",
    roles: doctorRoles,
  },
  {
    id: "tests-and-advice",
    title: "Tests and Advice",
    description:
      "Recommended tests, patient education, warning signs, and clinical advice.",
    group: "Clinical Care",
    kind: "registry",
    roles: doctorRoles,
  },
  {
    id: "referrals",
    title: "Referrals",
    description:
      "Referral reason, destination, urgency, completion, and follow-up responsibility.",
    group: "Clinical Care",
    kind: "workflow",
    roles: [...doctorRoles, ...supervisorRoles],
  },
  {
    id: "follow-ups",
    title: "Follow-Ups",
    description:
      "Follow-up date, responsible person, outcome, and outstanding actions.",
    group: "Clinical Care",
    kind: "workflow",
    roles: [...doctorRoles, ...supervisorRoles],
  },
  {
    id: "high-risk-cases",
    title: "High-Risk Cases",
    description: "Restricted high-risk flags and escalation presentation.",
    group: "Clinical Care",
    kind: "workflow",
    roles: [...doctorRoles, "a2phc-coordinator", "executive", "ceo"],
  },
  {
    id: "clinical-sign-off-queue",
    title: "Clinical Sign-Off Queue",
    description: "Consultations waiting for Doctor completion and sign-off.",
    group: "Clinical Care",
    kind: "workflow",
    roles: doctorRoles,
  },
  {
    id: "medical-equipment",
    title: "Medical Equipment",
    description:
      "Equipment register, assignment, condition, location, and service history.",
    group: "Equipment and Resources",
    kind: "registry",
    roles: [...managementRoles, ...supervisorRoles],
  },
  {
    id: "equipment-assignments",
    title: "Equipment Assignments",
    description:
      "Custody and assignment of equipment to teams and Supervisors.",
    group: "Equipment and Resources",
    kind: "workflow",
    roles: [...managementRoles, ...supervisorRoles],
  },
  {
    id: "equipment-checklists",
    title: "Equipment Checklists",
    description:
      "Available, damaged, battery, calibration, repair, and replacement checks.",
    group: "Equipment and Resources",
    kind: "workflow",
    roles: [...managementRoles, ...supervisorRoles],
  },
  {
    id: "maintenance-and-calibration",
    title: "Maintenance and Calibration",
    description:
      "Equipment servicing, repair, calibration, and next-due dates.",
    group: "Equipment and Resources",
    kind: "workflow",
    roles: managementRoles,
  },
  {
    id: "medical-consumables",
    title: "Medical Consumables",
    description:
      "Basic approved consumables and field-use availability presentation.",
    group: "Equipment and Resources",
    kind: "registry",
    roles: [...managementRoles, ...supervisorRoles],
  },
  {
    id: "medicine-support-planning",
    title: "Future Medicine Support",
    description:
      "Medicine budget and stock capability reserved for future activation.",
    group: "Equipment and Resources",
    kind: "settings",
    roles: [...managementRoles, "finance-director"],
    medicineFuture: true,
  },
  {
    id: "travel-and-field-expenses",
    title: "Travel and Field Expenses",
    description:
      "Camp-linked fuel, transport, boat, communication, and field costs.",
    group: "Field Finance",
    kind: "workflow",
    roles: [...financeRoles, ...supervisorRoles],
  },
  {
    id: "fuel-and-transport",
    title: "Fuel and Local Transport",
    description:
      "Motorcycle fuel, local transport, route, amount, and evidence.",
    group: "Field Finance",
    kind: "registry",
    roles: [...financeRoles, ...supervisorRoles],
  },
  {
    id: "boat-fares",
    title: "Boat Fares",
    description:
      "Char-area boat travel, route, payee, justification, and evidence.",
    group: "Field Finance",
    kind: "registry",
    roles: [...financeRoles, ...supervisorRoles],
  },
  {
    id: "camp-requisitions",
    title: "Camp Requisitions",
    description: "Next-month field needs submitted by the Medical Supervisor.",
    group: "Field Finance",
    kind: "workflow",
    roles: [...financeRoles, ...supervisorRoles],
  },
  {
    id: "requisition-mfr-traceability",
    title: "Requisition to MFR Traceability",
    description:
      "Field lines, Coordinator consolidation, MFR, approval, and disbursement chain.",
    group: "Field Finance",
    kind: "report",
    roles: financeRoles,
  },
  {
    id: "bills-and-evidence",
    title: "Bills and Evidence",
    description:
      "Field bill, receipt, photograph, explanation, reviewer, and adjustment status.",
    group: "Field Finance",
    kind: "workflow",
    roles: [...financeRoles, ...supervisorRoles],
  },
  {
    id: "advance-adjustments",
    title: "Advance Adjustments",
    description:
      "Advance, expense, cash return, outstanding amount, and closing status.",
    group: "Field Finance",
    kind: "workflow",
    roles: financeRoles,
  },
  {
    id: "daily-camp-summaries",
    title: "Daily Camp Summaries",
    description:
      "Patients, visits, referrals, quality, equipment, travel, and challenge summary.",
    group: "Achievement and Reports",
    kind: "report",
    roles: [...managementRoles, ...supervisorRoles],
  },
  {
    id: "doctor-daily-summaries",
    title: "Doctor Daily Summaries",
    description:
      "Consultations, prescriptions, referrals, high-risk cases, and sign-off completion.",
    group: "Achievement and Reports",
    kind: "report",
    roles: [...managementRoles, ...doctorRoles],
  },
  {
    id: "supervisor-achievement",
    title: "Supervisor Achievement",
    description:
      "Camp, coverage, registration, follow-up, data quality, and reporting achievement.",
    group: "Achievement and Reports",
    kind: "workflow",
    roles: [...managementRoles, ...supervisorRoles],
  },
  {
    id: "doctor-achievement",
    title: "Doctor Achievement",
    description:
      "Assigned camps, consultations, referrals, sign-off, and clinical observations.",
    group: "Achievement and Reports",
    kind: "workflow",
    roles: [...managementRoles, ...doctorRoles],
  },
  {
    id: "monthly-project-report",
    title: "Monthly Project Management Report",
    description:
      "Team performance, camps, resources, finance, quality, challenges, and decisions.",
    group: "Achievement and Reports",
    kind: "report",
    roles: [...managementRoles, "auditor"],
  },
  {
    id: "project-achievement-report",
    title: "Project Achievement Report",
    description:
      "Target versus actual camps, patients, unions, consultations, referrals, and reach.",
    group: "Achievement and Reports",
    kind: "report",
    roles: [...managementRoles, "auditor"],
  },
  {
    id: "health-reports",
    title: "Health Reports",
    description:
      "Patient, visit, camp, district, team, referral, expense, and management reports.",
    group: "Achievement and Reports",
    kind: "report",
    roles: [...managementRoles, "finance-director", "auditor"],
  },
  {
    id: "health-data-quality",
    title: "Health Data Quality",
    description:
      "Missing fields, duplicates, unsigned consultations, incomplete locations, and late reports.",
    group: "Achievement and Reports",
    kind: "report",
    roles: [...managementRoles, "auditor"],
  },
  {
    id: "coverage-and-reach",
    title: "Coverage and Reach",
    description:
      "District, union, demographic, camp, and service-reach analysis.",
    group: "Achievement and Reports",
    kind: "report",
    roles: [...managementRoles, "auditor"],
  },
  {
    id: "disease-and-complaint-trends",
    title: "Complaint and Diagnosis Trends",
    description:
      "Privacy-safe presentation of common complaints and diagnoses by area and period.",
    group: "Achievement and Reports",
    kind: "report",
    roles: [...managementRoles, ...doctorRoles, "auditor"],
  },
  {
    id: "a2phc-settings",
    title: "A2PHC Settings",
    description:
      "UI-only programme configuration, field labels, and future feature controls.",
    group: "Configuration",
    kind: "settings",
    roles: ["executive", "ceo", "a2phc-coordinator", "system-administrator"],
  },
];

export const A2PHC_DEFAULT_SCREEN = A2PHC_SCREENS[0]!;

export function getA2PHCScreen(slug: string | undefined): A2PHCScreen {
  return (
    A2PHC_SCREENS.find((screen) => screen.id === slug) ?? A2PHC_DEFAULT_SCREEN
  );
}

export function getA2PHCScreensForRole(roleId: string): A2PHCScreen[] {
  if (roleId === "executive" || roleId === "ceo") return A2PHC_SCREENS;
  return A2PHC_SCREENS.filter((screen) => screen.roles.includes(roleId));
}
