import Link from "next/link";
import { PortalShell } from "@/components/portal-shell";
import styles from "./field-gateway.module.css";

const syncStates = [
  ["Local draft", "Saved safely on this device", "neutral"],
  ["Ready to sync", "Validated locally and waiting for connectivity", "blue"],
  ["Synced / submitted", "Received by the central ERP", "green"],
  ["Pending verification", "Operational record awaiting review", "amber"],
  ["Verified", "Accepted for approved operational use", "green"],
  ["Conflict / returned", "Needs user or reviewer action", "red"],
] as const;

const pathways = [
  {
    code: "HL",
    title: "A2PHC field health",
    text: "Patient registration, visit, consultation, referral, follow-up, camp summary and approved field expenses.",
    href: "/a2phc/patient-registration",
    action: "Open patient capture",
  },
  {
    code: "ED",
    title: "E4BL education",
    text: "Learner registration, enrolment, attendance, assessment, progression, materials and student-support follow-up.",
    href: "/e4bl/student-attendance",
    action: "Open attendance",
  },
  {
    code: "FN",
    title: "Field finance",
    text: "Expense, bill and voucher submission linked to project, location, approved account head, requisition/MFR and evidence.",
    href: "/finance/bills",
    action: "Open bills",
  },
  {
    code: "PG",
    title: "Programme activity",
    text: "Activity completion, participant/reach data, evidence and field notes for Climate Action and other approved programmes.",
    href: "/planning/daily-activities",
    action: "Open activity capture",
  },
];

const queue = [
  ["A2PHC visit draft", "A2P-OFF-0042", "Structured record", "Ready to sync"],
  ["E4BL attendance", "E4BL-OFF-0187", "32 learner marks", "Saved locally"],
  ["Field expense", "EXP-OFF-0091", "Receipt image pending", "Partial sync"],
  ["Activity evidence", "ACT-OFF-0038", "3 photos", "Waiting for network"],
];

export default function FieldGatewayDashboard() {
  return (
    <PortalShell pageTitle="Field Data Gateway">
      <div className={styles.page}>
        <section className={styles.hero}>
          <div>
            <span className={styles.kicker}>OFFLINE-FIRST FIELD OPERATIONS · UI BLUEPRINT</span>
            <h2>HSF ERP begins where programme delivery actually happens.</h2>
            <p>
              Capture patient, learner, activity and expenditure records in low-connectivity
              settings, keep them safely queued on the device, then synchronize into the central ERP
              for validation, verification, approval and reporting.
            </p>
          </div>
          <div className={styles.connectionCard}>
            <span className={styles.offlineDot} />
            <div>
              <small>Demonstration state</small>
              <strong>Offline · 4 records queued</strong>
              <p>Last successful sync: 08:42 AM</p>
            </div>
            <Link href="/field-gateway/sync-centre">Open Sync Centre</Link>
          </div>
        </section>

        <section className={styles.metricGrid}>
          <article>
            <span>Local drafts</span>
            <strong>7</strong>
            <p>Not yet submitted</p>
          </article>
          <article>
            <span>Ready to sync</span>
            <strong>4</strong>
            <p>Validated on device</p>
          </article>
          <article>
            <span>Attachment queue</span>
            <strong>3</strong>
            <p>Images/files waiting</p>
          </article>
          <article>
            <span>Conflicts</span>
            <strong>1</strong>
            <p>Needs user review</p>
          </article>
        </section>

        <section className={styles.panel}>
          <header>
            <div>
              <span>One gateway · multiple programmes</span>
              <h3>Field capture pathways</h3>
            </div>
            <p>Each user sees only their authorized project, location and record types.</p>
          </header>
          <div className={styles.pathwayGrid}>
            {pathways.map((item) => (
              <article key={item.title}>
                <b>{item.code}</b>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <Link href={item.href}>{item.action} →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.twoColumn}>
          <div className={styles.panel}>
            <header>
              <div>
                <span>Record lifecycle</span>
                <h3>Offline does not mean verified</h3>
              </div>
            </header>
            <div className={styles.stateList}>
              {syncStates.map(([title, text, tone], index) => (
                <div key={title} className={styles[`state_${tone}`]}>
                  <i>{index + 1}</i>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.panel}>
            <header>
              <div>
                <span>Governance rule</span>
                <h3>Field record → trusted information</h3>
              </div>
            </header>
            <ol className={styles.flow}>
              <li>
                <b>Capture</b>
                <span>Minimum necessary operational data</span>
              </li>
              <li>
                <b>Sync</b>
                <span>Encrypted transfer when connectivity returns</span>
              </li>
              <li>
                <b>Validate</b>
                <span>Required fields, duplicates, project/location rules</span>
              </li>
              <li>
                <b>Verify</b>
                <span>Programme, clinical, finance or MEAL review</span>
              </li>
              <li>
                <b>Use</b>
                <span>Workflow, indicator, ledger or approved report</span>
              </li>
            </ol>
            <p className={styles.policyNote}>
              <strong>Evidence boundary:</strong> Saved locally, synced and submitted are workflow
              states; none of them automatically make a record VERIFIED.
            </p>
          </div>
        </section>

        <section className={styles.panel}>
          <header>
            <div>
              <span>Device queue · synthetic demonstration</span>
              <h3>Records waiting to synchronize</h3>
            </div>
            <Link href="/field-gateway/sync-conflicts">Review conflicts</Link>
          </header>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Local reference</th>
                  <th>Payload</th>
                  <th>Sync status</th>
                </tr>
              </thead>
              <tbody>
                {queue.map((row) => (
                  <tr key={row[1]}>
                    {row.map((value) => (
                      <td key={value}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.financeNote}>
          <div>
            <span>FY 2025–26 FINANCE MASTER</span>
            <h3>Account heads will be derived from HSF's actual payment dataset.</h3>
            <p>
              The ERP will separate <strong>Account Head</strong> from Project, Location/Cost
              Centre, Fund/Donor, Activity and payment method. Raw payment transactions will not be
              committed to this public repository.
            </p>
          </div>
          <div className={styles.pendingBadge}>SOURCE DATASET REQUIRED FOR CONTROLLED IMPORT</div>
        </section>

        <section className={styles.boundary}>
          <strong>Implementation boundary</strong>
          <p>
            This page is a management UI blueprint. Offline storage, encryption, device
            registration, background synchronization, conflict resolution, production authentication
            and database persistence are not yet implemented merely because the interface is shown.
          </p>
        </section>
      </div>
    </PortalShell>
  );
}
