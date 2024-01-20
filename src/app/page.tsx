import { MainNavigationMenu } from "@/components/MainNavigationMenu";
import { H1 } from "@/components/typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-28 p-24">
      <H1>Crash Forces App</H1>

      <div>
        <MainNavigationMenu />
      </div>
    </main>
  );
}
