import SidebarOpen from "@/components/account/layout/header/sidebar-open";
import HeaderRight from "@/components/account/layout/header/header-right";

export default function AccountHeader() {
  return (
    <header className='h-[60px] border-b bg-background-200'>
      <div className='flex h-full items-center justify-between px-3'>
        <SidebarOpen />
        <HeaderRight />
      </div>
    </header>
  );
}
