import type { Metadata } from "next";
import AuthPage from "@/components/auth/auth-page";

export const metadata: Metadata = {
  title: "Sign up",
};

const Page = () => {
  return <AuthPage type="register" />;
};

export default Page;
