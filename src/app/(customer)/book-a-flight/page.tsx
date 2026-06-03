"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PlaneTakeoff, ArrowRight, MapPin, Calendar, Clock, Search } from 'lucide-react';

interface FlightCard {
  id: number;
  flightNo: string;
  carrier: string;
  from: string;
  to: string;
  departure: string;
  duration: string;
  fare: number;
  class: string;
}

function FlightCatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // 1. DYNAMIC INPUT STATES FOR THE FILTERS
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  // Hydrate states instantly when page mounts or URL updates from homepage search
  useEffect(() => {
    setLocation(searchParams.get('location') || '');
    setDestination(searchParams.get('destination') || '');
    setPickupDate(searchParams.get('pickupDate') || '');
    setPickupTime(searchParams.get('pickupTime') || '');
  }, [searchParams]);

  const masterFlightsList: FlightCard[] = [
    { id: 1, flightNo: "KP-042", carrier: "Kenya Airways", from: "nairobi", to: "mombasa", departure: "08:30 AM", duration: "1h 00m", fare: 7500, class: "Economy" },
    { id: 2, flightNo: "JM-108", carrier: "Jambojet", from: "nairobi", to: "mombasa", departure: "11:15 AM", duration: "1h 05m", fare: 6200, class: "Value Promo" },
    { id: 3, flightNo: "KP-220", carrier: "Kenya Airways", from: "nairobi", to: "kisumu", departure: "01:00 PM", duration: "0h 45m", fare: 6800, class: "Economy" },
    { id: 4, flightNo: "JM-304", carrier: "Jambojet", from: "mombasa", to: "nairobi", departure: "04:30 PM", duration: "1h 00m", fare: 6500, class: "Economy" },
  ];

  // 2. LIVE FILTER ENGINE
  const normalizedFrom = location.toLowerCase().trim();
  const normalizedTo = destination.toLowerCase().trim();

  const filteredFlights = masterFlightsList.filter(flight => {
    const matchFrom = normalizedFrom === '' || flight.from.includes(normalizedFrom);
    const matchTo = normalizedTo === '' || flight.to.includes(normalizedTo);
    return matchFrom && matchTo;
  });

  // Safe fallback if user queries an unmapped route: show all flight records
  const displayFlights = filteredFlights.length > 0 ? filteredFlights : masterFlightsList;

  // Syncs typed changes directly back into the browser navigation scheme
  const handleUpdateSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/book-a-flight?location=${encodeURIComponent(location)}&destination=${encodeURIComponent(destination)}&pickupDate=${pickupDate}&pickupTime=${encodeURIComponent(pickupTime)}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-24 space-y-8">
      
      {/* 🛠️ FIXED CODES: FULLY UNLOCKED EDITABLE FILTERS COMPONENT (Replaces the static badge from image_e52820.png) */}
      <div className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-3xl shadow-sm">
        <div className="mb-4">
          <span className="text-xs font-black text-blue-600 dark:text-blue-500 uppercase tracking-widest block mb-1">Active Flight Registry</span>
          <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Modify Corridor Parameters</h2>
        </div>

        <form onSubmit={handleUpdateSearch} className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
          {/* Editable Departure Airport Input Box */}
          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Departure Airport</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Nairobi"
                className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 font-medium"
              />
            </div>
          </div>

          {/* Editable Arrival Destination Input Box */}
          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Arrival Destination</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="e.g. Mombasa"
                className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 font-medium"
              />
            </div>
          </div>

          {/* Editable Travel Date Input Box */}
          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Travel Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 font-medium scheme-dark"
              />
            </div>
          </div>

          {/* Editable Departure Time Input Box */}
          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Departure Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}
                className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 font-medium scheme-dark"
              />
            </div>
          </div>

          {/* Search Trigger Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xs py-3 rounded-xl transition flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer shadow-sm shadow-blue-600/20"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Update Search</span>
          </button>
        </form>
      </div>

      {/* DYNAMIC FLIGHT MATRIX GRID */}
      <div className="space-y-4">
        {displayFlights.map((flight) => (
          <div key={flight.id} className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 hover:border-gray-300 dark:hover:border-gray-750 transition shadow-sm group">
            
            {/* Carrier Information Panel */}
            <div className="flex items-center gap-4 w-full md:w-1/4">
              <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center">
                <PlaneTakeoff className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-gray-900 dark:text-white tracking-tight">{flight.carrier}</h3>
                <span className="text-xs font-mono font-bold text-gray-400">{flight.flightNo} • {flight.class}</span>
              </div>
            </div>

            {/* Journey Segment Time Map */}
            <div className="flex items-center justify-between md:justify-center gap-8 w-full md:w-2/4 text-center">
              <div>
                <p className="text-lg font-black text-gray-900 dark:text-white">{flight.departure}</p>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">{flight.from}</span>
              </div>
              
              <div className="text-gray-400 text-xs font-bold space-y-1 min-w-[100px]">
                <span>{flight.duration}</span>
                <div className="w-full h-[2px] bg-gray-200 dark:bg-gray-800 relative">
                  <div className="w-2 h-2 bg-blue-600 rounded-full absolute -top-[3px] right-0" />
                </div>
                <span className="text-[10px] text-gray-400 block tracking-widest uppercase">Direct</span>
              </div>

              <div>
                <p className="text-lg font-black text-gray-900 dark:text-white">--:--</p>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">{flight.to}</span>
              </div>
            </div>

            {/* Invoicing and Checkout Redirection Node */}
            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-1/4 text-right">
              <div>
                <span className="text-[11px] text-gray-400 font-bold uppercase block">One Way Fare</span>
                <p className="text-xl font-black text-gray-900 dark:text-white">KES {flight.fare.toLocaleString()}</p>
              </div>
              <button 
                onClick={() => router.push('/checkout')}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-black px-5 py-3 rounded-xl transition flex items-center gap-2 active:scale-95 shadow-md shadow-blue-600/10 cursor-pointer"
              >
                <span>Select</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default function BookAFlightPage() {
  return (
    <Suspense fallback={<div className="p-24 text-center text-sm font-bold animate-pulse text-gray-400">Loading Air Corridor Matrices...</div>}>
      <FlightCatalogContent />
    </Suspense>
  );
}