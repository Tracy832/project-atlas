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
      {/* The navbar is now trapped here, so it only shows up on customer pages! */}
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}