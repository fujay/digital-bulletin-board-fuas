"use client";

import { ComponentPropsWithoutRef } from "react";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};
type FormProps = {
  onSaveAction: (
    previousState: { message: string },
    formData: FormData
  ) => Promise<{ message: string }>;
} & ComponentPropsWithoutRef<"form">;

export default function Form({
  onSaveAction,
  children,
  ...otherProps
}: FormProps) {
  const [state, formAction] = useFormState(onSaveAction, initialState);
  return (
    <form
      className="px-4 rounded mx-auto max-w-3xl w-full my-16 inputs space-y-6"
      action={formAction}
      // onSubmit={handleSubmit}
      {...otherProps}
    >
      {children}
      <span>{state?.message ?? ""}</span>
    </form>
  );
}
