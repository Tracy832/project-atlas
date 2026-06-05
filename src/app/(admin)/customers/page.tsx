"use client";

import React, { useState } from 'react';
import { Users, Search, Filter, ShieldCheck, Mail, ArrowUpRight, Award } from 'lucide-react';

export default function AdminCustomersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('All');

  // Premium Database Profiles Sample Data Matrix
  const customerAccounts = [
    { id: "USR-904", name: "Tracy Waithera", email: "tracy@domain.co.ke", status: "Active", bookings: 12, spent: 145000, tier: "VIP Elite", created: "2026-01-15" },
    { id: "USR-312", name: "John Maina", email: "j.maina@outlook.com", status: "Active", bookings: 4, spent: 33060, tier: "Standard", created: "2026-03-22" },
    { id: "USR-088", name: "David Ndwiga", email: "ndwiga.d@gmail.com", status: "Suspended", bookings: 1, spent: 4500, tier: "Standard", created: "2026-04-02" },
    { id: "USR-712", name: "Amina Omondi", email: "amina.o@africa.co", status: "Active", bookings: 32, spent: 589000, tier: "VIP Elite", created: "2025-11-10" },
  ];

  // Logic for Multi-Param Dynamic Lookups
  const filteredAccounts = customerAccounts.filter(account => {
    const matchesSearch = account.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          account.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          account.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = selectedTier === 'All' || account.tier === selectedTier;
    return matchesSearch && matchesTier;
  });

  return (
    <div className="space-y-8 max-w-6xl animate-fade-in">
      
      {/* SECTION EXPLANATORY HEADER CONTAINER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white mb-2">Customer Account Index</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">Monitor user lifecycle logs, manage platform service levels, and track cross-county customer lifetime spending vectors.</p>
        </div>
      </div>

      {/* FILTER & INTERACTION CONTROLS BAR */}
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 rounded-2xl flex flex-col sm:flex-row gap-4 items-center justify-between">
        
        {/* Dynamic Multi-Param Filtering Field */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search accounts by token, name, or email..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 font-medium"
          />
        </div>

        {/* Tier Segmentation Dropdown Toggle Menu */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <Filter className="w-4 h-4 text-gray-400" />
          <select 
            value={selectedTier} 
            onChange={(e) => setSelectedTier(e.target.value)}
            className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 px-3 py-2 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-300 focus:outline-none"
          >
            <option value="All">All Tiers Matrix</option>
            <option value="VIP Elite">VIP Elite Tier</option>
            <option value="Standard">Standard Tier</option>
          </select>
        </div>

      </div>

      {/* RE-USABLE SCANNABLE ADMINISTRATIVE LEDGER MATRIX */}
      <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-black text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-gray-200 dark:border-gray-850">
                <th className="p-4">Customer ID Mapping</th>
                <th className="p-4">Profile Metadata</th>
                <th className="p-4">System Access Node</th>
                <th className="p-4 text-center">Fulfilled Bookings</th>
                <th className="p-4 text-right">Lifetime Value (LTV)</th>
                <th className="p-4 text-center">Service Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-850 text-xs text-gray-700 dark:text-gray-300">
              {filteredAccounts.map((account) => (
                <tr key={account.id} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.01] transition">
                  <td className="p-4 font-mono font-bold text-gray-400 dark:text-gray-500">
                    {account.id}
                    <span className="block text-[10px] font-normal text-gray-400 font-sans mt-0.5">Joined: {account.created}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="font-black text-gray-900 dark:text-white text-sm">{account.name}</span>
                      <span className="text-[11px] text-gray-400 flex items-center gap-1 mt-0.5"><Mail className="w-3 h-3" /> {account.email}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-bold text-[10px] uppercase tracking-wide border ${
                      account.status === 'Active' 
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' 
                        : 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${account.status === 'Active' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                      {account.status}
                    </span>
                  </td>
                  <td className="p-4 text-center font-bold text-gray-900 dark:text-white">
                    {account.bookings} slots
                  </td>
                  <td className="p-4 text-right font-black text-gray-900 dark:text-white text-sm">
                    KES {account.spent.toLocaleString()}
                  </td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md font-bold text-[10px] uppercase border ${
                      account.tier === 'VIP Elite' 
                        ? 'bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400' 
                        : 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400'
                    }`}>
                      <Award className="w-3 h-3" />
                      {account.tier}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredAccounts.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-gray-400 font-bold tracking-tight">No consumer profiles matched the filtering parameters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}