"use client";

import { LuLogOut } from "react-icons/lu";
import Spinner from "@/app/_components/spinner";
import { useLogout } from "@/app/_hooks/useLogout";

export default function SidebarLogout() {
  const { handleClick, isPending } = useLogout();
  return (
    <button
      onClick={handleClick}
      className="justify-items-start gap-3 px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200 disabled:bg-background-100 grid grid-cols-[1rem_1fr]"
      disabled={isPending}
    >
      {isPending ? <Spinner /> : <LuLogOut />}
      Log out
    </button>
  );
}
