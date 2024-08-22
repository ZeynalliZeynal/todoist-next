"use client";

import { GoPlus } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import {
  Dialog,
  DialogOpen,
  DialogWrapper,
} from "@/app/_components/dialog/dialog";
import AddTaskDialog from "@/app/_components/account/sidebar/sidebar-add/add-task-dialog";

export default function SidebarNavButtons() {
  return (
    <Dialog>
      <li>
        <DialogOpen name="add-task">
          <button className="rounded-[var(--rounded)] px-2 h-8 hover:bg-[var(--hover-bg)] w-full justify-start gap-1.5">
            <GoPlus className="size-5" />
            Add task
          </button>
        </DialogOpen>
        <DialogWrapper name="add-task">
          <AddTaskDialog />
        </DialogWrapper>
      </li>
      <li>
        <button className="rounded-[var(--rounded)] px-2 h-8 hover:bg-[var(--hover-bg)] w-full justify-start gap-1.5">
          <IoSearchOutline className="size-5" />
          Search
        </button>
      </li>
    </Dialog>
  );
}
