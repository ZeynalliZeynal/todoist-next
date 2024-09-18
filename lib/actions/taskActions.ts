"use server";

import prisma from "@/lib/prisma/prisma";
import { revalidatePath } from "next/cache";
import { verifySession } from "@/lib/auth/session";
import { FieldValues } from "react-hook-form";

export const addTask = async (formData: FieldValues, tags: string[]) => {
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  if (!name) return { error: "Please enter a name" };

  const session = await verifySession();
  if (!session) return { error: "You are not logged in" };

  console.log(tags);
  await prisma.task.create({
    data: {
      userId: session.userId,
      name,
      description,
      tags,
    },
  });

  revalidatePath("/account/today");
};

export const completeTask = async (taskId: string) => {
  const task = await prisma.task.findUnique({
    where: {
      id: taskId,
    },
  });

  if (!task) return { error: "Task doesn't exist." };

  if (task.isCompleted) return { message: "Task is already completed." };

  await prisma.task.update({
    where: { id: taskId },
    data: { isCompleted: true },
  });
  revalidatePath("/account/today");
};
