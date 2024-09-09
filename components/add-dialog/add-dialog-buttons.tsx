import Button from "@/components/button";
import { PiCalendarBlankThin } from "react-icons/pi";
import { CiFlag1 } from "react-icons/ci";
import { IoAlarmOutline } from "react-icons/io5";
import Badge from "@/components/badge";
import AddMoreDropdowns from "./dropdowns/add-more-dropdown";

const AddDialogButtons = () => {
  return (
    <div className="flex gap-2">
      <Button size="sm" icon={<PiCalendarBlankThin />} primary>
        Due date
      </Button>
      <Button size="sm" icon={<CiFlag1 />} primary>
        Priority
      </Button>
      <Button size="sm" icon={<IoAlarmOutline />} primary>
        Reminders <Badge style="amber-subtle">UPGRADE</Badge>
      </Button>
      <AddMoreDropdowns />
    </div>
  );
};

export default AddDialogButtons;
