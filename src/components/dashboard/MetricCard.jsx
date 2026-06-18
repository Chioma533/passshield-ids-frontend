import React from 'react';

const MetricCard = ({ label, value, description, icon: Icon, colorClass = "bg-green-500" }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm transition-all hover:shadow hover:-translate-y-0.5">
      <div className="flex justify-between items-start mb-3">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
          <h4 className="text-2xl font-extrabold text-slate-900">{value}%</h4>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-50 text-slate-500 border border-slate-100">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-full bg-slate-100 rounded-full h-1.5 mb-3">
        <div 
          className={`h-1.5 rounded-full ${colorClass} transition-all duration-1000`} 
          style={{ width: `${value}%` }}
        />
      </div>
      
      <p className="text-xs text-slate-400 font-medium leading-relaxed">{description}</p>
    </div>
  );
};

export default MetricCard;
