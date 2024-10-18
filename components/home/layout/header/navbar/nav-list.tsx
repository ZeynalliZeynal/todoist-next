"use client";

import Link from "next/link";
import { CSSProperties, MouseEventHandler, ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/utils/consts";
import { ChevronDown } from "lucide-react";
import { tasks } from "@/lib/actions/testActions";

const className = "px-3 py-2 relative z-[2] transition";

const NavList = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState("");
  const [hoverStyle, setHoverStyle] = useState<CSSProperties | undefined>(
    undefined
  );

  const handleMouseEnter: MouseEventHandler<HTMLElement> = (event) => {
    const parentUl = event.currentTarget.closest('[role="group"]');
    if (!parentUl) return;
    const elIndex = Number(event.currentTarget.dataset.index);
    const parentRect = parentUl.getBoundingClientRect();
    const rect = event.currentTarget.getBoundingClientRect();

    setActive(event.currentTarget.ariaLabel as string);
    setHoverStyle({
      width: event.currentTarget.clientWidth,
      height: event.currentTarget.clientHeight,
      left: rect.left - parentRect.left,
      background: "hsla(var(--ds-gray-200))",
    });
  };

  const handleMouseLeave: MouseEventHandler<HTMLElement> = (event) => {
    setActive("");
    setHoverStyle(undefined);
  };

  return (
    <nav className='text-gray-900 leading-none flex items-center'>
      <ul role='group' className='relative'>
        <div
          className={cn(
            "rounded-full absolute z-[1] transition-all duration-300"
          )}
          style={hoverStyle}
        />
        {NAV_LINKS.map(({ href, content, label, hasPopup }, index) => (
          <li role='listitem' key={index}>
            {href ? (
              <Link
                href={href as string}
                data-hover={label === active ? "" : undefined}
                aria-label={label}
                className={cn(
                  { "text-foreground": active === label },
                  className
                )}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {content}
              </Link>
            ) : (
              <button
                data-hovered={label === active ? "" : undefined}
                aria-label={label}
                className={cn(
                  "gap-1",
                  { "text-foreground": active === label },
                  className
                )}
                onClick={async () => {
                  const data = await tasks();
                  console.log(
                    new Intl.DateTimeFormat("en", {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    }).format(new Date(data.requestedAt as Date))
                  );
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {content} {hasPopup && <ChevronDown size={14} />}
              </button>
            )}
          </li>
        ))}
      </ul>
      <div className='w-0.5 h-2/3 mx-3 bg-gray-400' />
      {children}
    </nav>
  );
};

export default NavList;
