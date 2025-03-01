import ProgressBar from "@/components/progress-bar";
import UserImage from "@/components/user-image";
import { IoChevronDown } from "react-icons/io5";
import SidebarDropdownMenu from "@/components/account/layout/sidebar/sidebar-head/sidebar-dropdown/sidebar-dropdown-menu";
import { getUser } from "@/data/user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import prisma from "@/lib/prisma/prisma";

export default async function SidebarProfileDropdown() {
  const user = await getUser();
  const tasks = await prisma.task.findMany({
    where: {
      userId: user?.id,
    },
  });

  const completedTasksSize = tasks.filter(
    (task) => task.isCompleted === true
  ).length;

  const progress = (completedTasksSize / tasks.length) * 100;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='flex items-center gap-2 hover:bg-[var(--hover-bg)] py-1 px-2 rounded-[var(--rounded)]'>
          <div className='flex relative rounded-full size-7 p-1'>
            <span className='absolute size-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <ProgressBar
                size={28}
                color='gray-alpha-900'
                radius={12}
                percentage={progress}
              />
            </span>
            <div className='size-full rounded-full border border-background-100 overflow-hidden flex'>
              <UserImage image={user?.image} name={user?.name} />
            </div>
          </div>
          <div className='font-semibold'>
            {user?.name?.split(" ").slice(0, 1)}
          </div>
          <IoChevronDown />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-64 ml-3'>
        <SidebarDropdownMenu
          name={user?.name}
          taskSize={tasks.length}
          completedTasksSize={completedTasksSize}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
