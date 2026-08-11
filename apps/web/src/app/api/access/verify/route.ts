import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  PREVIEW_ACCESS_COOKIE,
  createPreviewSessionToken,
  isPreviewGateConfigured,
  isSubmittedPinValid,
  safeReturnTo,
  createPublicUrl,
} from "@/lib/preview-access";

type AttemptRecord = {
  count: number;
  windowStartedAt: number;
  lockedUntil: number;
};

type GlobalWithAccessAttempts = typeof globalThis & {
  __hsfErpAccessAttempts?: Map<string, AttemptRecord>;
};

const globalAccessState = globalThis as GlobalWithAccessAttempts;
const attempts = globalAccessState.__hsfErpAccessAttempts ?? new Map<string, AttemptRecord>();
globalAccessState.__hsfErpAccessAttempts = attempts;

const MAX_FAILED_ATTEMPTS = 5;
const ATTEMPT_WINDOW_MS = 15 * 60 * 1000;
const LOCKOUT_MS = 15 * 60 * 1000;

function clientKey(request: NextRequest): string {
  return (
    request.headers.get("x-nf-client-connection-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown-client"
  );
}

function currentAttemptRecord(key: string, now: number): AttemptRecord {
  const current = attempts.get(key);
  if (!current || now - current.windowStartedAt >= ATTEMPT_WINDOW_MS) {
    const fresh = { count: 0, windowStartedAt: now, lockedUntil: 0 };
    attempts.set(key, fresh);
    return fresh;
  }
  return current;
}

function isRateLimited(key: string, now: number): boolean {
  return currentAttemptRecord(key, now).lockedUntil > now;
}

function registerFailure(key: string, now: number): void {
  const record = currentAttemptRecord(key, now);
  record.count += 1;
  if (record.count >= MAX_FAILED_ATTEMPTS) {
    record.lockedUntil = now + LOCKOUT_MS;
  }
  attempts.set(key, record);
}

function clearFailures(key: string): void {
  attempts.delete(key);
}

function accessUrl(request: NextRequest, error: "invalid" | "format" | "rate", returnTo: string) {
  const url = createPublicUrl("/access", request);
  url.searchParams.set("error", error);
  url.searchParams.set("returnTo", returnTo);
  return url;
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const submittedPin = String(formData.get("pin") ?? "").trim();
  const returnTo = safeReturnTo(String(formData.get("returnTo") ?? "/dashboard"));

  if (!isPreviewGateConfigured()) {
    return NextResponse.redirect(
      createPublicUrl(`/access?returnTo=${encodeURIComponent(returnTo)}`, request),
      303,
    );
  }

  if (!/^\d{6}$/.test(submittedPin)) {
    return NextResponse.redirect(accessUrl(request, "format", returnTo), 303);
  }

  const key = clientKey(request);
  const now = Date.now();

  if (isRateLimited(key, now)) {
    return NextResponse.redirect(accessUrl(request, "rate", returnTo), 303);
  }

  if (!isSubmittedPinValid(submittedPin)) {
    registerFailure(key, now);
    const record = currentAttemptRecord(key, now);
    return NextResponse.redirect(
      accessUrl(request, record.lockedUntil > now ? "rate" : "invalid", returnTo),
      303,
    );
  }

  clearFailures(key);
  const { token, maxAgeSeconds } = createPreviewSessionToken(now);
  const response = NextResponse.redirect(createPublicUrl(returnTo, request), 303);
  response.cookies.set({
    name: PREVIEW_ACCESS_COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: maxAgeSeconds,
    priority: "high",
  });
  response.headers.set("Cache-Control", "no-store");
  return response;
}
