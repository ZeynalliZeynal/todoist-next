"use server";

import prisma from "@/lib/prisma/prisma";
import { revalidatePath } from "next/cache";
import { verifySession } from "@/lib/auth/session";
import { FieldValues } from "react-hook-form";
import { Task } from "@prisma/client";

export const updateTask = async (updatedData: Task) => {
  if (!updatedData.name) return { error: "Please enter a name" };

  const session = await verifySession();
  if (!session) return { error: "You are not logged in" };

  await prisma.task.update({
    where: {
      id: updatedData.id,
    },
    data: {
      userId: session.userId,
      name: updatedData.name,
      description: updatedData.description,
      tags: updatedData?.tags,
      updatedAt: new Date(),
    },
  });

  revalidatePath("/account");
};

export const addTask = async (formData: FieldValues, tags: string[]) => {
  const name = formData.get("name")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  if (!name) return { error: "Please enter a name" };

  const session = await verifySession();
  if (!session) return { error: "You are not logged in" };

  await prisma.task.create({
    data: {
      userId: session.userId,
      name,
      description,
      tags,
    },
  });

  revalidatePath("/account");
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

  revalidatePath("/account");
};
