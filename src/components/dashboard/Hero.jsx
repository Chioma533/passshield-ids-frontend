import React from 'react';
import { Cpu, Terminal, Play } from 'lucide-react';

const Hero = ({ onAnalyzeClick }) => {
  return (
    <div className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm mb-8">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#22C55E 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-green-200">
          <Cpu className="h-3.5 w-3.5" />
          <span>Random Forest Classifier Integrated</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-none mb-4">
          Detect Cyber Threats Using <span className="text-green-500">Machine Learning</span>
        </h1>
        
        <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
          Analyze network traffic datasets and identify malicious activities using a Random Forest intrusion detection model. Upload capture files to predict Normal and Threat signatures in real time.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button
            onClick={onAnalyzeClick}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-colors shadow-md hover:shadow-lg cursor-pointer space-x-2"
          >
            <Play className="h-4 w-4 fill-current" />
            <span>Analyze Traffic</span>
          </button>
          
          <div className="inline-flex items-center space-x-2 text-xs font-medium text-slate-500 border border-slate-200 bg-slate-50 px-4 py-2.5 rounded-xl">
            <Terminal className="h-3.5 w-3.5 text-slate-400" />
            <span>Support: CSV Format (KDD Cup '99 Compatible)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
