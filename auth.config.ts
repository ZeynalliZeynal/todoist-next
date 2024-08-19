import { NextAuthConfig } from "next-auth";
import Credentials from "@auth/core/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { LoginSchema } from "@/app/_schemas";
import { getUserByEmail } from "@/app/_lib/prisma/apiUsers";

// todo: fix type bug

export default {
  providers: [
    Google,
    GitHub,
    Credentials({
      authorize: async (credentials, request) => {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) throw new Error("Invalid credentials");

        const { email, password } = validatedFields.data;

        const user = await getUserByEmail(email);
        if (user && user.password === password) return user;
        else return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
} satisfies NextAuthConfig;

/*


        if (!user || !user.password) return null;
        else {
          const matchedPassword = await bcrypt.compare(
            validatedFields.data.password,
            user.password,
          );
          if (matchedPassword) return user;
          else return null;
        }
 */
