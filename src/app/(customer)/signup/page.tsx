"use client";

import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Create Account
          </h2>
          <p className="text-gray-500 mt-2 font-medium">
            Join Project Atlas and start your journey
          </p>
        </div>
        
        <form className="space-y-5">
          {/* Full Name Field */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Full Name
            </label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-gray-400" 
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-gray-400" 
              required
            />
          </div>

          {/* New Password Field */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              New Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-blue-600 transition-all" 
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Confirm Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-blue-600 transition-all" 
              required
            />
          </div>

          {/* Action Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg mt-4 active:scale-95"
          >
            Create Account
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center text-gray-600 font-medium">
          Already have an account?{" "}
          <Link 
            href="/login" 
            className="text-blue-600 font-bold hover:underline decoration-2 underline-offset-4"
          >
            Log In
          </Link>
        </div>

      </div>
    </div>
  );
}