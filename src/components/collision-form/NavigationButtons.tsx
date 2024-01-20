import Link from "next/link";

import { Button } from "../ui/button";

interface NavigationButtonsProps {
  nextLabel: string;
  backLabel?: string | null;
  onBackHref?: string | null;
}

export default function NavigationButtons({
  backLabel,
  nextLabel,
  onBackHref,
}: NavigationButtonsProps) {
  return (
    <div className="flex flex-col items-center justify-between space-y-4 pb-10 md:flex-row md:space-y-0">
      {onBackHref ? (
        <Button
          asChild
          className="w-full border-brand-200 text-brand-400 hover:text-brand-300 md:w-auto"
          size="lg"
          type="button"
          variant="outline"
        >
          <Link href={onBackHref}> {backLabel}</Link>
        </Button>
      ) : null}

      <Button className="ml-auto w-full md:w-auto" size="lg" type="submit">
        {nextLabel}
      </Button>
    </div>
  );
}
