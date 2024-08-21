import Link from "next/link";
import NavLogoutButton from "@/app/_layout/header/navbar/NavLogoutButton";
import { ChartBarMiddle } from "@/app/_components/icons/geist-icons";
import { signOut } from "@/app/_lib/auth/auth";

const UserDropdown = ({
  name,
  email,
  isAdmin,
}: {
  name?: string | null;
  email?: string | null;
  isAdmin: boolean;
}) => {
  return (
    <div className="text-sm p-2 rounded-lg border text-gray-900 bg-background-100">
      <div className="px-2 py-3 flex flex-col gap-1">
        <div className="font-semibold text-gray-1000">{name}</div>
        <div>{email}</div>
      </div>
      <Link
        href="/account/today"
        className="h-10 justify-start px-2 rounded-lg hover:bg-gray-alpha-100 w-full hover:text-gray-1000"
      >
        Dashboard
      </Link>
      <Link
        href="/account/settings"
        className="h-10 justify-start px-2 rounded-lg hover:bg-gray-alpha-100 w-full hover:text-gray-1000"
      >
        Account settings
      </Link>
      <div className="py-2 px-2">
        <div className="w-full h-0.5 bg-gray-alpha-400" />
      </div>
      {isAdmin && (
        <Link
          href="/admin/dashboard"
          className="h-10 justify-between px-2 rounded-lg hover:bg-gray-alpha-100 w-full hover:text-foreground"
        >
          Admin Dashboard <ChartBarMiddle size={14} />
        </Link>
      )}
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <NavLogoutButton />
      </form>
    </div>
  );
};

export default UserDropdown;
