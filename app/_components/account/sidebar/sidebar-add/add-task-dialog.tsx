"use client";

import AddDialogButtons from "@/app/_components/account/sidebar/sidebar-add/add-dialog-buttons";
import AddDialogBottom from "@/app/_components/account/sidebar/sidebar-add/add-dialog-bottom";
import { useState } from "react";

export default function AddTaskDialog() {
  const [formData, setFormData] = useState({ name: "", description: "" });

  return (
    <form className="">
      <div className="flex flex-col gap-2 p-6">
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Task name"
            className="text-xl placeholder:text-xl placeholder-gray-700 placeholder:font-semibold"
            onChange={({ target }) =>
              setFormData((prevState) => ({ ...prevState, name: target.value }))
            }
          />
          <input
            type="text"
            name="description"
            value={formData.description}
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
      <AddDialogBottom />
    </form>
  );
}
