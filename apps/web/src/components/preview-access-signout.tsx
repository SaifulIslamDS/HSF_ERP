"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./preview-access-signout.module.css";

const LAST_ACTIVITY_KEY = "hsf_erp_preview_last_activity";
const ACTIVITY_WRITE_THROTTLE_MS = 5000;

type PreviewAccessSignOutProps = {
  enabled: boolean;
  idleMinutes: number;
};

export function PreviewAccessSignOut({ enabled, idleMinutes }: PreviewAccessSignOutProps) {
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!enabled) return;

    if (pathname.startsWith("/access")) {
      window.localStorage.removeItem(LAST_ACTIVITY_KEY);
      return;
    }

    const idleMs = idleMinutes * 60 * 1000;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let lastActivity = Number(window.localStorage.getItem(LAST_ACTIVITY_KEY));

    if (!Number.isFinite(lastActivity) || lastActivity <= 0) {
      lastActivity = Date.now();
      window.localStorage.setItem(LAST_ACTIVITY_KEY, String(lastActivity));
    }

    let lastRecordedActivity = lastActivity;

    const signOut = () => {
      window.localStorage.removeItem(LAST_ACTIVITY_KEY);
      formRef.current?.requestSubmit();
    };

    const scheduleSignOut = () => {
      if (timer) clearTimeout(timer);
      const remaining = idleMs - (Date.now() - lastActivity);

      if (remaining <= 0) {
        signOut();
        return;
      }

      timer = setTimeout(signOut, remaining);
    };

    const recordActivity = () => {
      const now = Date.now();
      if (now - lastRecordedActivity < ACTIVITY_WRITE_THROTTLE_MS) return;

      lastActivity = now;
      lastRecordedActivity = now;
      window.localStorage.setItem(LAST_ACTIVITY_KEY, String(now));
      scheduleSignOut();
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== LAST_ACTIVITY_KEY) return;

      if (event.newValue === null) {
        signOut();
        return;
      }

      const sharedActivity = Number(event.newValue);
      if (!Number.isFinite(sharedActivity) || sharedActivity <= 0) return;

      lastActivity = sharedActivity;
      lastRecordedActivity = sharedActivity;
      scheduleSignOut();
    };

    const checkIdleState = () => {
      if (document.visibilityState === "visible") scheduleSignOut();
    };

    const activityEvents: Array<keyof WindowEventMap> = [
      "pointerdown",
      "pointermove",
      "keydown",
      "scroll",
      "touchstart",
    ];

    activityEvents.forEach((eventName) =>
      window.addEventListener(eventName, recordActivity, { passive: true }),
    );
    window.addEventListener("storage", handleStorage);
    window.addEventListener("focus", scheduleSignOut);
    document.addEventListener("visibilitychange", checkIdleState);

    scheduleSignOut();

    return () => {
      if (timer) clearTimeout(timer);
      activityEvents.forEach((eventName) => window.removeEventListener(eventName, recordActivity));
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("focus", scheduleSignOut);
      document.removeEventListener("visibilitychange", checkIdleState);
    };
  }, [enabled, idleMinutes, pathname]);

  if (!enabled || pathname.startsWith("/access")) return null;

  return (
    <form
      ref={formRef}
      className={styles.signOutForm}
      method="post"
      action="/api/access/logout"
      data-role-visibility-ignore="true"
      onSubmit={() => window.localStorage.removeItem(LAST_ACTIVITY_KEY)}
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
