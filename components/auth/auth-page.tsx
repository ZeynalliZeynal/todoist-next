import FormButton from "@/components/form-button";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";
import LoginForm from "@/components/auth/login-form";
import RegisterForm from "@/components/auth/register-form";
import { signIn } from "@/lib/auth/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const AuthPage = ({ type }: { type: "login" | "register" }) => {
  return (
    <div className='grid grid-cols-1'>
      <div className='flex flex-col gap-10'>
        <h1 className='text-[2rem] font-bold'>
          {type === "login" ? "Log in" : "Sign up"}
        </h1>
        <div className='space-y-4 w-full'>
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: DEFAULT_LOGIN_REDIRECT });
            }}
          >
            <FormButton icon={<FcGoogle className='size-5' />}>
              Google
            </FormButton>
          </form>

          <form
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: DEFAULT_LOGIN_REDIRECT });
            }}
          >
            <FormButton icon={<IoLogoGithub className='size-5' />}>
              Github
            </FormButton>
          </form>
        </div>
        {type === "login" ? <LoginForm /> : <RegisterForm />}
        <div className='space-y-4 text-xs text-center'>
          <p>
            By continuing with Google, Apple, or Email, you agree to Todoist’s
            Terms of Service and Privacy Policy.
          </p>
          <p className='text-center'>
            {type === "login" ? (
              <>
                Don’t have an account?{" "}
                <Link href='/auth/register' className='underline'>
                  Register now
                </Link>
              </>
            ) : (
              <>
                Already logged in?{" "}
                <Link href='/auth/login' className='underline'>
                  Go to log in
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
