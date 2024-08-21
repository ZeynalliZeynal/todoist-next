import { cloneElement, ReactElement } from "react";
import { clsx } from "clsx";

export default function IconButton({
  children,
  onClick,
  className,
}: {
  children: ReactElement;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      className={clsx(
        "hover:bg-[var(--hover-bg)] text-foreground rounded-md size-8",
        className,
      )}
      onClick={onClick}
    >
      {cloneElement(children, { className: "size-5" })}
    </button>
  );
}
