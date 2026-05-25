"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Helper function to make active links look sharp and bold
  const linkStyle = (path: string) => {
    const isMainHome = path === '/' && pathname === '/';
    const isSubPage = path !== '/' && pathname.startsWith(path);
    
    return `transition font-semibold py-2 px-1 border-b-2 ${
      isMainHome || isSubPage 
        ? 'text-blue-400 border-blue-400 font-bold' 
        : 'text-white border-transparent hover:text-blue-300'
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-neutral-950/80 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-4 flex items-center justify-between text-white">
      
      {/* Brand Logo */}
      <Link href="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition">
        Project Atlas
      </Link>
      
      {/* Dynamic Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wider">
        <Link href="/rent-a-car" className={linkStyle('/rent-a-car')}>
          Rent a Car
        </Link>
        <Link href="/book-a-flight" className={linkStyle('/book-a-flight')}>
          Book a Flight
        </Link>
        <Link href="/book-a-transfer" className={linkStyle('/book-a-transfer')}>
          Book a Transfer
        </Link>
      </div>

      {/* Authentication Group */}
      <div className="flex items-center space-x-6">
        <Link 
          href="/login" 
          className="hover:text-blue-300 transition font-bold text-sm tracking-wide"
        >
          Log in
        </Link>
        <Link 
          href="/signup" 
          className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-black text-sm tracking-wide hover:bg-blue-700 transition active:scale-95 shadow-md shadow-blue-900/20"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}