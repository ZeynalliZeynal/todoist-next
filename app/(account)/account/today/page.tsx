import { auth } from "@/app/_lib/auth/auth";

const Page = async () => {
  const session = await auth();

  return (
    <div>
      Welcome, {session?.user.name} 👋. This is your dashboard. Have fun 🎉!
    </div>
  );
};

export default Page;
