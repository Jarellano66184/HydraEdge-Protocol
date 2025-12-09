
import React from 'react';
import { Leaf, RefreshCw, Factory, Coffee, Trash2, ArrowRight } from 'lucide-react';

const SustainabilityCycle: React.FC = () => {
  return (
    <div className="relative bg-zinc-900 border border-hydra-green/20 rounded-xl p-8 overflow-hidden">
       {/* Background decorative ring */}
       <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="w-[80%] aspect-square rounded-full border-[20px] border-hydra-green"></div>
       </div>

       <h3 className="text-center text-white font-bold mb-8 uppercase tracking-widest text-sm relative z-10">The Upcycling Loop</h3>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          {/* Step 1: Waste Generation */}
          <div className="flex flex-col items-center text-center group">
             <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-red-500/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Coffee className="text-red-400" size={28} />
             </div>
             <h4 className="text-red-400 font-bold mb-1">1. The Problem</h4>
             <p className="text-xs text-gray-400 max-w-[150px]">Coffee farms discard the fruit skin (Cascara) into rivers, creating acidic pollution.</p>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
             <ArrowRight className="text-gray-600 animate-pulse" size={32} />
          </div>

          {/* Step 2: Rescue */}
          <div className="flex flex-col items-center text-center group">
             <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-hydra-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                <RefreshCw className="text-hydra-green" size={28} />
             </div>
             <h4 className="text-hydra-green font-bold mb-1">2. HydraEdge Rescue</h4>
             <p className="text-xs text-gray-400 max-w-[150px]">We purchase this "waste", providing farmers extra income and preventing pollution.</p>
          </div>
          
           {/* Arrow mobile only */}
           <div className="md:hidden flex items-center justify-center rotate-90 my-4">
             <ArrowRight className="text-gray-600" size={24} />
          </div>

       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-12 relative z-10">
           {/* Spacer to center the bottom row roughly */}
           <div className="hidden md:block"></div>

           {/* Arrow pointing down/left visually handled by layout or mental model, simplified here */}
           
           {/* Step 3: Transformation */}
           <div className="flex flex-col items-center text-center group md:-mt-4">
              <div className="hidden md:flex mb-4 text-gray-600 justify-center rotate-90">
                <ArrowRight size={24} />
              </div>

             <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-hydra-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Factory className="text-hydra-blue" size={28} />
             </div>
             <h4 className="text-hydra-blue font-bold mb-1">3. Wellness</h4>
             <p className="text-xs text-gray-400 max-w-[150px]">Extracted BDNF & Antioxidants fuel human performance. Waste becomes value.</p>
           </div>

           <div className="hidden md:block"></div>
       </div>
    </div>
  );
};

export default SustainabilityCycle;
