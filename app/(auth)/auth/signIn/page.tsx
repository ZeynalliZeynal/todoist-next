import { FcGoogle } from "react-icons/fc";
import type { Metadata } from "next";
import { signInAction } from "@/app/_lib/auth/actions";
import FormButton from "@/app/_components/form-button";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";
import SignInForm from "@/app/(auth)/auth/signIn/sign-in-form";

export const metadata: Metadata = {
  title: "Log in",
};

const Page = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-10">
        <h1 className="text-[2rem] font-bold">Log in</h1>
        <div className="space-y-4 w-full">
          <form
            action={async () => {
              "use server";
              await signInAction("google");
            }}
          >
            <FormButton icon={<FcGoogle className="size-5" />}>
              Google
            </FormButton>
          </form>

          <form
            action={async () => {
              "use server";
              await signInAction("github");
            }}
          >
            <FormButton icon={<IoLogoGithub className="size-5" />}>
              Github
            </FormButton>
          </form>
        </div>
        <SignInForm />
        <div className="space-y-4 text-xs">
          <p>
            By continuing with Google, Apple, or Email, you agree to Todoist’s
            Terms of Service and Privacy Policy.
          </p>
          <p className="text-center">
            Don’t have an account?{" "}
            <Link href="/auth/signUp" className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
