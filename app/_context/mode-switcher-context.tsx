"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { useLocalStorage } from "@/app/_hooks/useLocalStorage";

export const ModeSwitcherContext = createContext<{
  mode: "device" | "dark" | "light";
  setMode: Dispatch<SetStateAction<string>>;
} | null>(null);

export const useModeSwitcher = () => {
  const context = useContext(ModeSwitcherContext);
  if (!context) throw new Error("Context is outside of the provider");
  return context;
};

export const ModeSwitcher = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useLocalStorage("device", "mode");

  useEffect(() => {
    if (mode === "device") {
      if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        if (!document.documentElement.className.includes("dark-mode"))
          document.documentElement.classList.add("dark-mode");
      } else document.documentElement.classList.remove("dark-mode");
    } else if (mode === "dark") {
      if (!document.documentElement.className.includes("dark-mode"))
        document.documentElement.classList.add("dark-mode");
    } else document.documentElement.classList.remove("dark-mode");
  }, [mode]);

  return (
    <ModeSwitcherContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </ModeSwitcherContext.Provider>
  );
};
