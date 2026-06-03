"use client";

import React from 'react';
import Navbar from "@/components/common/Navbar";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      {/* Dynamic top global customer navigation */}
      <Navbar />
      
      {/* Added pt-20 to cleanly clear fixed navbar height overlay limits */}
      <main className="flex-1 pt-20">
        {children}
      </main>
    </div>
  );
}