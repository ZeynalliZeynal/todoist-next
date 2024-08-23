import { cloneElement, ReactElement } from "react";
import { clsx } from "clsx";

export default function IconButton({
  children,
  onClick,
  className,
  type = "button",
}: {
  children: ReactElement;
  onClick: () => void;
  className?: string;
  type?: "submit" | "reset" | "button";
}) {
  return (
    <button
      type={type}
      className={clsx(
        "hover:bg-gray-alpha-200 text-foreground rounded-md size-8 border",
        className,
      )}
      onClick={onClick}
    >
      {cloneElement(children, { className: "size-5" })}
    </button>
  );
}
