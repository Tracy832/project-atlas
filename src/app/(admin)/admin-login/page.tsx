"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Lock, Mail, Eye, EyeOff, Loader2, Compass } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  
  // Input and Visibility States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAdminAuthentication = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    // Simulate administrative cryptographic handshake verification delay
    setTimeout(() => {
      // Testing credentials - feel free to replace with your backend endpoints later!
      if (email.trim() === 'admin@atlas.ops' && password === 'AtlasRoot2026') {
        setIsLoading(false);
        router.push('/dashboard'); // Directs straight to your core admin stats view
      } else {
        setIsLoading(false);
        setErrorMessage('Invalid administrative security key or unauthorized operator directory.');
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 select-none relative overflow-hidden">
      
      {/* BACKGROUND ABSTRACT DESIGN BLURS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* CORE LOGIN CARD CONTROL CONTAINER */}
      <div className="w-full max-w-md bg-neutral-900 border border-white/10 p-8 rounded-3xl shadow-2xl relative z-10 backdrop-blur-md space-y-6 animate-fade-in">
        
        {/* BRAND IDENTITY IDENTIFIER */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center mx-auto border border-blue-500/20">
            <Compass className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-white">Atlas Operations</h1>
            <p className="text-xs text-gray-400 font-medium mt-1">Terminal Secure Authentication Authority</p>
          </div>
        </div>

        {/* SECURITY ALERT STATE GATEWAYS */}
        {errorMessage && (
          <div className="bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-xl text-xs font-semibold text-red-400 leading-relaxed text-center">
            {errorMessage}
          </div>
        )}

        {/* CREDENTIAL COMPASS FORM */}
        <form onSubmit={handleAdminAuthentication} className="space-y-4">
          
          {/* Email Inputs Node */}
          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Operator Directory Mail</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
              <input
                type="email"
                required
                disabled={isLoading}
                placeholder="admin@atlas.ops"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-950 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition disabled:opacity-50 font-medium"
              />
            </div>
          </div>

          {/* Password Inputs Node */}
          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">System Passkey Security String</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                required
                disabled={isLoading}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-neutral-950 border border-white/10 rounded-xl pl-11 pr-12 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition tracking-widest disabled:opacity-50 font-bold"
              />
              <button
                type="button"
                disabled={isLoading}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-500 hover:text-white transition focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Authorization Execution Switch Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-sm py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 active:scale-95 disabled:opacity-50 disabled:pointer-events-none mt-6 cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Decrypting Security Nodes...</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>Authorize Security Key</span>
              </>
            )}
          </button>
        </form>

        {/* RECOVERY INFORMATION CAPTION BLOCK */}
        <div className="text-center pt-2 border-t border-white/5">
          <p className="text-[10px] text-gray-500 font-medium leading-relaxed max-w-xs mx-auto">
            Access restricted strictly to authorized platform maintainers. Transactions are actively token-logged under local encryption.
          </p>
        </div>

      </div>
    </div>
  );
}