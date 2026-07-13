import Link from "next/link";

const foundations = [
  "Annual planning and budget",
  "Monthly Fund Requisition",
  "Purchase Requisition",
  "IOU, expenses, and vouchers",
  "Cash, bank, and reconciliation",
  "E4BL education management",
  "A2PHC health management",
  "HR, payroll, donors, and reporting",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Human Safety Foundation</p>
        <h1>HSF ERP</h1>
        <p className="subtitle">
          Customized NGO enterprise resource planning and management information system.
        </p>
        <div className="status-row">
          <span className="status-badge">v0.1.0</span>
          <span>Repository and platform foundation</span>
        </div>
        <div className="actions">
          <Link className="button" href="/dashboard">
            Open foundation dashboard
          </Link>

          <a className="button button-secondary" href="/api/health">
            Web health
          </a>
        </div>
      </section>

      <section className="panel">
        <h2>Planned platform domains</h2>
        <div className="grid">
          {foundations.map((item) => (
            <article className="card" key={item}>
              <h3>{item}</h3>
              <p>Module foundation documented and ready for phased Codex implementation.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
