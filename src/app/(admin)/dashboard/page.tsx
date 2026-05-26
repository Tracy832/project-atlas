"use client";

import React from 'react';
import { Car, Plane, Calendar, Banknote } from 'lucide-react';

export default function AdminDashboardPage() {
  const statsSummary = [
    { label: "Active Fleet Vehicles", value: "34 / 42", change: "8 currently out on hire", color: "text-blue-500", icon: Car },
    { label: "Domestic Flight Loads", value: "118 Pax", change: "+4% growth vs yesterday", color: "text-purple-500", icon: Plane },
    { label: "Dispatches Today", value: "14 Routes", change: "4 pending airport transfers", color: "text-amber-500", icon: Calendar },
    { label: "Settled Invoices", value: "KES 840.5K", change: "Current cycle collections", color: "text-emerald-500", icon: Banknote },
  ];

  return (
    <div className="space-y-8">
      {/* Title block */}
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white mb-2">Operational Analytics</h1>
        <p className="text-gray-400 font-medium">Real-time control monitoring logs across all active Kenyan networks.</p>
      </div>

      {/* METRIC GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsSummary.map((stat, i) => {
          const IconComponent = stat.icon;
          return (
            <div key={i} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-sm flex flex-col justify-between group hover:border-gray-700/80 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className={`text-3xl font-black tracking-tight ${stat.color}`}>{stat.value}</p>
                </div>
                <div className="p-3 bg-gray-950 border border-gray-800 rounded-xl group-hover:bg-blue-600/10 group-hover:border-blue-500/20 transition-all duration-300">
                  <IconComponent className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
              <p className="text-xs text-gray-400 font-bold bg-gray-950 px-2.5 py-1.5 rounded-lg inline-block self-start border border-gray-800/50">
                {stat.change}
              </p>
            </div>
          );
        })}
      </section>

      {/* RECENT FEED TABLE */}
      <section className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <div className="mb-6">
          <h2 className="text-lg font-black text-white">Live System Order Feed</h2>
          <p className="text-sm text-gray-400 font-medium">Most recent activity tracking data points.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 text-xs font-bold text-gray-500 uppercase tracking-wider">
                <th className="pb-3">Account Holder</th>
                <th className="pb-3">Module</th>
                <th className="pb-3">Allocation Parameters</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right">Transaction</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-800 font-medium text-gray-300">
              <tr className="hover:bg-gray-800/20 transition-all">
                <td className="py-4 font-bold text-white">John Kamau</td>
                <td className="py-4 text-blue-500 font-bold">Fleet Ops</td>
                <td className="py-4">Toyota Prado TX (Self-Drive)</td>
                <td className="py-4"><span className="text-xs font-bold bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full">Confirmed</span></td>
                <td className="py-4 text-right font-bold text-white">KES 15,000</td>
              </tr>
              <tr className="hover:bg-gray-800/20 transition-all">
                <td className="py-4 font-bold text-white">Amina Omondi</td>
                <td className="py-4 text-purple-500 font-bold">Flight Ops</td>
                <td className="py-4">Nairobi (JKIA) ➔ Mombasa (MBA)</td>
                <td className="py-4"><span className="text-xs font-bold bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-full">Pending</span></td>
                <td className="py-4 text-right font-bold text-white">KES 7,500</td>
              </tr>
              <tr className="hover:bg-gray-800/20 transition-all">
                <td className="py-4 font-bold text-white">David Mwangi</td>
                <td className="py-4 text-amber-500 font-bold">Dispatch</td>
                <td className="py-4">JKIA Transfer (BMW 5 Series)</td>
                <td className="py-4"><span className="text-xs font-bold bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-full">Dispatched</span></td>
                <td className="py-4 text-right font-bold text-white">KES 4,500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}