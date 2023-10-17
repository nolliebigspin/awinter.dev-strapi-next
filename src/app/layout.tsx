import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import Navigation from "@/components/Navigation";

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
      <body className="bg-light dark:bg-dark transition-colors duration-200 text-dark dark:text-light">
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
