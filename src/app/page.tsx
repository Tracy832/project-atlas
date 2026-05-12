"use client";
import Navbar from '@/components/common/Navbar';
import Hero from '@/components/b2c/landing/Hero';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}