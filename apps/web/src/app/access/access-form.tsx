"use client";

import Image from "next/image";
import { useState, type ChangeEvent } from "react";
import styles from "./access.module.css";

type AccessFormProps = {
  returnTo: string;
  errorMessage?: string;
  configurationError?: boolean;
  sessionHours: number;
};

export function AccessForm({
  returnTo,
  errorMessage,
  configurationError = false,
  sessionHours,
}: AccessFormProps) {
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState("");

  function handlePinChange(event: ChangeEvent<HTMLInputElement>) {
    setPin(event.target.value.replace(/\D/g, "").slice(0, 6));
  }

  return (
    <main className={styles.page}>
      <section className={styles.panel} aria-labelledby="access-heading">
        <header className={styles.brandHeader}>
          <Image
            className={styles.logo}
            src="/branding/hsf-mark.png"
            alt="Human Safety Foundation logo"
            width={96}
            height={96}
            priority
          />
          <div className={styles.brandCopy}>
            <p>Human Safety Foundation</p>
            <h1>Enterprise Resource Planning (ERP)</h1>
          </div>
        </header>

        <div className={styles.rule} />

        <p className={styles.intro}>
          Protected HSF ERP management environment for authorized reviewers and collaborators.
        </p>

        <div className={styles.formSection}>
          <p className={styles.eyebrow}>Authorized Access</p>
          <h2 id="access-heading">Enter the 6-digit PIN</h2>
          <p className={styles.sessionNote}>
            The access session remains valid for up to {sessionHours} {sessionHours === 1 ? "hour" : "hours"} on this browser.
          </p>

          {configurationError ? (
            <div className={styles.error} role="alert">
              The HSF ERP preview access gate is not configured. Add a valid 6-digit
              <code> HSF_ERP_ACCESS_PIN </code> in the Netlify environment settings.
            </div>
          ) : null}

          {errorMessage ? (
            <div className={styles.error} role="alert">
              {errorMessage}
            </div>
          ) : null}

          <form method="post" action="/api/access/verify" className={styles.form}>
            <input type="hidden" name="returnTo" value={returnTo} />
            <label htmlFor="access-pin">Access PIN</label>
            <div className={styles.inputWrap}>
              <input
                id="access-pin"
                name="pin"
                type={showPin ? "text" : "password"}
                inputMode="numeric"
                pattern="[0-9]{6}"
                autoComplete="one-time-code"
                maxLength={6}
                value={pin}
                onChange={handlePinChange}
                aria-describedby="pin-help"
                disabled={configurationError}
                required
                autoFocus={!configurationError}
              />
              <button
                className={styles.visibilityButton}
                type="button"
                onClick={() => setShowPin((value) => !value)}
                aria-label={showPin ? "Hide PIN" : "Show PIN"}
                aria-pressed={showPin}
                disabled={configurationError}
              >
                {showPin ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8M9.9 4.2A10.5 10.5 0 0112 4c5.4 0 9 5.3 9 5.3a15.6 15.6 0 01-2.1 2.6M6.6 6.6C4.4 8 3 10 3 10s3.6 5.3 9 5.3c1 0 1.9-.2 2.8-.5" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2.7 12S6.3 6.7 12 6.7 21.3 12 21.3 12 17.7 17.3 12 17.3 2.7 12 2.7 12z" />
                    <circle cx="12" cy="12" r="2.6" />
                  </svg>
                )}
              </button>
            </div>

            <button
              className={styles.submitButton}
              type="submit"
              disabled={configurationError || pin.length !== 6}
            >
              Access HSF ERP
            </button>
          </form>

          <p id="pin-help" className={styles.help}>
            Six numeric digits are required. Repeated failed attempts are rate-limited.
          </p>
        </div>

        <div className={styles.rule} />
        <footer className={styles.footer}>
          Human Safety Foundation (HSF) · Always we are...
        </footer>
      </section>
    </main>
  );
}
