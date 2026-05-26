"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Car, 
  CalendarClock, 
  PlaneTakeoff, 
  Users, 
  Receipt, 
  Settings, 
  LogOut 
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItemStyle = (path: string) => {
    const isActive = pathname === path;
    return `flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
      isActive 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
        : 'text-gray-400 hover:bg-gray-800/60 hover:text-white'
    }`;
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      
      {/* FIXED SIDEBAR */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 flex flex-col justify-between fixed h-screen top-0 left-0 z-50">
        <div className="space-y-6">
          {/* Brand Identity */}
          <div>
            <span className="text-xs font-black tracking-widest text-blue-500 uppercase block mb-1">Management Portal</span>
            <h1 className="text-xl font-black tracking-tight text-white">Atlas Ops</h1>
          </div>

          <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-160px)] pr-2 scrollbar-thin">
            {/* GENERAL SEGMENT */}
            <div className="space-y-1">
              <Link href="/dashboard" className={navItemStyle('/dashboard')}>
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
            </div>

            {/* OPERATIONS BLOCK */}
            <div className="space-y-1">
              <p className="text-[11px] font-black tracking-wider text-gray-500 uppercase px-4 mb-2">Operations</p>
              <Link href="/admin/fleet" className={navItemStyle('/admin/fleet')}>
                <Car className="w-5 h-5" />
                <span>Fleet Management</span>
              </Link>
              <Link href="/admin/dispatch" className={navItemStyle('/admin/dispatch')}>
                <CalendarClock className="w-5 h-5" />
                <span>Dispatch Calendar</span>
              </Link>
              <Link href="/admin/flights" className={navItemStyle('/admin/flights')}>
                <PlaneTakeoff className="w-5 h-5" />
                <span>Flight Management</span>
              </Link>
            </div>

            {/* MANAGEMENT BLOCK */}
            <div className="space-y-1">
              <p className="text-[11px] font-black tracking-wider text-gray-500 uppercase px-4 mb-2">Management</p>
              <Link href="/admin/customers" className={navItemStyle('/admin/customers')}>
                <Users className="w-5 h-5" />
                <span>Customer Accounts</span>
              </Link>
              <Link href="/admin/billing" className={navItemStyle('/admin/billing')}>
                <Receipt className="w-5 h-5" />
                <span>Billing & Payments</span>
              </Link>
            </div>

            {/* SYSTEM SETTINGS BLOCK */}
            <div className="space-y-1">
              <p className="text-[11px] font-black tracking-wider text-gray-500 uppercase px-4 mb-2">System</p>
              <Link href="/admin/settings" className={navItemStyle('/admin/settings')}>
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-4 border-t border-gray-800">
          <Link href="/" className="flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-bold text-gray-400 hover:bg-red-950/30 hover:text-red-400 transition-all">
            <LogOut className="w-5 h-5" />
            <span>Exit Portal</span>
          </Link>
        </div>
      </aside>

      {/* MAIN LAYOUT WRAPPER */}
      <div className="flex-1 pl-64 flex flex-col min-h-screen">
        {/* Top Control bar */}
        <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8 sticky top-0 z-40">
          <h2 className="font-bold text-gray-400 text-sm flex items-center gap-2">
            System Node: <span className="text-emerald-400 font-black flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>Operational</span>
          </h2>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-bold text-white">Admin Operator</p>
              <p className="text-xs text-gray-500 font-medium">HQ - Nairobi</p>
            </div>
            <div className="w-10 h-10 bg-blue-600/10 border border-blue-500/20 rounded-full flex items-center justify-center font-black text-blue-400 shadow-inner">
              A
            </div>
          </div>
        </header>

        {/* Dashboard Content Container */}
        <main className="p-8 flex-1 bg-gray-950">
          {children}
        </main>
      </div>

    </div>
  );
}