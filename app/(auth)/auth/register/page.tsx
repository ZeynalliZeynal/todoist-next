import type { Metadata } from "next";
import AuthPage from "@/app/(auth)/auth/auth-page";

export const metadata: Metadata = {
  title: "Sign up",
};

const Page = () => {
  return <AuthPage type="register" />;
};

export default Page;
