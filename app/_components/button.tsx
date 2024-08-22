import Link from "next/link";
import { ReactNode } from "react";

interface Button {
  children: ReactNode;
  type?: "button" | "link";
  href?: string;
  size?: "lg" | "md" | "sm";
  rounded?: string;
  full?: boolean;
  icon?: ReactNode;
  primary?: true;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  type = "button",
  size = "md",
  full = false,
  href = "/",
  icon = null,
  primary,
  onClick,
  disabled,
  rounded = "lg",
}: Button) => {
  if (type === "link")
    return (
      <Link
        href={href}
        className={`font-medium border ${
          primary
            ? "text-gray-1000 border-gray-alpha-400 bg-background-100 hover:bg-gray-alpha-200"
            : "text-background-100 border-gray-200 bg-gray-1000 hover:bg-button-bg-hover"
        } ${size === "md" ? "px-2.5 h-10 text-sm" : size === "lg" ? "px-3.5 h-12" : "text-sm h-8 px-1.5"} ${full ? "w-full" : "w-fit"} rounded-${rounded}`}
      >
        {icon} <span className="px-1.5">{children}</span>
      </Link>
    );

  return (
    <button
      className={`font-medium border disabled:opacity-80 ${
        primary
          ? "text-gray-1000 border-gray-alpha-400 bg-background-100 hover:bg-gray-alpha-200 disabled:bg-gray-100 disabled:text-gray-700 disabled:border-gray-400"
          : "text-background-100 border-gray-200 bg-gray-1000 hover:bg-button-bg-hover disabled:bg-gray-1000 disabled:text-gray-700 disabled:border-gray-900"
      } ${size === "md" ? "px-2.5 h-10 text-sm" : size === "lg" ? "px-3.5 h-12" : "text-sm h-8 px-1.5"} ${full ? "w-full" : "w-fit"} rounded-${rounded}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon} <span className="px-1.5">{children}</span>
    </button>
  );
};

export default Button;
