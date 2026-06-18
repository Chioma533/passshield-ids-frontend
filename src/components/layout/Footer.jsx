import React from 'react';
import { ShieldAlert } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-slate-500 text-sm">
        <div className="flex items-center space-x-2">
          <ShieldAlert className="h-4 w-4 text-green-500" />
          <span className="font-semibold text-slate-700">PassShield IDS &copy; 2026</span>
        </div>
        <div className="text-xs text-slate-400 font-medium">
          Developed for academic demonstration purposes.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
