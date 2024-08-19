import { authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes } from "@/routes";
import { auth } from "@/app/_lib/auth/auth";

export default auth(async function middleware(req) {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);

  if (isAuthRoutes) {
    if (isLoggedIn)
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    return undefined;
  }
  if (!isLoggedIn && !isPublicRoutes)
    return Response.redirect(new URL("/auth/login", nextUrl));

  return undefined;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
