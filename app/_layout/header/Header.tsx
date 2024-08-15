import Container from "@/app/_components/Container";
import Logo from "@/app/_components/icons/Logo";
import NavList from "./navbar/NavList";
import Link from "next/link";

const Header = () => {
  const isLightMode = true;

  return (
    <header
      className={`h-16 z-50 text-sm mb-16 sticky top-0 shadow-header-border backdrop-blur-lg ${isLightMode ? "bg-header-white/75" : "bg-header-black/75"}`}
    >
      <Container>
        <div className="flex justify-between w-full">
          <Link href="/">
            <Logo />
          </Link>
          <NavList />
        </div>
      </Container>
    </header>
  );
};

export default Header;
