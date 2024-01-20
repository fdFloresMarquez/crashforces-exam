import { Loader2 } from "lucide-react";

import { H1 } from "@/components/typography";

export default function loading() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-10 md:container md:p-24 ">
      <H1>Who was involved</H1>

      <div className="flex flex-row items-center text-brand-300">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </div>
    </main>
  );
}
