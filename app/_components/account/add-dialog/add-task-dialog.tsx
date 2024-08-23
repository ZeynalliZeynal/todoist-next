"use client";

import { useState } from "react";
import { addTask } from "@/app/_lib/actions/taskActions";
import { useDialog } from "@/app/_components/dialog/dialog";
import AddDialogButtons from "@/app/_components/account/add-dialog/add-dialog-buttons";
import AddDialogBottom from "@/app/_components/account/add-dialog/add-dialog-bottom";

export default function AddTaskDialog() {
  const [data, setFormData] = useState({ name: "", description: "" });
  const { close } = useDialog();

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
      <div className="flex flex-col gap-2 p-6">
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Task name"
            className="text-xl placeholder:text-xl placeholder-gray-700 placeholder:font-semibold"
            onChange={({ target }) =>
              setFormData((prevState) => ({ ...prevState, name: target.value }))
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
      <AddDialogBottom name={data.name} reset={reset} />
    </form>
  );
}
