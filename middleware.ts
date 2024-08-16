import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({ req, res });
  const { data, error } = await supabase.auth.getSession();

  if (!data.session)
    return NextResponse.rewrite(new URL("/auth/login", req.url));
  return res;
};

export const config = {
  matcher: ["/dashboard"],
};

// /((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)
