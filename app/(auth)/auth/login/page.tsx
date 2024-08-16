import Button from "@/app/_components/Button";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import type { Metadata } from "next";
import InputLarge from "@/app/_components/form-components/Input";
import { signInAction } from "@/app/_lib/auth/actions";

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
            <Button
              size="lg"
              full
              primary
              icon={<FcGoogle className="size-5" />}
            >
              Continue with Google
            </Button>
          </form>

          <form
            action={async () => {
              "use server";
              await signInAction("github");
            }}
          >
            <Button
              size="lg"
              full
              primary
              icon={<IoLogoGithub className="size-5" />}
            >
              Continue with Github
            </Button>
          </form>
        </div>
        <form action="/auth/login" className="space-y-4" method="post">
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
      </div>
    </div>
  );
};

export default Page;
