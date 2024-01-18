"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { DatePickerField } from "./DatePickerField";

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
      <form className="container w-8/12 space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="numberOfVehicles"
          render={() => (
            <FormItem orientation="horizontal">
              <FormLabel className="inline-block w-full font-bold">
                Number of Vehicles Involved
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="1"
                  type="number"
                  {...form.register("numberOfVehicles", { valueAsNumber: true })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DatePickerField
          disabledTodayForward
          control={form.control}
          label="Day of incident"
          name="dayOf"
        />

        <FormField
          control={form.control}
          name="timeOfIncident"
          render={({ field }) => (
            <FormItem orientation="horizontal">
              <FormLabel className="inline-block w-full font-bold">Time of Incident</FormLabel>
              <FormControl>
                <Input placeholder="1" type="time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="longitude"
          render={() => (
            <FormItem orientation="horizontal">
              <FormLabel className="inline-block w-full font-bold">Longitude</FormLabel>
              <FormControl>
                <Input
                  placeholder="2.1111111"
                  type="number"
                  {...form.register("longitude", { valueAsNumber: true })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="latitude"
          render={() => (
            <FormItem orientation="horizontal">
              <FormLabel className="inline-block w-full font-bold">Latitude</FormLabel>
              <FormControl>
                <Input
                  placeholder="2.1111111"
                  type="number"
                  {...form.register("latitude", { valueAsNumber: true })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="judicialDistrict"
          render={({ field }) => (
            <FormItem orientation="horizontal">
              <FormLabel className="inline-block w-full font-bold">Judicial District</FormLabel>
              <FormControl>
                <Input placeholder="Enter judicial district" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem orientation="horizontal">
              <FormLabel className="inline-block w-full font-bold">Street</FormLabel>
              <FormControl>
                <Input placeholder="Enter street" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem orientation="horizontal">
              <FormLabel className="inline-block w-full font-bold">City</FormLabel>
              <FormControl>
                <Input placeholder="Enter city" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="zip"
          render={() => (
            <FormItem orientation="horizontal">
              <FormLabel className="inline-block w-full font-bold">Zip Code</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter zip code"
                  type="number"
                  {...form.register("zip", { valueAsNumber: true })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="weather"
          render={({ field }) => (
            <FormItem orientation="horizontal">
              <FormLabel className="inline-block w-full font-bold">Weather</FormLabel>
              <FormControl>
                <Input placeholder="Enter weather" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lightConditions"
          render={({ field }) => (
            <FormItem orientation="horizontal">
              <FormLabel className="inline-block w-full font-bold">Lighting</FormLabel>
              <FormControl>
                <Input placeholder="Enter lighting" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="roadConditions"
          render={({ field }) => (
            <FormItem orientation="horizontal">
              <FormLabel className="inline-block w-full font-bold">Road Surface</FormLabel>
              <FormControl>
                <Input placeholder="Enter road surface" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="traffic"
          render={({ field }) => (
            <FormItem orientation="horizontal">
              <FormLabel className="inline-block w-full font-bold">Traffic</FormLabel>
              <FormControl>
                <Input placeholder="Enter traffic" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="trafficType"
          render={({ field }) => (
            <FormItem orientation="horizontal">
              <FormLabel className="inline-block w-full font-bold">Traffic Signals</FormLabel>
              <FormControl>
                <Input placeholder="Enter traffic Type" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="roadType"
          render={({ field }) => (
            <FormItem orientation="horizontal">
              <FormLabel className="inline-block w-full font-bold">Road Work</FormLabel>
              <FormControl>
                <Input placeholder="Enter road work" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
