import { Indie_Flower, Inter } from "next/font/google";
import React from "react";
import "@/app/globals.css";
import { ThemeSwitcher } from "@/context/theme-switcher-context";

const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeSwitcher>
      <html lang="en">
        <body suppressHydrationWarning={true} className={inter.className}>
          <div className="flex w-screen h-screen justify-center items-center">
            {children}
          </div>
        </body>
      </html>
    </ThemeSwitcher>
  );
}
