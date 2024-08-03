import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/_styles/globals.css';
import Header from './_layout/header/Header';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    template: '%s | Todoist',
    default: 'Todoist | A To-Do List to Organize Your Work & Life',
  },
  description:
    'Todoist is the productivity tool you need to get work and life organized. Collect tasks, organize projects, and plan your day.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-background-100 text-gray-1000 flex flex-col antialiased min-h-screen`}
      >
        <Header />
        <div className='flex-1 grid'>
          <main className='w-full'>{children}</main>
        </div>
      </body>
    </html>
  );
}
