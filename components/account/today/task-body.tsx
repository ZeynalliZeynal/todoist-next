"use client";

import Button from "@/components/ui/button";
import CheckTask from "@/components/ui/check-task";
import { DialogClose } from "@/components/ui/dialog";
import Spinner from "@/components/ui/spinner";
import { FormEventHandler, useEffect, useState } from "react";
import { TaskBodyProps } from "@/components/account/today/task-list";

const TaskBody = ({ task, onComplete, onUpdate, isPending }: TaskBodyProps) => {
  const [edited, setEdited] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleUpdate: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onUpdate(task, edited, name, description);
  };

  useEffect(() => {
    setName(task.name);
    if (task.description) setDescription(task.description);
  }, [task.description, task.name]);

  useEffect(() => {
    if (name !== task.name || description !== task.description) setEdited(true);
    else setEdited(false);
  }, [name, description, task]);

  return (
    <form onSubmit={handleUpdate} className="p-3 space-y-3">
      <div className="flex gap-3">
        <div className="w-[1.125rem]">
          <CheckTask onCheck={() => onComplete(task.id)} />
        </div>
        <div className="flex-grow space-y-1 focus-within:ring-1 rounded-md px-2 py-1 ring-gray-alpha-400 transition flex flex-col hover:ring-gray-alpha-500">
          <input
            type="text"
            className="text-xl font-semibold placeholder:text-gray-700"
            placeholder="Task name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <input
            type="text"
            className="text-sm placeholder:text-gray-700"
            placeholder="Task description"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
        </div>
      </div>
      {edited && (
        <div className="flex items-center justify-end w-full">
          <DialogClose asChild>
            <Button
              type="submit"
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
