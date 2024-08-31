"use client";

import { GoPlus } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import AddTaskDialog from "@/components/add-dialog/add-task-dialog";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function SidebarNavButtons() {
  return (
    <Dialog>
      <li>
        <DialogTrigger className="flex justify-start w-full px-2 h-10 hover:bg-[var(--hover-bg)] gap-1.5 rounded-md hover:text-foreground">
          <GoPlus className="size-5" />
          Add task
        </DialogTrigger>
        <DialogContent>
          <AddTaskDialog />
        </DialogContent>
      </li>
      <li>
        <button className="rounded-[var(--rounded)] hover:text-foreground px-2 h-10 hover:bg-[var(--hover-bg)] w-full justify-start gap-1.5">
          <IoSearchOutline className="size-5" />
          Search
        </button>
      </li>
    </Dialog>
  );
}
