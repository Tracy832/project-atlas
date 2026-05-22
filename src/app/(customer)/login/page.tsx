"use client";

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-gray-500 mt-2 font-medium">
            Please enter your details to login
          </p>
        </div>
        
        <form className="space-y-6">
          {/* Email Address Field */}
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

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-gray-900">
                Password
              </label>
              <Link href="#" className="text-xs text-blue-600 hover:underline font-semibold">
                Forgot password?
              </Link>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-blue-600 transition-all" 
              required
            />
          </div>

          {/* Log In Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg active:scale-95"
          >
            Log In
          </button>
        </form>

        {/* Footer: Toggle to Signup */}
        <div className="mt-8 text-center border-t border-gray-100 pt-8 text-gray-600 font-medium">
          New to Project Atlas?{" "}
          <Link 
            href="/signup" 
            className="text-blue-600 font-bold hover:underline decoration-2 underline-offset-4"
          >
            Sign up here
          </Link>
        </div>

      </div>
    </div>
  );
}