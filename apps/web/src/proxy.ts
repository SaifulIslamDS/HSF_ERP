import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  PREVIEW_ACCESS_COOKIE,
  isPreviewGateEnabled,
  isPreviewSessionValid,
  safeReturnTo,
} from "@/lib/preview-access";

const PUBLIC_API_PATHS = new Set([
  "/api/health",
  "/api/access/verify",
  "/api/access/logout",
]);

function isPublicAsset(pathname: string): boolean {
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/branding/") ||
    pathname === "/favicon.ico" ||
    pathname === "/icon.png"
  );
}

function accessRedirect(request: NextRequest): NextResponse {
  const url = request.nextUrl.clone();
  const requestedPath = `${request.nextUrl.pathname}${request.nextUrl.search}`;
  url.pathname = "/access";
  url.search = "";
  url.searchParams.set("returnTo", safeReturnTo(requestedPath));
  return NextResponse.redirect(url);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicAsset(pathname) || PUBLIC_API_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  if (!isPreviewGateEnabled()) {
    return NextResponse.next();
  }

  const token = request.cookies.get(PREVIEW_ACCESS_COOKIE)?.value;
  const hasPreviewAccess = isPreviewSessionValid(token);

  if (pathname === "/access") {
    if (!hasPreviewAccess) return NextResponse.next();

    const returnTo = safeReturnTo(request.nextUrl.searchParams.get("returnTo"));
    return NextResponse.redirect(new URL(returnTo, request.url));
  }

  if (hasPreviewAccess) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.json(
      { error: "HSF ERP preview access is required." },
      { status: 401 },
    );
  }

  return accessRedirect(request);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
