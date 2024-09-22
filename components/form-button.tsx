"use client";

import Button from "@/components/ui/button";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

const FormButton = ({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) => {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' size='lg' full primary icon={icon} disabled={pending}>
      Continue with {children}
    </Button>
  );
};

export default FormButton;
