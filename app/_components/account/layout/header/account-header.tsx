import SidebarOpen from "@/app/_components/account/layout/header/sidebar-open";
import HeaderRight from "@/app/_components/account/layout/header/header-right";

export default function AccountHeader() {
  return (
    <header className="h-[60px] border-b">
      <div className="flex h-full items-center justify-between px-3">
        <SidebarOpen />
        <HeaderRight />
      </div>
    </header>
  );
}
