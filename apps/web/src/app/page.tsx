import Image from "next/image";
import Link from "next/link";
import { portalGroups, portalRouteCount } from "@/lib/portal-catalog";

const programmes = [
  ["E4BL", "Education for Better Life", "Education centres, students, graduates, and sponsorship."],
  [
    "A2PHC",
    "Access to Primary Health Care",
    "Medical camps, patients, physicians, and health reporting.",
  ],
  [
    "CAI",
    "Climate Action Initiative",
    "Community resilience, awareness, and climate-focused action.",
  ],
  ["WEI", "Women Empowerment Initiative", "Health, dignity, protection, skills, and opportunity."],
];

export default function HomePage() {
  return (
    <main className="site">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="HSF ERP home">
          <span className="brand-icon">
            <Image src="/branding/hsf-mark.png" alt="HSF emblem" width={48} height={48} priority />
          </span>
          <span>
            <strong>HSF ERP</strong>
            <small>Human Safety Foundation</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#platform">Platform</a>
          <a href="#programmes">Programmes</a>
          <Link className="nav-cta" href="/dashboard">
            Executive preview
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="release">
              <i />
              Complete UI Blueprint · Management Preview
            </span>
            <p className="eyebrow light">One foundation. One source of truth.</p>
            <h1>
              Responsible operations,
              <span> designed for lasting impact.</span>
            </h1>
            <p className="hero-text">
              HSF ERP brings planning, finance, field programmes, people, evidence, and reporting
              into one secure and accountable management platform.
            </p>
            <div className="hero-actions">
              <Link className="button button-light" href="/dashboard">
                Open complete ERP preview <span>→</span>
              </Link>
              <a className="button button-ghost" href="#platform">
                Explore the platform
              </a>
            </div>
            <div className="principles">
              <span>Audit-ready</span>
              <span>Role-based</span>
              <span>Project-centred</span>
              <span>Bilingual-ready</span>
            </div>
          </div>

          <div className="logo-card">
            <div className="logo-surface">
              <Image
                src="/branding/hsf-logo.jpg"
                alt="Human Safety Foundation"
                width={1000}
                height={1000}
                priority
              />
            </div>
            <div className="logo-card-footer">
              <span>
                <small>Foundation release</small>
                <strong>Ready for phased implementation</strong>
              </span>
              <b>✓</b>
            </div>
          </div>
        </div>
      </section>

      <section className="facts" aria-label="HSF overview">
        <article>
          <strong>4</strong>
          <span>Core projects</span>
        </article>
        <article>
          <strong>300</strong>
          <span>Students</span>
        </article>
        <article>
          <strong>2</strong>
          <span>Education centres</span>
        </article>
        <article>
          <strong>{portalRouteCount}</strong>
          <span>Planned UI screens</span>
        </article>
      </section>

      <section className="section" id="platform">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Institutional control</p>
            <h2>A clear operating path from intention to evidence.</h2>
          </div>
          <p>
            Every future module will follow HSF&apos;s core discipline: approved planning, traceable
            use of funds, verified delivery, and accountable reporting.
          </p>
        </div>

        <div className="workflow">
          {["Plan", "Approve", "Deliver", "Verify", "Report"].map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              {index < 4 ? <i>→</i> : null}
            </div>
          ))}
        </div>

        <div className="capabilities">
          <article className="capability feature">
            <p>Financial governance</p>
            <h3>From annual budget to monthly close.</h3>
            <span>
              MFR, approvals, purchases, IOU, vouchers, bank reconciliation, and reporting.
            </span>
          </article>
          <article className="capability">
            <p>Programme delivery</p>
            <h3>Beneficiaries, activities, evidence, and outcomes.</h3>
            <span>
              Purpose-built workflows for education, health, climate action, and empowerment.
            </span>
          </article>
          <article className="capability">
            <p>Executive visibility</p>
            <h3>Decisions supported by timely, trusted information.</h3>
            <span>
              Role-based dashboards, controlled approvals, audit history, and donor reporting.
            </span>
          </article>
        </div>
      </section>

      <section className="section programmes-section" id="programmes">
        <p className="eyebrow">Programme portfolio</p>
        <h2>One platform, with every planned management domain visible.</h2>
        <div className="programme-grid">
          {programmes.map(([code, name, detail]) => (
            <article className="programme-card" key={code}>
              <span className="programme-code">{code}</span>
              <div>
                <h3>{name}</h3>
                <p>{detail}</p>
              </div>
              <span className="outbound">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section programmes-section" id="modules">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Complete UI blueprint</p>
            <h2>
              {portalRouteCount} management screens across {portalGroups.length} connected domains.
            </h2>
          </div>
          <p>
            Every planned screen is available for management review. The current release is
            intentionally UI-only; live authentication, approvals, transactions, and data will be
            implemented step by step.
          </p>
        </div>
        <div className="programme-grid">
          {portalGroups.slice(0, 8).map((group) => (
            <Link
              className="programme-card"
              href={`/${group.slug}/${group.pages[0]?.slug}`}
              key={group.id}
            >
              <span className="programme-code">{group.code}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.pages.length} complete UI screens</p>
              </div>
              <span className="outbound">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="closing">
        <div>
          <p className="eyebrow light">HSF ERP</p>
          <h2>Built carefully. Implemented responsibly. Scaled with evidence.</h2>
        </div>
        <Link className="button button-light" href="/dashboard">
          Explore the complete UI <span>→</span>
        </Link>
      </section>

      <footer className="footer">
        <div className="brand">
          <span className="brand-icon small">
            <Image src="/branding/hsf-mark.png" alt="" width={40} height={40} />
          </span>
          <span>
            <strong>HSF ERP</strong>
            <small>Human Safety Foundation</small>
          </span>
        </div>
        <p>Customized NGO management platform · Complete UI blueprint · No live data connected</p>
      </footer>
    </main>
  );
}
