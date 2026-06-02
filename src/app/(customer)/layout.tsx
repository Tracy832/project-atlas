"use client";

import React from 'react';
import Navbar from "@/components/common/Navbar";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Renders the main customer navigation menu at the top */}
      <Navbar />
      
      {/* 2. Renders your landing page or active route content directly underneath */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}