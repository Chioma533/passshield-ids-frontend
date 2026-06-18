import React from 'react';
import { Target, CheckCircle2, Award, Zap, AlertTriangle } from 'lucide-react';
import MetricCard from './MetricCard';

const MetricsGrid = ({ data }) => {
  const accuracy = data?.accuracy ?? 0;
  const precision = data?.precision ?? 0;
  const recall = data?.recall ?? 0;
  const f1Score = data?.f1Score ?? 0;
  const falsePositiveRate = data?.falsePositiveRate ?? 0;

  const metrics = [
    {
      label: "Model Accuracy",
      value: accuracy,
      description: "Overall rate of correct classifications made by the Random Forest model.",
      icon: Target,
      colorClass: "bg-green-500"
    },
    {
      label: "Precision",
      value: precision,
      description: "Ratio of correctly identified intrusions to all predicted intrusions.",
      icon: CheckCircle2,
      colorClass: "bg-green-600"
    },
    {
      label: "Recall / Sensitivity",
      value: recall,
      description: "Ratio of correctly identified intrusions to all actual intrusions.",
      icon: Zap,
      colorClass: "bg-green-600"
    },
    {
      label: "F1 Score",
      value: f1Score,
      description: "Weighted harmonic mean of Precision and Recall. Balanced ML measure.",
      icon: Award,
      colorClass: "bg-emerald-500"
    },
    {
      label: "False Positive Rate",
      value: falsePositiveRate,
      description: "Ratio of normal traffic flagged as threats (lower rate is superior).",
      icon: AlertTriangle,
      colorClass: "bg-red-500"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
        <Award className="h-5 w-5 text-green-500" />
        <span>Random Forest Classifier Performance</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {metrics.map((metric, i) => (
          <MetricCard
            key={i}
            label={metric.label}
            value={metric.value}
            description={metric.description}
            icon={metric.icon}
            colorClass={metric.colorClass}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricsGrid;
