import { MobileNav, Navbar } from "./components";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Cryptoverse",
  description: "Search for, learn about & track your favourite coins.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="lg:app_main h-fit">
        <Toaster position="top-right" />
        <MobileNav />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
