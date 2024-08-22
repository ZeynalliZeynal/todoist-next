import { GoInbox } from "react-icons/go";
import { BsCaretDown } from "react-icons/bs";
import Button from "@/app/_components/button";

export default function AddDialogBottom() {
  return (
    <div className="px-6 py-4 border-t text-xs bg-background-200">
      <div className="flex justify-between">
        <button className="gap-1.5 px-2 h-8 rounded-md hover:bg-gray-alpha-200">
          <GoInbox />
          Inbox
          <BsCaretDown className="size-3" />
        </button>
        <div className="flex gap-3 items-center">
          <Button type="button" primary>
            Cancel
          </Button>
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
}
