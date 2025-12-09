
import React from 'react';
import { Activity, Brain, Shield, Zap, Droplet, AlertCircle } from 'lucide-react';

const DiabeticBenefits: React.FC = () => {
  const benefits = [
    {
      title: "Blood Sugar Stabilization",
      subtitle: "The Anti-Spike Effect",
      ingredient: "Allulose (2,000mg)",
      icon: Activity,
      mechanism: "Stimulates GLP-1 (satiety hormone).",
      impact: "Slows gastric emptying & prevents spikes.",
      color: "text-hydra-blue",
      bg: "bg-hydra-blue/10 border-hydra-blue/20"
    },
    {
      title: "Nerve Protection",
      subtitle: "Combating Neuropathy",
      ingredient: "Lion's Mane (750mg)",
      icon: Brain,
      mechanism: "Boosts NGF (Nerve Growth Factor) & inhibits alpha-glucosidase.",
      impact: "Repairs peripheral nerves & blocks carb absorption.",
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "Insulin Sensitivity",
      subtitle: "Fighting Resistance",
      ingredient: "Magnesium Malate (75mg)",
      icon: Zap,
      mechanism: "Unlocks cells for insulin uptake.",
      impact: "Restores sensitivity & efficient sugar absorption.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10 border-yellow-500/20"
    },
    {
      title: "Vascular Defense",
      subtitle: "Oxidative Stress",
      ingredient: "Cascara Extract (100mg)",
      icon: Shield,
      mechanism: "Polyphenols hunt free radicals.",
      impact: "Protects blood vessels from high-sugar damage.",
      color: "text-red-400",
      bg: "bg-red-500/10 border-red-500/20"
    },
    {
      title: "Rapid Hydration",
      subtitle: "No Glucose Needed",
      ingredient: "L-Alanine & L-Glutamine",
      icon: Droplet,
      mechanism: "Sodium-Amino Acid Cotransport.",
      impact: "Instant hydration speed without insulin spikes.",
      color: "text-hydra-green",
      bg: "bg-hydra-green/10 border-hydra-green/20"
    }
  ];

  return (
    <div className="mt-12 animate-fade-in">
      <div className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/10 bg-white/5">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Activity className="text-hydra-blue" />
            Metabolic Mechanics: The Diabetic Advantage
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Why HydraEdge Zero is functionally beneficial, not just "safe".
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          {benefits.map((item, idx) => (
            <div key={idx} className={`p-4 rounded-lg border ${item.bg}`}>
              <div className="flex justify-between items-start mb-3">
                <item.icon className={item.color} size={24} />
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-black/40 ${item.color}`}>
                  {item.ingredient}
                </span>
              </div>
              <h4 className="font-bold text-white text-lg leading-tight mb-1">{item.title}</h4>
              <p className="text-xs text-gray-400 uppercase font-semibold mb-3">{item.subtitle}</p>
              
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-500 text-xs block">Mechanism:</span>
                  <p className="text-gray-300 leading-tight">{item.mechanism}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-xs block">Benefit:</span>
                  <p className="text-white font-medium leading-tight">{item.impact}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Medical Note Card */}
          <div className="p-4 rounded-lg border border-hydra-pink/20 bg-hydra-pink/5 flex flex-col justify-center">
             <div className="flex items-center gap-2 mb-2 text-hydra-pink">
                <AlertCircle size={24} />
                <span className="font-bold uppercase tracking-wider text-xs">Medical Note</span>
             </div>
             <p className="text-sm text-gray-300 italic leading-relaxed">
               "Because this formula is so effective at managing blood sugar, Type 1 Diabetics or those on insulin should monitor their levels, as they might find they need less insulin than usual when using HydraEdge Zero regularly."
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiabeticBenefits;
