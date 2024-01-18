import Image from "next/image";

import CollisionFormOne from "@/components/CollisionFormOne";

export default function CollisionPage() {
  return (
    <main className="container flex min-h-screen flex-col items-center space-y-10 p-16">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-brand-300 lg:text-5xl">
        Party Information
      </h1>

      <Image alt="Collision Image" height={600} src="/3-car-collision-v1.png" width={600} />

      <h2 className="scroll-m-20 self-start text-2xl font-extrabold tracking-tight text-brand-300 lg:text-3xl">
        Information for Vehicle 1
      </h2>

      <CollisionFormOne />
    </main>
  );
}
