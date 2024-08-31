import Button from "@/components/button";
import { SettingSliders } from "@/components/icons/geist-icons";
import { GrCircleQuestion } from "react-icons/gr";
import { GoColumns, GoRows } from "react-icons/go";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HeaderRight() {
  return (
    <DropdownMenu>
      <div className="flex items-center justify-end">
        <DropdownMenuTrigger asChild>
          <Button primary size="sm" icon={<SettingSliders size={14} />}>
            View
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-72">
          <DropdownMenuLabel className="flex px-3 py-2 w-full justify-between items-center">
            <h4 className="font-semibold text-sm">View</h4>
            <GrCircleQuestion />
          </DropdownMenuLabel>
          <DropdownMenuGroup className="rounded-[10px] p-1.5 grid grid-cols-2 gap-1.5 w-full bg-background-200">
            <DropdownMenuItem asChild>
              <button className="flex-col rounded-[10px] bg-gray-200 p-2 text-xs gap-2 hover:bg-gray-100">
                <GoRows className="text-base" />
                List
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button className="flex-col rounded-[10px] p-2 text-xs gap-2 hover:bg-gray-100">
                <GoColumns className="text-base" />
                Board
              </button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
}
