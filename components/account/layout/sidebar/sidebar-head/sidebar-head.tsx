import SidebarHeadRight from "@/components/account/layout/sidebar/sidebar-head/sidebar-head-right";
import SidebarProfileDropdown from "@/components/account/layout/sidebar/sidebar-head/sidebar-profile-dropdown";

export default function SidebarHead() {
  return (
    <div className="flex p-3 justify-between">
      <SidebarProfileDropdown />
      <SidebarHeadRight />
    </div>
  );
}
