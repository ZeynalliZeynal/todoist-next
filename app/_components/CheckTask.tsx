import { Check } from "@/app/_components/icons/geist-icons";

export default function CheckTask() {
  return (
    <button className="size-5 rounded-full border group active:scale-110">
      <span className="group-hover:scale-100 scale-0 transition-all duration-100">
        <Check size={12} />
      </span>
    </button>
  );
}
