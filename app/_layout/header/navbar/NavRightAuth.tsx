import Button from "@/app/_components/Button";
import { auth } from "@/app/_lib/auth";
import { generateRandomGradient } from "@/app/_utils/generateRandomBg";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "@/app/_components/dropdown-menu/Dropdown";
import UserDropdown from "@/app/_layout/header/navbar/UserDropdown";

const NavRightAuth = async () => {
  const session = await auth();
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
          <UserDropdown name={session.user?.name} email={session.user?.email} />
        </DropdownMenu>
      </Dropdown>
    );
  return (
    <div className="flex items-center gap-2">
      <Button primary type="link" href="/">
        Login
      </Button>
      <Button type="link">Start for free</Button>
    </div>
  );
};

export default NavRightAuth;
