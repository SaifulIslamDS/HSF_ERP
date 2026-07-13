const cards = [
  { label: "Pending approvals", value: "—" },
  { label: "Open MFRs", value: "—" },
  { label: "Overdue IOUs", value: "—" },
  { label: "Unclosed periods", value: "—" },
];

export default function DashboardPage() {
  return (
    <main className="page-shell">
      <section className="hero compact">
        <p className="eyebrow">Foundation preview</p>
        <h1>Management dashboard</h1>
        <p className="subtitle">
          This is a non-production shell. Real modules will be implemented one approved task at a
          time.
        </p>
      </section>

      <section className="metrics">
        {cards.map((card) => (
          <article className="metric-card" key={card.label}>
            <span>{card.label}</span>
            <strong>{card.value}</strong>
          </article>
        ))}
      </section>

      <section className="panel">
        <h2>Next development milestone</h2>
        <p>
          Validate the monorepo and development environment, then implement authentication, RBAC,
          organization, project, location, fiscal-year, and audit-log foundations.
        </p>
      </section>
    </main>
  );
}
