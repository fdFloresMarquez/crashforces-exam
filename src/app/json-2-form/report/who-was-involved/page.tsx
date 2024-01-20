import Link from "next/link";

import api from "@/api";
import PartyTableList from "@/components/party-table/PartyTableList";
import { H1 } from "@/components/typography";
import { Button } from "@/components/ui/button";

export default async function WhoWasInvolvedPage() {
  const report = await api.fetchReport();
  const partiesInvolved = report.collisionList
    .map((collision) => [collision.bullet, collision.target]) // map to get bullets and targets
    .flat() // flatten the array
    .filter((value, index, self) => index === self.findIndex((item) => item.id === value.id)); // filter to remove duplicates

  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-10 md:container md:p-24 ">
      <H1>Who was involved</H1>

      <PartyTableList partiesInvolved={partiesInvolved} />

      <Button asChild className="self-start" variant="link">
        <Link href="/json-2-form/report">Back</Link>
      </Button>
    </main>
  );
}
