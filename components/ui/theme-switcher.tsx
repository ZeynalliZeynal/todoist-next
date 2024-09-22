"use client";

import { DeviceAlternate, Moon, Sun } from "@/components/icons/geist-icons";
import { useThemeSwitcher } from "@/context/theme-switcher-context";
import { cn } from "@/lib/utils";

export default function ThemeSwitcher({ size = 32 }: { size?: number }) {
  const { theme, changeTheme } = useThemeSwitcher();

  return (
    <div
      className='inline-flex items-center rounded-full border bg-background-100'
      style={{
        height: size,
      }}
    >
      <button
        className={cn("rounded-full hover:text-foreground transition-none", {
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
        className={cn("rounded-full hover:text-foreground transition-none", {
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
        className={cn("rounded-full hover:text-foreground transition-none", {
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
