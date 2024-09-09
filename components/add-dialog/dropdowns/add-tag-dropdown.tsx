"use client";

import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
} from "../../ui/dropdown-menu";
import AddLabelButton from "../add-tag-button";
import { Check, Search, Tag } from "../../icons/geist-icons";
import { useEffect, useState, useTransition } from "react";
import { addTag } from "@/lib/actions/tagActions";
import { useAddTaskTag } from "@/context/add-task-tag-context";

const AddTagDropdown = ({ tags }: { tags: string[] }) => {
  const { addTaskTag, tags: taskTags, removeTaskTag } = useAddTaskTag();
  const [tagInput, setTagInput] = useState<string>("");
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleAddTag = (tag: string) => {
    if (taskTags.has(tag)) removeTaskTag(tag);
    else addTaskTag(tag);
  };

  useEffect(() => {
    setFilteredTags(tags);

    if (tagInput) {
      setFilteredTags(
        tags.filter((tag) => tag.toLowerCase().includes(tagInput.toLowerCase()))
      );
    }
  }, [tagInput, tags]);

  return (
    <DropdownMenuSub>
      <AddLabelButton />
      <DropdownMenuPortal>
        <DropdownMenuSubContent className="z-50 rounded-md border bg-background-100 p-1 text-gray-900 shadow-md">
          <DropdownMenuGroup>
            <div className="px-2 py-1.5 rounded-md text-sm flex items-center gap-2">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search tag..."
                className="placeholder:text-gray-900 placeholder:font-normal"
                onChange={({ target }) => setTagInput(target.value)}
              />
            </div>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="overflow-y-auto overflow-x-hidden max-h-40 scroll-pt-10">
            {!tagInput && !filteredTags.length ? (
              <DropdownMenuItem disabled>Type to create a tag</DropdownMenuItem>
            ) : !filteredTags.length ? (
              <DropdownMenuItem asChild>
                <button
                  className="w-full"
                  onClick={() => {
                    startTransition(async () => await addTag(tagInput));
                    addTaskTag(tagInput);
                  }}
                >
                  {isPending
                    ? `Creating and adding "${tagInput}"`
                    : `Create and add "${tagInput}"`}
                </button>
              </DropdownMenuItem>
            ) : (
              filteredTags.map((tag) => (
                <DropdownMenuItem asChild key={tag}>
                  <button className="w-full" onClick={() => handleAddTag(tag)}>
                    <span className="inline-flex items-center gap-2">
                      <Tag size={14} /> {tag}
                    </span>
                    {taskTags.has(tag) && <Check size={14} />}
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

export default AddTagDropdown;
