"use client";

import { useFormStatus } from "react-dom";
import Spinner from "@/app/_components/spinner";
import { LuLogOut } from "react-icons/lu";

const NavLogoutButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="h-10 justify-between px-2 rounded-lg hover:bg-gray-alpha-100 w-full hover:text-gray-1000">
      Log out {!pending ? <Spinner /> : <LuLogOut />}
    </button>
  );
};

export default NavLogoutButton;
