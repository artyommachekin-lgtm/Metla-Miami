import React from 'react';
import { CheckCircle2, Users, FolderCheck, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StatsPanel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-20 -mt-16 mx-4 md:mx-auto max-w-6xl">
      <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
          
          {/* Stat 1 */}
          <div className="p-6 flex flex-col items-center md:items-start group hover:bg-white/5 transition-colors duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-teal-500/20 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-teal-400" />
              </div>
              <span className="text-4xl font-light font-serif">50</span>
            </div>
            <p className="text-sm uppercase tracking-widest text-gray-300 font-semibold">Point Checklist</p>
            <p className="text-xs text-gray-400 mt-1">Standardized Excellence</p>
          </div>

          {/* Stat 2 */}
          <div className="p-6 flex flex-col items-center md:items-start group hover:bg-white/5 transition-colors duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-blue-500/20 rounded-full">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-4xl font-light font-serif">1000+</span>
            </div>
            <p className="text-sm uppercase tracking-widest text-gray-300 font-semibold">Recurring Clients</p>
            <p className="text-xs text-gray-400 mt-1">Trusted since San Diego</p>
          </div>

          {/* Stat 3 */}
          <div className="p-6 flex flex-col items-center md:items-start group hover:bg-white/5 transition-colors duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-purple-500/20 rounded-full">
                <FolderCheck className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-4xl font-light font-serif">5000+</span>
            </div>
            <p className="text-sm uppercase tracking-widest text-gray-300 font-semibold">Projects Done</p>
            <p className="text-xs text-gray-400 mt-1">Residential & Commercial</p>
          </div>

          {/* Stat 4 - CTA style */}
          <div 
            onClick={() => navigate('/policies#satisfaction-guarantee')}
            className="p-6 flex flex-col items-center justify-center bg-teal-600/90 hover:bg-teal-600 transition-colors cursor-pointer text-center md:text-left"
          >
             <div className="flex items-center space-x-2 mb-1">
                <Award className="w-6 h-6 text-white" />
                <span className="text-2xl font-serif">100%</span>
             </div>
             <p className="text-sm uppercase tracking-widest font-bold">Metla Guarantee</p>
             <p className="text-xs text-teal-100 mt-1">We reclean for free if unsatisfied.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StatsPanel;