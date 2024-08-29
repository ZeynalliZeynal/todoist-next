import SidebarLogout from "@/app/_components/account/sidebar/sidebar-head/sidebar-dropdown/sidebar-logout";
import { DropdownMenu } from "@/app/_components/dropdown-menu/Dropdown";
import {
  ChartActivity,
  ChartTrendingUp,
  Home,
  Plus,
  SettingsGear,
  Star,
} from "@/app/_components/icons/geist-icons";
import { BsPrinter } from "react-icons/bs";
import Link from "next/link";

const SidebarDropdownMenu = ({ name }: { name?: string | null }) => {
  return (
    <DropdownMenu name="profile" position="left">
      <div className="rounded-[10px] border bg-background-100 text-sm text-gray-900 min-w-[280px] overflow-hidden">
        <div className="p-2 flex flex-col">
          <button className="justify-items-start gap-3 px-2 hover:text-foreground h-12 rounded-lg hover:bg-gray-200 grid grid-cols-[1rem_1fr]">
            <ChartTrendingUp />
            <div className="flex flex-col gap-1 justify-start text-start">
              <h5 className="font-semibold text-foreground">{name}</h5>
              <p className="text-xs">0/5 tasks</p>
            </div>
          </button>
        </div>
        <div className="w-full h-[1px] bg-gray-alpha-400" />
        <div className="flex flex-col p-2">
          <button className="justify-items-start gap-3 px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200 grid grid-cols-[1rem_1fr]">
            <SettingsGear />
            Settings
          </button>
          <button className="justify-items-start gap-3 px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200 grid grid-cols-[1rem_1fr]">
            <Plus />
            Add a team
          </button>
        </div>
        <div className="w-full h-[1px] bg-gray-alpha-400" />
        <div className="flex flex-col p-2">
          <button className="justify-items-start gap-3 px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200 grid grid-cols-[1rem_1fr]">
            <ChartActivity />
            Activity log
          </button>
          <button className="justify-items-start gap-3 px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200 grid grid-cols-[1rem_1fr]">
            <BsPrinter />
            Print
          </button>
        </div>
        <div className="w-full h-[1px] bg-gray-alpha-400" />
        <div className="flex flex-col p-2">
          <button className="gap-3 px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200 grid grid-cols-[1rem_1fr] justify-items-start">
            <Star />
            Upgrade to Pro
          </button>
        </div>
        <div className="w-full h-[1px] bg-gray-alpha-400" />
        {/*todo: fix logout bug*/}
        <div className="flex flex-col p-2 bg-background-200">
          <Link
            href="/"
            className="justify-items-start gap-3 px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200 grid grid-cols-[1rem_1fr]"
          >
            <Home />
            Home
          </Link>
          <SidebarLogout />
        </div>
      </div>
    </DropdownMenu>
  );
};

export default SidebarDropdownMenu;
