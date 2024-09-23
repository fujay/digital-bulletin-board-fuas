"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/UI/input";
import { Button } from "@/components/UI/button";
import { XIcon } from "lucide-react";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import { ComponentPropsWithoutRef } from "react";

type InputLabelProps = {
  fieldTitle: string;
  nameInSchema: string;
  placeholder?: string;
} & ComponentPropsWithoutRef<"input">;

export function InputLabel({
  fieldTitle,
  nameInSchema,
  placeholder,
}: InputLabelProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base" htmlFor={fieldTitle}>
            {fieldTitle}
          </FormLabel>

          <div className="flex items-center gap-2 w-full max-w-xs">
            <div className="w-full max-w-xs flex items-center rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
              <FormControl>
                <Input
                  {...field}
                  id={fieldTitle}
                  className="w-full max-w-xs"
                  placeholder={placeholder || fieldTitle}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
            </div>
            {
              <Button
                variant="ghost"
                size="icon"
                aria-label="Clear"
                title="Clear"
                className="rounded-mdl grid place-content-center hover:bg-transparent text-red-500 hover:text-rose-400"
                onClick={(e) => {
                  e.preventDefault();
                  form.setValue(nameInSchema, "", { shouldDirty: true });
                }}
              >
                <XIcon className="h-6 w-6 p-0 m-0" />
              </Button>
            }
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
