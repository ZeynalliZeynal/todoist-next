import { GoInbox } from "react-icons/go";
import Button from "@/app/_components/button";
import { DialogClose } from "@/app/_components/dialog/dialog";
import { IoCaretDownOutline } from "react-icons/io5";

export default function AddDialogBottom({
  name,
  reset,
}: {
  name?: string;
  reset: () => void;
}) {
  return (
    <div className="px-6 py-4 border-t text-xs bg-background-200">
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="gap-1.5 px-2 h-8 rounded-md hover:bg-gray-alpha-200"
        >
          <GoInbox />
          Inbox
          <IoCaretDownOutline />
        </button>
        <div className="flex gap-3 items-center">
          <DialogClose>
            <Button onClick={reset} primary>
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" disabled={!name}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
