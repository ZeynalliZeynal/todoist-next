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

  const reset = () => {
    setName("");
    setDescription("");
  };

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
      <DialogHeader className='p-6'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1 relative'>
            <input
              type='text'
              name='name'
              value={name}
              placeholder='Task name'
              className='text-xl placeholder:text-xl placeholder-gray-700 placeholder:font-semibold'
              onChange={({ target }) => setName(target.value)}
            />

            <input
              type='text'
              name='description'
              value={description}
              placeholder='Description'
              className='text-xs placeholder-gray-700 placeholder:font-medium'
              onChange={({ target }) => setDescription(target.value)}
            />
          </div>
          <AddDialogButtons />
        </div>
      </DialogHeader>
      <DialogFooter className='px-6 py-4 bg-background-200'>
        <AddDialogBottom name={name} reset={reset} />
      </DialogFooter>
    </form>
  );
}
