"use client";

import { Check } from "@/app/_components/icons/geist-icons";

const CheckTask = ({ onCheck }: { onCheck: () => void }) => {
  return (
    <button
      className="size-5 rounded-full border group active:scale-110"
      onClick={onCheck}
    >
      <span className="group-hover:scale-100 scale-0 transition-all duration-100">
        <Check size={12} />
      </span>
    </button>
  );
};

export default CheckTask;
