import Container from "@/components/container";
import Logo from "@/components/icons/logo";
import NavList from "@/components/home/layout/header/navbar/NavList";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={`h-16 z-50 text-sm mb-16 sticky top-0 shadow-header-border backdrop-blur-lg bg-header-white/75 dark:bg-header-black/75`}
    >
      <Container>
        <div className="flex justify-between w-full">
          <Link href="/public">
            <Logo />
          </Link>
          <NavList />
        </div>
      </Container>
    </header>
  );
};

export default Header;
