import { MainNavigationMenu } from "@/components/MainNavigationMenu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-28 p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-brand-300 lg:text-5xl">
        Car accidents app
      </h1>

      <div>
        <MainNavigationMenu />
      </div>
    </main>
  );
}
