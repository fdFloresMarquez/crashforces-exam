"use client";

import type { Control, FieldValues, Path } from "react-hook-form";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

interface DatePickerProps<Values extends FieldValues> {
  control: Control<Values>;
  label: string;
  name: string;
  placeholder?: string;
  disabledTodayForward?: boolean;
}

export function DatePickerField<Values extends FieldValues>({
  control,
  label,
  name,
  placeholder = "Pick a date",
  disabledTodayForward = false,
}: DatePickerProps<Values>) {
  return (
    <FormField
      control={control}
      name={name as Path<Values>}
      render={({ field }) => (
        <FormItem orientation="horizontal">
          <FormLabel className="inline-block w-full font-bold">{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !field.value && "text-gray-200",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {field.value ? format(field.value, "PPP") : <span>{placeholder}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                initialFocus
                disabled={
                  disabledTodayForward
                    ? (date) => date > new Date() || date < new Date("1900-01-01")
                    : false
                }
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
