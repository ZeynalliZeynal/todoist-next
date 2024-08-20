import { Indie_Flower, Inter } from "next/font/google";
import React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";

const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s | Todoist",
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
        <main>{children}</main>
      </body>
    </html>
  );
}
