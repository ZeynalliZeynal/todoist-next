import prisma from "@/lib/prisma/prisma";
import CardsWrapper from "@/components/account/today/cards-wrapper";
import Button from "@/components/button";
import { Plus } from "@/components/icons/geist-icons";
import TaskList from "@/components/account/today/task-list";
import AddTaskDialog from "@/components/add-dialog/add-task-dialog";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getUser } from "@/data/user";
import AddDialogButtons from "@/components/add-dialog/add-dialog-buttons";

const TodayCards = async () => {
  const user = await getUser();
  const tasks = await prisma.task.findMany({
    where: {
      userId: user?.id,
      isCompleted: false,
    },
  });
  return (
    <section className='py-6 w-[280px]'>
      <CardsWrapper>
        <TaskList tasks={tasks} />
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
    </section>
  );
};
export default TodayCards;
