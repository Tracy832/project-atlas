"use client";

import React, { useState } from 'react';
import { PlaneTakeoff, Plus, Users, ShieldAlert } from 'lucide-react';

interface FlightSchedule {
  id: number;
  flightNo: string;
  route: string;
  carrier: string;
  capacity: string;
  fare: string;
  status: 'On Time' | 'Delayed' | 'Boarding';
}

export default function FlightManagementPage() {
  const [schedules, setSchedules] = useState<FlightSchedule[]>([
    { id: 1, flightNo: "KP-042", route: "Nairobi (NBO) ➔ Mombasa (MBA)", carrier: "Kenya Airways", capacity: "112 / 120 Pax", fare: "7,500", status: "On Time" },
    { id: 2, flightNo: "JM-108", route: "Nairobi (NBO) ➔ Kisumu (KIS)", carrier: "Jambojet", capacity: "74 / 78 Pax", fare: "6,200", status: "Boarding" },
    { id: 3, flightNo: "KP-119", route: "Nairobi (NBO) ➔ Eldoret (EDL)", carrier: "Kenya Airways", capacity: "45 / 78 Pax", fare: "6,800", status: "Delayed" },
  ]);

  const [newFlight, setNewFlight] = useState({ flightNo: '', route: '', carrier: '', fare: '' });

  const handleCreateSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    const entry: FlightSchedule = {
      id: Date.now(),
      flightNo: newFlight.flightNo.toUpperCase(),
      route: newFlight.route,
      carrier: newFlight.carrier,
      capacity: "0 / 78 Pax",
      fare: Number(newFlight.fare).toLocaleString(),
      status: 'On Time'
    };
    setSchedules([entry, ...schedules]);
    setNewFlight({ flightNo: '', route: '', carrier: '', fare: '' });
    alert(`Flight route ${entry.flightNo} registered successfully.`);
  };

  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white mb-2">Flight Management</h1>
        <p className="text-gray-550 dark:text-gray-400 font-medium">Control domestic flight parameters, organize ticketing lines, and update active schedules.</p>
      </div>

      {/* 1. ADD NEW ROUTE ENTRY BLOCK */}
      <section className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-4 mb-6">
          <Plus className="w-5 h-5 text-blue-600 dark:text-blue-500" />
          <h2 className="text-lg font-black text-gray-900 dark:text-white">Create Airline Schedule</h2>
        </div>

        <form onSubmit={handleCreateSchedule} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Flight Serial No</label>
            <input 
              type="text" placeholder="e.g. JM-204" required value={newFlight.flightNo}
              className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
              onChange={(e) => setNewFlight({...newFlight, flightNo: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Operating Carrier</label>
            <input 
              type="text" placeholder="e.g. Jambojet" required value={newFlight.carrier}
              className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
              onChange={(e) => setNewFlight({...newFlight, carrier: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Route Segment Vector</label>
            <input 
              type="text" placeholder="NBO ➔ MBA" required value={newFlight.route}
              className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
              onChange={(e) => setNewFlight({...newFlight, route: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Base Ticket Cost (KES)</label>
            <div className="relative">
              <input 
                type="number" placeholder="6500" required value={newFlight.fare}
                className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl pl-4 pr-12 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
                onChange={(e) => setNewFlight({...newFlight, fare: e.target.value})}
              />
              <button type="submit" className="absolute right-1.5 top-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold h-9 px-4 rounded-lg text-xs transition active:scale-95">
                Lock Route
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* 2. SCHEDULE LOG DATA REGISTRY */}
      <section className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-black text-gray-900 dark:text-white">Active Air Traffic Log</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                <th className="pb-3 pl-4">Flight Code</th>
                <th className="pb-3">Carrier Line</th>
                <th className="pb-3">Sector Vectors</th>
                <th className="pb-3">Manifest Load</th>
                <th className="pb-3">Status Flag</th>
                <th className="pb-3 text-right pr-4">Base Fare</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200 dark:divide-gray-800 font-medium text-gray-700 dark:text-gray-300">
              {schedules.map((f) => (
                <tr key={f.id} className="hover:bg-gray-100 dark:hover:bg-gray-800/20 transition-all">
                  <td className="py-4 pl-4 font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <PlaneTakeoff className="w-4 h-4" />
                    </div>
                    {f.flightNo}
                  </td>
                  <td className="py-4 text-gray-500 dark:text-gray-400">{f.carrier}</td>
                  <td className="py-4 text-gray-900 dark:text-white font-bold">{f.route}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span>{f.capacity}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      f.status === 'On Time' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                      f.status === 'Boarding' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 animate-pulse' :
                      'bg-red-500/10 text-red-600 dark:text-red-400'
                    }`}>
                      ● {f.status}
                    </span>
                  </td>
                  <td className="py-4 text-right pr-4 font-black text-gray-900 dark:text-white">KES {f.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}