import SidebarLogout from "@/app/_components/account/sidebar/sidebar-head/sidebar-dropdown/sidebar-logout";
import { DropdownMenu } from "@/app/_components/dropdown-menu/Dropdown";
import {
  ChartActivity,
  ChartTrendingUp,
  Plus,
  SettingsGear,
  Star,
} from "@/app/_components/icons/geist-icons";
import { logOut } from "@/app/_lib/auth/actions";
import { BsPrinter } from "react-icons/bs";

export default function SidebarDropdownMenu({
  name,
}: {
  name?: string | null;
}) {
  return (
    <DropdownMenu name='profile' position='left'>
      <div className='rounded-[10px] border bg-background-100 text-sm text-gray-900 min-w-[280px]'>
        <div className='p-2 flex flex-col'>
          <button className='justify-start gap-3 px-2 hover:text-foreground h-12 rounded-lg hover:bg-gray-200'>
            <ChartTrendingUp />
            <div className='flex flex-col gap-1 justify-start text-start'>
              <h5 className='font-semibold text-foreground'>{name}</h5>
              <p className='text-xs'>0/5 tasks</p>
            </div>
          </button>
        </div>
        <div className='w-full h-[1px] bg-gray-alpha-400' />
        <div className='flex flex-col p-2'>
          <button className='justify-start gap-3 px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200'>
            <SettingsGear />
            Settings
          </button>
          <button className='justify-start gap-3 px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200'>
            <Plus />
            Add a team
          </button>
        </div>
        <div className='w-full h-[1px] bg-gray-alpha-400' />
        <div className='flex flex-col p-2'>
          <button className='justify-start gap-3 px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200'>
            <ChartActivity />
            Activity log
          </button>
          <button className='justify-start gap-3 px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200'>
            <BsPrinter />
            Print
          </button>
        </div>
        <div className='w-full h-[1px] bg-gray-alpha-400' />
        <div className='flex flex-col p-2'>
          <button className='justify-start gap-3 px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200'>
            <Star />
            Upgrade to Pro
          </button>
        </div>
        <div className='w-full h-[1px] bg-gray-alpha-400' />
        {/*todo: fix logout bug*/}
        <form action={logOut} className='flex flex-col p-2'>
          <SidebarLogout />
        </form>
      </div>
    </DropdownMenu>
  );
}
