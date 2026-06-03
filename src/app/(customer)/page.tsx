"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Car, Plane, MapPin, Calendar, Clock, Search, Compass } from 'lucide-react';

export default function CustomerLandingPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'car' | 'flight' | 'transfer'>('car');
  
  // Fully un-locked state inputs
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const baseQuery = `location=${encodeURIComponent(location)}&destination=${encodeURIComponent(destination)}&pickupDate=${pickupDate}&pickupTime=${encodeURIComponent(pickupTime)}`;
    
    if (activeTab === 'car') {
      router.push(`/rent-a-car?${baseQuery}&returnDate=${returnDate}&returnTime=${encodeURIComponent(returnTime)}`);
    } else if (activeTab === 'flight') {
      router.push(`/book-a-flight?${baseQuery}`);
    } else if (activeTab === 'transfer') {
      router.push(`/book-a-transfer?${baseQuery}`);
    }
  };

  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-neutral-950 to-neutral-900 text-white flex flex-col justify-center items-center px-6 py-12">
      <div className="text-center max-w-3xl space-y-4 mb-12">
        <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-blue-500 uppercase px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
          <Compass className="w-3.5 h-3.5" /> Project Atlas Logistics
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">Next-Gen Booking Engine</h1>
      </div>

      <div className="w-full max-w-5xl bg-neutral-900 border border-white/10 p-6 rounded-3xl shadow-2xl">
        {/* Tabs */}
        <div className="flex space-x-2 border-b border-white/5 pb-4 mb-6">
          <button type="button" onClick={() => setActiveTab('car')} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs uppercase font-black transition ${activeTab === 'car' ? 'bg-blue-600 text-white' : 'text-gray-400'}`}><Car className="w-4 h-4" /> Rent A Car</button>
          <button type="button" onClick={() => setActiveTab('flight')} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs uppercase font-black transition ${activeTab === 'flight' ? 'bg-blue-600 text-white' : 'text-gray-400'}`}><Plane className="w-4 h-4" /> Book A Flight</button>
        </div>

        <form onSubmit={handleSearchSubmit} className="space-y-4 text-gray-900 dark:text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Pickup Hub</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                <input type="text" required placeholder="e.g. Nairobi" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-neutral-950 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Dropoff / Destination</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                <input type="text" required placeholder="e.g. Mombasa" value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full bg-neutral-950 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Pick-up Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                <input type="date" required value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} className="w-full bg-neutral-950 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 scheme-dark" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Pick-up Time</label>
              <div className="relative">
                <Clock className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                <input type="time" required value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} className="w-full bg-neutral-950 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 scheme-dark" />
              </div>
            </div>
          </div>

          {/* Conditional Dropoff Date Rows for Vehicle Rentals */}
          {activeTab === 'car' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/5 pt-4 animate-fade-in">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Return Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                  <input type="date" required value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="w-full bg-neutral-950 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 scheme-dark" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Return Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                  <input type="time" required value={returnTime} onChange={(e) => setReturnTime(e.target.value)} className="w-full bg-neutral-950 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 scheme-dark" />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-black text-sm px-8 py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-md active:scale-95 cursor-pointer">
              <Search className="w-4 h-4" />
              <span>Search Available Assets</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}