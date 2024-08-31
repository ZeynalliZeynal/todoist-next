import SidebarLogout from "@/components/account/layout/sidebar/sidebar-head/sidebar-dropdown/sidebar-logout";
import {
  ArrowUpRightSmall,
  ChartActivity,
  ChartTrendingUp,
  Home,
  Plus,
  SettingsGear,
  Star,
} from "@/components/icons/geist-icons";
import { BsPrinter } from "react-icons/bs";
import Link from "next/link";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const SidebarDropdownMenu = ({ name }: { name?: string | null }) => {
  return (
    <>
      <DropdownMenuGroup className="flex flex-col">
        <DropdownMenuItem asChild>
          <button className="justify-items-start gap-3 rounded-lg hover:bg-gray-200 grid grid-cols-[1rem_1fr]">
            <ChartTrendingUp />
            <div className="flex flex-col gap-1 justify-start text-start">
              <h5 className="font-semibold text-foreground">{name}</h5>
              <p className="text-xs">0/5 tasks</p>
            </div>
          </button>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup className="flex flex-col">
        <DropdownMenuItem asChild>
          <button className="grid grid-cols-[1rem_1fr] justify-items-start gap-3">
            <SettingsGear />
            Settings
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button className="grid grid-cols-[1rem_1fr] justify-items-start gap-3">
            <Plus />
            Add a team
          </button>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup className="flex flex-col">
        <DropdownMenuItem asChild>
          <button className="grid grid-cols-[1rem_1fr] justify-items-start gap-3">
            <ChartActivity />
            Activity log
          </button>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <button className="grid grid-cols-[1rem_1fr] justify-items-start gap-3">
            <BsPrinter />
            Print
          </button>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup className="flex flex-col">
        <DropdownMenuItem asChild>
          <button className="grid grid-cols-[1rem_1fr] justify-items-start gap-3">
            <Star />
            Upgrade to Pro
          </button>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup className="flex flex-col bg-background-200">
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="grid grid-cols-[1rem_1fr] justify-items-start gap-3"
          >
            <Home />
            <span className="inline-flex justify-between items-center w-full">
              Home
              <ArrowUpRightSmall size={14} />
            </span>
          </Link>
        </DropdownMenuItem>
        <SidebarLogout />
      </DropdownMenuGroup>
    </>
  );
};

export default SidebarDropdownMenu;
