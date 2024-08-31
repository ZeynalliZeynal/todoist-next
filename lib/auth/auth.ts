import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
import prisma from "@/lib/prisma/prisma";
import { getUserById } from "@/lib/prisma/apiUsers";
import { UserRole } from "@prisma/client";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    linkAccount: async ({ user }) => {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
          role: user.email === process.env.ADMIN_EMAIL ? "ADMIN" : "USER",
        },
      });
    },
  },

  callbacks: {
    session: ({ token, session, user }) => {
      if (token.sub && session.user) session.user.id = token.sub;
      if (token.role && session.user)
        session.user.role = token.role as UserRole;
      return session;
    },
    jwt: async ({ token, user, session }) => {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.role = existingUser.role;
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
});
