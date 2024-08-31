"use client";

import { LogoIcon } from "@/components/icons/logo";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <LogoIcon className="size-24" />
      <h1 className="font-bold text-5xl">404</h1>
      Page not found.
      <Button onClick={() => router.back()} icon={<IoArrowBackOutline />}>
        Go back
      </Button>
    </div>
  );
}
