"use client";

import Button from "@/app/_components/button";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/app/_schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Message from "@/app/_components/form-components/message";
import { logInCredentials } from "@/app/_lib/auth/actions";
import { useState, useTransition } from "react";
import { z } from "zod";

const LoginForm = () => {
  const [responseStatus, setResponseStatus] = useState<{
    error?: string;
    success?: string;
  }>({
    error: "",
    success: "",
  });
  const [isPending, startTransition] = useTransition();
  const { handleSubmit, register, formState } = useForm<
    z.infer<typeof LoginSchema>
  >({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { errors } = formState;

  const onSubmit = (formData: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      const res = await logInCredentials(formData);
      setResponseStatus({ error: res.error, success: res.success });
    });
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col gap-2">
        <div className="flex rounded-lg border overflow-hidden text-foreground h-12 font-semibold focus-within:shadow-input transition">
          <input
            type="email"
            placeholder="Email Address"
            className="px-3 transition-all placeholder-gray-600 size-full"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <Message type="error" outlined>
            {errors.email?.message}
          </Message>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex rounded-lg border overflow-hidden text-foreground h-12 font-semibold focus-within:shadow-input transition">
          <input
            type="password"
            placeholder="Password"
            className="px-3 transition-all placeholder-gray-600 size-full"
            {...register("password")}
          />{" "}
        </div>
        {errors.password && (
          <Message type="error" outlined>
            {errors.password?.message}
          </Message>
        )}
      </div>
      {responseStatus.error && (
        <Message type="error" outlined>
          {responseStatus.error}
        </Message>
      )}{" "}
      {responseStatus.success && (
        <Message type="success">{responseStatus.success}</Message>
      )}{" "}
      <Button size="lg" full>
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
