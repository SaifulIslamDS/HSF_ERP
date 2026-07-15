import Link from "next/link";
import type { CSSProperties } from "react";
import type { PortalRoute, PortalRouteResolution } from "@/lib/portal-catalog";
import { portalGroups, portalRouteCount } from "@/lib/portal-catalog";

const lifecycle = ["Draft", "Submitted", "Under review", "Returned", "Approved", "Completed", "Verified", "Closed"];

const projectCards = [
  ["E4BL", "Education for Better Life", "300 students · 2 centres", "74%"],
  ["A2PHC", "Access to Primary Health Care", "5 doctors · 5 supervisors", "81%"],
  ["CAI", "Climate Action Initiative", "Community resilience and action", "68%"],
  ["WEI", "Women Empowerment Initiative", "Dignity, skills and opportunity", "72%"],
];

const operatingCycle = ["Plan", "Budget", "Request", "Approve", "Deliver", "Verify", "Account", "Report"];

function seedFor(value: string) {
  return value.split("").reduce((total, character) => total + character.charCodeAt(0), 0);
}

function metricSet(route: PortalRoute) {
  const seed = seedFor(route.title);
  const common = [
    ["Total records", String(28 + (seed % 117)), "Available in this UI preview", "+8.4%"],
    ["Awaiting review", String(3 + (seed % 11)), "Requires the next workflow action", "Priority"],
    ["Completed", `${64 + (seed % 27)}%`, "Current period completion", "+5.2%"],
    ["Evidence ready", `${72 + (seed % 23)}%`, "Records with linked documents", "Verified"],
  ];

  const sets: Record<string, string[][]> = {
    executive: [
      ["Core projects", "4", "Organization-wide programme portfolio", "Active"],
      ["Planned UI screens", String(portalRouteCount), "All planned modules represented", "Complete"],
      ["Students", "300", "Across Hazaribagh and Uttara", "E4BL"],
      ["Health field team", "10", "Five physicians and five supervisors", "A2PHC"],
    ],
    finance: [
      ["Approved annual budget", "৳ 24.8M", "Synthetic management preview", "FY 2026"],
      ["Committed", "৳ 8.4M", "Approved but not fully expensed", "34%"],
      ["Actual expenditure", "৳ 6.9M", "Synthetic posted expenditure", "28%"],
      ["Pending controls", "12", "MFR, IOU and reconciliation items", "Review"],
    ],
    e4bl: [
      ["Active students", "300", "Across two education centres", "100%"],
      ["Average attendance", "88%", "Current-month synthetic figure", "+3.1%"],
      ["At-risk follow-up", "18", "Students requiring attention", "Action"],
      ["Teacher reports", "9 / 10", "Month-end submission status", "90%"],
    ],
    a2phc: [
      ["Camps this month", "8", "Planned and completed camp activity", "6 complete"],
      ["Patient visits", "642", "Synthetic current-month visits", "+12%"],
      ["Doctor sign-off", "94%", "Completed clinical sections", "On track"],
      ["Follow-up due", "27", "Referral and follow-up queue", "Action"],
    ],
    hr: [
      ["Active employees", "32", "Synthetic organization workforce", "Stable"],
      ["Open vacancies", "4", "Approved recruitment positions", "Hiring"],
      ["Attendance", "93%", "Current-month staff attendance", "+1.8%"],
      ["Reports submitted", "27 / 32", "Monthly achievement status", "84%"],
    ],
    payroll: [
      ["Payroll employees", "32", "Synthetic payroll population", "Ready"],
      ["Gross payroll", "৳ 1.26M", "Current synthetic period", "Draft"],
      ["Pending review", "3", "Lines needing HR or Finance review", "Action"],
      ["Bank instructions", "0", "Generated after final approval", "Pending"],
    ],
    inventory: [
      ["Active items", "186", "Medicine, materials and assets", "Catalogued"],
      ["Low-stock alerts", "14", "Below planned reorder level", "Action"],
      ["Expiry alerts", "7", "Within the next 90 days", "Review"],
      ["Asset assignments", "54", "Assigned equipment and devices", "Tracked"],
    ],
    donors: [
      ["Active funding partners", "9", "Donors, sponsors and CSR partners", "Active"],
      ["Restricted funds", "6", "Funds with approved conditions", "Controlled"],
      ["Reports due", "3", "Within the next 45 days", "Upcoming"],
      ["Utilization", "71%", "Synthetic year-to-date utilization", "On track"],
    ],
    planning: [
      ["Annual activities", "86", "Across all projects and central office", "Approved"],
      ["Monthly targets", "42", "Current reporting period", "Active"],
      ["Staff plans", "29 / 32", "Submitted or approved", "91%"],
      ["Corrective actions", "7", "Open follow-up actions", "Review"],
    ],
  };

  return sets[route.group.id] ?? common;
}

function tablePreset(route: PortalRoute) {
  const presets: Record<string, { columns: string[]; rows: string[][] }> = {
    finance: {
      columns: ["Reference", "Project / Fund", "Period", "Amount", "Owner", "Status"],
      rows: [
        ["FIN-DEMO-0261", "E4BL · General Fund", "Jul 2026", "৳ 286,500", "Finance Office", "Under review"],
        ["FIN-DEMO-0260", "A2PHC · Health Fund", "Jul 2026", "৳ 418,200", "Project Coordinator", "Recommended"],
        ["FIN-DEMO-0259", "Central Office", "Jun 2026", "৳ 164,800", "Finance Director", "Approved"],
        ["FIN-DEMO-0258", "Climate Action", "Jun 2026", "৳ 92,400", "Programme Team", "Completed"],
        ["FIN-DEMO-0257", "Women Empowerment", "Jun 2026", "৳ 138,000", "Programme Team", "Verified"],
      ],
    },
    requisitions: {
      columns: ["Request", "Project", "Location", "Required date", "Estimated total", "Status"],
      rows: [
        ["FR-DEMO-0148", "E4BL", "Hazaribagh Centre", "28 Jul 2026", "৳ 48,600", "Submitted"],
        ["FR-DEMO-0147", "A2PHC", "Camp Area 03", "30 Jul 2026", "৳ 76,250", "Under review"],
        ["FR-DEMO-0146", "E4BL", "Uttara Centre", "01 Aug 2026", "৳ 35,900", "Returned"],
        ["FR-DEMO-0145", "Climate Action", "Field Location 02", "04 Aug 2026", "৳ 84,100", "Accepted"],
      ],
    },
    procurement: {
      columns: ["Reference", "Requirement", "Vendor / Stage", "Required date", "Value", "Status"],
      rows: [
        ["PR-DEMO-0089", "Learning materials", "Quotation review", "29 Jul 2026", "৳ 126,400", "Under review"],
        ["PR-DEMO-0088", "Medical consumables", "Demo Supplier A", "31 Jul 2026", "৳ 218,900", "Recommended"],
        ["PO-DEMO-0042", "Office equipment", "Demo Supplier B", "03 Aug 2026", "৳ 94,500", "Issued"],
        ["GRN-DEMO-0027", "Student materials", "Received at centre", "21 Jul 2026", "৳ 72,200", "Completed"],
      ],
    },
    hr: {
      columns: ["Employee", "Designation", "Project", "Duty station", "Reporting manager", "Status"],
      rows: [
        ["Demo Employee 01", "Project Coordinator", "E4BL", "Head Office", "CEO", "Active"],
        ["Demo Employee 02", "Head Teacher", "E4BL", "Hazaribagh", "Project Coordinator", "Active"],
        ["Demo Employee 03", "Medical Supervisor", "A2PHC", "Field Area 01", "Project Coordinator", "Active"],
        ["Demo Employee 04", "Finance Officer", "Central Office", "Head Office", "Finance Director", "On leave"],
      ],
    },
    payroll: {
      columns: ["Employee", "Period", "Gross", "Deductions", "Net", "Status"],
      rows: [
        ["Demo Employee 01", "Jul 2026", "৳ 58,000", "৳ 2,400", "৳ 55,600", "Reviewed"],
        ["Demo Employee 02", "Jul 2026", "৳ 34,500", "৳ 1,000", "৳ 33,500", "Draft"],
        ["Demo Employee 03", "Jul 2026", "৳ 38,000", "৳ 1,300", "৳ 36,700", "Approved"],
        ["Demo Employee 04", "Jul 2026", "৳ 42,000", "৳ 1,750", "৳ 40,250", "Exception"],
      ],
    },
    e4bl: {
      columns: ["Student / Record", "Centre", "Class", "Attendance", "Support", "Status"],
      rows: [
        ["Demo Student 001", "Hazaribagh", "Grade Five", "92%", "Graduate readiness", "Active"],
        ["Demo Student 002", "Uttara", "Grade Three", "86%", "Learning follow-up", "Active"],
        ["Demo Student 003", "Hazaribagh", "Grade Two", "71%", "Home visit planned", "At risk"],
        ["Demo Student 004", "Uttara", "Pre-primary", "95%", "Materials issued", "Active"],
      ],
    },
    a2phc: {
      columns: ["Visit", "Camp", "Patient type", "Doctor", "Follow-up", "Status"],
      rows: [
        ["VIS-DEMO-0642", "Camp 08 · Area 03", "Follow-up", "Demo Doctor 02", "14 days", "Signed"],
        ["VIS-DEMO-0641", "Camp 08 · Area 03", "New", "Demo Doctor 01", "7 days", "Pending sign-off"],
        ["VIS-DEMO-0640", "Camp 07 · Area 02", "New", "Demo Doctor 04", "Referral", "Referred"],
        ["VIS-DEMO-0639", "Camp 07 · Area 02", "Follow-up", "Demo Doctor 03", "Completed", "Closed"],
      ],
    },
    climate: {
      columns: ["Activity", "Location", "Target group", "Target", "Achievement", "Status"],
      rows: [
        ["Community awareness session", "Climate Area 01", "Households", "80", "76", "Verified"],
        ["Farmer adaptation training", "Climate Area 02", "Farmers", "35", "31", "Completed"],
        ["Seed distribution", "Climate Area 03", "Households", "120", "94", "In progress"],
        ["Tree restoration activity", "Climate Area 01", "Youth group", "500", "420", "In progress"],
      ],
    },
    women: {
      columns: ["Activity", "Location", "Participant group", "Target", "Achievement", "Status"],
      rows: [
        ["Menstrual health session", "Community Area 01", "Adolescent girls", "60", "58", "Verified"],
        ["Skills training", "Community Area 02", "Women participants", "30", "27", "Completed"],
        ["Financial literacy", "Community Area 03", "Entrepreneurs", "25", "19", "In progress"],
        ["Livelihood support", "Community Area 01", "Selected households", "12", "8", "Approved"],
      ],
    },
    inventory: {
      columns: ["Item", "Category", "Location", "Balance", "Reorder", "Status"],
      rows: [
        ["Demo Medicine A", "Medicine", "Central Store", "260 boxes", "120", "Available"],
        ["Student Notebook", "School materials", "Hazaribagh", "84 packs", "100", "Low stock"],
        ["BP Machine", "Medical equipment", "A2PHC Store", "7 units", "3", "Available"],
        ["Laptop Device", "Fixed asset", "Head Office", "11 units", "2", "Assigned"],
      ],
    },
    donors: {
      columns: ["Partner / Fund", "Type", "Project", "Agreement period", "Utilization", "Status"],
      rows: [
        ["Demo Development Partner", "Grant", "E4BL", "Jan–Dec 2026", "68%", "Active"],
        ["Demo CSR Partner", "CSR", "A2PHC", "Apr–Sep 2026", "74%", "Active"],
        ["Community Sponsorship Fund", "Sponsorship", "E4BL", "2026", "81%", "Reporting due"],
        ["General Donation Fund", "Unrestricted", "Organization", "Ongoing", "56%", "Active"],
      ],
    },
    meetings: {
      columns: ["Meeting / Notice", "Type", "Date", "Owner", "Action / Audience", "Status"],
      rows: [
        ["Monthly management review", "Management", "28 Jul 2026", "CEO Office", "8 action items", "Scheduled"],
        ["E4BL coordination meeting", "Project", "30 Jul 2026", "Project Coordinator", "12 participants", "Agenda ready"],
        ["Financial closing notice", "Official notice", "22 Jul 2026", "Finance Director", "All coordinators", "Acknowledged"],
        ["Procurement committee", "Committee", "24 Jul 2026", "Administration", "3 decisions", "Minutes draft"],
      ],
    },
    training: {
      columns: ["Training", "Audience", "Date", "Trainer", "Participants", "Status"],
      rows: [
        ["Safeguarding orientation", "All field staff", "05 Aug 2026", "Demo Trainer 01", "24", "Scheduled"],
        ["Teacher reporting workflow", "E4BL teachers", "08 Aug 2026", "Project Coordinator", "10", "Nominations open"],
        ["Clinical data quality", "A2PHC team", "12 Aug 2026", "Demo Trainer 02", "10", "Draft"],
        ["Finance and voucher controls", "Coordinators", "18 Aug 2026", "Finance Director", "6", "Approved"],
      ],
    },
    documents: {
      columns: ["Document", "Category", "Related area", "Version", "Owner", "Status"],
      rows: [
        ["Finance Policy — Demo", "Policy", "Finance", "v2.0", "Finance Director", "Approved"],
        ["E4BL Monthly Evidence Pack", "Evidence", "E4BL", "Jul 2026", "Project Coordinator", "Under review"],
        ["A2PHC Camp Report Pack", "Programme report", "A2PHC", "Camp 08", "Medical Supervisor", "Submitted"],
        ["Meeting Resolution 2026-07", "Resolution", "Management", "Final", "CEO Office", "Published"],
      ],
    },
    administration: {
      columns: ["Configuration / User", "Scope", "Assigned role", "Last review", "Owner", "Status"],
      rows: [
        ["Demo User 01", "E4BL · Hazaribagh", "Head Teacher", "18 Jul 2026", "System Admin", "Active"],
        ["Demo User 02", "A2PHC · Area 03", "Medical Supervisor", "18 Jul 2026", "System Admin", "Active"],
        ["MFR approval matrix", "Organization", "Configured rule", "12 Jul 2026", "Finance Director", "Draft"],
        ["Document numbering", "Finance & procurement", "System setting", "10 Jul 2026", "System Admin", "Ready"],
      ],
    },
  };

  return (
    presets[route.group.id] ?? {
      columns: ["Reference", "Project / Area", "Owner", "Date", "Progress", "Status"],
      rows: [
        ["HSF-DEMO-0104", route.group.shortTitle, "Demo User 01", "22 Jul 2026", "86%", "Under review"],
        ["HSF-DEMO-0103", "E4BL", "Demo User 02", "21 Jul 2026", "100%", "Verified"],
        ["HSF-DEMO-0102", "A2PHC", "Demo User 03", "20 Jul 2026", "64%", "In progress"],
        ["HSF-DEMO-0101", "Central Office", "Demo User 04", "19 Jul 2026", "100%", "Approved"],
      ],
    }
  );
}

function statusTone(status: string) {
  const value = status.toLowerCase();
  if (value.includes("approved") || value.includes("verified") || value.includes("active") || value.includes("signed") || value.includes("complete")) return "success";
  if (value.includes("return") || value.includes("exception") || value.includes("risk") || value.includes("low") || value.includes("overdue")) return "danger";
  if (value.includes("review") || value.includes("pending") || value.includes("draft") || value.includes("scheduled") || value.includes("due")) return "warning";
  return "neutral";
}

function PageHeader({ resolution }: { resolution: PortalRouteResolution }) {
  const { route, action, recordId } = resolution;
  const actionTitle = action === "new" ? `New ${route.title}` : action === "edit" ? `Edit ${route.title}` : action === "detail" ? `${route.title} Details` : route.title;

  return (
    <>
      <div className="erp-breadcrumb">
        <Link href="/dashboard">HSF ERP</Link>
        <span>/</span>
        <Link href={`/${route.group.slug}/${route.group.pages[0]?.slug ?? "dashboard"}`}>{route.group.title}</Link>
        <span>/</span>
        <strong>{actionTitle}</strong>
      </div>

      <section className="erp-page-heading">
        <div>
          <div className="erp-heading-labels">
            <span>{route.group.code}</span>
            <b>{action === "index" ? "Complete UI preview" : action === "new" ? "Draft entry preview" : "Record preview"}</b>
          </div>
          <h2>{actionTitle}</h2>
          <p>{route.summary}</p>
          {recordId ? <small>Preview reference: {recordId}</small> : null}
        </div>
        <div className="erp-heading-actions">
          {action === "index" ? (
            <>
              <button className="erp-button secondary" type="button">
                Export preview
              </button>
              {route.kind !== "dashboard" && route.kind !== "report" ? (
                <Link className="erp-button primary" href={`/${route.path}/new`}>
                  <span>＋</span> New record
                </Link>
              ) : null}
            </>
          ) : (
            <>
              <Link className="erp-button secondary" href={`/${route.path}`}>
                Cancel
              </Link>
              <button className="erp-button primary" type="button">
                Save as draft
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}

function MetricCards({ route }: { route: PortalRoute }) {
  return (
    <section className="erp-metric-grid">
      {metricSet(route).map(([label, value, detail, tag], index) => (
        <article className={`erp-metric-card tone-${(index % 4) + 1}`} key={label}>
          <div>
            <span>{label}</span>
            <b>{tag}</b>
          </div>
          <strong>{value}</strong>
          <p>{detail}</p>
          <i style={{ width: `${52 + index * 11}%` }} />
        </article>
      ))}
    </section>
  );
}

function ManagementChart({ title = "Plan versus progress" }: { title?: string }) {
  const bars = [
    ["E4BL", 82, 74],
    ["A2PHC", 88, 81],
    ["Climate", 76, 68],
    ["Women", 80, 72],
    ["Central", 91, 84],
  ];

  return (
    <article className="erp-panel erp-chart-panel">
      <div className="erp-panel-head">
        <div>
          <span>Management insight</span>
          <h3>{title}</h3>
        </div>
        <select defaultValue="Jul 2026" aria-label="Reporting period">
          <option>Jul 2026</option>
          <option>Jun 2026</option>
          <option>Q2 2026</option>
        </select>
      </div>
      <div className="erp-chart-legend">
        <span><i className="target" /> Target</span>
        <span><i className="actual" /> Achievement</span>
      </div>
      <div className="erp-bar-chart">
        {bars.map(([label, target, actual]) => (
          <div className="erp-bar-group" key={label}>
            <div className="erp-bar-stack">
              <i className="target" style={{ height: `${target}%` }} />
              <i className="actual" style={{ height: `${actual}%` }} />
            </div>
            <strong>{label}</strong>
          </div>
        ))}
      </div>
      <div className="erp-chart-foot">
        <p>Achievement is shown by indicator and compatible unit. Mixed units are never added into one total.</p>
        <strong>78% overall verified progress</strong>
      </div>
    </article>
  );
}

function ApprovalQueue() {
  const items = [
    ["MFR-DEMO-0261", "E4BL July fund request", "Finance review", "Today"],
    ["FR-DEMO-0147", "A2PHC camp requisition", "Coordinator review", "Today"],
    ["ACH-DEMO-0098", "Teacher monthly achievement", "Head Teacher review", "Tomorrow"],
    ["IOU-DEMO-0037", "Field advance adjustment", "Evidence check", "2 days"],
  ];

  return (
    <article className="erp-panel">
      <div className="erp-panel-head">
        <div>
          <span>Decision workspace</span>
          <h3>Priority approval queue</h3>
        </div>
        <Link href="/reports/pending-approvals">View all</Link>
      </div>
      <div className="erp-queue-list">
        {items.map(([ref, title, stage, due], index) => (
          <Link href={`/requisitions/field-requisitions/${ref}`} key={ref}>
            <span className={`erp-queue-icon q-${index + 1}`}>{index + 1}</span>
            <span>
              <strong>{title}</strong>
              <small>{ref} · {stage}</small>
            </span>
            <b>{due}</b>
            <i>›</i>
          </Link>
        ))}
      </div>
    </article>
  );
}

function ExecutiveDashboard({ route }: { route: PortalRoute }) {
  return (
    <>
      <section className="erp-hero-card">
        <div>
          <span className="erp-hero-tag">Management presentation workspace</span>
          <h3>One organization. One connected source of truth.</h3>
          <p>
            Review the complete planned HSF ERP experience across planning, projects, finance, HR, education, health, procurement, meetings, training, evidence and reporting.
          </p>
          <div className="erp-hero-actions">
            <Link className="erp-button light" href="/administration/module-catalogue">Explore all modules</Link>
            <Link className="erp-button ghost" href="/reports/executive-dashboard">Open executive reports</Link>
          </div>
        </div>
        <div className="erp-cycle-visual">
          {operatingCycle.map((step, index) => (
            <span key={step} style={{ "--step": index } as CSSProperties}>
              <b>{index + 1}</b>{step}
            </span>
          ))}
          <strong>HSF</strong>
        </div>
      </section>

      <MetricCards route={route} />

      <section className="erp-two-column wide-left">
        <ManagementChart title="Organization-wide performance preview" />
        <ApprovalQueue />
      </section>

      <section className="erp-panel">
        <div className="erp-panel-head">
          <div>
            <span>Programme portfolio</span>
            <h3>Four core areas of impact</h3>
          </div>
          <Link href="/projects/portfolio">Project portfolio</Link>
        </div>
        <div className="erp-project-grid">
          {projectCards.map(([code, title, detail, progress], index) => (
            <Link href={`/projects/${["e4bl", "a2phc", "climate-action", "women-empowerment"][index]}`} key={code}>
              <span>{code}</span>
              <div>
                <strong>{title}</strong>
                <p>{detail}</p>
                <i><b style={{ width: progress }} /></i>
              </div>
              <em>{progress}</em>
            </Link>
          ))}
        </div>
      </section>

      <section className="erp-two-column">
        <article className="erp-panel">
          <div className="erp-panel-head">
            <div>
              <span>Institutional control</span>
              <h3>End-to-end operating lifecycle</h3>
            </div>
          </div>
          <div className="erp-lifecycle-grid">
            {operatingCycle.map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < operatingCycle.length - 1 ? <i>→</i> : null}
              </div>
            ))}
          </div>
        </article>
        <article className="erp-panel">
          <div className="erp-panel-head">
            <div>
              <span>System scope</span>
              <h3>Complete UI route coverage</h3>
            </div>
          </div>
          <div className="erp-scope-list">
            {portalGroups.slice(0, 7).map((group) => (
              <Link href={`/${group.slug}/${group.pages[0]?.slug}`} key={group.id}>
                <span>{group.code}</span>
                <strong>{group.title}</strong>
                <b>{group.pages.length}</b>
              </Link>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

function ModuleDashboard({ route }: { route: PortalRoute }) {
  const preset = tablePreset(route);
  return (
    <>
      <MetricCards route={route} />
      <section className="erp-two-column wide-left">
        <ManagementChart title={`${route.group.shortTitle} performance preview`} />
        <article className="erp-panel">
          <div className="erp-panel-head">
            <div>
              <span>Current attention</span>
              <h3>Management priorities</h3>
            </div>
          </div>
          <div className="erp-priority-list">
            {([
              ["Complete outstanding reviews", "4 records", "High"],
              ["Verify attached evidence", "7 records", "Medium"],
              ["Confirm next-period plan", "Due in 5 days", "Medium"],
              ["Review data-quality exceptions", "3 findings", "Low"],
            ] as const).map(([title, detail, priority]) => (
              <div key={title}>
                <i className={priority.toLowerCase()} />
                <span><strong>{title}</strong><small>{detail}</small></span>
                <b>{priority}</b>
              </div>
            ))}
          </div>
        </article>
      </section>
      <DataTable route={route} columns={preset.columns} rows={preset.rows} compactTitle="Recent module activity" />
    </>
  );
}

function DataTable({
  route,
  columns,
  rows,
  compactTitle,
}: {
  route: PortalRoute;
  columns: string[];
  rows: string[][];
  compactTitle?: string;
}) {
  return (
    <article className="erp-panel erp-table-panel">
      <div className="erp-panel-head">
        <div>
          <span>{compactTitle ? "Current view" : "Record workspace"}</span>
          <h3>{compactTitle ?? route.title}</h3>
        </div>
        <div className="erp-table-actions">
          <button type="button">Columns</button>
          <button type="button">Export</button>
        </div>
      </div>
      <div className="erp-filters">
        <label><span>⌕</span><input placeholder={`Search ${route.title.toLowerCase()}`} /></label>
        <select defaultValue="all"><option value="all">All projects</option><option>E4BL</option><option>A2PHC</option><option>Central Office</option></select>
        <select defaultValue="status"><option value="status">All statuses</option><option>Draft</option><option>Under review</option><option>Approved</option></select>
        <button type="button">More filters</button>
      </div>
      <div className="erp-table-wrap">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" aria-label="Select all preview records" /></th>
              {columns.map((column) => <th key={column}>{column}</th>)}
              <th aria-label="Actions" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => {
              const firstCell = row[0] ?? `HSF-DEMO-${rowIndex + 1}`;
              return (
              <tr key={`${firstCell}-${rowIndex}`}>
                <td><input type="checkbox" aria-label={`Select ${firstCell}`} /></td>
                {row.map((cell, cellIndex) => (
                  <td key={`${cell}-${cellIndex}`}>
                    {cellIndex === 0 ? (
                      <Link href={`/${route.path}/${encodeURIComponent(firstCell)}`}><strong>{cell}</strong></Link>
                    ) : cellIndex === row.length - 1 ? (
                      <span className={`erp-status ${statusTone(cell)}`}><i />{cell}</span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
                <td><button className="erp-row-menu" type="button">•••</button></td>
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="erp-table-foot">
        <span>Showing {rows.length} synthetic records</span>
        <div><button type="button" disabled>Previous</button><b>1</b><button type="button">Next</button></div>
      </div>
    </article>
  );
}

function RegistryView({ route }: { route: PortalRoute }) {
  const preset = tablePreset(route);
  return (
    <>
      <MetricCards route={route} />
      <DataTable route={route} columns={preset.columns} rows={preset.rows} />
      <section className="erp-two-column">
        <article className="erp-panel">
          <div className="erp-panel-head"><div><span>Record quality</span><h3>Completeness overview</h3></div><b className="erp-score">88%</b></div>
          <div className="erp-quality-list">
            {[["Required fields", 96], ["Project and location", 92], ["Evidence attached", 78], ["Review history", 86]].map(([label, value]) => (
              <div key={label}><span><strong>{label}</strong><b>{value}%</b></span><i><b style={{ width: `${value}%` }} /></i></div>
            ))}
          </div>
        </article>
        <article className="erp-panel">
          <div className="erp-panel-head"><div><span>Recent history</span><h3>Activity and audit preview</h3></div></div>
          <div className="erp-timeline compact">
            {[["Record submitted", "Demo User 02 · 12 minutes ago"], ["Evidence attached", "Demo User 03 · 43 minutes ago"], ["Reviewer comment added", "Demo User 01 · 2 hours ago"], ["Draft created", "System preview · Yesterday"]].map(([title, detail], index) => (
              <div key={title}><i className={`t-${index + 1}`} /><span><strong>{title}</strong><small>{detail}</small></span></div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

function WorkflowView({ route }: { route: PortalRoute }) {
  const preset = tablePreset(route);
  return (
    <>
      <section className="erp-workflow-track">
        {lifecycle.map((status, index) => (
          <div className={index < 3 ? "complete" : index === 3 ? "current" : ""} key={status}>
            <span>{index < 3 ? "✓" : index + 1}</span>
            <strong>{status}</strong>
            <small>{index < 3 ? "Configured" : index === 3 ? "Current review" : "Next stage"}</small>
          </div>
        ))}
      </section>
      <MetricCards route={route} />
      <DataTable route={route} columns={preset.columns} rows={preset.rows} />
      <section className="erp-two-column">
        <article className="erp-panel">
          <div className="erp-panel-head"><div><span>Control rules</span><h3>Workflow safeguards</h3></div></div>
          <div className="erp-rule-list">
            {[
              "The requester cannot give final approval to the same request.",
              "Every return, correction, recommendation and approval keeps a timestamped history.",
              "Project, location, record status and sensitivity determine permitted access.",
              "Evidence remains linked to the request, activity, expenditure or achievement.",
            ].map((rule, index) => <div key={rule}><span>{index + 1}</span><p>{rule}</p></div>)}
          </div>
        </article>
        <article className="erp-panel">
          <div className="erp-panel-head"><div><span>Decision panel</span><h3>Review action preview</h3></div></div>
          <div className="erp-decision-box">
            <label>Reviewer comment<textarea defaultValue="The record is ready for management review after the listed evidence is confirmed." /></label>
            <div><button type="button" className="erp-button danger">Return</button><button type="button" className="erp-button secondary">Recommend</button><button type="button" className="erp-button primary">Approve</button></div>
          </div>
        </article>
      </section>
    </>
  );
}

function ReportView({ route }: { route: PortalRoute }) {
  const preset = tablePreset(route);
  return (
    <>
      <section className="erp-report-controls">
        <label>Reporting period<select defaultValue="Jul 2026"><option>Jul 2026</option><option>Jun 2026</option><option>Q2 2026</option><option>FY 2026</option></select></label>
        <label>Project<select defaultValue="all"><option value="all">All projects</option><option>E4BL</option><option>A2PHC</option><option>Climate Action</option><option>Women Empowerment</option></select></label>
        <label>Location<select defaultValue="all"><option value="all">All locations</option><option>Head Office</option><option>Hazaribagh</option><option>Uttara</option></select></label>
        <button className="erp-button secondary" type="button">Refresh preview</button>
        <button className="erp-button primary" type="button">Export report</button>
      </section>
      <MetricCards route={route} />
      <section className="erp-two-column wide-left">
        <ManagementChart title={route.title} />
        <article className="erp-panel erp-narrative">
          <div className="erp-panel-head"><div><span>Management narrative</span><h3>Key interpretation</h3></div></div>
          <p>Overall progress remains positive in this synthetic report. Verified achievements are strongest where daily operational records are complete and evidence has been reviewed before monthly consolidation.</p>
          <ul>
            <li>Two programme indicators require corrective action.</li>
            <li>Three evidence packs are still awaiting review.</li>
            <li>Financial utilization is within the planned monthly range.</li>
            <li>No mixed-unit aggregation is used in performance scoring.</li>
          </ul>
          <div className="erp-report-callout"><span>!</span><p><strong>Management attention</strong>Review delayed actions and confirm next-month priorities before closing the period.</p></div>
        </article>
      </section>
      <DataTable route={route} columns={preset.columns} rows={preset.rows} compactTitle="Report detail" />
    </>
  );
}

function CalendarView({ route }: { route: PortalRoute }) {
  const days = Array.from({ length: 35 }, (_, index) => index - 2);
  const events: Record<number, string[]> = { 3: ["Project review"], 7: ["E4BL meeting"], 10: ["Training"], 14: ["Camp plan"], 18: ["Finance close"], 22: ["Management review"], 27: ["Report due"] };
  return (
    <section className="erp-calendar-layout">
      <article className="erp-panel erp-calendar">
        <div className="erp-panel-head"><div><span>July 2026</span><h3>{route.title}</h3></div><div className="erp-calendar-controls"><button type="button">‹</button><button type="button">Today</button><button type="button">›</button></div></div>
        <div className="erp-calendar-weekdays">{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => <span key={day}>{day}</span>)}</div>
        <div className="erp-calendar-grid">
          {days.map((day, index) => {
            const visibleDay = day > 0 && day <= 31;
            return <div className={!visibleDay ? "muted" : events[day] ? "has-event" : ""} key={`${day}-${index}`}><span>{visibleDay ? day : day <= 0 ? 30 + day : day - 31}</span>{visibleDay && events[day]?.map((event) => <b key={event}>{event}</b>)}</div>;
          })}
        </div>
      </article>
      <aside className="erp-panel erp-calendar-agenda">
        <div className="erp-panel-head"><div><span>Upcoming</span><h3>Schedule and deadlines</h3></div></div>
        {[
          ["22", "Monthly management review", "10:30 AM · Head Office"],
          ["24", "Procurement committee", "02:00 PM · Meeting Room"],
          ["27", "Project reports due", "All day · System deadline"],
          ["30", "E4BL coordination", "11:00 AM · Online meeting"],
        ].map(([date, title, detail]) => <div className="erp-agenda-item" key={title}><span><b>{date}</b>JUL</span><div><strong>{title}</strong><small>{detail}</small></div></div>)}
      </aside>
    </section>
  );
}

function LibraryView({ route }: { route: PortalRoute }) {
  const documents = [
    ["Operational guideline", "PDF · 2.4 MB", "Approved", "v2.0"],
    ["Monthly evidence pack", "ZIP · 18.2 MB", "Under review", "Jul 2026"],
    ["Management presentation", "PPTX · 6.8 MB", "Published", "v1.0"],
    ["Training manual", "PDF · 4.1 MB", "Approved", "v3.1"],
    ["Review checklist", "DOCX · 240 KB", "Draft", "v0.4"],
    ["Reporting template", "XLSX · 620 KB", "Active", "2026"],
  ] as const;
  return (
    <>
      <section className="erp-library-tools">
        <label><span>⌕</span><input placeholder={`Search ${route.title.toLowerCase()}`} /></label>
        <select defaultValue="all"><option value="all">All categories</option><option>Policies</option><option>Evidence</option><option>Reports</option><option>Training materials</option></select>
        <button type="button" className="erp-button secondary">New folder</button>
        <Link className="erp-button primary" href={`/${route.path}/new`}>Upload document</Link>
      </section>
      <section className="erp-library-grid">
        {documents.map(([title, meta, status, version], index) => (
          <Link href={`/${route.path}/DOC-DEMO-${String(index + 1).padStart(3, "0")}`} className="erp-document-card" key={title}>
            <div className={`doc-type d-${(index % 4) + 1}`}><span>{["PDF", "ZIP", "PPT", "PDF", "DOC", "XLS"][index]}</span></div>
            <div><strong>{title}</strong><p>{meta}</p><span className={`erp-status ${statusTone(status)}`}><i />{status}</span></div>
            <b>{version}</b>
            <span className="erp-document-menu" aria-hidden="true">•••</span>
          </Link>
        ))}
      </section>
      <section className="erp-two-column">
        <article className="erp-panel"><div className="erp-panel-head"><div><span>Storage overview</span><h3>Controlled document repository</h3></div></div><div className="erp-storage"><strong>42.8 GB <small>of 100 GB</small></strong><i><b style={{ width: "42.8%" }} /></i><div><span>Programme evidence <b>18.4 GB</b></span><span>Finance records <b>11.6 GB</b></span><span>Policies and HR <b>7.2 GB</b></span><span>Other <b>5.6 GB</b></span></div></div></article>
        <article className="erp-panel"><div className="erp-panel-head"><div><span>Document control</span><h3>Upcoming review dates</h3></div></div><div className="erp-priority-list">{([["Finance policy review", "Due in 14 days", "High"], ["Donor agreement renewal", "Due in 36 days", "Medium"], ["Staff document expiry", "4 documents", "Medium"]] as const).map(([title, detail, priority]) => <div key={title}><i className={priority.toLowerCase()} /><span><strong>{title}</strong><small>{detail}</small></span><b>{priority}</b></div>)}</div></article>
      </section>
    </>
  );
}

function ModuleCatalogueView() {
  return (
    <section className="erp-module-catalogue">
      <article className="erp-panel erp-catalogue-summary">
        <div>
          <span>Complete management UI surface</span>
          <h3>{portalRouteCount} planned base screens across {portalGroups.length} connected domains</h3>
          <p>
            Every route below is available for management review. Screens use synthetic demonstration
            content only; route availability does not mean the related business functionality is live.
          </p>
        </div>
        <div className="erp-catalogue-kpis">
          <span><strong>{portalGroups.length}</strong><small>Domains</small></span>
          <span><strong>{portalRouteCount}</strong><small>Base screens</small></span>
          <span><strong>3</strong><small>Preview states per route</small></span>
        </div>
      </article>

      <div className="erp-catalogue-grid">
        {portalGroups.map((group, groupIndex) => (
          <article className="erp-panel erp-catalogue-card" key={group.id}>
            <header>
              <span>{group.code}</span>
              <div>
                <small>Domain {String(groupIndex + 1).padStart(2, "0")}</small>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <b>{group.pages.length}</b>
            </header>
            <div className="erp-catalogue-links">
              {group.pages.map((item) => (
                <Link href={`/${group.slug}/${item.slug}`} key={`${group.id}-${item.slug}`}>
                  <span>{item.title}</span>
                  <small>{item.kind ?? "registry"}</small>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SettingsView({ route }: { route: PortalRoute }) {
  const settings = [
    ["General configuration", "Define organizational defaults, labels and permitted values.", "Configured"],
    ["Workflow behavior", "Control draft, submission, review, approval and closing behavior.", "Draft"],
    ["Access and responsibility", "Set project, location, role and sensitivity requirements.", "Review"],
    ["Notifications", "Choose reminders, deadline alerts and acknowledgement rules.", "Configured"],
    ["Data quality", "Define required fields, duplicate checks and evidence requirements.", "Draft"],
    ["Audit and retention", "Control history, document retention and protected actions.", "Open decision"],
  ] as const;
  return (
    <section className="erp-settings-layout">
      <aside className="erp-settings-nav">
        {settings.map(([title], index) => <button className={index === 0 ? "active" : ""} type="button" key={title}><span>{index + 1}</span>{title}</button>)}
      </aside>
      <article className="erp-panel erp-settings-panel">
        <div className="erp-panel-head"><div><span>System configuration preview</span><h3>{route.title}</h3></div><span className="erp-status warning"><i />UI only</span></div>
        <div className="erp-form-section">
          <div><h4>General configuration</h4><p>These values demonstrate how future authorized administrators will control the module.</p></div>
          <div className="erp-form-grid">
            <label>Configuration name<input defaultValue={route.title} /></label>
            <label>Scope<select defaultValue="organization"><option value="organization">Organization-wide</option><option>Project-specific</option><option>Location-specific</option></select></label>
            <label>Effective date<input type="date" defaultValue="2026-07-01" /></label>
            <label>Configuration owner<select defaultValue="system"><option value="system">System Administrator</option><option>Finance Director</option><option>HR & Administration</option></select></label>
          </div>
        </div>
        <div className="erp-setting-cards">
          {settings.slice(1).map(([title, detail, status], index) => <div key={title}><span>{index + 2}</span><div><strong>{title}</strong><p>{detail}</p></div><b className={`erp-status ${statusTone(status)}`}><i />{status}</b><button type="button">Configure</button></div>)}
        </div>
        <div className="erp-form-actions"><button className="erp-button secondary" type="button">Reset preview</button><button className="erp-button primary" type="button">Save draft settings</button></div>
      </article>
    </section>
  );
}

function ProfileView({ route }: { route: PortalRoute }) {
  return (
    <section className="erp-profile-layout">
      <aside className="erp-panel erp-profile-card">
        <div className="erp-profile-avatar">DU</div>
        <h3>Demo Profile</h3>
        <p>{route.group.title}</p>
        <span className="erp-status success"><i />Active preview</span>
        <div className="erp-profile-meta"><span><small>Reference</small><strong>HSF-DEMO-001</strong></span><span><small>Primary project</small><strong>E4BL</strong></span><span><small>Location</small><strong>Head Office</strong></span><span><small>Reporting line</small><strong>Demo Supervisor</strong></span></div>
        <button className="erp-button secondary" type="button">Edit profile preview</button>
      </aside>
      <div className="erp-profile-main">
        <article className="erp-panel"><div className="erp-panel-head"><div><span>Profile information</span><h3>{route.title}</h3></div></div><div className="erp-detail-grid">{[["Full name", "Demo Profile"], ["Official email", "demo.user@hsf.example"], ["Phone", "+880 1XXX-XXXXXX"], ["Status", "Active"], ["Joining date", "01 January 2026"], ["Employment type", "Regular"], ["Project", "Education for Better Life"], ["Duty station", "Head Office"]].map(([label, value]) => <div key={label}><small>{label}</small><strong>{value}</strong></div>)}</div></article>
        <article className="erp-panel"><div className="erp-panel-head"><div><span>Assignments and access</span><h3>Role, project and location scope</h3></div></div><div className="erp-access-grid">{[["Project Coordinator", "Role"], ["E4BL", "Project"], ["Hazaribagh", "Location"], ["Uttara", "Location"], ["Planning & reporting", "Permission set"], ["Field requisition review", "Permission set"]].map(([name, type]) => <span key={name}><b>{name}</b><small>{type}</small></span>)}</div></article>
      </div>
    </section>
  );
}

function FormView({ route, action }: { route: PortalRoute; action: "new" | "edit" }) {
  return (
    <form className="erp-entry-layout">
      <div className="erp-entry-main">
        <article className="erp-panel erp-form-section">
          <div><span>01</span><h3>Basic information</h3><p>Start with the project, location, period and responsible person.</p></div>
          <div className="erp-form-grid">
            <label>Record title<input defaultValue={action === "edit" ? `Demo ${route.title} record` : ""} placeholder={`Enter ${route.title.toLowerCase()} title`} /></label>
            <label>Reference number<input defaultValue={action === "edit" ? "HSF-DEMO-001" : "Generated after submission"} disabled /></label>
            <label>Project<select defaultValue="e4bl"><option value="e4bl">Education for Better Life</option><option>A2PHC</option><option>Climate Action</option><option>Women Empowerment</option><option>Central Office</option></select></label>
            <label>Location<select defaultValue="head"><option value="head">Head Office</option><option>Hazaribagh Centre</option><option>Uttara Centre</option><option>Field Area 01</option></select></label>
            <label>Reporting period<input type="month" defaultValue="2026-07" /></label>
            <label>Responsible person<select defaultValue="demo"><option value="demo">Demo User 01</option><option>Demo User 02</option><option>Demo User 03</option></select></label>
          </div>
        </article>
        <article className="erp-panel erp-form-section">
          <div><span>02</span><h3>Activity, target or request detail</h3><p>Use clear descriptions and keep quantities connected to their correct unit.</p></div>
          <div className="erp-form-grid">
            <label className="wide">Description<textarea placeholder="Describe the activity, request, result or configuration shown in this UI preview." defaultValue={action === "edit" ? "Synthetic demonstration record prepared for management review." : ""} /></label>
            <label>Indicator / Account head<input placeholder="Select or enter the related indicator" /></label>
            <label>Unit<select defaultValue="record"><option value="record">Record</option><option>Student</option><option>Patient visit</option><option>Session</option><option>Day</option><option>BDT</option></select></label>
            <label>Target / Quantity<input type="number" defaultValue="1" /></label>
            <label>Estimated amount<input defaultValue="৳ 0.00" /></label>
            <label>Required / Due date<input type="date" defaultValue="2026-07-31" /></label>
            <label>Priority<select defaultValue="normal"><option value="normal">Normal</option><option>High</option><option>Urgent</option></select></label>
          </div>
        </article>
        <article className="erp-panel erp-form-section">
          <div><span>03</span><h3>Evidence and supporting notes</h3><p>Attachments remain linked to the related activity, approval and report.</p></div>
          <div className="erp-upload-zone"><span>⇧</span><strong>Drop supporting documents here</strong><p>PDF, image, spreadsheet or office document · synthetic files only</p><button type="button">Browse files</button></div>
          <label className="erp-full-label">Internal note<textarea placeholder="Add a note for the next reviewer." /></label>
        </article>
      </div>
      <aside className="erp-entry-side">
        <article className="erp-panel erp-draft-card"><span className="erp-status warning"><i />Draft</span><h3>Record readiness</h3><div className="erp-draft-score"><strong>62%</strong><i><b style={{ width: "62%" }} /></i></div><ul><li className="done">Basic information</li><li className="done">Project and location</li><li>Required evidence</li><li>Reviewer confirmation</li></ul></article>
        <article className="erp-panel"><div className="erp-panel-head"><div><span>Workflow preview</span><h3>Next steps</h3></div></div><div className="erp-mini-steps">{["Save draft", "Submit", "Reviewer check", "Approval", "Completion"].map((step, index) => <div className={index === 0 ? "active" : ""} key={step}><span>{index + 1}</span><strong>{step}</strong></div>)}</div></article>
        <button className="erp-button secondary full" type="button">Save and continue later</button>
        <button className="erp-button primary full" type="button">Submit for review</button>
      </aside>
    </form>
  );
}

function DetailView({ route, recordId }: { route: PortalRoute; recordId: string }) {
  return (
    <>
      <section className="erp-detail-banner">
        <div><span className="erp-status warning"><i />Under review</span><h3>{recordId}</h3><p>Synthetic detail page for the {route.title.toLowerCase()} interface.</p></div>
        <div><button className="erp-button secondary" type="button">Download</button><Link className="erp-button primary" href={`/${route.path}/edit`}>Edit preview</Link></div>
      </section>
      <section className="erp-detail-layout">
        <div className="erp-detail-main">
          <article className="erp-panel"><div className="erp-panel-head"><div><span>Record summary</span><h3>General information</h3></div></div><div className="erp-detail-grid">{[["Reference", recordId], ["Project", "Education for Better Life"], ["Location", "Hazaribagh Centre"], ["Period", "July 2026"], ["Owner", "Demo User 01"], ["Created", "18 July 2026, 10:42 AM"], ["Current reviewer", "Demo Reviewer 01"], ["Sensitivity", "Internal"]].map(([label, value]) => <div key={label}><small>{label}</small><strong>{value}</strong></div>)}</div></article>
          <article className="erp-panel"><div className="erp-panel-head"><div><span>Content preview</span><h3>Purpose and expected result</h3></div></div><div className="erp-detail-copy"><p>This synthetic record demonstrates how management will review information, linked targets, financial implications, evidence and workflow history without exposing real organizational data.</p><div><span><small>Target / Quantity</small><strong>120 compatible units</strong></span><span><small>Achievement / Progress</small><strong>84 compatible units</strong></span><span><small>Estimated / Approved value</small><strong>৳ 86,400</strong></span></div></div></article>
          <article className="erp-panel"><div className="erp-panel-head"><div><span>Supporting evidence</span><h3>Linked files</h3></div></div><div className="erp-file-list">{[["Evidence summary.pdf", "PDF · 1.8 MB"], ["Attendance or participant sheet.xlsx", "XLSX · 420 KB"], ["Activity photograph set.zip", "ZIP · 8.6 MB"]].map(([name, meta]) => <div key={name}><span>DOC</span><div><strong>{name}</strong><small>{meta}</small></div><button type="button">Download</button></div>)}</div></article>
        </div>
        <aside className="erp-detail-side">
          <article className="erp-panel"><div className="erp-panel-head"><div><span>Workflow history</span><h3>Record timeline</h3></div></div><div className="erp-timeline">{[["Under review", "Demo Reviewer 01 · Today, 11:20 AM"], ["Submitted", "Demo User 01 · Today, 10:45 AM"], ["Evidence attached", "Demo User 01 · Today, 10:44 AM"], ["Draft created", "Demo User 01 · 18 Jul, 10:42 AM"]].map(([title, detail], index) => <div key={title}><i className={`t-${index + 1}`} /><span><strong>{title}</strong><small>{detail}</small></span></div>)}</div></article>
          <article className="erp-panel"><div className="erp-panel-head"><div><span>Review comment</span><h3>Latest feedback</h3></div></div><blockquote>“Please confirm the evidence date and ensure the result is reported against the approved indicator unit.”<cite>Demo Reviewer 01</cite></blockquote></article>
        </aside>
      </section>
    </>
  );
}

export function PortalPage({ resolution }: { resolution: PortalRouteResolution }) {
  const { route, action } = resolution;
  return (
    <>
      <PageHeader resolution={resolution} />
      {action === "new" || action === "edit" ? (
        <FormView route={route} action={action} />
      ) : action === "detail" ? (
        <DetailView route={route} recordId={resolution.recordId ?? "HSF-DEMO-001"} />
      ) : route.group.id === "executive" ? (
        <ExecutiveDashboard route={route} />
      ) : route.kind === "dashboard" ? (
        <ModuleDashboard route={route} />
      ) : route.kind === "workflow" ? (
        <WorkflowView route={route} />
      ) : route.kind === "report" ? (
        <ReportView route={route} />
      ) : route.kind === "calendar" ? (
        <CalendarView route={route} />
      ) : route.kind === "library" ? (
        <LibraryView route={route} />
      ) : route.path === "administration/module-catalogue" ? (
        <ModuleCatalogueView />
      ) : route.kind === "settings" ? (
        <SettingsView route={route} />
      ) : route.kind === "profile" ? (
        <ProfileView route={route} />
      ) : (
        <RegistryView route={route} />
      )}
    </>
  );
}
