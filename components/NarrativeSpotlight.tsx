
import React from 'react';
import { Quote, Sparkles, User, Heart } from 'lucide-react';
import { NarrativeBeat } from '../types';

interface Props {
  beat: NarrativeBeat;
}

const NarrativeSpotlight: React.FC<Props> = ({ beat }) => {
  const getIcon = () => {
    switch (beat.type) {
      case 'founder': return <User className="text-hydra-green" size={24} />;
      case 'testimonial': return <Heart className="text-hydra-pink" size={24} />;
      case 'vision': return <Sparkles className="text-hydra-blue" size={24} />;
      default: return <Quote className="text-white" size={24} />;
    }
  };

  const getTheme = () => {
    switch (beat.type) {
      case 'founder': return 'border-hydra-green/30 from-hydra-green/5 to-transparent';
      case 'testimonial': return 'border-hydra-pink/30 from-hydra-pink/5 to-transparent';
      case 'vision': return 'border-hydra-blue/30 from-hydra-blue/5 to-transparent';
      default: return 'border-white/20 from-white/5 to-transparent';
    }
  };

  return (
    <div className={`relative rounded-xl border p-8 bg-gradient-to-br ${getTheme()} animate-fade-in my-8`}>
      <div className="absolute -top-4 left-6 bg-black p-2 rounded-full border border-white/10">
        {getIcon()}
      </div>
      
      <div className="relative z-10">
        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
          {beat.type === 'founder' && "The Founder's Story"}
          {beat.type === 'testimonial' && "Voice of the Customer"}
          {beat.type === 'vision' && "The Vision"}
        </h4>
        
        <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed font-serif">
          "{beat.content}"
        </p>
        
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px w-8 bg-white/20"></div>
          <div>
            <p className="text-white font-bold text-sm">{beat.author}</p>
            {beat.role && <p className="text-gray-500 text-xs">{beat.role}</p>}
          </div>
        </div>
      </div>
      
      {/* Decorative Quote Mark */}
      <div className="absolute top-6 right-6 opacity-5 pointer-events-none">
        <Quote size={80} className="text-white fill-white" />
      </div>
    </div>
  );
};

export default NarrativeSpotlight;
