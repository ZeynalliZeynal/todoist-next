import Link from "next/link";
import NavLogoutButton from "@/components/home/layout/header/navbar/nav-logout-button";
import {
  ArrowUpRightSmall,
  ChartBarMiddle,
} from "@/components/icons/geist-icons";
import ThemeSwitcher from "@/components/ui/theme-switcher";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

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
    <>
      <DropdownMenuLabel>
        <div className='font-semibold text-gray-1000'>{name}</div>
        <div>{email}</div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem asChild>
          <Link href='/account/today'>
            Dashboard <ArrowUpRightSmall size={14} />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href='/account/settings'>
            Account settings <ArrowUpRightSmall size={14} />
          </Link>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <div className='h-8 px-2 flex justify-between items-center'>
        Theme:
        <ThemeSwitcher size={24} />
      </div>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        {isAdmin && (
          <DropdownMenuItem asChild>
            <Link href='/admin/dashboard'>
              Admin Dashboard <ChartBarMiddle size={14} />
            </Link>
          </DropdownMenuItem>
        )}
        <NavLogoutButton />
      </DropdownMenuGroup>
    </>
  );
};

export default UserDropdown;
