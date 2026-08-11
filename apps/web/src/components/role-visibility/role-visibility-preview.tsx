"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
} from "react";
import {
  DEFAULT_PORTAL_ROLE,
  PORTAL_ROLE_PROFILES,
  canRoleViewRoute,
  getPortalRoleProfile,
  type PortalRoleId,
} from "@/lib/portal-role-access";
import styles from "./role-visibility-preview.module.css";

const STORAGE_KEY = "hsf-erp-ui-role";
const ROLE_EVENT = "hsf-role-change";

function readStoredRole(): PortalRoleId {
  if (typeof window === "undefined") return DEFAULT_PORTAL_ROLE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  const valid = PORTAL_ROLE_PROFILES.some((profile) => profile.id === stored);
  return valid ? (stored as PortalRoleId) : DEFAULT_PORTAL_ROLE;
}

function normaliseHref(href: string): string | null {
  if (
    !href ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return null;
  }

  try {
    return new URL(href, window.location.origin).pathname;
  } catch {
    return null;
  }
}

function resetHiddenLinks(): void {
  document
    .querySelectorAll<HTMLElement>("[data-hsf-role-hidden='true']")
    .forEach((element) => {
      element.hidden = false;
      element.removeAttribute("aria-hidden");
      element.removeAttribute("data-hsf-role-hidden");
    });
}

function findHideTarget(anchor: HTMLAnchorElement): HTMLElement {
  return (
    anchor.closest<HTMLElement>(
      "[data-nav-item], [data-module-link], [data-route-card], [role='menuitem'], li",
    ) ?? anchor
  );
}

export function RoleVisibilityPreview() {
  const pathname = usePathname();
  const router = useRouter();
  const [roleId, setRoleId] = useState<PortalRoleId>(DEFAULT_PORTAL_ROLE);
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setRoleId(readStoredRole());
    setIsHydrated(true);
  }, []);

  const profile = useMemo(() => getPortalRoleProfile(roleId), [roleId]);
  const isPortalRoute = pathname !== "/" && !pathname.startsWith("/access");
  const hasRouteAccess = canRoleViewRoute(roleId, pathname);

  const applyRoleVisibility = useCallback(() => {
    if (!isHydrated) return;

    resetHiddenLinks();

    document
      .querySelectorAll<HTMLAnchorElement>("a[href]")
      .forEach((anchor) => {
        if (anchor.closest("[data-role-visibility-ignore='true']")) return;
        const path = normaliseHref(anchor.getAttribute("href") ?? "");
        if (!path || path === "/") return;

        if (!canRoleViewRoute(roleId, path)) {
          const target = findHideTarget(anchor);
          target.hidden = true;
          target.setAttribute("aria-hidden", "true");
          target.setAttribute("data-hsf-role-hidden", "true");
        }
      });
  }, [isHydrated, roleId]);

  useEffect(() => {
    if (!isPortalRoute || !isHydrated) return;

    let queued = false;
    const schedule = () => {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(() => {
        queued = false;
        applyRoleVisibility();
      });
    };

    schedule();
    const observer = new MutationObserver(schedule);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      resetHiddenLinks();
    };
  }, [applyRoleVisibility, isHydrated, isPortalRoute, pathname]);

  useEffect(() => {
    if (!isHydrated) return;
    document.documentElement.dataset.hsfRole = roleId;
    window.localStorage.setItem(STORAGE_KEY, roleId);
    window.dispatchEvent(new CustomEvent(ROLE_EVENT, { detail: { roleId } }));
  }, [isHydrated, roleId]);

  if (!isPortalRoute || !isHydrated) return null;

  return (
    <div className={styles.layer} data-role-visibility-ignore="true">
      {!hasRouteAccess ? (
        <div
          className={styles.accessBlocker}
          role="dialog"
          aria-modal="true"
          aria-labelledby="access-title"
        >
          <div className={styles.accessCard}>
            <span className={styles.accessIcon}>!</span>
            <p className={styles.kicker}>UI role visibility preview</p>
            <h2 id="access-title">
              This module is hidden for {profile.shortLabel}
            </h2>
            <p>
              The selected role does not need this programme area in its normal
              workspace. This preview hides the menu and blocks the page
              visually; real authorization must still be enforced on the server
              during the authentication and RBAC implementation.
            </p>
            <div className={styles.accessActions}>
              <button type="button" onClick={() => router.push("/dashboard")}>
                Return to dashboard
              </button>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={() => setIsOpen(true)}
              >
                Change preview role
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <aside
        className={`${styles.preview} ${isOpen ? styles.previewOpen : ""}`}
      >
        <button
          type="button"
          className={styles.previewToggle}
          onClick={() => setIsOpen((value: boolean) => !value)}
          aria-expanded={isOpen}
          aria-controls="hsf-role-preview-panel"
        >
          <span className={styles.roleDot} />
          <span>{profile.shortLabel}</span>
          <span className={styles.chevron}>{isOpen ? "×" : "⌃"}</span>
        </button>

        {isOpen ? (
          <div id="hsf-role-preview-panel" className={styles.previewPanel}>
            <div className={styles.previewHeading}>
              <div>
                <p>Module visibility preview</p>
                <strong>Select a user role</strong>
              </div>
              <span>UI only</span>
            </div>

            <label htmlFor="hsf-role-select">Preview role</label>
            <select
              id="hsf-role-select"
              value={roleId}
              onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                setRoleId(event.target.value as PortalRoleId)
              }
            >
              {PORTAL_ROLE_PROFILES.map((role) => (
                <option value={role.id} key={role.id}>
                  {role.label}
                </option>
              ))}
            </select>
            <p className={styles.description}>{profile.description}</p>
            <p className={styles.notice}>
              Navigation visibility is demonstrated here. This is not a
              substitute for protected routes, API authorization, project scope,
              location scope, or database policies.
            </p>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
