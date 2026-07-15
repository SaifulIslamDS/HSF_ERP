import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="error-page">
      <section className="error-card">
        <Image src="/branding/hsf-mark.png" alt="HSF" width={90} height={90} />
        <span>404</span>
        <h1>Page not found</h1>
        <p>
          This route is not part of the approved HSF ERP UI blueprint. Return to the executive
          workspace or open the complete module catalogue.
        </p>
        <div className="hero-actions">
          <Link className="button button-green" href="/dashboard">
            Executive overview
          </Link>
          <Link className="button" href="/administration/module-catalogue">
            Module catalogue
          </Link>
        </div>
      </section>
    </main>
  );
}
