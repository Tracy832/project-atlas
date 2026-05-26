"use client";

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, ShieldAlert, Sliders } from 'lucide-react';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Title block */}
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white dark:text-white light:text-gray-900 mb-2">
          System Settings
        </h1>
        <p className="text-gray-400 font-medium">Manage global presentation themes and administrative system access keys.</p>
      </div>

      {/* THEME CONFIGURATION CONTROL BLOCK */}
      <section className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-gray-800 pb-4">
          <Sliders className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-black text-white">Appearance Settings</h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-white mb-0.5">Interface Theme Mode</p>
            <p className="text-xs text-gray-400 font-medium">Toggle between light and dark backgrounds dynamically across all files.</p>
          </div>

          {/* Dynamic Interactive Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center gap-3 bg-gray-950 hover:bg-gray-850 border border-gray-800 hover:border-gray-700 px-6 py-3 rounded-xl font-bold text-sm transition-all text-white active:scale-95 shadow-md"
          >
            {theme === 'light' ? (
              <>
                <Moon className="w-4 h-4 text-purple-400" />
                <span>Switch to Dark Mode</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Switch to Light Mode</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* SYSTEM ACCESS CONTROL MOCK BLOCK */}
      <section className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-sm opacity-60">
        <div className="flex items-center gap-2 border-b border-gray-800 pb-4">
          <ShieldAlert className="w-5 h-5 text-red-400" />
          <h2 className="text-lg font-black text-white">Security & API Keys</h2>
        </div>
        <p className="text-xs text-gray-500 font-medium mt-4">Database node authentication guards are locked by master environment keys.</p>
      </section>
    </div>
  );
}