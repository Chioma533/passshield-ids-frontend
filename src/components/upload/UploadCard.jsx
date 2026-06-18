import React, { useState, useRef } from 'react';
import { UploadCloud, FileSpreadsheet, Play, X } from 'lucide-react';

const UploadCard = ({ onAnalyze, isAnalyzing }) => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.name.endsWith('.csv')) {
        setFile(droppedFile);
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  const clearFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div id="upload-section" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm max-w-2xl mx-auto w-full mb-8 transition-all hover:shadow-md">
      <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
        <FileSpreadsheet className="h-5 w-5 text-green-500" />
        <span>Load Network Traffic Dataset</span>
      </h2>
      <p className="text-sm text-slate-500 mb-6 font-medium">
        Upload a network CSV file to test and identify potential intrusions using the ML classifier.
      </p>

      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={!file ? triggerFileSelect : undefined}
        className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
          dragActive ? 'border-green-500 bg-green-50' : 'border-slate-300 hover:border-green-400 hover:bg-slate-50/50'
        } ${file ? 'cursor-default pointer-events-none' : ''}`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleChange}
        />

        {file ? (
          <div className="flex flex-col items-center py-2 relative w-full pointer-events-auto">
            <button
              onClick={clearFile}
              className="absolute -top-2 right-0 bg-slate-100 hover:bg-slate-200 text-slate-500 p-1.5 rounded-full cursor-pointer transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="bg-green-100 p-4 rounded-full text-green-600 mb-3 animate-bounce">
              <FileSpreadsheet className="h-8 w-8" />
            </div>
            <span className="font-semibold text-slate-800 text-sm max-w-xs truncate">{file.name}</span>
            <span className="text-xs text-slate-400 mt-1 font-medium">{(file.size / 1024).toFixed(2)} KB</span>
          </div>
        ) : (
          <>
            <div className="bg-green-50 p-4 rounded-full text-green-500 mb-3">
              <UploadCloud className="h-8 w-8" />
            </div>
            <p className="font-semibold text-slate-800 text-sm mb-1">
              Drag & drop your CSV file here, or <span className="text-green-500 underline">browse</span>
            </p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Supports only .csv files</p>
          </>
        )}
      </div>

      <div className="mt-6 flex gap-3">
        {!file && (
          <button
            onClick={triggerFileSelect}
            className="flex-1 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 py-3 px-4 rounded-xl font-semibold text-sm transition-all shadow-sm cursor-pointer"
          >
            Choose File
          </button>
        )}
        <button
          disabled={!file || isAnalyzing}
          onClick={() => onAnalyze(file)}
          className={`flex-1 flex items-center justify-center gap-2 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all shadow-sm ${
            file && !isAnalyzing
              ? 'bg-green-500 hover:bg-green-600 cursor-pointer hover:shadow'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          {isAnalyzing ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Analyzing Network Data...</span>
            </>
          ) : (
            <>
              <Play className="h-4 w-4 fill-current" />
              <span>Analyze Traffic</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default UploadCard;
