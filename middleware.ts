import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/app/_lib/auth/session";
import { publicRoutes } from "@/routes";

export default async function middleware(req: NextRequest) {
  const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);
  const protectedRoutes = "/account";
  const isProtectedRoute = req.nextUrl.pathname.startsWith(protectedRoutes);
  const session = await verifySession();

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
