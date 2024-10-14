"use client";

import Button from "@/components/ui/button";
import CheckTask from "@/components/ui/check-task";
import { DialogClose } from "@/components/ui/dialog";
import Spinner from "@/components/ui/spinner";
import { updateTask } from "@/lib/actions/taskActions";
import { Task } from "@prisma/client";
import { useEffect, useState, useTransition } from "react";

const TaskBody = ({
  task,
  onComplete,
}: {
  task: Task;
  onComplete: (taskId: string) => void;
}) => {
  const [isPending, startTransition] = useTransition();

  const [edited, setEdited] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    startTransition(async () => {
      if (edited)
        await updateTask({
          ...task,
          name,
          description,
        });
    });
  };

  const handleTyping = () => {};

  useEffect(() => {
    setName(task.name);
    if (task.description) setDescription(task.description);
  }, []);

  useEffect(() => {
    if (name !== task.name || description !== task.description) setEdited(true);
    else setEdited(false);
  }, [name, description]);

  return (
    <form className="p-3 space-y-3">
      <div className="flex gap-3">
        <div className="w-[1.125rem]">
          <CheckTask onCheck={() => onComplete(task.id)} />
        </div>
        <div
          onSubmit={handleSave}
          className="flex-grow space-y-1 focus-within:ring-1 rounded-md px-2 py-1 ring-foreground transition flex flex-col"
        >
          <input
            type="text"
            className="text-xl font-semibold placeholder:text-gray-700"
            placeholder="Task name"
            onChange={(event) => {
              handleTyping();
              setName(event.target.value);
            }}
            value={name}
          />
          <input
            type="text"
            className="text-sm placeholder:text-gray-700"
            placeholder="Task description"
            onChange={(event) => {
              handleTyping();
              setDescription(event.target.value);
            }}
            value={description}
          />
        </div>
      </div>
      {edited && (
        <div className="flex items-center justify-end w-full">
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
    </form>
  );
};

export default TaskBody;
