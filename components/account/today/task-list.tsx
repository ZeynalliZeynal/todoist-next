"use client";

import CheckTask from "@/components/check-task";
import { useOptimistic } from "react";
import { completeTask } from "@/lib/actions/taskActions";

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  const [optimisticTasks, optimisticComplete] = useOptimistic(
    tasks,
    (state, taskId) => state.filter((task) => task.id !== taskId)
  );

  const handleComplete = async (taskId: string) => {
    optimisticComplete(taskId);
    await completeTask(taskId);
  };

  if (!optimisticTasks.length) return null;
  return (
    <>
      <div className='flex flex-none px-4 py-3 border-b'>
        <h3 className='text-foreground text-sm font-semibold'>
          {new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "2-digit",
          }).format(new Date())}{" "}
          &middot; Today{" "}
          <span className='ml-2 text-xs text-gray-900'>
            {optimisticTasks.length}
          </span>
        </h3>
      </div>
      <div className='flex-grow overflow-y-auto p-2'>
        <div className='text-sm text-gray-900 space-y-2'>
          {optimisticTasks.map((task) => (
            <div
              className='grid grid-cols-[1.25rem_1fr] border rounded-xl bg-background-200 p-3 gap-2'
              key={task.id}
            >
              <CheckTask onCheck={() => handleComplete(task.id)} />
              <div className='flex flex-col gap-2'>
                <div className=''>{task.name}</div>
                {task.description && (
                  <div className='text-xs text-gray-800'>
                    {task.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TaskList;
