import { createHmac, timingSafeEqual } from "node:crypto";

export const PREVIEW_ACCESS_COOKIE = "hsf_erp_preview_access";
export const DEFAULT_PREVIEW_SESSION_HOURS = 12;

const TOKEN_VERSION = "v1";

function accessPin(): string {
  return process.env.HSF_ERP_ACCESS_PIN?.trim() ?? "";
}

function explicitGateSetting(): string {
  return process.env.HSF_ERP_ACCESS_GATE_ENABLED?.trim().toLowerCase() ?? "";
}

export function isPreviewGateEnabled(): boolean {
  const explicit = explicitGateSetting();
  if (["0", "false", "off", "no"].includes(explicit)) return false;
  if (["1", "true", "on", "yes"].includes(explicit)) return true;

  // Fail closed in production, but do not force local contributors to configure
  // the preview gate unless they explicitly enable it or provide a PIN.
  return process.env.NODE_ENV === "production" || accessPin().length > 0;
}

export function isPreviewGateConfigured(): boolean {
  return /^\d{6}$/.test(accessPin());
}

export function getPreviewSessionHours(): number {
  const parsed = Number(process.env.HSF_ERP_ACCESS_SESSION_HOURS ?? "");
  if (!Number.isFinite(parsed)) return DEFAULT_PREVIEW_SESSION_HOURS;
  return Math.min(24, Math.max(1, Math.floor(parsed)));
}

function signingSecret(): string {
  const pin = accessPin();
  const serverSecret =
    process.env.HSF_ERP_ACCESS_SECRET?.trim() || process.env.AUTH_SECRET?.trim() || pin;

  // Include the PIN so rotating the PIN also invalidates existing preview
  // sessions, even when a separate long-lived server secret is configured.
  return `${serverSecret}:hsf-erp-preview:${pin}`;
}

function signature(payload: string): string {
  return createHmac("sha256", signingSecret()).update(payload).digest("base64url");
}

function constantTimeEqual(left: string, right: string): boolean {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  if (leftBuffer.length !== rightBuffer.length) return false;
  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function isSubmittedPinValid(submittedPin: string): boolean {
  const expectedPin = accessPin();
  if (!isPreviewGateConfigured() || !/^\d{6}$/.test(submittedPin)) return false;
  return constantTimeEqual(submittedPin, expectedPin);
}

export function createPreviewSessionToken(now = Date.now()): {
  token: string;
  maxAgeSeconds: number;
} {
  if (!isPreviewGateConfigured()) {
    throw new Error("HSF ERP preview access PIN is not configured.");
  }

  const maxAgeSeconds = getPreviewSessionHours() * 60 * 60;
  const expiresAt = now + maxAgeSeconds * 1000;
  const payload = `${TOKEN_VERSION}.${expiresAt}`;
  return {
    token: `${payload}.${signature(payload)}`,
    maxAgeSeconds,
  };
}

export function isPreviewSessionValid(token: string | undefined, now = Date.now()): boolean {
  if (!token || !isPreviewGateConfigured()) return false;

  const [version, expiresAtRaw, suppliedSignature, ...extra] = token.split(".");
  if (extra.length > 0 || version !== TOKEN_VERSION || !expiresAtRaw || !suppliedSignature) {
    return false;
  }

  const expiresAt = Number(expiresAtRaw);
  if (!Number.isSafeInteger(expiresAt) || expiresAt <= now) return false;

  const payload = `${version}.${expiresAtRaw}`;
  return constantTimeEqual(suppliedSignature, signature(payload));
}

export function safeReturnTo(candidate: string | null | undefined): string {
  if (!candidate || !candidate.startsWith("/") || candidate.startsWith("//")) {
    return "/dashboard";
  }

  if (candidate === "/access" || candidate.startsWith("/access?")) {
    return "/dashboard";
  }

  return candidate;
}

export function createPublicUrl(pathname: string, request: Request): URL {
  const configuredPublicUrl = process.env.HSF_ERP_PUBLIC_URL?.trim();

  if (configuredPublicUrl) {
    return new URL(pathname, configuredPublicUrl);
  }

  return new URL(pathname, request.url);
}
