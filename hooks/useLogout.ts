"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth/actions";

export const useLogout = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleClick = () => {
    startTransition(async () => {
      await logout();
      router.push("/");
    });
  };

  return { handleClick, isPending };
};
