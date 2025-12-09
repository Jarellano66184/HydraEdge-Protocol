
import React from 'react';
import { MASTER_INGREDIENTS } from '../constants';
import { Brain, Droplet, Flame, Heart, Leaf } from 'lucide-react';

const IngredientShowcase: React.FC = () => {
  const getIcon = (category: string) => {
    switch(category) {
      case 'Cognitive': return <Brain className="text-purple-400" size={20} />;
      case 'Hydration': return <Droplet className="text-hydra-blue" size={20} />;
      case 'Fuel': return <Flame className="text-orange-400" size={20} />;
      case 'Wellness': return <Heart className="text-red-400" size={20} />;
      default: return <Leaf className="text-hydra-green" size={20} />;
    }
  };

  const getBorderColor = (category: string) => {
    switch(category) {
      case 'Cognitive': return 'border-purple-500/30';
      case 'Hydration': return 'border-hydra-blue/30';
      case 'Fuel': return 'border-orange-500/30';
      case 'Wellness': return 'border-red-500/30';
      default: return 'border-hydra-green/30';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
           <h3 className="text-2xl font-bold text-white">The Master Ingredient List</h3>
           <p className="text-gray-400 text-sm">Sourcing & Science (Scientific Validation)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MASTER_INGREDIENTS.map((ing, idx) => (
          <div 
            key={idx} 
            className={`bg-zinc-900/50 backdrop-blur rounded-lg p-5 border ${getBorderColor(ing.category)} hover:bg-zinc-900 transition-all group`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                {getIcon(ing.category)}
                <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">{ing.category}</span>
              </div>
              {ing.dosage && (
                <span className="bg-white/10 text-white text-xs px-2 py-1 rounded font-mono">
                  {ing.dosage}
                </span>
              )}
            </div>

            <h4 className="text-lg font-bold text-white mb-4 group-hover:text-hydra-green transition-colors">{ing.name}</h4>

            <div className="space-y-3 text-sm">
              <div>
                 <span className="block text-xs text-gray-500 uppercase font-semibold">Source</span>
                 <p className="text-gray-300 leading-tight">{ing.source}</p>
              </div>
              
              {ing.activeCompounds && (
                 <div>
                    <span className="block text-xs text-gray-500 uppercase font-semibold">Active Compounds</span>
                    <p className="text-gray-300 leading-tight">{ing.activeCompounds}</p>
                 </div>
              )}

              <div className="grid grid-cols-1 gap-2 pt-2 border-t border-white/5 mt-3">
                <div>
                   <span className="text-gray-500 text-xs">Function:</span>
                   <p className="text-white font-medium">{ing.function}</p>
                </div>
                <div>
                   <span className="text-gray-500 text-xs">Benefit:</span>
                   <p className="text-hydra-green/90">{ing.benefit}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientShowcase;
