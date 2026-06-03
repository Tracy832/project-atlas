"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Clock, MapPin, Shield, ArrowRight, Search } from 'lucide-react';

function TransferCatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  useEffect(() => {
    setLocation(searchParams.get('location') || '');
    setDestination(searchParams.get('destination') || '');
    setPickupDate(searchParams.get('pickupDate') || '');
    setPickupTime(searchParams.get('pickupTime') || '');
  }, [searchParams]);

  const transferOptions = [
    { id: 1, name: "Private Shuttle Transfer", vehicle: "Toyota Premio Executive", rate: 3500, img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600" },
    { id: 2, name: "VIP Airport SUV Transfer", vehicle: "Toyota Prado SUV", rate: 8000, img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=600" },
    { id: 3, name: "Wilson Corporate Transfer", vehicle: "BMW 5 Series Sedan", rate: 7500, img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600" },
  ];

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/book-a-transfer?location=${encodeURIComponent(location)}&destination=${encodeURIComponent(destination)}&pickupDate=${pickupDate}&pickupTime=${encodeURIComponent(pickupTime)}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-24 space-y-8">
      
      {/* 🛠️ REPLACES IMAGE_E53EA6.PNG - FULLY WORKING EDITABLE INPUT FIELDS */}
      <form onSubmit={handleUpdate} className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-3xl grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
        <div>
          <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">Pickup Point</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">Dropoff Point</label>
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">Pickup Date</label>
          <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-2 py-2 text-xs text-gray-900 dark:text-white" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">Pickup Time</label>
          <input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-2 py-2 text-xs text-gray-900 dark:text-white" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1"><Search className="w-3 h-3" /> Update</button>
      </form>

      {/* Grid Layout Allocation now with UNIFORM PRODUCT IMAGES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {transferOptions.map((option) => (
          <div key={option.id} className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-gray-300 transition shadow-sm">
            <div className="h-44 w-full bg-gray-100 dark:bg-gray-900">
              <img src={option.img} alt={option.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-5 space-y-4">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase block">{option.vehicle}</span>
                <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight leading-tight">{option.name}</h3>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-900">
                <p className="text-base font-black text-gray-900 dark:text-white">KES {option.rate.toLocaleString()}</p>
                <button onClick={() => router.push('/checkout')} className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-black px-4 py-2 rounded-xl flex items-center gap-1">Select <ArrowRight className="w-3 h-3" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BookATransferPage() {
  return (
    <Suspense fallback={<div>Filtering Ground Options...</div>}>
      <TransferCatalogContent />
    </Suspense>
  );
}