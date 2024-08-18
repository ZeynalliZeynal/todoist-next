"use server";

import { signIn, signOut } from "@/app/_lib/auth/auth";
import { z } from "zod";
import { LoginSchema, RegisterSchema } from "@/app/_schemas";
import bcrypt from "bcrypt";
import prisma from "@/app/_lib/prisma";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const logInCredentials = async (
  formData: z.infer<typeof LoginSchema>,
) => {
  const validatedFields = LoginSchema.safeParse(formData);

  if (!validatedFields.success) return { error: "Invalid form values" };

  const { password, email } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return { success: "You are successfully logged in" };
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw err;
  }
};

export const registerCredentials = async (
  formData: z.infer<typeof LoginSchema>,
) => {
  const validatedFields = RegisterSchema.safeParse(formData);

  if (!validatedFields.success) return { error: "Invalid form values" };

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  // const hasRecord = await prisma.user.count();

  const existingUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (existingUser) return { error: "Email is already in use" };

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "Please verify your email" };
};

export const logInSocial = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
};

export const logOutSocial = async () => {
  await signOut({ redirectTo: "/" });
};
