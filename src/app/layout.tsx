import Navigation from "@/components/Navigation";
import type { Metadata } from "next";

import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "awinter.dev",
  description: "Just start doing your stuff!",
};

export type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="bg-light text-dark transition-colors duration-200 dark:bg-dark dark:text-light">
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
