import { z } from "zod";

export const collisionFormSchema = z.object({
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
  vehicleId: z.string(),
  partyId: z.string(),
  porder: z.number({ invalid_type_error: "Required" }),
  vehicleInformation: z.object({
    year: z.coerce.number({ invalid_type_error: "Required" }).int().gte(1000).lte(9999),
    make: z.string(),
    model: z.string(),
    subModel: z.string(),
    engine: z.string(),
  }),
});

export type CollisionFormStepOne = z.infer<typeof collisionFormSchema>;

export type CollisionFormStepTwo = z.infer<typeof collisionFormSchema>;

export type CollisionFormStepThree = z.infer<typeof collisionFormSchema>;
