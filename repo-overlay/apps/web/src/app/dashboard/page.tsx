import Image from "next/image";
import Link from "next/link";

const summaries = [
  ["Core projects", "4", "Organization-wide programme portfolio"],
  ["Students", "300", "Across two E4BL education centres"],
  ["Education centres", "2", "Hazaribagh and Uttara"],
  ["Health field team", "10", "Five physicians and five supervisors"],
];

const programmes = [
  ["E4BL", "Education for Better Life", "Education and graduate continuity"],
  ["A2PHC", "Access to Primary Health Care", "Free field-level primary healthcare"],
  ["CAI", "Climate Action Initiative", "Climate resilience and community action"],
  ["WEI", "Women Empowerment Initiative", "Dignity, protection, skills, and opportunity"],
];

const readiness = [
  ["Repository and architecture", "Complete", "done"],
  ["Product and data design", "Complete", "done"],
  ["Authentication and RBAC", "Next milestone", "next"],
  ["Finance control workflow", "Planned", "planned"],
];

export default function DashboardPage() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <Link className="sidebar-brand" href="/">
          <span className="brand-icon">
            <Image src="/branding/hsf-mark.png" alt="HSF emblem" width={48} height={48} priority />
          </span>
          <span>
            <strong>HSF ERP</strong>
            <small>Executive workspace</small>
          </span>
        </Link>

        <nav className="side-nav">
          <a className="active" href="#overview">
            <span>◫</span>Overview
          </a>
          <a href="#programmes">
            <span>◇</span>Programmes
          </a>
          <a href="#controls">
            <span>◎</span>Control framework
          </a>
          <a href="#readiness">
            <span>✓</span>Implementation
          </a>
        </nav>

        <div className="side-divider" />
        <div className="side-section">
          <strong>Planned domains</strong>
          <span>Finance and MFR</span>
          <span>HR and Payroll</span>
          <span>E4BL Education</span>
          <span>A2PHC Health</span>
          <span>Donors and MEAL</span>
        </div>

        <div className="side-footer">
          <b>Foundation preview</b>
          <p>No live organizational data is connected.</p>
          <Link href="/">Return to public overview</Link>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p>Human Safety Foundation</p>
            <h1>Executive overview</h1>
          </div>
          <div className="topbar-actions">
            <span className="online">
              <i />
              Foundation operational
            </span>
            <button type="button" aria-label="Profile placeholder">
              HSF
            </button>
          </div>
        </header>

        <div className="dashboard" id="overview">
          <section className="welcome">
            <div>
              <span className="release">
                <i />
                v0.1.1 · Executive UI Foundation
              </span>
              <h2>A professional foundation for responsible growth.</h2>
              <p>
                This preview demonstrates the visual language and future management experience of
                HSF ERP. Live approvals, finance, programme data, and user access will be added in
                controlled releases.
              </p>
            </div>
            <span className="welcome-logo">
              <Image src="/branding/hsf-mark.png" alt="" width={180} height={180} />
            </span>
          </section>

          <section className="summary-grid">
            {summaries.map(([label, value, detail], index) => (
              <article className={`summary-card tone-${index + 1}`} key={label}>
                <span>
                  {label}
                  <i>↗</i>
                </span>
                <strong>{value}</strong>
                <p>{detail}</p>
              </article>
            ))}
          </section>

          <section className="panel-grid">
            <article className="panel" id="programmes">
              <div className="panel-heading">
                <div>
                  <span>Programme portfolio</span>
                  <h2>HSF&apos;s core areas of impact</h2>
                </div>
                <b>4 programmes</b>
              </div>
              <div className="programme-list">
                {programmes.map(([code, name, focus]) => (
                  <div className="programme-row" key={code}>
                    <span>{code}</span>
                    <div>
                      <strong>{name}</strong>
                      <small>{focus}</small>
                    </div>
                    <b>Module planned</b>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel" id="readiness">
              <div className="panel-heading">
                <div>
                  <span>Implementation readiness</span>
                  <h2>Foundation progress</h2>
                </div>
              </div>
              <div className="readiness-list">
                {readiness.map(([label, status, state]) => (
                  <div className="readiness-item" key={label}>
                    <span className={state}>
                      {state === "done" ? "✓" : state === "next" ? "→" : "·"}
                    </span>
                    <div>
                      <strong>{label}</strong>
                      <small>{status}</small>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="panel-grid lower">
            <article className="panel" id="controls">
              <div className="panel-heading">
                <div>
                  <span>Institutional control</span>
                  <h2>One connected operating cycle</h2>
                </div>
              </div>
              <div className="control-track">
                {["Plan", "Budget", "Approve", "Deliver", "Verify", "Report"].map((step, index) => (
                  <div key={step}>
                    <span>{index + 1}</span>
                    <strong>{step}</strong>
                  </div>
                ))}
              </div>
              <p className="panel-note">
                Every future expense and activity will be traceable from approved planning to
                evidence, reconciliation, and management reporting.
              </p>
            </article>

            <article className="panel">
              <div className="panel-heading">
                <div>
                  <span>Approval workspace</span>
                  <h2>Designed for clear decisions</h2>
                </div>
              </div>
              <div className="empty-state">
                <span>✓</span>
                <strong>No live workflow connected</strong>
                <p>
                  Approval queues will appear after authentication, RBAC, budgets, and MFR are
                  implemented.
                </p>
              </div>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}
