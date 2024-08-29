"use client";

import {
  DeviceAlternate,
  Moon,
  Sun,
} from "@/app/_components/icons/geist-icons";
import {
  Themes,
  useThemeSwitcher,
} from "@/app/_context/theme-switcher-context";
import { clsx } from "clsx";
import { ReactNode } from "react";

const buttons: Array<{ icon: ReactNode; theme: Themes }> = [
  {
    icon: <DeviceAlternate />,
    theme: "device",
  },
  {
    icon: <Sun />,
    theme: "light",
  },
  {
    icon: <Moon />,
    theme: "dark",
  },
];

export default function ThemeSwitcher() {
  const { theme, changeTheme } = useThemeSwitcher();

  return (
    <div className="inline-flex items-center h-8 rounded-full border bg-background-100">
      {buttons.map((button) => (
        <button
          key={button.theme}
          className={clsx("size-8 rounded-full hover:text-foreground", {
            "text-foreground border": theme === button.theme,
          })}
          onClick={() => {
            changeTheme(button.theme);
          }}
        >
          {button.icon}
        </button>
      ))}
    </div>
  );
}
