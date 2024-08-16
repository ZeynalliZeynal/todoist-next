import Button from "@/app/_components/Button";
import { FcGoogle } from "react-icons/fc";
import { FacebookIcon } from "@/app/_components/icons/brand-icons";
import { IoLogoGithub } from "react-icons/io5";
import type { Metadata } from "next";
import InputLarge from "@/app/_components/form-components/Input";

export const metadata: Metadata = {
  title: "Login",
};

const Page = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-10">
        <h1 className="text-[2rem] font-bold">Log in</h1>
        <div className="space-y-4 w-full">
          <Button size="lg" full primary icon={<FcGoogle className="size-5" />}>
            Continue with Google
          </Button>
          <Button
            size="lg"
            full
            primary
            icon={<FacebookIcon className="size-5" />}
          >
            Continue with Facebook
          </Button>
          <Button
            size="lg"
            full
            primary
            icon={<IoLogoGithub className="size-5" />}
          >
            Continue with Github
          </Button>
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
