import Image from "next/image";

import CollisionForm from "@/components/CollisionForm";
import { H2 } from "@/components/typography/h2";
import { H1 } from "@/components/typography";
import { Progress } from "@/components/ui/progress";

export default function CollisionPage() {
  return (
    <main className="container flex min-h-screen flex-col items-center space-y-10 md:p-16">
      <Progress value={66} />

      <H1>Party Information</H1>

      <Image alt="Collision Image" height={600} src="/3-car-collision-v2.png" width={600} />

      <H2>Information for Vehicle 2</H2>

      <CollisionForm step={2} />
    </main>
  );
}
