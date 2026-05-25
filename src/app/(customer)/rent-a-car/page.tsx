"use client";

import React, { useState } from 'react';

// Up-to-date catalog utilizing high-quality vehicle images via Unsplash strings
const CAR_CATALOG = [
  {
    id: 1,
    name: "BMW 5 Series",
    type: "Premium Sedan",
    seats: 5,
    fuel: "Diesel",
    transmission: "Auto",
    price: "KES 12,500",
    oldPrice: "KES 15,000",
    tag: "Automatic",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Mercedes AMG GT",
    type: "Executive Coupe",
    seats: 2,
    fuel: "Petrol",
    transmission: "Auto",
    price: "KES 22,000",
    oldPrice: "KES 26,500",
    tag: "Automatic",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Toyota Prado TX",
    type: "Premium 4x4",
    seats: 7,
    fuel: "Diesel",
    transmission: "Auto",
    price: "KES 15,000",
    oldPrice: "KES 18,000",
    tag: "4x4 Drive",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600"
  }
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
    console.log("Searching available vehicles:", formData);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 pt-24">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* SECTION 1: SEARCH PARAMETERS BOX */}
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Rent a Car across Kenya
          </h1>
          
          <form onSubmit={handleRentSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Pick-up Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Pick-up Time</label>
                <input 
                  type="time" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, pickupTime: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Drop-off Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  onChange={(e) => setFormData({...formData, dropoffDate: e.target.value})}
                />
              </div>

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

        {/* SECTION 2: POPULAR VEHICLES CATALOG */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Popular Vehicles</h2>
            <button className="text-sm font-bold text-gray-900 hover:text-blue-600 transition flex items-center gap-1">
              View All <span>&rarr;</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAR_CATALOG.map((car) => (
              <div key={car.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group flex flex-col justify-between">
                
                {/* Image Section with absolute pill tag */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
                    {car.tag}
                  </span>
                </div>
                
                {/* Specs Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{car.name}</h3>
                    
                    {/* Feature badges exactly mimicking the UI sample */}
                    <div className="flex items-center space-x-4 text-gray-500 font-medium text-sm mb-6">
                      <div className="flex items-center gap-1.5">
                        <span>👥</span> {car.seats}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span>⛽</span> {car.fuel}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span>⚙️</span> {car.transmission}
                      </div>
                    </div>
                  </div>
                  
                  {/* Pricing and Action Link Footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-end justify-between">
                    <div>
                      {car.oldPrice && (
                        <p className="text-sm text-gray-400 line-through font-medium">{car.oldPrice}</p>
                      )}
                      <p className="text-2xl font-black text-gray-900 leading-tight">
                        {car.price} <span className="text-xs text-gray-400 font-medium block">per day</span>
                      </p>
                    </div>
                    <button className="text-gray-900 font-bold hover:text-blue-600 underline transition text-sm tracking-tight decoration-2 underline-offset-4">
                      View Details
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