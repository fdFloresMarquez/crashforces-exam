"use client";

import { H1 } from "@/components/typography";
import { useCollisionFormStore } from "@/stores/useCollisionFormStore";

export default function CollisionResultPage() {
  const { stepOne, stepTwo, stepThree } = useCollisionFormStore();

  return (
    <main className="container flex min-h-screen flex-col items-center space-y-10 md:p-16">
      <H1>Party Information result</H1>

      <pre className="mt-8 overflow-x-auto">
        {JSON.stringify(
          { accidentId: "33129-2743", partyList: [stepOne, stepTwo, stepThree] },
          null,
          2,
        )}
      </pre>
    </main>
  );
}
