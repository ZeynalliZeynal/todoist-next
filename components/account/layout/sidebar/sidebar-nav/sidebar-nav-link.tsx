"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export default function SidebarNavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "rounded-[var(--rounded)] hover:text-foreground px-2 h-10 hover:bg-[var(--hover-bg)] w-full justify-start gap-1.5",
          {
            "bg-gray-100 text-foreground": pathname === href,
          },
        )}
      >
        {children}
      </Link>
    </li>
  );
}
