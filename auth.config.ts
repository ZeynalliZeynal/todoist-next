import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/app/_lib/auth/definitions";
import { getUserByEmail } from "@/app/_lib/prisma/apiUsers";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Credentials({
      authorize: async (credentials, request) => {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) throw new Error("Invalid credentials");

        const { email, password } = validatedFields.data;

        const user = await getUserByEmail(email);

        if (user && user.password) {
          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password,
          );
          if (isPasswordMatched) return user;
          else return null;
        } else return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
