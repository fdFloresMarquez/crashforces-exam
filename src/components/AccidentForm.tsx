"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import { DatePickerField } from "./DatePickerField";
import { Form } from "./ui/form";
import { FormFieldItem } from "./FormFieldItem";

const accidentFormSchema = z.object({
  dayOf: z.date(),
  street: z
    .string()
    .min(10, {
      message: "Street must have at least 10 characters",
    })
    .max(100),
  city: z.string().min(1).max(100),
  zip: z.number({ invalid_type_error: "Required" }),
  longitude: z.number({ invalid_type_error: "Required" }),
  latitude: z.number({ invalid_type_error: "Required" }),
  weather: z.string().min(1),
  traffic: z.string().min(1),
  trafficType: z.string().min(1),
  roadType: z.string().min(1),
  roadConditions: z.string().min(1),
  lightConditions: z.string().min(1),
  numberOfVehicles: z.number({ invalid_type_error: "Required" }),
  timeOfIncident: z.string(),
  judicialDistrict: z.string(),
});

export default function AccidentForm() {
  const form = useForm<z.infer<typeof accidentFormSchema>>({
    resolver: zodResolver(accidentFormSchema),
  });

  function onSubmit(values: z.infer<typeof accidentFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    alert(JSON.stringify(values));
  }

  return (
    <Form {...form}>
      <form className="container w-full space-y-8 md:w-8/12" onSubmit={form.handleSubmit(onSubmit)}>
        <ol className="my-6 ml-6 list-decimal  [&>li]:mt-2">
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              formRegister={{ ...form.register("numberOfVehicles", { valueAsNumber: true }) }}
              label="Number of Vehicles Involved"
              name="numberOfVehicles"
              placeholder="1"
              type="number"
            />
          </li>

          <li className="marker:font-bold">
            <DatePickerField
              disabledTodayForward
              control={form.control}
              label="Day of incident"
              name="dayOf"
            />
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              label="Time of Incident"
              name="timeOfIncident"
              placeholder="1"
              type="time"
            />
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              formRegister={{ ...form.register("longitude", { valueAsNumber: true }) }}
              label="Longitude"
              name="longitude"
              placeholder="2.1111111"
              type="number"
            />
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              formRegister={{ ...form.register("latitude", { valueAsNumber: true }) }}
              label="Latitude"
              name="latitude"
              placeholder="2.1111111"
              type="number"
            />
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              label="Judicial District"
              name="judicialDistrict"
              placeholder="Enter judicial district"
            />
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              label="Street"
              name="street"
              placeholder="Enter street"
            />
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              label="City"
              name="city"
              placeholder="Enter city"
            />
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              formRegister={form.register("zip", { valueAsNumber: true })}
              label="Zip Code"
              name="zip"
              placeholder="Enter zip code"
              type="number"
            />
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              label="Weather"
              name="weather"
              placeholder="Enter weather"
            />
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              label="Lighting"
              name="lightConditions"
              placeholder="Enter light conditions"
            />
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              label="Road Surface"
              name="roadConditions"
              placeholder="Enter road surface"
            />
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              label="Traffic"
              name="traffic"
              placeholder="Enter traffic"
            />
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              label="Traffic Signals"
              name="trafficType"
              placeholder="Enter traffic signals"
            />
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              label="Road Work"
              name="roadType"
              placeholder="Enter road work"
            />
          </li>
        </ol>

        <Button size="lg" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
