import SidebarHeadRight from "@/app/_components/account/sidebar/sidebar-head/sidebar-head-right";
import SidebarProfileDropdown from "@/app/_components/account/sidebar/sidebar-head/sidebar-profile-dropdown";

export default function SidebarHead() {
  return (
    <div className="flex p-3 justify-between">
      <SidebarProfileDropdown />
      <SidebarHeadRight />
    </div>
  );
}
