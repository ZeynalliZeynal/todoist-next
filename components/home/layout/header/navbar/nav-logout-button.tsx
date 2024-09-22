"use client";

import Spinner from "@/components/ui/spinner";
import { LuLogOut } from "react-icons/lu";
import { useLogout } from "@/hooks/useLogout";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const NavLogoutButton = () => {
  const { handleClick, isPending } = useLogout();

  return (
    <DropdownMenuItem asChild>
      <button onClick={handleClick} disabled={isPending} className='w-full'>
        Log out {isPending ? <Spinner /> : <LuLogOut />}
      </button>
    </DropdownMenuItem>
  );
};

export default NavLogoutButton;
