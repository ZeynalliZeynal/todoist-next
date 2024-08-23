"use client";

import { ReactNode } from "react";
import { useSideBar } from "@/app/_context/sidebar-context";

export default function MainWrapper({ children }: { children: ReactNode }) {
  const { active, setActive, sideBarRect } = useSideBar();

  return (
    <main
      className="transition-all duration-500 overflow-hidden"
      style={{
        width: active ? `calc(100% - ${sideBarRect?.width}px)` : "100%",
      }}
    >
      {children}
    </main>
  );
}
