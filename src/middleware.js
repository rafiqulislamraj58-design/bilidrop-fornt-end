import { NextResponse } from "next/server";

export function middleware(request) {
  const token =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("better-auth.session-token");

  if (
    request.nextUrl.pathname.startsWith("/dashboard") &&
    !token
  ) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};