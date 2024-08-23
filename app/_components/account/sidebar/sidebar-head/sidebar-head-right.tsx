"use client";

import { BsLayoutSidebar } from "react-icons/bs";
import { useSideBar } from "@/app/_context/sidebar-context";
import IconButton from "@/app/_components/icon-button";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoNotificationsOutline } from "react-icons/io5";

export default function SidebarHeadRight() {
  const { setActive, active } = useSideBar();
  const pathname = usePathname();

  return (
    <div className="flex justify-end items-center gap-2">
      <Link
        href="/account/notifications"
        className={clsx(
          "size-9 rounded-lg hover:bg-[var(--hover-bg)] hover:text-foreground",
          {
            "bg-gray-100 text-foreground":
              pathname === "/account/notifications",
          },
        )}
      >
        <IoNotificationsOutline className="size-5" />
      </Link>
      <IconButton
        onClick={() => setActive(false)}
        className={clsx("transition-all duration-500", {
          "translate-x-[57px]": !active,
          "translate-x-0": active,
        })}
      >
        <BsLayoutSidebar />
      </IconButton>
    </div>
  );
}
