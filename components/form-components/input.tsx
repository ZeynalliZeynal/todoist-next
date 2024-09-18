import { HTMLInputTypeAttribute, ReactNode } from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import Message from "./message";
import { cn } from "@/lib/utils";

interface Input<T extends Record<string, unknown>> {
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  value: Path<T>;
  errors?: FieldErrors;
  disabled?: boolean;
  register: UseFormRegister<T>;
  size?: "sm" | "md" | "lg";
}

const Input = <T extends Record<string, unknown>>({
  type = "text",
  placeholder,
  errors,
  value,
  disabled,
  register,
  size = "md",
}: Input<T>) => {
  return (
    <div className='flex flex-col gap-2'>
      <div
        className={cn(
          "flex rounded-lg border overflow-hidden text-foreground font-semibold focus-within:shadow-input transition",
          {
            "h-8": size === "sm",
            "h-10": size === "md",
            "h-12": size === "lg",
          }
        )}
      >
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className='px-3 transition-all placeholder-gray-600 size-full'
          {...register(value)}
        />
      </div>
      {errors && errors[value]?.message && (
        <Message type='error' outlined>
          {errors[value].message as string}
        </Message>
      )}
    </div>
  );
};

export default Input;
