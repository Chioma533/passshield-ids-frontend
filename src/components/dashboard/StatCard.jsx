import React from 'react';

const StatCard = ({ title, value, icon: Icon, type = 'info', badge }) => {
  // Determine border, bg and text styles based on type
  const styles = {
    info: {
      border: 'border-slate-200',
      bg: 'bg-white',
      iconBg: 'bg-green-50 text-green-600',
      valueColor: 'text-slate-900',
    },
    success: {
      border: 'border-green-200',
      bg: 'bg-white',
      iconBg: 'bg-green-100 text-green-700',
      valueColor: 'text-green-700',
    },
    warning: {
      border: 'border-amber-200',
      bg: 'bg-white',
      iconBg: 'bg-amber-100 text-amber-700',
      valueColor: 'text-amber-700',
    },
    danger: {
      border: 'border-red-200',
      bg: 'bg-white',
      iconBg: 'bg-red-100 text-red-700',
      valueColor: 'text-red-700',
    }
  };

  const activeStyle = styles[type] || styles.info;

  return (
    <div className={`border ${activeStyle.border} ${activeStyle.bg} rounded-2xl p-5 shadow-sm flex items-center justify-between transition-all hover:-translate-y-0.5 hover:shadow`}>
      <div className="space-y-1.5 flex-1 min-w-0 pr-2">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider truncate">{title}</p>
        <div className="flex items-baseline gap-2">
          <span className={`text-2xl font-bold tracking-tight ${activeStyle.valueColor}`}>{value}</span>
          {badge && (
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${badge.bg} ${badge.text}`}>
              {badge.label}
            </span>
          )}
        </div>
      </div>
      <div className={`${activeStyle.iconBg} p-3.5 rounded-xl flex items-center justify-center`}>
        <Icon className="h-6 w-6" />
      </div>
    </div>
  );
};

export default StatCard;
