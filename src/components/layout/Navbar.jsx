import React from 'react';
import { ShieldCheck, Activity } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg flex items-center justify-center text-green-600 animate-pulse">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  PassShield <span className="text-green-500">IDS</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  v1.0.0
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden md:block">
                Machine Learning-Based Network Intrusion Detection System
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-slate-600 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-medium text-xs text-slate-500 hidden sm:inline">System Active</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-500 h-0.5 w-full"></div>
    </nav>
  );
};

export default Navbar;
