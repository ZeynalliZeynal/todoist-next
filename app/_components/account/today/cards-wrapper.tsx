"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

const MAX_HEIGHT = 400;
const CardsWrapper = ({ children }: { children: ReactNode }) => {
  const [height, setHeight] = useState(MAX_HEIGHT);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const vh = window.innerHeight;
        const newHeight = Math.min(MAX_HEIGHT, vh - 132);
        setHeight(newHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <div className="flex flex-col" style={{ maxHeight: height }} ref={ref}>
      {children}
    </div>
  );
};

export default CardsWrapper;
