"use client";

import Spinner from "@/app/_components/spinner";
import { LuLogOut } from "react-icons/lu";
import { useLogout } from "@/app/_hooks/useLogout";

const NavLogoutButton = () => {
  const { handleClick, isPending } = useLogout();

  return (
    <button
      className="h-10 justify-between px-2 rounded-lg hover:bg-gray-alpha-100 w-full hover:text-gray-1000"
      onClick={handleClick}
      disabled={isPending}
    >
      Log out {isPending ? <Spinner /> : <LuLogOut />}
    </button>
  );
};

export default NavLogoutButton;
