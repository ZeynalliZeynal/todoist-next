"use client";

import { logout } from "@/app/_lib/auth/actions";
import { useRouter } from "next/navigation";
import { cloneElement, ReactElement, useTransition } from "react";

const LogoutForm = ({ children }: { children: ReactElement }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleSubmit = async () => {
    await logout();
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {cloneElement(children, { isPending })}
    </form>
  );
};

export default LogoutForm;
