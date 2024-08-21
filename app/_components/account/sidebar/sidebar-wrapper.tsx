"use client";

import React, { ReactNode } from "react";
import { useSideBar } from "@/app/_context/sidebar-context";

export default function SidebarWrapper({ children }: { children: ReactNode }) {
  const { active, sidebarRef, setActive } = useSideBar();

  return (
    <aside
      ref={sidebarRef}
      className="w-[210px] absolute top-0 transition-all duration-500 bg-background-100"
      style={{
        left: active ? 0 : "-100%",
      }}
    >
      {children}
    </aside>
  );
}
