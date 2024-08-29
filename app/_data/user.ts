import { verifySession } from "@/app/_lib/auth/session";
import prisma from "@/app/_lib/prisma/prisma";

export const getUser = async () => {
  const session = await verifySession();
  // todo: filter user when needed
  if (session?.userId)
    return prisma.user.findUnique({
      where: {
        id: session.userId,
      },
    });
  else return null;
};
