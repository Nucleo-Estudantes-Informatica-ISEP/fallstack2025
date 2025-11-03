import type { Metadata } from "next";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";

import { AuthContextProvider } from "@/contexts/AuthContext";
import { InstallableContextProvider } from "@/contexts/InstallableContext";
import InstallPopUp from "@/components/InstallPopUp";
import Topbar from "@/components/TopBar";

export const metadata: Metadata = {
  applicationName: "Fallstack 2025",
  title: "Fallstack 2025",
  description: "Evento do Instituto Superior de Engenharia do Porto",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-svh">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        {/* Add Coolvetica font import */}
        <link
          href="https://fonts.cdnfonts.com/css/coolvetica"
          rel="stylesheet"
        />
      </head>
      <body className="font-coldvetica" style={{ fontFamily: '"Coolvetica", sans-serif' }}>
        <AuthContextProvider>
          <InstallableContextProvider>
            <SkeletonTheme baseColor="#eaeaea" highlightColor="#bfbfbf">
              <Topbar />
              <main>{children}</main>
              <ToastContainer position="bottom-right" />
              <InstallPopUp />
            </SkeletonTheme>
          </InstallableContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}