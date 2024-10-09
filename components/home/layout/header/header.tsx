import Container from "@/components/container";
import Logo from "@/components/icons/logo";
import NavList from "@/components/home/layout/header/navbar/nav-list";
import Link from "next/link";
import NavRightAuth from "@/components/home/layout/header/navbar/nav-right-auth";

const Header = () => {
  return (
    <header className="h-16 z-50 text-sm mb-16 sticky top-0 border-b backdrop-blur-sm bg-background-100/80 backdrop-saturate-200">
      <Container>
        <div className="flex justify-between w-full">
          <Link href="/">
            <Logo />
          </Link>
          <NavList>
            <NavRightAuth />
          </NavList>
        </div>
      </Container>
    </header>
  );
};

export default Header;
