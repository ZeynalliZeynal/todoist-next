import {
  adminPrefix,
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "@/routes";
import { auth } from "@/app/_lib/auth/auth";

export default auth(async function middleware(req) {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);

  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);

  const isAdminRoute = nextUrl.pathname.startsWith(adminPrefix);
  const isAdmin = req.auth?.user.role === "ADMIN";

  if (isApiAuthRoutes) {
    if (isLoggedIn)
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    return undefined;
  }

  if (isAuthRoutes) {
    if (isLoggedIn)
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    return undefined;
  }
  if (!isLoggedIn && !isPublicRoutes)
    return Response.redirect(new URL("/auth/login", nextUrl));

  if (isAdminRoute) {
    if (!isAdmin) return new Response("Not found", { status: 404 });
  }

  return undefined;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
