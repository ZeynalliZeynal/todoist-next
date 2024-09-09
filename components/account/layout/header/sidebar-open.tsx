"use client";

import IconButton from "@/components/icon-button";
import { useSideBar } from "@/context/sidebar-context";
import { BsLayoutSidebar } from "react-icons/bs";
import { clsx } from "clsx";

export default function SidebarOpen() {
  const { setActive, active } = useSideBar();

  return (
    <div className='flex items-center'>
      <IconButton
        onClick={() => setActive(true)}
        className={clsx("transition-all duration-500", {
          "-translate-x-[57px]": active,
          "translate-x-0": !active,
        })}
      >
        <BsLayoutSidebar />
      </IconButton>
    </div>
  );
}
