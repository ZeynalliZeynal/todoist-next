import SidebarHead from "@/app/_components/account/sidebar/sidebar-head";
import { auth } from "@/app/_lib/auth/auth";

export default async function Sidebar() {
  const session = await auth();

  return (
    <div className="flex flex-col text-sm">
      <SidebarHead session={session} />
    </div>
  );
}
