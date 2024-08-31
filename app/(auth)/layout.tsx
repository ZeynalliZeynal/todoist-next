import { Indie_Flower, Inter } from "next/font/google";
import React from "react";
import "@/app/globals.css";
import Logo from "@/components/icons/logo";
import Link from "next/link";
import type { Metadata } from "next";
import { ThemeSwitcher } from "@/app/_context/theme-switcher-context";

const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s to Todoist",
    default: "Todoist | A To-Do List to Organize Your Work & Life",
  },
  description:
    "Todoist is the productivity tool you need to get work and life organized. Collect tasks, organize projects, and plan your day.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${indieFlower.className} ${inter.className}`}
      >
        <ThemeSwitcher>
          <main className="flex justify-center w-[calc(100vw-1.5rem)] h-screen p-6">
            <div className="max-w-4xl w-full flex gap-8 flex-col">
              <Link href="/" className="pb-8 justify-start">
                <Logo />
              </Link>
              <div className="pt-8">{children}</div>
            </div>
          </main>
        </ThemeSwitcher>
      </body>
    </html>
  );
}
