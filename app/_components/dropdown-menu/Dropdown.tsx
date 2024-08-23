"use client";

import { useOutsideClick } from "@/app/_hooks/useOutsideClick";
import React, {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { clsx } from "clsx";
import { motion } from "framer-motion";

type RectType = Record<
  "top" | "height" | "left" | "right" | "width" | "bottom",
  number
>;

interface Dropdown {
  current: string;
  open: (name: string) => void;
  close: () => void;
  isAnimating: boolean;
  buttonRect: any;
  getButtonRect: (rect: RectType) => void;
}

const DropdownContext = createContext<Dropdown | null>(null);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("Dropdown cannot be used outside the provider");
  return context;
};

export const Dropdown = ({ children }: { children: ReactNode }) => {
  const [current, setCurrent] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [buttonRect, setButtonRect] = useState<RectType | null>(null);

  const open = (name: string) => {
    document.body.style.overflowX = "hidden";
    setCurrent(name);
    setIsAnimating(false);
  };

  const close = useCallback(() => {
    document.body.style.overflowX = "auto";
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setCurrent("");
    }, 300);
  }, []);

  const getButtonRect = (rect: RectType) => {
    setButtonRect(rect);
  };

  return (
    <DropdownContext.Provider
      value={{
        current,
        open,
        isAnimating,
        close,
        getButtonRect,
        buttonRect,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export const DropdownMenu = ({
  name,
  children,
  position = "center",
  sticky = false,
}: {
  children: ReactNode;
  name: string;
  sticky?: boolean;
  position?: "center" | "left" | "right";
}) => {
  const { isAnimating, current, close, buttonRect } = useDropdown();
  const [scroll, setScroll] = useState<number>(0);

  const ref = useOutsideClick(close);
  useEffect(() => {
    const handleScroll = () => {
      !sticky ? setScroll(scrollY) : setScroll(0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  if (current !== name) return null;

  return createPortal(
    <motion.div
      ref={ref}
      className={clsx("fixed z-[500]")}
      animate={
        !isAnimating
          ? {
              x: position === "center" ? ["-50%", "-50%"] : undefined,
              y: ["-2rem", 0],
              opacity: [0, 1],
            }
          : {
              x: position === "center" ? ["-50%", "-50%"] : undefined,
              y: [0, "-2rem"],
              opacity: [1, 0],
            }
      }
      style={{
        top: buttonRect.height + 20 + buttonRect.top - scroll + "px",
        left:
          position === "center"
            ? buttonRect.left + buttonRect.width / 2 + "px"
            : position === "left"
              ? buttonRect.left + "px"
              : undefined,
      }}
    >
      {children}
    </motion.div>,
    document.body,
  );
};

export const DropdownToggle = ({
  children,
  name,
}: {
  children: ReactElement;
  name: string;
}) => {
  const { current, open, close, getButtonRect } = useDropdown();
  const ref = useRef<HTMLButtonElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    current !== name || current === "" ? open(name) : close();
    const rect = e.currentTarget.getBoundingClientRect();
    getButtonRect(rect);
  };

  return cloneElement(children, { onClick: handleClick, ref });
};
