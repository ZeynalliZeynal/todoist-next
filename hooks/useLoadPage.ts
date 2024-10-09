"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useLoadPage = () => {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const routeEventStart = () => {
      setIsPageLoading(true);
    };
    const routeEventEnd = () => {
      setIsPageLoading(false);
    };

    router.events.on("routeChangeStart", routeEventStart);
    router.events.on("routeChangeComplete", routeEventEnd);
    router.events.on("routeChangeError", routeEventEnd);

    return () => {
      router.events.off("routeChangeStart", routeEventStart);
      router.events.off("routeChangeComplete", routeEventEnd);
      router.events.off("routeChangeError", routeEventEnd);
    };
  }, []);

  return isPageLoading;
};
