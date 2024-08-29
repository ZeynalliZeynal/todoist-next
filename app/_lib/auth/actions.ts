"use server";

import { z } from "zod";
import { LoginSchema, RegisterSchema } from "@/app/_lib/auth/definitions";
import bcrypt from "bcryptjs";
import prisma from "@/app/_lib/prisma/prisma";
import { createSession, deleteSession } from "@/app/_lib/auth/session";

export const logInCredentials = async (
  formData: z.infer<typeof LoginSchema>,
) => {
  const validatedFields = LoginSchema.safeParse(formData);

  if (!validatedFields.success) return { error: "Invalid form values" };

  const { password, email } = validatedFields.data;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user && user?.id) {
    const matchedPassword = await bcrypt.compare(password, user.password!!);
    if (matchedPassword) await createSession(user.id);
    else return { error: "Recheck your credentials." };
  } else return { error: "Recheck your credentials." };
};
export const signup = async (formData: z.infer<typeof LoginSchema>) => {
  const validatedFields = RegisterSchema.safeParse(formData);

  if (!validatedFields.success)
    return { errors: validatedFields.error.flatten().fieldErrors };

  const { email, password, name } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (existingUser)
    return {
      error: "Email already exists, please use a different email or login.",
    };

  const hashedPassword = await bcrypt.hash(password, 10);

  const role = process.env.ADMIN_EMAIL === email ? "ADMIN" : "USER";

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
    },
  });

  await createSession(newUser.id);
};

export const logout = async () => {
  await deleteSession();
};
