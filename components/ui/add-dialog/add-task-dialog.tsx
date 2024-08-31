"use client";

import { useState } from "react";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import AddDialogButtons from "@/components/ui/add-dialog/add-dialog-buttons";
import { addTask } from "@/lib/actions/taskActions";
import AddDialogBottom from "@/components/ui/add-dialog/add-dialog-bottom";

export default function AddTaskDialog() {
  const [data, setFormData] = useState({ name: "", description: "" });

  const reset = () => setFormData({ name: "", description: "" });

  return (
    <form
      action={async (formData) => {
        if (data.name) {
          const res = await addTask(formData);
          if (!res?.error) {
            reset();
            close();
          }
        }
      }}
    >
      <DialogHeader className="p-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="name"
              value={data.name}
              placeholder="Task name"
              className="text-xl placeholder:text-xl placeholder-gray-700 placeholder:font-semibold"
              onChange={({ target }) =>
                setFormData((prevState) => ({
                  ...prevState,
                  name: target.value,
                }))
              }
            />
            <input
              type="text"
              name="description"
              value={data.description}
              placeholder="Description"
              className="text-xs placeholder-gray-700 placeholder:font-medium"
              onChange={({ target }) =>
                setFormData((prevState) => ({
                  ...prevState,
                  description: target.value,
                }))
              }
            />
          </div>
          <AddDialogButtons />
        </div>
      </DialogHeader>
      <DialogFooter className="px-6 py-4 bg-background-200">
        <AddDialogBottom name={data.name} reset={reset} />
      </DialogFooter>
    </form>
  );
}
