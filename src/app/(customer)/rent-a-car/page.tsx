"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Fuel, Gauge, Shield, ArrowRight, MapPin, Calendar, Clock, Search } from 'lucide-react';

function CarCatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');

  useEffect(() => {
    setLocation(searchParams.get('location') || '');
    setDestination(searchParams.get('destination') || '');
    setPickupDate(searchParams.get('pickupDate') || '');
    setPickupTime(searchParams.get('pickupTime') || '');
    setReturnDate(searchParams.get('returnDate') || '');
    setReturnTime(searchParams.get('returnTime') || '');
  }, [searchParams]);

  const carFleet = [
    { id: 1, name: "Toyota Prado TX", class: "Premium 4x4 SUV", rate: 9500, img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600" },
    { id: 2, name: "BMW 5 Series", class: "Executive Sedan", rate: 12000, img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600" },
    { id: 3, name: "Toyota LandCruiser V8", class: "VIP Offroader", rate: 22000, img: "https://images.unsplash.com/photo-1594568284297-7c64464062b1?auto=format&fit=crop&q=80&w=600" }
  ];

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/rent-a-car?location=${encodeURIComponent(location)}&destination=${encodeURIComponent(destination)}&pickupDate=${pickupDate}&pickupTime=${encodeURIComponent(pickupTime)}&returnDate=${returnDate}&returnTime=${encodeURIComponent(returnTime)}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-24 space-y-8">
      {/* Interactive Form Panel */}
      <form onSubmit={handleUpdate} className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-3xl grid grid-cols-1 md:grid-cols-7 gap-3 items-end">
        <div className="md:col-span-2">
          <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">Pickup Hub</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">Return Destination</label>
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">Pick Date</label>
          <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-2 py-2 text-xs text-gray-900 dark:text-white" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">Return Date</label>
          <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-2 py-2 text-xs text-gray-900 dark:text-white" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1"><Search className="w-3 h-3" /> Update</button>
      </form>

      {/* Fleet Cards Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {carFleet.map(car => (
          <div key={car.id} className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-gray-300 transition shadow-sm">
            <div className="h-44 w-full bg-gray-100 dark:bg-gray-900">
              <img src={car.img} alt={car.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-5 space-y-4">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase block">{car.class}</span>
                <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">{car.name}</h3>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-900">
                <p className="text-base font-black text-gray-900 dark:text-white">KES {car.rate.toLocaleString()}<span className="text-xs font-normal text-gray-400">/day</span></p>
                <button onClick={() => router.push('/checkout')} className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-black px-4 py-2 rounded-xl flex items-center gap-1">Book <ArrowRight className="w-3 h-3" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RentACarPage() {
  return (
    <Suspense fallback={<div>Loading Fleet Infrastructure...</div>}>
      <CarCatalogContent />
    </Suspense>
  );
}