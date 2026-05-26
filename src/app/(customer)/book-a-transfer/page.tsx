"use client";

import React, { useState } from 'react';

// Using the exact same high-quality vehicle dataset to maintain system consistency
const TRANSFER_CATALOG = [
  {
    id: 1,
    name: "BMW 5 Series",
    route: "JKIA to Nairobi CBD / Westlands",
    seats: 5,
    fuel: "Diesel",
    transmission: "Auto",
    price: "KES 4,500",
    tag: "Chauffeur Driven",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Mercedes AMG GT",
    route: "VIP Airport Executive Transfer",
    seats: 2,
    fuel: "Petrol",
    transmission: "Auto",
    price: "KES 15,000",
    tag: "VIP Luxury",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Toyota Prado TX",
    route: "Moi Airport to Diani Beach Hotels",
    seats: 7,
    fuel: "Diesel",
    transmission: "Auto",
    price: "KES 6,000",
    tag: "4x4 Transfer",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600"
  }
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
    console.log("Searching transfer routes for:", formData);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 pt-24">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
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
                <label className="block text-sm font-bold text-gray-900 mb-2">Preferred Vehicle Type</label>
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

        {/* SECTION 2: TRANSFERS CATALOG (MATCHING RENT-A-CAR LAYOUT) */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Available Fleet & Transfer Rates</h2>
            <button className="text-sm font-bold text-gray-900 hover:text-blue-600 transition flex items-center gap-1">
              View All Routes <span>&rarr;</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRANSFER_CATALOG.map((car) => (
              <div key={car.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group flex flex-col justify-between">
                
                {/* Image Component layout */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
                    {car.tag}
                  </span>
                </div>
                
                {/* Specifications & Assigned Routes Block */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">{car.name}</h3>
                    <p className="text-sm text-blue-600 font-bold mb-4">{car.route}</p>
                    
                    <div className="flex items-center space-x-4 text-gray-500 font-medium text-sm mb-6">
                      <div className="flex items-center gap-1.5">
                        <span>👥</span> {car.seats} Max
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span>⛽</span> {car.fuel}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span>⚙️</span> {car.transmission}
                      </div>
                    </div>
                  </div>
                  
                  {/* Fixed Rate Pricing Footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Fixed Route Fare</p>
                      <p className="text-2xl font-black text-gray-900 leading-tight">
                        {car.price}
                      </p>
                    </div>
                    <button className="text-gray-900 font-bold hover:text-blue-600 underline transition text-sm tracking-tight decoration-2 underline-offset-4">
                      Select Transfer
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}