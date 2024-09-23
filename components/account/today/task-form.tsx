"use client";

import Button from "@/components/ui/button";
import CheckTask from "@/components/ui/check-task";
import { DialogClose } from "@/components/ui/dialog";
import Spinner from "@/components/ui/spinner";
import { completeTask, updateTask } from "@/lib/actions/taskActions";
import { Task } from "@prisma/client";
import { ChangeEventHandler, useRef, useState, useTransition } from "react";

const TaskBody = ({ task }: { task: Task }) => {
  const [isPending, startTransition] = useTransition();

  const [editable, setEditable] = useState<boolean>(false);
  const [edited, setEdited] = useState(false);
  const nameRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);

  const handleSave = () => {
    startTransition(async () => {
      if (edited && nameRef.current && descRef.current)
        await updateTask({
          ...task,
          name: nameRef.current.innerText,
          description: descRef.current.innerText,
        });
    });
  };

  const handleTyping: ChangeEventHandler<HTMLDivElement> = () => {
    if (
      nameRef.current?.innerText !== task.name ||
      descRef.current?.innerText !== task.description
    )
      setEdited(true);
    else setEdited(false);
  };

  return (
    <div className='p-3 space-y-3'>
      <div className='flex gap-3'>
        <div className='w-[1.125rem]'>
          <CheckTask onCheck={async () => await completeTask(task.id)} />
        </div>
        <div role='button' className='flex-grow space-y-1'>
          <div
            ref={nameRef}
            tabIndex={0}
            className='text-xl font-semibold'
            onClick={() => {
              setEditable(true);
            }}
            onInput={handleTyping}
            contentEditable={editable}
            suppressContentEditableWarning
          >
            {task.name}
          </div>

          {task.description && (
            <div
              ref={descRef}
              tabIndex={0}
              className='text-sm'
              onClick={() => {
                setEditable(true);
              }}
              onInput={handleTyping}
              contentEditable={editable}
              suppressContentEditableWarning
            >
              {task.description}
            </div>
          )}
        </div>
      </div>
      {edited && (
        <div className='flex items-center justify-end w-full'>
          <DialogClose asChild>
            <Button
              onClick={handleSave}
              disabled={isPending}
              icon={isPending && <Spinner />}
            >
              Save
            </Button>
          </DialogClose>
        </div>
      )}
    </div>
  );
};

export default TaskBody;
