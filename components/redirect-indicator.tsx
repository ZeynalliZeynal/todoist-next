"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const RedirectIndicator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleStop = () => setIsLoading(false);

    handleStop();

    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("DOMContentLoaded", handleStop);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("DOMContentLoaded", handleStop);
    };
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return <>loading page</>;
};

export default RedirectIndicator;
