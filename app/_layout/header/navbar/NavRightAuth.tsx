import Button from "@/app/_components/button";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "@/app/_components/dropdown-menu/Dropdown";
import UserDropdown from "@/app/_layout/header/navbar/UserDropdown";
import UserImage from "@/app/_components/user-image";
import { getUser } from "@/app/_data/user";

const NavRightAuth = async () => {
  const user = await getUser();
  const isAdmin = user?.role === "ADMIN";

  if (user)
    return (
      <Dropdown>
        <DropdownToggle name="user-dropdown">
          <button className="size-[30px] rounded-full hover:opacity-90 overflow-hidden">
            <UserImage image={user.image} name={user.name} />
          </button>
        </DropdownToggle>
        <DropdownMenu name="user-dropdown" sticky>
          <UserDropdown name={user.name} email={user.email} isAdmin={isAdmin} />
        </DropdownMenu>
      </Dropdown>
    );
  return (
    <div className="flex items-center gap-2">
      <Button size="sm" primary href="/auth/login">
        Login
      </Button>
      <Button size="sm" href="/auth/register">
        Start for free
      </Button>
    </div>
  );
};

export default NavRightAuth;
