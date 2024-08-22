"use client";

import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick";
import { IoClose } from "react-icons/io5";
import { clsx } from "clsx";

import { motion } from "framer-motion";

interface Dialog {
  current: string;
  open: (name: string) => void;
  close: () => void;
  isAnimating: boolean;
}

const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) throw new Error("Dropdown cannot be used outside the provider");
  return context;
};

const DialogContext = createContext<Dialog | null>(null);

export function Dialog({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

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
    <DialogContext.Provider
      value={{
        current,
        open,
        close,
        isAnimating,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export const DialogWrapper = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => {
  const { current, close, isAnimating } = useDialog();
  const ref = useOutsideClick(close);

  if (current !== name) return null;
  return createPortal(
    <motion.div
      className={clsx(
        "fixed z-[999] flex items-center justify-center p-8 inset-0 bg-black/50 backdrop-blur-sm",
      )}
      animate={!isAnimating ? { opacity: [0, 1] } : { opacity: [1, 0] }}
    >
      <motion.div
        ref={ref}
        className={clsx(
          "flex rounded-lg border bg-background-100 max-h-[calc(100vh-2*2rem)] overflow-auto",
        )}
        animate={
          !isAnimating
            ? {
                y: ["-2rem", 0],
                opacity: [0, 1],
              }
            : {
                y: [0, "-2rem"],
                opacity: [1, 0],
              }
        }
        transition={{
          type: "spring",
          damping: 9,
        }}
      >
        {children}
      </motion.div>
    </motion.div>,
    document.body,
  );
};

export const DialogOpen = ({
  name,
  children,
}: {
  name: string;
  children: ReactElement;
}) => {
  const { open } = useDialog();
  return cloneElement(children, { onClick: () => open(name) });
};

export const DialogClose = ({ children }: { children: ReactNode }) => {
  const { close } = useDialog();
  return (
    <button
      className="size-6 text-gray-900 hover:text-foreground"
      onClick={close}
    >
      <IoClose />
    </button>
  );
};
