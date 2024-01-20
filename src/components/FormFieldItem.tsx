import type { Control, FieldPath, FieldValues, UseFormRegisterReturn } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFieldItemProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  control?: Control<TFieldValues> | undefined;
  name: TName;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string | undefined;
  label: string;
  orientation?: "horizontal" | "vertical";
  description?: string;
  // form register is for when you need to transform a string into a number
  formRegister?: UseFormRegisterReturn<TName>;
  required?: boolean;
}

export function FormFieldItem<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  type,
  placeholder,
  label,
  description,
  formRegister,
  orientation = "horizontal",
  required = false,
}: FormFieldItemProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem orientation={orientation}>
          {orientation === "horizontal" && description ? (
            <div className="w-full">
              <FormLabel className="inline-block w-full font-bold">{label}</FormLabel>
              <FormDescription>{description}</FormDescription>
            </div>
          ) : (
            <FormLabel className="inline-block w-full font-bold">{label}</FormLabel>
          )}

          <FormControl>
            <Input
              placeholder={placeholder}
              required={required}
              type={type}
              {...(!!formRegister ? formRegister : field)}
            />
          </FormControl>

          {orientation === "vertical" && description ? (
            <FormDescription>{description}</FormDescription>
          ) : null}

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
