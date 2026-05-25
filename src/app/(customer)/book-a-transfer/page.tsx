"use client";

import React, { useState } from 'react';

const TRANSFER_CATALOG = [
  { id: 1, name: "JKIA to Nairobi CBD", vehicle: "Standard Sedan", price: "KES 2,500", dynamic: "Fixed Rate", image: "🚖" },
  { id: 2, name: "JKIA to Naivasha", vehicle: "7-Seater Tour Van", price: "KES 12,000", dynamic: "Fixed Rate", image: "🚐" },
  { id: 3, name: "Mombasa Airport to Diani Hotels", vehicle: "Minivans / SUV", price: "KES 5,000", dynamic: "Fixed Rate", image: "🚘" },
];

export default function BookATransferPage() {
  const [formData, setFormData] = useState({
    pickupPoint: '',
    destinationPoint: '',
    transferDate: '',
    transferTime: '',
    luggageCount: '0',
    vehicleType: 'Sedan'
  });

  const handleTransferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching transfers for parameters:", formData);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="bg-neutral-900 h-24 w-full" />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* SECTION 1: SEARCH PARAMETERS BOX */}
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Reliable Airport & Hotel Transfers
          </h1>
          
          <form onSubmit={handleTransferSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Pick-up Location</label>
                <input 
                  type="text" 
                  placeholder="e.g. Airport, Hotel Name" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, pickupPoint: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Drop-off Destination</label>
                <input 
                  type="text" 
                  placeholder="e.g. Destination, Suburb" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, destinationPoint: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Transfer Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, transferDate: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Pick-up Time</label>
                <input 
                  type="time" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, transferTime: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Luggage (Bags)</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
                  onChange={(e) => setFormData({...formData, luggageCount: e.target.value})}
                >
                  <option value="0">No large luggage</option>
                  <option value="1-2">1 - 2 Bags</option>
                  <option value="3-4">3 - 4 Bags</option>
                  <option value="5+">5+ Bags</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Preferred Vehicle</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
                  onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                >
                  <option value="Sedan">Standard Sedan (Max 3 Pax)</option>
                  <option value="SUV">Executive SUV (Max 4 Pax)</option>
                  <option value="Van">Minivan / Shuttle (Max 7 Pax)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="bg-blue-600 text-white font-bold px-12 py-4 rounded-lg hover:bg-blue-700 transition shadow-md active:scale-95 text-lg">
                Search Transfers
              </button>
            </div>
          </form>
        </section>

        {/* SECTION 2: CONSTANT TRANSFER CATALOG */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">Standard Route Rates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRANSFER_CATALOG.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">{item.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-4">{item.vehicle}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">{item.dynamic}</p>
                    <p className="text-lg font-black text-blue-600">{item.price}</p>
                  </div>
                  <button className="bg-gray-900 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm">
                    Select Rate
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