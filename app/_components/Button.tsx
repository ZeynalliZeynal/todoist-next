import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "link";
  href?: string;
  size?: "lg" | "md" | "sm";
  icon?: ReactNode;
  primary?: true;
  onClick?: () => void;
}

const Button = ({
  children,
  type = "button",
  size = "md",
  href = "/",
  icon = null,
  primary,
  onClick,
}: ButtonProps) => {
  if (type === "link")
    return (
      <Link
        href={href}
        className={`font-medium border ${
          primary
            ? "text-gray-1000 border-gray-alpha-400 bg-background-100 hover:bg-gray-alpha-200"
            : "text-background-100 border-gray-200 bg-gray-1000 hover:bg-button-bg-hover"
        } ${size === "md" ? "px-3 rounded-lg h-8" : size === "lg" ? "px-3.5 rounded-full h-12" : ""}`}
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
      } ${size === "md" ? "px-3 rounded-lg h-8" : size === "lg" ? "px-3.5 rounded-full h-12" : ""}`}
      onClick={onClick}
    >
      {icon} <span className="px-2">{children}</span>
    </button>
  );
};

export default Button;
