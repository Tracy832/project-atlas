"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/components/landing/Hero';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}