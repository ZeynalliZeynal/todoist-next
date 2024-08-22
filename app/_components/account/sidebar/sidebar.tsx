import { auth } from "@/app/_lib/auth/auth";
import SidebarHead from "@/app/_components/account/sidebar/sidebar-head/sidebar-head";
import SidebarNav from "@/app/_components/account/sidebar/sidebar-nav/sidebar-nav";

export default async function Sidebar() {
  const session = await auth();

  return (
    <div className="flex flex-col text-sm">
      <SidebarHead session={session} />
      <SidebarNav />
    </div>
  );
}
