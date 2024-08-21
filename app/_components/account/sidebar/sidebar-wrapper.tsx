"use client";

import React, { ReactNode } from "react";
import { useSideBar } from "@/app/_context/sidebar-context";

export default function SidebarWrapper({ children }: { children: ReactNode }) {
  const { active, sidebarRef, sideBarRect } = useSideBar();

  return (
    <aside
      ref={sidebarRef}
      className="w-[210px] absolute top-0 transition-all duration-500 bg-background-100 border-r h-screen rounded-md overflow-hidden [--hover-bg:var(--ds-gray-alpha-200)]"
      style={{
        left: active ? 0 : `-${sideBarRect?.width}px`,
      }}
    >
      {children}
    </aside>
  );
}
