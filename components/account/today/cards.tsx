import prisma from "@/lib/prisma/prisma";
import CardsWrapper from "@/components/account/today/cards-wrapper";
import Button from "@/components/ui/button";
import { Plus } from "@/components/icons/geist-icons";
import TaskList from "@/components/account/today/task-list";
import AddTaskDialog from "@/components/add-dialog/add-task-dialog";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getUser } from "@/data/user";
import AddDialogButtons from "@/components/add-dialog/add-dialog-buttons";

const TodayCards = async () => {
  const user = await getUser();
  const [tasks_today, tasks_overdue] = await Promise.all([
    await prisma.task.findMany({
      where: {
        userId: user?.id,
        isCompleted: false,
        createdAt: {
          gte: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
        },
      },
    }),
    await prisma.task.findMany({
      where: {
        userId: user?.id,
        isCompleted: false,
        createdAt: {
          lte: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
        },
      },
    }),
  ]);

  return (
    <section className='py-6'>
      <div className='flex gap-6'>
        {!!tasks_overdue.length && (
          <CardsWrapper>
            <TaskList overdue tasks={tasks_overdue} />
          </CardsWrapper>
        )}
        <CardsWrapper>
          <TaskList tasks={tasks_today} />
          <Dialog>
            <div className='sticky bottom-0 bg-background-100 py-3 border-t flex-none'>
              <DialogTrigger asChild>
                <Button icon={<Plus size={14} />} size='sm'>
                  Add task
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent>
              <AddTaskDialog>
                <AddDialogButtons />
              </AddTaskDialog>
            </DialogContent>
          </Dialog>
        </CardsWrapper>
      </div>
    </section>
  );
};
export default TodayCards;
