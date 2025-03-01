import IconButton from "@/components/icon-button";
import {
  ChevronDown,
  ChevronUp,
  Inbox,
  MoreHorizontal,
} from "@/components/icons/geist-icons";
import { DialogClose } from "@/components/ui/dialog";
import KeyboardInput from "@/components/ui/keyboard-input";
import TaskBody from "./task-body";
import { TaskBodyProps } from "@/components/account/today/task-list";

const Task = ({ task, onComplete, onUpdate, isPending }: TaskBodyProps) => {
  return (
    <div className="flex flex-col text-gray-900">
      <div className="p-3 flex items-center border-b justify-between">
        <button
          type="button"
          className="gap-1.5 px-2 h-8 rounded-md hover:bg-gray-alpha-200 text-sm hover:text-foreground"
        >
          <Inbox />
          Inbox
        </button>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <IconButton>
              <ChevronUp />
            </IconButton>
            <IconButton>
              <ChevronDown />
            </IconButton>
          </div>
          <IconButton>
            <MoreHorizontal />
          </IconButton>
          <DialogClose>
            <KeyboardInput>Esc</KeyboardInput>
          </DialogClose>
        </div>
      </div>
      <TaskBody
        task={task}
        onComplete={onComplete}
        onUpdate={onUpdate}
        isPending={isPending}
      />
    </div>
  );
};

export default Task;
