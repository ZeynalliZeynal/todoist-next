"use client";

import { LuLogOut } from "react-icons/lu";
import { useFormStatus } from "react-dom";
import Spinner from "@/app/_components/spinner";

export default function SidebarLogout() {
  const { pending } = useFormStatus();

  return (
    <button
      className="justify-start gap-3 px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200 disabled:bg-background-100"
      disabled={pending}
    >
      {pending ? <Spinner /> : <LuLogOut />}
      Log out
    </button>
  );
}
