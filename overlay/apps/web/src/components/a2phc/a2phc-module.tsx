"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  A2PHC_GROUPS,
  A2PHC_SCREENS,
  getA2PHCScreensForRole,
  type A2PHCScreen,
} from "@/lib/a2phc-catalog";
import {
  DEFAULT_PORTAL_ROLE,
  getPortalRoleProfile,
  type PortalRoleId,
} from "@/lib/portal-role-access";
import styles from "./a2phc-module.module.css";

const ROLE_STORAGE_KEY = "hsf-erp-ui-role";
const ROLE_EVENT = "hsf-role-change";

const DISTRICTS = [
  {
    name: "Bogura",
    area: "Dhunat and Sariakandi",
    route: "Motorcycle + river access",
    status: "Active",
  },
  {
    name: "Manikganj",
    area: "Harirampur and assigned unions",
    route: "Motorcycle + boat where required",
    status: "Active",
  },
  {
    name: "Narail",
    area: "Lohagara and assigned unions",
    route: "Motorcycle and local transport",
    status: "Active",
  },
  {
    name: "Habiganj",
    area: "Assigned hard-to-reach unions",
    route: "Motorcycle + local transport",
    status: "Active",
  },
  {
    name: "Mymensingh",
    area: "Fulbaria and assigned unions",
    route: "Motorcycle and local transport",
    status: "Active",
  },
];

const WORKFLOW = [
  "Camp planned",
  "Doctor and Supervisor assigned",
  "Travel and equipment checked",
  "Patient registered",
  "Doctor consultation",
  "Prescription / referral",
  "Clinical sign-off",
  "Daily summary and expense evidence",
];

const SAMPLE_CAMPS = [
  {
    id: "A2P-CAMP-071",
    district: "Bogura",
    location: "Union field point",
    team: "Team 01",
    date: "16 Jul 2026",
    status: "Ready",
  },
  {
    id: "A2P-CAMP-072",
    district: "Manikganj",
    location: "Char community point",
    team: "Team 02",
    date: "16 Jul 2026",
    status: "Travel check",
  },
  {
    id: "A2P-CAMP-073",
    district: "Narail",
    location: "Community courtyard",
    team: "Team 03",
    date: "17 Jul 2026",
    status: "Approved",
  },
  {
    id: "A2P-CAMP-074",
    district: "Habiganj",
    location: "Union outreach point",
    team: "Team 04",
    date: "17 Jul 2026",
    status: "Scheduled",
  },
];

const SAMPLE_PATIENTS = [
  {
    id: "A2P-P-00241",
    visit: "New",
    age: "42",
    sex: "Female",
    complaint: "Fever and weakness",
    status: "Waiting for Doctor",
  },
  {
    id: "A2P-P-00242",
    visit: "Follow-up",
    age: "61",
    sex: "Male",
    complaint: "Blood pressure review",
    status: "In consultation",
  },
  {
    id: "A2P-P-00243",
    visit: "New",
    age: "8",
    sex: "Female",
    complaint: "Cough",
    status: "Measurements complete",
  },
  {
    id: "A2P-P-00244",
    visit: "Follow-up",
    age: "29",
    sex: "Female",
    complaint: "Referral follow-up",
    status: "Pending sign-off",
  },
];

const SAMPLE_EQUIPMENT = [
  {
    item: "Blood pressure machine",
    team: "Team 01",
    condition: "Available",
    next: "Battery check · 22 Jul",
  },
  {
    item: "Glucometer",
    team: "Team 02",
    condition: "Needs strips",
    next: "Requisition draft",
  },
  {
    item: "Pulse oximeter",
    team: "Team 03",
    condition: "Available",
    next: "Calibration · Sep 2026",
  },
  {
    item: "Weighing scale",
    team: "Team 04",
    condition: "Service due",
    next: "Maintenance review",
  },
];

const SAMPLE_EXPENSES = [
  {
    type: "Motorcycle fuel",
    camp: "A2P-CAMP-071",
    amount: "BDT 1,200",
    evidence: "Receipt attached",
    status: "Draft",
  },
  {
    type: "Boat fare",
    camp: "A2P-CAMP-072",
    amount: "BDT 850",
    evidence: "Payee note required",
    status: "Returned",
  },
  {
    type: "Local transport",
    camp: "A2P-CAMP-070",
    amount: "BDT 600",
    evidence: "Verified",
    status: "Accepted",
  },
  {
    type: "Printing and forms",
    camp: "A2P-CAMP-069",
    amount: "BDT 450",
    evidence: "Bill attached",
    status: "Adjusted",
  },
];

function getInitialRole(): PortalRoleId {
  if (typeof window === "undefined") return DEFAULT_PORTAL_ROLE;
  return (
    (window.localStorage.getItem(ROLE_STORAGE_KEY) as PortalRoleId | null) ??
    DEFAULT_PORTAL_ROLE
  );
}

function Status({
  children,
  tone = "green",
}: {
  children: ReactNode;
  tone?: "green" | "amber" | "red" | "blue" | "neutral";
}) {
  return (
    <span className={`${styles.status} ${styles[`status_${tone}`]}`}>
      {children}
    </span>
  );
}

function Section({
  title,
  description,
  children,
  action,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeading}>
        <div>
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        {action ? <div>{action}</div> : null}
      </div>
      {children}
    </section>
  );
}

function Metric({
  label,
  value,
  note,
  accent = "green",
}: {
  label: string;
  value: string;
  note: string;
  accent?: "green" | "amber" | "blue" | "red";
}) {
  return (
    <article className={`${styles.metric} ${styles[`metric_${accent}`]}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{note}</p>
    </article>
  );
}

function DashboardView() {
  return (
    <>
      <div className={styles.metricGrid}>
        <Metric
          label="Active coverage"
          value="5 districts"
          note="Configurable district → union → camp hierarchy"
        />
        <Metric
          label="Mobile field teams"
          value="5 teams"
          note="One MBBS Doctor + one Medical Supervisor per team"
          accent="blue"
        />
        <Metric
          label="Today’s camp preview"
          value="4 camps"
          note="Synthetic management presentation data"
          accent="amber"
        />
        <Metric
          label="Doctor sign-off"
          value="92%"
          note="Synthetic completion indicator for UI review"
          accent="green"
        />
      </div>

      <div className={styles.twoColumn}>
        <Section
          title="Five-district field coverage"
          description="Current operating geography presented without hard-coded union limits."
        >
          <div className={styles.districtGrid}>
            {DISTRICTS.map((district) => (
              <article className={styles.districtCard} key={district.name}>
                <div>
                  <span className={styles.mapPin}>●</span>
                  <strong>{district.name}</strong>
                </div>
                <p>{district.area}</p>
                <small>{district.route}</small>
                <Status>{district.status}</Status>
              </article>
            ))}
          </div>
        </Section>

        <Section
          title="Daily service lifecycle"
          description="Supervisor and Doctor work on the same patient visit."
        >
          <ol className={styles.workflowList}>
            {WORKFLOW.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </Section>
      </div>

      <div className={styles.noticeGrid}>
        <article className={styles.importantNotice}>
          <span>Current programme rule</span>
          <h3>
            Free consultation and prescription; regular medicine dispensing is
            disabled.
          </h3>
          <p>
            The UI keeps future medicine planning visible but clearly inactive
            until HSF approves a budget, procurement policy, stock
            responsibility, expiry control, and audit process.
          </p>
        </article>
        <article className={styles.privacyNotice}>
          <span>Privacy by design</span>
          <h3>
            Patient identity is separated from visit, report, and finance
            visibility.
          </h3>
          <p>
            Finance sees camp-linked costs without unrestricted clinical detail.
            Management dashboards use privacy-safe aggregates unless a justified
            role requires record-level access.
          </p>
        </article>
      </div>

      <Section
        title="Upcoming camp operations"
        description="Synthetic rows demonstrate the connected camp, team, travel, and readiness view."
      >
        <DataTable
          headers={["Camp", "District", "Location", "Team", "Date", "Status"]}
          rows={SAMPLE_CAMPS.map((camp) => [
            camp.id,
            camp.district,
            camp.location,
            camp.team,
            camp.date,
            <Status
              key={camp.id}
              tone={camp.status === "Travel check" ? "amber" : "green"}
            >
              {camp.status}
            </Status>,
          ])}
        />
      </Section>
    </>
  );
}

function TodayView() {
  return (
    <div className={styles.twoColumnWide}>
      <Section
        title="Today’s assigned camp"
        description="A compact field view for the Doctor and Medical Supervisor."
      >
        <div className={styles.assignmentCard}>
          <div className={styles.assignmentTop}>
            <div>
              <p>Bogura · Union field point</p>
              <h3>A2P-CAMP-071</h3>
            </div>
            <Status>Ready</Status>
          </div>
          <dl className={styles.definitionGrid}>
            <div>
              <dt>Doctor</dt>
              <dd>Assigned MBBS Doctor</dd>
            </div>
            <div>
              <dt>Supervisor</dt>
              <dd>Assigned Medical Supervisor</dd>
            </div>
            <div>
              <dt>Travel</dt>
              <dd>Motorcycle route confirmed</dd>
            </div>
            <div>
              <dt>Equipment</dt>
              <dd>8 of 9 checks complete</dd>
            </div>
          </dl>
          <div className={styles.buttonRow}>
            <Link
              href="/a2phc/patient-registration"
              className={styles.primaryButton}
            >
              Register patient
            </Link>
            <Link href="/a2phc/patient-queue" className={styles.secondaryLink}>
              Open queue
            </Link>
          </div>
        </div>
      </Section>
      <Section
        title="Pending actions"
        description="Tasks are filtered by the selected preview role."
      >
        <div className={styles.taskList}>
          {[
            "Complete equipment battery check",
            "Review 3 pending Doctor sign-offs",
            "Attach boat-fare evidence",
            "Submit daily camp summary",
          ].map((task, index) => (
            <label key={task}>
              <input type="checkbox" defaultChecked={index === 0} />
              <span>{task}</span>
            </label>
          ))}
        </div>
      </Section>
    </div>
  );
}

function CoverageView() {
  return (
    <>
      <Section
        title="Coverage hierarchy"
        description="Locations remain configurable so HSF can expand, close, or reassign service areas."
      >
        <div className={styles.hierarchy}>
          {[
            "District",
            "Upazila",
            "Union",
            "Village / Char / Community",
            "Camp point",
          ].map((level, index) => (
            <div key={level}>
              <span>{index + 1}</span>
              <strong>{level}</strong>
              {index < 4 ? <b>→</b> : null}
            </div>
          ))}
        </div>
      </Section>
      <Section
        title="District register"
        description="Illustrative operating details for management UI review."
      >
        <DataTable
          headers={[
            "District",
            "Primary area",
            "Access pattern",
            "Field team",
            "Status",
          ]}
          rows={DISTRICTS.map((district, index) => [
            district.name,
            district.area,
            district.route,
            `Team ${String(index + 1).padStart(2, "0")}`,
            <Status key={district.name}>{district.status}</Status>,
          ])}
        />
      </Section>
    </>
  );
}

function CampView({ calendar = false }: { calendar?: boolean }) {
  if (calendar) {
    const days = Array.from({ length: 28 }, (_, index) => index + 1);
    return (
      <Section
        title="July 2026 camp calendar"
        description="Synthetic schedule showing planned, travel-check, active, and completed states."
      >
        <div className={styles.calendarLegend}>
          <Status>Approved</Status>
          <Status tone="amber">Travel check</Status>
          <Status tone="blue">Scheduled</Status>
        </div>
        <div className={styles.calendarGrid}>
          {days.map((day) => (
            <article key={day} className={styles.calendarDay}>
              <strong>{day}</strong>
              {[3, 6, 9, 12, 16, 17, 21, 24].includes(day) ? (
                <span
                  className={day === 16 ? styles.eventAmber : styles.eventGreen}
                >
                  Camp · Team {(day % 5) + 1}
                </span>
              ) : null}
            </article>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section
        title="Camp planning workflow"
        description="Plan location, team, travel, equipment, target, risk, and approved resources before implementation."
      >
        <div className={styles.formGrid}>
          <Field label="District" value="Bogura" />
          <Field label="Upazila / Union" value="Select assigned location" />
          <Field label="Camp date" value="16 July 2026" />
          <Field label="Expected patients" value="60" />
          <Field label="Assigned Doctor" value="MBBS Doctor · Team 01" />
          <Field
            label="Assigned Supervisor"
            value="Medical Supervisor · Team 01"
          />
          <Field label="Travel method" value="Motorcycle" />
          <Field label="Boat required" value="No" />
        </div>
        <div className={styles.checkGrid}>
          {[
            "Doctor confirmed",
            "Supervisor confirmed",
            "Equipment checked",
            "Forms ready",
            "Travel budget approved",
            "Local contact informed",
          ].map((item, index) => (
            <label key={item}>
              <input type="checkbox" defaultChecked={index < 4} />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </Section>
      <Section
        title="Camp register"
        description="Planned and active camp records."
      >
        <DataTable
          headers={["Camp", "District", "Location", "Team", "Date", "Status"]}
          rows={SAMPLE_CAMPS.map((camp) => [
            camp.id,
            camp.district,
            camp.location,
            camp.team,
            camp.date,
            <Status key={camp.id}>{camp.status}</Status>,
          ])}
        />
      </Section>
    </>
  );
}

function PatientRegistrationView() {
  return (
    <Section
      title="Register patient and open visit"
      description="Search first to reduce duplicate patients, then create the visit used by both Supervisor and Doctor."
    >
      <div className={styles.stepper}>
        {["Search", "Identity", "Location", "Consent", "Visit"].map(
          (step, index) => (
            <div className={index <= 1 ? styles.stepActive : ""} key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ),
        )}
      </div>
      <div className={styles.searchPanel}>
        <label>
          Search existing patient
          <input
            type="search"
            placeholder="Patient ID, mobile number, or name"
          />
        </label>
        <button type="button">Search patient</button>
      </div>
      <div className={styles.formGrid}>
        <Field label="Patient name" value="Synthetic patient" input />
        <Field label="Age / date of birth" value="42 years" input />
        <Field label="Sex" value="Female" />
        <Field label="Mobile / contact" value="Optional" input />
        <Field label="District" value="Bogura" />
        <Field label="Upazila" value="Dhunat" />
        <Field label="Union" value="Assigned union" />
        <Field label="Village / Char" value="Community location" input />
      </div>
      <div className={styles.consentBox}>
        <label>
          <input type="checkbox" defaultChecked />
          <span>Patient or guardian consent acknowledgement recorded.</span>
        </label>
        <p>
          Only minimum necessary identity and health information should be
          collected.
        </p>
      </div>
      <div className={styles.buttonRow}>
        <button type="button" className={styles.primaryButton}>
          Save patient and open visit
        </button>
        <button type="button" className={styles.ghostButton}>
          Save draft
        </button>
      </div>
    </Section>
  );
}

function PatientQueueView() {
  const lanes = [
    { title: "Registered", count: 8, tone: "neutral" as const },
    { title: "Measurements complete", count: 6, tone: "blue" as const },
    { title: "In consultation", count: 2, tone: "amber" as const },
    { title: "Pending sign-off", count: 3, tone: "red" as const },
    { title: "Completed", count: 21, tone: "green" as const },
  ];
  return (
    <Section
      title="Patient service queue"
      description="Supervisor opens the visit; the Doctor completes the clinical section of the same record."
    >
      <div className={styles.queueGrid}>
        {lanes.map((lane, laneIndex) => (
          <article key={lane.title} className={styles.queueLane}>
            <header>
              <h3>{lane.title}</h3>
              <Status tone={lane.tone}>{lane.count}</Status>
            </header>
            {SAMPLE_PATIENTS.slice(laneIndex % 3, (laneIndex % 3) + 2).map(
              (patient) => (
                <div
                  className={styles.patientCard}
                  key={`${lane.title}-${patient.id}`}
                >
                  <strong>{patient.id}</strong>
                  <span>
                    {patient.visit} · {patient.age} · {patient.sex}
                  </span>
                  <p>{patient.complaint}</p>
                </div>
              ),
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

function PatientsView() {
  return (
    <Section
      title="Patient and visit register"
      description="Synthetic records only. Patient Master and Patient Visit remain separate."
    >
      <DataTable
        headers={[
          "Patient ID",
          "Visit",
          "Age",
          "Sex",
          "Main complaint",
          "Status",
        ]}
        rows={SAMPLE_PATIENTS.map((patient) => [
          patient.id,
          patient.visit,
          patient.age,
          patient.sex,
          patient.complaint,
          <Status
            key={patient.id}
            tone={patient.status.includes("sign-off") ? "amber" : "blue"}
          >
            {patient.status}
          </Status>,
        ])}
      />
    </Section>
  );
}

function ConsultationView() {
  return (
    <div className={styles.clinicalLayout}>
      <aside className={styles.clinicalPatientList}>
        <div className={styles.clinicalListHeading}>
          <span>Today’s queue</span>
          <strong>14 waiting</strong>
        </div>
        {SAMPLE_PATIENTS.map((patient, index) => (
          <button
            type="button"
            className={index === 1 ? styles.selectedPatient : ""}
            key={patient.id}
          >
            <strong>{patient.id}</strong>
            <span>
              {patient.age} · {patient.sex}
            </span>
            <small>{patient.complaint}</small>
          </button>
        ))}
      </aside>
      <div className={styles.clinicalWorkspace}>
        <div className={styles.patientSummary}>
          <div>
            <p>Patient visit</p>
            <h2>A2P-P-00242</h2>
            <span>Follow-up · 61 years · Male</span>
          </div>
          <Status tone="amber">Consultation in progress</Status>
        </div>
        <div className={styles.vitalStrip}>
          <div>
            <span>BP</span>
            <strong>150/92</strong>
          </div>
          <div>
            <span>Pulse</span>
            <strong>84</strong>
          </div>
          <div>
            <span>Temp</span>
            <strong>98.4°F</strong>
          </div>
          <div>
            <span>Weight</span>
            <strong>68 kg</strong>
          </div>
          <div>
            <span>SpO₂</span>
            <strong>97%</strong>
          </div>
        </div>
        <div className={styles.clinicalForm}>
          <label className={styles.fullWidth}>
            Chief complaint
            <textarea defaultValue="Blood pressure review and intermittent headache." />
          </label>
          <label>
            Relevant history
            <textarea defaultValue="Previous visit reviewed. No emergency warning sign recorded in this synthetic preview." />
          </label>
          <label>
            Clinical findings
            <textarea placeholder="Enter examination findings" />
          </label>
          <label>
            Provisional / final diagnosis
            <input defaultValue="Hypertension — review" />
          </label>
          <label>
            Test advice
            <input placeholder="Enter test advice where required" />
          </label>
          <label className={styles.fullWidth}>
            Prescription and instructions
            <textarea placeholder="Medicine, dosage, frequency, duration, and patient instructions" />
          </label>
          <label>
            Referral decision
            <select defaultValue="No referral">
              <option>No referral</option>
              <option>Routine referral</option>
              <option>Urgent referral</option>
            </select>
          </label>
          <label>
            Follow-up period
            <select defaultValue="2 weeks">
              <option>2 weeks</option>
              <option>1 month</option>
              <option>As required</option>
            </select>
          </label>
        </div>
        <div className={styles.clinicalFooter}>
          <label>
            <input type="checkbox" />
            <span>Mark as high-risk case</span>
          </label>
          <div className={styles.buttonRow}>
            <button type="button" className={styles.ghostButton}>
              Save clinical draft
            </button>
            <button type="button" className={styles.primaryButton}>
              Complete and sign off
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function EquipmentView() {
  return (
    <>
      <div className={styles.metricGrid}>
        <Metric
          label="Assigned equipment"
          value="42 items"
          note="Synthetic cross-team inventory count"
        />
        <Metric
          label="Available"
          value="35"
          note="Ready for camp use"
          accent="blue"
        />
        <Metric
          label="Service due"
          value="4"
          note="Maintenance or calibration action"
          accent="amber"
        />
        <Metric
          label="Replacement need"
          value="3"
          note="Requires review and approved requisition"
          accent="red"
        />
      </div>
      <Section
        title="Equipment condition and custody"
        description="HSF-purchased or locally purchased equipment remains linked to team, custodian, condition, and service history."
      >
        <DataTable
          headers={["Equipment", "Assigned team", "Condition", "Next action"]}
          rows={SAMPLE_EQUIPMENT.map((item) => [
            item.item,
            item.team,
            <Status
              key={item.item}
              tone={item.condition === "Available" ? "green" : "amber"}
            >
              {item.condition}
            </Status>,
            item.next,
          ])}
        />
      </Section>
    </>
  );
}

function FinanceView() {
  return (
    <>
      <div className={styles.traceFlow}>
        {[
          "Supervisor field requisition",
          "Coordinator review",
          "Consolidated A2PHC need",
          "MFR",
          "Finance check",
          "Approval",
          "Disbursement",
          "Bill and adjustment",
        ].map((step, index) => (
          <div key={step}>
            <span>{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
      <Section
        title="Camp-linked field expense register"
        description="Fuel, local transport, boat fare, communication, printing, equipment, and approved logistics."
      >
        <DataTable
          headers={["Expense", "Camp", "Amount", "Evidence", "Status"]}
          rows={SAMPLE_EXPENSES.map((expense) => [
            expense.type,
            expense.camp,
            expense.amount,
            expense.evidence,
            <Status
              key={`${expense.type}-${expense.camp}`}
              tone={
                expense.status === "Returned"
                  ? "red"
                  : expense.status === "Draft"
                    ? "amber"
                    : "green"
              }
            >
              {expense.status}
            </Status>,
          ])}
        />
      </Section>
      <Section
        title="New field expense preview"
        description="Every expense remains connected to camp, location, approved head, evidence, and adjustment status."
      >
        <div className={styles.formGrid}>
          <Field label="Camp" value="A2P-CAMP-071" />
          <Field label="Expense head" value="Motorcycle fuel" />
          <Field label="Amount" value="BDT 1,200" input />
          <Field label="Payment method" value="Cash" />
          <Field label="Related requisition / MFR" value="A2P-MFR-2026-07" />
          <Field label="Evidence" value="Upload receipt or explanation" input />
        </div>
      </Section>
    </>
  );
}

function ReportView({ screen }: { screen: A2PHCScreen }) {
  const rows = [
    ["Camps planned", "42", "40", "95%", "2 rescheduled for river access"],
    ["Consultations", "2,500", "2,340", "94%", "Synthetic illustration"],
    ["Unions reached", "50", "46", "92%", "4 pending this period"],
    ["Doctor sign-off", "100%", "92%", "92%", "18 visits pending"],
    ["Daily reports verified", "40", "37", "93%", "3 under review"],
  ];
  return (
    <>
      <div className={styles.metricGrid}>
        <Metric
          label="Reporting period"
          value="July 2026"
          note="Synthetic management preview"
        />
        <Metric
          label="Data completeness"
          value="94%"
          note="Required fields complete"
          accent="blue"
        />
        <Metric
          label="Pending sign-off"
          value="18"
          note="Clinical records awaiting Doctor action"
          accent="amber"
        />
        <Metric
          label="District coverage"
          value="5 / 5"
          note="All current districts represented"
          accent="green"
        />
      </div>
      <Section
        title={screen.title}
        description={screen.description}
        action={
          <button type="button" className={styles.smallButton}>
            Export preview
          </button>
        }
      >
        <DataTable
          headers={["Indicator", "Target", "Actual", "Achievement", "Comment"]}
          rows={rows}
        />
      </Section>
      <Section
        title="Data quality checks"
        description="Reports should use reviewed and verified data only."
      >
        <div className={styles.qualityGrid}>
          {[
            "Duplicate patient review",
            "Missing union information",
            "Unsigned consultations",
            "Late daily summaries",
            "Referral follow-up pending",
            "Expense evidence missing",
          ].map((item, index) => (
            <article key={item}>
              <span>{index % 3 === 0 ? "Needs review" : "Checked"}</span>
              <strong>{item}</strong>
              <p>
                {index % 3 === 0
                  ? `${index + 2} synthetic records flagged`
                  : "No blocking issue in preview"}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function SettingsView({ screen }: { screen: A2PHCScreen }) {
  const isMedicine = screen.medicineFuture;
  return (
    <Section title={screen.title} description={screen.description}>
      {isMedicine ? (
        <article className={styles.futureFeature}>
          <span>Future capability · disabled</span>
          <h3>
            Medicine dispensing is not active in the current A2PHC operating
            model.
          </h3>
          <p>
            Activate only after budget approval, procurement and vendor
            controls, batch and expiry tracking, storage responsibility,
            issue-against-prescription rules, stock reconciliation, and audit
            approval.
          </p>
          <div className={styles.toggleRow}>
            <span>Medicine inventory and issue</span>
            <button type="button" aria-pressed="false">
              Off
            </button>
          </div>
        </article>
      ) : (
        <div className={styles.settingsList}>
          {[
            "Programme identity and labels",
            "District and location hierarchy",
            "Camp workflow states",
            "Patient ID pattern",
            "Consent and privacy labels",
            "Doctor sign-off policy placeholder",
            "Report naming and periods",
            "Future feature controls",
          ].map((item, index) => (
            <div key={item}>
              <span>{item}</span>
              <button type="button">
                {index < 2 ? "Configure" : "Review"}
              </button>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

function GenericView({ screen }: { screen: A2PHCScreen }) {
  if (screen.kind === "report") return <ReportView screen={screen} />;
  if (screen.kind === "settings") return <SettingsView screen={screen} />;

  const statusTone = screen.kind === "workflow" ? "amber" : "green";
  return (
    <>
      <div className={styles.metricGrid}>
        <Metric
          label="Active records"
          value="24"
          note="Synthetic module preview"
        />
        <Metric
          label="Pending review"
          value="6"
          note="Waiting for responsible role"
          accent="amber"
        />
        <Metric
          label="Completed"
          value="18"
          note="Illustrative status only"
          accent="blue"
        />
        <Metric
          label="Data quality"
          value="96%"
          note="Illustrative completion indicator"
          accent="green"
        />
      </div>
      <Section
        title={screen.title}
        description={screen.description}
        action={
          <button type="button" className={styles.smallButton}>
            Create new
          </button>
        }
      >
        <DataTable
          headers={[
            "Reference",
            "District / Camp",
            "Responsible",
            "Updated",
            "Status",
          ]}
          rows={Array.from({ length: 6 }, (_, index) => [
            `A2P-${screen.id.toUpperCase().slice(0, 5)}-${String(index + 1).padStart(3, "0")}`,
            DISTRICTS[index % DISTRICTS.length]!.name,
            index % 2 === 0 ? "Medical Supervisor" : "A2PHC Coordinator",
            `${15 - index} Jul 2026`,
            <Status key={index} tone={index === 1 ? "red" : statusTone}>
              {index === 1 ? "Returned" : index < 3 ? "Under review" : "Active"}
            </Status>,
          ])}
        />
      </Section>
    </>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Field({
  label,
  value,
  input = false,
}: {
  label: string;
  value: string;
  input?: boolean;
}) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      {input ? (
        <input defaultValue={value} />
      ) : (
        <select defaultValue={value}>
          <option>{value}</option>
        </select>
      )}
    </label>
  );
}

function renderScreen(screen: A2PHCScreen) {
  switch (screen.id) {
    case "dashboard":
      return <DashboardView />;
    case "today":
      return <TodayView />;
    case "coverage":
    case "camp-locations":
      return <CoverageView />;
    case "camp-calendar":
    case "team-availability":
      return <CampView calendar />;
    case "camp-plans":
    case "health-camps":
    case "travel-plans":
    case "camp-readiness":
      return <CampView />;
    case "patient-registration":
      return <PatientRegistrationView />;
    case "patient-queue":
      return <PatientQueueView />;
    case "patients":
    case "patient-visits":
    case "patient-history":
      return <PatientsView />;
    case "consultations":
    case "diagnoses":
    case "prescriptions":
    case "prescription-items":
    case "tests-and-advice":
    case "referrals":
    case "follow-ups":
    case "high-risk-cases":
    case "clinical-sign-off-queue":
      return <ConsultationView />;
    case "medical-equipment":
    case "equipment-assignments":
    case "equipment-checklists":
    case "maintenance-and-calibration":
    case "medical-consumables":
      return <EquipmentView />;
    case "travel-and-field-expenses":
    case "fuel-and-transport":
    case "boat-fares":
    case "camp-requisitions":
    case "requisition-mfr-traceability":
    case "bills-and-evidence":
    case "advance-adjustments":
      return <FinanceView />;
    default:
      return <GenericView screen={screen} />;
  }
}

export function A2PHCModule({
  screen,
  action,
}: {
  screen: A2PHCScreen;
  action?: string;
}) {
  const [roleId, setRoleId] = useState<PortalRoleId>(DEFAULT_PORTAL_ROLE);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setRoleId(getInitialRole());
    const handler = (event: Event) => {
      const custom = event as CustomEvent<{ roleId?: PortalRoleId }>;
      if (custom.detail?.roleId) setRoleId(custom.detail.roleId);
    };
    window.addEventListener(ROLE_EVENT, handler);
    return () => window.removeEventListener(ROLE_EVENT, handler);
  }, []);

  const profile = useMemo(() => getPortalRoleProfile(roleId), [roleId]);
  const allowedScreens = useMemo(
    () => getA2PHCScreensForRole(roleId),
    [roleId],
  );
  const groupedScreens = useMemo(
    () =>
      A2PHC_GROUPS.map((group) => ({
        group,
        screens: allowedScreens.filter((item) => item.group === group),
      })).filter((item) => item.screens.length > 0),
    [allowedScreens],
  );

  return (
    <div className={styles.moduleShell}>
      <header className={styles.topbar}>
        <Link href="/dashboard" className={styles.brandBlock}>
          <span className={styles.brandMark}>HSF</span>
          <span>
            <strong>HSF ERP</strong>
            <small>A2PHC Field Operations</small>
          </span>
        </Link>
        <div className={styles.topbarMeta}>
          <span className={styles.synthetic}>Synthetic UI preview</span>
          <span className={styles.roleBadge}>{profile.shortLabel}</span>
          <button
            type="button"
            className={styles.mobileMenuButton}
            onClick={() => setMobileNavOpen((value: boolean) => !value)}
            aria-expanded={mobileNavOpen}
          >
            Menu
          </button>
        </div>
      </header>

      <div className={styles.portalGrid}>
        <aside
          className={`${styles.sidebar} ${mobileNavOpen ? styles.sidebarOpen : ""}`}
        >
          <div className={styles.sidebarIntro}>
            <span>A2PHC</span>
            <h2>Free Medical Camp and Patient Service Management</h2>
            <p>Mobile-first health operations inside the shared HSF ERP.</p>
          </div>
          <nav aria-label="A2PHC module navigation">
            {groupedScreens.map(({ group, screens }) => (
              <div className={styles.navGroup} key={group}>
                <p>{group}</p>
                {screens.map((item) => (
                  <Link
                    href={`/a2phc/${item.id}`}
                    key={item.id}
                    className={item.id === screen.id ? styles.activeNav : ""}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    <span>{item.shortTitle ?? item.title}</span>
                    {item.medicineFuture ? <small>Future</small> : null}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
          <div className={styles.sidebarFooter}>
            <strong>Current service rule</strong>
            <p>
              Free MBBS consultation and prescription. Regular medicine
              dispensing is not funded.
            </p>
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.pageHeader}>
            <div>
              <div className={styles.breadcrumb}>
                <Link href="/dashboard">HSF ERP</Link>
                <span>/</span>
                <Link href="/a2phc/dashboard">A2PHC</Link>
                <span>/</span>
                <b>{screen.title}</b>
              </div>
              <p className={styles.eyebrow}>
                {screen.group} · {screen.kind}
              </p>
              <h1>{screen.title}</h1>
              <p className={styles.pageDescription}>{screen.description}</p>
            </div>
            <div className={styles.headerActions}>
              {action ? <Status tone="blue">Preview: {action}</Status> : null}
              <Link
                href={`/a2phc/${screen.id}/new`}
                className={styles.primaryButton}
              >
                New record
              </Link>
              <button type="button" className={styles.ghostButton}>
                Export
              </button>
            </div>
          </div>

          <div className={styles.contextStrip}>
            <span>
              <b>Coverage:</b> Bogura, Manikganj, Narail, Habiganj, Mymensingh
            </span>
            <span>
              <b>Team:</b> 1 MBBS Doctor + 1 Medical Supervisor
            </span>
            <span>
              <b>Mode:</b> UI only — no real patient data
            </span>
          </div>

          <div className={styles.content}>{renderScreen(screen)}</div>
        </main>
      </div>
    </div>
  );
}
