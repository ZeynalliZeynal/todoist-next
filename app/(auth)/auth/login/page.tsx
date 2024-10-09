import type { Metadata } from "next";
import AuthPage from "@/components/auth/auth-page";

export const metadata: Metadata = {
  title: "Log in",
};

const Page = () => {
  return <AuthPage type="login" />;
};

export default Page;
