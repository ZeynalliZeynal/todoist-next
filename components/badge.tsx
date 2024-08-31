import { clsx } from "clsx";
import { cloneElement, ReactElement, ReactNode } from "react";

export default function Badge({
  size = "sm",
  icon,
  bg,
  color,
  children,
}: {
  size?: "sm" | "md" | "lg";
  icon?: ReactElement;
  color: string;
  bg: string;
  children: ReactNode;
}) {
  return (
    <span
      className={clsx(
        "rounded-full inline-flex items-center justify-center gap-1.5 select-none",
        {
          "h-5 px-1.5 text-[10px]": size === "sm",
          "h-6 px-2.5 text-xs": size === "md",
          "h-8 px-3 text-sm": size === "lg",
        },
      )}
      style={{
        backgroundColor: `var(--ds-${bg})`,
        color: `var(--ds-${color})`,
      }}
    >
      {icon &&
        cloneElement(icon, {
          className: clsx({
            "size-4": size === "lg",
            "size-3.5": size === "md",
            "size-3": size === "sm",
          }),
        })}
      {children}
    </span>
  );
}
