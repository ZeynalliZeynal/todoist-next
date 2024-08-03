import Link from 'next/link';
import { ReactNode } from 'react';

const Button = ({
  children,
  type = 'button',
  href = '/',
  primary,
  onClick,
}: {
  children: ReactNode;
  type?: 'button' | 'link';
  href?: string;
  primary?: true;
  onClick?: () => void;
}) => {
  const className = primary
    ? 'font-medium px-3 h-8 border text-gray-1000 border-gray-alpha-400 rounded-md bg-background-100 hover:bg-gray-alpha-200'
    : 'font-medium px-3 h-8 border text-background-100 border-gray-200 rounded-md bg-gray-1000 hover:bg-button-bg-hover';
  if (type === 'link')
    return (
      <Link href={href} className={className}>
        <span className='px-2'>{children}</span>
      </Link>
    );

  return (
    <button className={className} onClick={onClick}>
      <span className='px-2'>{children}</span>
    </button>
  );
};

export default Button;
