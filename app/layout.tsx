import Navigation from "./components/navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dream Dancin' Acres",
  description: "Farm page for Dream Dancin' Acres",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-screen md:w-auto">
          <Navigation /> 
        </div>
        {children}
      </body>
    </html>
  );
}
