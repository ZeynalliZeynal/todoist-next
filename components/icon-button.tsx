import { cn } from "@/lib/utils";
import { ReactElement } from "react";

export default function IconButton({
  children,
  onClick,
  className,
  type = "button",
}: {
  children: ReactElement;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "reset" | "button";
}) {
  return (
    <button
      type={type}
      className={cn(
        "hover:bg-gray-200 text-gray-900 hover:text-foreground rounded-md size-8 border",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

IconButton.variant =
  "hover:bg-gray-200 text-gray-900 hover:text-foreground rounded-md size-8 border";
