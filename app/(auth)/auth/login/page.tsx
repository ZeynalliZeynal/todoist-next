import type { Metadata } from "next";
import AuthPage from "@/app/(auth)/auth/auth-page";

export const metadata: Metadata = {
  title: "Log in",
};

const Page = () => {
  return <AuthPage type="login" />;
};

export default Page;
