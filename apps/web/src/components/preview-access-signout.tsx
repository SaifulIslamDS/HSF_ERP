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
      <button
        className={styles.signOutButton}
        type="submit"
        aria-label="Sign out of protected HSF ERP preview"
        title="End this protected access session"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect height="10" rx="2" width="14" x="5" y="10" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
        <span>Protected · Sign out</span>
      </button>
    </form>
  );
}
