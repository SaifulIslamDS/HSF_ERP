import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { PREVIEW_ACCESS_COOKIE } from "@/lib/preview-access";

export async function POST(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/access", request.url), 303);
  response.cookies.set({
    name: PREVIEW_ACCESS_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  response.headers.set("Cache-Control", "no-store");
  return response;
}
