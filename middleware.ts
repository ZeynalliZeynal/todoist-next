import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/auth/session";
import { authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes } from "@/routes";

export default async function middleware(req: NextRequest) {
  const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);
  const protectedRoutes = "/account";
  const isProtectedRoute = req.nextUrl.pathname.startsWith(protectedRoutes);
  const isAuthRoute = authRoutes.includes(req.nextUrl.pathname);
  console.log(isAuthRoute);
  const session = await verifySession();

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  if (isAuthRoute && session?.userId)
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.nextUrl));
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
