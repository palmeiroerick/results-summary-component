import React from "react";
import type { Metadata } from "next";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Hanken_Grotesk } from "next/font/google";
import "@/style/globals.css";

const hankenGrotesk: NextFont = Hanken_Grotesk({
  weight: ["500", "700", "800"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Results Summary Component",
  icons: "/assets/favicon.png",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.className} md:items-center md:justify-center md:flex md:h-screen md:w-screen`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
