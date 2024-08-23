import Link from "next/link";
import { ReactNode } from "react";

interface Button {
  children: ReactNode;
  href?: string;
  size?: "lg" | "md" | "sm";
  rounded?: string;
  full?: boolean;
  icon?: ReactNode;
  primary?: true;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  size = "md",
  full = false,
  href,
  icon = null,
  primary,
  onClick,
  disabled,
  rounded = "lg",
  type = "button",
}: Button) => {
  if (href)
    return (
      <Link
        href={href}
        className={`font-medium border select-none ${
          primary
            ? "text-gray-1000 border-gray-alpha-400 bg-background-100 hover:bg-gray-200"
            : "text-background-100 border-gray-200 bg-gray-1000 hover:bg-button-bg-hover"
        } ${size === "md" ? "px-2.5 h-10 text-sm" : size === "lg" ? "px-3.5 h-12" : "text-sm h-8 px-1.5"} ${full ? "w-full" : "w-fit"} rounded-${rounded}`}
      >
        {icon} <span className="px-1.5">{children}</span>
      </Link>
    );
  else
    return (
      <button
        type={type}
        className={`font-medium border select-none ${
          primary
            ? "text-gray-900 border-gray-alpha-400 bg-background-100 hover:text-foreground hover:bg-gray-alpha-200 disabled:bg-gray-100 disabled:text-gray-700 disabled:border-gray-400"
            : "text-gray-500 border-gray-200 bg-gray-1000 hover:text-background-100 hover:bg-button-bg-hover disabled:bg-button-bg-disabled disabled:text-gray-700 disabled:border-gray-400"
        } ${size === "md" ? "px-2.5 h-10 text-sm" : size === "lg" ? "px-3.5 h-12" : "text-sm h-8 px-1.5"} ${full ? "w-full" : "w-fit"} rounded-${rounded}`}
        onClick={onClick}
        disabled={disabled}
      >
        {icon} <span className="px-1.5">{children}</span>
      </button>
    );
};

export default Button;
