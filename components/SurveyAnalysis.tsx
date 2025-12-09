
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, TooltipProps } from 'recharts';
import { SURVEY_DATA } from '../constants';
import { HardHat, ClipboardList, TrendingUp, DollarSign } from 'lucide-react';

const SurveyAnalysis: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in pb-12">
      {/* Header Insight */}
      <div className="bg-gradient-to-r from-hydra-green/20 to-transparent p-6 rounded-xl border-l-4 border-hydra-green">
        <div className="flex items-center gap-3 mb-2">
            <HardHat className="text-hydra-green" size={28} />
            <h3 className="text-xl font-bold text-white">The "Industrial Athlete" Expansion</h3>
        </div>
        <p className="text-gray-300 italic">
          "Key Investor Insight: We discovered a massive, underserved market in <strong>manual labor trades</strong> (Construction, Roofing, Mail). 
          30% of our respondents are industrial athletes who need safety from fatigue, not just 'energy'."
        </p>
      </div>

      {/* Row 1: Demographics & Buying Habits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Demographics Pie */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl h-[400px] flex flex-col">
            <h4 className="text-white font-bold mb-1 flex items-center gap-2">
                <ClipboardList size={18} className="text-gray-400" /> Respondent Breakdown
            </h4>
            <p className="text-xs text-gray-500 mb-4">Total Respondents: {SURVEY_DATA.total}</p>
            
            <div className="flex-1 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={SURVEY_DATA.demographics}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {SURVEY_DATA.demographics.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                            itemStyle={{ color: '#fff' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                {/* Center Label */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <span className="block text-3xl font-black text-white">30%</span>
                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Trades</span>
                    </div>
                </div>
            </div>
            {/* Legend */}
            <div className="flex flex-wrap gap-3 justify-center text-xs mt-2">
                {SURVEY_DATA.demographics.map((entry, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.fill }}></div>
                        <span className="text-gray-300">{entry.name}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Buying Habits */}
        <div className="flex flex-col gap-6">
            <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl flex-1">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <DollarSign size={18} className="text-green-400" /> Price Sensitivity
                </h4>
                <div className="space-y-4">
                    {SURVEY_DATA.pricing.map((item, idx) => (
                        <div key={idx}>
                            <div className="flex justify-between text-sm mb-1">
                                <span className={idx === 1 ? 'text-white font-bold' : 'text-gray-400'}>{item.price}</span>
                                <span className="text-hydra-green font-mono">{item.percentage}%</span>
                            </div>
                            <div className="w-full bg-black h-2 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full rounded-full ${idx === 1 ? 'bg-hydra-green' : 'bg-gray-700'}`} 
                                    style={{ width: `${item.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-4 text-xs text-gray-500 italic">
                    *Tradespeople spend $3-$5/day on Monster Energy. Our $1.56/stick MSRP ($25/pack) is perceived as high value.
                </p>
            </div>

            <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl flex-1">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <TrendingUp size={18} className="text-hydra-blue" /> Pain Points
                </h4>
                <div className="h-40">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={SURVEY_DATA.painPoints} layout="vertical" margin={{ left: 20 }}>
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" width={80} tick={{ fill: '#9ca3af', fontSize: 10 }} axisLine={false} tickLine={false} />
                            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#111', borderColor: '#333' }} />
                            <Bar dataKey="value" fill="#ef4444" radius={[0, 4, 4, 0]} barSize={12} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
      </div>

      {/* Row 2: Flavor Leaderboard */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-zinc-800">
            <h3 className="text-xl font-bold text-white">Flavor Preference Rankings</h3>
            <p className="text-sm text-gray-400">"Industrial Athletes" prefer refreshing citrus profiles over sweet candy flavors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {SURVEY_DATA.flavors.map((flavor, idx) => (
                <div key={idx} className="p-4 border-b md:border-b-0 border-r border-zinc-800 last:border-r-0 flex items-center gap-4 hover:bg-white/5 transition-colors">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full font-black text-sm ${idx < 3 ? 'bg-white text-black' : 'bg-zinc-800 text-gray-500'}`}>
                        {flavor.rank}
                    </div>
                    <div>
                        <span className="block text-white font-bold text-sm">{flavor.name}</span>
                        <div className="w-24 bg-zinc-800 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div 
                                className="bg-hydra-green h-full" 
                                style={{ width: `${flavor.value}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyAnalysis;
