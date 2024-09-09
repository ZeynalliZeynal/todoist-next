import { Inter } from "next/font/google";
import React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import SidebarProvider from "@/context/sidebar-context";
import SidebarWrapper from "@/components/account/layout/sidebar/sidebar-wrapper";
import Sidebar from "@/components/account/layout/sidebar/sidebar";
import MainWrapper from "@/components/account/layout/main/main-wrapper";
import AccountHeader from "@/components/account/layout/header/account-header";
import { ThemeSwitcher } from "@/context/theme-switcher-context";
import AddTaskTag from "@/context/add-task-tag-context";

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
        <AddTaskTag>
          <ThemeSwitcher>
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
          </ThemeSwitcher>
        </AddTaskTag>
      </body>
    </html>
  );
}
