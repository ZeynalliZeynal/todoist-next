import SidebarHead from "@/components/account/layout/sidebar/sidebar-head/sidebar-head";
import SidebarNav from "@/components/account/layout/sidebar/sidebar-nav/sidebar-nav";
import ModeSwitcher from "@/components/ui/theme-switcher";

export default async function Sidebar() {
  return (
    <div className='flex flex-col text-sm justify-between h-full'>
      <div>
        <SidebarHead />
        <SidebarNav />
      </div>
      <div className='flex items-center justify-center p-3'>
        <ModeSwitcher />
      </div>
    </div>
  );
}
