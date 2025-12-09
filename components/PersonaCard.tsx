import React from 'react';
import { Persona } from '../types';
import { User, Activity, Brain } from 'lucide-react';

const PersonaCard: React.FC<{ persona: Persona }> = ({ persona }) => {
  const getIcon = () => {
    switch (persona.role) {
      case "The D1 Athlete": return <Activity className="text-black" />;
      case "The Diabetic Pro": return <Brain className="text-black" />;
      default: return <User className="text-black" />;
    }
  };

  return (
    <div className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 flex flex-col hover:border-white/30 transition-colors">
      <div className={`h-2 w-full ${persona.color}`}></div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-white">{persona.name}</h3>
            <span className="text-xs text-gray-400 uppercase tracking-wide">{persona.role}</span>
          </div>
          <div className={`p-2 rounded-full ${persona.color}`}>
            {getIcon()}
          </div>
        </div>
        
        <blockquote className="italic text-gray-300 text-sm mb-4 border-l-2 border-gray-600 pl-3">
          "{persona.quote}"
        </blockquote>

        <div className="mt-auto space-y-2">
          <div className="bg-black/30 p-2 rounded text-xs">
            <span className="text-red-400 font-bold">Pain:</span> <span className="text-gray-400">{persona.painPoint}</span>
          </div>
          <div className="bg-black/30 p-2 rounded text-xs">
             <span className="text-green-400 font-bold">Need:</span> <span className="text-gray-400">{persona.need}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;