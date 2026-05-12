"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-[100] flex items-center justify-between px-10 py-6 text-white bg-transparent">
      {/* Brand Logo - Links back to Home */}
      <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition">
        Project Atlas
      </Link>
      
      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <Link href="#" className="hover:text-blue-400 transition">Rent a Car</Link>
        <Link href="#" className="hover:text-blue-400 transition">Book a Flight</Link>
        <Link href="#" className="hover:text-blue-400 transition">Book a Transfer</Link>
      </div>

      {/* Auth Buttons - These point to your new folders */}
      <div className="flex items-center space-x-6">
        <Link 
          href="/login" 
          className="hover:text-blue-400 transition font-semibold"
        >
          Log in
        </Link>
        <Link 
          href="/signup" 
          className="bg-white text-black px-8 py-2.5 rounded-full font-bold hover:bg-gray-200 transition active:scale-95"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}