"use client";
import type { LucideIcon, LucideProps } from "lucide-react";

import { cn } from "@/lib/utils";

interface IconProps extends LucideProps {
  icon: LucideIcon;
  isActive?: boolean;
}

export default function Icon({ icon, isActive = false, className, ...props }: IconProps) {
  const Icon = icon;

  return (
    <Icon
      className={cn(
        "h-4 w-4 bg-transparent",
        { "rounded-md bg-brand-500 text-gray-200": isActive },
        className,
      )}
      {...props}
    />
  );
}
