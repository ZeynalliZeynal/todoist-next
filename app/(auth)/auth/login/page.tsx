import type { Metadata } from "next";
import AuthPage from "@/components/auth/auth-page";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Log in",
};

const Page = () => {
  return (
    <Suspense>
      <AuthPage type='login' />
    </Suspense>
  );
};

export default Page;
