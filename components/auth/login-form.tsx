"use client";

import Button from "@/components/button";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/lib/auth/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import Message from "@/components/form-components/message";
import { logInCredentials } from "@/lib/auth/actions";
import { useEffect, useState, useTransition } from "react";
import { z } from "zod";
import Spinner from "@/components/spinner";
import { redirect, useSearchParams } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import Input from "../form-components/input";

const LoginForm = () => {
  const [responseStatus, setResponseStatus] = useState<{
    error?: string;
    success?: string;
  }>({
    error: "",
    success: "",
  });
  const [isPending, startTransition] = useTransition();

  const params = useSearchParams();

  const { handleSubmit, register, formState, reset } = useForm<
    z.infer<typeof LoginSchema>
  >({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const showMessage = (error?: string, success?: string) => {
    setResponseStatus({ error, success });
    setTimeout(() => setResponseStatus({ error: "", success: "" }), 5000);
  };

  useEffect(() => {
    if (params.get("error") === "OAuthAccountNotLinked")
      showMessage("Email is already in use");
  }, [params]);

  const { errors } = formState;

  const onSubmit = (formData: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      const res = await logInCredentials(formData);

      if (res?.error) {
        showMessage(res.error);
      } else redirect(DEFAULT_LOGIN_REDIRECT);
      reset();
    });
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <Input
        placeholder='Email address'
        register={register}
        type='email'
        value='email'
        errors={errors}
        disabled={isPending}
      />
      <Input
        placeholder='Password'
        register={register}
        type='password'
        value='password'
        errors={errors}
        disabled={isPending}
      />
      {responseStatus.error && (
        <Message type='error' outlined>
          {responseStatus.error}
        </Message>
      )}{" "}
      {responseStatus.success && (
        <Message type='success'>{responseStatus.success}</Message>
      )}{" "}
      <Button
        type='submit'
        size='lg'
        full
        disabled={isPending}
        icon={isPending ? <Spinner /> : undefined}
      >
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
