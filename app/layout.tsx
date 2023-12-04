import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Hanken_Grotesk } from "next/font/google";
import StyledComponentsRegistry from "./registry";

const hankenGrotesk: NextFont = Hanken_Grotesk({
  weight: ["500", "700", "800"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Results Summary Component",
  icons: "/assets/favicon.png",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
