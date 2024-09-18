import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import NavRightAuth from "@/components/home/layout/header/navbar/nav-right-auth";

const className =
  "px-3 py-2 hover:bg-gray-400 hover:text-gray-1000 rounded-full";

const NavList = async () => {
  return (
    <nav className='text-gray-900 leading-none flex items-center'>
      <ul>
        <li>
          <Link href='/public' className={className}>
            Features
          </Link>
        </li>
        <li>
          <Link href='/public' className={className}>
            For Teams
          </Link>
        </li>
        <li>
          <button className={`${className} gap-1 group`}>
            Resources <BiChevronDown />
          </button>
        </li>
        {/*<DropdownList />*/}
        <li>
          <Link href='/public' className={className}>
            Pricing
          </Link>
        </li>
      </ul>
      <div className='w-0.5 h-2/3 mx-3 bg-gray-400' />
      <NavRightAuth />
    </nav>
  );
};

export default NavList;
