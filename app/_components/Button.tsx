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
        } ${size === "md" ? "px-3 h-8" : size === "lg" ? "px-3.5 h-12" : ""} ${full ? "w-full" : "w-fit"} rounded-${rounded}`}
      >
        {icon} <span className="px-2">{children}</span>
      </Link>
    );

  return (
    <button
      className={`font-medium border ${
        primary
          ? "text-gray-1000 border-gray-alpha-400 bg-background-100 hover:bg-gray-alpha-200"
          : "text-background-100 border-gray-200 bg-gray-1000 hover:bg-button-bg-hover"
      } ${size === "md" ? "px-3 h-8" : size === "lg" ? "px-3.5 h-12" : ""} ${full ? "w-full" : "w-fit"} rounded-${rounded}`}
      onClick={onClick}
    >
      {icon} <span className="px-2">{children}</span>
    </button>
  );
};

export default Button;
