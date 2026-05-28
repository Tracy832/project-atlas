"use client";

import React, { useState } from 'react';
import { Car, Plus, ToggleRight } from 'lucide-react';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  price: string;
  status: 'Available' | 'On Rent' | 'Maintenance';
  category: 'Premium' | 'Comfort' | 'Economy';
}

export default function AdminFleetPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { id: 1, name: "BMW 5 Series", type: "Premium Sedan", price: "12,500", status: "Available", category: "Premium" },
    { id: 2, name: "Toyota Prado TX", type: "Premium 4x4", price: "15,000", status: "On Rent", category: "Premium" },
    { id: 3, name: "Toyota Premio", type: "Comfort Sedan", price: "5,500", status: "Available", category: "Comfort" },
    { id: 4, name: "Toyota Vitz", type: "Hatchback", price: "3,500", status: "Maintenance", category: "Economy" },
  ]);

  const [newCar, setNewCar] = useState({ name: '', type: '', price: '', category: 'Economy' as any });

  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    const vehicleEntry: Vehicle = {
      id: Date.now(),
      name: newCar.name,
      type: newCar.type,
      price: Number(newCar.price).toLocaleString(),
      status: 'Available',
      category: newCar.category
    };
    setVehicles([vehicleEntry, ...vehicles]);
    setNewCar({ name: '', type: '', price: '', category: 'Economy' });
  };

  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white mb-2">Fleet Management</h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium">Register vehicles, update base fare margins, and toggle active user presentation states.</p>
      </div>

      {/* INPUT CONTROL BLOCK */}
      <section className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-4 mb-6">
          <Plus className="w-5 h-5 text-blue-600 dark:text-blue-500" />
          <h2 className="text-lg font-black text-gray-900 dark:text-white">Register New Fleet Asset</h2>
        </div>

        <form onSubmit={handleAddVehicle} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Vehicle Model Name</label>
            <input 
              type="text" placeholder="e.g. Toyota Passo" required value={newCar.name}
              className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
              onChange={(e) => setNewCar({...newCar, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Body Classification</label>
            <input 
              type="text" placeholder="e.g. Compact Economy" required value={newCar.type}
              className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
              onChange={(e) => setNewCar({...newCar, type: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Base Fleet Tier</label>
            <select 
              value={newCar.category}
              className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition font-medium"
              onChange={(e) => setNewCar({...newCar, category: e.target.value as any})}
            >
              <option value="Premium">Premium Fleet (Top Display)</option>
              <option value="Comfort">Comfort Tier</option>
              <option value="Economy">Economy Tier (View More section)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Base Daily Price (KES)</label>
            <div className="relative">
              <input 
                type="number" placeholder="3200" required value={newCar.price}
                className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl pl-4 pr-12 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
                onChange={(e) => setNewCar({...newCar, price: e.target.value})}
              />
              <button type="submit" className="absolute right-1.5 top-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold h-9 px-4 rounded-lg text-xs transition active:scale-95">
                Save Asset
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* REGISTRY INVENTORY LOG TABLE */}
      <section className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-black text-gray-900 dark:text-white">Active Database Registry</h2>
          <span className="text-xs font-bold bg-white dark:bg-gray-950 px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-500 dark:text-gray-400">
            Total Logged Assets: {vehicles.length}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                <th className="pb-3 pl-4">Vehicle Model</th>
                <th className="pb-3">Classification</th>
                <th className="pb-3">Placement Priority</th>
                <th className="pb-3">Current Status</th>
                <th className="pb-3">Daily Fee</th>
                <th className="pb-3 text-center">User Visibility</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200 dark:divide-gray-800 font-medium text-gray-700 dark:text-gray-300">
              {vehicles.map((car) => (
                <tr key={car.id} className="hover:bg-gray-100 dark:hover:bg-gray-800/20 transition-all">
                  <td className="py-4 pl-4 font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-center text-blue-500 dark:text-blue-400">
                      <Car className="w-4 h-4" />
                    </div>
                    {car.name}
                  </td>
                  <td className="py-4 text-gray-500 dark:text-gray-400">{car.type}</td>
                  <td className="py-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${
                      car.category === 'Premium' ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/20' :
                      car.category === 'Comfort' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20' :
                      'bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-800'
                    }`}>
                      {car.category}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      car.status === 'Available' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                      car.status === 'On Rent' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' :
                      'bg-red-500/10 text-red-600 dark:text-red-400'
                    }`}>
                      ● {car.status}
                    </span>
                  </td>
                  <td className="py-4 font-bold text-gray-900 dark:text-white">KES {car.price}</td>
                  <td className="py-4 text-center">
                    <button className="text-blue-600 dark:text-blue-500 hover:opacity-80 transition inline-block">
                      <ToggleRight className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}