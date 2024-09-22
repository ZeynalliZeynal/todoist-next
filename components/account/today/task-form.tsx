"use client";

import CheckTask from "@/components/ui/check-task";
import { Task } from "@prisma/client";
import { useRef, useState } from "react";

const TaskBody = ({ task }: { task: Task }) => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);

  const handleEditTask = () => {
    if (titleRef.current && descriptionRef.current) {
      titleRef.current.role = "textbox";
      descriptionRef.current.role = "textbox";
    }
  };

  const handleBlur = () => {
    if (titleRef.current && descriptionRef.current) {
      titleRef.current.role = null;
      descriptionRef.current.role = null;
    }
  };

  return (
    <div className='p-3'>
      <div className='flex gap-3'>
        <div className='w-[1.125rem]'>
          <CheckTask onCheck={() => {}} />
        </div>
        <div
          role='button'
          className='flex-grow space-y-1 cursor-pointer'
          tabIndex={0}
          onClick={handleEditTask}
          onBlur={handleBlur}
        >
          <div ref={titleRef} className='text-xl font-semibold'>
            {task.name}
          </div>
          <div ref={descriptionRef} className='text-sm'>
            {task.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBody;
