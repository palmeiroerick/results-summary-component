import type { Metadata } from "next";
import type { ReactNode } from "react";
import StyledComponentsRegistry from "./registry";

export const metadata: Metadata = {
  title: "Results Summary Component",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
