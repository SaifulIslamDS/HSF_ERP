import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="error-page">
      <section className="error-card">
        <Image src="/branding/hsf-mark.png" alt="HSF" width={90} height={90} />
        <span>404</span>
        <h1>Page not found</h1>
        <p>The requested HSF ERP page is not available in this foundation release.</p>
        <Link className="button button-green" href="/">
          Return to HSF ERP
        </Link>
      </section>
    </main>
  );
}
