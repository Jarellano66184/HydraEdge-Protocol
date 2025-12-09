
import React, { useState } from 'react';
import { Check, X, Zap, ShieldAlert, ChevronDown } from 'lucide-react';

interface Competitor {
  id: string;
  name: string;
  color: string; // Tailwind color class for branding
  marketPerception: string;
  verdict: string;
  flaws: {
    title: string;
    desc: string;
  }[];
  hydraFix: {
    title: string;
    desc: string;
  };
  stats: {
    label: string;
    them: string;
    us: string;
  }[];
}

const COMPETITORS: Competitor[] = [
  {
    id: 'gatorade',
    name: 'Gatorade',
    color: 'bg-orange-500',
    marketPerception: "The 1960s Incumbent",
    verdict: "Outdated Science",
    flaws: [
      { title: "Insulin Spikes", desc: "Uses High Fructose Corn Syrup, causing a crash after the initial rush." },
      { title: "Artificial Dyes", desc: "Contains Red 40, Yellow 5, and Blue 1 (linked to hyperactivity)." },
      { title: "Zero Brain Fuel", desc: "Hydrates the muscles but ignores the mind completely." }
    ],
    hydraFix: {
      title: "Clean Energy & Focus",
      desc: "We use Cane Sugar (Performance) or Allulose (Zero) for stable energy, plus Lion's Mane for mental clarity."
    },
    stats: [
      { label: "Sugar Source", them: "HFCS / Refined", us: "Cane / Allulose" },
      { label: "Nootropics", them: "None", us: "Lion's Mane + Cascara" },
      { label: "Dyes", them: "Artificial", us: "None" }
    ]
  },
  {
    id: 'liquidiv',
    name: 'Liquid IV',
    color: 'bg-blue-500',
    marketPerception: "The Hydration Standard",
    verdict: "Incomplete Formula",
    flaws: [
      { title: "Sugar Dependent", desc: "Relies on 11g+ of sugar just to trigger hydration mechanics." },
      { title: "Salty Taste", desc: "Heavy sodium profile creates a thick, syrupy mouthfeel." },
      { title: "No Cognitive Support", desc: "Great for a hangover, useless for studying or focus." }
    ],
    hydraFix: {
      title: "Amino-Transport",
      desc: "We match their hydration speed using Amino Acids (L-Alanine), reducing the need for excess sugar."
    },
    stats: [
      { label: "Function", them: "Hydration Only", us: "Hydration + Focus" },
      { label: "Glycemic Impact", them: "High Spike", us: "Balanced" },
      { label: "Mouthfeel", them: "Syrupy", us: "Light & Crisp" }
    ]
  },
  {
    id: 'prime',
    name: 'Prime',
    color: 'bg-red-600',
    marketPerception: "The Viral Hype",
    verdict: "Marketing > Science",
    flaws: [
      { title: "Ineffective Electrolytes", desc: "Critically low Sodium (~10mg). It won't replace what you sweat out." },
      { title: "Gut Health Risk", desc: "Relies on Sucralose, which can disrupt gut microbiome." },
      { title: "Not a Sports Drink", desc: "It's essentially a flavored soda alternative, not a performance tool." }
    ],
    hydraFix: {
      title: "Clinical Formulation",
      desc: "We use the correct 3:1 Sodium-to-Potassium ratio required for actual muscle contraction and cramping prevention."
    },
    stats: [
      { label: "Sodium", them: "~10mg (Too Low)", us: "Clinical Dose" },
      { label: "Sweetener", them: "Sucralose", us: "Monk Fruit / Allulose" },
      { label: "Purpose", them: "Viral Fame", us: "Human Performance" }
    ]
  },
  {
    id: 'bodyarmor',
    name: 'BodyArmor',
    color: 'bg-yellow-500',
    marketPerception: "The 'Natural' Option",
    verdict: "Basically Juice",
    flaws: [
      { title: "Sugar Bomb", desc: "Contains upwards of 21g of sugar per bottle." },
      { title: "Thick Texture", desc: "Coconut water concentrate makes it heavy in the stomach during cardio." },
      { title: "Imbalanced", desc: "Too much Potassium, not enough Sodium for heavy sweaters." }
    ],
    hydraFix: {
      title: "Light & Effective",
      desc: "HydraEdge provides the benefits of coconut water without the sugar load or heavy texture."
    },
    stats: [
      { label: "Sugar Load", them: "Very High (21g+)", us: "Optimal (11g) or Zero" },
      { label: "Texture", them: "Heavy/Thick", us: "Water-Like" },
      { label: "Balance", them: "Potassium Heavy", us: "Sodium Balanced" }
    ]
  },
  {
    id: 'dripdrop',
    name: 'Drip Drop',
    color: 'bg-indigo-500',
    marketPerception: "The Medical Solution",
    verdict: "For Patients, Not Pros",
    flaws: [
      { title: "Medicinal Taste", desc: "Designed for dehydration sickness, tastes like medicine." },
      { title: "Zero Nootropics", desc: "Does nothing for mental clarity or reaction time." },
      { title: "Old School", desc: "Lacks the lifestyle appeal for modern athletes." }
    ],
    hydraFix: {
      title: "Flow State",
      desc: "We treat hydration as a performance enhancer, not a sick-day remedy. We add the cognitive edge."
    },
    stats: [
      { label: "Target", them: "Sick Patients", us: "High Performers" },
      { label: "Cognitive", them: "None", us: "Neuro-Stack" },
      { label: "Taste", them: "Medicinal", us: "Refreshing" }
    ]
  }
];

const CompetitiveComparison: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(COMPETITORS[0].id);
  const activeComp = COMPETITORS.find(c => c.id === selectedId) || COMPETITORS[0];

  return (
    <div className="w-full animate-fade-in space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-hydra-green/20 p-3 rounded-full text-hydra-green">
            <Zap size={28} />
        </div>
        <div>
            <h3 className="text-3xl font-bold text-white">The Competitive Gap</h3>
            <p className="text-lg text-gray-400">Head-to-Head Breakdown</p>
        </div>
      </div>

      {/* Top Brand Selector Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {COMPETITORS.map((comp) => (
          <button
            key={comp.id}
            onClick={() => setSelectedId(comp.id)}
            className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all h-24 relative overflow-hidden group ${
              selectedId === comp.id
                ? 'bg-zinc-800 border-hydra-green shadow-[0_0_20px_rgba(204,255,0,0.15)] ring-1 ring-hydra-green'
                : 'bg-zinc-900/50 border-white/10 hover:bg-zinc-800 hover:border-white/20'
            }`}
          >
            <span className={`text-sm font-bold uppercase tracking-wider block mb-1 z-10 ${selectedId === comp.id ? 'text-gray-400' : 'text-gray-600'}`}>
               Vs.
            </span>
            <span className={`font-black text-xl z-10 ${selectedId === comp.id ? 'text-white' : 'text-gray-400'}`}>
               {comp.name}
            </span>
            
            {/* Active Indicator Arrow */}
            {selectedId === comp.id && (
               <div className="absolute bottom-0 text-hydra-green">
                  <ChevronDown size={20} />
               </div>
            )}
            
            {/* Color accent bar */}
            <div className={`absolute top-0 left-0 w-full h-1 ${comp.color} opacity-70`}></div>
          </button>
        ))}
      </div>

      {/* Detailed Battle Card */}
      <div className="w-full bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col relative shadow-2xl">
         
         {/* Header */}
         <div className="bg-black/60 border-b border-white/5 p-8 md:p-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
            <div>
               <div className="flex items-center gap-3 mb-2">
                  <span className="text-gray-400 text-base font-mono uppercase tracking-widest">Matchup Analysis</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-white flex flex-wrap items-center gap-4 leading-tight">
                  HydraEdge <span className="text-gray-600 text-3xl font-medium">vs.</span> <span className={activeComp.id === 'gatorade' ? 'text-orange-500' : activeComp.id === 'liquidiv' ? 'text-blue-400' : activeComp.id === 'prime' ? 'text-red-500' : 'text-white'}>{activeComp.name}</span>
               </h2>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 px-8 py-4 rounded-xl text-left xl:text-right w-full xl:w-auto">
               <span className="block text-sm text-red-400 font-bold uppercase tracking-wider mb-1">The Verdict</span>
               <span className="text-white font-black text-2xl md:text-3xl uppercase">{activeComp.verdict}</span>
            </div>
         </div>

         <div className="p-8 md:p-10 grid grid-cols-1 xl:grid-cols-2 gap-12 flex-1">
            
            {/* Left: The Flaws */}
            <div className="space-y-8">
               <h4 className="flex items-center gap-3 text-red-400 font-bold uppercase tracking-widest text-sm md:text-base border-b border-red-500/20 pb-4">
                  <ShieldAlert size={24} /> The Old Way
               </h4>
               <div className="space-y-6">
                  {activeComp.flaws.map((flaw, i) => (
                     <div key={i} className="bg-red-500/5 border-l-4 border-red-500/40 pl-6 py-4 rounded-r-lg">
                        <strong className="block text-white text-lg md:text-xl font-bold mb-2">{flaw.title}</strong>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">{flaw.desc}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Right: The Fix */}
            <div className="space-y-8">
               <h4 className="flex items-center gap-3 text-hydra-green font-bold uppercase tracking-widest text-sm md:text-base border-b border-hydra-green/20 pb-4">
                  <Zap size={24} /> The HydraEdge Advantage
               </h4>
               
               <div className="bg-gradient-to-br from-hydra-green/10 to-transparent p-8 rounded-2xl border border-hydra-green/20 mb-8 shadow-lg shadow-hydra-green/5">
                  <h5 className="text-white font-bold mb-3 text-2xl md:text-3xl">{activeComp.hydraFix.title}</h5>
                  <p className="text-gray-200 text-lg leading-relaxed">
                     {activeComp.hydraFix.desc}
                  </p>
               </div>

               {/* Head to Head Stats */}
               <div className="bg-black/30 rounded-xl overflow-hidden border border-white/5">
                  {activeComp.stats.map((stat, i) => (
                     <div key={i} className="flex text-sm md:text-base border-b border-white/5 last:border-0 min-h-[60px]">
                        <div className="w-1/3 p-4 text-gray-400 font-bold uppercase bg-white/5 flex items-center">{stat.label}</div>
                        <div className="w-1/3 p-4 text-gray-400 border-r border-white/5 flex items-center gap-3">
                           <X size={16} className="text-red-500 shrink-0" /> {stat.them}
                        </div>
                        <div className="w-1/3 p-4 text-white font-bold flex items-center gap-3 bg-hydra-green/5">
                           <Check size={16} className="text-hydra-green shrink-0" /> {stat.us}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CompetitiveComparison;
