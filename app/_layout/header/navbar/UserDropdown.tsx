import Link from "next/link";
import { logOutSocial } from "@/app/_lib/auth/actions";
import NavLogoutButton from "@/app/_layout/header/navbar/NavLogoutButton";

const UserDropdown = ({
  name,
  email,
}: {
  name?: string | null;
  email?: string | null;
}) => {
  return (
    <div className="text-sm p-2 rounded-lg border text-gray-900 bg-background-100">
      <div className="px-2 py-3 flex flex-col gap-1">
        <div className="font-semibold text-gray-1000">{name}</div>
        <div>{email}</div>
      </div>
      <Link
        href="/dashboard"
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
      <form action={logOutSocial}>
        <NavLogoutButton />
      </form>
    </div>
  );
};

export default UserDropdown;
