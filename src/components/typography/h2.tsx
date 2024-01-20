import React from "react";

import { cn } from "@/lib/utils";

export type H2Props = React.HTMLAttributes<HTMLHeadingElement>;

const H2 = React.forwardRef<HTMLHeadingElement, H2Props>(({ className, ...props }, ref) => {
  const Comp = "h2";

  return (
    <Comp
      ref={ref}
      className={cn(
        "scroll-m-20 self-start border-b pb-2 text-2xl font-semibold tracking-tight text-brand-300 first:mt-0  lg:text-3xl",
        className,
      )}
      {...props}
    />
  );
});

H2.displayName = "H2";

export { H2 };
