import SidebarHead from "@/app/_components/account/sidebar/sidebar-head/sidebar-head";
import SidebarNav from "@/app/_components/account/sidebar/sidebar-nav/sidebar-nav";
import ModeSwitcher from "@/app/_components/mode-switcher";

export default async function Sidebar() {
  return (
    <div className="flex flex-col text-sm justify-between h-full">
      <div>
        <SidebarHead />
        <SidebarNav />
      </div>
      <div className="flex items-center justify-center p-3">
        <ModeSwitcher />
      </div>
    </div>
  );
}
