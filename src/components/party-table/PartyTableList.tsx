import type { PartyInvolved } from "@/types/report";

import React, { Fragment } from "react";
import Image from "next/image";

import { H2 } from "../typography";

import PartyTableItem from "./PartyTableItem";

interface PartyTableListProps {
  partiesInvolved: PartyInvolved[];
}

export default function PartyTableList({ partiesInvolved }: PartyTableListProps) {
  return (
    <>
      {partiesInvolved.map((partyInvolved, index) => (
        <Fragment key={partyInvolved.id}>
          <H2>Party {index + 1}</H2>
          <div className="my-6 flex w-full flex-col justify-between gap-10 overflow-y-auto md:flex-row">
            <PartyTableItem partyInvolved={partyInvolved} />

            <div className="flex w-full flex-col items-center justify-between gap-5">
              <figure>
                <Image alt="Toyota Car" height={264} src={chooseCarPicture(index)} width={768} />
                <figcaption className="text-center font-bold">Photo of Vehicle</figcaption>
              </figure>
              <figure>
                <Image
                  alt="Toyota Broken Car Picture"
                  height={500}
                  src={chooseCrashCarPicture(index)}
                  width={500}
                />
                <figcaption className="text-center font-bold">Photo of Vehicle: Crashed</figcaption>
              </figure>
            </div>
          </div>
        </Fragment>
      ))}
    </>
  );
}

function chooseCarPicture(index: number) {
  switch (index) {
    case 1:
      return "/toyota-car.webp";
    case 2:
      return "/bmw-car1.webp";
    default:
      return "/bmw-car2.webp";
  }
}
function chooseCrashCarPicture(index: number) {
  switch (index) {
    case 1:
      return "/toyota-broken.webp";
    case 2:
      return "/car-crashed-1.webp";
    default:
      return "/car-crashed-2.webp";
  }
}
