"use client";

import {
  DeviceAlternate,
  Moon,
  Sun,
} from "@/app/_components/icons/geist-icons";
import { useModeSwitcher } from "@/app/_context/mode-switcher-context";
import { clsx } from "clsx";

const buttons = [
  {
    icon: <DeviceAlternate />,
    mode: "device",
  },
  {
    icon: <Sun />,
    mode: "light",
  },
  {
    icon: <Moon />,
    mode: "dark",
  },
];

export default function ModeSwitcher() {
  const { mode, setMode } = useModeSwitcher();

  return (
    <div className="flex items-center h-8 rounded-full border bg-background-100">
      {buttons.map((button) => (
        <button
          key={button.mode}
          className={clsx("size-8 rounded-full hover:text-foreground", {
            "text-foreground border": mode === button.mode,
          })}
          onClick={() => {
            setMode(button.mode);
          }}
        >
          {button.icon}
        </button>
      ))}
    </div>
  );
}
