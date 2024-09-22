"use client";

import { LuLogOut } from "react-icons/lu";
import Spinner from "@/components/ui/spinner";
import { useLogout } from "@/hooks/useLogout";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function SidebarLogout() {
  const { handleClick, isPending } = useLogout();
  return (
    <DropdownMenuItem asChild>
      <button
        onClick={handleClick}
        className='justify-items-start gap-3 disabled:bg-background-100 grid grid-cols-[1rem_1fr]'
        disabled={isPending}
      >
        {isPending ? <Spinner /> : <LuLogOut />}
        Log out
      </button>
    </DropdownMenuItem>
  );
}
