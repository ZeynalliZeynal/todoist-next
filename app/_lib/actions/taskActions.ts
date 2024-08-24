"use server";

import { auth } from "@/app/_lib/auth/auth";
import prisma from "@/app/_lib/prisma/prisma";
import { revalidatePath } from "next/cache";

export const addTask = async (formData: FormData) => {
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  if (!name) return { error: "Please enter a name" };

  const session = await auth();
  if (!session) return { error: "You are not logged in" };

  await prisma.task.create({
    data: {
      userId: session.user.id,
      name,
      description,
    },
  });

  revalidatePath("/account/today");
};

export const completeTask = async (taskId) => {
  // const
};
