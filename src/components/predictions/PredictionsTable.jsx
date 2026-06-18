import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const PredictionsTable = ({ predictions }) => {
  const records = predictions || [];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Calculate pagination bounds
  const totalPages = Math.ceil(records.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRecords = records.slice(startIndex, startIndex + itemsPerPage);

  // Classify prediction colors and labels
  const getBadgeStyle = (prediction) => {
    switch (prediction) {
      case 'Normal':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'DoS':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Probe':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'R2L':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'U2R':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm mb-8">
      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
        <Eye className="h-5 w-5 text-green-500" />
        <span>Model Predictions Log</span>
      </h3>
      
      {/* Table responsive container */}
      <div className="overflow-x-auto rounded-xl border border-slate-100">
        <table className="min-w-full divide-y divide-slate-100 text-left text-sm text-slate-500">
          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">
            <tr>
              <th className="px-6 py-4 font-bold">Record ID</th>
              <th className="px-6 py-4 font-bold">Timestamp</th>
              <th className="px-6 py-4 font-bold">Protocol</th>
              <th className="px-6 py-4 font-bold">Source IP</th>
              <th className="px-6 py-4 font-bold">Destination IP</th>
              <th className="px-6 py-4 font-bold">Size (B)</th>
              <th className="px-6 py-4 font-bold">Prediction</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white font-medium text-slate-800">
            {currentRecords.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-10 text-center text-slate-400 font-medium">
                  No prediction records available. Upload a network traffic file to begin.
                </td>
              </tr>
            ) : (
              currentRecords.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="whitespace-nowrap px-6 py-4 font-bold text-slate-900">{row.id}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs text-slate-500">{row.timestamp}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-600 font-bold">{row.protocol}</span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs text-slate-600">{row.srcIp}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs text-slate-600">{row.dstIp}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs text-slate-600">{row.packetSize}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${getBadgeStyle(row.prediction)}`}>
                      {row.prediction}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-5 border-t border-slate-100 pt-4 text-slate-500 text-xs">
        <span>
          Showing <strong className="text-slate-800">{startIndex + 1}</strong> to{" "}
          <strong className="text-slate-800">{Math.min(startIndex + itemsPerPage, records.length)}</strong> of{" "}
          <strong className="text-slate-800">{records.length}</strong> records
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-600 disabled:opacity-40 disabled:hover:bg-white cursor-pointer disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          {[...Array(totalPages).keys()].map((index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 rounded-lg border text-xs font-semibold cursor-pointer transition-colors ${
                  currentPage === pageNum
                    ? 'bg-green-500 border-green-500 text-white shadow-sm'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-600 disabled:opacity-40 disabled:hover:bg-white cursor-pointer disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictionsTable;
