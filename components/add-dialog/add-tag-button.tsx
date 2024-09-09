"use client";

import { IoPricetag } from "react-icons/io5";
import { CiAt } from "react-icons/ci";
import { DropdownMenuSubTrigger } from "@radix-ui/react-dropdown-menu";

const AddTagButton = ({ handleClick }: { handleClick?: () => void }) => {
  return (
    <DropdownMenuSubTrigger
      asChild
      className='px-2 py-1.5 focus:bg-gray-alpha-200 focus:text-foreground outline-none rounded-sm'
    >
      <button
        className='grid grid-cols-[1.5rem_1fr] justify-items-start'
        onClick={handleClick}
      >
        <IoPricetag />
        <span className='inline-flex items-center w-full justify-between'>
          Labels
          <CiAt />
        </span>
      </button>
    </DropdownMenuSubTrigger>
  );
};

export default AddTagButton;
