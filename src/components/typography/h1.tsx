import React from "react";

import { cn } from "@/lib/utils";

export type H1Props = React.HTMLAttributes<HTMLHeadingElement>;

const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(({ className, ...props }, ref) => {
  const Comp = "h1";

  return (
    <Comp
      ref={ref}
      className={cn(
        (className =
          "scroll-m-20 text-4xl font-extrabold tracking-tight text-brand-300 lg:text-5xl"),
        className,
      )}
      {...props}
    />
  );
});

H1.displayName = "H1";

export { H1 };
