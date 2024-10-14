"use client";

import { Check } from "@/components/icons/geist-icons";

const CheckTask = ({
  disabled,
  onCheck,
}: {
  disabled?: boolean;
  onCheck: () => void;
}) => {
  return (
    <button
      type="button"
      className="size-5 rounded-full border group active:scale-110 disabled:pointer-events-none"
      onClick={onCheck}
      disabled={disabled}
    >
      <span className="group-hover:scale-100 scale-0 transition-all duration-100">
        <Check size={12} />
      </span>
    </button>
  );
};

export default CheckTask;
