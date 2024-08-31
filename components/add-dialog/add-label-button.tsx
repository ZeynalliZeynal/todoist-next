"use client";

import { IoPricetag } from "react-icons/io5";
import { CiAt } from "react-icons/ci";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const AddLabelButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <DropdownMenuItem asChild>
      <button
        className="grid grid-cols-[1.5rem_1fr] justify-items-start"
        onClick={handleClick}
      >
        <IoPricetag />
        <span className="inline-flex items-center w-full justify-between">
          Labels
          <CiAt />
        </span>
      </button>
    </DropdownMenuItem>
  );
};

export default AddLabelButton;
