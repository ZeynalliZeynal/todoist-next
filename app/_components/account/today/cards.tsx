import { verifySession } from "@/app/_lib/auth/session";
import prisma from "@/app/_lib/prisma/prisma";
import CardsWrapper from "@/app/_components/account/today/cards-wrapper";
import {
  Dialog,
  DialogOpen,
  DialogWrapper,
} from "@/app/_components/dialog/dialog";
import Button from "@/app/_components/button";
import { Plus } from "@/app/_components/icons/geist-icons";
import AddTaskDialog from "@/app/_components/account/add-dialog/add-task-dialog";
import TaskList from "@/app/_components/account/today/task-list";

const TodayCards = async () => {
  const session = await verifySession();
  const tasks = await prisma.task.findMany({
    where: {
      userId: session?.userId,
      isCompleted: false,
    },
  });
  return (
    <section className="py-6 w-[280px]">
      <CardsWrapper>
        <div className="flex flex-none px-4 py-3 border-b">
          <h3 className="text-foreground text-sm font-semibold">
            {new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "2-digit",
            }).format(new Date())}{" "}
            &middot; Today{" "}
            <span className="ml-2 text-xs text-gray-900">{tasks.length}</span>
          </h3>
        </div>
        <TaskList tasks={tasks} />
        <Dialog>
          <div className="sticky bottom-0 bg-background-100 px-4 py-3 border-t flex-none">
            <DialogOpen name="add-task">
              <Button icon={<Plus size={14} />} size="sm">
                Add task
              </Button>
            </DialogOpen>
          </div>
          <DialogWrapper name="add-task">
            <AddTaskDialog />
          </DialogWrapper>
        </Dialog>
      </CardsWrapper>
    </section>
  );
};
export default TodayCards;
