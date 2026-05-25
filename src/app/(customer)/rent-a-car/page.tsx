"use client";

import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';

// Sample vehicle catalog data
const CAR_CATALOG = [
  { id: 1, name: "Toyota Avanza (7-Seater)", type: "SUV / Family", price: "KES 6,500 / day", image: "🚗" },
  { id: 2, name: "Nissan X-Trail", type: "4x4 Compact", price: "KES 8,000 / day", image: "🚙" },
  { id: 3, name: "Toyota Prado TX", type: "Premium 4x4", price: "KES 15,000 / day", image: "🚘" },
];

export default function RentACarPage() {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffDate: '',
    dropoffTime: ''
  });

  const handleRentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is where our secure route guard will check if they are logged in later!
    console.log("Searching available vehicles for parameters:", formData);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Dark background shell just for the top area behind navbar */}
      <div className="bg-neutral-900 h-24 w-full static" />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* SECTION 1: SEARCH PARAMETERS BOX */}
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Rent a Car across Kenya
          </h1>
          
          <form onSubmit={handleRentSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Pick-up Location */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Pick-up Location</label>
                <input 
                  type="text" 
                  placeholder="e.g. JKIA, Nairobi"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                />
              </div>

              {/* Drop-off Location */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Drop-off Location</label>
                <input 
                  type="text" 
                  placeholder="e.g. Westlands, Nairobi"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, dropoffLocation: e.target.value})}
                />
              </div>

              {/* Pick-up Date */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Pick-up Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                />
              </div>

              {/* Pick-up Time */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Pick-up Time</label>
                <input 
                  type="time" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, pickupTime: e.target.value})}
                />
              </div>

              {/* Drop-off Date */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Drop-off Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, dropoffDate: e.target.value})}
                />
              </div>

              {/* Drop-off Time */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Drop-off Time</label>
                <input 
                  type="time" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, dropoffTime: e.target.value})}
                />
              </div>

            </div>

            {/* Rent Action Button */}
            <div className="flex justify-end">
              <button 
                type="submit"
                className="bg-blue-600 text-white font-bold px-12 py-4 rounded-lg hover:bg-blue-700 transition shadow-md active:scale-95 text-lg"
              >
                Search available cars
              </button>
            </div>
          </form>
        </section>

        {/* SECTION 2: CONSTANT VEHICLE CATALOG */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our Fleet & Base Fleet Rates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAR_CATALOG.map((car) => (
              <div key={car.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden p-6 flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">{car.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{car.name}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-4">{car.type}</p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Base Fare</p>
                    <p className="text-lg font-black text-blue-600">{car.price}</p>
                  </div>
                  <button className="bg-gray-900 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}