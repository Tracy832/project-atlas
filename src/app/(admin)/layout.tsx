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

  // Completely isolate the login page layout from the sidebar workspace wrapper
  if (pathname === '/admin-login') {
    return <>{children}</>;
  }

  const navItemStyle = (path: string) => {
    const isActive = pathname === path;
    return `flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
      isActive 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
        : 'text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white'
    }`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white flex transition-colors duration-200">
      
      {/* FIXED SIDEBAR CONTROL PANEL */}
      <aside className="w-64 bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between fixed h-screen top-0 left-0 z-50 shadow-sm">
        <div className="space-y-6">
          <div>
            <span className="text-xs font-black tracking-widest text-blue-600 dark:text-blue-500 uppercase block mb-1">Management Portal</span>
            <h1 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">Atlas Ops</h1>
          </div>

          <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-160px)] pr-2">
            {/* CORE ANALYTICS SEGMENT */}
            <div className="space-y-1">
              <Link href="/dashboard" className={navItemStyle('/dashboard')}>
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
            </div>

            {/* OPERATIONS MANAGEMENT BLOCK */}
            <div className="space-y-1">
              <p className="text-[11px] font-black tracking-wider text-gray-400 dark:text-gray-500 uppercase px-4 mb-2">Operations</p>
              <Link href="/fleet" className={navItemStyle('/fleet')}>
                <Car className="w-5 h-5" />
                <span>Fleet Management</span>
              </Link>
              <Link href="#" className={navItemStyle('/dispatch')}>
                <CalendarClock className="w-5 h-5" />
                <span>Dispatch Calendar</span>
              </Link>
              <Link href="#" className={navItemStyle('/flights')}>
                <PlaneTakeoff className="w-5 h-5" />
                <span>Flight Management</span>
              </Link>
            </div>

            {/* CORPORATE RECORDS BLOCK */}
            <div className="space-y-1">
              <p className="text-[11px] font-black tracking-wider text-gray-400 dark:text-gray-500 uppercase px-4 mb-2">Management</p>
              <Link href="#" className={navItemStyle('/customers')}>
                <Users className="w-5 h-5" />
                <span>Customer Accounts</span>
              </Link>
              <Link href="#" className={navItemStyle('/billing')}>
                <Receipt className="w-5 h-5" />
                <span>Billing & Payments</span>
              </Link>
            </div>

            {/* CORE SYSTEM CONFIGURATIONS BLOCK */}
            <div className="space-y-1">
              <p className="text-[11px] font-black tracking-wider text-gray-400 dark:text-gray-500 uppercase px-4 mb-2">System</p>
              <Link href="/settings" className={navItemStyle('/settings')}>
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </div>

        {/* SYSTEM EXIT ROOT CONTROL LINK */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
          <Link href="/" className="flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-bold text-gray-500 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-600 transition-all">
            <LogOut className="w-5 h-5" />
            <span>Exit Portal</span>
          </Link>
        </div>
      </aside>

      {/* INDEPENDENT WORKSPACE CONTENT LAYER */}
      <div className="flex-1 pl-64 flex flex-col min-h-screen">
        <main className="p-8 flex-1">
          {children}
        </main>
      </div>

    </div>
  );
}