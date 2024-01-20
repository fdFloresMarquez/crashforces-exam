import type {
  CollisionFormStepOne,
  CollisionFormStepThree,
  CollisionFormStepTwo,
} from "@/types/collisionForm";

import { create } from "zustand";

const stepVariant = {
  1: "stepOne",
  2: "stepTwo",
  3: "stepThree",
};

type SetDataType =
  | { step: 1; data: CollisionFormStepThree }
  | { step: 2; data: CollisionFormStepTwo }
  | { step: 3; data: CollisionFormStepOne };

export const useCollisionFormStore = create<{
  stepOne: CollisionFormStepThree | null;
  stepTwo: CollisionFormStepTwo | null;
  stepThree: CollisionFormStepOne | null;
  setData: ({ step, data }: SetDataType) => void;
}>((set) => ({
  stepOne: null,
  stepTwo: null,
  stepThree: null,
  setData: ({ step, data }) =>
    set((state) => ({
      ...state,
      [stepVariant[step]]: data,
    })),
}));
