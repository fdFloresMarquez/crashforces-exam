import Image from "next/image";

import CollisionForm from "@/components/CollisionForm";
import { H1, H2 } from "@/components/typography";
import { Progress } from "@/components/ui/progress";

export default function CollisionPage() {
  return (
    <main className="container flex min-h-screen flex-col items-center space-y-10 md:p-16">
      <Progress value={100} />

      <H1>Party Information</H1>

      <Image alt="Collision Image" height={600} src="/3-car-collision-v1.png" width={600} />

      <H2>Information for Vehicle 1</H2>

      <CollisionForm step={3} />
    </main>
  );
}
