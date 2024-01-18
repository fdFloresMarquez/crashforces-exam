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

import { FormFieldItem } from "./FormFieldItem";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";

const collisionFormOne = z.object({
  name: z.string(),
  age: z.coerce.number({ invalid_type_error: "Required" }),
  gender: z.enum(["female", "male"]),
  drinking: z.enum(["0", "1"]),
  atFault: z.enum(["0", "1"]),
  cellPhoneInUse: z.enum(["0", "1"]),
  menNumber: z.number({ invalid_type_error: "Required" }),
  womenNumber: z.number({ invalid_type_error: "Required" }),
  children04: z.number({ invalid_type_error: "Required" }),
  children510: z.number({ invalid_type_error: "Required" }),
  children1015: z.number({ invalid_type_error: "Required" }),
  payload: z.number({ invalid_type_error: "Required" }),
  recalls: z.string(),
  relevantRecalls: z.string(),
  vehicleId: z.string(),
  accidentId: z.string(),
  partyId: z.string(),
  porder: z.number({ invalid_type_error: "Required" }),
  vehicleInformation: z.object({
    year: z.string().transform((val, ctx) => {
      if (val.length !== 4)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter 4 digits",
        });

      return parseInt(val, 10);
    }),
    make: z.string(),
    model: z.string(),
    subModel: z.string(),
    engine: z.string(),
  }),
});

export default function CollisionFormOne() {
  const form = useForm<z.infer<typeof collisionFormOne>>({
    resolver: zodResolver(collisionFormOne),
  });

  function onSubmit(values: z.infer<typeof collisionFormOne>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    alert(JSON.stringify(values));
  }

  return (
    <Form {...form}>
      <form className="w-full space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <ol className="my-6 ml-6 list-decimal  [&>li]:mt-2">
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              label="Name"
              name="name"
              placeholder="Enter Name"
            />
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              formRegister={form.register("age", { valueAsNumber: true })}
              label="Age"
              name="age"
              placeholder="Enter Age"
              type="number"
            />
          </li>
          <li className="marker:font-bold">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem orientation="horizontal">
                  <FormLabel className="inline-block w-full font-bold">Gender</FormLabel>
                  <Select defaultValue={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </li>
          <li className="marker:font-bold">
            <FormField
              control={form.control}
              name="vehicleId"
              render={({ field }) => (
                <FormItem orientation="horizontal">
                  <FormLabel className="inline-block w-full font-bold">
                    Vehicle Information Number (VIN)
                  </FormLabel>
                  <Select defaultValue={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a vehicle" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="BMW20103SE10088">BMW 2010</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </li>
          <li className="marker:font-bold">
            <FormField
              control={form.control}
              name="drinking"
              render={({ field }) => (
                <FormItem orientation="horizontal">
                  <FormLabel className="inline-block w-full font-bold">Drinking</FormLabel>
                  <Select defaultValue={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          className="placeholder:text-muted-foreground"
                          placeholder="Drinking: Yes/No"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Yes</SelectItem>
                      <SelectItem value="0">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </li>
          <li className="marker:font-bold">
            <FormField
              control={form.control}
              name="atFault"
              render={({ field }) => (
                <FormItem orientation="horizontal">
                  <FormLabel className="inline-block w-full font-bold">At Fault</FormLabel>
                  <Select defaultValue={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          className="placeholder:text-muted-foreground"
                          placeholder="At Fault: Yes/No"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Yes</SelectItem>
                      <SelectItem value="0">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </li>
          <li className="marker:font-bold">
            <FormField
              control={form.control}
              name="cellPhoneInUse"
              render={({ field }) => (
                <FormItem orientation="horizontal">
                  <FormLabel className="inline-block w-full font-bold">Cell Phone in Use</FormLabel>
                  <Select defaultValue={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          className="placeholder:text-muted-foreground"
                          placeholder="Cell Phone: Yes/No"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Yes</SelectItem>
                      <SelectItem value="0">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </li>
          <li className="marker:font-bold">
            <Label className="font-bold">Vehicle Information</Label>

            <Card className="mt-5">
              <CardContent className="pt-6">
                <div className="grid grid-cols-5 space-x-4">
                  <FormFieldItem
                    control={form.control}
                    label="Year"
                    name="vehicleInformation.year"
                    orientation="vertical"
                    placeholder="Enter the year"
                  />
                  <FormField
                    control={form.control}
                    name="vehicleInformation.make"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="inline-block w-full font-bold">Make</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                className="placeholder:text-muted-foreground"
                                placeholder="Select make"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="bmw">BMW</SelectItem>
                            <SelectItem value="ford">Ford</SelectItem>
                            <SelectItem value="toyota">Toyota</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormFieldItem
                    control={form.control}
                    label="Model"
                    name="vehicleInformation.model"
                    orientation="vertical"
                    placeholder="Enter model"
                  />
                  <FormFieldItem
                    control={form.control}
                    label="SubModel"
                    name="vehicleInformation.subModel"
                    orientation="vertical"
                    placeholder="Enter submodel"
                  />
                  <FormFieldItem
                    control={form.control}
                    label="Engine"
                    name="vehicleInformation.engine"
                    orientation="vertical"
                    placeholder="Enter engine"
                  />
                </div>
              </CardContent>
            </Card>
          </li>
        </ol>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
