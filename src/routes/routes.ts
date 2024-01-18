import type { NavItem } from "@/types/nav";

import { HelpCircle, User } from "lucide-react";

export const navRoutes: NavItem[] = [
  {
    title: "Support",
    href: "/",
    icon: HelpCircle,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
];
