import Button from "@/app/_components/button";
import { SettingSliders } from "@/app/_components/icons/geist-icons";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "@/app/_components/dropdown-menu/Dropdown";
import { GrCircleQuestion } from "react-icons/gr";
import { GoColumns, GoRows } from "react-icons/go";

export default function HeaderRight() {
  return (
    <Dropdown>
      <div className="flex items-center justify-end">
        <DropdownToggle name="view">
          <Button primary size="sm" icon={<SettingSliders size={14} />}>
            View
          </Button>
        </DropdownToggle>
        <DropdownMenu name="view" position="right">
          <div className="border rounded-[10px] bg-background-100 min-w-[300px]">
            <div className="flex px-3 py-2 w-full justify-between items-center">
              <h4 className="font-semibold text-sm">View</h4>
              {/*todo: tooltip*/}
              <GrCircleQuestion />
            </div>
            <div className="flex items-center px-3 py-2 w-full">
              <div className="rounded-[10px] p-1.5 grid grid-cols-2 gap-1.5 w-full bg-background-200">
                <button className="flex-col rounded-[10px] bg-gray-200 p-2 text-xs gap-2 hover:bg-gray-100">
                  <GoRows className="text-base" />
                  List
                </button>
                <button className="flex-col rounded-[10px] p-2 text-xs gap-2 hover:bg-gray-100">
                  <GoColumns className="text-base" />
                  Board
                </button>
              </div>
            </div>
          </div>
        </DropdownMenu>
      </div>
    </Dropdown>
  );
}
