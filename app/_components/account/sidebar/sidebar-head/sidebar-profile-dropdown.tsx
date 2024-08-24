import {
  Dropdown,
  DropdownToggle,
} from "@/app/_components/dropdown-menu/Dropdown";
import ProgressBar from "@/app/_components/progress-bar";
import UserImage from "@/app/_components/user-image";
import { IoChevronDown } from "react-icons/io5";
import { auth } from "@/app/_lib/auth/auth";
import SidebarDropdownMenu from "@/app/_components/account/sidebar/sidebar-head/sidebar-dropdown/sidebar-dropdown-menu";

export default async function SidebarProfileDropdown() {
  const session = await auth();
  const tasks = 42;
  const completedTasks = 7;
  const progress = (7 / 42) * 100;

  return (
    <Dropdown>
      <DropdownToggle name="profile">
        <button className="flex items-center gap-2 hover:bg-[var(--hover-bg)] py-1 px-2 rounded-[var(--rounded)]">
          <div className="flex relative rounded-full size-7">
            <span className="absolute size-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ProgressBar
                size={28}
                color="gray-alpha-900"
                radius={12}
                percentage={progress}
              />
            </span>
            <div className="absolute size-5 rounded-full border border-background-100 overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <UserImage
                image={session?.user?.image}
                name={session?.user?.name}
              />
            </div>
          </div>
          <div className="font-semibold">
            {session?.user?.name?.split(" ").slice(0, 1)}
          </div>
          <IoChevronDown />
        </button>
      </DropdownToggle>
      <SidebarDropdownMenu name={session?.user.name} />
    </Dropdown>
  );
}
