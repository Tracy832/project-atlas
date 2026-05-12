"use client";

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Airplane-bg.jpeg')" }}
      >
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Marketing Text */}
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Elevate Your <br /> Travelling Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium">
            Book car hire, transfers, and flights in one seamless experience. 
            Travel across Kenya with absolute confidence.
          </p>
        </div>

        {/* Right Side: Simplified Conversion Box */}
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
            Ready to fly? ✈️
          </h2>
          <p className="text-gray-600 mb-8 text-lg font-medium">
            Create your account to unlock exclusive rates and manage all your bookings in one place.
          </p>
          
          <div className="space-y-4">
            {/* Direct Link to Signup Page */}
            <Link 
              href="/signup" 
              className="w-full bg-blue-600 text-white text-center block font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-lg"
            >
              Get Started Now
            </Link>
            
            <div className="pt-4 text-center border-t border-gray-100">
              <p className="text-gray-600 font-medium">
                Already a member?{" "}
                <Link href="/login" className="text-blue-600 font-bold hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}