import { GoInbox } from "react-icons/go";
import { CiGrid41 } from "react-icons/ci";
import { PiCalendarDotsLight } from "react-icons/pi";
import SidebarNavButtons from "@/app/_components/account/sidebar/sidebar-nav/sidebar-nav-buttons";
import SidebarNavLink from "@/app/_components/account/sidebar/sidebar-nav/sidebar-nav-link";

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
          <div className="size-5 rounded-sm border border-foreground relative">
            <span className="absolute top-1 w-[80%] left-1/2 -translate-x-1/2 bg-foreground h-[1px] rounded-md" />
            <span className="absolute top-[1px] text-[10px] left-1/2 -translate-x-1/2">
              {new Date().getDate()}
            </span>
          </div>
          Today
        </SidebarNavLink>
        <SidebarNavLink href="/account/upcoming">
          <PiCalendarDotsLight className="size-5" />
          Upcoming
        </SidebarNavLink>
        <SidebarNavLink href="/account/filters-labels">
          <CiGrid41 className="size-5" />
          Filters & Labels
        </SidebarNavLink>
      </ul>
    </nav>
  );
}
