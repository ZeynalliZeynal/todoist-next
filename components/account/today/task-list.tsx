"use client";

import { formatRelative, subDays } from "date-fns";
import CheckTask from "@/components/ui/check-task";
import { useOptimistic, useTransition } from "react";
import { completeTask, updateTask } from "@/lib/actions/taskActions";
import Badge from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Task as TaskProps } from "@prisma/client";
import Task from "./task";
import { cn } from "@/lib/utils";

export interface TaskBodyProps {
  task: TaskProps;
  onComplete: (taskId: string) => void;
  onUpdate: (
    task: TaskProps,
    edited: boolean,
    name: string,
    description: string,
  ) => void;
  isPending: boolean;
}

const TaskList = ({
  overdue,
  tasks,
}: {
  overdue?: true;
  tasks: TaskProps[];
}) => {
  const [isPending, startTransition] = useTransition();
  const [optimisticTasks, optimisticComplete] = useOptimistic(
    tasks,
    (state, taskId) => state.filter((task) => task.id !== taskId),
  );

  const handleComplete = async (taskId: string) => {
    optimisticComplete(taskId);
    await completeTask(taskId);
  };

  const onUpdate = (
    task: TaskProps,
    edited: boolean,
    name: string,
    description: string,
  ) => {
    startTransition(async () => {
      if (edited)
        await updateTask({
          ...task,
          name,
          description,
        });
    });
  };

  return (
    <>
      <div className="flex flex-none px-4 py-3 border-b">
        <h3 className="text-foreground text-sm font-semibold">
          {overdue ? (
            "Overdue"
          ) : (
            <>
              {new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "2-digit",
              }).format(new Date())}{" "}
              &middot; Today
            </>
          )}
          <span className="ml-2 text-xs text-gray-900">
            {optimisticTasks.length}
          </span>
        </h3>
      </div>
      {!!optimisticTasks.length && (
        <div className="flex-grow overflow-y-auto p-2">
          <div className="text-sm text-gray-900 space-y-2">
            {optimisticTasks.map((task) => (
              <Dialog key={task.id}>
                <DialogTrigger asChild disabled={isPending}>
                  <div
                    role="button"
                    className={cn(
                      "grid grid-cols-[1.25rem_1fr] cursor-pointer border rounded-xl bg-background-200 p-3 gap-2 transition",
                      "[--border-on-hover:hsla(var(--ds-gray-alpha-500))] hover:bg-gray-alpha-200 hover:border-[var(--border-on-hover)]",
                      {
                        "animate-pulse pointer-events-none": isPending,
                      },
                    )}
                  >
                    <CheckTask onCheck={() => handleComplete(task.id)} />
                    <div className="flex flex-col gap-2">
                      <div>{task.name}</div>
                      {task.description && (
                        <div className="text-xs text-gray-800">
                          {task.description}
                        </div>
                      )}
                      {overdue && (
                        <Badge style="teal-subtle">
                          {formatRelative(
                            subDays(
                              new Date(),
                              new Date().getDate() -
                                new Date(task.createdAt as Date).getDate(),
                            ),
                            new Date(),
                          )}
                        </Badge>
                      )}
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <Task
                    task={task}
                    onComplete={handleComplete}
                    onUpdate={onUpdate}
                    isPending={isPending}
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default TaskList;
