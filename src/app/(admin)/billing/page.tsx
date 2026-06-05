"use client";

import React, { useState } from 'react';
import { CreditCard, Search, DollarSign, CheckCircle2, AlertTriangle, ShieldCheck, RefreshCw } from 'lucide-react';

export default function AdminBillingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [methodFilter, setMethodFilter] = useState('All');

  // Premium Transaction Logs Mock Database Stream
  const paymentLedger = [
    { id: "TXN-88401", customer: "Tracy Waithera", gateway: "M-Pesa Express", reference: "RFF89XJ24K", amount: 33060, date: "2026-06-05", time: "02:14 PM", status: "Settled" },
    { id: "TXN-88402", customer: "John Maina", gateway: "M-Pesa Express", reference: "RFF31MZ90P", amount: 33060, date: "2026-06-05", time: "11:45 AM", status: "Settled" },
    { id: "TXN-88399", customer: "David Ndwiga", gateway: "Credit Card", reference: "ch_3Mxs8vLkd3", amount: 4500, date: "2026-06-04", time: "08:10 PM", status: "Failed" },
    { id: "TXN-88350", customer: "Amara Okech", gateway: "Credit Card", reference: "ch_3Mxl2pOpk1", amount: 122000, date: "2026-06-02", time: "04:30 PM", status: "Settled" },
  ];

  // Dynamic Filtering Handlers
  const filteredPayments = paymentLedger.filter(tx => {
    const matchesSearch = tx.reference.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tx.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tx.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMethod = methodFilter === 'All' || tx.gateway === methodFilter;
    return matchesSearch && matchesMethod;
  });

  return (
    <div className="space-y-8 max-w-6xl animate-fade-in">
      
      {/* ACCOUNT FINANCIAL SUMMARY GRID HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white mb-2">Billing & Payment Terminal</h1>
          <p className="text-gray-550 dark:text-gray-400 font-medium text-sm">Audit live gateway tokens, verify encrypted M-Pesa STK payloads, and evaluate real-time financial settlement pipelines.</p>
        </div>
      </div>

      {/* FILTER & INTERACTION STRIP */}
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 rounded-2xl flex flex-col sm:flex-row gap-4 items-center justify-between">
        
        {/* Quick Token Search Box */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search gateway reference or customer keys..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 font-medium"
          />
        </div>

        {/* Gateway Split Channels Selector Menu */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <RefreshCw className="w-3.5 h-3.5 text-gray-400" />
          <select 
            value={methodFilter} 
            onChange={(e) => setMethodFilter(e.target.value)}
            className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 px-3 py-2 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-300 focus:outline-none"
          >
            <option value="All">All Payment Core Channels</option>
            <option value="M-Pesa Express">Safaricom M-Pesa</option>
            <option value="Credit Card">Credit / Debit Cards</option>
          </select>
        </div>

      </div>

      {/* TRANSACTION ACCOUNTAL STREAM TABLE */}
      <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-black text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-gray-200 dark:border-gray-850">
                <th className="p-4">Transaction ID Log</th>
                <th className="p-4">Captured Depositor</th>
                <th className="p-4">Gateway Channel</th>
                <th className="p-4 font-mono">Encrypted Reference String</th>
                <th className="p-4 text-right">Settled Value</th>
                <th className="p-4 text-center">Gateway Code Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-850 text-xs text-gray-700 dark:text-gray-300">
              {filteredPayments.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.01] transition">
                  <td className="p-4 font-mono font-bold text-gray-400 dark:text-gray-500">
                    {tx.id}
                    <span className="block text-[10px] font-normal font-sans text-gray-400 mt-0.5">{tx.date} • {tx.time}</span>
                  </td>
                  <td className="p-4 font-black text-gray-900 dark:text-white text-sm">
                    {tx.customer}
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-md font-bold text-[10px] border ${
                      tx.gateway === 'M-Pesa Express' 
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' 
                        : 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400'
                    }`}>
                      {tx.gateway}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-gray-500 dark:text-gray-400 tracking-wider font-semibold">
                    {tx.reference}
                  </td>
                  <td className="p-4 text-right font-black text-gray-900 dark:text-white text-sm">
                    KES {tx.amount.toLocaleString()}
                  </td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-bold text-[10px] uppercase ${
                      tx.status === 'Settled' 
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                        : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                    }`}>
                      {tx.status === 'Settled' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />}
                      <span>{tx.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
              {filteredPayments.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-gray-400 font-bold tracking-tight">No transactional ledgers matched the filtering string parameters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}