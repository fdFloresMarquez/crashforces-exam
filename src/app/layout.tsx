import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crash Forces App",
  description: "App for reporting and viewing crash accidents",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="light"
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
