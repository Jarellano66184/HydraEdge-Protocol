import React from 'react';
import { PRODUCT_LINES } from '../constants';
import { ShoppingBag, Star, Zap, Check } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <div className="bg-hydra-green p-2 rounded-full text-black">
          <ShoppingBag size={24} />
        </div>
        <div>
           <h3 className="text-2xl font-bold text-white">Product Architecture</h3>
           <p className="text-gray-400 text-sm">Targeted Solutions for Every Performer</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRODUCT_LINES.map((line) => (
          <div 
            key={line.id} 
            className={`relative rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] ${line.theme.bg} ${line.theme.border}`}
          >
            {/* Top Badge */}
            <div className="absolute top-0 right-0 p-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${line.id === 'zero' ? 'bg-zinc-900 text-white' : 'bg-black/80 backdrop-blur text-white'}`}>
                {line.label}
              </span>
            </div>

            <div className="p-8 h-full flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <h4 className={`text-3xl font-black mb-2 tracking-tight ${line.theme.text}`}>
                  {line.title}
                </h4>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${line.id === 'zero' ? 'bg-zinc-300 text-zinc-800' : 'bg-white/20 text-white'}`}>
                    Concept
                  </span>
                  <span className={`text-lg italic font-serif ${line.theme.text} opacity-90`}>
                    "{line.concept}"
                  </span>
                </div>
              </div>

              {/* Key Feature */}
              <div className={`mb-8 p-4 rounded-lg ${line.id === 'zero' ? 'bg-white border border-zinc-200' : 'bg-black/20 border border-white/5'}`}>
                 <div className="flex items-start gap-3">
                   <Zap className={`mt-1 shrink-0 ${line.id === 'zero' ? 'text-hydra-blue' : 'text-hydra-green'}`} size={18} />
                   <div>
                     <p className={`text-xs uppercase tracking-wide font-bold mb-1 ${line.theme.text} opacity-60`}>Key Feature</p>
                     <p className={`font-medium ${line.theme.text} leading-tight`}>
                       {line.keyFeature}
                     </p>
                   </div>
                 </div>
              </div>

              {/* Flavor List */}
              <div className="mt-auto">
                <p className={`text-xs uppercase tracking-wide font-bold mb-3 ${line.theme.text} opacity-60 flex items-center gap-2`}>
                   <Star size={12} />
                   {line.id === 'variety' ? 'Pack Types' : '8 Available Flavors'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {line.flavors.map((flavor, idx) => (
                    <span 
                      key={idx} 
                      className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium border ${
                        line.id === 'zero' 
                          ? 'bg-white border-zinc-200 text-zinc-700' 
                          : 'bg-white/5 border-white/10 text-gray-200 hover:bg-white/10'
                      }`}
                    >
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative Bar */}
            <div className={`h-2 w-full ${line.theme.accent}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;