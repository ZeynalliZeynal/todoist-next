"use server";

import { signIn, signOut } from "@/app/_lib/auth/auth";
import { z } from "zod";
import { LoginSchema, RegisterSchema } from "@/app/_schemas";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import prisma from "@/app/_lib/prisma/prisma";

// todo: find a way of redirecting user on server side
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
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Couldn't find such a user",
          };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
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

  const existingUser = await prisma.user.findUnique({
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
};

export const logInSocial = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
};

export const logOutSocial = async () => {
  await signOut({ redirectTo: "/" });
};
