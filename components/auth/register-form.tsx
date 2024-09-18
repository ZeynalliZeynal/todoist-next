"use client";

import { useState, useTransition } from "react";
import Button from "@/components/button";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/lib/auth/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import Message from "@/components/form-components/message";
import { z } from "zod";
import { signup } from "@/lib/auth/actions";
import Spinner from "@/components/spinner";
import { redirect } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import Input from "../form-components/input";

const RegisterForm = () => {
  const [responseStatus, setResponseStatus] = useState<{
    error?: string;
    success?: string;
  }>({
    error: "",
    success: "",
  });
  const [isPending, startTransition] = useTransition();
  const { handleSubmit, register, formState, reset } = useForm<
    z.infer<typeof RegisterSchema>
  >({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const { errors } = formState;

  const showMessage = (error?: string, success?: string) => {
    setResponseStatus({ error, success });
    setTimeout(() => setResponseStatus({ error: "", success: "" }), 5000);
  };

  const onSubmit = (formData: z.infer<typeof RegisterSchema>) => {
    startTransition(async () => {
      const res = await signup(formData);
      if (res?.error) {
        showMessage(res.error);
      } else redirect(DEFAULT_LOGIN_REDIRECT);
      reset();
    });
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <Input
        placeholder='Full name'
        register={register}
        value='name'
        errors={errors}
        disabled={isPending}
        size='lg'
      />
      <Input
        placeholder='Email address'
        register={register}
        type='email'
        value='email'
        errors={errors}
        disabled={isPending}
        size='lg'
      />
      <Input
        placeholder='Password'
        register={register}
        type='password'
        value='password'
        errors={errors}
        disabled={isPending}
        size='lg'
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
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
