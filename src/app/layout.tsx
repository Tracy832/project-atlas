import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Atlas",
  description: "Book car hire, transfers, and flights seamlessly across Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen relative`}>
        {/* Global Navbar appears on all B2C pages */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}