import { auth } from "@/app/_lib/auth/auth";
import Button from "@/app/_components/button";
import { Plus } from "@/app/_components/icons/geist-icons";
import prisma from "@/app/_lib/prisma/prisma";
import CheckTask from "@/app/_components/CheckTask";
import {
  Dialog,
  DialogOpen,
  DialogWrapper,
} from "@/app/_components/dialog/dialog";
import AddTaskDialog from "@/app/_components/account/add-dialog/add-task-dialog";

const Page = async () => {
  const session = await auth();
  const tasks = await prisma.task.findMany({
    where: {
      userId: session?.user.id,
    },
  });

  return (
    <div className="px-8 py-4">
      <div className="flex flex-col">
        <h1 className="text-2xl text-foreground font-semibold">Today</h1>
        <div className="overflow-y-auto">
          <div className="flex">
            <section className="py-6 min-w-[280px]">
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <h3 className="text-foreground text-sm font-semibold">
                    {new Intl.DateTimeFormat("en-US", {
                      month: "short",
                      day: "2-digit",
                    }).format(new Date())}{" "}
                    &middot; Today{" "}
                    <span className="ml-2 text-xs text-gray-900">
                      {tasks.length}
                    </span>
                  </h3>
                </div>
                <div className="flex flex-col text-sm text-gray-900 gap-2.5 max-h-[400px] overflow-y-auto">
                  {tasks.map((task) => (
                    <div
                      className="flex border rounded-xl bg-background-200 p-3 gap-2"
                      key={task.id}
                    >
                      <CheckTask />
                      <div className="flex flex-col gap-2">
                        <div className="">{task.name}</div>
                        {task.description && (
                          <div className="text-xs text-gray-800">
                            {task.description}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Dialog>
                  <DialogOpen name="add-task">
                    <Button icon={<Plus size={14} />} size="sm">
                      Add task
                    </Button>
                  </DialogOpen>
                  <DialogWrapper name="add-task">
                    <AddTaskDialog />
                  </DialogWrapper>
                </Dialog>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
