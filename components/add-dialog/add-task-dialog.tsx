"use client";

import { useEffect, useRef, useState } from "react";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AddDialogButtons from "@/components/add-dialog/add-dialog-buttons";
import { addTask } from "@/lib/actions/taskActions";
import AddDialogBottom from "@/components/add-dialog/add-dialog-bottom";

export default function AddTaskDialog() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setName("");
    setDescription("");
  };
  const addLabel = () => {
    setName((prevState) => prevState + "@");
    nameRef.current?.focus();
  };

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, [name]);

  return (
    <form
      action={async (formData) => {
        if (name) {
          const res = await addTask(formData);
          if (!res?.error) {
            reset();
            close();
          }
        }
      }}
    >
      <DialogHeader className="p-6">
        <DialogTitle>Add new task</DialogTitle>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <input
              ref={nameRef}
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
          <AddDialogButtons addLabel={addLabel} />
        </div>
      </DialogHeader>
      <DialogFooter className="px-6 py-4 bg-background-200">
        <AddDialogBottom name={name} reset={reset} />
      </DialogFooter>
    </form>
  );
}
