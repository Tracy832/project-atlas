"use client";

import React, { useState } from 'react';

export default function BookAFlightPage() {
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: '1',
    cabinClass: 'Economy'
  });

  const [hasSearched, setHasSearched] = useState(false);

  const handleFlightSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    
    // Core Logic Action: This is where your API request will happen!
    alert(`Searching for flights from ${formData.departure} to ${formData.destination}...`);
    console.log("Submitted Flight Search Parameters:", formData);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 pt-24">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* FLIGHT SEARCH PARAMETERS BOX */}
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

        {/* DYNAMIC SEARCH RESULTS HOLDER */}
        <section className="mt-8 text-center py-12 border-2 border-dashed border-gray-200 rounded-2xl bg-white">
          {!hasSearched ? (
            <div className="text-gray-400">
              <span className="text-4xl block mb-2">🔍</span>
              <p className="font-medium text-lg">Enter details above to search available flights dynamically.</p>
            </div>
          ) : (
            <div className="text-blue-600 animate-pulse font-bold text-lg">
              Connecting to airline schedules... Fetching flight entries for {formData.departure} ➔ {formData.destination}.
            </div>
          )}
        </section>

      </div>
    </main>
  );
}