"use client";

import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
} from "../../ui/dropdown-menu";
import AddLabelButton from "../add-label-button";
import { Search, Tag } from "../../icons/geist-icons";
import { Label } from "@prisma/client";
import { useEffect, useRef, useState, useTransition } from "react";
import { addLabel } from "@/lib/actions/labelActions";
import { useFormStatus } from "react-dom";

const AddLabelDropdown = ({ labels }: { labels: string[] }) => {
  const [labelInput, setLabelInput] = useState<string>("");
  const [filteredLabels, setFilteredLabels] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setFilteredLabels(labels);

    if (labelInput) {
      setFilteredLabels(
        labels.filter((label) =>
          label.toLowerCase().includes(labelInput.toLowerCase())
        )
      );
    }
  }, [labelInput, labels]);

  return (
    <DropdownMenuSub>
      <AddLabelButton />
      <DropdownMenuPortal>
        <DropdownMenuSubContent className='z-50 rounded-md border bg-background-100 p-1 text-gray-900 shadow-md'>
          <DropdownMenuGroup>
            <div className='px-2 py-1.5 rounded-md text-sm flex items-center gap-2'>
              <Search size={16} />
              <input
                type='text'
                placeholder='Search label...'
                className='placeholder:text-gray-900 placeholder:font-normal'
                onChange={({ target }) => setLabelInput(target.value)}
              />
            </div>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className='overflow-y-auto overflow-x-hidden max-h-40 scroll-pt-10'>
            {!filteredLabels.length ? (
              <DropdownMenuItem asChild>
                <button
                  className='w-full'
                  onClick={() =>
                    startTransition(async () => await addLabel(labelInput))
                  }
                >
                  Create and add &quot;{labelInput}&quot;
                </button>
              </DropdownMenuItem>
            ) : (
              filteredLabels.map((label) => (
                <DropdownMenuItem asChild key={label}>
                  <button className='w-full !justify-start gap-2'>
                    <Tag size={14} /> {label}
                  </button>
                </DropdownMenuItem>
              ))
            )}
          </DropdownMenuGroup>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

export default AddLabelDropdown;
