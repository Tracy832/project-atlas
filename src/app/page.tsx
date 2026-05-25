"use client";

import Hero from '@/components/b2c/landing/Hero';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen">
      {/* Navbar is automatically loaded by layout.tsx, so we only need Hero here */}
      <Hero />
    </main>
  );
}