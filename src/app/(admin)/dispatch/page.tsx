"use client";

import React, { useState } from 'react';
import { Calendar, UserCheck, MapPin, Clock, ArrowRight } from 'lucide-react';

interface TransferTask {
  id: number;
  customer: string;
  route: string;
  vehicle: string;
  time: string;
  driver: string;
  status: 'Pending' | 'Assigned' | 'En Route' | 'Completed';
}

export default function DispatchCalendarPage() {
  const [tasks, setTasks] = useState<TransferTask[]>([
    { id: 1, customer: "John Kamau", route: "JKIA ➔ Westlands", vehicle: "BMW 5 Series", time: "08:30 AM", driver: "Mwangi J.", status: "En Route" },
    { id: 2, customer: "Amina Omondi", route: "JKIA ➔ Utawala Hotel", vehicle: "Toyota Premio", time: "11:15 AM", driver: "Unassigned", status: "Pending" },
    { id: 3, customer: "David Mwangi", route: "Moi Airport ➔ Diani Beach", vehicle: "Toyota Prado TX", time: "02:00 PM", driver: "Otieno O.", status: "Assigned" },
    { id: 4, customer: "Sarah Jenkins", route: "Wilson Airport ➔ Karen", vehicle: "Toyota Vitz", time: "04:45 PM", driver: "Kamau P.", status: "Pending" },
  ]);

  const handleAssignDriver = (id: number, driverName: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, driver: driverName, status: 'Assigned' } : task
    ));
    alert(`Driver ${driverName} successfully assigned to route request.`);
  };

  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white mb-2">Dispatch Calendar</h1>
        <p className="text-gray-550 dark:text-gray-400 font-medium">Coordinate dynamic transfers, allocate personal chauffeurs, and track cross-county scheduling timelines.</p>
      </div>

      {/* TIMELINE OVERVIEW BOARD */}
      <section className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
        <div className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-4 mb-6">
          <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-500" />
          <h2 className="text-lg font-black text-gray-900 dark:text-white">Daily Dispatch Stream</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-6 rounded-xl space-y-4 shadow-sm hover:border-gray-300 dark:hover:border-gray-700 transition">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1">Customer Account</span>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{task.customer}</h3>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  task.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                  task.status === 'En Route' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' :
                  task.status === 'Assigned' ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400' :
                  'bg-amber-500/10 text-amber-600 dark:text-amber-400 animate-pulse'
                }`}>
                  {task.status}
                </span>
              </div>

              {/* Transfer Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 text-sm border-y border-gray-100 dark:border-gray-800 py-3 font-medium text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{task.route}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{task.time}</span>
                </div>
                <div className="col-span-2 text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">
                  Assigned Unit: <span className="text-blue-600 dark:text-blue-400 font-black">{task.vehicle}</span>
                </div>
              </div>

              {/* Driver Assignment Controls */}
              <div className="flex items-center justify-between pt-1">
                <div className="text-sm">
                  <span className="text-xs text-gray-400 block font-bold uppercase">Chauffeur Logs</span>
                  <span className="font-bold text-gray-800 dark:text-gray-200">{task.driver}</span>
                </div>

                {task.driver === "Unassigned" && (
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleAssignDriver(task.id, "Maina K.")}
                      className="bg-gray-100 dark:bg-gray-900 hover:bg-blue-600 hover:text-white text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200 dark:border-gray-800 hover:border-blue-600 transition"
                    >
                      Assign Maina
                    </button>
                    <button 
                      onClick={() => handleAssignDriver(task.id, "Omondi P.")}
                      className="bg-gray-100 dark:bg-gray-900 hover:bg-blue-600 hover:text-white text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200 dark:border-gray-800 hover:border-blue-600 transition"
                    >
                      Assign Omondi
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}