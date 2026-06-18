import React from 'react';
import { Database, ShieldCheck, ShieldAlert, Activity } from 'lucide-react';
import StatCard from './StatCard';

const StatsGrid = ({ data }) => {
  const totalRecords = data?.totalRecords ?? 0;
  const normalTraffic = data?.normalTraffic ?? 0;
  const threatsDetected = data?.threatsDetected ?? 0;
  const riskLevel = data?.riskLevel ?? "Low";

  // Formatting utility
  const formatNum = (num) => new Intl.NumberFormat().format(num);

  const normalPct = totalRecords > 0 ? ((normalTraffic / totalRecords) * 100).toFixed(1) + "%" : "0.0%";
  const threatsPct = totalRecords > 0 ? ((threatsDetected / totalRecords) * 100).toFixed(1) + "%" : "0.0%";

  const getRiskBadge = (level) => {
    switch (level) {
      case 'Critical':
        return { label: "Critical Range", bg: "bg-red-100", text: "text-red-800" };
      case 'High':
        return { label: "High Range", bg: "bg-orange-100", text: "text-orange-800" };
      case 'Medium':
        return { label: "Medium Range", bg: "bg-amber-100", text: "text-amber-800" };
      default:
        return { label: "Safe Range", bg: "bg-green-100", text: "text-green-800" };
    }
  };

  const riskBadge = getRiskBadge(riskLevel);

  const stats = [
    {
      title: "Total Traffic Records",
      value: formatNum(totalRecords),
      icon: Database,
      type: "info",
      badge: { label: "100%", bg: "bg-slate-100", text: "text-slate-800" }
    },
    {
      title: "Normal Traffic",
      value: formatNum(normalTraffic),
      icon: ShieldCheck,
      type: "success",
      badge: { label: normalPct, bg: "bg-green-100", text: "text-green-800" }
    },
    {
      title: "Threats Detected",
      value: formatNum(threatsDetected),
      icon: ShieldAlert,
      type: "danger",
      badge: { label: threatsPct, bg: "bg-red-100", text: "text-red-800" }
    },
    {
      title: "Current Risk Level",
      value: riskLevel,
      icon: Activity,
      type: "warning",
      badge: riskBadge
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, i) => (
        <StatCard
          key={i}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          type={stat.type}
          badge={stat.badge}
        />
      ))}
    </div>
  );
};

export default StatsGrid;
