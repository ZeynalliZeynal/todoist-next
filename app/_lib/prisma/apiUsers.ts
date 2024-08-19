import prisma from "@/app/_lib/prisma/prisma";

export const getUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};
