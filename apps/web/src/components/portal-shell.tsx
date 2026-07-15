"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ChangeEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import { portalGroups, portalRouteCount } from "@/lib/portal-catalog";

export function PortalShell({ children, pageTitle }: { children: ReactNode; pageTitle: string }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navigationQuery, setNavigationQuery] = useState("");

  const groups = useMemo(() => {
    const query = navigationQuery.trim().toLowerCase();
    if (!query) return portalGroups;

    return portalGroups
      .map((group) => ({
        ...group,
        pages: group.pages.filter((item) =>
          `${item.title} ${group.title}`.toLowerCase().includes(query),
        ),
      }))
      .filter((group) => group.pages.length > 0);
  }, [navigationQuery]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="erp-shell">
      <button
        className={`erp-overlay ${menuOpen ? "is-visible" : ""}`}
        aria-label="Close navigation"
        type="button"
        onClick={closeMenu}
      />

      <aside className={`erp-sidebar ${menuOpen ? "is-open" : ""}`}>
        <div className="erp-sidebar-head">
          <Link className="erp-brand" href="/dashboard" onClick={closeMenu}>
            <span className="erp-brand-mark">
              <Image src="/branding/hsf-mark.png" alt="HSF emblem" width={50} height={50} priority />
            </span>
            <span>
              <strong>HSF ERP</strong>
              <small>Complete UI blueprint</small>
            </span>
          </Link>
          <button type="button" className="erp-close" onClick={closeMenu} aria-label="Close menu">
            ×
          </button>
        </div>

        <div className="erp-nav-search">
          <span aria-hidden="true">⌕</span>
          <input
            value={navigationQuery}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setNavigationQuery(event.target.value)}
            placeholder="Find a module or page"
            aria-label="Search navigation"
          />
        </div>

        <nav className="erp-nav" aria-label="HSF ERP modules">
          <Link
            className={`erp-nav-main ${pathname === "/dashboard" ? "active" : ""}`}
            href="/dashboard"
            onClick={closeMenu}
          >
            <span className="erp-nav-code">EX</span>
            <span>
              <strong>Executive Overview</strong>
              <small>Leadership workspace</small>
            </span>
          </Link>

          {groups.map((group) => {
            const activeGroup = pathname.startsWith(`/${group.slug}/`);
            return (
              <details className="erp-nav-group" key={group.id} open={activeGroup || Boolean(navigationQuery)}>
                <summary>
                  <span className="erp-nav-code">{group.code}</span>
                  <span>
                    <strong>{group.shortTitle}</strong>
                    <small>{group.pages.length} screens</small>
                  </span>
                  <i aria-hidden="true">⌄</i>
                </summary>
                <div className="erp-nav-pages">
                  {group.pages.map((item) => {
                    const href = `/${group.slug}/${item.slug}`;
                    return (
                      <Link
                        className={pathname === href ? "active" : ""}
                        href={href}
                        key={href}
                        onClick={closeMenu}
                      >
                        <span>{item.title}</span>
                        <b>UI</b>
                      </Link>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </nav>

        <div className="erp-sidebar-foot">
          <div>
            <strong>{portalRouteCount} planned screens</strong>
            <p>Complete management UI. No live data or business workflow is connected.</p>
          </div>
          <Link href="/" onClick={closeMenu}>
            Public overview <span>↗</span>
          </Link>
        </div>
      </aside>

      <section className="erp-workspace">
        <header className="erp-topbar">
          <div className="erp-topbar-left">
            <button
              type="button"
              className="erp-menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
            >
              <span />
              <span />
              <span />
            </button>
            <div>
              <p>Human Safety Foundation</p>
              <h1>{pageTitle}</h1>
            </div>
          </div>

          <div className="erp-topbar-actions">
            <label className="erp-global-search">
              <span aria-hidden="true">⌕</span>
              <input placeholder="Search the ERP preview" aria-label="Global search preview" />
              <kbd>⌘ K</kbd>
            </label>
            <button className="erp-icon-button" type="button" aria-label="Notifications">
              <span>♢</span>
              <i>4</i>
            </button>
            <button className="erp-user-button" type="button" aria-label="User menu preview">
              <b>DA</b>
              <span>
                <strong>Demo Administrator</strong>
                <small>Management UI preview</small>
              </span>
              <i>⌄</i>
            </button>
          </div>
        </header>

        <div className="erp-preview-strip">
          <span>UI BLUEPRINT</span>
          <p>All information displayed is synthetic and presented only for management review.</p>
          <Link href="/administration/module-catalogue">View module catalogue</Link>
        </div>

        <div className="erp-page">{children}</div>

        <footer className="erp-footer">
          <span>HSF ERP · Complete management UI blueprint</span>
          <span>Human Safety Foundation · Always we are...</span>
        </footer>
      </section>

      <nav className="erp-mobile-nav" aria-label="Mobile quick navigation">
        <Link className={pathname === "/dashboard" ? "active" : ""} href="/dashboard">
          <span>⌂</span>Overview
        </Link>
        <Link className={pathname.startsWith("/planning/") ? "active" : ""} href="/planning/dashboard">
          <span>◎</span>Plans
        </Link>
        <Link className={pathname.startsWith("/requisitions/") ? "active" : ""} href="/requisitions/dashboard">
          <span>↳</span>Approvals
        </Link>
        <Link className={pathname.startsWith("/reports/") ? "active" : ""} href="/reports/dashboard">
          <span>▥</span>Reports
        </Link>
        <button type="button" onClick={() => setMenuOpen(true)}>
          <span>☰</span>More
        </button>
      </nav>
    </main>
  );
}
