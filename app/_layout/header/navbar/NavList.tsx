import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "@/app/_components/dropdown-menu/Dropdown";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import DropdownList from "./DropdownList";
import NavRightAuth from "@/app/_layout/header/navbar/NavRightAuth";

const className =
  "px-3 py-2 hover:bg-gray-400 hover:text-gray-1000 rounded-full";

const NavList = async () => {
  return (
    <nav className="text-gray-900 leading-none flex items-center">
      <ul>
        <li>
          <Link href="/" className={className}>
            Features
          </Link>
        </li>
        <li>
          <Link href="/" className={className}>
            For Teams
          </Link>
        </li>
        <Dropdown>
          <DropdownToggle name="test">
            <li>
              <button className={`${className} gap-1 group`}>
                Resources <BiChevronDown />
              </button>
            </li>
          </DropdownToggle>
          <DropdownMenu sticky name="test">
            <DropdownList />
          </DropdownMenu>
        </Dropdown>
        <li>
          <Link href="/" className={className}>
            Pricing
          </Link>
        </li>
      </ul>
      <div className="w-0.5 h-2/3 mx-3 bg-gray-400" />
      <NavRightAuth />
    </nav>
  );
};

export default NavList;
