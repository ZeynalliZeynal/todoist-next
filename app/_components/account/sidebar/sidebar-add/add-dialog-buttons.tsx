"use client";

import Button from "@/app/_components/button";
import { PiCalendarBlankThin } from "react-icons/pi";
import { CiFlag1 } from "react-icons/ci";
import { IoAlarmOutline } from "react-icons/io5";
import Badge from "@/app/_components/badge";
import IconButton from "@/app/_components/icon-button";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function AddDialogButtons() {
  return (
    <div className="flex gap-2">
      <Button type="button" size="sm" icon={<PiCalendarBlankThin />} primary>
        Due date
      </Button>
      <Button type="button" size="sm" icon={<CiFlag1 />} primary>
        Priority
      </Button>
      <Button type="button" size="sm" icon={<IoAlarmOutline />} primary>
        Reminders{" "}
        <Badge color="amber-900" bg="amber-200">
          Upgrade
        </Badge>
      </Button>
      <IconButton onClick={() => {}}>
        <HiOutlineDotsHorizontal />
      </IconButton>
    </div>
  );
}
