import { verifySession } from "@/lib/auth/session";
import prisma from "@/lib/prisma/prisma";
import CardsWrapper from "@/components/account/today/cards-wrapper";
import Button from "@/components/button";
import { Plus } from "@/components/icons/geist-icons";
import TaskList from "@/components/account/today/task-list";
import AddTaskDialog from "@/components/ui/add-dialog/add-task-dialog";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
        <TaskList tasks={tasks} />
        <Dialog>
          <div className="sticky bottom-0 bg-background-100 px-4 py-3 border-t flex-none">
            <DialogTrigger asChild>
              <Button icon={<Plus size={14} />} size="sm">
                Add task
              </Button>
            </DialogTrigger>
          </div>
          <DialogContent>
            <AddTaskDialog />
          </DialogContent>
        </Dialog>
      </CardsWrapper>
    </section>
  );
};
export default TodayCards;
