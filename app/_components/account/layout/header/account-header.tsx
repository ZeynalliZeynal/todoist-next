import SidebarOpen from "@/app/_components/account/layout/header/sidebar-open";

export default function AccountHeader() {
  return (
    <header className="h-[60px]">
      <div className="flex h-full items-center">
        <div className="flex place-items-center">
          <SidebarOpen />
        </div>
      </div>
    </header>
  );
}
