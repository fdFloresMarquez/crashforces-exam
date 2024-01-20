"use client";

import type * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { collisionFormSchema } from "@/types/collisionForm";
import { useCollisionFormStore } from "@/stores/useCollisionFormStore";

import { FormFieldItem } from "./FormFieldItem";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import NavigationButtons from "./collision-form/NavigationButtons";

interface CollisionFormProps {
  step: 1 | 2 | 3;
}

export default function CollisionForm({ step }: CollisionFormProps) {
  const router = useRouter();
  const { stepOne, stepThree, stepTwo, setData } = useCollisionFormStore();

  const form = useForm<z.infer<typeof collisionFormSchema>>({
    resolver: zodResolver(collisionFormSchema),
    defaultValues:
      step === 1
        ? { ...stepOne, partyId: "party111315car1", porder: 1 }
        : step === 2
          ? { ...stepTwo, partyId: "party111315car2", porder: 2 }
          : { ...stepThree, partyId: "party111315car3", porder: 3 },
  });

  function onSubmit(values: z.infer<typeof collisionFormSchema>) {
    // eslint-disable-next-line no-console
    console.log(values);

    setData({ step: step, data: values });
    router.push(navigation.onNextHref);
  }

  const navigation = {
    nextLabel:
      step === 1
        ? "Continue to Vehicle 2"
        : step === 2
          ? "Continue to Vehicle 1"
          : "Confirm & Continue",
    backLabel: step === 1 ? null : step === 2 ? "Back to Vehicle 3" : "Back to Vehicle 2",
    onBackHref:
      step === 1
        ? null
        : step === 2
          ? "/form-2-json/collision/vehicle-three"
          : "/form-2-json/collision/vehicle-two",
    onNextHref:
      step === 1
        ? "/form-2-json/collision/vehicle-two"
        : step === 2
          ? "/form-2-json/collision/vehicle-one"
          : "/form-2-json/collision/result",
  } as const;

  return (
    <Form {...form}>
      <form className="w-full space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <ol className="my-2 ml-2 list-decimal md:my-6 md:ml-6  [&>li]:mt-4">
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
                      <SelectItem value="Jee2019Ren10003">Jee 2019 Ren</SelectItem>
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
                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
                  <FormFieldItem
                    control={form.control}
                    formRegister={form.register("vehicleInformation.year", { valueAsNumber: true })}
                    label="Year"
                    name="vehicleInformation.year"
                    orientation="vertical"
                    placeholder="Enter the year"
                    type="number"
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
          <li className="marker:font-bold">
            <Label className="font-bold">Passengers</Label>

            <Card className="mt-5">
              <CardContent className="pt-6">
                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
                  <FormFieldItem
                    control={form.control}
                    formRegister={form.register("menNumber", { valueAsNumber: true })}
                    label="Men"
                    name="menNumber"
                    orientation="vertical"
                    placeholder="0"
                    type="number"
                  />

                  <FormFieldItem
                    control={form.control}
                    formRegister={form.register("womenNumber", { valueAsNumber: true })}
                    label="Women"
                    name="womenNumber"
                    orientation="vertical"
                    placeholder="0"
                    type="number"
                  />

                  <FormFieldItem
                    control={form.control}
                    formRegister={form.register("children04", { valueAsNumber: true })}
                    label="Children 0-5"
                    name="children04"
                    orientation="vertical"
                    placeholder="0"
                    type="number"
                  />

                  <FormFieldItem
                    control={form.control}
                    formRegister={form.register("children510", { valueAsNumber: true })}
                    label="Children 5-10"
                    name="children510"
                    orientation="vertical"
                    placeholder="0"
                    type="number"
                  />

                  <FormFieldItem
                    control={form.control}
                    formRegister={form.register("children1015", { valueAsNumber: true })}
                    label="Children 10-15"
                    name="children1015"
                    orientation="vertical"
                    placeholder="0"
                    type="number"
                  />
                </div>
              </CardContent>
            </Card>
          </li>
          <li className="marker:font-bold">
            <FormFieldItem
              control={form.control}
              description="Payload in the weight of any additional items in the vehicle"
              formRegister={form.register("payload", { valueAsNumber: true })}
              label="Additional Payload"
              name="payload"
              orientation="horizontal"
              placeholder="Enter weight (in pounds)"
              type="number"
            />
          </li>
        </ol>

        <NavigationButtons
          backLabel={navigation.backLabel}
          nextLabel={navigation.nextLabel}
          onBackHref={navigation.onBackHref}
        />
      </form>
    </Form>
  );
}
