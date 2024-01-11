import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";

import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "awinter.dev",
  description: "Just start doing your stuff!",
};

export const revalidate = 60;

export type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="bg-light text-dark transition-colors duration-200 dark:bg-dark dark:text-light">
        <Providers>
          <Navigation />
          <main className="md:max-w-3/4 flex min-h-screen w-full flex-col items-center space-y-4 p-6 text-justify md:mx-auto md:w-3/4">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
