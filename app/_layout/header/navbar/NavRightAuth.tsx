import Button from "@/app/_components/button";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "@/app/_components/dropdown-menu/Dropdown";
import { generateRandomGradient } from "@/app/_utils/generateRandomBg";
import UserDropdown from "@/app/_layout/header/navbar/UserDropdown";
import { auth } from "@/app/_lib/auth/auth";

const NavRightAuth = async () => {
  const session = await auth();
  // const isAdmin = session?.user.role === "ADMIN";
  const isAdmin = true;

  if (session)
    return (
      <Dropdown>
        <DropdownToggle name="user-dropdown">
          <button
            className="size-[30px] rounded-full hover:opacity-90 overflow-hidden"
            style={
              !session.user?.image
                ? { background: generateRandomGradient() }
                : undefined
            }
          >
            {session.user?.image && (
              <img
                src={session.user.image}
                alt={session.user.name || "user"}
                width={30}
                height={30}
              />
            )}
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
