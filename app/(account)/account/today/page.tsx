import TodayCards from "@/components/account/today/cards";
import { Check } from "@/components/icons/geist-icons";
import { getUser } from "@/data/user";
import prisma from "@/lib/prisma/prisma";
import { Suspense } from "react";

const Page = async () => {
  const user = await getUser();
  const completedTasks = await prisma.task.findMany({
    where: {
      userId: user?.id,
      isCompleted: true,
    },
  });

  return (
    <div className="px-8 py-4">
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl text-foreground font-semibold">Today</h1>
          <div className="flex items-center gap-2 text-xs text-gray-900">
            {completedTasks.length ? (
              <>
                <span className="size-4 inline-flex items-center justify-center rounded-full border border-gray-900">
                  <Check size={10} />
                </span>
                {completedTasks.length === 1
                  ? `${completedTasks.length} task`
                  : `${completedTasks.length} tasks`}
              </>
            ) : (
              "No task completed"
            )}
          </div>
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <TodayCards />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
