import { GoInbox } from "react-icons/go";
import { CiGrid41 } from "react-icons/ci";
import { PiCalendarDotsLight } from "react-icons/pi";
import SidebarNavButtons from "@/components/account/layout/sidebar/sidebar-nav/sidebar-nav-buttons";
import SidebarNavLink from "@/components/account/layout/sidebar/sidebar-nav/sidebar-nav-link";
import { IoCalendarClearOutline } from "react-icons/io5";

export default function SidebarNav() {
  return (
    <nav className="px-3">
      <ul className="flex-col">
        <SidebarNavButtons />
        <SidebarNavLink href="/account/inbox">
          <GoInbox className="size-5" />
          Inbox
        </SidebarNavLink>
        <SidebarNavLink href="/account/today">
          <div className="relative size-5">
            <IoCalendarClearOutline className="absolute size-full" />
            <span className="absolute text-[10px] top-[calc(50%+2px)] -translate-y-1/2 left-1/2 -translate-x-1/2">
              {new Date().getDate()}
            </span>
          </div>
          Today
        </SidebarNavLink>
        <SidebarNavLink href="/account/upcoming">
          <PiCalendarDotsLight className="size-5" />
          Upcoming
        </SidebarNavLink>
        <SidebarNavLink href="/account/filters-tags">
          <CiGrid41 className="size-5" />
          Filters & tags
        </SidebarNavLink>
      </ul>
    </nav>
  );
}
