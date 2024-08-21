import Button from "@/app/_components/button";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "@/app/_components/dropdown-menu/Dropdown";
import UserDropdown from "@/app/_layout/header/navbar/UserDropdown";
import { auth } from "@/app/_lib/auth/auth";
import UserImage from "@/app/_components/user-image";

const NavRightAuth = async () => {
  const session = await auth();
  const isAdmin = session?.user.role === "ADMIN";

  if (session)
    return (
      <Dropdown>
        <DropdownToggle name="user-dropdown">
          <button className="size-[30px] rounded-full hover:opacity-90 overflow-hidden">
            <UserImage image={session.user.image} name={session.user.name} />
          </button>
        </DropdownToggle>
        <DropdownMenu name="user-dropdown" sticky>
          <UserDropdown
            name={session.user?.name}
            email={session.user?.email}
            isAdmin={isAdmin}
          />
        </DropdownMenu>
      </Dropdown>
    );
  return (
    <div className="flex items-center gap-2">
      <Button primary type="link" href="/auth/login">
        Login
      </Button>
      <Button type="link" href="/auth/register">
        Start for free
      </Button>
    </div>
  );
};

export default NavRightAuth;
