"use client";

import React, { useState } from 'react';
import { ShieldCheck, Smartphone, CreditCard, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CheckoutPage() {
  // Application Flow States
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authStep, setAuthStep] = useState<'selection' | 'login' | 'verified'>('selection');
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [checkoutComplete, setCheckoutComplete] = useState<boolean>(false);

  // Form Inputs
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Dummy Transaction Data Summaries
  const checkoutSummary = {
    item: "Premium SUV Hire (Toyota Prado TX)",
    duration: "3 Days Allocation",
    subtotal: 28500,
    tax: 4560,
    total: 33060
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsAuthenticated(true);
      setAuthStep('verified');
    }
  };

  const handleGuestContinue = () => {
    setIsAuthenticated(true);
    setAuthStep('verified');
  };

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate Payment Gateway API Handshake response delay
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutComplete(true);
    }, 3000);
  };

  if (checkoutComplete) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 max-w-md w-full rounded-3xl p-8 text-center space-y-6 shadow-xl animate-fade-in">
          <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Booking Secured!</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {paymentMethod === 'mpesa' 
                ? "Please check your phone for the M-Pesa STK prompt PIN request to complete transaction authentication."
                : "Your transaction has been processed securely. Check your email for invoices."}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-950 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 text-left text-xs font-mono text-gray-500 space-y-1">
            <p><span className="font-bold text-gray-400">RECIEPT ID:</span> ATL-{Math.floor(Math.random() * 90000) + 10000}</p>
            <p><span className="font-bold text-gray-400">AMOUNT COLLECTED:</span> KES {checkoutSummary.total.toLocaleString()}</p>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-sm py-3.5 rounded-xl transition active:scale-95 shadow-md"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* LEFT SECTION: AUTHENTICATION AND GATEWAY CONTROLS */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* STEP 1 CONTAINER: GATEWAY CUSTOMER PROFILE VERIFICATION */}
        <section className={`bg-gray-50 dark:bg-gray-900 border rounded-2xl p-6 transition-all duration-300 ${
          isAuthenticated ? 'border-gray-200 dark:border-gray-800 opacity-60' : 'border-blue-500 shadow-sm'
        }`}>
          <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-4 mb-6">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs ${
              isAuthenticated ? 'bg-emerald-500 text-white' : 'bg-blue-600 text-white'
            }`}>
              {isAuthenticated ? "✓" : "1"}
            </div>
            <div>
              <h2 className="text-lg font-black text-gray-900 dark:text-white">Customer Verification</h2>
              <p className="text-xs text-gray-500 font-medium">Log in or secure your booking details as a passing client.</p>
            </div>
          </div>

          {!isAuthenticated ? (
            <div>
              {authStep === 'selection' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => setAuthStep('login')}
                    className="p-5 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl text-left hover:border-blue-500 transition group"
                  >
                    <span className="block font-black text-sm text-gray-900 dark:text-white mb-1">Sign In to Account</span>
                    <span className="block text-xs text-gray-400 font-medium mb-3">Load your digital profiles and stored cards instantly.</span>
                    <span className="text-xs text-blue-600 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Proceed to login <ArrowRight className="w-3 h-3" /></span>
                  </button>

                  <button 
                    onClick={handleGuestContinue}
                    className="p-5 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl text-left hover:border-blue-500 transition group"
                  >
                    <span className="block font-black text-sm text-gray-900 dark:text-white mb-1">Checkout as Guest</span>
                    <span className="block text-xs text-gray-400 font-medium mb-3">No account needed. Provide invoicing keys at the end step.</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Continue as visitor <ArrowRight className="w-3 h-3" /></span>
                  </button>
                </div>
              )}

              {authStep === 'login' && (
                <form onSubmit={handleLoginSubmit} className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Directory Address</label>
                    <input 
                      type="email" required placeholder="name@domain.com" value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Secure Account Password</label>
                    <input 
                      type="password" required placeholder="••••••••" value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition">Verify Credentials</button>
                    <button type="button" onClick={() => setAuthStep('selection')} className="text-gray-400 font-bold text-xs px-4 py-2.5 hover:text-gray-600 transition">Back</button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-between bg-white dark:bg-gray-950 px-4 py-3 rounded-xl border border-gray-100 dark:border-gray-850">
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">✓ Client Verification Complete</span>
              <button onClick={() => { setIsAuthenticated(false); setAuthStep('selection'); }} className="text-[11px] font-bold text-gray-400 hover:text-red-500 underline">Change</button>
            </div>
          )}
        </section>

        {/* STEP 2 CONTAINER: INTEGRATED SECURE TERMINAL GATEWAY */}
        <section className={`bg-gray-50 dark:bg-gray-900 border rounded-2xl p-6 transition-all duration-300 ${
          !isAuthenticated ? 'border-gray-200 dark:border-gray-800 opacity-40 pointer-events-none' : 'border-blue-500 shadow-sm'
        }`}>
          <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-4 mb-6">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black text-xs">2</div>
            <div>
              <h2 className="text-lg font-black text-gray-900 dark:text-white">Secure Payment Settlement</h2>
              <p className="text-xs text-gray-500 font-medium font-sans">Choose settlement modes for dynamic escrow reservation logic.</p>
            </div>
          </div>

          {/* GATEWAY METRIC SYSTEM SELECTION BUTTONS */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              type="button"
              onClick={() => setPaymentMethod('mpesa')}
              className={`p-4 rounded-xl border font-bold text-sm flex items-center justify-center gap-3 transition ${
                paymentMethod === 'mpesa' 
                  ? 'bg-emerald-600/10 border-emerald-500 text-emerald-600 dark:text-emerald-400' 
                  : 'bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 text-gray-500 hover:border-gray-300'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Safaricom M-Pesa</span>
            </button>

            <button
              type="button"
              onClick={() => setPaymentMethod('card')}
              className={`p-4 rounded-xl border font-bold text-sm flex items-center justify-center gap-3 transition ${
                paymentMethod === 'card' 
                  ? 'bg-blue-600/10 border-blue-500 text-blue-600 dark:text-blue-400' 
                  : 'bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 text-gray-500 hover:border-gray-300'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Credit / Debit Card</span>
            </button>
          </div>

          <form onSubmit={handleProcessPayment} className="space-y-4">
            {paymentMethod === 'mpesa' ? (
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">M-Pesa Express Phone Number</label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-sm font-black text-gray-400 tracking-wide">+254</span>
                  <input 
                    type="tel" required placeholder="712345678" value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl pl-16 pr-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 tracking-widest font-bold"
                  />
                </div>
                <p className="text-[11px] font-medium text-gray-400">An STK push notification confirmation request will instantly lock onto your device screen.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Cardholders Name</label>
                  <input type="text" required placeholder="Tracy Waithera" className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 font-bold" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Credit Card Serial String</label>
                  <input type="text" required placeholder="4000 1234 5678 9010" className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 tracking-widest font-bold" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Expiry Date</label>
                    <input type="text" required placeholder="MM / YY" className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 text-center font-bold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">CVV Security Code</label>
                    <input type="text" required placeholder="000" className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 text-center tracking-widest font-bold" />
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full mt-4 text-white font-black text-sm py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg ${
                paymentMethod === 'mpesa' 
                  ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-900/10' 
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-900/10'
              } disabled:opacity-50 disabled:pointer-events-none`}
            >
              <Lock className="w-4 h-4" />
              <span>{isProcessing ? "Authorizing Encrypted Nodes..." : `Authorize Payment • KES ${checkoutSummary.total.toLocaleString()}`}</span>
            </button>
          </form>
        </section>
      </div>

      {/* RIGHT SECTION: DYNAMIC ESCROW LEDGER SUMMARY BAR */}
      <div className="lg:col-span-5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sticky top-24">
        <h2 className="text-lg font-black text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">Invoice Ledger</h2>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-950 p-4 rounded-xl border border-gray-100 dark:border-gray-850">
            <span className="text-[11px] font-black text-blue-600 dark:text-blue-500 uppercase tracking-wider block mb-0.5">Selected Asset</span>
            <p className="font-bold text-sm text-gray-900 dark:text-white">{checkoutSummary.item}</p>
            <p className="text-xs text-gray-400 font-medium mt-1">{checkoutSummary.duration}</p>
          </div>

          <div className="space-y-2 border-b border-gray-200 dark:border-gray-800 pb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            <div className="flex justify-between">
              <span>Base Booking Cost</span>
              <span className="font-bold text-gray-900 dark:text-white">KES {checkoutSummary.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT / Service Charges (16%)</span>
              <span className="font-bold text-gray-900 dark:text-white">KES {checkoutSummary.tax.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex justify-between items-baseline pt-2">
            <span className="text-sm font-black text-gray-900 dark:text-white">Total Amount Due</span>
            <span className="text-2xl font-black text-blue-600 dark:text-blue-500">KES {checkoutSummary.total.toLocaleString()}</span>
          </div>

          <div className="bg-blue-600/5 border border-blue-500/10 p-3 rounded-xl flex items-start gap-2.5 text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed mt-4">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Encrypted escrow layer matches parameters protected under secure SSL validation schemas.</span>
          </div>
        </div>
      </div>

    </div>
  );
}