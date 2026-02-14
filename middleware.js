// middleware.js
import { NextResponse } from 'next/server';

const PASSWORD = process.env.SITE_PASSWORD || "123456";
const PROTECTED = true; // set false after launching live

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow access to static files, API routes, and the unlock page
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/unlock") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (!PROTECTED) {
    return NextResponse.next(); // site is live
  }

  // If user already has cookie → allow access
  const cookie = req.cookies.get("site_unlocked");
  if (cookie?.value === PASSWORD) {
    return NextResponse.next();
  }

  // Otherwise → redirect to unlock page
  return NextResponse.redirect(new URL("/unlock", req.url));
}
