import IconButton from "@/components/icon-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import AddLabelDropdown from "./add-label-dropdown";
import { Location } from "@/components/icons/geist-icons";
import Badge from "@/components/badge";
import { getUser } from "@/data/user";
import prisma from "@/lib/prisma/prisma";

export const revalidate = 0;

const AddMoreDropdowns = async () => {
  const user = await getUser();
  const labels = await prisma.label.findMany({
    where: {
      userId: user?.id,
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IconButton>
          <HiOutlineDotsHorizontal />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-52'>
        <DropdownMenuGroup className='flex flex-col'>
          <AddLabelDropdown labels={labels.map((label) => label.name)} />
          <DropdownMenuItem asChild>
            <button className='grid grid-cols-[1.5rem_1fr] justify-items-start'>
              <Location />
              <span className='inline-flex items-center w-full justify-between'>
                Location
                <Badge color='amber-900' bg='amber-200'>
                  UPGRADE
                </Badge>
              </span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddMoreDropdowns;
