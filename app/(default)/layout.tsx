import { Indie_Flower, Inter } from "next/font/google";
import React from "react";
import "@/app/_styles/globals.css";
import Header from "@/app/_layout/header/Header";

const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
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
        <Header />
        <div className="flex flex-col">
          <div className="flex-1 grid">
            <main className="w-full">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
