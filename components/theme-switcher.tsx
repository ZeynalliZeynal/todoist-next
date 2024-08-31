"use client";

import { DeviceAlternate, Moon, Sun } from "@/components/icons/geist-icons";
import {
  Themes,
  useThemeSwitcher,
} from "@/app/_context/theme-switcher-context";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttons: Array<{ icon: ReactNode; theme: Themes }> = [
  {
    icon: <DeviceAlternate size={14} />,
    theme: "device",
  },
  {
    icon: <Sun size={14} />,
    theme: "light",
  },
  {
    icon: <Moon size={14} />,
    theme: "dark",
  },
];

export default function ThemeSwitcher({ size = 32 }: { size?: number }) {
  const { theme, changeTheme } = useThemeSwitcher();

  return (
    <div
      className="inline-flex items-center rounded-full border bg-background-100"
      style={{
        height: size,
      }}
    >
      <button
        className={cn("rounded-full hover:text-foreground", {
          "text-foreground border": theme === "device",
        })}
        style={{
          width: size,
          height: size,
        }}
        onClick={() => {
          changeTheme("device");
        }}
      >
        <DeviceAlternate size={size / 2} />
      </button>
      <button
        className={cn("rounded-full hover:text-foreground", {
          "text-foreground border": theme === "light",
        })}
        style={{
          width: size,
          height: size,
        }}
        onClick={() => {
          changeTheme("light");
        }}
      >
        <Sun size={size / 2} />
      </button>
      <button
        className={cn("rounded-full hover:text-foreground", {
          "text-foreground border": theme === "dark",
        })}
        style={{
          width: size,
          height: size,
        }}
        onClick={() => {
          changeTheme("dark");
        }}
      >
        <Moon size={size / 2} />
      </button>
    </div>
  );
}
