import Button from "@/components/button";
import { PiCalendarBlankThin } from "react-icons/pi";
import { CiAt, CiFlag1 } from "react-icons/ci";
import { IoAlarmOutline, IoPricetag } from "react-icons/io5";
import Badge from "@/components/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import IconButton from "@/components/icon-button";
import { Location } from "@/components/icons/geist-icons";

export default function AddDialogButtons() {
  return (
    <DropdownMenu>
      <div className="flex gap-2">
        <Button
          size="sm"
          icon={<PiCalendarBlankThin />}
          primary
          onClick={() => {}}
        >
          Due date
        </Button>
        <Button size="sm" icon={<CiFlag1 />} primary>
          Priority
        </Button>
        <Button size="sm" icon={<IoAlarmOutline />} primary>
          Reminders{" "}
          <Badge color="amber-900" bg="amber-200">
            UPGRADE
          </Badge>
        </Button>
        <DropdownMenuTrigger>
          <IconButton>
            <HiOutlineDotsHorizontal />
          </IconButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-52">
          <DropdownMenuGroup className="flex flex-col">
            <DropdownMenuItem asChild>
              <button className="grid grid-cols-[1.5rem_1fr] justify-items-start">
                <IoPricetag />
                <span className="inline-flex items-center w-full justify-between">
                  Labels
                  <CiAt />
                </span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button className="grid grid-cols-[1.5rem_1fr] justify-items-start">
                <Location />
                <span className="inline-flex items-center w-full justify-between">
                  Location
                  <Badge color="amber-900" bg="amber-200">
                    UPGRADE
                  </Badge>
                </span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
}
