"use client";

import { ReactNode, useState } from "react";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { addTask } from "@/lib/actions/taskActions";
import AddDialogBottom from "@/components/add-dialog/add-dialog-bottom";
import { useAddTaskTag } from "@/context/add-task-tag-context";
import AddTaskDialogSelectedTags from "./add-task-dialog-selected-tags";

export default function AddTaskDialog({ children }: { children: ReactNode }) {
  const { tags, clearTaskTags } = useAddTaskTag();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const reset = () => {
    setName("");
    setDescription("");
  };

  const handleSubmit = async (formData: FormData) => {
    if (name) {
      const res = await addTask(formData, [...tags]);
      if (!res?.error) {
        reset();
        close();
      }
      clearTaskTags();
    }
  };

  return (
    <form action={handleSubmit}>
      <DialogHeader className="p-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1 relative">
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Task name"
              className="text-xl placeholder:text-xl placeholder-gray-700 placeholder:font-semibold"
              onChange={({ target }) => setName(target.value)}
            />

            <input
              type="text"
              name="description"
              value={description}
              placeholder="Description"
              className="text-xs placeholder-gray-700 placeholder:font-medium"
              onChange={({ target }) => setDescription(target.value)}
            />
          </div>
          {children}
          <AddTaskDialogSelectedTags />
        </div>
      </DialogHeader>
      <DialogFooter className="px-6 py-4 bg-background-200">
        <AddDialogBottom name={name} reset={reset} />
      </DialogFooter>
    </form>
  );
}
