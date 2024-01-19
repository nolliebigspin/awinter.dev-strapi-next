import "./globals.css";
import Providers from "./providers";

export type RootLayoutProps = {
  children: React.ReactNode;
};

export const revalidate = 60;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="bg-light text-dark transition-colors duration-200 dark:bg-dark dark:text-light">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
