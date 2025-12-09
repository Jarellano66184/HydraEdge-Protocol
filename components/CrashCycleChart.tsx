
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceArea } from 'recharts';

const data = [
  { time: '0m', Competitor: 100, HydraEdge: 100, label: 'Consumption' },
  { time: '30m', Competitor: 180, HydraEdge: 130, label: 'Peak' },
  { time: '60m', Competitor: 120, HydraEdge: 135, label: 'Stable' },
  { time: '90m', Competitor: 60, HydraEdge: 132, label: 'Crash' },
  { time: '120m', Competitor: 40, HydraEdge: 128, label: 'Brain Fog' },
  { time: '150m', Competitor: 50, HydraEdge: 125, label: 'Recovery' },
  { time: '180m', Competitor: 60, HydraEdge: 120, label: 'Baseline' },
];

const CrashCycleChart: React.FC = () => {
  return (
    <div className="bg-zinc-900/80 p-6 rounded-xl border border-white/5 h-[350px] w-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
         <div>
            <h3 className="text-white font-bold text-lg">Bio-Availability Analysis</h3>
            <p className="text-xs text-gray-400">Glucose Response Curve (3 Hours)</p>
         </div>
         <div className="flex gap-4 text-xs">
            <div className="flex items-center gap-1.5">
               <div className="w-2 h-2 rounded-full bg-red-500"></div>
               <span className="text-gray-300">Sugar/Caffeine</span>
            </div>
            <div className="flex items-center gap-1.5">
               <div className="w-2 h-2 rounded-full bg-hydra-green"></div>
               <span className="text-white font-bold">HydraEdge</span>
            </div>
         </div>
      </div>
      
      <div className="flex-1 w-full text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis 
               dataKey="time" 
               stroke="#666" 
               tick={{ fill: '#888' }}
               axisLine={false}
               tickLine={false}
            />
            <YAxis 
               stroke="#666" 
               domain={[0, 200]} 
               hide={true} // Hide numbers for cleaner look
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#111', borderColor: '#333', borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
              labelStyle={{ color: '#888', marginBottom: '0.5rem' }}
            />
            
            {/* The "Crash" Zone */}
            <ReferenceArea y1={0} y2={70} x1="90m" x2="180m" fill="rgba(255, 0, 0, 0.1)" strokeOpacity={0.3} />
            
            <Line 
               type="monotone" 
               dataKey="Competitor" 
               stroke="#ef4444" 
               strokeWidth={2} 
               dot={{ r: 4, fill: '#ef4444' }} 
               activeDot={{ r: 6 }} 
               animationDuration={2000}
            />
            <Line 
               type="monotone" 
               dataKey="HydraEdge" 
               stroke="#ccff00" 
               strokeWidth={3} 
               dot={{ r: 4, fill: '#ccff00' }} 
               activeDot={{ r: 6 }}
               strokeDasharray="5 5" // Dashed to indicate flow
               animationDuration={2000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CrashCycleChart;
