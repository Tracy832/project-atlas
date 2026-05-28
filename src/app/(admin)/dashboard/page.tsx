"use client";

import React from 'react';
import { Car, Plane, Calendar, Banknote } from 'lucide-react';

export default function AdminDashboardPage() {
  const statsSummary = [
    { label: "Active Fleet Vehicles", value: "34 / 42", change: "8 currently out on hire", color: "text-blue-600 dark:text-blue-400", icon: Car },
    { label: "Domestic Flight Loads", value: "118 Pax", change: "+4% growth vs yesterday", color: "text-purple-600 dark:text-purple-400", icon: Plane },
    { label: "Dispatches Today", value: "14 Routes", change: "4 pending airport transfers", color: "text-amber-600 dark:text-amber-400", icon: Calendar },
    { label: "Settled Invoices", value: "KES 840.5K", change: "Current cycle collections", color: "text-emerald-600 dark:text-emerald-400", icon: Banknote },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white mb-2">Operational Analytics</h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium">Real-time control monitoring logs across all active Kenyan networks.</p>
      </div>

      {/* METRICS DISPATCH MODULE CARD GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsSummary.map((stat, i) => {
          const IconComponent = stat.icon;
          return (
            <div key={i} className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm flex flex-col justify-between group hover:border-gray-300 dark:hover:border-gray-700/80 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className={`text-3xl font-black tracking-tight ${stat.color}`}>{stat.value}</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl group-hover:bg-blue-600/10 group-hover:border-blue-500/20 transition-all duration-300">
                  <IconComponent className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-bold bg-white dark:bg-gray-950 px-2.5 py-1.5 rounded-lg inline-block self-start border border-gray-200 dark:border-gray-800/50">
                {stat.change}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}