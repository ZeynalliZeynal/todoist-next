import { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export default function Grid({ rows = 1, columns = 12 }) {
  return (
    <section
      data-grid
      className="border w-full p-0 grid"
      style={
        {
          "--grid-rows": rows,
          "--grid-columns": columns,
          "--height":
            "calc(var(--width) / var(--grid-columns)* var(--grid-rows))",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        } as CSSProperties
      }
    >
      {Array.from({ length: columns }, (_, index) => (
        <div
          key={index}
          className={cn("size-full", {
            "border-r": index !== columns - 1,
          })}
          style={{
            gridColumn: "span 1",
          }}
        />
      ))}
    </section>
  );
}
