"use server";

import { signIn, signOut } from "@/app/_lib/auth/auth";

export const signInAction = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
};

export const signOutAction = async () => {
  await signOut({ redirectTo: "/" });
};
