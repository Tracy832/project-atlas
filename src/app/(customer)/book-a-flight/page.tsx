"use client";

import React, { useState } from 'react';

const FLIGHT_CATALOG = [
  { id: 1, name: "Nairobi (NBO) to Mombasa (MBA)", operator: "Jambojet", price: "KES 7,500", type: "One-way / Economy", image: "✈️" },
  { id: 2, name: "Nairobi (NBO) to Kisumu (KIS)", operator: "Kenya Airways", price: "KES 9,200", type: "One-way / Economy", image: "🛩️" },
  { id: 3, name: "Nairobi (NBO) to Eldoret (EDL)", operator: "Fly540", price: "KES 6,800", type: "One-way / Economy", image: "🛫" },
];

export default function BookAFlightPage() {
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: '1',
    cabinClass: 'Economy'
  });

  const handleFlightSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching available flights:", formData);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="bg-neutral-900 h-24 w-full" />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* SECTION 1: SEARCH PARAMETERS BOX */}
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Book Domestic & International Flights
          </h1>
          
          <form onSubmit={handleFlightSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">From (Departure Airport)</label>
                <input 
                  type="text" 
                  placeholder="e.g. JKIA (NBO)" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, departure: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">To (Destination Airport)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Moi Intl (MBA)" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Departure Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, departureDate: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Return Date (Optional)</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Passengers</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
                  onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4+">4+ Passengers</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Cabin Class</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
                  onChange={(e) => setFormData({...formData, cabinClass: e.target.value})}
                >
                  <option value="Economy">Economy</option>
                  <option value="Premium Economy">Premium Economy</option>
                  <option value="Business">Business Class</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="bg-blue-600 text-white font-bold px-12 py-4 rounded-lg hover:bg-blue-700 transition shadow-md active:scale-95 text-lg">
                Search Flights
              </button>
            </div>
          </form>
        </section>

        {/* SECTION 2: CONSTANT FLIGHT CATALOG */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">Popular Domestic Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLIGHT_CATALOG.map((flight) => (
              <div key={flight.id} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">{flight.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{flight.name}</h3>
                  <p className="text-sm text-gray-500 font-bold mb-4 text-blue-600">{flight.operator}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">{flight.type}</p>
                    <p className="text-lg font-black text-gray-900">{flight.price}</p>
                  </div>
                  <button className="bg-gray-900 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm">
                    Book Now
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