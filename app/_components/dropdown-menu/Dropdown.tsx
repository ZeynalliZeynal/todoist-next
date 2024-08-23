"use client";

import { useOutsideClick } from "@/app/_hooks/useOutsideClick";
import React, {
  cloneElement,
  createContext,
  Dispatch,
  forwardRef,
  ReactElement,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
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
  setButtonRect: Dispatch<SetStateAction<RectType | null>>;
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

  return (
    <DropdownContext.Provider
      value={{
        current,
        open,
        isAnimating,
        close,
        setButtonRect,
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
  sticky = false,
  position = "center",
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
              y: ["-1rem", 0],
              opacity: [0, 1],
            }
          : {
              x: position === "center" ? ["-50%", "-50%"] : undefined,
              y: [0, "-1rem"],
              opacity: [1, 0],
            }
      }
      style={{
        top: buttonRect.height + 16 + buttonRect.top - scroll + "px",
        left:
          position === "center"
            ? buttonRect.left + buttonRect.width / 2 + "px"
            : position === "left"
              ? buttonRect.left + "px"
              : undefined,
        right:
          position === "right"
            ? window.innerWidth - buttonRect.width - buttonRect.left + "px"
            : undefined,
      }}
    >
      {children}
    </motion.div>,
    document.body,
  );
};

export const DropdownToggle = forwardRef(
  ({ children, name }: { children: ReactElement; name: string }, ref) => {
    const { current, open, close, setButtonRect, buttonRect } = useDropdown();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      current !== name || current === "" ? open(name) : close();
      const rect = e.currentTarget.getBoundingClientRect();
      setButtonRect(rect);
      console.log(rect);
    };

    return cloneElement(children, { onClick: handleClick, ref });
  },
);
