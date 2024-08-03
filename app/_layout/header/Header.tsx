import Container from '@/app/_components/Container';
import Logo from '@/app/_components/icons/Logo';
import NavList from './navbar/NavList';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='h-16 mb-16 sticky top-0 shadow-header-border bg-background-100'>
      <Container>
        <div className='flex justify-between w-full'>
          <Link href='/'>
            <Logo />
          </Link>
          <NavList />
        </div>
      </Container>
    </header>
  );
};

export default Header;
