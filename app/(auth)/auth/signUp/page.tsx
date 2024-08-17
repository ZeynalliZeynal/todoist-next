import Button from "@/app/_components/button";
import { FcGoogle } from "react-icons/fc";
import type { Metadata } from "next";
import InputLarge from "@/app/_components/form-components/input";
import { signInAction } from "@/app/_lib/auth/actions";
import FormButton from "@/app/_components/form-button";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log in",
};

const Page = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-10">
        <h1 className="text-[2rem] font-bold">Sign up</h1>
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
        <form action="/api/auth/signUp" className="space-y-4">
          <InputLarge
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <InputLarge
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Button size="lg" full>
            Login
          </Button>
        </form>
        <div className="space-y-4 text-xs">
          <p>
            By continuing with Google, Apple, or Email, you agree to Todoist’s
            Terms of Service and Privacy Policy.
          </p>
          <p className="text-center">
            Already signed up?{" "}
            <Link href="/auth/signIn" className="underline">
              Go to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
