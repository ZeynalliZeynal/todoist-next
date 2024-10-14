import type { Metadata } from "next";
import AuthPage from "@/components/auth/auth-page";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Sign up",
};

const Page = () => {
  return (
    <Suspense>
      <AuthPage type="register" />
    </Suspense>
  );
};

export default Page;
