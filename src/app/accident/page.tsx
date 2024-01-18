import AccidentForm from "@/components/AccidentForm";

export default function AccidentInfoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-brand-300 lg:text-5xl">
        Accident Info
      </h1>

      <AccidentForm />
    </main>
  );
}
