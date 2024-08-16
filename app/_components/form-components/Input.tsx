import { HTMLInputTypeAttribute } from "react";

interface Input {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  value?: string | number | readonly string[];
  onChange?: () => void;
  required?: boolean;
  disabled?: boolean;
}

const InputLarge = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  disabled,
}: Input) => {
  return (
    <div className="flex rounded-lg border overflow-hidden text-foreground h-12 font-semibold focus-within:shadow-input transition">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="px-3 transition-all placeholder-gray-600 size-full"
      />
    </div>
  );
};

export default InputLarge;
