import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { createUser, getUser } from "@/app/_lib/supabase/apiUsers";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  providers: [Google, GitHub],
  callbacks: {
    authorized: ({ auth, request }) => {
      return !!auth?.user;
    },
    signIn: async ({ user, account, profile }) => {
      try {
        const existingUser = await getUser(user.email);

        if (!existingUser)
          await createUser({
            email: user.email,
            image: user.image,
            name: user.name,
          });

        return true;
      } catch (err) {
        return false;
      }
    },
    session: async ({ session, user }) => {
      const userData = await getUser(user?.email);

      session.user.userId = userData?.id;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signIn",
  },
});
