import AccidentForm from "@/components/AccidentForm";
import { H1 } from "@/components/typography";

export default function AccidentInfoPage() {
  return (
    <main className="container flex min-h-screen flex-col items-center space-y-10 md:p-16">
      <H1>Accident Info</H1>

      <AccidentForm />
    </main>
  );
}
