import { Inter } from "next/font/google";
import React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import SidebarProvider from "@/app/_context/sidebar-context";
import SidebarWrapper from "@/app/_components/account/sidebar/sidebar-wrapper";
import Sidebar from "@/app/_components/account/sidebar/sidebar";
import MainWrapper from "@/app/_components/account/layout/main/main-wrapper";
import AccountHeader from "@/app/_components/account/layout/header/account-header";
import { ModeSwitcher } from "@/app/_context/mode-switcher-context";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s to Todoist",
    default: "Todoist",
  },
  description:
    "Trusted by 35+ million people and teams, the Todoist app is the world's favorite task manager and to-do list app. Organize your work and life, finally.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ModeSwitcher>
          <SidebarProvider>
            <div className="w-screen h-screen">
              <div className="flex justify-end size-full relative">
                <SidebarWrapper>
                  <Sidebar />
                </SidebarWrapper>
                <MainWrapper>
                  <AccountHeader />
                  {children}
                </MainWrapper>
              </div>
            </div>
          </SidebarProvider>
        </ModeSwitcher>
      </body>
    </html>
  );
}
