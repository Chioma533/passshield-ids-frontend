import React, { useState } from 'react';
import { RefreshCw, Play, ShieldAlert, AlertCircle } from 'lucide-react';
import Hero from '../components/dashboard/Hero';
import UploadCard from '../components/upload/UploadCard';
import StatsGrid from '../components/dashboard/StatsGrid';
import MetricsGrid from '../components/dashboard/MetricsGrid';
import AttackCharts from '../components/charts/AttackCharts';
import PredictionsTable from '../components/predictions/PredictionsTable';
import { analyzeTrafficFile } from '../services/intrusionService';

const Dashboard = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [fileName, setFileName] = useState("");
  const [analysisData, setAnalysisData] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalyze = async (file) => {
    if (!file) return;
    setFileName(file.name);
    setIsAnalyzing(true);
    setError(null);
    
    try {
      const result = await analyzeTrafficFile(file);
      setAnalysisData(result);
      setIsAnalyzed(true);
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred during analysis. Please check your backend connection.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setIsAnalyzed(false);
    setFileName("");
    setAnalysisData(null);
    setError(null);
  };

  const scrollToUpload = () => {
    const section = document.getElementById('upload-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl flex items-center gap-3 text-red-800 animate-[fadeIn_0.3s_ease-out]">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-500" />
          <div className="text-sm font-semibold flex-1">{error}</div>
          <button onClick={() => setError(null)} className="text-red-500 hover:text-red-700 font-bold text-xs cursor-pointer px-2 py-1">Dismiss</button>
        </div>
      )}

      {!isAnalyzed && !isAnalyzing && (
        <>
          <Hero onAnalyzeClick={scrollToUpload} />
          <UploadCard onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
        </>
      )}

      {isAnalyzing && (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm max-w-2xl mx-auto my-12 flex flex-col items-center">
          <div className="relative mb-6">
            <div className="w-16 h-16 border-4 border-green-100 border-t-green-500 rounded-full animate-spin"></div>
            <ShieldAlert className="h-6 w-6 text-green-500 absolute inset-0 m-auto animate-pulse" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Analyzing Network Packets</h3>
          <p className="text-slate-500 text-sm max-w-md mb-4 font-medium">
            Running Random Forest ML Classifier on <strong className="text-slate-700">{fileName}</strong>...
          </p>
          <div className="w-64 bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="bg-green-500 h-full w-full origin-left animate-[shimmer_2s_infinite]" style={{
              backgroundImage: 'linear-gradient(to right, #22c55e 30%, #15803d 50%, #22c55e 70%)',
              backgroundSize: '200% 100%'
            }}></div>
          </div>
        </div>
      )}

      {isAnalyzed && (
        <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">Analysis Complete</h2>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">
                Dataset: <span className="text-green-600 font-bold">{fileName}</span>
              </p>
            </div>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reset & Upload New File</span>
            </button>
          </div>

          <StatsGrid data={analysisData?.summaryStats} />
          <AttackCharts data={analysisData?.attackDistribution} />
          <MetricsGrid data={analysisData?.performanceMetrics} />
          <PredictionsTable predictions={analysisData?.predictions} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;