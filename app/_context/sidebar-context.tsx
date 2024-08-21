"use client";

import {
  createContext,
  Dispatch,
  LegacyRef,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface BoundingClientRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface SideBar {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  sidebarRef: LegacyRef<HTMLElement>;
  sideBarRect: BoundingClientRect | undefined;
}

const SidebarContext = createContext<SideBar | null>(null);

export const useSideBar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("Context is outside of the provider");
  return context;
};

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<boolean>(false);
  const [sideBarRect, setSideBarRect] = useState<
    BoundingClientRect | undefined
  >(undefined);
  const sidebarRef = useRef<HTMLElement | null>(null);

  console.log(active);

  useEffect(() => {
    if (sidebarRef.current) {
      const rect = sidebarRef.current.getBoundingClientRect();
      setSideBarRect(rect);
    }
  }, [active]);

  const calculateWidth = () => {};
  return (
    <SidebarContext.Provider
      value={{
        active,
        setActive,
        sidebarRef,
        sideBarRect,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
