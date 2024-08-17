"use client";

import InputLarge from "@/app/_components/form-components/input";
import Button from "@/app/_components/button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SignInSchema } from "@/app/_schemas";
import { zodResolver } from "@hookform/resolvers/zod";

const SignInForm = () => {
  const { handleSubmit, register } = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <form onSubmit={handleSubmit(() => {})} className="space-y-4">
      <InputLarge
        type="email"
        placeholder="Email Address"
        required
        {...register("email")}
      />
      <InputLarge
        type="password"
        placeholder="Password"
        required
        {...register("password")}
      />
      <Button size="lg" full>
        Login
      </Button>
    </form>
  );
};

export default SignInForm;
