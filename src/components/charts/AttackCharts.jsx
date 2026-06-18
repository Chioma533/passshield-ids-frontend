import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { BarChart3, PieChart } from 'lucide-react';

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const AttackCharts = ({ data }) => {
  const pie = data?.pie || { labels: [], data: [], colors: [] };
  const bar = data?.bar || { labels: [], data: [], colors: [] };

  // Pie chart config
  const pieData = {
    labels: pie.labels,
    datasets: [
      {
        data: pie.data,
        backgroundColor: pie.colors,
        borderWidth: 1,
        borderColor: '#ffffff',
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { family: 'Inter, sans-serif', size: 11, weight: '500' },
          usePointStyle: true,
          padding: 15,
        },
      },
    },
  };

  // Bar chart config
  const barData = {
    labels: bar.labels,
    datasets: [
      {
        label: 'Traffic Events',
        data: bar.data,
        backgroundColor: bar.colors,
        borderRadius: 8,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { family: 'Inter, sans-serif', size: 11 } },
      },
      y: {
        grid: { color: '#F1F5F9' },
        ticks: { font: { family: 'Inter, sans-serif', size: 11 } },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Pie Chart Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
          <PieChart className="h-4.5 w-4.5 text-green-500" />
          <span>Traffic Type Distribution (%)</span>
        </h3>
        <div className="h-72 relative flex items-center justify-center">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>

      {/* Bar Chart Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
          <BarChart3 className="h-4.5 w-4.5 text-green-500" />
          <span>Intrusion Types Count</span>
        </h3>
        <div className="h-72 relative">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

export default AttackCharts;
