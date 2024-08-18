import { clsx } from "clsx";
import { ReactNode } from "react";
import {
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from "@/app/_components/icons/status-icons";

const Message = ({
  type,
  size = "md",
  outlined = false,
  children,
}: {
  type: "success" | "error" | "warning" | "info";
  size?: "md" | "lg";
  outlined?: boolean;
  children: ReactNode;
}) => {
  return (
    <span
      className={clsx("inline-flex items-center w-full gap-3 text-sm px-3", {
        "text-blue-900 bg-blue-200": type === "success" && !outlined,
        "text-red-900 bg-red-200": type === "error" && !outlined,
        "text-amber-900 bg-amber-200": type === "warning" && !outlined,
        "text-gray-alpha-900 bg-gray-alpha-200": type === "info" && !outlined,
        "text-blue-900 border border-blue-900": type === "success" && outlined,
        "text-red-900 border border-red-900": type === "error" && outlined,
        "text-amber-900 border border-amber-900":
          type === "warning" && outlined,
        "text-gray-alpha-900 border border-gray-alpha-900":
          type === "info" && outlined,
        "h-10 rounded-md": size === "md",
        "h-[50px] rounded-[10px]": size === "lg",
      })}
    >
      {type === "success" ? (
        <SuccessIcon />
      ) : type === "warning" ? (
        <WarningIcon />
      ) : type === "error" ? (
        <ErrorIcon />
      ) : (
        <InfoIcon />
      )}{" "}
      {children}
    </span>
  );
};

export default Message;
