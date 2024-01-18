import type { Control, FieldPath, FieldValues, UseFormRegisterReturn } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
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
  // form register is for when you need to transform a string into a number
  formRegister?: UseFormRegisterReturn<TName>;
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
  formRegister,
  orientation = "horizontal",
}: FormFieldItemProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem orientation={orientation}>
          <FormLabel className="inline-block w-full font-bold">{label}</FormLabel>

          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              {...(!!formRegister ? formRegister : field)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
