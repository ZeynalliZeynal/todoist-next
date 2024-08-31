import TodayCards from "@/components/account/today/cards";

const Page = async () => {
  return (
    <div className="px-8 py-4">
      <div className="flex flex-col">
        <h1 className="text-2xl text-foreground font-semibold">Today</h1>
        <div className="flex">
          <TodayCards />
        </div>
      </div>
    </div>
  );
};

export default Page;
