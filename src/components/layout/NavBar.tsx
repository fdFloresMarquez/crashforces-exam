"use client";

import type { LinkProps } from "next/link";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { navRoutes } from "@/routes/routes";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Icon from "../Icon";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/">
          <Image alt="CrashForces Logo" height={200} src="/logo.png" width={300} />
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-controls="navbar-default"
              aria-expanded="false"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              data-collapse-toggle="navbar-default"
              type="button"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 17 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1h15M1 7h15M1 13h15"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent className="pr-0" side="left">
            <SheetHeader>
              <SheetTitle>
                <Image alt="CrashForces Logo" height={200} src="/logo.png" width={300} />
              </SheetTitle>
              <SheetDescription className="flex flex-col space-y-3">
                {navRoutes.map((navItem) => (
                  <MobileLink
                    key={navItem.title}
                    className="flex items-center"
                    href="/asd"
                    onOpenChange={setOpen}
                  >
                    {navItem.icon ? <Icon className="mr-2 h-4 w-4" icon={navItem.icon} /> : null}
                    <span className="font-bold">{navItem.title}</span>
                  </MobileLink>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            {navRoutes.map((navItem) => (
              <li key={navItem.title}>
                <Link
                  className="flex items-center gap-2 rounded bg-blue-700 px-3 py-2 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                  href="#"
                >
                  {navItem.icon ? <Icon className="size-6" icon={navItem.icon} /> : null}{" "}
                  {navItem.title}
                </Link>
              </li>
            ))}

            <li>
              <Link
                className="flex items-center gap-2 px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                href="#"
              >
                <Menu /> Menu
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  return (
    <Link
      className={cn("text-brand-500", className)}
      href={href}
      onClick={() => {
        onOpenChange?.(false);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
