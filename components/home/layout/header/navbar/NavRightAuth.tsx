import Button from "@/components/button";
import { getUser } from "@/data/user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserDropdown from "@/components/home/layout/header/navbar/UserDropdown";
import UserImage from "@/components/user-image";

const NavRightAuth = async () => {
  const user = await getUser();
  const isAdmin = user?.role === "ADMIN";

  if (user)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="size-[30px] rounded-full hover:opacity-90 overflow-hidden">
          <UserImage image={user.image} name={user.name} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <UserDropdown isAdmin={isAdmin} name={user.name} email={user.email} />
        </DropdownMenuContent>
      </DropdownMenu>
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
