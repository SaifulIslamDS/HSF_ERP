"use client";

import { usePathname } from "next/navigation";
import styles from "./preview-access-signout.module.css";

type PreviewAccessSignOutProps = {
  enabled: boolean;
};

export function PreviewAccessSignOut({ enabled }: PreviewAccessSignOutProps) {
  const pathname = usePathname();

  if (!enabled || pathname.startsWith("/access")) return null;

  return (
    <form
      className={styles.signOutForm}
      method="post"
      action="/api/access/logout"
      data-role-visibility-ignore="true"
    >
      <button className={styles.signOutButton} type="submit" aria-label="Sign out of protected HSF ERP preview">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5.5" y="10" width="13" height="10" rx="2.4" />
          <path d="M8.5 10V7.3a3.5 3.5 0 017 0V10" />
        </svg>
        <span>Protected - Sign out</span>
      </button>
    </form>
  );
}
