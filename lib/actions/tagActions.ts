"use server";

import { revalidatePath } from "next/cache";
import { verifySession } from "../auth/session";
import prisma from "../prisma/prisma";

export const addTag = async (name: string) => {
  if (!name) return undefined;

  const session = await verifySession();
  if (!session) return undefined;

  await prisma.tag.create({
    data: {
      userId: session.userId,
      name,
    },
  });

  revalidatePath("/account");
};
