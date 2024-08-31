import { GoInbox } from "react-icons/go";
import Button from "@/components/button";
import { IoCaretDownOutline } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import Spinner from "@/components/spinner";
import { DialogClose } from "@/components/ui/dialog";

export default function AddDialogBottom({
  name,
  reset,
}: {
  name?: string;
  reset: () => void;
}) {
  const { pending } = useFormStatus();

  return (
    <div className="text-xs w-full">
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
          <DialogClose asChild>
            <Button onClick={reset} primary>
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            disabled={!name || pending}
            icon={pending ? <Spinner /> : null}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
